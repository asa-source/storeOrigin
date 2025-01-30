<?php

namespace Database\Factories;
use Faker\Factory as FakerFactory;
use Faker\Provider\ja_JP\Person;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Employee;
$faker = FakerFactory::create('ja_JP');
$faker->addProvider(new Person($faker));

class EmployeeFactory extends Factory {
    protected $model = Employee::class;

    public function definition(): array {
        return [
            'salary_number' => $this->faker->unique()->numerify('SN####'),
            'name' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'status' => $this->faker->randomElement(['在籍', '休職', '退職']),
        ];
    }
}
