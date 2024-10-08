function addHighlight() {
    let textToHighlight = document.querySelectorAll('.text-to-highlight')

    textToHighlight.forEach((text) => {
        const numberOfCaracter = text.textContent.length
        const width = numberOfCaracter * 7.5 + 60 / numberOfCaracter
        const strokeWidth = 8000 / width

        const lastClass = text.classList[1] && text.classList[1]

        const svgHighlight = `<span class="hindHighlight"><svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="-40 45 600 10"
                                class="highlight ${lastClass}"
                                width="${width}px"
                                stroke-width="${strokeWidth}";

                            >
                                <path d="M3.7,15c50.5-3.7,442.9-7,487.5,4.7"></path>
                                <path
                                    d="M488.6,23c-33.9-3-452.6-12-483.2-2.7"
                                ></path>
                                <path d="M5.4,22c75.2,4.3,445.9-4,488.8-0.3"></path>
                            </svg>
                            </span>

                            `
        text.innerHTML += svgHighlight
    })
}

addHighlight()

const actionOnScroll = () => {
    const windowHeight = window.innerHeight

    //Fait apparaître le texte de manière douce au fur et à mesure du scroll
    const textsToAppear = document.querySelectorAll('.vertical-slide-animation')
    textsToAppear.forEach((text) => {
        const textPosition = text.getBoundingClientRect().top
        if (textPosition < windowHeight - 70) {
            text.classList.add('vertical-slide-animated')
        }
    })

    const picsToAppear = document.querySelectorAll('.opacity-animation')
    picsToAppear.forEach((pic) => {
        const picPosition = pic.getBoundingClientRect().top
        if (picPosition < windowHeight - 70) {
            pic.classList.add('opacity-animated')
        }
    })

    //TODO: A réparer
    const iconToGrow = document.querySelectorAll('.icon-to-grow')
    iconToGrow.forEach((button) => {
        const buttonPosition = button.getBoundingClientRect().top
        if (buttonPosition < windowHeight - 50) {
            button.classList.add('grow')
        }
    })

    //Enlève la partie blanche qui cache le surlignement
    const animationSurligner = document.querySelectorAll('.hindHighlight')
    animationSurligner.forEach((cacheSurlignement) => {
        const cachePosition = cacheSurlignement.getBoundingClientRect().top
        if (cachePosition < windowHeight - 50) {
            cacheSurlignement.classList.add('showhighlight')
        }
    })
}
window.addEventListener('scroll', actionOnScroll)
actionOnScroll()

function hideMenu() {
    const linkToSections = document.querySelectorAll('.link-to-section')
    const checkbox = document.getElementById('checkbox')
    console.log(checkbox)
    linkToSections.forEach((link) =>
        link.addEventListener('click', () => (checkbox.checked = false))
    )
}
hideMenu()

function goToSectionFromMenu() {
    document.querySelectorAll('.link-to-section').forEach((link) => {
        link.addEventListener('click', function (event) {
            event.preventDefault() // Empêche le comportement par défaut du saut d'ancre

            const targetId = this.getAttribute('href').substring(1) // Récupère l'ID de l'ancre
            console.log('this', this)
            console.log('targetId', targetId)
            const targetElement = document.getElementById(targetId)
            console.log('targetElement', targetElement)

            const offset = 60 // Décalage souhaité en pixels
            const elementPosition =
                targetElement.getBoundingClientRect().top + window.scrollY
            const offsetPosition = elementPosition - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth', // Ajoute un défilement fluide
            })
        })
    })
}
goToSectionFromMenu()

function clickAnimationForButton() {
    document.querySelectorAll('.button').forEach((button) => {
        button.addEventListener('click', () => {
            button.classList.add('button-clicked')
            setTimeout(() => {
                button.classList.remove('button-clicked')
            }, 250)
        })
    })
}

clickAnimationForButton()

function greyButtonWhenClicked() {
    const button = document.querySelectorAll('.button-to-grey')
    button.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('darkenButton')) {
                button.classList.remove('darkenButton')
            } else {
                button.classList.add('darkenButton')
            }
            if (button.classList.contains('OuMeTrouver__button--appel')) {
                console.log(
                    'le boutton appuyer est OuMeTrouver__button--appel '
                )
                setTimeout(() => button.classList.remove('darkenButton'), 1000)
            }
        })
    })
}

greyButtonWhenClicked()

/*
 ***** Formulaire *****
 */

function showForm() {
    const formButton = document.querySelector('.OuMeTrouver__button--form')
    console.log('formButton', formButton)
    const form = document.querySelector('.OuMeTrouver__form')
    const clickOnFormButton = () => {
        if (form.classList.contains('form-visible')) {
            form.classList.remove('form-visible')
        } else {
            form.classList.add('form-visible')
        }
    }
    formButton.addEventListener('click', clickOnFormButton)
}
showForm()

