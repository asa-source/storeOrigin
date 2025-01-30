<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('employees', function (Blueprint $table) {
            $table->id(); // 社員番号 (プライマリキー)
            $table->string('salary_number')->unique(); // 給与番号
            $table->string('name'); // 社員名
            $table->string('email')->unique(); // 社員メールアドレス
            $table->enum('status', ['在籍', '休職', '退職'])->default('在籍'); // 社員状態
            $table->timestamps();
        });
    }

    public function down(): void {
        Schema::dropIfExists('employees');
    }
};
