// strict Mode activated 
'Use strict'
var score=0;

//  Greetings & instruction 
function greetingsAndinstructions() {
    let userName = prompt("What's your name?");
    alert ("Greetings Mr./Ms. " + userName);

    alert("Please bare with me with this little guess game of 5 questions,kindly respond either with yes or no (y or n)");

    alert("you are going to guess these questions about me");
    return userName;

} 

    // ----- 1st question ---- // 
    function cheCkRole() {
        let role = prompt("Am I an engineer?").toLowerCase();

        while (role !== 'yes' && role !== 'no' && role !== 'y' && role !== 'n') {
            role = prompt("Am I an engineer?").toLowerCase();
            
        }
    
        if (role === 'yes' || role === 'y' ) {
            alert("Yes! Correct")
            score++;
        } else if (role === 'no' || role === 'n') {
            alert("Sorry! That's incorrect")
        }

    }


    // ----- 2nd question ------ // 
    function cheCkWeight() {
        let weight = prompt("Do you think my weight is more than 90kg?").toLowerCase();

    while (weight !== 'yes' && weight !== 'no' && weight !== 'y' && weight !== 'n') {
        weight = prompt("Do you think my wight is more than 90kg?").toLowerCase();
       
    }
    if (weight === 'yes' || weight === 'y' ) {
        alert("Sorry! That's incorrect")
    } else if (weight === 'no' || weight === 'n') {
        alert("Yes! That's Correct")
        score++;
    }

    } 

    
    // ------ 3rd question ---- // 
    function cheCkAge() {
        let age = prompt("Do you think I am above 24 years old?").toLowerCase();

    while (age !== 'yes' && age !== 'no' && age !== 'y' && age !== 'n') {
        age = prompt("Do you think I am above 24 years old?").toLowerCase();
        
    }

    if (age === 'yes' || age === 'y' ) {
        alert("Sorry! That's incorrect")
    } else if (age === 'no' || age === 'n') {
        alert("Yes! That's Correct")
        score++;
    }


    }


    // ---- 4th question ---- //  
    
    function cheCkCountry() {
        let country = prompt("Do I live in Jordan?").toLowerCase();

        while (country !== 'yes' && country !== 'no' && country !== 'y' && country !== 'n') {
            country = prompt("Do I live in Jordan?").toLowerCase();
       
        }
    
        if (country === 'yes' || country === 'y' ) {
            alert("Yes! Correct")
            score++;
        } else if (country === 'no' || country === 'n') {
            alert("Sorry! That's incorrect")
        }


    }
    

    // --- 5th question ----- // 
    function cheCkHobbie() {
        let hobbie = prompt("Do you think I love programming?").toLowerCase();

        while (hobbie !== 'yes' && hobbie !== 'no' && hobbie !== 'y' && hobbie !== 'n') {
            hobbie = prompt("Do you think I love programming?").toLowerCase();
         
        }
    
        switch (hobbie) {
            case "yes" || "y":
                score++;
                alert("Yes! That's Correct");
                break;
    
            case "no" || "n" : 
                alert("Sorry! That's incorrect");
                break;
    
        }

    }


// calling first 5 questions 
var callfun1 = greetingsAndinstructions(); // declared inside other variable to use it in the below alert
cheCkRole();
cheCkWeight();
cheCkCountry();
cheCkHobbie();


// Thank you message after complete answering above 5 questions // 

alert("Thank you " + callfun1 );



// --------- starting 6th question --- // 
let userAns = false;
let numberguess;

function gueSsNumbers() {
    
    for (i=1; i<5;i++) {
    numberguess = prompt("Guess a number between 1 to 30 ");
    if (numberguess == '7') {
        userAns = true;
        alert("True!, you nailed it!")
        score++;
        break;
    } else if ((numberguess >= 1 && numberguess <= 6) || (numberguess >= 8 && numberguess <=14 ) ) {
        alert ("you were somewhere near!" + "Please try again, you have " + (4-i) + " Attempts left ")
    } else if (numberguess >= 15 && numberguess <=30) {
        alert("So far!" + "please try again, you have " + (4-i) + "attempts left " )
    } else {
        alert("you should select a number between 1-30 ");
        i--;
    }
        

} 
    // for who didn't pass above (6th) question //
    if (!userAns) {
    confirm("Hard luck! , .. The answer was 7 !");
    }

}

gueSsNumbers();


// ------ starting 7th question ------ //  
let Answer;
let userAnswer = false;
let guessFood;

let favFood = ["pasta","pizza","burger","steak","chicken"];

 function gueSsfavFood() {
     
    for(let j=1; j<=6; j++) {
    guessFood = prompt("What do you think my favorite food? (There are 5 correct answers) & you have only" + (7-j) + "attempts");
    for (let i =0; i<favFood.length;i++) {
        if( guessFood.toLowerCase() === favFood[i]) {
            userAnswer = true;
            score++;
            alert('you were correct , The possible answers are ' + favFood)
            break;
    } else {
        continue;
    }
   
    }
    if (userAnswer) {
        break;
    } else {

    }
} 

    // for who didn't pass above (7th) question // 
    if (!userAnswer) {
    confirm(" Hard luck! These were the possible Answers " + favFood); 
    } else {
    }
    
}

gueSsfavFood();



// finalizing and score 

function ScoReandFinal() {
    alert("your score out of 7 is: " + score )
    alert("kindly check your console Now to see the report for questions & your Answers")
}

ScoReandFinal();

// End // 
