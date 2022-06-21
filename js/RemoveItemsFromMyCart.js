
const DeleteItems = () => {        
    let CartMenuParagraph = document.querySelector('#CartMenuParagraph') 
    
    let ItemsInMycartWrap = document.querySelector('#ItemsInMycartWrap')
    
    ItemsInMycartWrap.classList.add('hidden')
    CartMenuParagraph.classList.remove('hidden')
}