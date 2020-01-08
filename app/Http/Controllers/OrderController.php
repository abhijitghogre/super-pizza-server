<?php

namespace App\Http\Controllers;

use App\Order;
use App\Pizza;
use App\Suborder;
use Auth;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response(Order::where('customer_email', auth()->user()->email)
            ->with('suborders.pizza')
            ->latest()
            ->get()
            , 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $request->validate([
            'customer_email' => 'required|email',
            'address' => 'required',
            'zip_code' => 'required',
            'phone' => 'required',
            'cart.*.quantity' => 'required|numeric',
            'cart.*.id' => 'required|exists:pizzas,id',
        ]);

        $order = new Order;
        $order->customer_email = $request->customer_email;
        $order->address = $request->address;
        $order->zip_code = $request->zip_code;
        $order->phone = $request->phone;
        $order->delivery_fee = env('DELIVERY_FEE');
        if (Auth::check()) {
            $order->user_id = Auth::id();
        }

        $pizzas = Pizza::whereIn('id', array_column($request->cart, 'id'))->get(['id', 'price']);

        $orderCost = 0;
        foreach ($request->cart as $cartItem) {
            $pizza = null;
            foreach ($pizzas as $pizzaElement) {
                if ($pizzaElement['id'] == $cartItem['id']) {
                    $pizza = $pizzaElement;
                    break;
                }
            }
            $orderCost = $orderCost + $pizza['price'] * $cartItem['quantity'];
        }
        $order->cost = $orderCost;

        $order->save();

        $suborders = [];
        foreach ($request->cart as $cartItem) {
            $suborder = new Suborder;
            $suborder->quantity = $cartItem['quantity'];
            $suborder->pizza_id = $cartItem['id'];
            array_push($suborders, $suborder);
        }

        $order->suborders()->saveMany($suborders);

        return response(['message' => 'Order placed successfully'], 201);
    }
}
