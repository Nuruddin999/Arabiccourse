import Words from "../../components/Words"
import { lesson1 } from "../../Models/lesson1"
import { lesson2 } from "../../Models/lesson2"
const slowa = () => {
    return <Words words={lesson2.newwords} lessonNumber={2} />
}
export default slowa