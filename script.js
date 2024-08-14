document.addEventListener('DOMContentLoaded', () => {
    const textToAppear = document.querySelectorAll('.text-to-appear')

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight
        textToAppear.forEach((text) => {
            const textPosition = text.getBoundingClientRect().top
            if (textPosition < windowHeight - 50) {
                text.classList.add('visible')
            }
        })
    }
    window.addEventListener('scroll', revealOnScroll)
    revealOnScroll()
})
