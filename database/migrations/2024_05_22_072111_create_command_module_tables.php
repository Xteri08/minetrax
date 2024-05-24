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
        Schema::create('commands', function (Blueprint $table) {
            $table->id();
            $table->text('command');
            $table->string('name')->nullable();
            $table->text('description')->nullable();
            $table->boolean('is_enabled')->default(true);
            $table->boolean('is_run_on_all_servers')->default(false); // if command should run on all servers.
            $table->integer('max_attempts')->nullable();
            $table->json('config')->nullable();
            $table->string('tag')->nullable();
            $table->timestamps();
        });

        Schema::create('command_server', function (Blueprint $table) {
            $table->id();
            $table->foreignId('command_id')->constrained()->cascadeOnDelete();
            $table->foreignId('server_id')->constrained()->cascadeOnDelete();
            $table->timestamps();
        });

        Schema::create('commandables', function (Blueprint $table) {
            $table->id();
            $table->foreignId('command_id')->constrained()->cascadeOnDelete();
            $table->morphs('commandable');
            $table->timestamps();
        });

        Schema::create('command_queues', function (Blueprint $table) {
            $table->id();
            $table->foreignId('command_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('server_id')->constrained()->cascadeOnDelete();
            $table->text('command');
            $table->string('status')->index(); // pending, running, failed, completed
            $table->timestamp('execute_at')->nullable()->index(); // support for delayed commands, null if immediate
            $table->integer('attempts')->default(0);
            $table->timestamp('last_attempt_at')->nullable();
            $table->text('output')->nullable();
            $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete(); // causer
            $table->foreignId('player_id')->nullable()->constrained()->nullOnDelete(); // if command is run on player (used to check & run command on player when joined)
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('command_queues');
        Schema::dropIfExists('commandables');
        Schema::dropIfExists('command_server');
        Schema::dropIfExists('commands');
    }
};
