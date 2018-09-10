(function (){

    window.addEventListener("load", function(){
        var data = [
            [{x:10,y:200},{x:11 ,y:15 },{x: 15,y:65 },{x:20 ,y:75 },{x:30 ,y: 50},{x: 41,y:85 }],
            [{x: 15,y:65 },{x:20 ,y:75 },{x:30 ,y: 50},{x: 41,y:85 },{x:65 ,y:75 },{x: 66,y:14 }],
            [{x:20 ,y:75 },{x:30 ,y: 50},{x: 41,y:85 },{x:65 ,y:75 },{x: 66,y:14 },{x: 70,y:125 },{x:88 ,y: 99}],
            [{x: 41,y:85 },{x:65 ,y:75 },{x: 66,y:14 },{x: 70,y:125 },{x:88 ,y: 99}],
            [{x:65 ,y:75 },{x: 66,y:14 },{x: 70,y:125 },{x:88 ,y: 99},{x:99 ,y: 88},{x:100 ,y:200 }],
            [{x:10,y:200},{x:11 ,y:15 },{x: 15,y:65 },{x:20 ,y:75 },{x:30 ,y: 50}, {x: 41,y:85 },{x:65 ,y:75 },{x: 66,y:14 },{x: 70,y:125 },{x:88 ,y: 99},{x:99 ,y: 88},{x:100 ,y:200 }]
            ];
        // 获取上下文
        var a_canvas = document.getElementById('can');
        var context = a_canvas.getContext("2d");
        // 绘制背景
        var gradient = context.createLinearGradient(0,0,300,135);
        gradient.addColorStop(0,"#ffffff");
        gradient.addColorStop(1,"#F7F7F7");
        context.fillStyle = gradient;
        context.fillRect(0,0,a_canvas.width,a_canvas.height);
        // 描绘边框
        var cell_height = a_canvas.height / 4;
        var cell_width = a_canvas.width / 3;
        context.lineWidth = 1;
        context.strokeStyle = "#a0a0a0";
        // 结束边框描绘
        context.beginPath();
        // 准备画横线
        for (var col = 0; col <3; col++) {
            var x = col * cell_width;
            context.setLineDash([5])
            context.moveTo(x,0);
            context.lineTo(x,a_canvas.height);
            context.strokeStyle = "#ededed";
            context.stroke();
        }
        // 准备画竖线
        for(var row = 0; row < 4; row++){
            var y = row * cell_height;
            context.beginPath()
            context.moveTo(0,y);
            context.lineTo(a_canvas.width, y);
            context.strokeStyle = "#ededed";
            context.stroke();
        }
        // 将数据换算为坐标
        var points = [];
        var v= data[0];
            v.forEach(function (item,i) {
                var px = item.x;
                var py = a_canvas.height-(item.y);
                points.push({"x":px,"y":py});
            })
            context.beginPath();
            context.setLineDash([0])
            context.moveTo(points[0].x, points[0].y);
            for(var i= 1; i< points.length; i++){
                context.lineTo(points[i].x,points[i].y);
            }
            context.lineWidth = 1.2;
            context.strokeStyle = "#535880";
            context.stroke();
        $(".e_containerRight_item").each(function (index) {
            $(this).hover(function () {
                ($(".canvas")).appendTo($(this))
                var point = [];
                var o= data[index];
                o.forEach(function (item,i) {
                    var px = item.x;
                    var py = a_canvas.height-(item.y);
                    point.push({"x":px,"y":py});
                })
                context.beginPath();
                context.setLineDash([0])
                context.moveTo(point[0].x, point[0].y);
                for(var i= 1; i< point.length; i++){
                    context.lineTo(point[i].x,point[i].y);
                }
                context.lineWidth = 1.2;
                context.strokeStyle = "#535880";
                context.stroke();
            })
        })
    },false);
})();

$("header").load("header.html")
$("footer").load("footer.html")
$(".e_containerRight_item").each(function (index) {
    $(this).hover(function () {
        $(".canvas1").hide().eq(index).show()
    })
})


var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.e_next',
        prevEl: '.e_prev',
    },
});
var Mar = document.getElementById("Marquee");
var child_div=Mar.getElementsByTagName("div")
var picH = 25;//移动高度
var scrollstep=3;//移动步幅,越大越快
var scrolltime=20;//移动频度(毫秒)越大越慢
var stoptime=3000;//间断时间(毫秒)
var tmpH = 0;
Mar.innerHTML += Mar.innerHTML;
function start(){
    if(tmpH < picH){
        tmpH += scrollstep;
        if(tmpH > picH )tmpH = picH ;
        Mar.scrollTop = tmpH;
        setTimeout(start,scrolltime);
    }else{
        tmpH = 0;
        Mar.appendChild(child_div[0]);
        Mar.scrollTop = 0;
        setTimeout(start,stoptime);
    }
}
onload=function(){setTimeout(start,stoptime)};