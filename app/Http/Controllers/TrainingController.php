<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TrainingController extends Controller
{

    public $time_stamp_format = 'Y/m/d H:i:s';

    public function registCategory(Request $request)
    {
        DB::table('categories')->insert([
            'name' => $request->input('name'),
            'user_id' => $request->input('user_id'),
            'is_public' => $request->input('is_public'),
            'created_at' => date($this->time_stamp_format),
            'updated_at' => date($this->time_stamp_format),
        ]);
    }

    public function registTrainings(Request $request)
    {
        foreach($request->all() as $item) {
            DB::table('trainings')->insert([
                'name' => $item['name'],
                'category_id' => $this->getlatestCategoryId(),
                'description' => $item['description'],
                'created_at' => date($this->time_stamp_format),
                'updated_at' => date($this->time_stamp_format),
            ]);
        }
    }

    public function getCategoryAndTrainings(Request $request)
    {
        $category = DB::table('categories')->where('id', $request->id)->get();
        $trainings = DB::table('trainings')->where('category_id', $request->id)->get();
        return response()->json([
            'category' => $category,
            'trainings' => $trainings,
            'isError' => is_null($category) || is_null($trainings) 
        ]);
    }

    public function getlatestCategoryId()
    {
        return DB::table('categories')->orderBy('id', 'desc')->first()->id;
    }

    public function getAllCategories()
    {
        return DB::table('categories')->where('is_public', true)->get();
    }
}
