import { NextApiRequest, NextApiResponse } from 'next'

import { getSession } from 'next-auth/react'
import { stripe } from '../../services/stripe'

import { query as q } from 'faunadb'
import { fauna } from '../../services/fauna'
export default async (req: NextApiRequest, res: NextApiResponse) => {
    // NÃO É UMA ROTA BACKEND
    // SÓ ESTÁ DISPONÍVEL COM REQUISIÇÃO POST

    type User = {
        ref: {
            id: string;
        }
        data: {
            stripe_customer_id: string;
        }

    }

    if (req.method === 'POST') {

        // para criar o customer, utilizaremos o cookies.
        // para isso utilizaremos o getSession do next-auth/client.

        const session = await getSession({ req })
        const user = await fauna.query<User>(
            q.Get(
                q.Match(
                    q.Index('user_by_emails'),
                    q.Casefold(session.user.email)
                )
            )
        )
        let stripeCustomerId = user.data.stripe_customer_id

        if(!stripeCustomerId) {
        const stripeCustomer = await stripe.customers.create({
                    email: session.user.email,
        })
        await fauna.query(
            q.Update(
                q.Ref(q.Collection('usuarios'), user.ref.id), 
                        {
                    data: {
                        stripe_customer_id: stripeCustomer 
                    }
                }
            )
        )
        stripeCustomerId = stripeCustomer.id
        }


        const stripeCheckoutSession = await stripe.checkout.sessions.create({
            customer: stripeCustomerId, // É quem está comprando, não pode ser apenas um ID do cliente.   
            payment_method_types: ['card'], // modo de pagamento
            billing_address_collection: 'required', // se o usuario tem que preencher o endereço ou nao, required obriga o cliente preencher
            line_items: [

                { price: 'price_1K2m2XEf9hol8EYYVpeOgV1r', quantity: 1 } // id do preço ( stripe) e quantidade.
            ],
            mode: 'subscription',
            allow_promotion_codes: true,
            success_url: process.env.SUCCESS_STRIPE_URL,
            cancel_url: process.env.CANCEL_STRIPE_URL

        })

        return res.status(200).json({ sessionId: stripeCheckoutSession.id })
    } else {
        res.setHeader('Allow', 'POST') // o método que essa requisição aceita é apenas post
        res.status(405).end('Method not allowed') // d evolvendo um erro
    }
}