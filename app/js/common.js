$(document).ready(function () {

    //Mobile menu
    $('.burger-top').click(function () {
        $(this).children('.burger-top__icon').toggleClass("active");
        $('.menu-top').slideToggle("normal");
    });

    //Portfolio grid
    $("#portfolio-grid__list").mixItUp();

    //Tabs
    $(".tab-content__item").not(":first").hide();
    $(".tabs-item .tabs-item__tab").click(function () {
        $(".tabs-item .tabs-item__tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab-content__item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    //JSON timeline add
    $.getJSON('../data/timeline.json', function (data) {
        var items = [];
        var temp = $('#timeline').clone();
        $.each(data, function (key, val) {
            var block = $(temp).html();
            for (var prop in val) {
                var str = $('<div/>').text(val[prop]).html();
                var block = block.replace('%' + prop + '%', str);
            }
            items.push(block);
        });
        $('.main-timeline .container .row').append(items);
    });

});

var time = 1000,
    count = true;

$(window).scroll(function () {

    var time = 1,
        topStats = $('.main-stats').offset().top,
        topWindow = $(window).scrollTop();

    if (topStats < topWindow + 350 && count) {
        $('.stats-item__number').each(function () {
            count = false;
            var i = 1,
                num = $(this).data('num'),
                step = 5000 * time / num,
                that = $(this),
                int = setInterval(function () {
                    if (i <= num) {
                        that.html(i);
                    }
                    else {
                        clearInterval(int);
                    }
                    i++;
                }, step);
        });
    }
    ;
});
