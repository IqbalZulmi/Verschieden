$(document).ready(function() {
    $("input[type='checkbox']").on("change", function() {
        if(this.checked) {
            //Header
            $('nav').removeClass('blc').addClass('wht');
            $('nav').removeClass('navbar-dark').addClass('navbar-light');
            $('.nav-link').removeClass('blc').addClass('wht');
            //main
            $(".greetings").removeClass("greetings").addClass("greeting");
            $(".b-pg").removeClass("b-pg").addClass("w-pg");
            $(".card2").removeClass("wht").addClass("blc");
            $("section:first-child").removeClass("blc").addClass("wht");
            $("section:nth-child(2)").removeClass("wht").addClass("blc");
            $("section:nth-child(3)").removeClass("blc").addClass("wht");
            $("section:nth-child(4)").removeClass("wht").addClass("blc");
            $("section:nth-child(5)").removeClass("blc").addClass("wht");
            //footer
            $(".h-org").removeClass("h-org").addClass("h-ylw");
            $(".footer").removeClass("blc").addClass("wht");
        } else {
            //header
            $('nav').removeClass('wht').addClass('blc');
            $('nav').removeClass('navbar-light').addClass('navbar-dark');
            $('.nav-link').removeClass('wht').addClass('blc');
            //main
            $(".greeting").removeClass("greeting").addClass("greetings");
            $(".w-pg").removeClass("w-pg").addClass("b-pg");
            $(".card2").removeClass("blc").addClass("wht");
            $("section:first-child").removeClass("wht").addClass("blc");
            $("section:nth-child(2)").removeClass("blc").addClass("wht");
            $("section:nth-child(3)").removeClass("wht").addClass("blc");
            $("section:nth-child(4)").removeClass("blc").addClass("wht");
            $("section:nth-child(5)").removeClass("wht").addClass("blc");
            //footer
            $(".h-ylw").removeClass("h-ylw").addClass("h-org");
            $(".footer").removeClass("wht").addClass("blc");
        }
    });
});
