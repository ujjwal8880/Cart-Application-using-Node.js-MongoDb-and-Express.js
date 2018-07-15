$(document).ready(function(){
    $('ul ul').on('click',function(){
        var item=$(this).text().replace(/\-/g," ");
        var cartitem={items:item.val()};
        
        $.ajax({
            type:'POST',
            url:'/home',
            data:cartitem,
            success:function(cartitem){
                location.reload();
            }
        });
        return false;
    });
});