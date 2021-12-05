import { FaProductHunt } from 'react-icons/fa'
import styles from './styles.module.scss'

interface SubsProps {
    priceId: string;
}
export function SubscribeButton({priceId}: SubsProps) {
    return (
        <button 
        type="button"
        className={styles.SubscribeButton}
        
        >
            Matricule-se já
        </button>
    )
}