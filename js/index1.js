
$(".Inf_app").mouseenter(function () {
    $(".Inf_code").slideDown(500)
})
$(".Inf_title_content").mouseleave(function () {
    $(".Inf_code").slideUp(500)
})
var c1=document.getElementById("c1");
var cxt=c1.getContext('2d');

    var LineChart = function (cxt) {
        this.cxt= cxt || document.getElementById('c1').getContext('2d')
        this.canvasWidth=this.cxt.canvas.width;
        this.canvasHeight=this.cxt.canvas.height;
        this.gridSize=10;
        this.space=20;
        this.arrowSize=10
        this.dottedSize = 6;
        this.x0 = 0;
        this.y0 = 98;
    }
    LineChart.prototype.init = function (data) {
        this.drawGrid();
        this.drawDotted(data)
    }
LineChart.prototype.drawGrid = function () {
    var xline=Math.floor(this.canvasHeight / 4);
    var yline=Math.floor(this.canvasWidth / 4);
    for(var i = 0;i <4; i++){
        cxt.beginPath();
        cxt.moveTo(0,i * xline-0.5);
        cxt.lineTo(this.canvasWidth,i * xline-0.5)
        cxt.strokeStyle='#eee'
        cxt.setLineDash([5])
        cxt.stroke()
        cxt.closePath()
    }
    for(var i = 0;i <4; i++){
        cxt.beginPath();
        cxt.moveTo(i * yline-0.5,0);
        cxt.lineTo(i * yline-0.5,this.canvasHeight)
        cxt.stroke()
        cxt.closePath()
    }
}
LineChart.prototype.drawDotted = function (data) {
    var yline1=Math.floor(this.canvasWidth / 4);
    this.cxt.lineWidth =1;
    var that=this
    var precanvasx=0;
    var precanvasy=0
    var i1 =[]
    var i2 = []
    data.forEach(function (item,i) {
        i1.push(item.y)
        i2.push(item.x)
    })
    var iMax = Math.max.apply(null,i1);
    var aHeight = [];
    for(var i = 0;i<i1.length;i++){
        aHeight[i] = i1[i]/iMax*c1.height;
    }
    var iw = Math.max.apply(null,i2)
    var awidth = []
    for (var i = 0; i < i2.length; i++) {
        awidth[i] = i2[i]/iw * c1.width
    }
    data.forEach(function (item,i) {
        var canvasX=that.x0+awidth[i]
        var canvasY=that.y0-aHeight[i]
        var linger = that.cxt.createLinearGradient(that.x0,that.y0,canvasX,canvasY)
        linger.addColorStop(1,'rgba(240,239,252,0.3)')
        linger.addColorStop(1,'rgba(240,239,252,0.3)')
        //绘制折线
        if(i ==0){
            that.cxt.beginPath();
            that.cxt.lineTo(canvasX,canvasY)
            that.cxt.setLineDash([0])
            that.cxt.strokeStyle='#BAC8E8'
            that.cxt.stroke()
        }else{
            that.cxt.beginPath();
            that.cxt.moveTo(precanvasx,precanvasy)
            that.cxt.lineTo(canvasX,canvasY)
            that.cxt.stroke()
            that.cxt.beginPath()
            that.cxt.fillStyle = linger
            that.cxt.moveTo(canvasX,that.y0);
            that.cxt.lineTo(canvasX,canvasY);
            that.cxt.lineTo(precanvasx,precanvasy);
            that.cxt.lineTo(precanvasx,that.y0);
            that.cxt.fill()
            that.cxt.closePath()
        }
        precanvasx=canvasX;
        precanvasy=canvasY
    })
    this.cxt.beginPath()
    this.cxt.moveTo(0,this.y0-8)
    this.cxt.lineTo(this.canvasWidth,this.y0-8)
    this.cxt.lineWidth =1.5;
    this.cxt.strokeStyle = '#ccc'
    cxt.setLineDash([0])
    this.cxt.stroke()
    this.cxt.closePath()
}

    var lineChart = new LineChart()
