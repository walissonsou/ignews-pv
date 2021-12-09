import { NextApiRequest, NextApiResponse } from "next";

import { Readable } from 'stream'
import Stripe from "stripe";
import { stripe } from '../../services/stripe'
import { saveSubscription } from "./_lib/manageSubscription";

async function buffer(readable: Readable) {
    const chunks = [];

    for await (const chunk of readable) {
        chunks.push(
            typeof chunk === "string" ? Buffer.from(chunk) : chunk
        )
    }
    return Buffer.concat(chunks)
}

export const config = {
    api: {
        bodyParser: false
    }
}

const relevantEvents = new Set(["checkout.session.completed"]);

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const buf = await buffer(req); // aqui tem todos os dados da requisição
        const secret = req.headers['stripe-signature']; // verifica se os valores do ambiente bate 

        let event: Stripe.Event;

        try {
            event = stripe.webhooks.constructEvent(buf, secret, process.env.STRIPE_WEBHOOK_SECRET);
            // construir nossa variavel de eventos, os mesmos que passam no cmd, se conseguir, ok, se nao vai pro catch
        } catch (err) {
            
            return res.status(400).send(`Webhook error: ${err.message}`);
        }

        // depois que criamos o nosso event, iremos fazer o que quisermos com ele
        const { type } = event;

        if (relevantEvents.has(type)) {
            try {
                switch (type) {
                    case 'checkout.session.completed':
                        const checkoutSession = event.data.object as Stripe.Checkout.Session
                        await saveSubscription(
                            checkoutSession.subscription.toString(),
                            checkoutSession.customer.toString()
                        )
                        break;
                    default:
                        throw new Error('Unhandled event.')
                }
            } catch(err) {
                console.log(err)
                return res.status(400).json({ error: 'Webhook handler failed' })
              
            }
            // fazer algo
            console.log('Evento recebido', event)
        }
        return res.json({ received: true })
    } else {
        res.setHeader('Allow', 'POST') // o método que essa requisição aceita é apenas post
        res.status(405).end('Method not allowed') // devolvendo um erro
    }
}