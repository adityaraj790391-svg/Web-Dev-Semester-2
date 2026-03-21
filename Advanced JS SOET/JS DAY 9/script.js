// document.getElementById("myinput").addEventListener ("change", (event)=> {
//     // here event is the synthetic event which comes under addeventlistener callback function. It will prevent the event object which stores all information about the form tag
//     console.log(event.target.value);
//     // event.target will print the atrgeted element and event.target.value will print the user input value in the console.
//     document.getElementById("output").textContent = "Change Detected"
// })


// let myPromise  = new Promise ((res,rej)=> {
//     let data = "this is my data";
//     if(data){
//        res();
//     }else{
//         rej("error: no data found")
//     }
// });

// myPromise.then((d)=>{
//     console.log(d);
// },(e)=>{
//     console.log(e);
// });



// Set Timeout vs Set Interval

// Promise is used to handle ansynchronomous function in a better way than callback hell.
// Promise has three states - pending, fulfill, and rejected.
// Promise handling has two consumers - dot then and dot catch.
// if promise is fulfilled it will go to .then method.
// if promise is rejected then it will go to .catch.


let pro = new Promise ((resolve, reject)=>{
    let proposal = "false"
    if(proposal === "true") {
        resolve()
    }
    else {
        reject()
    }
})
pro.then(()=>console.log("proposal accepted")).catch(()=>console.log("proposal rejected"))





