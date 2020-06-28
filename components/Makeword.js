import { useEffect, useState } from "react";
import style from "../components/mainstyle.module.css"
import { useSelector } from "react-redux";
import checkIcon from "./CheckIcon";
import CheckIcon from "./CheckIcon";
import WrongIcon from "./WrongIcon";

const MakeWord = ({ makeword, setLetter }) => {
    const sel = useSelector(state => state.lesson1Page.isChecking)
    const replacewithDashes = (word) => {
        let finalword = ""
        for (let i = 0; i < word.length; i++) {
            finalword += "-"
        }
        changestate({ words: finalword })
    }
    useEffect(() => {
        replacewithDashes(makeword.word)
    }, [])
    let word = makeword.right.replace()
    const [state, changeState] = useState({
        words: "------",
        ischecked: false
    })
    const changestate = (value) => {
        let prevstate = state
        changeState({ ...prevstate, ...value })
    }
    const refresh = () => {
        replacewithDashes(makeword.word)
    }
    return <div>
        <div className={style.makewordcontainer}>
            <div className={style.makeword}>
                {sel ? state.words === makeword.right ?
                    <CheckIcon /> : <WrongIcon /> : null}
                <span className={style.wordcontainer}>{state.words === "" ? "Жмите кнопки ))" : state.words} </span>
                <div onClick={refresh}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                </div>
            </div>
            <div className={style.letterscontainer}>
                {makeword.letters.map(letter => <button
                    onClick={(e) => setLetter(e, changestate, state.words)}>{letter}</button>
                )}
            </div>
        </div>
    </div>
}
export default MakeWord