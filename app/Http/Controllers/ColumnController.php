<?php

namespace App\Http\Controllers;

use App\Http\Requests\ColumnRequest as Request;
use App\Column;

class ColumnController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->jsonOutput(Column::all()->toJson());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $column = Column::create([
            'name' => $request->post('name'),
            'creator_id' => 1,
            'board_id' => 1
        ]);

        return $this->jsonOutput(['status' => 'success',  'id' => $column->id]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        Column::find($id)->update($request->all());

        return $this->jsonOutput(['status' => 'success']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Column::find($id)->delete();

        return $this->jsonOutput(['status' => 'success']);
    }

    private function jsonOutput($data, $status = 200)
    {
        return response($data, $status)->header('Content-Type', 'json');
    }
}
