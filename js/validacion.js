function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}



document.getElementById("regBtn").addEventListener("click", function () {
 // Validaciones
 if (nombre == "" || apellido == "" || email == "" || password1 == "" || password2 == "" || password1 !== password2 || password1.length < 6 || !terminos) {
    showAlertError();
} else {
    // Si pasa todas las validaciones
    showAlertSuccess();
}
});
