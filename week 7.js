// // let student = {
// //     "name": "Anuhas",
// //     "age" : 19,
// //     "subjects" : ["SSP", "SD", "Webdev"]
// // }

// // //sample JSON object

// // console.log(student.subjects[0])
// // //String is from object -> string
// // let students2 = JSON.stringify(student);
// // console.log(students2)
// // //parse is from string -> object
// // let students3 = JSON.parse(students2)
// // console.log(students3.name)

// let car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2022
// };

// let carJSON = JSON.stringify(car);

// let carObj = JSON.parse(carJSON);

// console.log(carObj.brand);

let settings={
    theme: "Dark",
    fontSize: "16px"
}

localStorage.setItem("userSettings",
    JSON.stringify(settings)
)

let saved = localStorage.getItem("userSettings")
console.log(JSON.parse(saved))