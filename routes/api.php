<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\TrainingController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('trainings', [TrainingController::class, 'trainings']);
Route::get('categories', [TrainingController::class, 'categories']);

Route::get('random_trainings/minute/{minute}', [TrainingController::class, 'getTrainingsAtRandom']);
Route::get('random_trainings/category/{category_id}/minute/{minute}', [TrainingController::class, 'getTrainingsAtRandomPerCategory']);
