document.addEventListener('DOMContentLoaded', () => {
    //after doing so, find a method to increase the counter.innerHTML by 1 every second
    setInterval(addCounter, 1000)
    plusButton()
    minusButton()
    heartButton()
})

//get the timer to start
//how do we do this?
//first, get access to the value 0 from the specific element tag
function addCounter(){
    let counter = document.getElementById('counter')
    // console.log(counter.innerHTML)
    counter.innerHTML = ++counter.innerHTML

}


    function plusButton(){
    //plus buttons that increment the counter 
    //how do we do this?
    //first, get access to the plus button
    const plusButton = document.getElementById('plus')
    //what next? add a event listener that will listen to a click event
    //once the click event is heard, it will run a callback or anonymous arrow function 
    //which will increment the innerHTML of the counter 
    plusButton.addEventListener('click', () => {
    let counter = document.getElementById('counter')
    counter.innerHTML = ++counter.innerHTML
    })
}


    function minusButton(){
        //minus button that decrements the counter 
        //how do we do this?
        //first, get access to the minus button
        const minusButton = document.getElementById('minus')
        //what next? add a event listener that will listen to a click event
        //once the click event is heard, it will run a callback or anonymous arrow function 
        //which will decrement the innerHTML of the counter 
        minusButton.addEventListener('click', () => {
        let counter = document.getElementById('counter')
        counter.innerHTML = --counter.innerHTML
        })
    }

    function heartButton(){
    //like button that adds a 'like' comment for the number that is currently displayed by the timer 
    //how do we do this?
    //first, get access to the heart button by the id
    const heartButton = document.getElementById('heart')
    //what next? add an event listener that will listen to a click of that heart
    //that will run a callback or an anonymous arrow function 
    heartButton.addEventListener('click', () => {
        const likeHolder = document.querySelector('.likes')
        console.log(likeHolder)

        const counter = document.getElementById('counter')
        //which will then get access to the ul of the likes by its class ="likes" by using querySelector 
        //create li tag to store the comment 
        const likeComment = document.createElement('li')
        //set data attribute to the current value of the counter 
        likeComment.dataset.num = `${counter.innerHTML}`
        likeComment.innerText = `${counter.innerHTML} has been liked times`

        //create and add span tag to the li which is likeComment
        const span = document.createElement('span')
        



        likeComment.append(span)
        likeHolder.append(likeComment)


    })
}

//what's the next value that we are trying to interpolate??
