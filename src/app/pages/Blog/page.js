// // import styles from "@/app/page.module.css"
// // import TV from "@/app/Image/TV.jpg"
// // import Radio from "@/app/Image/Radio.jpg"
// // import Socialmedia from "@/app/Image/Socialmedia.jpg"


// // export default function Blog() {
// //     const post = [
// //         {
// //             title: "What is  radio?",
// //             description: "Have you ever Listen to a radio chanell?",
// //             Body: "the wireless transmission and reception of electric impulses or signals by means of electromagnetic waves. b. : the use of these waves for the wireless transmission of electric impulses into which sound is converted. 2. : a radio message.",
// //             img: Radio ,
// //             thumbnail: "",
// //             id: "1"
// //         }
// //         ,
// //         {
// //             title: "What is TV?",
// //             description: "Have you ever seen M,TV Or CNN?",
// //             Body: "television (TV), a form of mass media based on the electronic delivery of moving images and sound from a source to a receiver. By extending the senses of vision and hearing beyond the limits of physical distance, television has had a considerable influence on society.",
// //             img: { TV },
// //             thumbnail: "",
// //             id: "2"
// //         }
// //         ,
// //         {
// //             title: "What is Social media?",
// //             description: "Do you know instagram or...",
// //             Body: "Social media refers to the means of interactions among people in which they create, share, and/or exchange information and ideas in virtual communities and networks. The Office of Communications and Marketing manages the main Facebook, X/Twitter, Instagram, LinkedIn, and YouTube accounts.",
// //             img: { Socialmedia },
// //             thumbnail: "",
// //             id: "3"
// //         }

// //     ]
// //     return (
// //         <div className={styles.page}>
// //             <h1>Blog</h1>
// //             <ul key={post.id}>
// //                 {post.map((item)=>{
// //                     return <div>
// //                         <h3>{item.title}</h3>
// //                         <h5>{item.description}</h5>
// //                         <p>{item.Body}</p>
// //                         <img src={item.img} alt="" />
// //                     </div>
// //                 })}
// //             </ul>




// //         </div>
// //     )
// // }

import styles from "@/app/page.module.css";
import Link from "next/link";

export default function Blog() {
    const post = [
        {
            title: "What is radio?",
            description: "Have you ever Listen to a radio channel?",
            Body: "The wireless transmission and reception of electric impulses or signals by means of electromagnetic waves. b. : the use of these waves for the wireless transmission of electric impulses into which sound is converted. 2. : a radio message.",
            img: "/Image/Radio.jpg", // فقط مسیر تصویر
            thumbnail: "",
            id: "1"
        },
        {
            title: "What is TV?",
            description: "Have you ever seen M,TV Or CNN?",
            Body: "Television (TV), a form of mass media based on the electronic delivery of moving images and sound from a source to a receiver. By extending the senses of vision and hearing beyond the limits of physical distance, television has had a considerable influence on society.",
            img: "/Image/TV.jpg", // فقط مسیر تصویر
            thumbnail: "",
            id: "2"
        },
        {
            title: "What is Social media?",
            description: "Do you know Instagram or...",
            Body: "Social media refers to the means of interactions among people in which they create, share, and/or exchange information and ideas in virtual communities and networks. The Office of Communications and Marketing manages the main Facebook, X/Twitter, Instagram, LinkedIn, and YouTube accounts.",
            img: "/Image/Socialmedia.jpg", // فقط مسیر تصویر
            thumbnail: "",
            id: "3"
        }
    ];

    return (
        <div className={styles.page}>
            <h1>Blog</h1>
            <ul>
                {post.map((item) => {
                    return (
                        <div className={styles.div} key={item.id}>
                            <h3>{item.title}</h3>
                            <h5>{item.description}</h5>
                            <p>{item.Body}</p>
                            <img src={item.img} alt={item.title} style={{ width: "300px", height: "200px" }} />
                            <Link href={`/pages/Blog/Posts/${item.id}`}>Read More</Link>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
}
