/**
 * Created by li on 15-6-24.
 */
function add_number(id) {
    var number_id = '.' + id;
    var item_number = $(number_id).val();
    var sum = 0;
    var item_sum = 0;
    var number = 0;
    var barcodes = ['ITEM000000', 'ITEM000001', 'ITEM000005'];
    $.ajax({
        type: "get",
        url: "/add_number",
        data: {"id": id},
        success: function (data) {
            for (var i in data) {
                var item = data[i];
                if (item.id == id) {
                    item_number = item.count;
                    $(number_id).val(item_number);
                }
                for (var j = 0; j < barcodes.length; j++) {
                    if (item.barcode == barcodes[j]) {
                        item_sum = item.price * (item.count - parseInt(item.count / 3)) + '元' + '(原价:' + item.price * item.count + '(元))';
                        break;
                    }
                    else {
                        item_sum = item.price * item.count + '(元)';
                    }
                }
                var td_id = '#' + item.name;
                $(td_id).html(item_sum);
                sum = sum + item.price * item.count;
                number = number + item.count;
            }
            $('#sum').html('总计：' + sum + '(元)');
            $('#number').html('(' + number + ')');
        }
    });
}


function open_pay_page() {
    window.location.href = 'pay.erb'
}
function sub_number(id) {
    var number_id = '.' + id;
    var item_number = $(number_id).val();
    var sum = 0;
    var item_sum = 0;
    var number = 0;
    var barcodes = ['ITEM000000', 'ITEM000001', 'ITEM000005'];
    $.ajax({
        type: "get",
        url: "/sub_number",
        data: {"id": id},
        success: function (data) {
            for (var i in data) {
                var item = data[i];
                if(data.length==1&&item.count ==0){
                    window.location.href='item_list.html.erb';
                }
                if(item.count == 0){
                    $('#tr_'+id).remove()
                }
                if (item.id == id) {
                    item_number = item.count;
                    $(number_id).val(item_number);
                }

                for (var j = 0; j < barcodes.length; j++) {
                    if (item.barcode == barcodes[j]) {
                        item_sum = item.price * (item.count - parseInt(item.count / 3)) + '元' + '(原价:' + item.price * item.count + '(元))';
                        break;
                    }
                    else {
                        item_sum = item.price * item.count + '(元)';
                    }
                }
                var td_id = '#' + item.name;
                $(td_id).html(item_sum);
                sum = sum + item.price * item.count;
                number = number + item.count;
            }
            $('#sum').html('总计：' + sum + '(元)');
            $('#number').html('(' + number + ')');
        }

    })
    ;
}




