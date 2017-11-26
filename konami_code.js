const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {

document.addEventListener("keydown", onKeydown(e), false)

}

function onKeydown(){
  var index = 0
  var e = event.key
  const key = parseInt(e.detail || e.which)
  if (key === code[index]){
    index++;
  
  if (index === code.length){
    alert("Hurray!");
    index = 0;
  }
}
else{
  index = 0;
}
}