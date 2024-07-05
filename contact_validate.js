function validate() {
    var name = document.querySelector("#name");
    var email = document.querySelector("#email");
    var phone = document.querySelector("#cell");
    var contactMethodEmail = document.querySelector("#emailContact");
    var contactMethodPhone = document.querySelector("#phoneContact");
    var show = document.querySelector("#show");

    // Clear any previous messages
    show.innerText = "";

    if (name.value === "" || name.value == null) {
        show.innerText = "Please enter your name.";
        return false;
    }

    if (email.value === "" && phone.value === "") {
        show.innerText = "Please enter your email and/or contact number.";
        return false;
    }

    if (!contactMethodEmail.checked && !contactMethodPhone.checked) {
        show.innerText = "Please select a preferred contact method.";
        return false;
    }

    show.innerText = "Successfully submitted.";
    
    // Delay form submission by 2 seconds
    setTimeout(function() {
        document.querySelector("form").submit();
    }, 2000);

    return false; // Prevent the default form submission to handle it via JavaScript
}
