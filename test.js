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
  var heightVal = document.getElementById("heightNum").value;
  var charVal = document.getElementById("sym").value;
  treeObj.height = heightVal;
  treeObj.char = charVal;
  // The checkTree function below will test whether the fields are empty and if so, issue and alert. Note it is above tree();
  checkTree();
  // The tree function below initiates the function tree which is described below. 
  tree();
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

// Below is my tree function. It is a deadsimple for loop. I was expecting to for the length of the height input, 
// and then print to console the variable spaces, repeated the number that the loop falls on and then print the 
function tree() {
  for (var i = 0; i <treeObj.height; i++) {
    console.log( spaces.repeat(treeObj.height) + treeObj.char.repeat(1) );
     treeObj.height - 1;
     treeObj.char + 2; 
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











