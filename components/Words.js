import Urok1 from "./Urok1";
import Swiper from 'react-id-swiper';
import styles from "./mainstyle.module.css"
import Head from "next/head";
import IconButton from '@material-ui/core/IconButton';
import { Children, useState } from "react";
const Words = ({ words, lessonNumber }) => {

    const params = {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        slideClass: "wordcard"
    }

    const playAudio = (url) => {
        let audio = new Audio(url)
        let playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.then(function () {
                // Automatic playback started!
            }).catch(function (error) {
                console.log(error)
            });
        }
    }

    return <Urok1 number={lessonNumber}>
        <Head>
            <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.css" />
        </Head>
        <div className={styles.words}>
            <Swiper {...params}>
                {words.map(word => <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <img src={word.img} width="400px" height="250px" />
                    <span className={styles.title}>{word.title}</span>
                    <span className={styles.translation}>{word.translation}</span>
                    <div className={styles.soundbutton}>
                        <img src="/img/speaker.svg" width="35px" height="35px" onClick={() => playAudio(word.audio)} />
                    </div>

                </div>
                )}
            </Swiper>
        </div>
    </Urok1>
}
export default Words