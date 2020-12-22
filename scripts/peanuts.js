//BMI = mass / height ** 2
//calculate each persons BMI using above formula
//compare - if Mark's BMI is higher than John'
    //if markBMI > johnBMI - "Mark is higher" otherwise John is higher



// let markMass = 85;
// let markHeight = 1.76;

// let johnMass = 95;
// let johnHeight = 1.88;


// calcualteBMI = (mass, height) => {
//     return mass /(height**2);
// }


// let markBMI = calcualteBMI(markMass,markHeight).toFixed(2);
// let johnBMI =calcualteBMI(johnMass,johnHeight).toFixed(2) ;

// // console.log(markBMI)
// // console.log(johnBMI)

// (markBMI == johnBMI ? higherBMI = `Same`
//     : markBMI > johnBMI ? higherBMI=`Mark`:higherBMI=`John`)


// loadData = () => {
//  document.getElementById("section1-p1").innerHTML = `Mark's BMI is ${markBMI}`;

//  document.getElementById("section1-p2").innerHTML = `John's BIM is ${johnBMI}`

//  document.getElementById("section1-p3").innerHTML = `${higherBMI} is higher.`

//  document.getElementById("section1-p4").innerHTML = `${higherBMI} is a fat-ass.`
// }

// reset = () => {
//     document.getElementById("section1-p1").innerHTML = ``;

//     document.getElementById("section1-p2").innerHTML = ``
   
//     document.getElementById("section1-p3").innerHTML = ``
   
//     document.getElementById("section1-p4").innerHTML = ``
// }

//********** */
// Calc each teams avg score
//Score must be at least 100 or doesn't win (same for a draw)
//

// let dolphScores = [97,112,101]
// let koalaScores = [106,95,106]

// const calculateAvgScore = (arr) => {

//    let foo = arr.reduce((total,number) => {
//         return total + number;
//     },0);
// return Math.round(foo/arr.length)
// }

// let dolphinsAvg = calculateAvgScore(dolphScores);
// let koalaAvg = calculateAvgScore(koalaScores);
// let winner = ``;

// console.log(dolphinsAvg)
// console.log(koalaAvg)

// if(dolphinsAvg && koalaAvg >=100){
//     if(dolphinsAvg == koalaAvg){
//         winner=`Draw`
//     }else if(dolphinsAvg > koalaAvg) {
//         winner=`Dolphins`
//     }else{
//         winner=`Koalas`
//     }
// }else{
//     if(dolphinsAvg >= 100){
//         winner='Dolphins'
//     }else if(koalaAvg >= 100){
//         winner=`Koalas`
//     }else{
//         winner=`no-one wins`
//     }
// }



// loadData =() => {
//     document.getElementById("section1-p1").innerHTML = `${winner}`
// }




/******** */
//Calculate tip
    //if bill between 50 and 300, tip amount is 15%
    //otherwise the tip is 20%
    // print bill was {bill},tip was{tip}, and total value is {bill + tip}
// loadData = () => {
//     let bill = 40;
   
  
//     const calculateTip = (num) => {
      
//         (num >=50 && num <=300 ? tip=0.15 : tip = 0.2)
//         return tip * num 
//     }

//     let tipValue = calculateTip(bill)
// let totalValue = bill + tipValue;
//    console.log(tipValue)

//    document.getElementById("section1-p1")
//    .innerHTML =
//     `The bill was ${bill}, the tip was ${tipValue}, and the total value ${totalValue}`
// }
  
//********** */
// Each team has 3 scores.
//Average the scores. Winner = Team a score avg >= team b score avg
// let teamA = "Dolphins"
// let teamB = "Koalas"
// let dolphinsScores = [44,23,71];
// let koalasScores = [65,54,49];

// loadData = () => {
// calcAverage = (arr) => {
//     let hudu = arr.reduce((total, number) => {
//         return total + number
//     }, 0);
//     return hudu/arr.length
// }

// checkWinner = (tA,scoreA, tB,scoreB) => { 
    
//     if(scoreA > scoreB){
//       return `${tA} wins (${scoreA} vs ${scoreB})`
//     }else if(scoreA < scoreB){
//         return `${tB} wins (${scoreB} vs ${scoreA})`
//     }

   
// }

// let dolphinsAvg = calcAverage(dolphinsScores);
// let koalasAvg = calcAverage(koalasScores);


// let theWinner = checkWinner(teamA,dolphinsAvg,teamB,koalasAvg)
// console.log(theWinner)

// console.log(`${teamA} vs ${teamB}`)

// document.getElementById("section1-p1").innerHTML = theWinner;

// }

/********* */
// if bill is >= 50 && <= 300 tip is 0.15, otherwise tip is 0.2
// calculate tips of an array of bills
// create and array of those tip values
// create an array of total tip + bills 

// let bills = [125,555,44]
// let tips = []
// let totals =[]
// let grandTotal = 0

// calcTip = (arr) => {
// //arr for each - calculate tip.push to tips
//  return arr.forEach(el => {
//     (el >= 50 && el <= 300 ? tipAmount=0.15*el : tipAmount=0.2*el)
//     //console.log(tipAmount)
//     tips.push(tipAmount)
//     totals.push(tipAmount + el)
//     //console.log(tips)
// })

// }

// calcGrandTotal = (arr) => {
//      arr.reduce((total,number) => {
//         return grandTotal = total + number 
//     },0)
// }

// calcTip(bills)

// calcGrandTotal(totals)

// console.log(bills)
// console.log(tips)
// console.log(totals)
// console.log(grandTotal)

/**************** */
showBlock = () =>{
    document.getElementById("section1").style.display = "block"
}
loadData = ()=> {

showBlock();

let bills =[22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

calcTip = (arr) => {
 return arr.forEach(element => {
        (element >= 50 && element <= 300 ? tipAmount = element * 0.15 : tipAmount = element * 0.2);
        tips.push(tipAmount);
        totals.push(tipAmount + element)
        // console.log(bills)
        // console.log(tips)
        // console.log(totals)

    });
    //console.log(tips)
}

calcTip(bills)

document.getElementsByTagName("BODY")[0].style.backgroundColor="green"

document.getElementById("section1-p1").innerHTML = `bills: ${bills}`
document.getElementById("section1-p2").innerHTML = `tips: ${tips}`
document.getElementById("section1-p3").innerHTML = `totals ${totals}`
}
//#######################################
reset = () => {
    document.getElementsByTagName("BODY")[0].style.backgroundColor="antiquewhite"
    document.getElementById("section1-p1").innerHTML = ``

    document.getElementById("section1-p2").innerHTML = ``
   
    document.getElementById("section1-p3").innerHTML = ``
   
   document.getElementById("section1-p4").innerHTML = `` 

   document.getElementById("section2-p1").innerHTML = ``
   
}


//##############################



