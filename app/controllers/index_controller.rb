class IndexController < ApplicationController
  def home
    @number = CartList.count_shop
  end

  def item_list
    @items = Item.all
    @number = CartList.count_shop
  end

  def cart
    @items = CartList.all
    @sum=0
    @number=CartList.count_shop
    for i in 0..@items.length-1
      @sum = @sum + @items[i].count*@items[i].price
    end
  end

  def pay
    @items = CartList.all
    @sum=0
    @poroation_sum=0
    @number= CartList.count_shop
    for i in 0..@items.length-1
      @sum = @sum + @items[i].count*@items[i].price
      if PoromationItem.find_by_name(@items[i].name)!=nil
        @poroation_sum = @poroation_sum + @items[i].price*(@items[i].count/3)
      end
    end
  end

  def get_cart_list
    items=CartList.get_goods(params[:id])
      respond_to do |format|
        format.json { render json: items }
      end
  end

  def show_number
    item = CartList.find_by_id(params[:id])
    if params[:status]=='+'
      item.count=item.count+1
    else
      item.count=item.count-1
    end
    if item.save
      items=CartList.all
      respond_to do |format|
        format.json { render json: items }
      end
    end
    if item.count==0
      item.delete
    end
  end

  def pay_delete
    CartList.delete_all
    redirect_to '/index/item_list'
  end
end
