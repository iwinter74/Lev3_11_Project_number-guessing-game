let four = document.getElementById("four")
let five = document.getElementById("five")
let six = document.getElementById("six")
let custom = document.getElementById("custom")
let tries
let input
let num = getRandomInt(100)
let i = 0
let number = document.getElementById("number")

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

document.getElementById("input").style.display = "none"

myTries()

function myTries() {
    if (four.checked) {
        console.log("four")
        document.getElementById("input").style.display = "none"
        tries = 4
       
    } else if (five.checked) {
        console.log("five")
        document.getElementById("input").style.display = "none"
        tries = 5
      
    } else if (six.checked) {
        console.log("six")
        document.getElementById("input").style.display = "none"
        tries = 6
       
    } else if (custom.checked) {
        console.log("custom")
        document.getElementById("input").style.display = "inline-block"
        tries = document.getElementById("input").value
        document.getElementById("counts").innerHTML = `/${tries}`
    }
    console.log("tries" + tries)
    
}

function test() {
    if (i < tries-1) {
        console.log('test')
        document.getElementById("tries").style.display = "none"
        document.getElementById("counts").style.display = "block"
        document.getElementById("counts").innerHTML = `/${tries}`
        console.log(number.value)
        console.log(num)
        console.log(tries)
        i++
        document.getElementById("counts").innerHTML = `${i}/${tries}`
        console.log("tries" + tries)
        console.log(num)
        if (number.value < num) {
            document.getElementById("feedback").innerHTML = `${i} - You need to guess higher than ${number.value}, try again...`
        } else if (number.value > num) {
            document.getElementById("feedback").innerHTML = `${i} - You need to guess lower than ${number.value}, try again...`
        } else if (number.value == num) {
            document.getElementById("feedback").innerHTML = `Yes! You got me in ${i} guesses. I am ${num}`
        }
    } else {
        document.getElementById("feedback").innerHTML = `Sorry! You have had ${i+1} attempts. You have lost`
        document.getElementById("counts").innerHTML = `${i+1}/${tries}`
    }
    
}
