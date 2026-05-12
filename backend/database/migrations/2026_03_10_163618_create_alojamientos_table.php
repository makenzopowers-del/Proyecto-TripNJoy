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
        Schema::create('alojamientos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('ciudad_id')->constrained('ciudads')->onDelete('cascade');
            $table->string('nombre');
            $table->text('descripcion');
            $table->string('direccion')->nullable();
            $table->decimal('precio_noche', 8, 2);
            $table->enum('tipo', ['hotel', 'hostal', 'apartamento', 'residencia']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('alojamientos');
    }
};
