const setletter = (e, setLetter, word) => {
    if (word.length >= 10) return
    let currentword = word
    let finalword;
    for (let i = 0; i <= currentword.length; i++) {
        if (currentword.charAt(i) === "-") {
            finalword = currentword.replace("-", e.target.innerText)
            break
        }

    }
    setLetter({ words: finalword })
}

export const lesson1 = {
    newwords: [{ img: "/img/lesson1/ruller.svg", title: "مِسْطَرَةٌ", translation: "линейка", audio: `/audio/urok1/مسطرة.mp3` }, {
        img: "/img/lesson1/pencil.svg",
        title: "قَلَمٌ",
        translation: "ручка", audio: `/audio/urok1/قلم.mp3`
    }, { img: "/img/lesson1/book.svg", title: "كِتَابٌ", translation: "книга", audio: `/audio/urok1/كتاب.mp3` }, {
        img: "/img/lesson1/notepad.svg",
        title: "كُرَّاسَةٌ",
        translation: "тетрадь", audio: `/audio/urok1/كراسة.mp3`
    }, { img: "/img/lesson1/desk.svg", title: "مَكْتَبٌ", translation: "письменный стол", audio: `/audio/urok1/مكتب.mp3` }, {
        img: "/img/lesson1/board.svg",
        title: "سَبُّورَةٌ",
        translation: "классная доска", audio: `/audio/urok1/سبورة.mp3`
    }, { img: "/img/lesson1/teacher.svg", title: "مُدَرِّسٌ", translation: "учитель", audio: `/audio/urok1/مدرس.mp3` }, {
        img: "/img/lesson1/lounge.svg",
        title: "مَقْعَدٌ",
        translation: "кресло", audio: `/audio/urok1/مقعد.mp3`
    }],
    phrases: [{
        img1: "/img/lesson1/lounge.svg",
        img2: "/img/lesson1/desk.svg",
        word1: "مَقْعَدٌ",
        word2: "مَكْتَبٌ",
        translation: "письменный стол и кресло  "
    }, {
        img1: "/img/lesson1/notepad.svg",
        word1: "كُرَّاسَةٌ",
        img2: "/img/lesson1/book.svg",
        word2: "كِتَابٌ",
        translation: " книга и тетрадь  "
    }, {
        img1: "/img/lesson1/board.svg",
        img2: "/img/lesson1/teacher.svg",
        word1: "سَبُّورَةٌ",
        word2: "مُدَرِّسٌ",
        translation: "учитель и доска"
    }],
    picturequiz: [{ img: "/img/lesson1/board.svg", vars: ["مِسْطَرَةٌ", "كُرَّاسَةٌ", "سَبُّورَةٌ", "مُدَرِّسٌ"] }, {
        img: "/img/lesson1/book.svg",
        vars: ["مَكْتَبٌ", "كِتَابٌ", "سَبُّورَةٌ", "قَلَمٌ"]
    }, { img: "/img/lesson1/ruller.svg", vars: ["كُرَّاسَةٌ", "مِسْطَرَةٌ", "مَقْعَدٌ", , "قَلَمٌ"] }, {
        img: "/img/lesson1/pencil.svg",
        vars: ["كِتَابٌ", "مُدَرِّسٌ", "مِسْطَرَةٌ", "قَلَمٌ"]
    }, { img: "/img/lesson1/teacher.svg", vars: ["مَقْعَدٌ", "مُدَرِّسٌ", "مَكْتَبٌ", "كُرَّاسَةٌ"] }, {
        img: "/img/lesson1/desk.svg",
        vars: ["كُرَّاسَةٌ", "مِسْطَرَةٌ", "مَكْتَبٌ", "مَقْعَدٌ"]
    }],
    finishSentences: [{
        img1: "/img/lesson1/book.svg",
        img2: "/img/lesson1/pencil.svg",
        phrase: "كِتَابٌ وَ ",
        right: "قَلَمٌ",
        name: "pencil"
    }, {
        img1: "/img/lesson1/ruller.svg",
        img2: "/img/lesson1/notepad.svg",
        phrase: "مِسْطَرَةٌ وَ ",
        right: "كُرَّاسَةٌ",
        name: "notebook"
    }, {
        img1: "/img/lesson1/board.svg",
        img2: "/img/lesson1/lounge.svg",
        phrase: "سَبُّورَة وَ ",
        right: "مَقْعَدٌ",
        name: "chair"
    }, {
        img1: "/img/lesson1/desk.svg",
        img2: "/img/lesson1/teacher.svg",
        img3: "/img/lesson1/board.svg",
        phrase: "مَكْتَب  وَ ",
        phrase2: "وَ",
        right: ["سَبُّورَةٌ", "مُدَرِّسٌ"]
    }],
    makeword: [{ letters: ["مِ", "طَ", "رَ", "ةٌ", "سْ"], word: "مسطرة", right: "مِسْطَرَةٌ" }, {
        letters: ["مٌ", "قَ", "لَ"], word: "قلم",
        right: "قَلَمٌ"
    }, { letters: ["دٌ", "مَ", "قْ", "عَ"], word: "مقعد", right: "مَقْعَدٌ" }, {
        letters: ["كُ", "سَ", "ةٌ", "ا", "رَّ"], word: "كراسة",
        right: "كُرَّاسَةٌ"
    }, { letters: ["رَ", "سَ", "بُّ", "و", "ةٌ"], word: "سبورة", right: "سَبُّورَةٌ" }, {
        letters: ["دَ", "مُ", "سٌ", "رِّ"], word: "مدرس",
        right: "مُدَرِّسٌ"
    }, { letters: ["كِ", "تَ", "بٌ", "ا"], word: "كتاب", right: "كِتَابٌ" }, { letters: ["تَ", "مَ", "كْ", "بٌ"], word: "مكتب", right: "مَكْتَبٌ" }],
    dictation: [{ word: "учитель", right: "مُدَرِّسٌ" }, { word: "доска", right: "سَبُّورَةٌ" }, { word: "линейка", right: "مِسْطَرَةٌ" }, { word: "ручка", right: "قَلَمٌ" }, { word: "тетрадь", right: "كُرَّاسَةٌ" }, { word: "письменный стол", right: "مَكْتَبٌ" }, { word: "кресло", right: "مَقْعَدٌ" }, { word: "книга", right: "كِتَاَبٌ" }],
    setletter: setletter
}
