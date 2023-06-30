<?php
use App\Models\Product;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $product = new Product();
        $product->name = 'Nome do Produto';
        $product->category = 'Categoria do Produto';
        $product->value = 10.99;
        $product-> expiration_date = '2023-01-01';
        $product->quantity = 100;
        $product->perishable = false;
        $product->save();
    }
}
