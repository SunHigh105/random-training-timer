<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySheeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            'name' => '腹筋集中',
            'user_id' => 1,
            'is_public' => true,
            'created_at' => date(config('constants.TIME_STAMP_FORMAT')),
            'updated_at' => date(config('constants.TIME_STAMP_FORMAT')),
        ]);
    }
}
