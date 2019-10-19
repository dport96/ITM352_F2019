/* Description: Function to test if an input string is a non-negative integer. 
                This function returns an array containing errors. If no errors
                an empty array is returned.d
   Author: Rick Kazman
   Date: Oct. 18, 2019
*/

function isNonNegInt(nStringIn)
{
    errors = [];                // Initialize an empty errors array.
    numberIn = Number(nStringIn); // Convert the input string to a number.

    if (numberIn != nStringIn)  // Test if converted string is equal to the original
    {                           // If so then it is a number.
        errors[errors.length] = "Not a number";
    }

    if (numberIn < 0)           // Test if it is negative.
    {
        errors[errors.length] = "Not positive";
    }

    if (Math.floor(numberIn) != numberIn)   // Test if it is an integer
    {
        errors[errors.length] = "Not an integer";
    }

    return errors;  // Return the errors array.
}