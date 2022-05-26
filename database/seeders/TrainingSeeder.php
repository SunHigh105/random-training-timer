<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TrainingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $training_list = [
            [
                'category_id' => 3,
                'image_url' => 'https://placehold.jp/b1b2be/ffffff/150x150.png?text=%E3%82%B9%E3%82%AF%E3%83%AF%E3%83%83%E3%83%88',
                'name' => 'スクワット',
                'description' => '膝が爪先より前に出ないように'
            ],
            [
                'category_id' => 3,
                'image_url' => 'https://placehold.jp/b1b2be/ffffff/150x150.png?text=%E3%83%A9%E3%83%B3%E3%82%B8',
                'name' => 'ランジ',
                'description' => '膝は直角に曲げる'
            ],
            [
                'category_id' => 1,
                'image_url' => 'https://placehold.jp/b1b2be/ffffff/150x150.png?text=%E3%83%97%E3%83%A9%E3%83%B3%E3%82%AF',
                'name' => 'プランク',
                'description' => '首から足までまっすぐ！呼吸を止めない！'
            ],
        ];

        foreach($training_list as $training) {
            DB::table('trainings')->insert([
                'name' => $training['name'],
                'category_id' => $training['category_id'],
                'image_url' => $training['image_url'],
                'description' => $training['description'],
                'created_at' => date(config('constants.TIME_STAMP_FORMAT')),
                'updated_at' => date(config('constants.TIME_STAMP_FORMAT')),
            ]);
        }
    }
}
