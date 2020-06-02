import Head from "next/head";
import Urok1 from "../../components/Urok1";
import styles from "../../components/mainstyle.module.css"
import {lesson1} from "../../Models/lesson1"

const phrazi = () => {
    return <Urok1>
        <Head>

        </Head>
        <div className={styles.phrasessection}>
            {lesson1.phrases.map(phrase =>
                <div className={styles.phrasewrapper}>
                    <div className={styles.phrase}>
                        <img src={phrase.img1} alt="word1"/>
                        <img src={phrase.img2} alt="word2"/>
                    </div>
                    <div className={styles.phrase}>
                        <span>{phrase.word1}</span>
                        <span>وَ</span>
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