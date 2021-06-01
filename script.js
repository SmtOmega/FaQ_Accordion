const accordion  = document.querySelector('.accordion-container')

const items = accordion.querySelectorAll('li')
const questions = accordion.querySelectorAll('.question')

function toggleAnswer (){
    const getItems = this.parentNode

    items.forEach(item => {
        if(getItems === item){
            getItems.classList.toggle('open')
            return
        }
        item.classList.remove('open')
    })
   
}


questions.forEach(question => question.addEventListener('click', toggleAnswer))