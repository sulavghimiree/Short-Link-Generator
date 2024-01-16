const userName = document.querySelector(".username");
const password = document.querySelector(".password");
const loginButton = document.querySelector(".login");
const errMsg = document.querySelector(".error-msg");

loginButton.addEventListener("click", async (e) => {
  e.preventDefault();
  let data = {
    username: userName.value,
    password: password.value,
  };
  console.log(data);

  const rsp = await fetch("http://localhost:8080/user/login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  });

  // const customHeader = rsp.headers["Uid"];
  console.log(rsp.headers.get("Uid"));
  const rspData = await rsp.json();
  // console.log(customHeader);

  if (rspData.success != true) {
    errMsg.textContent = rspData.msg;
    return;
  }
  //window.location.href = "/public/home.html";
});
