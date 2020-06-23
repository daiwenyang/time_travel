const imgFun = (function(){
    const img = document.createElement('img');
    document.body.append(img);
    return {
        setSrc:function(src){
            img.src = src;
        }
    }
})();
const proxyImg = (function(){
    var img = new Image();
    img.onload = function(){
        imgFun.setSrc(this.src);
    }
    return {
        setSrc:function(src){
            // 懒加载图片过渡
            imgFun.setSrc('load.png');
            // 图片加载完成后出发load事件，然后显示正确图片
            img.src = src;
        }
    }
})();
proxyImg.setSrc('./flower.png')