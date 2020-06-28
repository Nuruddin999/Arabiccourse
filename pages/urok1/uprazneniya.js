import Head from "next/head";
import Urok1 from "../../components/Urok1";
import styles from "../../components/mainstyle.module.css"
import PictureQuiz from "../../components/PictureQuiz";
import { lesson1 } from "../../Models/lesson1";
import { useState, useEffect } from "react";
import MakeWord from "../../components/Makeword";
import { useDispatch, useSelector } from "react-redux";
import { changeL1state } from "../../redux/actions/lesson1actions";
import TextField from '@material-ui/core/TextField'
import CheckIcon from "../../components/CheckIcon";
import WrongIcon from "../../components/WrongIcon";
import { Title, Button } from "./styles";

const uprazneniya = () => {
    const rightAnswers = ["سَبُّورَةٌ", "كِتَابٌ", "مِسْطَرَةٌ", "قَلَمُ", "مُدَرِّسٌ", "مَكْتَبٌ"]
    const sel = useSelector(state => state.lesson1Page.isChecking)
    const [innerstate, setState] = useState({
        words: [],
        finishSentencesInputs: ["", "", "", "", ""]
    })
    let prevstate = innerstate
    const dispatch = useDispatch()
    const check = () => {
        dispatch(changeL1state({ isChecking: !sel }))
    }
    const writeWord = (e, index) => {
        let words = prevstate.words
        let word = e.target.value
        words[index] = word
        setState({ ...prevstate, words })
    }
    const inputInFinishSentence = (e, index) => {
        let prevfinsishinput = innerstate.finishSentencesInputs
        let input = e.target.value
        prevfinsishinput[index] = input
        console.log(prevfinsishinput)
        setState(state => ({ ...state, finishSentencesInputs: prevfinsishinput }))
        console.log(index === 3 ? lesson1.finishSentences[3].right[1] : lesson1.finishSentences[3].right[0])
    }
    useEffect(() => {
        let dictation = []
        lesson1.dictation.map(word => dictation.push(""))
        setState({ ...prevstate, words: dictation })
    }, [])
    return <Urok1 number={"1"}>
        <Head>

        </Head>
        <div className={styles.uprazneninya}>
            <span className={styles.title}>Выберите правильный вариант</span>
            {rightAnswers.map((quiz, index) =>
                <PictureQuiz img={lesson1.picturequiz[index].img} answer={rightAnswers[index]}
                    vars={lesson1.picturequiz[index].vars} groupId={index + 1} />
            )}
            <span className={styles.title}>Вставьте пропущенные слова, опираясь на картинки</span>
            {lesson1.finishSentences.map((sentence, index) => lesson1.finishSentences.length - 1 === index ?
                <div className={styles.finish2words}>
                    <div className={styles.imgs}>
                        <img src={sentence.img3} alt="учебная доска" />
                        <img src={sentence.img2} alt="учитель" />
                        <img src={sentence.img1} alt="парта" />
                        {sel ? innerstate.finishSentencesInputs[3] === sentence.right[1] && innerstate.finishSentencesInputs[4] === sentence.right[0] ?
                            <CheckIcon /> : <WrongIcon /> : null}
                    </div>
                    <div className={styles.words}>
                        <input type="text" className={styles.inpword} value={innerstate.finishSentencesInputs[4]} onChange={(e) => inputInFinishSentence(e, 4)} />
                        <span className={styles.va}>وَ</span>
                        <input type="text" className={styles.inpword} value={innerstate.finishSentencesInputs[3]} onChange={(e) => inputInFinishSentence(e, 3)} />
                        <span className={styles.word}>{sentence.phrase}</span>
                    </div>
                </div> :
                <div className={styles.finish2words}>
                    <div className={styles.imgs}>
                        <img src={sentence.img2} alt="учитель" />
                        <img src={sentence.img1} alt="парта" />
                        {sel ? innerstate.finishSentencesInputs[index] === sentence.right ?
                            <CheckIcon /> : <WrongIcon /> : null}
                    </div>
                    <div className={styles.words}>
                        <input type="text" className={styles.inputword} value={innerstate.finishSentencesInputs[index]} onChange={(e) => inputInFinishSentence(e, index)} />
                        <span className={styles.word}>{sentence.phrase}</span>
                    </div>
                </div>
            )}
            <span className={styles.title}>Составьте слово из букв  (Нажимате на кнопки с буквой)</span>
            {lesson1.makeword.map(makeword => <MakeWord makeword={makeword} setLetter={lesson1.setletter} />
            )}
            <span className={styles.title}>Напишите каждое слово на арабском языке</span>
            {lesson1.dictation.map((word, index) => <div className={styles.dictationContainer}>
                <div className={styles.wordContainer}>
                    {sel ? innerstate.words[index] === word.right ?
                        <CheckIcon /> : <WrongIcon /> : null}
                    <TextField
                        value={innerstate.words[index]}
                        fullWidth="true"
                        placeholder={word.word}
                        variant={"outlined"}
                        margin={"dense"}
                        onChange={(e) => writeWord(e, index)}
                    />
                </div>
            </div>)}

            <Button sel={sel} onClick={check}><span>{sel ? "Вернуться к упражнениям" : "Проверить"}</span></Button>
        </div>

    </Urok1>
}
export default uprazneniya