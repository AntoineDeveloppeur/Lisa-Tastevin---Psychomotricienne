export function responsivePreload() {
    const screenWidth = window.innerWidth
    console.log('screenWidth', screenWidth)

    let picToPreload

    switch (true) {
        case (window.innerWidth > 627) & (window.innerWidth < 1024):
            picToPreload = './pics/background-blue-1024w.webp'
            break
        case window.innerWidth >= 1024:
            picToPreload = './pics/background-blue-1440w.webp'
            break
    }

    let link = document.createElement('link')
    link.rel = 'preload'
    link.href = picToPreload
    link.as = 'image'

    document.head.appendChild(link)
}
