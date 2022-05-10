import {
  fetchData,
  getCurrentUser,
  setCurrentUser,
  removeCurrentUser,
  logout,
} from "./main.js";
const deactivate = document.getElementById("deactivate");
if (deactivate) deactivate.addEventListener("submit", deleteAccount);

function deleteAccount() {
  if (confirm("Are you sure you want to delete your account???")) {
    fetchData("/users/delete", { userId: user.user_id }, "DELETE")
      .then((data) => {
        if (!data.message) {
          removeCurrentUser();
          logout();
          window.location.href = "register.html";
        }
      })
      .catch((error) => {
        const errText = error.message;
        document.querySelector("#profile div p.error").innerHTML = errText;
        console.log(`Error! ${errText}`);
      });
  }
}
