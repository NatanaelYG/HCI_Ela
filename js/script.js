function validateForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var gender = document.getElementById('gender').value;
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;

    if (firstName === '' || lastName === '' || gender === '' || address === '' || email === '') {
        alert('Semua kolom harus diisi.');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Email tidak valid.');
        return false;
    }

    return true;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

var dropdownState = 0;

function dropdown(){
    var dropdownList = document.getElementById("dropdown-menu");

    if(dropdownState == 1){
        dropdownList.style.display = "block";
        dropdownState = 0;
    }else{
        dropdownList.style.display = "none";
        dropdownState = 1;
    }
}