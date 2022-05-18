console.log('testing...')

const hamb = document.querySelector("#ham")
const menus = document.querySelector("#menu")

hamb.addEventListener('click', () => {
    if(menus.classList.contains('hidden')){
        menus.classList.remove('hidden');
    }
    else{
        menus.classList.add('hidden');
    }
})