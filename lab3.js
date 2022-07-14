// Lab 3 - Object

// Create an object for a "TeacherAssistant" with the following properties
// - Name 
// - inClass (with true or false)

// Now with the above object do the following:
// - Display the TeacherAssistant object
// - Add a new "property" called "Classes" with an empty array.
// - Add a new class name (just string) to the newly added property
// - Display the TeacherAssistant Object.

let TeacherAssistant = {
    Name: "Carla Pico",
    inClass: true,
}

console.log(TeacherAssistant)

TeacherAssistant.Classes = []
TeacherAssistant.Classes.push("newClasses")
console.log(TeacherAssistant)