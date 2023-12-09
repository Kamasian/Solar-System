export default function randomLetters(element, originalText) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let iterations = 0

    const interval = setInterval(() => {
        element.textContent = element.textContent
            .split("")
            .map((_, index) => {
                if (index < iterations) {
                    return originalText[index]
                }
                return letters[Math.floor(Math.random() * 26)]
            })
            .join("")
        if (iterations >= originalText.length) {
            clearInterval(interval)
        }
        iterations += 1 / 3
    }, 50)
}