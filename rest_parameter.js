//Rest parameter
max(1,2);
max(1,2,3,4,5)

//до ecma script
function max(){
  //псевдо массив
    var numbers = Array.prototype.slice.call(arguments);
};

//c ecma script 2015
function max(...numbers){
    console.log(numbers)
};
