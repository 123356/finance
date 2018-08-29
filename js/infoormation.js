$(".Inf_Android").click(function () {
    $(".Inf_QRcode1").toggle()
})
$(".Inf_Ios").click(function () {
    $(".Inf_QRcode").toggle()
})
$("header").load("header.html")
$("footer").load("footer.html")
$('.Inf_tnews_content').kxbdSuperMarquee({
    distance:100,
    time:3,
    btnGo:{up:'#goU',down:'#goD'},
    direction:'up',
    loop:0
});
$('.Inf_change').kxbdSuperMarquee({
    distance:100,
    time:5,
    direction:'up',
    loop:0
});

$('.con_marquee').kxbdSuperMarquee({
    distance:540,
    time:4,
    btnGo:{up:'#goU',down:'#goD'},
    direction:'up',
    loop:0
});
$('.Inf_item_right p:nth-child(2)').each(function(){
    var maxwidth=75;
    if($(this).text().length>maxwidth){
        $(this).text($(this).text().substring(0,maxwidth));
        $(this).html($(this).html()+'...');
    }
});
let n=0;
function move(){
    n++;
    $(".itme").removeClass("active").eq(n).addClass("active")
    if(n===5){
        n=0
    }
    if(n<0){
        n=4
    }

}
let t=setInterval(move,3000)
$('.owl-carousel').mouseenter(function () {
    clearInterval(t)
})
$(".owl-carousel").mouseleave(function () {
    t=setInterval(move,3000)
})

$(".owl-prev").click(function () {
    n-=2;
    move()
})
$(".owl-next").click(function () {
    move()
})