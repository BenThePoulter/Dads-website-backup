$(document).ready(function () {
    $(".icon").click(function(){
        $(".navbar").toggleClass("closed open");
        $("#nav-icon").toggleClass("fa-bars fa-times");
    });
});
