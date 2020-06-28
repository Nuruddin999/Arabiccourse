import style from "../components/mainstyle.module.css"
import { useSelector, useDispatch } from "react-redux";
import CheckIcon from "./CheckIcon";
import WrongIcon from "./WrongIcon";
import { changeL1state } from "../redux/actions/lesson1actions";
const PictureQuiz = ({ img, vars, icons, answer, groupId }) => {
    const sel = useSelector(state => state.lesson1Page)
    console.log(sel.pictureQuizAnswers)
    const dispatch = useDispatch()
    const makeAnswer = e => {
        let prevanswers = sel.pictureQuizAnswers
        let answers = [...prevanswers, e.target.value]
        dispatch(changeL1state({ pictureQuizAnswers: answers }))
    }
    return (
        <div className={style.picturequiz}>
            <img width={"30%"} src={img} />
            <div className={style.variants}>
                {vars.map((v, index) => <div key={v}>
                    {sel.isChecking ? v === answer ? <CheckIcon /> : <WrongIcon /> : ""}
                    <input type="radio" id={v} name={`group${groupId}`} value={v} style={{ flexBasis: "20%" }} onChange={makeAnswer} />
                    <label htmlFor={v} style={{ flexBasis: "60%", fontFamily: "Ubuntu", fontSize: "2em", margin: 6, }}>{v}</label><br />
                </div>)}
            </div>
        </div>

    );
}

export default PictureQuiz;