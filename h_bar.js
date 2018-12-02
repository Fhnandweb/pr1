
$("#h_bar>ul>li>a").mouseenter(function(){
    $a=$(this);
    $a.next().slideToggle(500);
})
$("#h_bar>ul>li>a").mouseleave(function(){
    $a=$(this);
    $a.next().css("display","none")
})
// window.onscroll=function(){
//     var scrollTop=
//         document.body.scrollTop
//         ||document.documentElement.scrollTop;
//       if(scrollTop>100){
//         $("#h_bar").css({
//             "position":"fixed",
//             "transition":"all 1s linear"
//         })
//     }
// }