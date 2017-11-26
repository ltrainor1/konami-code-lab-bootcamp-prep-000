const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0;
function init() {

document.body.addEventListener("keydown", (event) => {
 
  const key = event.key;
  
  if (key === code[0]){
    index++;
  
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