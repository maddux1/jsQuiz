// Setting an empty object. This includes step 1. A key that specifies the height of the pine tree. 
var treeObj = { 
  height : "",
  char : ""
};

// Creat a button to grab my value of both fields and submit to the object above. This includes step 2 which 
// requires that the value for the height of the tree to be from user input in a <input type="text"> field in the DOM.
// This is also part of steps 3 and which requires that a key that specifices which character to use to build the tree,
// and that the character to use should be from user input in a <input type="text"> field in the DOM.
var button = document.getElementById("btn");
button.addEventListener("click", function() {
  treeObj.height = document.getElementById("heightNum").value;
  treeObj.char = document.getElementById("sym").value;
  // The checkTree function below will test whether the fields are empty and if so, issue and alert. Note it is above tree();
  checkTree();
  // The tree function below initiates the function tree which is described below. 
  tree(treeObj);
});

// This is the function that tests to see that both fields are not empty. If not filled, an alert throws that 
// tells them to fill in the fields. 
function checkTree() {
  if (treeObj.height === "") {
    alert("please enter height!!");
  } 
  if (treeObj.char === "") {
    alert("please enter a character!!");
  }
};

// create an empty space variable for the function to work. 
var spaces = " ";
var symbolNumber = 1;

// Below is my tree function. It is a deadsimple for loop.  

function tree(treeObj) {
  for (var i = 0; i <treeObj.height; i++) {
    var treeCombo = spaces.repeat(treeObj.height) + treeObj.char.repeat(symbolNumber);
    console.log(treeCombo);
     treeObj.height --;
     symbolNumber = symbolNumber + 2;
  }
};

// Below is my button to the clear both fields. It is simply an event listener that removes user input from text fields.
var clear = document.getElementById("clearButton");
clear.addEventListener("click", function() {
  var height = document.getElementById("heightNum");
  height.value = "";
  var type = document.getElementById("sym");
  type.value = "";  
});