function showLoader() {
    const buttonSend = document.querySelector('.OuMeTrouver__form__button')
    buttonSend.classList.add('dont-display')
    const loader = document.querySelector('.loader')
    console.log('loader', loader)
    loader.classList.remove('dont-display')
    console.log('loader classList', loader.classList)
}

function dontShowLoader() {
    const buttonSend = document.querySelector('.OuMeTrouver__form__button')
    buttonSend.classList.remove('dont-display')
    const loader = document.querySelector('.loader')
    console.log('loader', loader)
    loader.classList.add('dont-display')
    console.log('loader classList', loader.classList)
}

function deleteForm() {
    const form = document.querySelector('.OuMeTrouver__form')
    form.innerHTML = ''
}

function showSuccessInSendingTheForm() {
    const form = document.querySelector('.OuMeTrouver__form')
    const message = document.createElement('p')
    message.classList.add('font-text')
    message.style.margin = '20px'
    message.style.textAlign = 'center'
    message.innerHTML =
        "<strong class='text-to-highlight'>Succès !</strong><br>J'ai bien reçu votre message, je vous recontacte très vite."
    form.appendChild(message)
    addHighlight()
    actionOnScroll()
}

function showFailureInSendingTheForm() {
    const form = document.querySelector('.OuMeTrouver__form')
    const message = document.createElement('p')
    message.classList.add('font-text')
    message.style.margin = '20px'
    message.style.textAlign = 'center'
    message.innerHTML =
        "<strong class='text-to-highlight'>Malheureusement,</strong> il y a eu un problème avec le formulaire<br>Contactez-moi directement par téléphone au 06 37 33 55 10."
    form.appendChild(message)
    addHighlight()
    actionOnScroll()
}

function sendForm() {
    document
        .querySelector('.OuMeTrouver__form')
        .addEventListener('submit', (e) => {
            e.preventDefault()
            showLoader()
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
                    deleteForm()
                    if (!response.ok) {
                        showFailureInSendingTheForm()
                    } else {
                        showSuccessInSendingTheForm()
                    }
                })
                .catch((error) => {
                    !alert("votre requête n'a pu aboutir")
                    console.log(error)
                    deleteForm()
                    showFailureInSendingTheForm()
                })

            console.log(data)
        })
}

sendForm()

/*
 ***** Animations des cartes de la section Lisa *****
 */

function clickAnimationForCard() {
    document.querySelectorAll('.Lisa__cards__card').forEach((card) => {
        card.addEventListener('click', () => {
            card.classList.add('card-clicked')
            setTimeout(() => {
                card.classList.remove('card-clicked')
            }, 201)
        })
    })
}
clickAnimationForCard()

function rotateArrow(arrow) {
    console.log('arrow dans rotateArrow', arrow)
    arrow.classList.contains('Lisa__cards__card__arrow--down')
        ? arrow.classList.remove('Lisa__cards__card__arrow--down')
        : arrow.classList.add('Lisa__cards__card__arrow--down')
}

function showOrDontShowText(text) {
    text.classList.contains('Lisa__cards__card__p--visible')
        ? text.classList.remove('Lisa__cards__card__p--visible')
        : text.classList.add('Lisa__cards__card__p--visible')
}

function changeTitleSize(title) {
    title.classList.contains('Lisa__cards__card__imgAndTitle__h2--bigger')
        ? title.classList.remove('Lisa__cards__card__imgAndTitle__h2--bigger')
        : title.classList.add('Lisa__cards__card__imgAndTitle__h2--bigger')
}

function animateOneCard(arrow) {
    rotateArrow(arrow)
    const pSibling = arrow.parentElement.querySelector('.Lisa__cards__card__p')
    showOrDontShowText(pSibling)

    const title = arrow.closest('.Lisa__cards__card').querySelector('h2')
    changeTitleSize(title)
}

function animateCards() {
    const cards = document.querySelectorAll('.Lisa__cards__card')
    cards.forEach((card) => {
        card.addEventListener('click', () => {
            const arrowAlreadyDown = document.querySelector(
                '.Lisa__cards__card__arrow--down'
            )
            const arrowChildOfCard = card.querySelector(
                '.Lisa__cards__card__arrow'
            )
            if (arrowAlreadyDown) {
                animateOneCard(arrowAlreadyDown)
            }
            if (arrowAlreadyDown != arrowChildOfCard) {
                animateOneCard(arrowChildOfCard)
            }
        })
    })
}

animateCards()
