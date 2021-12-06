const di = document.querySelector("#main-bar")

// add value
function calculate(x){
    di.value +=  x;
}

// calculate value
function result() {
    let a = di.value;
    let b = eval(a);
    di.value = b;
}
// remove value
function deleteMe(){
    di.value = '';
}