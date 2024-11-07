export function responsivePreload() {
    const screenWidth = window.innerWidth
    switch (true) {
        case screenWidth > 627 && screenWidth < 1024:
            addLinkInHead('./pics/background-blue-1024w.webp')
            break
        case screenWidth >= 1024:
            addLinkInHead('./pics/background-blue-1440w.webp')
            break
    }

    function addLinkInHead(href) {
        let link = document.createElement('link')
        link.rel = 'preload'
        link.href = href
        link.as = 'image'

        document.head.appendChild(link)
    }
}
