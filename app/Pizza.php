<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Pizza
 *
 * @property int $id
 * @property string $name
 * @property float $price
 * @property string $description
 * @property string $image_url
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Pizza newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Pizza newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Pizza query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Pizza whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Pizza whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Pizza whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Pizza whereImageUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Pizza whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Pizza wherePrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Pizza whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Pizza extends Model
{
    public function suborders()
    {
        return $this->hasMany('App\Suborder');
    }
}
