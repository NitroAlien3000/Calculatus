function validate() {
    var name = document.querySelector("#name");
    var email = document.querySelector("#email");
    var phone = document.querySelector("#cell");
    var contactMethodEmail = document.querySelector("#emailContact");
    var contactMethodPhone = document.querySelector("#phoneContact");
    var show = document.querySelector("#show");

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
}
