import React from 'react'
import styles from "../components/mainstyle.module.css";
import Link from "next/link";
const NavMenu = () => {
    const makelessons = () => {
        let list = []
        for (let i = 0; i < 2; i++) {
            let lesson = {
                id: i + 1,
                name: "Урок"
            }
            list.push(lesson)
        }
        return list
    }
    let list = makelessons()
    return <div>
        <h1>Уроки</h1>
        {list.map(lesson => {
            let aslink = `/urok${lesson.id}/main`
            return <div className={styles.indexchapter}>
                <div>
                    <span>{lesson.name} {lesson.id}</span>
                </div>
                <Link as={aslink} href='/urok${{lesson.id}}'>
                    <a>Пройти</a>
                </Link>
            </div>
        }
        )}
    </div>
}
export default NavMenu