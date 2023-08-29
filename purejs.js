const field = document.querySelector('.container')

const FIELD_SIZE = 20
const CELL_SIZE = 30

function constructHtmlField(FIELD_SIZE){
    let html = ""
    for (let index = 0; index < FIELD_SIZE; index++) {
        html += '<ul>'
        for (let index = 0; index < FIELD_SIZE; index++) {        
            html += "<li></li>"
        }
        html += "</ul>"
    }
    return html
}

field.innerHTML = constructHtmlField(FIELD_SIZE)

// include snake head

let rows = field.children

let y = FIELD_SIZE / 2
let x = y
let snakeHead = rows[y].children[x]

snakeHead.classList.add('snake-head')

// movement
let movingRight = false, movingLeft = false, movingUp = false , movingDown = false
document.addEventListener('keydown', (event) => {
    switch (event.key){
        case "ArrowUp":
            movingUp = true, movingLeft = false, 
            movingDown = false, movingRight = false
        break
        case "ArrowDown":
            movingUp = false, movingLeft = false, 
            movingDown = true, movingRight = false
        break
        case "ArrowLeft":
            movingUp = false, movingLeft = true, 
            movingDown = false, movingRight = false
        break
        case "ArrowRight": 
            movingUp = false, movingLeft = false, 
            movingDown = false, movingRight = true
        break
    }
})


let snakeHeadChildren = []

console.log(snakeHeadChildren)
setInterval(() => {
    if(movingUp) {
        y--
        // rows[y + 1].children[x].classList.remove('snake-head');
    }
    if(movingDown){
        y++
        // rows[y - 1].children[x].classList.remove('snake-head');
    }
    if(movingLeft) {
        x--
        // rows[y].children[x + 1].classList.remove('snake-head');
    }
    if(movingRight) {
        x++
        // rows[y].children[x - 1].classList.remove('snake-head');
    }

    if(!snakeHeadChildren.includes(rows[y].children[x]) )
        snakeHeadChildren.push(rows[y].children[x])

    for (const snakeHeadChild of snakeHeadChildren) {
        snakeHeadChild.classList.add('snake-head')
    }

    console.log(snakeHeadChildren);

    for (let i = 0; i < FIELD_SIZE; i++) {
        for (let j = 0; j < FIELD_SIZE; j++) {
            const element = rows[i].children[j]
            if(element.classList.contains('snake-head')
                && !snakeHeadChildren.includes(element) ) element.classList.remove('snake-head')
        }
    }
    if(snakeHeadChildren.length != 1) snakeHeadChildren.shift()
}, 500)

// spawn apple


function spawnApple(){
    let apple = rows[y + 2].children[x + 2]
    apple.classList.add('.apple')
}

spawnApple()