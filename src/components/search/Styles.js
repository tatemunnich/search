export const searchButtonStyle = (query) => {
    if (query === '') {
        return {

        }
    } else {
        return {
            backgroundColor: 'rgba(138,43,226,0.66)',
            color: "white"
        }
    }
}
