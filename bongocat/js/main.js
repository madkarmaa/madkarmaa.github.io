$(function() {
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
});

document.getElementById("invite").onclick = function() {
    window.location.href = "https://discord.com/api/oauth2/authorize?client_id=941300861785739264&permissions=8&scope=bot"
};