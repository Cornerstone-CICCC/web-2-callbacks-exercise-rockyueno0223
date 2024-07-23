const fs = require("fs");

fs.readFile("./firstname.txt", "utf-8", (err, data1) => {
  // your code here
  let firstName = data1

  let lastName = ''
  let age = ''
  let hobby1 = ''
  let hobby2 = ''

  function readFile(fileName, callback) {
    fs.readFile(fileName, "utf-8", (err, data) => {
      callback(err, data)
    })
  }

  readFile("./lastname.txt", (err, data) => {
    lastName = data
  })
  readFile("./age.txt", (err, data) => {
    age = data
  })
  readFile("./hobbies.txt", (err, data) => {
    const activitiesArray = JSON.parse(data)
    hobby1 = activitiesArray[0]
    hobby2 = activitiesArray[1]
  })

  setTimeout(() => {
    let output = `${firstName} ${lastName} is ${age} years old and his hobbies are ${hobby1} and ${hobby2}`
    console.log(output);
  }, 3000);
})
