import Link  from "next/link";
import style from "./mainstyle.module.css"
const urok1 = ({children}) => {
    return <div>
        <nav>
            <div className={style.menu}>
                <Link as="/urok1/slova" href="/urok1/slova">
                    <a>Слова</a>
                </Link>

                <Link as="/urok1/phrazi" href="/urok1/phrazi">
                    <a>Фразы</a>
                </Link>
                <Link as="/urok1/uprazneniya" href="/urok1/uprazneniya">
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
        }
      `}</style>
    </div>
}
export default urok1