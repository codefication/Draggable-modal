$(document).ready(function(e){
   $(document).off('shown.bs.modal', '#myModal').on('shown.bs.modal', '#myModal', function() {
    centerModals();
    $("#myModal").draggable({cursor: "move", handle: '.modal-header'});
  });
  $('#myModal').modal({ backdrop: 'static' })  
  $('#myModal').modal('show');
  
  $(window).on('resize', centerModals);
});

function centerModals(){
    var $clone = $('#myModal').clone().css('display', 'block').appendTo('body');
    var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
    top = top > 0 ? top : 0;
    $clone.remove();    
    $('#myModal').find('.modal-content').css({"margin-top": top});
}
  



