<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }

    public function store(Request $request)
    {
        $product = new Product;
        $product->name = $request->name;
        $product->category = $request->category;
        $product->value = $request->value;
        $product->expiration_date = $request->expiration_date;
        $product->quantity = $request->quantity;
        $product->perishable = $request->perishable;
        $product->save();

        return response()->json($product, 201);
    }

    public function show($id)
    {
        $product = Product::find($id);
        return response()->json($product);
    }

    public function update(Request $request, $id)
    {
        $product = Product::find($id);
        $product->name = $request->name;
        $product->category = $request->category;
        $product->value = $request->value;
        $product->expiration_date = $request->expiration_date;
        $product->quantity = $request->quantity;
        $product->perishable = $request->perishable;
        $product->save();

        return response()->json($product);
    }

    public function destroy($id)
    {
        $product = Product::find($id);
        $product->delete();

        return response()->json(null, 204);
    }
}
