<?php
//app/Http/Controllers/AuthController.php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
        $user = User::where('email', $request->email)->first();
        if ($user && Hash::check($request->password, $user->password)) {
            return response()->json([
                'token' => $user->createToken('AppName')->plainTextToken,
            ]);
        }
        return response()->json(['message' => 'Invalid credentials'], 401);
    }

    public function logout(Request $request)
    {
        if (!$request->user()) {
            return response()->json(['message' => 'User not authenticated'], 401);
        }
        $request->user()->tokens->each(function ($token) {
            $token->delete();
        });
        return response()->json(['message' => 'Logged out successfully'], 401);
    }
    public function user(Request $request)
    {
        return response()->json($request->user());
    }
}