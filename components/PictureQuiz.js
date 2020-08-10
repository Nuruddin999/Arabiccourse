import style from "../components/mainstyle.module.css"
import { useSelector, useDispatch } from "react-redux";
import CheckIcon from "./CheckIcon";
import WrongIcon from "./WrongIcon";
import { changeL1state } from "../redux/actions/lesson1actions";
import { Grid } from "@material-ui/core";
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
        <Grid container spacing={1} alignItems={"center"} justify={"center"} style={{ marginTop: "20px" }}>
            <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                <img width={"100%"} src={img} /></Grid>
            <Grid item md lg={8} xl={8}>   {vars.map((v, index) => <div key={v}>
                {sel.isChecking ? v === answer ? <CheckIcon /> : <WrongIcon /> : ""}
                <input type="radio" id={v} name={`group${groupId}`} value={v} style={{ flexBasis: "20%", marginTop: 20 }} onChange={makeAnswer} />
                <label htmlFor={v} style={{ display: "inline-block", flexBasis: "60%", fontFamily: "Ubuntu", fontSize: "2em", margin: "10px 6px 6px 6px", }}>{v}</label><br />
            </div>)}</Grid>
            {/* <div className={style.variants}>
             
            </div> */}
        </Grid>

    );
}

export default PictureQuiz;