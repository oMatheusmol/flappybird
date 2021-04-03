const block = document.getElementById('block')
const hole = document.getElementById('hole')
const character = document.getElementById('character')
block.onclick = jump
let count =0
hole.addEventListener('animationiteration', () => {
    let random = -((Math.random() * 240) + 150)
    hole.style.top = random + "px"
})

setInterval(function () {
    let characterTop =
        parseInt(window.getComputedStyle(character).getPropertyValue("top"))
    if (jumping === false) {
        character.style.top = (characterTop + 3) + "px"
    }

    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"))
    let cTop = -(300-characterTop)
    if (characterTop > 280 || ((blockLeft<70)&&(blockLeft>40)&&((cTop<holeTop)||(cTop>holeTop+130)))) {
        let math = Math.round(count/25)
        alert('Game Over! You made '+math+' pontos')
        character.style.top = 100 + 'px'
        count = 0
    }

    if(blockLeft<75){
        count += 1
        console.log(count)
    }


}, 20)

let jumping = false

function jump() {
    console.log('clique')
    jumping = true
    let jumpCount = 0
    let jumpInterval = setInterval(function () {
        let characterTop =
            parseInt(window.getComputedStyle(character).getPropertyValue("top"))
        if((characterTop>6)){
            character.style.top = (characterTop - 3) + "px"
        }
        if(jumpCount>20){
            clearInterval(jumpInterval)
            jumping = false
            jumpCount=0
        }
            

        jumpCount++

    }, 15)
}
