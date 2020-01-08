<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubordersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('suborders', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->integer('quantity');

            $table->unsignedBigInteger('pizza_id');
            $table->foreign('pizza_id')->references('id')->on('pizzas')->onDelete('cascade');

            $table->unsignedBigInteger('order_id');
            $table->foreign('order_id')->references('id')->on('orders')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('suborders');
    }
}
