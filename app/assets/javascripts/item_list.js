/**
 * Created by li on 15-6-23.
 */
function get_cart_list(id){
    $.ajax({
        type: "get",
        url: "/get_cart_list",
        data: {"id": id}
        //success: function (data) {
        //    console.log(data);
        //    var sum = 0;
        //    for (var i in data) {
        //        var btn_id = i.toString();
        //        var item = new_shopping_list[i];
        //        for (var j = 0; j < barcodes.length; j++) {
        //            if (item.barcode == barcodes[j]) {
        //                html = html + '<tr>' + '<td>' + item.category + '</td>' + '<td>' + item.name + '</td>' + '<td>' + item.price + '</td>' + '<td>' + item.unit + '</td>' + '<td>' + '<button id=' + btn_id + ' onclick="subtract_number(this.id)">-</button>' + '<input type="text" id="number" value=' + item.count + '>' + '<button id=' + btn_id + ' onclick="add_number(this.id)">+</button>' + '</td>' + '<td id="subtotal">' + item.price * (item.count - parseInt(item.count / 3)) + '元(原价：' + item.price * item.count + '元)' + '</td>' + '</tr>';
        //                sum = sum + item.price * item.count;
        //                break;
        //            }
        //            if(item.barcode!=barcodes[j]&& j==barcodes.length-1) {
        //                html = html + '<tr>' + '<td>' + item.category + '</td>' + '<td>' + item.name + '</td>' + '<td>' + item.price + '</td>' + '<td>' + item.unit + '</td>' + '<td>' + '<button id=' + btn_id + ' onclick="subtract_number(this.id)">-</button>' + '<input type="text" id="number" value=' + item.count + '>' + '<button id=' + btn_id + ' onclick="add_number(this.id)">+</button>' + '</td>' + '<td id="subtotal">' + item.price * item.count + '元' + '</td>' + '</tr>';
        //                sum = item.price * item.count + sum;
        //                break;
        //            }
        //        }
        //    }
        //    html = '<tr>' + '<td>' + '分类' + '</td>' + '<td>' + '名称' + '</td>' + '<td>' + '单价（元）' + '</td>' + '<td>' + '单位' + '</td>' + '<td>' + '数量' + '</td>' + '<td>' + '小计' + '</td>' + '</tr>' + html;
        //    sum = '总计：' + sum + '（元）'
        //    $('#items_list').html(html);
        //    $('#sum').html(sum)
        //}
    })
}