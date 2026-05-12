<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id(); // Identificador único
            $table->string('nombre');
            $table->string('apellido')->nullable();
            $table->string('DNI', 20)->unique()->nullable();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password'); // Contraseña
            
            // Campos de Trip N' Joy
            $table->decimal('creditos', 10, 2)->default(0.00);
            $table->enum('rol', ['admin', 'cliente'])->default('cliente');
            $table->foreignId('pais_origen_id')->nullable()->constrained('pais')->onDelete('set null');
            $table->foreignId('pais_destino_id')->nullable()->constrained('pais')->onDelete('set null');
            $table->string('idioma_preferido')->default('es');
            
            $table->rememberToken();
            $table->timestamps(); // Genera automáticamente fecha_registro
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
