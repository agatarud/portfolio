// const menu = document.querySelector('.portfolio-menu');
const menuLinks = document.querySelector('.portfolio-menu');

const highlightMenu = () => {
    const elem = document.querySelector('.portfolio-menu .highlight')
    const book1 = document.querySelector('.portfolio-menu #book_1')
    const book2 = document.querySelector('.portfolio-menu #book_2')
    const bookAR = document.querySelector('.portfolio-menu #book_AR')
    const covers = document.querySelector('.portfolio-menu #covers')
    const way = document.querySelector('.portfolio-menu #way')
    const post = document.querySelector('.portfolio-menu #post')
    const space3D = document.querySelector('.portfolio-menu #space3D')
    const anim = document.querySelector('.portfolio-menu #anim')
    const code = document.querySelector('.portfolio-menu #code')
    const sensbox = document.querySelector('.portfolio-menu #sensbox')
    const museum = document.querySelector('.portfolio-menu #museum')
    const draw = document.querySelector('.portfolio-menu #draw')

    // console.log(post)

    let scrollPos = window.scrollY

    // console.log(scrollPos)

    

    $(function(){
        if($('body').is('.PageType')){
    if(window.innerWidth > 960 && scrollPos < 1100){
        book1.classList.add('highlight')
        book2.classList.remove('highlight')
        return
    }else if(window.innerWidth > 960 && scrollPos < 2000){
        book2.classList.add('highlight')
        book1.classList.remove('highlight')
        bookAR.classList.remove('highlight')
        return
    } else if(window.innerWidth > 960 && scrollPos < 3000){
        bookAR.classList.add('highlight')
        covers.classList.remove('highlight')
        book2.classList.remove('highlight')
        return
    }else if(window.innerWidth > 960 && scrollPos < 3500){
        covers.classList.add('highlight')
        bookAR.classList.remove('highlight')
        way.classList.remove('highlight')
        return
    }else if(window.innerWidth > 960 && scrollPos < 4400){
        way.classList.add('highlight')
        covers.classList.remove('highlight')
        post.classList.remove('highlight')
        return
    }else if(window.innerWidth > 960 && scrollPos < 5100){
        post.classList.add('highlight')
        console.log('class added')
        way.classList.remove('highlight')
        space3D.classList.remove('highlight')
        return
    }else if(window.innerWidth > 960 && scrollPos < 6000){
        space3D.classList.add('highlight')
        post.classList.remove('highlight')
        anim.classList.remove('highlight')
        return
    }else if(window.innerWidth > 960 && scrollPos < 6600){
        anim.classList.add('highlight')
        space3D.classList.remove('highlight')
        code.classList.remove('highlight')
        return
    }else if(window.innerWidth > 960 && scrollPos < 7600){
        code.classList.add('highlight')
        anim.classList.remove('highlight')
        sensbox.classList.remove('highlight')
        return
    }else if(window.innerWidth > 960 && scrollPos < 8400){
        sensbox.classList.add('highlight')
        code.classList.remove('highlight')
        museum.classList.remove('highlight')
        return
    }else if(window.innerWidth > 960 && scrollPos < 9400){
        museum.classList.add('highlight')
        sensbox.classList.remove('highlight')
        draw.classList.remove('highlight')
        return
    }else if(window.innerWidth > 960 && scrollPos < 10000){
        draw.classList.add('highlight')
        museum.classList.remove('highlight')
        return
    }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);
    }
    )}
        

// document.addEventListener("click", e => {
//     const isDropdownButton = e.target.matches("[data-dropdown-button]")
//     if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

//     let currentDropdown
//     if (isDropdownButton){
//         currentDropdown = e.target.closest('[data-dropdown]')
//         currentDropdown.classList.toggle('active')
//     }

//     document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
//         if (dropdown === currentDropdown) return
//         dropdown.classList.remove('active')
//     })
// }
// )