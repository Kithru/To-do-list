<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Task;
use Illuminate\Foundation\Testing\RefreshDatabase;

class TaskControllerTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test: It should return only incomplete tasks (status = 0)
     */
    public function it_can_list_incomplete_tasks()
    {
        // Create one incomplete and one completed task
        Task::factory()->create(['status' => 0]);
        Task::factory()->create(['status' => 1]);

        // Call the /api/tasks endpoint
        $response = $this->getJson('/api/tasks');

        // Expect a 200 OK response
        $response->assertStatus(200);

        // Should return only one task (the incomplete one)
        $this->assertCount(1, $response->json());
    }

    /**
     * Test: It should return all completed tasks (status = 1)
     */
    public function it_can_list_completed_tasks()
    {
        // Create two completed tasks
        Task::factory()->count(2)->create(['status' => 1]);

        // Call the /api/comtasks endpoint
        $response = $this->getJson('/api/comtasks');

        // Expect a 200 OK response
        $response->assertStatus(200);

        // Should return both completed tasks
        $this->assertCount(2, $response->json());
    }

    /**
     * Test: It should allow creating a new task successfully
     */
    public function it_can_create_a_new_task()
    {
        // Input data for a new task
        $data = [
            'title' => 'Test Task',
            'description' => 'This is a test task.'
        ];

        // Send POST request to create a task
        $response = $this->postJson('/api/tasks', $data);

        // Expect a 201 Created response
        $response->assertStatus(201)
                 ->assertJsonFragment(['title' => 'Test Task']);

        // Verify that the new task exists in the database
        $this->assertDatabaseHas('tasks', ['title' => 'Test Task']);
    }

    /**
     * Test: It should mark a specific task as complete
     */
    public function it_can_mark_a_task_as_complete()
    {
        // Create a new task with incomplete status
        $task = Task::factory()->create(['status' => 0]);

        // Send PUT request to mark the task as complete
        $response = $this->putJson("/api/tasks/{$task->id}/complete");

        // Expect a 200 OK response
        $response->assertStatus(200)
                 ->assertJsonFragment(['status' => 1]);

        // Check if the task status was actually updated in the database
        $this->assertDatabaseHas('tasks', [
            'id' => $task->id,
            'status' => 1
        ]);
    }
}
