//add an eventListener to the from
const form = document.querySelector('#itemForm'); // select form
 // select input box from form
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const department = document.querySelector('#department');
const roll_no = document.querySelector('#roll_no');
const p_candidate = document.querySelector('#p_candidate');
const vp_candidate = document.querySelector('#vp_candidate');
const gs_candidate = document.querySelector('#gs_candidate');
const as_candidate = document.querySelector('#as_candidate');
const ac_candidate = document.querySelector('#ac_candidate');
const ds_candidate = document.querySelector('#ds_candidate');
const itemList = document.querySelector('.item-list');
const clearButton = document.querySelector('#clear-list');

let todoItems = [];

const handleItem = function(itemName){

    const items = itemList.querySelectorAll('.item');
 
    items.forEach(function(item){
        
       
    })
}

const removeItem = function(item){
    console.log(item);
    const removeIndex = (todoItems.indexOf(item));
    console.log(removeIndex);
    todoItems.splice(removeIndex, 1);
}

const getList = function(todoItems){
    itemList.innerHTML = '';

        todoItems.forEach(function(item){
            itemList.insertAdjacentHTML('beforeend', `<div class="item my-3"><h5 class="item-name text-capitalize">${item}</h5><div class="item-icons"><a href="#" class="complete-item mx-2 item-icon"></a><a href="#" class="edit-item mx-2 item-icon"></a><a href="#" class="delete-item item-icon"></a></div></div>` );

            handleItem(item);
        });
}

const getLocalStorage = function(){

    const todoStorage = localStorage.getItem('todoItems');
    if (todoStorage === 'undefined' || todoStorage === null){
        todoItems = [];
    } else {
        todoItems = JSON.parse(todoStorage);
        getList(todoItems);
    }
}

const setLocalStorage = function(todoItems){
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
}

// get local storage from page
getLocalStorage();

//add an item to the List, including to local storage
form.addEventListener('submit', function(e){ 
    e.preventDefault();
    const itemName = [fname.value,lname.value,department.value,roll_no.value,p_candidate.value,vp_candidate.value,gs_candidate.value,as_candidate.value,ac_candidate.value,ds_candidate.value];
    
    if (itemName.length === 0){
        feedback.innerHTML = 'Please Enter Valid Value';
        feedback.classList.add('showItem', 'alert-danger');
        setTimeout(
            function(){
                feedback.classList.remove('showItem');
                }, 3000);
    } else {
        todoItems.push(itemName);
        setLocalStorage(todoItems);
        getList(todoItems);
        //add event listeners to icons;
        //handleItem(itemName);
    }
    
    
    fname.value = '';
    lname.value = '';
    department.value = '';
    roll_no.value = '';
    p_candidate.value = '';
    vp_candidate.value = '';
    gs_candidate.value = '';
    as_candidate.value = '';
    ac_candidate.value = '';
    ds_candidate.value = '';

    });

    //clear all items from the list
clearButton.addEventListener('click', function(){
    todoItems = [];
    localStorage.clear();
    getList(todoItems);
})



  

