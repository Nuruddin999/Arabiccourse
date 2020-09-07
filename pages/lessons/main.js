import Head from "next/head"
import styles from "../../components/mainstyle.module.css"
const main = () => {
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
                <a className={styles.chapterlink}>Пройти</a>
            </div>
        )}
    </div>

}
export default main