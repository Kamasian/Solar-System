export default function typeWriterEffect(element, text, speed) {
    let i = 0

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i)
            i++
            setTimeout(type, speed)
        }
    }

    type()
}