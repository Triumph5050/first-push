// console.log(54455)
// alert(5455)
// prompt(54455)

// console.log("My name is Earnest")
// console.log("10" + "2")
// console.log(10 + 2)
// console.log(true)
// Earnest
// console.log(null)

// var myName = "var: My name is Earnest and I love coding"
// console.log(myName)
// alert(myName)

// let greeting = "let: Ndewo nwanne mmadu"
// console.log(greeting)
// const greet = "const: Otutu oma"
// console.log(greet)

// let name = prompt("What is your name?")
// console.log("Hello " + name + " my personal person" + "!")

// String concatenation - combining two or more strings together to form a longer word or sentence
// We can achieve using to methods - the + method or the .concat method 

// vs code 
// const firstName = "Oti"
// const secondName = "Ikechukwu"       
// const lastName = "Gideonnn"
// const num = 493327778
// const num2 = 4334323
// const empty = " "

// console.log(lastName.indexOf("n")) // used the alphabet to find the index
// console.log(lastName[3])   // used the index  to find the alphabet 


// const fullName = firstName + secondName + lastName
// console.log(fullName)   
// .concat()
// firstName.concat(secondName, lastName)   
// console.log(firstName.concat(secondName, " ", lastName," ", num, " ", num2))    


// String lenght and slicing

// string length for getting the length of a string
// console.log(firstName.length)   

// string slice for cutting out some part of the string to form a new string 
// it takes majorly two parameters : where the string should start and where the string should end
// console.log(secondName.slice(0, -5)) 
// console.log(secondName.slice(1, 4))   
// Technology - output only the nolo 
// check when slice have only one value i.e .slice(1) 
// and also check when it has a negative number i.e .slice(1, -4)

// String template literals
// A function in Javascript used for combining a string and a variable 
// Symbolized using a backtick, ``
// const promm = prompt("What is your name")
// console.log(`My name is ${promm}`);     



// Arithmetic operators 
// Addition(+)
// Subtraction(-)
// Multiplication(*)
// Division(/)
// Exponential(**)
// console.log(3**9) 
// MOdulus(%)
// const nuuu = 1    
// console.log(nuuu) 



// Increment(++)
// let n = 4
// n+=6 
// console.log(n)   


// Decrement(--)
// let nn = 4
// nn-=5
// console.log(nn) 


// Random Number and Math Objects 
// How oto generate random numbers in Javascript 
// console.log(Math.random())   

// Math.floor(); // converts it to the nearest lowest whole number
// Math.ceil(); // converts to the nearest highest whole number  
// console.log(Math.ceil(Math.random() * 1000000))    



// Decision making in Javascript(if, else, else if)

// const condition = 21
// if(condition <= 4) {
//     console.log("N is not a number")  
// }
// else if(condition > 4 && condition < 14){
//     console.log("N is a number less than 14")
// }
// else if(condition > 14 && condition < 18){
//     console.log("N is a number less than 18")
// }
// else{
//     console.log("Do what ever you want to do") 
// }


// Conditonal Ternary 
// condition > 4 ? "N is a Number" : "N is not a number"   


// const aler = Math.floor(Math.random() * 1000000)
// alert(aler) 

// const promm = prompt("Input random number")

// if(promm == aler){
//     console.log("Log in successful")
// }
// else(
//     console.log("Sorry you do not have access to this website")   
// )

const a = 1
    b = 2
    c = 3

console.log((a==3 || b!==3 || c==2) ? `One is correct` : `One is wrong`)
console.log((a==1 && b==2 && c==3) ? `One is correct` : `One is wrong`)

const arr = [`Me`, `My`, `Mine`]
console.log(arr[0])
let brr = `abcdef`

console.log(brr[(0)])
console.log(brr.charAt(3))