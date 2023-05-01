// Arrow Function
// javascript is a first class function
// that means you can assign a method in a variable
function sayhello(){
  console.log("Hello");
}
sayhello();

let sayhellosonething = ()=>{
  console.log("Hello");
}
sayhellosonething()


// for string interpolation 
// use backtick
let saySomething = (name)=>{
  console.log(`my name is ${name}`);
}


saySomething("Tanvir Rahman");


// it will return a name
// 
let justSay = name => name;
console.log(justSay("Tanvir Rahman Ornob"));

let makesquare = num =>num*num;
console.log(makesquare(2))

