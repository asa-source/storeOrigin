<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder {
    public function run(): void {
        // User::factory(10)->create();
        DB::table('users')->truncate();  // truncate() でテーブルのデータを削除
        User::factory()->create([
            'name' => 'test',
            'email' => 'test@test',
            'password' => 'testtest'
        ]);
    }
}
