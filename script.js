function validate() {


    let regName = /^[a-zA-Z]+[a-zA-Z]+$/;
    let fi_name = document.getElementById('f_name').value;
    let li_name = document.getElementById('l_name').value;
    let user_interest = document.getElementById('interest').value;
    let radio_button=document.getElementById('terms');
    if(!(regName.test(fi_name)||regName.test(li_name)||regName.test(user_interest))){
        alert('Please fill the form');
        return false;
    }
    if(!regName.test(fi_name)){
        alert('Please enter your First name.');
        return false;
    }
    else if(fi_name.length<=3){
        alert('The First Name length must be above 6 characters.');
        return false;
    }
    if(!regName.test(li_name)){
        alert('Please enter your Last name.');
        return false;
    }
    else if(li_name.length<=3){
        alert('The Last Name length must be above 6 characters.');
        return false;
    }
    if(!regName.test(user_interest)){
        alert('Please select a valid option');
        return false;
    }
    if(!radio_button.checked){
        alert("Select the Terms and Conditions.");
        return false;
    }
    alert('Submitted');
    return true;
    
}



/*
Scoping
Hoisting 
Functional scope
Global scope
Lexical scope
Block level scope

Closures*/
