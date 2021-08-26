<?php

use Illuminate\Database\Seeder;
use App\Column;

class ColumnSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Column::create(
            [
                'name' => 'К выполнению',
                'board_id' => 1,
                'creator_id' => 1 
            ],
            [
                'name' => 'В работе',
                'board_id' => 1,
                'creator_id' => 1 
            ],
            [
                'name' => 'Готово',
                'board_id' => 1,
                'creator_id' => 1 
            ]
        );
    }
}
