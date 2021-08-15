<?php

namespace App\Http\Controllers;

use App\Task;
use App\Http\Requests\TaskRequest;

class TasksController extends Controller
{
    public function store(TaskRequest $request)
    {
        $task = Task::create([
            'name' => $request->post('name'),
            'column_id' => $request->post('column_id')
        ]);

        return $this->jsonOutput(['status' => 'success',  'id' => $task->id]);
    }
    
    public function destroy($id)
    {
        Task::find($id)->delete();

        return $this->jsonOutput(['status' => 'success']);
    }

    public function index()
    {
        return $this->jsonOutput(Task::all()->toJson());
    }

    public function jsonOutput($data, $status = 200)
    {
        return response($data, $status)->header('Content-Type', 'json');
    }

    public function update(TaskRequest $request, $id)
    {
        Task::find($id)->update($request->all());

        return $this->jsonOutput(['status' => 'success']);
    }

    protected function show($id)
    {
        
        $result = Task::find($id);

        if(!$result)
           return $this->jsonOutput("Object not Found!", 404);

        return $this->jsonOutput(['task' => $result->toArray()]);
    }
}
