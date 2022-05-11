import {fetchData, getCurrentUser} from './main.js';

const create = document.getElementById('create');
if (create) create.addEventListener('submit', createGroup);
console.log(create + " JFSDFDFSF ");

function createGroup(e) {
    console.log("HELLO");
    e.preventDefault();

    const groupName = document.getElementById('groupName').value;
    const userId = getCurrentUser().user_id;
    console.log(userId);

    fetchData('/groups', {group_name:groupName, user_id:userId}, 'POST')
    .then((data) => {
        if (!data.message) {
            console.log(data + 'HEREEE '); 
        }
        else{
            console.log("HELLLLLLOOOOOOO");
        }
    });

}

// function addGroup(){
    
// }