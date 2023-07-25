// const container = document.querySelector('.container')

const FIELD_SIZE = 5;

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


// 
