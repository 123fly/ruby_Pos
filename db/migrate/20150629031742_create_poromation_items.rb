class CreatePoromationItems < ActiveRecord::Migration
  def change
    create_table :poromation_items do |t|
      t.string :barcode
      t.timestamps null: false
    end
  end
end
