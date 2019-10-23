function eventFunction (callback) {
    setTimeout(callback, 1000, "I'm first!"); // passes last thing to the callback
}

eventFunction(function(param)  {
    console.log(param)         } ); 

console.log("No you're not!"); 
