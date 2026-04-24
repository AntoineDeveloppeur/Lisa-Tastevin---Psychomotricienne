// Toastify est chargé via CDN et disponible globalement

// Variable pour suivre si un toast est actuellement affiché
let isToastVisible = false

// Fonction pour afficher le toast
export function showWorkshopToast() {
  const currentDate = new Date()
  const expirationDate = new Date("2026-05-11")
  if (currentDate > expirationDate) {
    return
  }

  if (isToastVisible) {
    return
  }

  isToastVisible = true

  Toastify({
    text: "Découvrez mes ateliers d'automassage, <a href='docs/atelier-avril-mai.pdf' target='_blank' rel='noopener noreferrer' class='toast-link'>cliquez ici pour en savoir plus</a>",
    duration: 15000,
    close: true,
    gravity: "bottom",
    position: "right",
    stopOnFocus: true,
    escapeMarkup: false,
    className: "custom-toast",
    onClick: function () {},
    callback: function () {
      // Réinitialiser quand le toast disparaît
      isToastVisible = false
    },
  }).showToast()
}

// Fonction pour détecter le scroll au début de la section Pourquoi
export function initToastOnScroll() {
  let hasScrolledPast = false
  const pourquoiSection = document.getElementById("pourquoi")

  if (!pourquoiSection) {
    return
  }

  window.addEventListener("scroll", () => {
    const sectionTop = pourquoiSection.offsetTop
    const scrollPosition = window.scrollY + window.innerHeight

    // Si on aperçoit le début de la section Pourquoi
    if (scrollPosition > sectionTop && !hasScrolledPast) {
      hasScrolledPast = true
      showWorkshopToast()
    }
    // Si on remonte au-dessus de la section, réinitialiser
    else if (scrollPosition <= sectionTop) {
      hasScrolledPast = false
    }
  })
}
