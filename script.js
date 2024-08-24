const textToAppear = document.querySelectorAll('.text-to-appear')
const iconToGrow = document.querySelectorAll('.icon-to-grow')
const animationSurligner = document.querySelectorAll('.hindHightlight')

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

    animationSurligner.forEach((cacheSurlignement) => {
        const cachePosition = cacheSurlignement.getBoundingClientRect().top
        if (cachePosition < windowHeight - 50) {
            cacheSurlignement.classList.add('showhighlight')
        }
    })
}
window.addEventListener('scroll', actionOnScroll)
actionOnScroll()

const formButton = document.querySelector('.OuMeTrouver__button--form')
const form = document.querySelector('.OuMeTrouver__form')
const clickOnFormButton = () => {
    if (form.classList.contains('form-visible')) {
        form.classList.remove('form-visible')
    } else {
        form.classList.add('form-visible')
    }
}
formButton.addEventListener('click', clickOnFormButton)

// document
//     .querySelector('.OuMeTrouver__form__button font-text')
//     .addEventListener('click'),
//     (e) => {
//         e.preventdefault()
//     }

document.querySelector('.OuMeTrouver__form').addEventListener('submit', (e) => {
    e.preventDefault()
    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('name').value,
    }
    console.log('je suis dans la fonction submit avec le fetch')
    fetch('http://localhost:3000/form/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Erreur dans la réponse du réseau')
            } else {
                console.log(
                    'succès! le server à répondu psoitivement à la réception du formulaire'
                )
            }
        })
        .catch((error) => {
            !alert("votre requête n'a pu aboutir")
            console.log(error)
        })

    console.log(data)
})
