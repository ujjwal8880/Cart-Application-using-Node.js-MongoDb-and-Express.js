$(document).ready(function(){
    $('ul ul').on('click',function(){
        var cartitems=$(this).text().replace(/ /g,"-");
         $.ajax({
             type: 'DELETE',
             url:  '/cart/' + cartitems,
             success: function(cartitem){
                 location.reload();
             }   
         });
    });
});