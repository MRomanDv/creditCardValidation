function validCard(number){
    let digits = number.toString().split('') 

    console.log(digits)
    
    //Luhn’s algorithm Validation
    if(digits.length % 2 == 0){
        digits = digits.map((digit,index) => index % 2 == 0? digit * 2 : digit)
    }else {
        digits = digits.map((digit,index) => index % 2 == 1? digit * 2 : digit) 
    }
    digits = digits.map(digit => digit > 9 ? digit - 9: digit)
    
    //convert to array of numbers
    let numbersArray = digits.map(x => parseInt(x))
    //sum all digits inArray
    let result = numbersArray.reduce((acc,curr)=> acc + curr,0)
    
    //console.log(result % 10 == 0 ? 'VALID' : 'INVALID')
   
    let AMEX = digits.length == 15  && result % 10 == 0 ? 'VALID' : 'INVALID'
    let MASTERCAD = digits.length == 16 && numbersArray[0] / 2 != 4 &&  result % 10 == 0 ? 'VALID' : 'INVALID'
    let VISA = digits.length == 13 || digits.length == 16 && numbersArray[0] / 2 == 4  && result % 10 == 0 ? 'VALID' : 'INVALID'
    console.log(numbersArray)
    console.log('AMEX: ' + AMEX) 
    console.log('MASTERCARD: ' + MASTERCAD) 
    console.log('VISA: ' + VISA) 

}

validCard(123456789876)//VISA INVALID
validCard(5555555555554444) //MASTER CARD VALID
validCard(5579100331546984) //MASTER CARD VALID
validCard(4152313619023620)//VISA