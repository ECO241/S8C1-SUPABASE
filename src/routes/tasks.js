import express from 'express';
const router = express.Router();

import { 
    getAllData,
    getTaskById,
    createTask,
    updateTask,
    deleteTask } from '../controllers/tasks.js';

// GET all tasks
router.get('/', (req, res) => {    
    // Call the function and send the response
    getAllData().then((data) => {
        res.json({ success: true, data });
    }).catch((error) => {
        console.error("Error retrieving data from Supabase:", error.message);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    });

});

// GET a specific task by ID
router.get('/:id', (req, res) => {
    // Call the function and send the response
    getTaskById(req.params.id).then((data) => {
        res.json({ success: true, data });
    }).catch((error) => {
        console.error("Error retrieving data from Supabase:", error.message);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    });
});

// POST a new task
router.post('/', (req, res) => {
    // Call the function and send the response
    createTask(req.body).then(() => {
        res.json({ success: true, message: "Task created successfully" });
    }).catch((error) => {
        console.error("Error creating task in Supabase:", error.message);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    });
});

// PUT/UPDATE an existing task
router.put('/:id', (req, res) => {
    // Call the function and send the response
    updateTask(req.params.id, req.body).then(() => {
        res.json({ success: true, message: "Task updated successfully" });
    }).catch((error) => {
        console.error("Error updating task in Supabase:", error.message);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    });
});

// DELETE a task
router.delete('/:id', (req, res) => {
    // Call the function and send the response
    deleteTask(req.params.id).then(() => {
        res.json({ success: true, message: "Task deleted successfully" });
    }).catch((error) => {
        console.error("Error deleting task in Supabase:", error.message);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    });
});

export default router;