//BMI = mass / height ** 2
//calculate each persons BMI using above formula
//compare - if Mark's BMI is higher than John'
    //if markBMI > johnBMI - "Mark is higher" otherwise John is higher

let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;


calcualteBMI = (mass, height) => {
    return mass / height ** 2;
}

let markBMI = Math.round(calcualteBMI(78,1.69));
let johnBMI = Math.round(calcualteBMI(92,1.95));

// console.log(markBMI + " " + johnBMI)

(markBMI > johnBMI ? higherBMI=`Mark`
            : higherBMI = 'John');


loadData = () => {
 document.getElementById("section1-p1").innerHTML = `Mark's BMI is ${markBMI}`;

 document.getElementById("section1-p2").innerHTML = `John's BIM is ${johnBMI}`

 document.getElementById("section1-p3").innerHTML = `${higherBMI} is higher.`

 document.getElementById("section1-p4").innerHTML = `${higherBMI} is a fat-ass.`
}

reset = () => {
    document.getElementById("section1-p1").innerHTML = ``;

    document.getElementById("section1-p2").innerHTML = ``
   
    document.getElementById("section1-p3").innerHTML = ``
   
    document.getElementById("section1-p4").innerHTML = ``
}