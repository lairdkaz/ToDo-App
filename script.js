const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const item = document.getElementsByClassName('item')

let taskCount = 0;

function countItems() {
    itemCountSpan.innerHTML = list.childElementCount;
}

function countUnfinished() {
    let inputElems = document.getElementsByTagName("input"),
    count = 0;

    for (var i=0; i<inputElems.length; i++) {       
       if (inputElems[i].type == "checkbox" && inputElems[i].checked == false){
          count++;
       }
    }
    uncheckedCountSpan.innerHTML = count;
 }

function newTodo(taskCount) {
    taskCount++;

    var itemText = document.createElement('li');
    itemText.classList.add("item");
    itemText.innerHTML = "<input type='text' value='' class='taskText'/><input type='checkbox' value=''onclick='countUnfinished()' class='todo-checkbox'/><button class='todo-delete' type='button' onclick='remove()'>Delete</button>";

    list.appendChild(itemText);
    
    countItems();
    countUnfinished();
}

function remove() {
  if (item.length > 0) {
    list.removeChild(item[item.length - 1]);
  
  countItems();
  countUnfinished();
  }
}
