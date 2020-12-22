//compare each index against the others to find the
//combination that equals target.
//input -> array of numbers
//output -> array of 2 numbers indexes whose values == target
//***** */
//for each index compare with next and next + 1 etc
    ///for index if i + 1++ !== target
    //// **  2 for loops. Big-O -> On**2 (not really good) *** 
//&&&&&&&&&&&&&&&&&&&&
//check the distance between index and target (target - index value)
// if the difference value exists in nums, output = [index1, indexOfcompliment]
/////// hashtable is fast lookup. JS -> no hashtable, but object will work (key:value pairs)
//####### each index => subract the value from target. Save into object as key, value is index position that was checked
//###### Better yet use Map() {map compliment number -> result of target - nums[index] to index,  }
/******* Complexity is (O)n because only visiting each number once */



// console.log(twoSum([2,7,11,15],9))

// chickenTruck = () => {
//   const foo =  function twoSum(nums,target){
//         const compNum = new Map();
//         const len = nums.length;
    
//         for(let i = 0; i < len; i++){
    
//             if(compNum[nums[i]] >= 0){//if the number exists
//                 //return compNumb index and index of the number itself
//                 return [compNum[nums[i]], i]
                
//             }
//             compNum = [target - nums[i]]
//         }
//         console.log(compNum)
//         document.getElementById("section2-p1").innerHTML=`${compNum}`
//     }
// }





