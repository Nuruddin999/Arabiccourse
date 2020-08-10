import Urok1 from "../../components/Urok1"
import Head from "next/head";
import styles from "./styles.module.css"
import CorrectWord from "../../components/CorrectWord";
import { lesson2 } from "../../Models/lesson2";
import PictureQuiz from "../../components/PictureQuiz";
import { useEffect, useState } from "react";
import { shuffle } from "../../public/utils";
import { Grid, TextField, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { changeL1state } from "../../redux/actions/lesson1actions";
import { Title, Button } from "../urok1/styles";
import CheckIcon from "../../components/CheckIcon";
import WrongIcon from "../../components/WrongIcon";
import { itemStyles } from "./styles"
const uprazneniya = () => {
    const rightAnswers = ["بِطاقَةٌ", "مَسَّاحَةٌ", "مَكْتَبَةٌ", "خَريطَةٌ", "كُرْسِيٌّ", "بابٌ"]

    const [state, setState] = useState({
        randomwords: [],
        variants: [],
        rusVariants: [],
        audioVariants: [],

    })
    let list = rightAnswers.reverse
    const sel = useSelector(state => state.lesson1Page.isChecking)
    const classes = itemStyles()
    const onRusWordsChange = (e, index) => {
        let variants = state.variants
        variants[index] = e.target.value
        setState(state => ({ ...state, variants: variants }))
    }
    const onChange = (e, index) => {
        let variants = state.variants
        variants[index] = e.target.value
        setState(state => ({ ...state, variants: variants }))
    }
    const onChangeRus = (e, index) => {

        let variants = state.rusVariants
        variants[index] = e.target.value
        setState(state => ({ ...state, rusVariants: variants }))
    }
    const onChangeAudio = (e, index) => {
        let variants = state.audioVariants
        variants[index] = e.target.value
        setState(state => ({ ...state, audioVariants: variants }))
    }
    const fillVariants = () => {
        let variants = [];
        let rusVariants = [];
        let audioVariants = [];
        lesson2.correctWord.map(word => {
            variants.push("");
            setState(state => ({ ...state, variants: variants }))
        })
        for (let index = 5; index < state.randomwords.length - 1; index++) {
            rusVariants.push("");
        }
        for (let index = 0; index < 5; index++) {
            audioVariants.push("");
        }
    }
    const dispatch = useDispatch()
    const check = () => {
        dispatch(changeL1state({ isChecking: !sel }))
    }
    useEffect(() => {
        fillVariants()
        let randomwords = shuffle(lesson2.newwords)
        setState(state => ({ ...state, randomwords }))
    }, [])
    return <Urok1 number={2}>
        <Head>

        </Head>
        <div className={styles.main}>
            <span className={styles.title}>Что изображено на картинке , выберете правильный вариант</span>
            {rightAnswers.map((quiz, index) =>
                <PictureQuiz img={lesson2.picturequiz[index].img} answer={rightAnswers[rightAnswers.length - (index + 1)]}
                    vars={lesson2.picturequiz[index].vars} groupId={index + 1} />
            )}
            <span className={styles.title}>Эти слова написаны с ошибками, напишите правильный вариант</span>
            <CorrectWord words={lesson2.correctWord} textChange={onChange} variants={state.variants} isChecked={sel} />
            <span className={styles.audiotitle}>Прослушайте каждый аудио файл и напишите слово, которое было произнесено </span>
            {state.randomwords.map((word, index) => index >= 0 && index <= 4 ? <Grid container className={styles.words} justify={"center"}>
                {sel ? state.audioVariants[index] === word.title ? <Grid item xs={1} sm={1}>
                    <CheckIcon />
                </Grid> : <Grid item xs={1} sm={1}>
                        <WrongIcon />
                    </Grid> : null}
                <Grid container item xs={9} sm={9} direction={"column"} alignItems={"center"}>
                    <audio
                        controls
                        src={word.audio}>
                        Your browser does not support the
            <code>audio</code> element.
    </audio>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <TextField
                        variant={"outlined"}
                        fullWidth={"true"}
                        value={state.audioVariants[index]}
                        onChange={(e) => onChangeAudio(e, index)}
                        InputProps={{ style: { fontSize: 40 } }}
                    />
                </Grid>
            </Grid> : null)}
        </div>
        <span className={styles.audiotitle}>Напишите данные слова на русском языке</span>
        {state.randomwords.map((word, index) => index > 4 && index <= state.randomwords.length - 1 ? <Grid container justify={"center"} alignItems={"center"} alignContent={"center"}>
            {sel ? state.rusVariants[index] === word.translation ? <Grid item xs={1} sm={1}>
                <CheckIcon />
            </Grid> : <Grid item xs={1} sm={1}>
                    <WrongIcon />
                </Grid> : null}
            <Grid container item xs={9} sm={9} direction={"column"} alignItems={"center"} className={classes.root}>
                <Typography align={"center"} variant={"h3"} >{word.title}</Typography>
                <Grid item xs sm md lg xl>
                    <TextField
                        variant={"outlined"}
                        fullWidth={"true"}
                        value={state.rusVariants[index]}
                        onChange={(e) => onChangeRus(e, index)}
                        InputProps={{ style: { fontSize: 40 } }}
                    />
                </Grid>
            </Grid>

        </Grid> : null)}

        <Button sel={sel} onClick={check}><span>{sel ? "Вернуться к упражнениям" : "Проверить"}</span></Button>
    </Urok1>
}
export default uprazneniya