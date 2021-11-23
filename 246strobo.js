var isStrobogrammatic = function(num) {
    //flippable numbers: [1,6,9,0]
    //unflippable nums: [2,3,4,5,7]
    let digits = (""+num).split("");
    let unflippable = ['2','3','4','5','7'];
    
    //Base case, if input contains any of the unflippable numbers, false
    let isFound = unflippable.some(z => digits.includes(z));
    if (isFound){
        return false;
    }
    //passed base case, flippable if the 1 number is 1,0,8
    if (digits.length == 1){
        if(digits[0] == 1 || digits[0] == 0 || digits[0] == 8){
            return true;
        }
    }
    let digitsR = digits.reverse();
    console.log(digits)
    let arr = []
    for (let i=0; i < digits.length; i++){
        //run through each value in array
        switch(digits[i]){
            case '1':
                arr.unshift('1');
                break;
            case '6':
                arr.unshift('9');
                break;
            case '8':
                arr.unshift('8');
                break;
            case '9':
                arr.unshift('6');
                break;
            case '0':
                arr.unshift('0');
                break;
        }
    }
    //digitsR = digitsR.join().replace(/,/g, '');
    //arr = arr.join().replace(/,/g, '');
    console.log("comparing",digitsR,"and",arr);
    let bool = true;

    for(i=0; i < digitsR.length; i++){
        if (digitsR[i] == arr[i]) {
            bool = true;
        } else {
            bool = false;
            break;
        }
    }
    return bool;
};

console.log(isStrobogrammatic(81)); //return false because 81 =/= 18
console.log(isStrobogrammatic(69)); //true 
console.log(isStrobogrammatic(109901));
console.log(isStrobogrammatic(1));
