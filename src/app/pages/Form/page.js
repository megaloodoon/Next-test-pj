// import styles from "@/app/page.module.css"
// import Link from "next/link"

// export default function Posts() {
//     const data = await fetch("https://674dc5dc635bad45618cb850.mockapi.io/api/Posts")
//     let posts = await data.json()

//     return (
//         <div className={styles.posts}>
//             {Posts.map((post) => {
//                 return <div key={post.id} className={styles.posts}>
//                     <div className={styles.postImg}>
//                         <img src={post.image} className={styles.img}></img>
//                     </div>
//                     <div className={styles.postContnt}>
//                         <h3>{post.title}</h3>
//                         <p className={styles.des}>{post.body}</p>
//                         <Link className={styles.primary} href={`/post/${post.id}`}>
//                             Read More
//                         </Link>
//                     </div>
//                 </div>
//             })}
//         </div>
//     )
// }


import styles from "@/app/page.module.css";
import Link from "next/link";

export default async function Posts() {
    // واکشی داده‌ها
    const data = await fetch("https://674dc5dc635bad45618cb850.mockapi.io/api/Posts");
    const posts = await data.json();

    return (
        <div className={styles.postsContainer}>
            {posts.map((post) => {
                return (
                    <div key={post.id} className={styles.post}>
                        <div className={styles.postImg}>
                            <img src={post.image} alt={post.title} className={styles.img} />
                        </div>
                        <div className={styles.postContent}>
                            <h3>{post.title}</h3>
                            <p className={styles.description}>{post.body}</p>
                            <Link className={styles.primary} href={`/pages/Form/${post.id}`}>
                                Read More
                            </Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
