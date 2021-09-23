var input = document.getElementById('JsInput');
var btn = document.getElementById('JsBtn');
var bottom = document.getElementById('box');
var todos = [];

// elements create in Js

var card = document.createElement('div');
card.classList.add('card', 'text-left');
bottom.appendChild(card);

var cardBody = document.createElement('div');
cardBody.classList.add('card-body');
card.appendChild(cardBody);

var title = document.createElement('h4');
title.classList.add('card-title');
title.textContent = 'u need......';
cardBody.appendChild(title);

//add event listener = add

btn.addEventListener('click', function (e) {
    todos.push(input.value);
    input.value = '';
    title.textContent = todos;
})

// Delete btn create 

var deleteBtn = document.createElement('button');
deleteBtn.classList.add('btn' , 'btn__delete', 'btn-danger');
deleteBtn.textContent = 'Delete';
bottom.appendChild(deleteBtn);

// add event listener = delete

deleteBtn.addEventListener('click', function(e){
    todos.pop();
    if(todos == ''){
        title.textContent = 'u need....';
    }else{
        title.textContent = todos;
    }
})