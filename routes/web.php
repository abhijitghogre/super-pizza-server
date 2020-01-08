<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::prefix('api/v1')->group(function () {

    // Menu page
    Route::get('/pizzas', 'PizzaController@index')->name('pizzas.index');


    // Cart page
    Route::post('/orders', 'OrderController@store')->name('orders.store');
    Route::get('/orders', 'OrderController@index')->name('orders.index')->middleware(['auth']);


    // Auth routes
    Route::post('register', 'Auth\RegisterController@register');
    Route::post('login', 'Auth\LoginController@login');
    Route::get('auth', function () {
        if (Auth::check()) {
            return Auth::user();
        }
        return response(['error' => 'Unauthorised'], 401);
    });
    Route::post('logout', 'Auth\LoginController@logout')->name('logout');
});

Route::get('/{path?}', function () {
    return view('welcome');
});
