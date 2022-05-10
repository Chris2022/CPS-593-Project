import {fetchData, getCurrentUser} from './main.js';

const create = document.getElementById('create');
if (create) create.addEventListener('click', createGroup);

function createGroup(e) {
    e.preventDefault();

    const groupName = document.getElementById('groupName').value;
    const userId = getCurrentUser().user_id;

    fetchData('/groups/create', {groupName, userId}, 'POST')
    .then((data) => {
        if (!data.message) {
            window.location.href = 'dashboard.html';
        }});
}