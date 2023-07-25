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
// let num =rows.length/2
// setInterval(() => {

//     num++
//     rows[num].children[num].classList.add('snake-head')
//     rows[num - 1].children[num - 1].classList.remove('snake-head')
// }, 500)