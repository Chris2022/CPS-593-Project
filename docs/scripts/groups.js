import { fetchData, getCurrentUser } from "./main.js";

const create = document.getElementById("create");
if (create) create.addEventListener("submit", createGroup);
if (create) create.addEventListener("submit", getGroupInfo);
function createGroup(e) {
    e.preventDefault();
    const groupName = document.getElementById("groupName").value;
    const userId = getCurrentUser().user_id;
    fetchData(
        "/groups/create",
        { group_name: groupName, user_id: userId },
        "POST"
    ).then((data) => {
        if (!data.message) {
            window.alert("Group Created!");
        } 
        else if (data.message) {
            window.alert("Group Name already exists, please choose another name!");
        }
        else{
            window.alert("Error!");
        }
    });
}

function getGroupInfo(e) {
    e.preventDefault();
    const userId = getCurrentUser().user_id;
    const groupName = document.getElementById("groupName").value;
    fetchData(
        "/groups/info",
        { group_name: groupName, user_id: userId },
        "POST"
    ).then((data) => {
        console.log("hi")
        if (!data.message) {
            console.log(data)
            const ul = document.getElementById("myGroup");
            if (ul) {
                ul.innerHTML="";
                for (let index = 0; index < data.length; index++) {
                   ul.innerHTML += ` <li>
                   <div class="card" id="GROUPS" >
                   <div class="card-body">
                   <h2 class="card-title">${data[index].group_name}</h2>
                   <a href="#" class="card-link">Edit</a>
                   <a href="#" class="card-link" id="${data[index].group_name}">Delete</a>
                    </div></div>
                    </li>`;
                }
                for (let index = 0; index < data.length; index++) {
                    let btn = document.getElementById(`${data[index].group_name}`);
                    if(btn) btn.addEventListener("click", deleteGroup);
                }
            }

        }
    });
}
// const erase_from_existance = document.getElementById("delete");
// if(erase_from_existance) erase_from_existance.addEventListener("click", deleteGroup);
const myGroup = document.getElementById("myGroup");


function deleteGroup(e) {
    const userId = getCurrentUser().user_id;
    let group_name_id = e.target.id;
    let div = e.target.parentElement.parentElement.parentElement; //this is li
    myGroup.removeChild(div);
    e.preventDefault();
    fetchData('/groups/delete', {group_name: group_name_id, user_id: userId}, "DELETE")
    .then((data) => {
        if(!data.message) {
            window.alert("Group Deleted!");
        }
    })
} 

