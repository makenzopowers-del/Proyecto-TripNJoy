<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Creamos tu usuario Administrador
        User::create([
            'nombre' => 'Admin', 
            'email' => 'admin@tripandjoy.com',
            'password' => Hash::make('123'), 
            'rol' => 'admin', 
        ]);

        // Creamos un cliente de prueba
        User::create([
            'nombre' => 'Cliente',
            'email' => 'cliente@tripandjoy.com',
            'password' => Hash::make('123'),
            'rol' => 'cliente',
        ]);

        // Generamos 50 usuarios ficiticios con rol de cliente de golpe
        User::factory(50)->create([
            'rol' => 'cliente',
            'password' => Hash::make('123'), // Asignamos la misma contraseña a todos los usuarios de prueba
        ]);
        }
}
