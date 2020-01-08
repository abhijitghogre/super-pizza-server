<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Pizza;
use Faker\Generator as Faker;

$factory->define(Pizza::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
        'description' => $faker->paragraph(4),
        'image_url' => $faker->imageUrl(400, 400),
        'price' => $faker->randomFloat(2, 10, 30),
    ];
});
