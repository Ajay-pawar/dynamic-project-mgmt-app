var f = 1;
function toggleMenu() {
  if (f == 1) {
    document.getElementById("menuLeft").style.display = "none";
    f = 0;
    document.getElementById("contentRight").style.width = "100%";
  } else {
    document.getElementById("menuLeft").style.display = "block";
    f = 1;
  }
}

var cardData = [
  {
    name: "Dynamic 1"
  },
  {
    name: "Dynamic 2"
  }
];

function AddCardData(newCard) {
  cardData.forEach(function (value) {
    var addcard =
      '<div class="projectcard">' +
      "<p>" +
      value.name +
      "</p>" +
      "<ul>" +
      "<li>Task 1</li>" +
      "<li>Task 2</li>" +
      "</ul>" +
      "</div>";
    document.getElementById(newCard).innerHTML += addcard;
  });
}

var counter = 0;
function addBoard(data) {
  var cardId = "CardId_" + counter;
  var boardId = "ProjectId_" + counter;
  var menuId = "MenuId_" + counter;
  counter++;
  var newProject =
    '<div class="test" id=' +
    boardId +
    ">" +
    "<p>" +
    data.value +
    "</p>" +
    '<button type="button" onclick="removeProject(' +
    boardId +
    "," +
    menuId +
    ')"> Remove Project</button>' +
    '<div class="projects" id=' +
    cardId +
    ">" +
    "</div>" +
    "</div>";
  document.getElementById("passprojid").innerHTML += newProject;
  AddCardData(cardId);

  document.getElementById("menulist").innerHTML +=
    "<li id=" +
    menuId +
    ' style="list-style-type:none" onclick="loadmenu(' +
    boardId +
    ')">' +
    data.value +
    "</li>"; //rishabh's code
  boardnameinmenu = data.value;
}

function removeProject(element1, element2) {
  document.getElementById(element1.id).innerHTML = "";
  document.getElementById(element2.id).innerHTML = "";
}

function loadmenu(element) {
  console.log(element);

  document.getElementById(element.id).style.display = "block";
}
