class IndexController < ApplicationController
  def home

  end

  def get_item_list
    @items = Item.all
    render 'item_list.html.erb'
  end

  def show_cart_list
    @items = CartList.all
    @sum=0
    @number=0
    for i in 0..@items.length-1
      @sum = @sum + @items[i].count*@items[i].price
      @number=@number +@items[i].count
    end
    render 'cart.erb'
  end

  def show_item
    @items = CartList.all
    @sum=0
    @poroation_sum=0
    for i in 0..@items.length-1
      @sum = @sum + @items[i].count*@items[i].price
      if PoromationItem.find_by_name(@items[i].name)!=nil
        @poroation_sum = @poroation_sum + @items[i].price*(@items[i].count/3)
      end
    end
    render 'index/pay'
  end

  def get_cart_list
    item = Item.find_by_id(params[:id])
    if CartList.find_by_name(item.name)==nil
      goods = CartList.new
      goods.name=item.name
      goods.barcode=item.barcode
      goods.price=item.price
      goods.category=item.category
      goods.unit=item.unit
      goods.count=1
    else
      goods = CartList.find_by_name(item.name)
      goods.count = goods.count+1
    end
    if goods.save
      items=CartList.all
      respond_to do |format|
        format.json { render json: items }
      end
    end
  end

  def add_number
    item = CartList.find_by_id(params[:id])
    item.count=item.count+1
    if item.save
      items=CartList.all
      respond_to do |format|
        format.json { render json: items }
      end
    end
  end

  def sub_number
    item = CartList.find_by_id(params[:id])
    item.count=item.count-1
    if item.save
      items=CartList.all
      respond_to do |format|
        format.json { render json: items }
      end
      if item.count==0
        item.delete
      end
    end
  end

  def pay
    CartList.delete_all
    render :json => {:status => 1}
  end
end
