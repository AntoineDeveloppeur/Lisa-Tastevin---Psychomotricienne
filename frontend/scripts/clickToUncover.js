// function clickToUncover() {
//     const elementToUncover = document.querySelectorAll(
//         '.OuMeTrouver__flexbox1__bloc1__ul__li__clickToUncover'
//     )
//     elementToUncover.forEach((element) => {
//         element.addEventListener(
//             'click',
//             () => {
//                 if (element.classList.contains('phone')) {
//                     element.innerHTML = ''
//                     element.innerHTML =
//                         "<a href='tel:+33637335510'>06 37 33 55 10</a>"
//                 }
//                 if (element.classList.contains('mail')) {
//                     element.innerHTML = ''
//                     element.innerHTML = `
//     <a style="margin='auto'" href="mailto:lisatastevin.psychomot@gmail.com?subject=Demande%20d'information&body=Bonjour,%20je%20souhaite%20plus%20d'informations.">
//         lisatastevin.psychomot@gmail.com
//     </a>`
//                 }
//             },
//             { once: true }
//         )
//     })
// }

import { isHuman } from './index.js'

export async function clickToUncover(buttonId) {
    try {
        const condition = await isHuman()
        if (!condition) {
            return
        }
        const element = document.getElementById(buttonId)
        console.log(buttonId)
        if (element.id === 'phoneToUncover') {
            element.innerHTML = "<a href='tel:+33637335510'>06 37 33 55 10</a>"
        }
        if (element.id === 'emailToUncover') {
            element.innerHTML = `
          <a style="margin='auto'" href="mailto:lisatastevin.psychomot@gmail.com?subject=Demande%20d'information&body=Bonjour,%20je%20souhaite%20plus%20d'informations.">
            lisatastevin.psychomot@gmail.com
          </a>`
        }
    } catch (error) {
        console.error('Erreur lors de la vérification :', error)
    }
}
// Autre façon de faire

// export async function clickToUncover(buttonId) {
//     const condition = await isHuman()
//     console.log('condition', condition)
//     if (!condition) {
//         return
//     }
//     const element = document.getElementById(buttonId)
//     console.log(buttonId)
//     if (element.id === 'phoneToUncover') {
//         element.innerHTML = ''
//         element.innerHTML = "<a href='tel:+33637335510'>06 37 33 55 10</a>"
//     }
//     if (element.id === 'emailToUncover') {
//         element.innerHTML = ''
//         element.innerHTML = `
//     <a style="margin='auto'" href="mailto:lisatastevin.psychomot@gmail.com?subject=Demande%20d'information&body=Bonjour,%20je%20souhaite%20plus%20d'informations.">
//         lisatastevin.psychomot@gmail.com
//     </a>`
//     }
// }
