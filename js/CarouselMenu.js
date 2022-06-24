const Active = document.querySelectorAll(".Active")
let imageInFocus = 0
const primaryImage = document.querySelectorAll('.primaryImage')
const NumberOfImages = primaryImage.length

Active.forEach( Active => {
    Active.addEventListener('click', () => {
        const isPrevious = Active.classList.contains('arrowPrevious')

        if( isPrevious) {
            imageInFocus -= 1
        } else {
            imageInFocus += 1
        }

        if (imageInFocus >= NumberOfImages) {
            imageInFocus = 0
        } 

        if( imageInFocus < 0) {
            imageInFocus = NumberOfImages -1
        }
        // console.log('yes baby', isPrevious, imageInFocus)

        primaryImage.forEach( () => {
            
            primaryImage[imageInFocus].scrollIntoView({
                inline: "center"
            })
        })
    })
})