document.addEventListener('DOMContentLoaded', () => {
    const textToAppear = document.querySelectorAll('.text-to-appear')
    const iconToGrow = document.querySelectorAll('.icon-to-grow')

    const actionOnScroll = () => {
        const windowHeight = window.innerHeight
        textToAppear.forEach((text) => {
            const textPosition = text.getBoundingClientRect().top
            if (textPosition < windowHeight - 50) {
                text.classList.add('visible')
            }
        })
        iconToGrow.forEach((button) => {
            const buttonPosition = button.getBoundingClientRect().top
            if (buttonPosition < windowHeight - 50) {
                button.classList.add('grow')
            }
        })
    }
    window.addEventListener('scroll', actionOnScroll)
    actionOnScroll()
})
