const testVar = {};
function superbowlWin(arr){
  let a = arr.find(r => r.result ==="W");
  if(a === "W"){
    return a.year;
  }
  else {
    return undefined
  }
}
function testFunc() {
  return "hi"
}
