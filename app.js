/* First Problem:- mindGame.
This is problem number_1. This function takes number as a parameter then multiply the number with 3. 
After that adds 10 with the founded result. Finally the result gets devided by 2 and subtruct 5 and show the result. */

function mindGame(number){
    if(number === isNaN){
        return "please enter a valid number"
    }

    let task_1 = number * 3;
    let task_2 = task_1 + 10;
    let task_3 = task_2 / 2;
    let task_4 = task_3 - 5;

    return task_4
}




/* Second Problem:- evenOdd.
This is problem number_2. This function works with string. It takes 
a string parameter and show "Even" or "Odd" based on even and odd numbers. */

function evenOdd(string){
    let theResult = string
    for(let i = 0; i < stringValue.length; i++){
        let result = stringValue

        if(result.length % 2 === 1){
            return "odd"
        } else{
            return "even"
        }
    }
    return theResult
}
let stringValue = "chatgpt"




/* Third Problem:- isLGSeven.
 This is problem number_3. It takes a number as a parameter then differenciate the number from 7.
// Then it returns the result. If the returened number id less than 7, then it showns the subtructed result 
// or, it returns double of the inputnumber. */

function isLGSeven(number){
    let result = number - 7
    if(result < 7){
        return result
    } else{
        return number * 2
    }

}



/* Fourth Problem:- findingBadData.
 This is problem number_4. This function return good data and bad 
// data based on positive and negetive numbers */

function findingBadData(array){
    let negetiveNumbers = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] < 0){
            negetiveNumbers++
        } else {
            0
        }
    }
    return negetiveNumbers
}

arr = [-4, -9, -5, -33, -55]




/* Fifth Problem:- gemsToDiamond.
 This is problem number_5. This function converts gems into diamond.
// It does a complex task which i do not want to describe right now. because, 
// I have to read it again and understand the logic :') */

function gemsToDiamond(number1, number2, number3){
    const firstFriendCapacity = 21
    const secondFriendCapacity = 32
    const thirdFriendCapacity = 43

    let firstFriendDiamond = firstFriendCapacity * number1
    let secondFriendDiamond = secondFriendCapacity * number2
    let thirdFriendDiamond = thirdFriendCapacity * number3


    let totalDiamond =  firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond

    if(totalDiamond > 2000){
        return totalDiamond - 2000
    }else{
        return totalDiamond
    }

}