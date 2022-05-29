<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Models\Training;
use App\Models\Category;
class TrainingController extends Controller
{

    const TRAINING_TIME = 30;
    const BREAK_TIME = 10;

    public function trainings() {
        return Training::all()->toArray();
    }

    public function categories() {
        return Category::all()->toArray();
    }   

    /**
     * タイマーに渡すトレーニングリスト
     * シャッフルして休憩時間も加えたもの
     * @param $minute 総トレーニング時間
     */
    public function getTrainingsAtRandom($minute)
    {
        // TODO: minuteのバリデーション

        // 全トレーニング時間から、トータルのトレーニング数を算出
        $total_training_count = $minute * 60 / (self::TRAINING_TIME + self::BREAK_TIME);

        $all_training_list = Training::all()->toArray();
        
        // トレーニング
        $training_list = collect(range(1, $total_training_count))->map(function ($index) use ($all_training_list) {
            // ランダムで取得
            $current_training = $all_training_list[rand(0, count($all_training_list) - 1)];
            return [
                'name' => $current_training['name'],
                'description' => $current_training['description'],
                'imageUrl' => $current_training['image_url'],
                'trainingTime' => self::TRAINING_TIME,
                'breakTime' => self::BREAK_TIME,
            ];
        });

        return response()->json([
            'trainings' => $training_list,
            'total_training_count' => $total_training_count,
            // 'is_error' => is_null($category) || is_null($trainings),
        ]);
    }

}
