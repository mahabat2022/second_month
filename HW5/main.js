let  svetofor = prompt("Выберите цвет : red, yellow, green");

switch (svetofor) {
    case "red":
        document.getElementsByClassName("red")[0].style.background = "red";
        document.getElementsByClassName("red")[0].innerText = "STOP";
        break;
    case "yellow":
        document.getElementsByClassName('yellow')[0].style.background = "yellow";
        document.getElementsByClassName('yellow')[0].innerText = "WAIT";
        break;
    case "green":
        document.getElementsByClassName('green')[0].style.background = "green";
        document.getElementsByClassName('green')[0].innerText = "GO";
        break;
    default:
        alert("Ошибка, попробуйте снова");
        break;
}
