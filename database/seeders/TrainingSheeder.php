<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TrainingSheeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $training_list = [
            'スクワット' => '膝が爪先より前に出ないように',
            'ランジ' => '足を曲げる時は直角に',
            'クロスクランチ' => '腹筋にも効くわよ',
            'マウンテンクライム' => '足を胸までちゃんと寄せる',
        ];

        foreach($training_list as $training => $description) {
            DB::table('trainings')->insert([
                'name' => $training,
                'description' => $description,
                'category_id' => 1,
                'created_at' => date(config('constants.TIME_STAMP_FORMAT')),
                'updated_at' => date(config('constants.TIME_STAMP_FORMAT')),    
            ]);
        }
    }
}
