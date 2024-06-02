
// for(var i=1;i<=10;i++){

// document.write("2" + "*" + i + "=" + i*2 + "<br>");

// }
// program to generate a multiplication table

// take input from the user
// const number = parseInt(prompt('Enter an integer: '));

// //creating a multiplication table
// for(let i = 1; i <= 10; i++) {

//     // multiply i with number
//     const result = i * number;

//     // display the result
//     console.log(`${number} * ${i} = ${result}`);
// }
// let anyVariable=prompt("enter any number");
// for(let i=1;i<=10;i++){
//   document.write(anyVariable + "*" + i+"="+i*anyVariable+"<
// var anyVariable=prompt("enter any numer");



// var calcius = 25;
// var f = 70;
// var formula = C = (f - 32)*5/9

// document.write( "25C" + "=" + formula );





// var user1Age=7;
// var user2Age=25;
//  console.log(user2Age >=18);
//  The Age Calculator: Forgot how old someone is?
// Calculate it!

// import java.time.Year;

// public class AgeCalculator {
//     public static void main(String[] args) {
//         // Step a: Store the current year in a variable
//         int currentYear = Year.now().getValue();
        
//         // Step b: Store their birth year in a variable
//         Scanner scanner = new Scanner(System.in);
//         System.out.print("Enter the birth year: ");
//         int birthYear = scanner.nextInt();
        
//         // Step c: Calculate their 2 possible ages based on the stored values
//         int age1 = currentYear - birthYear;
//         int age2 = age1 - 1;
        
//         // Output the results
//         System.out.println("They are either " + age1 + " or " + age2 + " years old.");
        
//         scanner.close();
// let userAge =+prompt("Enter your age");
// if(userAge >= 18){
//     console.log("you can apply your Nic");

// }
// else{
//     console.log("your are not eligible");

// }

// let userFavNum=prompt("Enter a Number");
// let computerNum=Math.round(Math .random()*10);
// if( userFavNum===computerNum){
//     console.log( "you won!");

// }
// else{
//     console.log("you Lose!"+computerNum)
// }
// var userFavNum=prompt("Enter a Number");
// var computerNum= Math.round(Math. random() *9)
// if( userFavNum===computerNum){
// console.log("you won!");
// } 
// else{
//     console.log("you Lose!"+computerNum);
// }
let  userInput =prompt("Eavn or odd");
let computerNum=Math.round(Math.random()*10);
let isEvan = computerNum %2===0;
if(isEvan && userInput==="Evan");{
    console.log("you won!" +computerNum);
}


