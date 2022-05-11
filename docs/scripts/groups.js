import {fetchData, getCurrentUser} from './main.js';

const create = document.getElementById('create');
if (create) create.addEventListener('click', createGroup);

function createGroup(e) {
    e.preventDefault();

    const groupName = document.getElementById('groupName').value;
    const userId = getCurrentUser().user_id;
    console.log(groupName);

    fetchData('/groups', {group_name:groupName, user_id:userId}, 'POST')
    .then((data) => {
        if (!data.message) {
            console.log(data); 
        }
        else{
            console.log("HELLLLLLOOOOOOO");
        }
    });

}

// function addGroup(){
    
// }