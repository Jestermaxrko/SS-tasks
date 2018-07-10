const arr = [4,5,3,17,7,11,15,10,17];

Math.factorial = function(n){
    var product = 1;
    for(let i = 1; i <= n; i++){
        product *= i; 
    }
    return product;
}
/*-----------------178(г)------------------------*/

function first(){
    return arr.filter((item, i, arr) => {
        return item < (arr[i - 1] + arr[i + 1]) / 2;
    });
}

/*-----------------178(д)------------------------*/


function second() { 
    return arr.filter((item, i) => {
        return 2 << (i + 1) < item && item < Math.factorial(i + 1);
    });
}

/*----------------------555------------------*/

function pascalTriangle(n){
    var line = [];
    for(let i = 0; i <= n ; i++){
        var number = (Math.factorial(n)) / (Math.factorial(i) * Math.factorial(n - i));   
        line = [...line, number];
    }
   return line;
}
 
console.log( first());
//console.log(second());
//console.log(pascalTriangle(5));