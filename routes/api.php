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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('trainings', [TrainingController::class, 'trainings']);
Route::get('categories', [TrainingController::class, 'categories']);

// Route::post('regist_category', 'App\Http\Controllers\TrainingController@registCategory');
// Route::post('regist_trainings', 'App\Http\Controllers\TrainingController@registTrainings');
// Route::get('get_category_and_trainings/{id}', 'App\Http\Controllers\TrainingController@getCategoryAndTrainings');
// Route::get('get_all_categories', 'App\Http\Controllers\TrainingController@getAllCategories');
// Route::get('get_trainings_per_category/{id}', 'App\Http\Controllers\TrainingController@getTrainingsPerCategory');
// Route::post(
//     'get_training_list_for_timer',
//     'App\Http\Controllers\TrainingController@getTrainingListforTimer'
// );

// Route::post('login', 'App\Http\Controllers\Api\Auth\LoginController@login');
// Route::get('logout', 'App\Http\Controllers\Api\Auth\LoginController@logout');
