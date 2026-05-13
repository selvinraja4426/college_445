function registerFunc(){

    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let rollNumber = document.getElementById("rollnumber").value;
    let email = document.getElementById("email").value;

    if(firstName === "" || lastName === "" || rollNumber === "" || email === ""){
        alert("Please fill all fields");
        return;
    }

    alert(
        "Registration Successful\n\n" +
        "Name: " + firstName + " " + lastName +
        "\nRoll Number: " + rollNumber +
        "\nEmail: " + email
    )

}