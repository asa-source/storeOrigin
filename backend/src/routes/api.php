<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\RegisterController;
use App\Http\Controllers\AuthController;
use App\Http\Middleware\CorsMiddleware;
use App\Http\Controllers\EmployeeController;


Route::middleware([CorsMiddleware::class])->group(function () {
    // ここにCORSを適用したいルートを定義
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user'])->middleware('auth:sanctum');
    Route::get('/employees', [EmployeeController::class, 'index']);
});