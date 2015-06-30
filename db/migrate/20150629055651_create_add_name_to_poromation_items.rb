class CreateAddNameToPoromationItems < ActiveRecord::Migration
  def change
    create_table :add_name_to_poromation_items do |t|
      add_column :poromation_items, :name, :string
      t.timestamps null: false
    end
  end
end
