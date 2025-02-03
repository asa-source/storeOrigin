<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller {
    public function index() {
        return response()->json(Employee::all());
    }
    public function update(Request $request, $id) {
        $employee = Employee::findOrFail($id);
        $employee->update($request->all());
        return response()->json(['message' => '更新成功', 'employee' => $employee]);
    }
}
