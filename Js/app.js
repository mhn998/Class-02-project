// strict Mode activated 
'Use strict'
var userName = prompt("What's your name?");

alert ("Greetings Mr./Ms. " + userName);

alert("Please bare with me with this little guess game of 5 questions,kindly respond either with yes or no (y or n)");

alert("you are going to guess these questions about me");


function checkRole() {
    while (role !== 'yes' && role !== 'no' && role !== 'y' && role !== 'n') {
        var role = prompt("Am I an engineer?").toLowerCase();
        if (role === 'yes' || role === 'y' ) {
            alert("Yes! Correct")
            console.log("Am I an engineer?" , "Correct")
        } else if (role === 'no' || role === 'n') {
            alert("Sorry! That's incorrect")
            console.log("Am I an engineer? ", "Incorrect")
        }
    }
}

function checkWeight() {
    while (weight !== 'yes' && weight !== 'no' && weight !== 'y' && weight !== 'n') {
        var weight = prompt("Do you think my wight is more than 90kg?").toLowerCase();
        if (weight === 'yes' || weight === 'y' ) {
            alert("Sorry! That's incorrect")
            console.log("Do you think my weight is more than 90kg?" , "Incorrect")
        } else if (weight === 'no' || weight === 'n') {
            alert("Yes! That's Correct")
            console.log("Do you think my wight is more than 90kg? ", "Correct")
        }
    }
}

function checkAge() {
    while (age !== 'yes' && age !== 'no' && age !== 'y' && age !== 'n') {
        var age = prompt("Do you think I am above 24 years old?").toLowerCase();
        if (age === 'yes' || age === 'y' ) {
            alert("Sorry! That's incorrect")
            console.log("Do you think I am above 24 years old?" , "Incorrect")
        } else if (age === 'no' || age === 'n') {
            alert("Yes! That's Correct")
            console.log("Do you think I am above 24 years old?m ", "Correct")
        }
    }
}

function checkCountry() {
    while (country !== 'yes' && country !== 'no' && country !== 'y' && country !== 'n') {
        var country = prompt("Do I live in Jordan?").toLowerCase();
        if (country === 'yes' || country === 'y' ) {
            alert("Yes! Correct")
            console.log("Do I live in Jordan?" , "Correct")
        } else if (country === 'no' || country === 'n') {
            alert("Sorry! That's incorrect")
            console.log("Do I live in Jordan?? ", "Incorrect")
        }
    }
}


function checkHobbie() {
    while (hobbie !== 'yes' && hobbie !== 'no' && hobbie !== 'y' && hobbie !== 'n') {
        var hobbie = prompt("Do you think I love programming?").toLowerCase();
        switch (hobbie) {
            case "yes" || "y":
                alert("Yes! That's Correct");
                console.log("Do you think I love programming?", "Correct");
                break;

                case "no" || "n" : 
                alert("Sorry! That's incorrect");
                console.log("Do you think I love programming?" , "Incorrect");
                break;

        }

    }
}



checkRole();
checkWeight();
checkAge();
checkCountry();
checkHobbie();

alert("Thank you " + userName + " , kindly check your console to see your answers");