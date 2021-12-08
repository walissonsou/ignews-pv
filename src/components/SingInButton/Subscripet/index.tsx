import { signIn, useSession } from 'next-auth/react';
import { api } from '../../../services/axios'
import { getStripeJs } from '../../../services/stripe-js';
import styles from './styles.module.scss'

interface SubsProps {
    priceId: string;
}
export function SubscribeButton({priceId}: SubsProps) {
    const { data: session } = useSession();

    async function HandleSubscribe (){
        if(!session) {
            signIn()
            return;
        }       

        try {
            const response = await api.post('/create')

            const { sessionId } = response.data;

            const stripe = await getStripeJs()

            await stripe.redirectToCheckout({sessionId: sessionId})

        } catch (err) {
            alert(err.message);
        }
    }
    return (
        <button 
        type="button"
        className={styles.SubscribeButton}
        onClick={HandleSubscribe}
        >
            Matricule-se já
        </button>
    )
}