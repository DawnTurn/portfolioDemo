const cursor = document.querySelector('.cursor')
const links = document.querySelectorAll('ul li a')
const socials = document.querySelectorAll('.socials a')
const heroHeading = document.querySelector('.hero-heading')

window.addEventListener('mousemove', mouse)

function mouse(e){
    cursor.style.top = e.pageY + 'px'
    cursor.style.left = e.pageX + 'px'
}

socials.forEach(social => {
    social.addEventListener('mouseover', () => {
        cursor.classList.add('expand-s')
    })

    social.addEventListener('mouseleave', () => {
        cursor.classList.remove('expand-s')
    })
})

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        cursor.classList.add('expand-l')
    })

    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('expand-l')
    })
})

heroHeading.addEventListener('mouseover', () => {
    cursor.classList.add('expand-l')
})

heroHeading.addEventListener('mouseleave', () => {
    cursor.classList.remove('expand-l')
})