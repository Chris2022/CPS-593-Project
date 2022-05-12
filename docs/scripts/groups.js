import {fetchData, getCurrentUser} from './main.js';

const create = document.getElementById('create');
if (create) create.addEventListener('submit', createGroup);
function createGroup(e) {
    e.preventDefault();
    const groupName = document.getElementById('groupName').value;
    const userId = getCurrentUser().user_id;
    fetchData('/groups/create', {group_name:groupName, user_id:userId}, 'POST')
    .then((data) => {
        console.log("DO I GET HERE?");
        if (!data.message) {
            console.log("Was the group Created?");
            window.alert("Group Created!");
        }
        else{
            console.log("Group was not created");
            window.alert("Group Name already exists, please choose another name");
        }
    });

}

// function getGroupInfo(e) {
//     e.preventDefault();
//     const userId = getCurrentUser().user_id;
//     const groupName = document.getElementById('groupName').value;
//     fetchData('/groups/info', {group_name:groupName, user_id:userId}, 'POST')
//     .then((data) => {
//         if (!data.message) {
//             const name = document.getElementById('group-name');
//             if(name){
//                 name.innerHTML = data.group_name;
//             }
//         }
//     });
// }
// if (create) create.addEventListener('submit', getGroupInfo);