<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
    // Función para iniciar sesión
    public function login(Request $request)
    {
        // 1. Comprobamos que Angular nos haya enviado un email y un password
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        // 2. Buscamos al usuario en la base de datos por su email
        $user = User::where('email', $request->email)->first();

        // 3. Si no existe el usuario o la contraseña no coincide, devolvemos un error
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'status' => false,
                'mensaje' => 'Correo o contraseña incorrectos'
            ], 401);
        }

        // 4. Si todo es correcto, generamos un token de autenticación para el usuario
        $token = $user->createToken('auth_token')->plainTextToken;

        // 5. Devolvemos los datos del usuario y el token
        return response()->json([
            'status' => true,
            'mensaje' => '¡Login exitoso!',
            'usuario' => $user,
            'token' => $token
        ], 200);
    }

    // Función para registrar usuarios
    public function registro(Request $request)
    {
        // 1. Validamos que Angular nos envíe todo correcto y el email no exista ya (unique:users)
        $request->validate([
            'nombre'    => 'required|string|max:255',
            'apellidos' => 'required|string|max:255',
            'email'     => 'required|string|email|max:255|unique:users',
            'password'  => 'required|string|min:8',
        ]);

        // 2. Creamos el usuario paso a paso
        $usuario = clone new User();
        $usuario->nombre = $request->nombre;
        $usuario->apellido = $request->apellidos;
        $usuario->email = $request->email;
        // Encriptamos la contraseña con Hash::make() antes de guardarla
        $usuario->password = Hash::make($request->password); 
        $usuario->rol = 'cliente'; // Le damos el rol por defecto

        // Creditos iniciales para el nuevo usuario
        $usuario->creditos = 0;
        
        // 3. Lo guardamos en la base de datos
        $usuario->save();

        // 4. Le decimos a Angular que todo ha ido genial
        return response()->json([
            'status'  => true,
            'mensaje' => 'Usuario registrado con éxito',
            'usuario' => $usuario
        ], 201); // 201 significa "Creado"
    }
}
