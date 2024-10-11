function clickToUncover() {
    const elementToUncover = document.querySelectorAll(
        '.OuMeTrouver__flexbox2__div--form__ul__li__clickToUncover'
    )
    elementToUncover.forEach((element) => {
        element.addEventListener(
            'click',
            () => {
                if (element.classList.contains('phone')) {
                    element.innerHTML = ''
                    element.innerHTML =
                        "<a href='tel:+33637335510'>06 37 33 55 10</a>"
                }
                if (element.classList.contains('mail')) {
                    element.innerHTML = ''
                    element.innerHTML = `
    <a style="margin='auto'" href="mailto:lisatastevin.psychomot@gmail.com?subject=Demande%20d'information&body=Bonjour,%20je%20souhaite%20plus%20d'informations.">
        lisatastevin.psychomot@gmail.com
    </a>`
                }
            },
            { once: true }
        )
    })
}

clickToUncover()
