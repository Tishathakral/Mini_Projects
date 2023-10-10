//import Math from "mathjs";
alert("Welcome to my calculator")
//adding two numbers 
let operator = prompt("Enter the Operation you want to perform:");
if(operator!='+' && operator!='-' && operator!='*' && operator!='/' && operator!='%' && operator!='**' && operator!='sqrt'){
    alert("Invalid Operator");
    operator = prompt("Enter the Operation you want to perform:");
}
let input1= prompt("Enter the first number:");
let input2= prompt("Enter the second number:");
let result=0;
if(operator=='+'){
    
    result=parseInt(input1)+parseInt(input2);
    console.log("Addition of two numbers is: "+result);
}
if(operator=='-'){
   
    result=parseInt(input1)-parseInt(input2);
    console.log("Subtraction of two numbers is: "+result);
}
if(operator=='*'){
   
    result=parseInt(input1)*parseInt(input2);
    console.log("Multiplication of two numbers is: "+result);
}
if(operator=='/'){
    console.log("Division of two numbers is: "+result);
    result=parseInt(input1)/parseInt(input2);

}
if(operator=='%'){
    console.log("Modulus of two numbers is: "+result);
    result=parseInt(input1)%parseInt(input2);
}
if(operator=='**'){
    console.log("Exponent of two numbers is: "+result);
    result=parseInt(input1)**parseInt(input2);
}
if(operator=='sqrt'){
    result=Math.sqrt(parseFloat(input1));
    alert("Square root of first number is: "+result);
    result=Math.sqrt(parseFloat(input2));
    alert("sqaure root of second number is: "+result);
}
alert(result);