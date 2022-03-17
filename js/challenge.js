let timerID = setInterval(addCounter, 1000)

document.addEventListener('DOMContentLoaded', () => {
    //after doing so, find a method to increase the counter.innerHTML by 1 every second
    timerID;
    plusButton()
    minusButton()
    heartButton()
    pauseButton()
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

    let increaseLikes = 0

    heartButton.addEventListener('click', () => {
        const likeHolder = document.querySelector('.likes')
        console.log(likeHolder)
        ++increaseLikes
        const counter = document.getElementById('counter')
        //which will then get access to the ul of the likes by its class ="likes" by using querySelector 
        //create li tag to store the comment 

        const likeLi = document.getElementById(`${counter.innerHTML}`)
        console.log("LIKE", likeLi)




        if(likeLi != null){
            likeLi.innerText = `${counter.innerHTML} has been liked ${increaseLikes} times`
            // ++increaseLikes
        } else {
        increaseLikes = 1
        const likeComment = document.createElement('li')
        likeComment.id = counter.innerHTML

        likeComment.dataset.num = `${counter.innerHTML}`
        likeComment.innerText = `${counter.innerHTML} has been liked ${increaseLikes} times`

        likeHolder.append(likeComment)


        }

    })
}

//pause the counter 
//disable all buttons except the pause button
//switch the label on the button from "pause" to "resume"

//what do do first?
//get access to the pause button by the id 
//add click event listener which will change the inner text of the pause button to resume 

function pauseButton(){
    const pause = document.getElementById('pause')
    pause.addEventListener('click', () => {
        if(pause.innerText === "pause"){
            pause.innerText = "resume"
            clearInterval(timerID)
        } else {
            pause.innerText = "pause"
            setTimeout(addCounter,1000)
            
        }
    })
}