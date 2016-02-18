var tree = {
  height : 5,
  char : "*",
};

function buildTree(obj) { 
    for (var i = 0; i < obj.height; i++) {
      console.log(obj.height);
    }
}

var button = document.getElementById("btn");
button.addEventListener("click", function() { 
  var tall = document.getElementById("heightNum").value;  
  var symbol = document.getElementById("sym").value;
  tree.height = tall;
  tree.char = symbol;
  buildTree(tree);
  });




