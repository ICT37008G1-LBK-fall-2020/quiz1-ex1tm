let MynumbersArray = [-1, 3, 4, 6, 5, 21, 33, 34, 45, 55, 96, 54.3, 65];

function getMaxNumber(numbersArray)
{ 
    let result = numbersArray[0];
    for (let i=0; i<numbersArray.length; i++)
    {
        if (numbersArray[i]>result)
        {
            result = numbersArray[i];
        }
    }
    return result;
}


let answer = getMaxNumber (MynumbersArray);
alert (answer);
