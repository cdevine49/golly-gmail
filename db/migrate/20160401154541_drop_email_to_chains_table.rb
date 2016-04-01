class DropEmailToChainsTable < ActiveRecord::Migration
  def change
    drop_table :emails_to_chains
  end
end
