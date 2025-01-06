import styles from '@/app/Loading.module.css';

export default function Loading() {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.spinner}></div>
           
            <h1>Loading Page</h1>
        </div>
    );
}
