var age = 52;
var counter = 1;
// repeat until counter equals age
while(counter <= age ) {
    if(counter > age/2) {
        console.log("I'm old!");
        break;
    }
    console.log('counter: ' + counter);
    counter++;
}
