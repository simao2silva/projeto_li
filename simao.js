function aparecer(x) {
    switch (x) {
        case 2:
            document.getElementsByClassName("a1")[0].style.display = "none";
            document.getElementsByClassName("a0")[0].style.display = "block";
            document.getElementsByClassName("a2")[0].style.display = "none";
            document.getElementsByClassName("a3")[0].style.display = "none";
            break;
        case 3:
            document.getElementsByClassName("a1")[0].style.display = "none";
            document.getElementsByClassName("a0")[0].style.display = "none";
            document.getElementsByClassName("a2")[0].style.display = "block";
            document.getElementsByClassName("a3")[0].style.display = "none";

            break;
        case 4:
            document.getElementsByClassName("a1")[0].style.display = "none";
            document.getElementsByClassName("a0")[0].style.display = "none";
            document.getElementsByClassName("a2")[0].style.display = "none";
            document.getElementsByClassName("a3")[0].style.display = "block";

            break;

        default:
            document.getElementsByClassName("a1")[0].style.display = "block";
            document.getElementsByClassName("a0")[0].style.display = "none";
            document.getElementsByClassName("a2")[0].style.display = "none";
            document.getElementsByClassName("a3")[0].style.display = "none";
            break;
    }
}
function imprimir(){
    window.print();
}