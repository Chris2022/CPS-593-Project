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
        else {
            window.alert("Group Name already exists, please choose another name!");
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
        if (!data.message) {
            console.log(data);
            const ul = document.getElementById("myGroup");
            if (ul) {
                for (let index = 0; index < data.length; index++) {
                   ul.innerHTML += ` <li>
                   <div class="card" id="GROUPS" >
                   <div class="card-body">
                   <h2 class="card-title">${data[index].group_name}</h2>
                   <a href="#" class="card-link">Edit</a>
                   <a href="#" class="card-link" id="delete">Delete</a>
                    </div></div>
                    </li>`;
                }
            }
        }
    });
}
const erase_from_existance = document.getElementById("delete");
if(erase_from_existance) deleteGroup.addEventListener("click", deleteGroup);
function deleteGroup(e) {
    e.preventDefault();
    if(window.confirm("Are you sure you want to delete this group?")) {
        fetchData('/groups/delete', {group_name: groupName, user_id: userId}, "DELETE")
        .then((data) => {
            if(!data.message) {
                window.alert("Group Deleted!");
            }
        })
    }
} 

