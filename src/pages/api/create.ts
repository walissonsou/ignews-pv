import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import { stripe } from '../../services/stripe'


export default async (req: NextApiRequest, res: NextApiResponse) => {
    // NÃO É UMA ROTA BACKEND
    // SÓ ESTÁ DISPONÍVEL COM REQUISIÇÃO POST

    if (req.method === 'POST') {

        // para criar o customer, utilizaremos o cookies.
        // para isso utilizaremos o getSession do next-auth/client.

        const session = await getSession({ req })
        const stripeCustomer = await stripe.customers.create({
            email: session.user.email,

        })

        const stripeCheckoutSession = await stripe.checkout.sessions.create({
            customer: stripeCustomer.id, // É quem está comprando, não pode ser apenas um ID do cliente.   
            payment_method_types: ['card'], // modo de pagamento
            billing_address_collection: 'required', // se o usuario tem que preenche o endereço ou nao, required obriga o cliente preencher
            line_items: [

                { price: 'price_1K2m2XEf9hol8EYYVpeOgV1r', quantity: 1 } // id do preço ( stripe) e quantidade.
            ],
            mode: 'subscription',
            allow_promotion_codes: true,
            success_url: process.env.SUCCESS_STRIPE_URL,
            cancel_url: process.env.CANCEL_STRIPE_URL

        })

        return res.status(200).json({ sessionId: stripeCheckoutSession.id})
    } else {
        res.setHeader('Allow', 'POST') // o método que essa requisição aceita é apenas post
        res.status(405).end('Method not allowed') // d evolvendo um erro
    }
}