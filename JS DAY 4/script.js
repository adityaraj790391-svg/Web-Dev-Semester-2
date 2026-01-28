/// we can access to individual value by targeting 

/// execution has two phases global execution and functional execution context
/// global execution is divided into creation and execution phase
/// functional execution is divided into creation and execution phase


var a = 10;
console.log(a)
function demo () {
    let b =20;
    console.log(b);
}
demo();


//// CallStack is a process and mechanism which keeps track of every process running in the background or javascript course.
//// CallStack stores global execution context and functional execution context
//// After the processing of the code it will pop out the FEC then GEC at the end.



let user =  {
    FullNmae: "Demon King",
    address: "Gurugram",
    mobileno: 123456789,
    favcolor: ["black", "white"]
}

console.log(user.FullNmae, user.address, user.mobileno);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(user.favcolor[1]);
console.log(Object.entries(user));


const car = {
    make: "Toyota",
    model: "Thar"
}
// Object.freeze(car);
Object.seal(car);
car.model = "XEV9E";
car.color = "Blue";
console.log(car);


//// Object Methods -
//// The difference between object.freeze and object.seal
//// What is execution context and how JavaScript code executes in execution context.
//// What is CallStack and how CallStack works in JavaScript.
//// Difference between DOM and HTML.
















