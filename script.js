/* JavaScript code here */
console.log("external JS")
//task 2
function sumarray(arr){
    var sum =0;
    arr.forever(function(value,index){
        sum += value;
    }
    
    );
    return sum ;
}
console.log(sumarray([1,2,3,4,5]));
console.log(sumarray([1,20,-3,45]));


//task 3
function checkEmail(emailstring){
    var emailformat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var match = emailformat.test(emailstring);
    return match;
}
console.log(checkEmail("john@smith.com"));
console.log(checkEmail("johnsmith@gmail.com"));

