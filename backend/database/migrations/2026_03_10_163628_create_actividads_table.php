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
        Schema::create('actividads', function (Blueprint $table) {
            $table->id();
            $table->foreignId('ciudad_id')->constrained('ciudads')->onDelete('cascade');
            $table->string('titulo');
            $table->text('descripcion');
            $table->decimal('precio', 8, 2)->default(0.00);
            $table->string('duracion')->nullable(); // Ej: "2 horas", "Medio día"
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('actividads');
    }
};
