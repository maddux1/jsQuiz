// Here's my button which kicks everything off. 
var button = document.getElementById("btn");
button.addEventListener("click", function() {
    var treeObj = { 
      height : "",
      char : ""
    };
  treeObj.height = document.getElementById("heightNum").value;
  treeObj.char = document.getElementById("sym").value;
    function checkTree() {
      if (treeObj.height === "") {
        alert("please enter height!!");
      } 
      if (treeObj.char === "") {
        alert("please enter a character!!");
      }
    };
  function tree(treeObj) {
  var spaces = " ";
  var symbolNumber = 1;
  var numSpaces;
  for (var i = 0; i <treeObj.height; i++) {
    numSpaces = treeObj.height - (i + 1); 
    var treeCombo = spaces.repeat(numSpaces) + treeObj.char.repeat(symbolNumber);
    console.log(treeCombo);
    symbolNumber = symbolNumber + 2;
  }
};
  checkTree();
  tree(treeObj);
});

// clear button
var clear = document.getElementById("clearButton");
clear.addEventListener("click", function() {
  var height = document.getElementById("heightNum");
  height.value = "";
  var type = document.getElementById("sym");
  type.value = "";  
});











