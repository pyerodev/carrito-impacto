function toggleResumen() {
    var checkbox = document.getElementById("verificacion");
    var resumen = document.getElementById("resumen");
    if (checkbox.checked) {
        resumen.style.display = "block";
    } else {
        resumen.style.display = "none";
    }
}
