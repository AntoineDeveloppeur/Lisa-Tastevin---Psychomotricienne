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
    const textToAppear = document.querySelectorAll('.text-to-appear')
    textToAppear.forEach((text) => {
        const textPosition = text.getBoundingClientRect().top
        if (textPosition < windowHeight - 50) {
            text.classList.add('visible')
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

function showForm() {
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
}
showForm()

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
            const targetElement = document.getElementById(targetId)

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

function pushedAnimationForButton() {
    document.querySelectorAll('.button').forEach((button) => {
        button.addEventListener('click', () => {
            button.classList.add('button-pushed')
            setTimeout(() => {
                button.classList.remove('button-pushed')
            }, 250)
        })
    })
}

pushedAnimationForButton()

function showButtonIsClicked() {
    const button = document.querySelector('.OuMeTrouver__form__button')
    if (button.classList.contains('darkenButton')) {
        button.classList.remove('darkenButton')
    } else {
        button.classList.add('darkenButton')
        document.addEventListener('click', () =>
            button.classList.remove('darkenButton')
        )
    }
}

function sendForm() {
    document
        .querySelector('.OuMeTrouver__form')
        .addEventListener('submit', (e) => {
            e.preventDefault()
            showButtonIsClicked()
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
}

sendForm()
