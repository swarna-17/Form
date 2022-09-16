function validate() {

    let namePattern = /^[a-zA-Z]+[a-zA-Z]+$/;
    let firstName = document.getElementById('f_name').value;
    let lastName = document.getElementById('l_name').value;
    let usersInterest = document.getElementById('interest').value;
    let termsRadio = document.getElementById('terms');

    /* Checks for empty form */     
    if(!(namePattern.test(firstName)||namePattern.test(lastName)||namePattern.test(usersInterest))){
        alert('Please fill the form');
        return false;
    }

    /* Checks for first name validation */
    if(!namePattern.test(firstName)) {
        alert('Please enter your First name.');
        return false;
    }
    /* Checks for the first name length to be more than 3 */
    else if(firstName.length<=3) {
        alert('The First Name length must be above 6 characters.');
        return false;
    }
    /* Checks for last name validation */
    if(!namePattern.test(lastName)){
        alert('Please enter your Last name.');
        return false;
    }
    /* Checks for the last name length to be more than 3 */
    else if(lastName.length<=3){
        alert('The Last Name length must be above 6 characters.');
        return false;
    }
    /* Checks whether the user selected an option */
    if(!namePattern.test(usersInterest)){
        alert('Please select a valid option');
        return false;
    }
    /* Checks whether the terms and conditions are agreed */
    if(!termsRadio.checked){
        alert("Select the Terms and Conditions.");
        return false;
    }
    alert('Submitted');
    return true;    
}

