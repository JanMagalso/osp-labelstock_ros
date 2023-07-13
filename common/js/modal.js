$('.c_btn_interview').on("click",function(){
  var modal_id = $(this).attr("id").slice(4);
  $("#" + modal_id).addClass("active");
  $("body").addClass("overflow-modal");  
});

$("span.close").click(function(){
  $(".modal.active").removeClass("active");
  $("body").removeClass("overflow-modal");
});

window.onclick = function(event) {
  var modal_num = $(".modal.active").attr("id");
  var modal = document.getElementById(modal_num);
  if (event.target == modal) {
    $(".modal.active").removeClass("active");
    $("body").removeClass("overflow-modal");
  }
}