import styles from "@/app/page.module.css"
import Link from "next/link"

export default function SinglePostLayout({ children }) {
    return (
        <div className={styles.main}>

            {children}
            <Link href={"/pages/Form"} className={styles.primary}>Back</Link>
        </div>
    )
}