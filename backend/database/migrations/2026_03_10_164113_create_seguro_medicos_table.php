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
        Schema::create('seguro_medicos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pais_id')->constrained('pais')->onDelete('cascade');
            $table->string('nombre_aseguradora');
            $table->string('tipo_cobertura'); // Ej: Básica, Completa, Repatriación
            $table->text('descripcion');
            $table->decimal('precio_mensual_aprox', 8, 2)->nullable();
            $table->string('enlace_oficial')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('seguro_medicos');
    }
};
