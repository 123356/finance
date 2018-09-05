
$('.FContainer_banner_left dl dt>p:nth-of-type(2)>span:nth-of-type(2)').each(function(){
    var maxwidth=13;
    if($(this).text().length>maxwidth){
        $(this).text($(this).text().substring(0,maxwidth));
        $(this).html($(this).html()+'...');
    }
});
var data = [
    [{x:1, y:60,time:'9:00'},
        {x:2, y:8,time:'9:00'},
        {x:4, y:90,time:'9:00'},
        {x:6, y:58,time:'9:00'},
        {x:9,y:90,time:'21:00'},
        {x:30,y:30,time:'21:00'},
        {x:40,y:40,time:'21:00'},
        {x:50, y:55,time:'21:00'},
        {x:55,y:60,time:'15:00'},
        {x:59,y:70,time:'15:00'},
        {x:60,y:40,time:'15:00'},
        {x:61, y:15,time:'15:00'},
        {x:62,y:50,time:'15:00'},
        {x:65,y:30,time:'15:00'},
        {x:70,y:40,time:'15:00'}
    ],
    [
        {x:30,y:30,time:'21:00'},
        {x:40,y:40,time:'21:00'},
        {x:50, y:55,time:'21:00'},
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
    [{x:1, y:50,time:'9:00'},
        {x:2, y:77,time:'9:00'},
        {x:4, y:60,time:'9:00'},
        {x:6, y:58,time:'9:00'},
        {x:9,y:90,time:'21:00'},
        {x:30,y:30,time:'21:00'},
        {x:40,y:40,time:'21:00'},
        {x:50, y:55,time:'21:00'},
        {x:55,y:60,time:'15:00'},
        {x:59,y:70,time:'15:00'},
        {x:60,y:40,time:'15:00'},
        {x:61, y:15,time:'15:00'},
        {x:62,y:50,time:'15:00'},
        {x:65,y:30,time:'15:00'},
        {x:70,y:40,time:'15:00'}
    ],
    [{x:1, y:50,time:'9:00'},
        {x:2, y:77,time:'9:00'},
        {x:4, y:60,time:'9:00'},
        {x:6, y:58,time:'9:00'},
        {x:9,y:90,time:'21:00'},
        {x:30,y:30,time:'21:00'},
        {x:40,y:40,time:'21:00'},
        {x:50, y:55,time:'21:00'},
        {x:55,y:60,time:'15:00'},
        {x:59,y:70,time:'15:00'},
        {x:60,y:40,time:'15:00'},
        {x:61, y:15,time:'15:00'},
        {x:62,y:50,time:'15:00'},
        {x:65,y:30,time:'15:00'},
        {x:70,y:40,time:'15:00'}
    ],
    [{x:1, y:50,time:'9:00'},
        {x:2, y:77,time:'9:00'},
        {x:4, y:60,time:'9:00'},
        {x:6, y:58,time:'9:00'},
        {x:9,y:90,time:'15:00'},
        {x:30,y:30,time:'15:00'},
        {x:40,y:40,time:'15:00'},
        {x:50, y:55,time:'15:00'},
        {x:55,y:60,time:'15:00'},
        {x:59,y:70,time:'15:00'},
        {x:60,y:40,time:'15:00'},
        {x:61, y:15,time:'15:00'},
        {x:62,y:50,time:'15:00'},
        {x:65,y:30,time:'15:00'},
        {x:70,y:40,time:'15:00'}
    ]
]
var LineChart = function (cxt) {
    this.cxt= cxt || document.getElementById('c1').getContext('2d');
    this.canvasWidth=this.cxt.canvas.width;
    this.canvasHeight=this.cxt.canvas.height;
    this.gridSize=10;
    this.space=20;
    this.arrowSize=10
    this.dottedSize = 6;
    this.x0 = this.canvasWidth/3;
    this.y0 = this.canvasHeight;
}
LineChart.prototype.init = function (data) {
    this.drawGrid();
    this.drawDotted(data)
}
LineChart.prototype.drawGrid = function () {
    var xline=Math.floor(this.canvasHeight / 4);
    var yline=Math.floor(this.canvasWidth / 3);
    for(var i = 0;i <4; i++){
        this.cxt.beginPath();
        this.cxt.moveTo(0,i * xline-0.5);
        this.cxt.lineTo(this.canvasWidth,i * xline-0.5)
        this.cxt.strokeStyle='#eee'
        this.cxt.setLineDash([5])
        this.cxt.stroke()
        this.cxt.closePath()
    }
    for(var i = 0;i <3; i++){
        this.cxt.beginPath();
        this.cxt.moveTo(i * yline-0.5,0);
        this.cxt.lineTo(i * yline-0.5,this.canvasHeight)
        this.cxt.stroke()
        this.cxt.closePath()
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
        aHeight[i] = i1[i]/iMax*this.cxt.canvas.height;
    }
    var iw = Math.max.apply(null,i2)
    var awidth = []
    for (var i = 0; i < i2.length; i++) {
        awidth[i] = i2[i]/iw * this.cxt.canvas.width
    }
    data.forEach(function (item,i) {
        var canvasX=that.x0+awidth[i]
        var canvasY=that.y0-aHeight[i]
        var linger = that.cxt.createLinearGradient(that.x0,that.y0,canvasX,canvasY)
        linger.addColorStop(1,'rgba(235,242,253,0.3)')
        linger.addColorStop(1,'rgba(235,242,253,0.3)')
        //绘制折线
        if(i ==0){
            that.cxt.beginPath();
            that.cxt.lineTo(canvasX,canvasY)
            that.cxt.setLineDash([0])
            that.cxt.lineWidth = 1.2
            that.cxt.strokeStyle='#B0D7FF'
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
    this.cxt.moveTo(0,this.y0/2)
    this.cxt.lineTo(this.canvasWidth,this.y0/2)
    this.cxt.lineWidth =1.5;
    this.cxt.strokeStyle = '#A7B8C9'
    this.cxt.setLineDash([0])
    this.cxt.stroke()
    this.cxt.closePath()
}
var lineChart = new LineChart()
lineChart.init(data[0])
$(".ftable_up").each(function (index) {
    $(this).mouseenter(function () {
        var cxt= cxt || document.getElementById('c1').getContext('2d');
        $(this).after($(".FCanvas1"))
        cxt.clearRect(0,0,cxt.canvas.width,cxt.canvas.height)
        lineChart.init(data[index])
    })
})

$(".FContent_right").each(function (index) {
    var data = [
        [{x:1, y:60,time:'9:00'},
            {x:2, y:8,time:'9:00'},
            {x:4, y:90,time:'9:00'},
            {x:6, y:58,time:'9:00'},
            {x:9,y:90,time:'21:00'},
            {x:30,y:30,time:'21:00'},
            {x:40,y:40,time:'21:00'},
            {x:50, y:55,time:'21:00'},
            {x:55,y:60,time:'15:00'},
            {x:59,y:70,time:'15:00'},
            {x:60,y:40,time:'15:00'},
            {x:61, y:15,time:'15:00'},
            {x:62,y:50,time:'15:00'},
            {x:65,y:30,time:'15:00'},
            {x:70,y:40,time:'15:00'}
        ],
        [
            {x:30,y:30,time:'21:00'},
            {x:40,y:40,time:'21:00'},
            {x:50, y:55,time:'21:00'},
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
        [{x:1, y:50,time:'9:00'},
            {x:2, y:77,time:'9:00'},
            {x:4, y:60,time:'9:00'},
            {x:6, y:58,time:'9:00'},
            {x:9,y:90,time:'21:00'},
            {x:30,y:30,time:'21:00'},
            {x:40,y:40,time:'21:00'},
            {x:50, y:55,time:'21:00'},
            {x:55,y:60,time:'15:00'},
            {x:59,y:70,time:'15:00'},
            {x:60,y:40,time:'15:00'},
            {x:61, y:15,time:'15:00'},
            {x:62,y:50,time:'15:00'},
            {x:65,y:30,time:'15:00'},
            {x:70,y:40,time:'15:00'}
        ],
        [{x:1, y:50,time:'9:00'},
            {x:2, y:77,time:'9:00'},
            {x:4, y:60,time:'9:00'},
            {x:6, y:58,time:'9:00'},
            {x:9,y:90,time:'21:00'},
            {x:30,y:30,time:'21:00'},
            {x:40,y:40,time:'21:00'},
            {x:50, y:55,time:'21:00'},
            {x:55,y:60,time:'15:00'},
            {x:59,y:70,time:'15:00'},
            {x:60,y:40,time:'15:00'},
            {x:61, y:15,time:'15:00'},
            {x:62,y:50,time:'15:00'},
            {x:65,y:30,time:'15:00'},
            {x:70,y:40,time:'15:00'}
        ],
        [{x:1, y:50,time:'9:00'},
            {x:2, y:77,time:'9:00'},
            {x:4, y:60,time:'9:00'},
            {x:6, y:58,time:'9:00'},
            {x:9,y:90,time:'15:00'},
            {x:30,y:30,time:'15:00'},
            {x:40,y:40,time:'15:00'},
            {x:50, y:55,time:'15:00'},
            {x:55,y:60,time:'15:00'},
            {x:59,y:70,time:'15:00'},
            {x:60,y:40,time:'15:00'},
            {x:61, y:15,time:'15:00'},
            {x:62,y:50,time:'15:00'},
            {x:65,y:30,time:'15:00'},
            {x:70,y:40,time:'15:00'}
        ]
    ]
    var LineChart = function (cxt) {
        this.cxt= cxt || document.getElementById('c'+(index+2)).getContext('2d');
        this.canvasWidth=this.cxt.canvas.width;
        this.canvasHeight=this.cxt.canvas.height;
        this.gridSize=10;
        this.space=20;
        this.arrowSize=10
        this.dottedSize = 6;
        this.x0 = this.canvasWidth/3;
        this.y0 = this.canvasHeight;
    }
    LineChart.prototype.init = function (data) {
        this.drawGrid();
        this.drawDotted(data)
    }
    LineChart.prototype.drawGrid = function () {
        var xline=Math.floor(this.canvasHeight / 4);
        var yline=Math.floor(this.canvasWidth / 3);
        for(var i = 0;i <4; i++){
            this.cxt.beginPath();
            this.cxt.moveTo(0,i * xline-0.5);
            this.cxt.lineTo(this.canvasWidth,i * xline-0.5)
            this.cxt.strokeStyle='#eee'
            this.cxt.setLineDash([5])
            this.cxt.stroke()
            this.cxt.closePath()
        }
        for(var i = 0;i <3; i++){
            this.cxt.beginPath();
            this.cxt.moveTo(i * yline-0.5,0);
            this.cxt.lineTo(i * yline-0.5,this.canvasHeight)
            this.cxt.stroke()
            this.cxt.closePath()
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
            aHeight[i] = i1[i]/iMax*this.cxt.canvas.height;
        }
        var iw = Math.max.apply(null,i2)
        var awidth = []
        for (var i = 0; i < i2.length; i++) {
            awidth[i] = i2[i]/iw * this.cxt.canvas.width
        }
        data.forEach(function (item,i) {
            var canvasX=that.x0+awidth[i]
            var canvasY=that.y0-aHeight[i]
            var linger = that.cxt.createLinearGradient(that.x0,that.y0,canvasX,canvasY)
            linger.addColorStop(1,'rgba(235,242,253,0.3)')
            linger.addColorStop(1,'rgba(235,242,253,0.3)')
            //绘制折线
            if(i ==0){
                that.cxt.beginPath();
                that.cxt.lineTo(canvasX,canvasY)
                that.cxt.setLineDash([0])
                that.cxt.lineWidth = 1.2
                that.cxt.strokeStyle='#B0D7FF'
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
        this.cxt.moveTo(0,this.y0/2)
        this.cxt.lineTo(this.canvasWidth,this.y0/2)
        this.cxt.lineWidth =1.5;
        this.cxt.strokeStyle = '#A7B8C9'
        this.cxt.setLineDash([0])
        this.cxt.stroke()
        this.cxt.closePath()
    }
    var lineChart = new LineChart()
    lineChart.init(data[index])
    var my = $(this).find('table').find('.t1')
    var t = index
    my.each(function (index) {
        var cxt= cxt || document.getElementById('c'+(t+2)).getContext('2d');
        $(this).mouseenter(function () {
            cxt.clearRect(0,0,cxt.canvas.width,cxt.canvas.height)
            lineChart.init(data[index])
        })
    })
})
    $("header").load("header.html")
$("footer").load("footer.html")
$(".FContainer_banner_right  dl").mouseenter(function () {
    $(".fnext,.fprev").fadeIn(200)
})
    .mouseleave (function () {
        $(".fnext,.fprev").fadeOut(200)
    })
let prev=document.querySelector(".fprev");
let next=document.querySelector(".fnext");
let ineer=document.querySelector(".FContainer_banner_right  dl dt");
let n=0;
next.onclick=function(){
    n++;
    if(n===4){
        n=3;
        return;
    }
    ineer.style.marginLeft=-338.5*n+"px";
}
prev.onclick=function(){
    n--;
    if(n===-1){
        n=0;
        return;
    }
    ineer.style.marginLeft=-338.5*n+"px";
}
var tim = document.querySelectorAll(".FCanvasTop span")
setInterval(function () {
    var d = new Date();
    var YMDHMS = d.getFullYear() + "-" +(d.getMonth()+1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    tim.forEach(function (item) {
        item.innerHTML = YMDHMS
    })
},1000)


