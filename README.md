# Random Name Generator 

## Description 
When ran, this code randomly generates a name and logs it within the sentence: "Greetings '(randomly generated name)' you outlandish devil". 

## Code Process 
1. A constant variable 'titleWords' containing the properties: 'name', 'articleOrPrep', 'adjective' and 'place' is defined. 
2. A 'name' is randomly selected from the predetermined array and is then pushed to the 'personalTitle' array. 
3. Either 'the' or 'of' is then randomly selected and is pushed to the 'personalTitle' array.
4. If in step 3, the value 'the' is selected, then a randomly selected value from the 'adjective' array is pushed to the 'personalTitle' array. If not,
   a randomly selected value from the 'place' array is pushed instead.
5. A function 'personalTitleGreeting' is defined which joins the three randomly selected elements that have been pushed to the 'personalTitle' array, and embeds
   it within the sentence noted in the above description. 
