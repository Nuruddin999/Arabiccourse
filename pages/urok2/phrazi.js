import Head from "next/head";
import Urok1 from "../../components/Urok1";
import styles from "../../components/mainstyle.module.css"
import { lesson1 } from "../../Models/lesson1"
import { useSelector } from "react-redux";
import { lesson2 } from "../../Models/lesson2";

const phrazi = () => {
    const sel = useSelector(state => state.lesson1Page.isChecking)

    return <Urok1 number={2}>
        <Head>

        </Head>
        <div className={styles.phrasessection}>
            {lesson2.phrases.map(phrase =>
                <div className={styles.phrasewrapper}>
                    {phrase.embed ? <div>
                        <embed src={phrase.embed}></embed>
                    </div> : <div className={styles.phrase}>
                            <img src={phrase.img1} alt="word1" />
                            <img src={phrase.img2} alt="word2" />
                        </div>}
                    <div className={styles.phrase}>
                        <span>{phrase.word1}</span>
                        <span>{!phrase.embed ? "وَ" : "فَوْقَ"}</span>
                        <span>{phrase.word2}</span>
                    </div>
                    <div className={styles.phrase}>
                        <span>{phrase.translation}</span>
                    </div>
                </div>
            )}
        </div>
    </Urok1>
}
export default phrazi