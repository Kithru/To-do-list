<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;

class TaskController extends Controller
{
    public function index()
    {
        return Task::where('status', 0)
            ->orderBy('created_at', 'desc')
            ->take(5)
            ->get();
    }

    /////////////////////////////////////////////////////////////////////////////////
    public function comtasks()
    {
        return Task::where('status', 1)
                    ->orderBy('created_at', 'desc')
                    ->get();
    }

    ////////////////////////////////////////////////////////////////////////////////
    public function store(Request $request)
    {

        $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
        ]);

        $task = Task::create([
            'title' => $request->title,
            'description' => $request->description,
        ]);

        return response()->json($task, 201);
    }

    ////////////////////////////////////////////////////////////////////////////////
    public function complete($id)
    {
        $task = Task::findOrFail($id);
        $task->status = true;
        $task->save();

        return response()->json($task);
    }
}