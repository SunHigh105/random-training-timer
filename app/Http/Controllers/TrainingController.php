<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Models\Training;
use App\Models\Category;
class TrainingController extends Controller
{

    public $time_stamp_format = 'Y/m/d H:i:s';

    public function trainings() {
        return Training::all()->toArray();
    }

    public function categories() {
        return Category::all()->toArray();
    }

    // public $encouragement_messages = [
    //     '適宜水分も摂るのよ',
    //     'まだ諦めないで！',
    //     'きついのは効いてる証拠！',
    //     '汗出てきたかしら',
    //     '限界突破よ！',
    //     '負けないで もう少し 最後まで 走り抜けて',
    //     'パワーーーーーー！！！',
    //     '自分のカロリーは自分で消費！',
    //     'いいぞ、その調子！',
    //     '明日の変化が楽しみね！',
    // ];

    // public function registCategory(Request $request)
    // {
    //     DB::table('categories')->insert([
    //         'name' => $request->input('name'),
    //         'user_id' => $request->input('user_id'),
    //         'is_public' => $request->input('is_public'),
    //         'created_at' => date($this->time_stamp_format),
    //         'updated_at' => date($this->time_stamp_format),
    //     ]);
    // }

    // public function registTrainings(Request $request)
    // {
    //     foreach($request->all() as $item) {
    //         DB::table('trainings')->insert([
    //             'name' => $item['name'],
    //             'category_id' => $this->getlatestCategoryId(),
    //             'description' => $item['description'],
    //             'created_at' => date($this->time_stamp_format),
    //             'updated_at' => date($this->time_stamp_format),
    //         ]);
    //     }
    // }

    // public function getCategoryAndTrainings(Request $request)
    // {
    //     $category = DB::table('categories')->where('id', $request->id)->get();
    //     $trainings = DB::table('trainings')->where('category_id', $request->id)->get();
    //     return response()->json([
    //         'category' => $category,
    //         'trainings' => $trainings,
    //         'isError' => is_null($category) || is_null($trainings) 
    //     ]);
    // }

    // public function getlatestCategoryId()
    // {
    //     return DB::table('categories')->orderBy('id', 'desc')->first()->id;
    // }

    // public function getAllCategories()
    // {
    //     $categories = DB::table('categories')->get();
    //     return response()->json($categories);
    // }

    // public function getTrainingsPerCategory(Request $request)
    // {
    //     $training_ids = DB::table('categories_trainings')->where('category_id', $request->id)->get('training_id');
    //     $trainings = [];
    //     foreach($training_ids as $item) {
    //         array_push($trainings, DB::table('trainings')->where('id', $item->training_id)->get());
    //     }
    //     return response()->json($trainings);
    // }

    // /**
    //  * タイマーに渡すトレーニングリスト
    //  * シャッフルして休憩時間も加えたもの
    //  */
    // public function getTrainingListforTimer(Request $request)
    // {
    //     $category_id = $request->input('category_id');
    //     $total_training_time = $request->input('total_training_time');
    //     $training_time = $request->input('training_time');
    //     $break_time = $request->input('break_time');
        
    //     $category = DB::table('categories')->where('id', $category_id)->get();
    //     $trainings = DB::table('trainings')->where('category_id', $category_id)->get()->toArray();

    //     // 全トレーニング時間から、トータルのトレーニング数を算出
    //     $total_training_count = round($total_training_time * 60 / ($training_time + $break_time));

    //     // トレーニングリストをシャッフル
    //     // トータルのトレーニング数に応じてかさ増し
    //     $shuffled_trainings = [];
    //     for ($i = 0; $i < (floor($total_training_count / count($trainings)) + 1); $i++) {
    //         shuffle($trainings);
    //         $shuffled_trainings = array_merge($shuffled_trainings, $trainings);
    //     }

    //     // トータルのトレーニング数に絞る
    //     array_splice($shuffled_trainings, $total_training_count);

    //     // 返却するトレーニングリスト作成
    //     // トレーニング開始前に5秒カウントを入れる
    //     $training_list = [];
    //     array_push($training_list, [
    //         'current_menu' => '開始前',
    //         'description' => 'がんばるぞ',
    //         'time' => 5,
    //     ]);

    //     // 各トレーニングの間に休憩を挟む
    //     $break_time_messages = $this->encouragement_messages;
    //     foreach ($shuffled_trainings as $key => $item) {
    //         array_push($training_list,[
    //             'current_menu' => $item->name,
    //             'description' => $item->description,
    //             'time' => $training_time,
    //         ]);
    //         // 最後のトレーニングの後は休憩を入れない
    //         if ($key === count($shuffled_trainings) - 1) {
    //             break;
    //         }
    //         // 休憩にはランダムでdescription追加
    //         shuffle($break_time_messages);
    //         array_push($training_list,[
    //             'current_menu' => '休憩',
    //             'description' => $break_time_messages[0],
    //             'time' => $break_time,
    //         ]);
    //     }

    //     return response()->json([
    //         'category' => $category,
    //         'trainings' => $training_list,
    //         'total_training_count' => $total_training_count,
    //         'is_error' => is_null($category) || is_null($trainings),
    //     ]);
    // }
}
