function goToSectionFromMenu() {
    document.querySelectorAll('.link-to-section').forEach((link) => {
        link.addEventListener('click', function (event) {
            event.preventDefault() // Empêche le comportement par défaut du saut d'ancre

            const targetId = this.getAttribute('href').substring(13) // Récupère l'ID de l'ancre
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
// goToSectionFromMenu()