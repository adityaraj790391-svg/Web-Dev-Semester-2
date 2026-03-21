
// function print(num) {
//     return new Promise ((res,rej) => {
//         setTimeout(() => {
//             console.log(num);
//             res();
//         },1000)
//     })
// }

// print(1)
// .then(() => print(2))
// .then(() => print(3))
// .then(() => print(4))
// .then(() => print(5))


// why async and await -
// to avoid promise chaining
// to exexute the asunchronous code properly without confusion
// to handle promise in a better way
// Important - async function always returns a promise


// async function demo() {
//     return "async intro "
// }
// console.log(demo());


// await -
// It will pause the async function until the promise returns a Result.

// const pro = new Promise ((res, rej) => {
//     setTimeout(() => {
//         res ("Promise resolved");
//     }, 10000)
// })


// function getData () {
//     pro.then(() => console.log(res))
//     console.log("After Promise");
// }


// async function getData () {
//     const value = await pro;
//     console.log(value)
//     console.log("After Promise")
// }

// It will print promise resolved first then After Promise
// getData();

// async function fetchData() {
//     const response = await fetch ('');
//     const data = await response.json();
//     console.log(data);
// }
// fetchData();


// weather data fetching



async function fetchData(city) {
    try {
        const API_key = "03c3d9e514cbb4b402100a6d028f7d1d";
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`);

        const data = await response.json();
        console.log(city);
        console.log(data.main.temp);
        console.log(data.main.humidity);
    } catch (err) {
        console.error(err);
    }
}
fetchData("London");