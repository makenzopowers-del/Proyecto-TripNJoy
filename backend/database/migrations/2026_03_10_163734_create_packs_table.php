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
        Schema::create('packs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('ciudad_id')->constrained('ciudads')->onDelete('cascade');
            $table->string('nombre_pack');
            $table->text('descripcion')->nullable();
            $table->decimal('precio_total', 8, 2);
            $table->enum('tipo_pack', ['actividades', 'alojamientos', 'conjunto']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('packs');
    }
};
