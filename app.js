let input = document.getElementById("input");
let list = document.getElementById("list");
function Add_List() {
  if (input.value.length > 0) {
    let checkdata = validation(input);
    if (checkdata == true) {
      let listElement = document.createElement("li");
      let listText = document.createTextNode(input.value);
      listElement.appendChild(listText);
      list.appendChild(listElement);
      input.value = "";
      let liInput = document.createElement("input");
      liInput.setAttribute("style", "display:none;");
      let text = document.createElement("p");
      text.appendChild(listText);
      listElement.appendChild(text);
      text.setAttribute(
        "style",
        "width:27vw;display:inline-block;overflow:hidden;margin:0px;"
      );

      let editBtn = document.createElement("button");
      let editBtnimg = document.createElement("img");
      editBtnimg.src =
        "https://img.icons8.com/?size=64&id=AWPFmbr0eZkC&format=png";
      editBtnimg.setAttribute(
        "style",
        "height:50px;width:50px; margin-right:7px;"
      );

      let deleteBtn = document.createElement("button");
      let deleteBtnimg = document.createElement("img");
      let updateBtn = document.createElement("button");
      let updateBtnimg = document.createElement("img");
      updateBtnimg.src = "https://img.icons8.com/?size=48&id=81319&format=png";
      updateBtn.appendChild(updateBtnimg);
      updateBtn.setAttribute("class", "butn");
      updateBtnimg.setAttribute("style", "height:40px;width:40px;");
      updateBtn.setAttribute("style", "display:none;");
      updateBtn.setAttribute("onclick", "update(this)");
      deleteBtnimg.setAttribute("style", "height:35px;width:35px;");
      deleteBtnimg.src = "https://img.icons8.com/?size=48&id=11997&format=png";
      deleteBtn.setAttribute("class", "butn");
      editBtn.setAttribute("class", "butn");
      deleteBtn.appendChild(deleteBtnimg);
      editBtnimg.setAttribute("style", "height:35px;width:35px;");
      deleteBtn.setAttribute("onclick", "deleteData(this)");
      editBtn.appendChild(editBtnimg);
      editBtn.setAttribute("onclick", "editbtn(this)");
      listElement.appendChild(liInput);
      listElement.appendChild(editBtn);
      listElement.appendChild(deleteBtn);
      listElement.appendChild(updateBtn);

      console.log(listElement.parentNode.childNodes);
    } else {
      input.value = "";
    }
  }
}

function validation(data) {
  let checkdata = false;

  for (var i = 0; i < data.value.length; i++) {
    if (data.value.toString().charCodeAt(i) != 32) {
      checkdata = true;
      break;
    }
  }
  return checkdata;
}
function deleteData(e) {
  e.parentNode.remove();
}
function editbtn(e) {
  for (let i = 0; i < list.childNodes.length; i++) {
    list.childNodes[i].childNodes[1].setAttribute("style", "display:none;");
    list.childNodes[i].childNodes[0].setAttribute(
      "style",
      "width:27vw;display:inline-block;overflow:hidden;margin:0pxz;"
    );
    list.childNodes[i].childNodes[2].setAttribute("style", "display:inline;");
    list.childNodes[i].childNodes[3].setAttribute("style", "display:inline;");
    list.childNodes[i].childNodes[4].setAttribute("style", "display:none;");
  }
  e.parentNode.childNodes[1].value = e.parentNode.childNodes[0].innerText;
  e.parentNode.childNodes[1].setAttribute(
    "style",
    "width:27vw;display:inline-block;overflow:hidden;margin:0px;"
  );
  e.parentNode.childNodes[1].setAttribute("class", "editinput");
  e.parentNode.childNodes[0].setAttribute("style", "display:none;");
  e.parentNode.childNodes[2].setAttribute("style", "display:none;");
  e.parentNode.childNodes[3].setAttribute("style", "display:none;");
  e.parentNode.childNodes[4].setAttribute("style", "display:inline;");
}
function update(h) {
  h.parentNode.childNodes[4].setAttribute("style", "display:none;");
  h.parentNode.childNodes[3].setAttribute("style", "display:inline;");
  h.parentNode.childNodes[2].setAttribute("style", "display:inline;");
  h.parentNode.childNodes[0].innerText = h.parentNode.childNodes[1].value;
}
