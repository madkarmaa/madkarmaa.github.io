var myVar;

function loadingAnimation() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.body.background = "https://madkarmaa.github.io/bongocat/img/background.jpg"
    document.getElementById("loader").style.display = "none";
    document.getElementById("app").style.display = "flex";
    document.getElementById("title").style.display = "block";
}

$(document).ready(function(){
    $("#general").click(function(){
        $(".commands:not(#general-commands)").hide();
        $("#general-commands").toggle(500);
    });
});

$(document).ready(function(){
    $("#welcomer").click(function(){
        $(".commands:not(#welcomer-commands)").hide();
        $("#welcomer-commands").toggle(500);
    });
});

$(document).ready(function(){
    $("#economy").click(function(){
        $(".commands:not(#economy-commands)").hide();
        $("#economy-commands").toggle(500);
    });
});

$(document).ready(function(){
    $("#gifs").click(function(){
        $(".commands:not(#gifs-commands)").hide();
        $("#gifs-commands").toggle(500);
    });
});

$(document).ready(function(){
    $("#meters").click(function(){
        $(".commands:not(#meters-commands)").hide();
        $("#meters-commands").toggle(500);
    });
});

$(document).ready(function(){
    $("#games").click(function(){
        $(".commands:not(#games-commands)").hide();
        $("#games-commands").toggle(500);
    });
});