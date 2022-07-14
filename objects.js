let person = {
    name: "Professor D",
    lastName: "Montero",
    age: 48,
    inClass: true,
    classesTaught: ["Javascript", "arrays"]
}

person.name= "Damian" //edit 
person.hasGlasses = true //add a new property
console.log (person)

person.Age= 21 // (mistyped age)
console.log(person)

// const allProps = Object.keys(person) // this line is the first line that created an array
// console.log(allProps)

// const hasAge= (allProps.indexOf("age")) > -1 
// // const hasAge= (allProps.indexOf("age")) > -1 
// //same as above (we are just checking to make sure it is within the property/array)
// console.log(hasAge)


// let {name,age} = person
// console.log(name)
// console.log(age)


// console.log(person.name)

// person.name = "Carla"

// console.log(person.name) 