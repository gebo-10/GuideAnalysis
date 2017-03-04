<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGuideModelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('guide_models', function (Blueprint $table) {
            $table->increments('id');
            $table->string('time');
            $table->string('name');
            $table->integer('user_id');//->primary()
            $table->integer('guide');
            $table->integer('unit');
            $table->integer('step');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('guide_models');
    }
}
