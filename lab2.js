// Create an object for a "Teacher" with the following properties
// - Name (with anyone's name)
// - Classes (with an empty array)
// - currentlyTeaching (true or false, your choice)

// Now with the above object do the following:
// - Add a new class name (of your choice) to the "Classes" array 
// - Add another class.
// - Display the Teacher's Name
// - Display the Teacher's Classes
// - Display the full Teacher Object

let teacher= {
    Name: "Ms.Pico",
    Classes:[],
    currentlyTeaching: true
}

console.log(teacher)

// teacher.Classes =['newClass'] same as below
teacher.Classes.push('newClass')
teacher.Classes.push('anotherClass')
// teacher.Classes.push ("newClass","anotherClass") //another way of doing above

console.log(teacher.Name)

console.log(teacher.Classes)

console.log(teacher)

