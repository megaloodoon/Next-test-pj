import styles from "@/app/page.module.css"
import Loading from "@/app/loading"

export default function PostsLayout ({children}){
    return(
        <main className={styles.page}>
            <h2 className={styles.title}>Our Latest Blog</h2>
            {children}
        </main>
    )
}