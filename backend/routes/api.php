<?php

use Illuminate\Support\Facades\Route;

Route::get("/me", function () {
    return view("hit the me api");
});

Route::get('/login', function () {
    return "hiii";
});