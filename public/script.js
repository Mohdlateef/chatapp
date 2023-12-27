const form = document.getElementById("form");
const join_chat_btn = document.getElementById("join-chat");
const userNameInput = document.getElementById("username-input");
const chatRoom = document.querySelector(".chatroom-container");
join_chat_btn.addEventListener("click", (event) => {
  event.preventDefault();
  let username = userNameInput.value;
  if (username) {
    form.style.display = "none";
    chatRoom.style.display = "block";
  }
  form.reset();
});
