import Head from 'next/head'
import styles from "../components/mainstyle.module.css";
import Link from "next/link";

export default function Home() {
  const makelessons = () => {
    let list = []
    for (let i = 0; i < 30; i++) {
      let lesson = {
        id: i + 1,
        name: "Урок"
      }
      list.push(lesson)
    }
    return list
  }
  let list = makelessons()
  return <div>
    <Head>
      <title>Create Next App</title>

    </Head>
    <h1>Уроки</h1>
    {list.map(lesson =>
        <div className={styles.indexchapter}>
          <div>
            <span>{lesson.name} {lesson.id}</span>
          </div>
          <Link as="/urok1/slova" href='/urok${{lesson.id}}'>
            <a>Пройти</a>
          </Link>
        </div>
    )}
    <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>
  </div>

}
