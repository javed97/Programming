const http = new XMLHttpRequest();
const addbtn = document.getElementById("add");
const postData = document.getElementById("post");
const addOverlay = document.getElementById("addOverlay");
const closeAddOverlay = document.getElementById("close");
const updatebtn = document.getElementById("updateNavbarButton");
const updateOverlay = document.getElementById("updateOverlay");
const putbtn = document.getElementById("updateOverlayPutButton");
const closeUpdateOveralay = document.getElementById("updateOverlayCloseButton");
const deletebtn = document.getElementById("deleteNavbarButton");
const deleteOverlay = document.getElementById("deleteOverlay");
const deleteData = document.getElementById("deleteOverlayDeleteButton");

const formData = new FormData();

let url = "http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students/";
http.open("GET", url);
http.send();

http.onreadystatechange = getReq;

function getReq() {
  if (http.readyState == 4 && http.status == 200) {
    let res = JSON.parse(http.responseText);
    console.log(res); // Got an array

    res.forEach((element, index) => {
      let tableBody = document.getElementById("table");
      let tr = getTr();
      tableBody.appendChild(tr);
      tr.appendChild(getTd(index + 1));
      tr.appendChild(getTd(element.name));
      tr.appendChild(getTd(element.id));
      tr.appendChild(getTd(element.age));
      tr.appendChild(getTd(element.email));
      tr.appendChild(getTd(element.rollNo));
      tr.appendChild(getTd(element.date));
      tr.appendChild(getTd(element.isMale));
      tr.appendChild(getEditBtn());
      tr.appendChild(getDelBtn());
    });
  }
}

function getEditBtn() {
  let editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.onclick = function () {
    updateOverlayCommon();
  };
  return editBtn;
}

function getDelBtn() {
  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.onclick = delOverlayCommon;
  return delBtn;
}

function getTr() {
  let tr = document.createElement("tr");
  return tr;
}

function getTd(data) {
  let td = document.createElement("td");
  td.innerText = data;
  return td;
}

function getTh() {
  let th = document.createElement("th");
  return th;
}

addbtn.onclick = function () {
  addOverlay.classList.remove("hide");
  addOverlay.classList.add("show");
};

closeAddOverlay.onclick = function () {
  addOverlay.classList.add("hide");
  addOverlay.classList.remove("show");
};

updatebtn.addEventListener("click", updateOverlayCommon);
function updateOverlayCommon() {
  updateOverlay.classList.remove("hide");
  updateOverlay.classList.add("show");
}

closeUpdateOveralay.addEventListener("click", closeUpdateOverlay);
function closeUpdateOverlay() {
  updateOverlay.classList.add("hide");
  updateOverlay.classList.remove("show");
}

deletebtn.addEventListener("click", delOverlayCommon, true);

function delOverlayCommon(e) {
  deleteOverlay.classList.remove("hide");
  deleteOverlay.classList.add("show");
  console.log(e);
  // e.stopPropagation();

  document.addEventListener("click", function (e) {
    let input = document.getElementById("deleteID");
    let delBtn = document.getElementById("deleteOverlayDeleteButton");
    console.log(e);
    if (e.target !== input || e.target !== delBtn) {
      deleteOverlay.classList.add("hide");
      deleteOverlay.classList.remove("show");
    }
  }, true);
}

postData.addEventListener("click", postReq);

function postReq() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let rollNo = document.getElementById("rollno").value;
  let email = document.getElementById("email").value;
  let isMale = document.getElementById("male").checked;
  let data = {
    name,
    age,
    rollNo,
    email,
    isMale,
  };

  console.log(data);

  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let res = http.responseText;
      console.log(res);
    }
  };

  http.open("POST", url);
  http.setRequestHeader("Content-type", "application/json");
  http.send(JSON.stringify(data));
}

putbtn.addEventListener("click", updateReq);

function updateReq(e) {
  console.log(e);
  let id = document.getElementById("updateOverlayID").value;
  let name = document.getElementById("updateOverlayName").value;
  let age = document.getElementById("updateOverlayAge").value;
  let rollNo = document.getElementById("updaterOverlayRollno").value;
  let email = document.getElementById("updateOverlayEmail").value;
  let isMale = document.getElementById("male").checked;
  let data = {
    id,
    name,
    age,
    rollNo,
    email,
    isMale,
  };

  url = url + id;
  console.log(url);

  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let res = http.responseText;
      console.log(res);
    }
  };

  http.open("PUT", url);
  http.setRequestHeader("Content-type", "application/json");
  http.send(JSON.stringify(data));
}

deleteData.addEventListener("click", deleteReq);
function deleteReq() {
  let id = document.getElementById("deleteID").value;
  url = url + id;
  console.log(url);

  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let res = http.responseText;
      console.log(res);
    }
  };

  http.open("DELETE", url);
  http.setRequestHeader("Content-type", "application/json");
  http.send();
}
