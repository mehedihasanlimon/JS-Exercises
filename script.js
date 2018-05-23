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

//task 4 
var library = [
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

function GetReadingStatus(index){
    return library[index].GetReadingStatus;
}
console.log(GetReadingStatus(1));
