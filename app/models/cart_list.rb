class CartList < ActiveRecord::Base

  def self.count_shop
    number = 0
    items =CartList.all
    if items == []
      return number 
    else
      for i in 0..items.length-1
        number = number + items[i].count
      end
      return number
    end
  end
end
