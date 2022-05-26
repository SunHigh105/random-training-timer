<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $category_list = [
            '腹筋',
            '背筋',
            '脚',
            '二の腕',
            'お尻',
        ];
        foreach($category_list as $category) {
            DB::table('categories')->insert([
                'name' => $category,
                'created_at' => date(config('constants.TIME_STAMP_FORMAT')),
                'updated_at' => date(config('constants.TIME_STAMP_FORMAT'))
            ]);    
        }
    }
}
