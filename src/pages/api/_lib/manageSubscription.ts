import { fauna } from "../../../services/fauna";
import { query as q } from 'faunadb';
import { stripe } from "../../../services/stripe";


export async function saveSubscription(customerId: string, subscriptionId: string) {
    // Buscar o usuário no banco do FaunaDB com o Id { customerId} data.stripe_customer_Id
    // precisamos criar um indice no fauna stripe_customer_id
    //Depois salvar os dados da suvscription no FaunaDB
    const userRef  = await fauna.query (
        q.Select(
            'ref',
            q.Get(
                q.Match(
                    q.Index('user_by_stripe_customer_id'),
                        customerId
                )
            )
        )
    )
    // agora a subscription todos os dados

    const subscription = await stripe.subscriptions.retrieve(subscriptionId);

    const subscriptionData = {
        id: subscription.id,
        userId: userRef,
        status: subscription.status,
        price_id: subscription.items.data[0].price.id

    }
    console.log(subscriptionData)

    await fauna.query(
        q.Create(
            q.Collection('subscriptions'),
            { data: subscriptionData }
        )
    ).catch(err => {
        console.log(err)
    })
}