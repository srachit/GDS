var height = $(window).height();
$(".contentContainer").css("min-height", height);

var height2 = 3/4 * $(window).height();
$(".2contentContainer").css("min-height", height2);


$(function () {
    $("#weAreD").typed({
        strings: [" <br /> We Are Designers"],
        typeSpeed: 50,
        showCursor: false
    });
    $("#weAreM").typed({
        strings: [" <br />We Are Musicians"],
        typeSpeed: 50,
        startDelay: 2000,
        showCursor: false
    });
    $("#weAreA").typed({
        strings: [" <br /> We Are Artists"],
        typeSpeed: 50,
        startDelay: 3700,
        showCursor: false
    });
    $("#weAreP").typed({
        strings: [" <br />We Are Programmers"],
        typeSpeed: 50,
        startDelay: 4900,
        showCursor: false
    });
    $("#weAreI").typed({
        strings: ["<br />We Are Innovators "],
        typeSpeed: 50,
        startDelay: 7000,
        showCursor: false,
        callback: function() {
            $(".weAre").fadeOut("slow");
        }
    });
    $("#weAreGDS").typed({
        strings: ["<br />We Are GDS"],
        typeSpeed: 50,
        startDelay: 9500,
        callback: function() {
            $("#gameHeader").fadeIn("200");
            init();
        }
    });

});
