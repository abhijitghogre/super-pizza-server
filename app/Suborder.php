<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Suborder
 *
 * @property int $id
 * @property int $quantity
 * @property int $pizza_id
 * @property int $order_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Suborder newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Suborder newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Suborder query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Suborder whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Suborder whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Suborder whereOrderId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Suborder wherePizzaId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Suborder whereQuantity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Suborder whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Suborder extends Model
{
    public function order()
    {
        return $this->belongsTo('App\Order');
    }

    public function pizza()
    {
        return $this->belongsTo('App\Pizza');
    }
}
