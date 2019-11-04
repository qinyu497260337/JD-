$(function(){
	 $('[data-toggle="tooltip"]').tooltip();
	var items=$('.carousel-inner .item');
	$(window).on("resize",function(){
		var widths=$(window).width();
		if(widths>=768){//非移动端
			$(items).each(function(index,value){
				var item=$(this);
				var imgSrc=item.data("largeImage");
				//console.log(imgSrc);
				item.html($('<a href="javascript:;" class="pcImg"></a>').css("backgroundImage","url('"+imgSrc+"')"));
			})
		}else{
			$(items).each(function(index,value){
                var item=$(this);
                var imgSrc=item.data("smallImage");
                item.html('<a href="javascript:;" class="mobileImg"><img src="'+imgSrc+'" alt="..."></a>');
            });
		}
	}).trigger("resize");
	 var startX,endX;
    var carousel_inner=$(".carousel-inner")[0];

    /*获取当前轮播图*/
    var carousel=$(".carousel");

    carousel_inner.addEventListener("touchstart",function(e){
        startX= e.targetTouches[0].clientX;
    });
    carousel_inner.addEventListener("touchend",function(e){
        endX= e.changedTouches[0].clientX;
        if(endX-startX > 0){
            /*上一张*/
            carousel.carousel('prev');
        }
        else if(endX-startX < 0){
            /*下一张*/
            carousel.carousel('next');
        }
    });
    var ul=$(".uls");
    var lis=ul.find("li");
    var totalWidth=0;
    lis.each(function(index,value){
    	totalWidth=totalWidth+$(value).outerWidth(true);
    	console.log($(value).outerWidth(true));
    });
    ul.width(totalWidth);
    console.log(totalWidth);
     /*使用插件实现导航条的滑动操作*/
    var myScroll = new IScroll('.is_croll',{
        /*设置水平滑动，不允许垂直滑动*/
        scrollX: true, scrollY: false
    });
    
})
				
			
				