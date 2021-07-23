<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
// use App\Database\Seeders\UserSeeder;
// use App\Database\Seeders\CategorySheeder;
// use App\Database\Seeders\TrainingSheeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call([
            UserSeeder::class,
            CategorySheeder::class,
            TrainingSheeder::class,
        ]);
    }
}
