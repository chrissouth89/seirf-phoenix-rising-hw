class AddDefaultValueToColumn < ActiveRecord::Migration[6.0]
  def change
    change_column_default( :tweet, :author, 'chris' )
  end
end