$(".ind_index").each(function (index) {
    $(this).mouseenter(function () {
        $($(".ind_index").eq(index)).after($(".ind_canvas"))
        cxt.clearRect(0,0,cxt.canvas.width,cxt.canvas.height)
        lineChart.init(data[index])

    })
})
    var data = [
        [{x:1, y:60,time:'9:30'},
            {x:2, y:8,time:'9:30'},
            {x:4, y:90,time:'9:30'},
            {x:6, y:58,time:'9:30'},
            {x:9,y:90,time:'11:30'},
            {x:30,y:30,time:'11:30'},
            {x:40,y:40,time:'11:30'},
            {x:50, y:55,time:'11:30'},
            {x:55,y:60,time:'15:00'},
            {x:59,y:70,time:'15:00'},
            {x:60,y:40,time:'15:00'},
            {x:61, y:15,time:'15:00'},
            {x:62,y:50,time:'15:00'},
            {x:65,y:30,time:'15:00'},
            {x:70,y:40,time:'15:00'}
            ],
        [
            {x:30,y:30,time:'11:30'},
            {x:40,y:40,time:'11:30'},
            {x:50, y:55,time:'11:30'},
            {x:55,y:60,time:'15:00'},
            {x:59,y:70,time:'15:00'},
            {x:60,y:40,time:'15:00'},
            {x:61, y:15,time:'15:00'},
            {x:62,y:50,time:'15:00'},
            {x:65,y:30,time:'15:00'},
            {x:70,y:40,time:'15:00'},
            {x:75,y:40,time:'15:00'},
            {x:76, y:15,time:'15:00'},
            {x:77,y:50,time:'15:00'},
            {x:82,y:30,time:'15:00'},
            {x:90,y:40,time:'15:00'}
        ],
        [{x:1, y:50,time:'9:30'},
            {x:2, y:77,time:'9:30'},
            {x:4, y:60,time:'9:30'},
            {x:6, y:58,time:'9:30'},
            {x:9,y:90,time:'11:30'},
            {x:30,y:30,time:'11:30'},
            {x:40,y:40,time:'11:30'},
            {x:50, y:55,time:'11:30'},
            {x:55,y:60,time:'15:00'},
            {x:59,y:70,time:'15:00'},
            {x:60,y:40,time:'15:00'},
            {x:61, y:15,time:'15:00'},
            {x:62,y:50,time:'15:00'},
            {x:65,y:30,time:'15:00'},
            {x:70,y:40,time:'15:00'}
        ],
        [{x:1, y:50,time:'9:30'},
            {x:2, y:77,time:'9:30'},
            {x:4, y:60,time:'9:30'},
            {x:6, y:58,time:'9:30'},
            {x:9,y:90,time:'11:30'},
            {x:30,y:30,time:'11:30'},
            {x:40,y:40,time:'11:30'},
            {x:50, y:55,time:'11:30'},
            {x:55,y:60,time:'15:00'},
            {x:59,y:70,time:'15:00'},
            {x:60,y:40,time:'15:00'},
            {x:61, y:15,time:'15:00'},
            {x:62,y:50,time:'15:00'},
            {x:65,y:30,time:'15:00'},
            {x:70,y:40,time:'15:00'}
        ]
    ]
lineChart.init(data[0])



    $(".ind_Change li").each(function (index) {
        $(this).mouseenter(function () {
            $(".ind_Change li").eq(0).css("background","#c8c8c8")
            $(".ind_Change li .ind_Change_arrow").eq(0).hide()
            $(".ind_Change li").css("background","#c8c8c8").eq(index).css("background","#1B97F7")
            $(".ind_Change li .ind_Change_arrow").hide().eq(index).show()
        })
    })
$(".ind_ranking_title li").each(function (index) {
    $(this).click(function () {
        $(".ind_ranking_title li").css("background","#c8c8c8").eq(index).css("background","#fff")
    })
})
$(".ind_market_title li").each(function (index) {
    $(this).click(function () {
        $(".ind_market_title li").css("background","#c8c8c8").eq(index).css("background","#fff")
    })
})
$(".ind_special_institution p").each(function (index) {
    $(this).mouseenter(function () {
        $(".ind_special_institution img").hide().eq(index).show()
    })
})
var num=$(".ind_con_banner_leftM img")
let n=0;
function move(){
    n++
    if(n===num.length){
        n=0
    }
    if(n<0){
        n=num.length-1;
    }
    $(".ind_con_banner_leftM img").removeClass("active1").eq(n).addClass("active1");
    $(".ind_con_banner_leftM span").removeClass("active1").hide().eq(n).addClass("active1").show();
    // $(".ind_con_banner_leftM img").css({"opacity":0}).eq(n).css({"opacity":1,"transition":"all 0.3s linear"})

}
let t=setInterval(move,2000);
$(".ind_con_banner_leftM").mouseenter(function(){
    clearInterval(t);
    $(".ind_con_banner_leftM em").fadeIn(1000)
})
$(".em1").click(function () {
    n-=2;
    move();
})
$(".em").click(function () {
    move();
})
$(".ind_con_banner_leftM").mouseleave(function(){
    t=setInterval(move,2000);
    $(".ind_con_banner_leftM em").fadeOut(1000)
})
$(".ind_con_banner_leftL img").each(function (index) {
    $(this).hover(function () {
        $(".ind_con_banner_leftL p").eq(index).css({
            "opacity":"1",
            "height":"30px"
        })
    })
    $(this).mouseleave(function () {
        $(".ind_con_banner_leftL p").eq(index).css({
            "opacity":"0",
            "height":"0px"
        })
    })
})
$(".ind_con_banner_leftR img").each(function (index) {
    $(this).hover(function () {
        $(".ind_con_banner_leftR p").eq(index).css({
            "opacity":"1",
            "height":"37px"
        })
    })
    $(this).mouseleave(function () {
        $(".ind_con_banner_leftR p").eq(index).css({
            "opacity":"0",
            "height":"0px"
        })
    })
})
$('.ind_special_institution p').each(function(){
    var maxwidth=14;
    if($(this).text().length>maxwidth){
        $(this).text($(this).text().substring(0,maxwidth));
        $(this).html($(this).html()+'...');
    }
});
$('.ind_right_content li p:nth-child(2)').each(function(){
    var maxwidth=28;
    if($(this).text().length>maxwidth){
        $(this).text($(this).text().substring(0,maxwidth));
        $(this).html($(this).html()+'...');
    }
})