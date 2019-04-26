
//超过一定高度导航添加类名
var nav=$("header"); //得到导航对象
var win=$(window); //得到窗口对象
var sc=$(document);//得到document文档对象。
win.scroll(function(){
    if(sc.scrollTop()>=100){
        nav.addClass("on");
    }else{
        nav.removeClass("on");
    }
});


$('#navToggle').on('click',function(){
    $('.m_nav').addClass('open');
});
//关闭nav
$('.m_nav .top .closed').on('click',function(){
    $('.m_nav').removeClass('open');
});

