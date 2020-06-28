import Words from "../../components/Words"
import { lesson1 } from "../../Models/lesson1"
const slowa = () => {
    return <Words words={lesson1.newwords} lessonNumber={1} />
}
export default slowa