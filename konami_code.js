const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0;
function init() {

document.addEventListener("keydown", function(e) {
 
  const key = parseInt(e.which || e.detail)
  console.log(key)
  if (key === code[0]){
    index++;
  console.log(index)
  if (index === code.length){
    alert("Hurray!");
    index = 0;
  }
}
else{
  index = 0;
}
});
}