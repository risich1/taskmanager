<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Column extends Model
{
    protected $table = 'columns'; 
    protected $guarded = [];

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
}
