<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoryTrainingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $category_training = [
            [ 'category_id' => 1, 'training_id' => 1 ],
            [ 'category_id' => 1, 'training_id' => 2 ],
            [ 'category_id' => 1, 'training_id' => 3 ],
            [ 'category_id' => 1, 'training_id' => 4 ],
            [ 'category_id' => 3, 'training_id' => 5 ],
            [ 'category_id' => 5, 'training_id' => 5 ],
            [ 'category_id' => 3, 'training_id' => 6 ],
            [ 'category_id' => 5, 'training_id' => 6 ],
            [ 'category_id' => 3, 'training_id' => 7 ],
            [ 'category_id' => 3, 'training_id' => 8 ],
            [ 'category_id' => 1, 'training_id' => 9 ],
            [ 'category_id' => 1, 'training_id' => 10 ],
            [ 'category_id' => 1, 'training_id' => 11 ],
            [ 'category_id' => 1, 'training_id' => 12 ],
            [ 'category_id' => 3, 'training_id' => 13 ],
            [ 'category_id' => 1, 'training_id' => 14 ],
            [ 'category_id' => 3, 'training_id' => 15 ],
            [ 'category_id' => 3, 'training_id' => 16 ],
            [ 'category_id' => 5, 'training_id' => 17 ],
            [ 'category_id' => 5, 'training_id' => 18 ],
            [ 'category_id' => 5, 'training_id' => 19 ],
        ];

        foreach($category_training as $item) {
            DB::table('categories_trainings')->insert([
                'category_id' => $item['category_id'],
                'training_id' => $item['training_id'],
                'created_at' => date(config('constants.TIME_STAMP_FORMAT')),
            ]);
        }
    }
}
