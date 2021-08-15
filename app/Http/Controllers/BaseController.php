<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

abstract class BaseController extends Controller
{
    protected $model = "";
    protected $request = '';

    protected function __construct($model, $request = 'Request')
    {
        $this->model = $model;
        $this->request = $request;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    protected function index()
    {
        return $this->jsonOutput($this->model::all()->toJson());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    protected function store(Request $request)
    {
        dd($request->all());
        $this->model::create($request->all());

        return $this->jsonOutput(['status' => 'success']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    protected function show($id)
    {
        
        $result = $this->model::find($id);

        if(!$result)
           return $this->jsonOutput("Object not Found!", 404);

        return $this->jsonOutput($result->toJson());
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
        $this->model::find($id)->update($request->all());

        return $this->jsonOutput("Update success");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    protected function destroy($id)
    {
        $this->model::find($id)->delete();

        return $this->jsonOutput("Delete success!");
    }

    protected function jsonOutput($data, $status = 200)
    {
        return response($data, $status)->header('Content-Type', 'json');
    }
}
