<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Order
 *
 * @property int $id
 * @property string $customer_email
 * @property int|null $user_id
 * @property string $address
 * @property int $zip_code
 * @property string $phone
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order whereCustomerEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order whereZipCode($value)
 * @mixin \Eloquent
 * @property float $delivery_fee
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Order whereDeliveryFee($value)
 */
class Order extends Model
{
    public function suborders()
    {
        return $this->hasMany('App\Suborder');
    }
}
