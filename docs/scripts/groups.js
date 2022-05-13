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
            const name = document.getElementById("group-name");
            if (name) {
                console.log(data)
                for (let index = 0; index < data.length; index++) {
                    name.innerHTML += `<li>${data[index].group_name}</li>`;
                }
            }
        }
    });
}


// const myGroup = document.getElementById("myGroup");
// if (myGroup) myGroup.addEventListener("submit", showAllGroups);

// function showAllGroups(e) {
//     e.preventDefault();
//     const userId = getCurrentUser().user_id;
//     fetchData("/groups/all", { user_id: userId }, "POST").then((data) => {
//         if (!data.message) {
//             for (let i = 0; i < data.length; i++) {
//                 myGroup.innerHTML += `
//           <div class="card">
//             <div class="card-body">
//                 <h2>Group: <span class="group-name">${data[i].group_name} </span</h2>
//             </div>
//             </div>
//           `;
//             }
//         }
//     });
// }
