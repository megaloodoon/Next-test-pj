import styles from "@/app/page.module.css"
import { redirect } from "next/navigation"

export default async function SinglePost({ params }) {

    const id = (await params).id
    const data = await fetch(`https://674dc5dc635bad45618cb850.mockapi.io/api/Posts/${id}`)
    let post = await data.json()

    if (data.ok) {
        return (
            <div className={styles.mainpost}>
                <img src={post.image} />
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <h3>Written by:{post.auther}</h3>
            </div>
        )
    } else {
        redirect("/pages/Form")

    }
}