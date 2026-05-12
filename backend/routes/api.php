<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

// Esta es la ruta a la que Angular llamará: http://localhost:8000/api/login
Route::post('/login', [AuthController::class, 'login']);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Ruta para el registro de nuevos usuarios
Route::post('/registro', [AuthController::class, 'registro']);

// Ruta para recibir datos de registro desde Angular
Route::post('/registro', [AuthController::class, 'registro']);

