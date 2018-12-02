
//  function task(){
//     var $img=$("#head_s>img.show");
//     $img.removeClass("show");
//     if($img.next()){
//          $img.next().addClass("show");
//     }else{
//         $("#head_s").children(":first-child").addClass("show");
//      }
// }
// var timer=setInterval(task,3000);
// $("#head_s").mouseenter(function(){
//     clearInterval(timer);
// });
// $("#head_s").mouseleave(function(){
//     timer=setInterval(task,3000);
// });


function task(){
    var img=
    head_s.getElementsByClassName("show")[0];
    img.className="";
    if(img.nextElementSibling)
      img.nextElementSibling.className="show";
    else
      img.parentNode.children[0].className="show";
  }
 var timer=setInterval(task,3000);
//        head_s.onmouseover=function(){
//     clearInterval(timer)
//   }
//   head_s.onmouseout=function(){
//     timer=setInterval(task,3000);
//   }