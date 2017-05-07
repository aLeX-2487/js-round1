
var bo =document.getElementsByClassName("bo");//声明定义9个方块集合
var count=bo.length;//方块个数
var btn=document.getElementsByTagName("input");//2个按钮集合

//颜色随机
var getRC=function(){
    return '#'+Math.floor(Math.random()*16777215).toString(16);
};

//开始随机闪函数
var getRan=function () {
    for (var j = 0; j < count; j++) {
        bo[j].style.backgroundColor = "#FF9900";
    }
    for(var i=0;i<100;i++){
        var a = Math.floor(Math.random()*count);
        var b = Math.floor(Math.random()*count);
        var c = Math.floor(Math.random()*count);
        if(a !== b && b !== c && c !== a){
            break;
        }
    }
    bo[a].style.backgroundColor=getRC();
    bo[b].style.backgroundColor=getRC();
    bo[c].style.backgroundColor=getRC();
}
var int;
//开始函数
var funSet=function(){
    clearInterval(int);
    int=self.setInterval("getRan()",1000);//定义循环函数
}
//停止函数
var funClear= function () {
    clearInterval(int);
    for(var k=0;k<count;k++){
        bo[k].style.backgroundColor="#FF9900";
    }
}
btn[0].onclick=funSet;
btn[1].onclick=funClear;
