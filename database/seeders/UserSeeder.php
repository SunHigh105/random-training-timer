<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    
    // public $time_stamp_format = 'Y/m/d H:i:s';
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'sheep',
            'email' => 'sheeeeeeeeep@gmail.com',
            'password' => Hash::make('straysheep'),
            'created_at' => date(config('constants.TIME_STAMP_FORMAT')),
            'updated_at' => date(config('constants.TIME_STAMP_FORMAT')),
        ]);
    }
}
