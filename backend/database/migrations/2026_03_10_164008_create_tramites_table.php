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
        Schema::create('tramites', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pais_id')->constrained('pais')->onDelete('cascade');
            $table->string('nombre_tramite'); // Ej: Empadronamiento, NIE
            $table->text('descripcion');
            $table->text('requisitos')->nullable();
            $table->string('enlace_oficial')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tramites');
    }
};
