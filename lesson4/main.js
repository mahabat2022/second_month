const blocks = document.getElementById('block')
// console.log(blocks)

const blocks3 = document.getElementById('block3')
blocks3.className = "(changedClass"
blocks3.classList.add("adfdf")
blocks3.classList.remove("this")


blocks3.onclick = () => {
    blocks3.classList.toggle("active")
}


const block = document.getElementById('block')

    // console.log(block)
const button = document.getElementById('button');
const input = document.getElementById('input');

function createDewDiv() {
    const div = document.getElementById('div')
    const deleteButton = document.createAttribute('button')
    // element.addEventListener('click',function() {this.remove()});
    deleteButton.innerText = "delete"
    deleteButton.onclick = (event) => {
        e.path[1].remove()
        console.log(e)
        // console.log(e.remove)
    }
    div.setAttribute('class','block')
    div.innerText = input.value
    // document.body.append(div)
}

button.onclick = (event) => {
    console.log(event)
    console.log("chiked")
}

input.onchange = (event) => {
    console.log(event)
    console.log(event.target)
    console.log(event.target)
}