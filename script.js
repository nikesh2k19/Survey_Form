function submitForm() {
    // Perform validation here
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var dob = document.getElementById('dob').value;
    var country = document.getElementById('country').value;
    var gender = getSelectedRadio("gender");
    var profession = document.getElementById('profession').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;

    // Check if all fields are filled
    if (!firstName || !lastName || !dob || !country || !gender || !profession || !email || !mobile) {
        alert("Please fill in all the fields.");
        return;
    }

    // Display the selected values in a popup
    var popupMessage = "First Name: " + firstName + "\n" +
                       "Last Name: " + lastName + "\n" +
                       "Date of Birth: " + dob + "\n" +
                       "Country: " + country + "\n" +
                       "Gender: " + gender + "\n" +
                       "Profession: " + profession + "\n" +
                       "Email: " + email + "\n" +
                       "Mobile Number: " + mobile;
                       
    alert(popupMessage);

    // Reset the form
    document.getElementById("surveyForm").reset();
}

function resetForm() {
    document.getElementById('surveyForm').reset();
}

function getSelectedRadio(name) {
    var radios = document.getElementsByName(name);
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
    return null; // Return null if no radio button is selected
}