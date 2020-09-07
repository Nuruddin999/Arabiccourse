import Link from "next/link";
import style from "./mainstyle.module.css"
import Head from "next/head";
import { useState } from "react";
import styledComp from "../pages/urok1/l1styles"
import NavMenu from "./NavMenu";
const urok1 = ({ children, number }) => {
    let words = `/urok${number}/main`
    let phrases = `/urok${number}/phrazi`
    let exercises = `/urok${number}/uprazneniya`
    const [menuOpened, setOpened] = useState(false)
    return <div>
        <Head>

        </Head>
        <styledComp.NavDrawer opened={menuOpened} >
            <styledComp.CloseIcon onClick={() => setOpened(!menuOpened)}>
                x
        </styledComp.CloseIcon>
            <NavMenu />
        </styledComp.NavDrawer>

        <nav>
            <div className={style.menu}>
                <div className={style.burger} onClick={() => setOpened(!menuOpened)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <Link as={words} href={words}>
                    <a>Слова</a>
                </Link>
                <Link as={phrases} href={phrases}>
                    <a>Фразы</a>
                </Link>
                <Link as={exercises} href={exercises}>
                    <a>Упражнения</a>
                </Link>

            </div>

        </nav>
        <main>
            {children}
        </main>
        <style jsx global>{`
        body {
          margin: 0;
            font-family: "Ubuntu", sans-serif;
        }
      `}</style>
    </div>
}
export default urok1