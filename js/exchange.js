(function (){

    window.addEventListener("load", function(){
        var data = [100,200,0,700,230,12,58,68,35,99,11,22,5,88,99,66,58,458,457,52,35,25,158,15,12,700,230,700,230,12,58,68,35,99,11,22,5,88,99,66,58,458,457,52,35,25,158,15,12,12,58,68,35,99,11,22,5,88,99,66,58,458,457,52,35,25,158,15,12,15,88,35,21,25,258,33,245,698,85,69,36,333];
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
        var grid_cols = data.length + 1;
        var grid_rows = 4;
        var cell_height = a_canvas.height / grid_rows;
        var cell_width = a_canvas.width / grid_cols;
        context.lineWidth = 1;
        context.strokeStyle = "#a0a0a0";
        // 结束边框描绘
        context.beginPath();
        // 准备画横线
        for (var col = 0; col <= grid_cols; col++) {
            var x = col * cell_width;
            context.moveTo(x,0);
            context.lineTo(x,a_canvas.height);
        }
        // 准备画竖线
        for(var row = 0; row <= grid_rows; row++){
            var y = row * cell_height;
            context.moveTo(0,y);
            context.lineTo(a_canvas.width, y);
        }
        //划横线
        context.moveTo(0,a_canvas.height/2);
        context.lineTo(a_canvas.width,a_canvas.height/2);
        //画竖线
        context.moveTo(0,0);
        context.lineTo(0,a_canvas.height);
        context.lineWidth = 1;
        context.strokeStyle = "#ededed";
        context.stroke();
        var max_v =0;
        for(var i = 0; i<data.length; i++){
            var d=0;
            if(data[i]<0)
            {dd=d-data[i];
            }
            else{d=data[i];};
            if (d > max_v) { max_v =d};
        }
        max_vmax_v = max_v * 1.1;
        // 将数据换算为坐标
        var points = [];
        for( var i=0; i < data.length; i++){
            var v= data[i];
            var px = cell_width *　(i +1);
            var py = a_canvas.height/2 - a_canvas.height*(v / max_v)/2;
            points.push({"x":px,"y":py});
        }
        // 绘制折现
        context.beginPath();
        context.moveTo(points[0].x, points[0].y);
        for(var i= 1; i< points.length; i++){
            context.lineTo(points[i].x,points[i].y);
        }
        context.lineWidth = 2;
        context.strokeStyle = "#5C6287";
        context.stroke();
    },false);
})();
(function (){

    window.addEventListener("load", function(){
        var data = [100,200,0,700,230,12,58,68,35,99,11,22,5,88,99,66,58,458,457,52,35,25,158,15,12,700,230,700,230,12,58,68,35,99,11,22,5,88,99,66,58,458,457,52,35,25,158,15,12,12,58,68,35,99,11,22,5,88,99,66,58,458,457,52,35,25,158,15,12,15,88,35,21,25,258,33,245,698,85,69,36,333];
        // 获取上下文
        var a_canvas = document.getElementById('can1');
        var context = a_canvas.getContext("2d");
        // 绘制背景
        var gradient = context.createLinearGradient(0,0,300,135);
        gradient.addColorStop(0,"#ffffff");
        gradient.addColorStop(1,"#F7F7F7");
        context.fillStyle = gradient;
        context.fillRect(0,0,a_canvas.width,a_canvas.height);
        // 描绘边框
        var grid_cols = data.length + 1;
        var grid_rows = 4;
        var cell_height = a_canvas.height / grid_rows;
        var cell_width = a_canvas.width / grid_cols;
        context.lineWidth = 1;
        context.strokeStyle = "#a0a0a0";
        // 结束边框描绘
        context.beginPath();
        // 准备画横线
        for (var col = 0; col <= grid_cols; col++) {
            var x = col * cell_width;
            context.moveTo(x,0);
            context.lineTo(x,a_canvas.height);
        }
        // 准备画竖线
        for(var row = 0; row <= grid_rows; row++){
            var y = row * cell_height;
            context.moveTo(0,y);
            context.lineTo(a_canvas.width, y);
        }
        //划横线
        context.moveTo(0,a_canvas.height/2);
        context.lineTo(a_canvas.width,a_canvas.height/2);
        //画竖线
        context.moveTo(0,0);
        context.lineTo(0,a_canvas.height);
        context.lineWidth = 1;
        context.strokeStyle = "#ededed";
        context.stroke();
        var max_v =0;
        for(var i = 0; i<data.length; i++){
            var d=0;
            if(data[i]<0)
            {dd=d-data[i];
            }
            else{d=data[i];};
            if (d > max_v) { max_v =d};
        }
        max_vmax_v = max_v * 1.1;
        // 将数据换算为坐标
        var points = [];
        for( var i=0; i < data.length; i++){
            var v= data[i];
            var px = cell_width *　(i +1);
            var py = a_canvas.height/2 - a_canvas.height*(v / max_v)/2;
            points.push({"x":px,"y":py});
        }
        // 绘制折现
        context.beginPath();
        context.moveTo(points[0].x, points[0].y);
        for(var i= 1; i< points.length; i++){
            context.lineTo(points[i].x,points[i].y);
        }
        context.lineWidth = 2;
        context.strokeStyle = "#5C6287";
        context.stroke();
    },false);
})();
(function (){

    window.addEventListener("load", function(){
        var data = [100,200,0,700,230,12,58,68,35,99,11,22,5,88,99,66,58,458,457,52,35,25,158,15,12,700,230,700,230,12,58,68,35,99,11,22,5,88,99,66,58,458,457,52,35,25,158,15,12,12,58,68,35,99,11,22,5,88,99,66,58,458,457,52,35,25,158,15,12,15,88,35,21,25,258,33,245,698,85,69,36,333];
        // 获取上下文
        var a_canvas = document.getElementById('can2');
        var context = a_canvas.getContext("2d");
        // 绘制背景
        var gradient = context.createLinearGradient(0,0,300,135);
        gradient.addColorStop(0,"#ffffff");
        gradient.addColorStop(1,"#F7F7F7");
        context.fillStyle = gradient;
        context.fillRect(0,0,a_canvas.width,a_canvas.height);
        // 描绘边框
        var grid_cols = data.length + 1;
        var grid_rows = 4;
        var cell_height = a_canvas.height / grid_rows;
        var cell_width = a_canvas.width / grid_cols;
        context.lineWidth = 1;
        context.strokeStyle = "#a0a0a0";
        // 结束边框描绘
        context.beginPath();
        // 准备画横线
        for (var col = 0; col <= grid_cols; col++) {
            var x = col * cell_width;
            context.moveTo(x,0);
            context.lineTo(x,a_canvas.height);
        }
        // 准备画竖线
        for(var row = 0; row <= grid_rows; row++){
            var y = row * cell_height;
            context.moveTo(0,y);
            context.lineTo(a_canvas.width, y);
        }
        //划横线
        context.moveTo(0,a_canvas.height/2);
        context.lineTo(a_canvas.width,a_canvas.height/2);
        //画竖线
        context.moveTo(0,0);
        context.lineTo(0,a_canvas.height);
        context.lineWidth = 1;
        context.strokeStyle = "#ededed";
        context.stroke();
        var max_v =0;
        for(var i = 0; i<data.length; i++){
            var d=0;
            if(data[i]<0)
            {dd=d-data[i];
            }
            else{d=data[i];};
            if (d > max_v) { max_v =d};
        }
        max_vmax_v = max_v * 1.1;
        // 将数据换算为坐标
        var points = [];
        for( var i=0; i < data.length; i++){
            var v= data[i];
            var px = cell_width *　(i +1);
            var py = a_canvas.height/2 - a_canvas.height*(v / max_v)/2;
            points.push({"x":px,"y":py});
        }
        // 绘制折现
        context.beginPath();
        context.moveTo(points[0].x, points[0].y);
        for(var i= 1; i< points.length; i++){
            context.lineTo(points[i].x,points[i].y);
        }
        context.lineWidth = 2;
        context.strokeStyle = "#5C6287";
        context.stroke();
    },false);
})();
(function (){

    window.addEventListener("load", function(){
        var data = [100,200,0,700,230,12,58,68,35,99,11,22,5,88,99,66,58,458,457,52,35,25,158,15,12,700,230,700,230,12,58,68,35,99,11,22,5,88,99,66,58,458,457,52,35,25,158,15,12,12,58,68,35,99,11,22,5,88,99,66,58,458,457,52,35,25,158,15,12,15,88,35,21,25,258,33,245,698,85,69,36,333];
        // 获取上下文
        var a_canvas = document.getElementById('can3');
        var context = a_canvas.getContext("2d");
        // 绘制背景
        var gradient = context.createLinearGradient(0,0,300,135);
        gradient.addColorStop(0,"#ffffff");
        gradient.addColorStop(1,"#F7F7F7");
        context.fillStyle = gradient;
        context.fillRect(0,0,a_canvas.width,a_canvas.height);
        // 描绘边框
        var grid_cols = data.length + 1;
        var grid_rows = 4;
        var cell_height = a_canvas.height / grid_rows;
        var cell_width = a_canvas.width / grid_cols;
        context.lineWidth = 1;
        context.strokeStyle = "#a0a0a0";
        // 结束边框描绘
        context.beginPath();
        // 准备画横线
        for (var col = 0; col <= grid_cols; col++) {
            var x = col * cell_width;
            context.moveTo(x,0);
            context.lineTo(x,a_canvas.height);
        }
        // 准备画竖线
        for(var row = 0; row <= grid_rows; row++){
            var y = row * cell_height;
            context.moveTo(0,y);
            context.lineTo(a_canvas.width, y);
        }
        //划横线
        context.moveTo(0,a_canvas.height/2);
        context.lineTo(a_canvas.width,a_canvas.height/2);
        //画竖线
        context.moveTo(0,0);
        context.lineTo(0,a_canvas.height);
        context.lineWidth = 1;
        context.strokeStyle = "#ededed";
        context.stroke();
        var max_v =0;
        for(var i = 0; i<data.length; i++){
            var d=0;
            if(data[i]<0)
            {dd=d-data[i];
            }
            else{d=data[i];};
            if (d > max_v) { max_v =d};
        }
        max_vmax_v = max_v * 1.1;
        // 将数据换算为坐标
        var points = [];
        for( var i=0; i < data.length; i++){
            var v= data[i];
            var px = cell_width *　(i +1);
            var py = a_canvas.height/2 - a_canvas.height*(v / max_v)/2;
            points.push({"x":px,"y":py});
        }
        // 绘制折现
        context.beginPath();
        context.moveTo(points[0].x, points[0].y);
        for(var i= 1; i< points.length; i++){
            context.lineTo(points[i].x,points[i].y);
        }
        context.lineWidth = 2;
        context.strokeStyle = "#5C6287";
        context.stroke();
    },false);
})();
(function (){

    window.addEventListener("load", function(){
        var data = [100,200,0,700,230,12,58,68,35,99,11,22,5,88,99,66,58,458,457,52,35,25,158,15,12,700,230,700,230,12,58,68,35,99,11,22,5,88,99,66,58,458,457,52,35,25,158,15,12,12,58,68,35,99,11,22,5,88,99,66,58,458,457,52,35,25,158,15,12,15,88,35,21,25,258,33,245,698,85,69,36,333];
        // 获取上下文
        var a_canvas = document.getElementById('can4');
        var context = a_canvas.getContext("2d");
        // 绘制背景
        var gradient = context.createLinearGradient(0,0,300,135);
        gradient.addColorStop(0,"#ffffff");
        gradient.addColorStop(1,"#F7F7F7");
        context.fillStyle = gradient;
        context.fillRect(0,0,a_canvas.width,a_canvas.height);
        // 描绘边框
        var grid_cols = data.length + 1;
        var grid_rows = 4;
        var cell_height = a_canvas.height / grid_rows;
        var cell_width = a_canvas.width / grid_cols;
        context.lineWidth = 1;
        context.strokeStyle = "#a0a0a0";
        // 结束边框描绘
        context.beginPath();
        // 准备画横线
        for (var col = 0; col <= grid_cols; col++) {
            var x = col * cell_width;
            context.moveTo(x,0);
            context.lineTo(x,a_canvas.height);
        }
        // 准备画竖线
        for(var row = 0; row <= grid_rows; row++){
            var y = row * cell_height;
            context.moveTo(0,y);
            context.lineTo(a_canvas.width, y);
        }
        //划横线
        context.moveTo(0,a_canvas.height/2);
        context.lineTo(a_canvas.width,a_canvas.height/2);
        //画竖线
        context.moveTo(0,0);
        context.lineTo(0,a_canvas.height);
        context.lineWidth = 1;
        context.strokeStyle = "#ededed";
        context.stroke();
        var max_v =0;
        for(var i = 0; i<data.length; i++){
            var d=0;
            if(data[i]<0)
            {dd=d-data[i];
            }
            else{d=data[i];};
            if (d > max_v) { max_v =d};
        }
        max_vmax_v = max_v * 1.1;
        // 将数据换算为坐标
        var points = [];
        for( var i=0; i < data.length; i++){
            var v= data[i];
            var px = cell_width *　(i +1);
            var py = a_canvas.height/2 - a_canvas.height*(v / max_v)/2;
            points.push({"x":px,"y":py});
        }
        // 绘制折现
        context.beginPath();
        context.moveTo(points[0].x, points[0].y);
        for(var i= 1; i< points.length; i++){
            context.lineTo(points[i].x,points[i].y);
        }
        context.lineWidth = 2;
        context.strokeStyle = "#5C6287";
        context.stroke();
    },false);
})();
(function (){

    window.addEventListener("load", function(){
        var data = [100,200,0,700,230,12,58,68,35,99,11,22,5,88,99,66,58,458,457,52,35,25,158,15,12,700,230,700,230,12,58,68,35,99,11,22,5,88,99,66,58,458,457,52,35,25,158,15,12,12,58,68,35,99,11,22,5,88,99,66,58,458,457,52,35,25,158,15,12,15,88,35,21,25,258,33,245,698,85,69,36,333];
        // 获取上下文
        var a_canvas = document.getElementById('can5');
        var context = a_canvas.getContext("2d");
        // 绘制背景
        var gradient = context.createLinearGradient(0,0,300,135);
        gradient.addColorStop(0,"#ffffff");
        gradient.addColorStop(1,"#F7F7F7");
        context.fillStyle = gradient;
        context.fillRect(0,0,a_canvas.width,a_canvas.height);
        // 描绘边框
        var grid_cols = data.length + 1;
        var grid_rows = 4;
        var cell_height = a_canvas.height / grid_rows;
        var cell_width = a_canvas.width / grid_cols;
        context.lineWidth = 1;
        context.strokeStyle = "#a0a0a0";
        // 结束边框描绘
        context.beginPath();
        // 准备画横线
        for (var col = 0; col <= grid_cols; col++) {
            var x = col * cell_width;
            context.moveTo(x,0);
            context.lineTo(x,a_canvas.height);
        }
        // 准备画竖线
        for(var row = 0; row <= grid_rows; row++){
            var y = row * cell_height;
            context.moveTo(0,y);
            context.lineTo(a_canvas.width, y);
        }
        //划横线
        context.moveTo(0,a_canvas.height/2);
        context.lineTo(a_canvas.width,a_canvas.height/2);
        //画竖线
        context.moveTo(0,0);
        context.lineTo(0,a_canvas.height);
        context.lineWidth = 1;
        context.strokeStyle = "#ededed";
        context.stroke();
        var max_v =0;
        for(var i = 0; i<data.length; i++){
            var d=0;
            if(data[i]<0)
            {dd=d-data[i];
            }
            else{d=data[i];};
            if (d > max_v) { max_v =d};
        }
        max_vmax_v = max_v * 1.1;
        // 将数据换算为坐标
        var points = [];
        for( var i=0; i < data.length; i++){
            var v= data[i];
            var px = cell_width *　(i +1);
            var py = a_canvas.height/2 - a_canvas.height*(v / max_v)/2;
            points.push({"x":px,"y":py});
        }
        // 绘制折现
        context.beginPath();
        context.moveTo(points[0].x, points[0].y);
        for(var i= 1; i< points.length; i++){
            context.lineTo(points[i].x,points[i].y);
        }
        context.lineWidth = 2;
        context.strokeStyle = "#5C6287";
        context.stroke();
    },false);
})();
$("header").load("header.html")
$("footer").load("footer.html")
$(".e_containerRight_item").each(function (index) {
    $(this).hover(function () {
        $(".canvas").hide().eq(index).show()
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