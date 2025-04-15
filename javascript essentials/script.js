console.log("script loaded");

//ES6+ syntax

//1. Arrow function

const func1 = () => {
    console.log("this is arrow function");
}

func1();


function func2(fun) {
    fun();
    return fun;
}

func2(()=>{
    console.log("this is my fun body");
});

const sum = (a,b) => {
    return a+b;
}
console.log(sum(2,3));



//2. Destructuring