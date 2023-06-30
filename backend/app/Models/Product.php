<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name', 'category', 'value', 'expiration_date', 'quantity', 'perishable'
    ];
}
