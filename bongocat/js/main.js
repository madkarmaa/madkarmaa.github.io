var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.body.background = "https://madkarmaa.github.io/bongocat/img/background.jpg"
    document.getElementById("loader").style.display = "none";
    document.getElementById("app").style.display = "flex";
    document.getElementById("title").style.display = "block";
}