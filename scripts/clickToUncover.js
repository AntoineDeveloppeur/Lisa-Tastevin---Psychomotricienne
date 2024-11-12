function clickToUncover() {
    const elementToUncover = document.querySelectorAll(
        '.OuMeTrouver__flexbox1__bloc1__ul__li__clickToUncover'
    )
    elementToUncover.forEach((element) => {
        element.addEventListener('click', () => onClick(element), {
            once: true,
        })
    })
}

function onClick(e) {
    if (e.classList.contains('phone')) {
        e.innerHTML = ''
        e.innerHTML = "<a href='tel:+33637335510'>06 37 33 55 10</a>"
    }
    if (e.classList.contains('mail')) {
        e.innerHTML = ''
        e.innerHTML = `
<a style="margin='auto'" href="mailto:lisatastevin.psychomot@gmail.com?subject=Demande%20d'information&body=Bonjour,%20je%20souhaite%20plus%20d'informations.">
lisatastevin.psychomot@gmail.com
</a>`
    }
}

clickToUncover()
