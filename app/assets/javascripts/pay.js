/**
 * Created by li on 15-6-29.
 */
function pay_item(){
    $.ajax({
        type: "get",
        url: "/pay",
        success: function (data) {
            if (data["status"]==1){
                window.location.href = 'item_list.html.erb'
            }
        }
    });
}