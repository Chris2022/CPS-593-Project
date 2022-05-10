import { fetchData } from "./main";

const contact = document.getElementById("call");
if(contact) contact.addEventListener('submit', sendMessage);

function sendMessage(e) {
    e.preventDefault();
    console.log("Sending message...");
    const contact_name = document.getElementById("name").value;
    const contact_email = document.getElementById("email").value;
    const contact_message = document.getElementById("message").value;
    console.log(contact_name, contact_email, contact_message);
    fetchData('/contact', {contact_name, contact_email, contact_message}, "POST")
    .then((data) => {
        if(!data.message) {
            alert("Message sent!");
        }
    })

}