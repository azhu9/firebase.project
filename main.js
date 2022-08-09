const database = firebase.database().ref();

const authorInput = document.querySelector('#author');
const contentInput = document.querySelector('#content');
const dateInput = document.querySelector('#date');
const submit = document.querySelector('#submitBtn')

submit.onclick = updateDB;

function updateDB (event){
    //pevent default refresh
    event.preventDefault();
//create data object
const data = {
    Author: authorInput.value,
    Content: contentInput.value,
    Date: dateInput.value
}
console.log(data);

//write to our database
database.push(data)
authorInput.value = ''
contentInput.value = ''
dateInput.value = ''


}