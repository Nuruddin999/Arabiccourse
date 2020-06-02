import Urok1 from "../../components/Urok1";
import Swiper from 'react-id-swiper';
import styles from  "../../components/mainstyle.module.css"
import Head from "next/head";
import {lesson1} from "../../Models/lesson1";
const slova=()=>{
    const params = {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        slideClass:"wordcard"
    }
    let words=["Dfgdfg","sdfsdf","sdfsdfs"]
    return <Urok1>
<Head>
    <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.css"/>
</Head>
        <div className={styles.words}>
            <Swiper {...params}>
                {lesson1.newwords.map(word=> <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                        <img src={word.img} width="500px" height="250px"/>
                        <span className={styles.title}>{word.title}</span>
                        <span className={styles.translation}>{word.translation}</span>
                    </div>
                )}

            </Swiper>
        </div>


    </Urok1>
}
export default slova