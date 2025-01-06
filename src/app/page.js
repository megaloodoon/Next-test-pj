import Link from "next/link";
import styles from "./page.module.css";





export default async function Home() {

  const data = await fetch("https://jsonplaceholder.typicode.com/users")
  let users = await data.json()

  


  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Hello Word</h1>
        <div>

          {data.ok ? users.map((item)=>{
            return<p key={item.id}> {item.username} </p>
          }) : <p>Something went wrong</p>}

        </div>
      </main>
    </div>
  );
}
