/**
 * Created by li on 15-6-23.
 */
function get_cart_list(id){
    $.ajax({
        type: "get",
        url: "/get_cart_list",
        data: {"id": id},
        success: function (data) {
          var number = 0;
            for(var i in data){
               var item=data[i];
                number =number +item.count;
            }
            $('#number').html('('+number+')')
    }
    })
}