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
       Schema::create('saluds', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pais_id')->constrained('pais')->onDelete('cascade');
            $table->string('titulo'); // Ej: "Sistema Sanitario Español"
            $table->text('informacion_general');
            $table->string('telefonos_emergencia')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('saluds');
    }
};
