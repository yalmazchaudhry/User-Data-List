let userData = JSON.parse(localStorage.getItem("userData")) || [];
let currentUser = localStorage.getItem("currentUser");
console.log(currentUser);
if (currentUser == "logged out") {
  window.location.href = "./html/login.html";
}

let i = userData.findIndex((a) => {
  console.log(a, "i am a");
  if (currentUser == a.email) {
    let imgSrc = "";
    if (a.img) {
      imgSrc = a.img;
    } else {
      imgSrc = "./assets/images/avatar.png";
    }
    const profileImg = `<img
    style="width: 80px; height: 80px"
    id="uyt"
    class="img-fluid rounded-circle"
    src="${imgSrc}"
    alt=""
  /><p>${a.firstName} ${a.lastName}</p>
  <p>${a.email}</p>`;
    document.getElementById("pfImage").innerHTML = profileImg;
    return currentUser == a.email;
  }
  // else {
  //   window.location.href = "../html/login.html";
  // }
});
console.log(i);

let currentUserData = userData[i];

console.log(userData);
JSON.parse(localStorage.getItem("userData")).some((data) => {
  let imgSrc = "";
  if (data.img) {
    imgSrc = data.img;
  } else {
    imgSrc = "./assets/images/avatar.png";
  }

  const html = `<tr>
    <td class="border"><img style="width: 80px; height: 80px" src="${imgSrc}" alt="" /></td>
    <td class="border text-center p-2">${data.firstName} ${data.lastName}</td>
    <td class="border text-center p-2">${data.email}</td>
  </tr>`;
  document.getElementById("tablex").innerHTML += html;
});

const image_input = document.querySelector("#image-input");
image_input.addEventListener("change", function () {
  const reader = new FileReader();
  reader.readAsDataURL(this.files[0]);

  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    userData[i].img = uploaded_image;
    localStorage.setItem("userData", JSON.stringify(userData));
    console.log(uploaded_image);
    document.getElementById("uyt").src = uploaded_image;
  });
});
