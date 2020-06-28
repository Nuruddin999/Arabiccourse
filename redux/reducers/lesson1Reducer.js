let initstate = {
    isChecking: false,
    pictureQuizAnswers: []
}
export const lesson1Reducer = (state = initstate, action) => {
    switch (action.type) {
        case "changel1state":
            let prevstate = state
            return { ...prevstate, ...action.value }
        default:
            return { ...state }
    }

}