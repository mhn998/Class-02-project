// strict Mode activated 
'Use strict'
var userName = prompt("What's your name?");

alert ("Greetings Mr./Ms. " + userName);

alert("Please bare with me with this little guess game of 5 questions,kindly respond either with yes or no (y or n)");

alert("you are going to guess these questions about me");
var score = 0;

    var role = prompt("Am I an engineer?").toLowerCase();

    while (role !== 'yes' && role !== 'no' && role !== 'y' && role !== 'n') {
        role = prompt("Am I an engineer?").toLowerCase();
        
    }

    if (role === 'yes' || role === 'y' ) {
        alert("Yes! Correct")
        console.log("Am I an engineer?" , "Correct")
        score++;
    } else if (role === 'no' || role === 'n') {
        alert("Sorry! That's incorrect")
        console.log("Am I an engineer? ", "Incorrect")
    }

    var weight = prompt("Do you think my wight is more than 90kg?").toLowerCase();

    while (weight !== 'yes' && weight !== 'no' && weight !== 'y' && weight !== 'n') {
        weight = prompt("Do you think my wight is more than 90kg?").toLowerCase();
       
    }
    if (weight === 'yes' || weight === 'y' ) {
        alert("Sorry! That's incorrect")
        console.log("Do you think my weight is more than 90kg?" , "Incorrect")
    } else if (weight === 'no' || weight === 'n') {
        alert("Yes! That's Correct")
        console.log("Do you think my wight is more than 90kg? ", "Correct")
        score++;
    }

    var age = prompt("Do you think I am above 24 years old?").toLowerCase();

    while (age !== 'yes' && age !== 'no' && age !== 'y' && age !== 'n') {
        age = prompt("Do you think I am above 24 years old?").toLowerCase();
        
    }

    if (age === 'yes' || age === 'y' ) {
        alert("Sorry! That's incorrect")
        console.log("Do you think I am above 24 years old?" , "Incorrect")
    } else if (age === 'no' || age === 'n') {
        alert("Yes! That's Correct")
        console.log("Do you think I am above 24 years old?m ", "Correct")
        score++;
    }

    var country = prompt("Do I live in Jordan?").toLowerCase();

    while (country !== 'yes' && country !== 'no' && country !== 'y' && country !== 'n') {
        country = prompt("Do I live in Jordan?").toLowerCase();
   
    }

    if (country === 'yes' || country === 'y' ) {
        alert("Yes! Correct")
        console.log("Do I live in Jordan?" , "Correct")
        score++;
    } else if (country === 'no' || country === 'n') {
        alert("Sorry! That's incorrect")
        console.log("Do I live in Jordan?? ", "Incorrect")
    }

    var hobbie = prompt("Do you think I love programming?").toLowerCase();

    while (hobbie !== 'yes' && hobbie !== 'no' && hobbie !== 'y' && hobbie !== 'n') {
        hobbie = prompt("Do you think I love programming?").toLowerCase();
     
    }

    switch (hobbie) {
        case "yes" || "y":
            alert("Yes! That's Correct");
            console.log("Do you think I love programming?", "Correct");
            score++;
            break;

        case "no" || "n" : 
            alert("Sorry! That's incorrect");
            console.log("Do you think I love programming?" , "Incorrect");
            break;

    }



alert("Thank you " + userName + " , kindly check your console to see your answers after you finish another two guess questions");


for (i=1; i<5;i++) {
    let numberguess = prompt("Guess a number between 1 to 30, you have only 4 attempts ");
    if (numberguess == '7') {
        alert("True!, you nailed it!")
        console.log("Guess a number between 1 to 30" , "Passed")
        score++;
        break;
    } else if ((numberguess >= 1 && numberguess <= 6) || (numberguess >= 8 && numberguess <=14 ) ) {
        alert ("you were somewhere near!" + "Please try again, you have " + (4-i) + " Attempts left ")
    } else if (numberguess >= 15 && numberguess <=30)
        alert("So far!" + "please try again, you have " + (4-i) + " times left " )

}

confirm("incase you didn't guess it , .. The answer was 7 ! :D & if you did Congrats! ");

var favFood = ["pasta","pizza","burger","steak","chicken"];


for(i=1; i<7; i++) {
    let guessFood = prompt("What do you think my favorite food? (There are 5 correct answers) & you have only 6 attempts ")
    if( favFood.includes(guessFood)) {
        alert('you were correct , The possible answers are ' + favFood)
        console.log("What do you think my favorite food?", "Passed")
        score++;
        break;
    } else {
        alert("unfortuantely! That's wrong , you have" + (6-i) +" Attempts left " );
    }
} 

confirm("incase you didn't guess it , These were the possible Answers " + favFood);
alert("your score out of 7 is: " + score )