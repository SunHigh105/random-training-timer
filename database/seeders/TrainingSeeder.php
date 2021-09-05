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
            'クロスクランチ' => '',
            'バイシクルクランチ' => '',
            'プランク' => '',
            'プランクひねり' => '',	
            'モモ上げ' => '',	
            'モモ下クラップ' => '',	
            'スクワット' => '膝が爪先より前に出ないように',
            'ワイドスクワット' => '',
            'マウンテンクライム' => '足を胸までちゃんと寄せる',
            'スパイダー' => '',	
            'ツイスト' => '',
            'ペダル漕ぎ' => '',
            'サイドスクワット' => '',
            'ボート' => '',
            'ランジ' => '足を曲げる時は直角に',
            '脚パカ' => '',
            '前パンチ' => '',
            '上パンチ' => '',
            '下パンチ' => '',
        ];

        foreach($training_list as $training => $description) {
            DB::table('trainings')->insert([
                'name' => $training,
                'description' => $description,
                'created_at' => date(config('constants.TIME_STAMP_FORMAT')),
            ]);
        }
    }
}
