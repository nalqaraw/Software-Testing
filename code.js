//returns a number + 1
var addOne = function(x){
    return x+1;
}
//returns a number + 2
var addTwo = function(x){
    return x+3;
}
//returns a number + 6 (x + 1 + 2 + 3)
var addSix = function(x){
    //x + 1
    var temp1 = module.exports.addOne(x);
    var temp2 = module.exports.addTwo(temp1);
    return temp2 + 3;
}
module.exports = {addOne, addTwo, addSix};