//---------------------------------1

const array = ['Hello'];
const array2 = ['How are yoy?'];
const array3 = ['What are you doing?'];
const array4 = ['Can you help mi?'];
const array5 = ['Please!'];

const arr = [...array, ...array2, ...array3, ...array4, ...array5];
console.log(arr);

//---------------------------------2

const obj = {
    key: 'Rahim',
    key2: 'Saule',
    key3: 'Kyzjibek',
    key4: 'Abdurahman',
    key5: 'Onur'

};
console.log(obj);

const {key, key2, ...user} = obj;
console.log(user);

//-------------------------------------3

const list = [];

const addButton = document.getElementById('button');
const input = document.getElementById('input');

function listRender() {
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'list');

    for (let i = 0; i < list.length; i++){
        const div = document.createElement('div');
        div.setAttribute('class', 'todo');
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        li.innerText = list[i].text;
        div.append(ul);
        ul.append(li);
        mainDiv.append(div);
    }
    const form = document.querySelector('.button_add');
    document.querySelector('.list').remove();
    form.append(mainDiv);
}

addButton.onclick = function () {
    const obj = {
        id: list.length+1,
        text: input.value
    }
    list.push(obj);
    console.log(list);
    listRender();
};

