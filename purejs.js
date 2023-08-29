const field = document.querySelector('.container')

const FIELD_SIZE = 10
const CELL_SIZE = 30

function constructHtmlField(FIELD_SIZE) {
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
let apple = randomizeApplePosition()

function randomizeApplePosition(){
    let apl = rows[FIELD_SIZE - Math.floor(Math.random() * FIELD_SIZE)]
        .children[FIELD_SIZE - Math.floor(Math.random() * FIELD_SIZE)];
    if(apl.classList.contains('snake-head')) randomizeApplePosition()
    apl.classList.add('apple')
    return apl
}

snakeHead.classList.add('snake-head')
// movement
let movingRight = false, movingLeft = false, movingUp = false, movingDown = false
document.addEventListener('keydown', (event) => {
    switch (event.key) {
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

function changeXandYonMovement() {
    // moving inputs action to change X and Y
    if (movingUp) {
        y--
        // rows[y + 1].children[x].classList.remove('snake-head');
    }
    if (movingDown) {
        y++
        // rows[y - 1].children[x].classList.remove('snake-head');
    }
    if (movingLeft) {
        x--
        // rows[y].children[x + 1].classList.remove('snake-head');
    }
    if (movingRight) {
        x++
        // rows[y].children[x - 1].classList.remove('snake-head');
    }
}

setInterval(() => {
    changeXandYonMovement();

    // If statement makes one field sell not to add itself to @snakeHeadChildren continuously
    if (!snakeHeadChildren.includes(rows[y].children[x]))
        snakeHeadChildren.push(rows[y].children[x])

    for (const snakeHeadChild of snakeHeadChildren) {
        snakeHeadChild.classList.add('snake-head')
    }

    console.log(snakeHeadChildren);

    for (let i = 0; i < FIELD_SIZE; i++) {
        for (let j = 0; j < FIELD_SIZE; j++) {
            const element = rows[i].children[j]
            if (element.classList.contains('snake-head')
                && !snakeHeadChildren.includes(element)) element.classList.remove('snake-head')

            // make snake longer when it eats an apple
            if (element.classList.contains('snake-head') && element.classList.contains('apple')) {
                element.classList.remove('apple')
                apple = randomizeApplePosition()
                snakeHeadChildren.push(rows[y].children[x])

            }
        }
    }
    if (snakeHeadChildren.length != 1) snakeHeadChildren.shift()

    apple.classList.add('apple')
    // console.log("apple: " + apple);


}, 500)


