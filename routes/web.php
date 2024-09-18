<?php

use Illuminate\Support\Facades\Route;

/*Route::get('/', function () {
    return view('front-app/src/routes/homePage.jsx');
});*/


Route::view('/', 'front-app/src/routes/homePage.jsx')
     ->where('path', '.*')
     ->name('react');