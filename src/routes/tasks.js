import express from 'express';
const router = express.Router();

// database connection
import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'

const supabaseUrl = process.env.SUPABASE_TEAM;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error("Supabase URL or key is missing. Make sure to set SUPABASE_TEAM and SUPABASE_KEY environment variables.");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// GET all tasks
router.get('/', (req, res) => {
    // Your code to fetch all tasks from the database
    const getAllData = async () => {
        const { data, error } = await supabase
            .from('Tasks')
            .select();
        if (error) {
            throw new Error(error.message);
        }
        return data;
    }

    getAllData().then((data) => {
        res.json({ success: true, data });
    }).catch((error) => {
        console.error("Error retrieving data from Supabase:", error.message);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    });

});

// GET a specific task by ID
router.get('/:id', (req, res) => {
    // Your code to fetch a task by ID from the database
    const getTaskById = async (id) => {
        const { data, error } = await supabase
            .from('Tasks')
            .select('title, description')
            .eq('id', id);
        if (error) {
            throw new Error(error.message);
        }
        return data;
    }
    getTaskById(req.params.id).then((data) => {
        res.json({ success: true, data });
    }).catch((error) => {
        console.error("Error retrieving data from Supabase:", error.message);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    });
});

// POST a new task
router.post('/', (req, res) => {
    // Your code to create a new task in the database
    const createTask = async (task) => {
        const { error } = await supabase
            .from('Tasks')
            .insert(task);
        if (error) {
            throw new Error(error.message);
        }
    }
    createTask(req.body).then(() => {
        res.json({ success: true, message: "Task created successfully" });
    }).catch((error) => {
        console.error("Error creating task in Supabase:", error.message);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    });
});

// PUT/UPDATE an existing task
router.put('/:id', (req, res) => {
    // Your code to update an existing task in the database
    const updateTask = async (id, task) => {
        const { error } = await supabase
            .from('Tasks')
            .update(task)
            .eq('id', id);
        if (error) {
            throw new Error(error.message);
        }
    }
    updateTask(req.params.id, req.body).then(() => {
        res.json({ success: true, message: "Task updated successfully" });
    }).catch((error) => {
        console.error("Error updating task in Supabase:", error.message);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    });
});

// DELETE a task
router.delete('/:id', (req, res) => {
    // Your code to delete a task from the database
    const deleteTask = async (id) => {
        const { error } = await supabase
            .from('Tasks')
            .delete()
            .eq('id', id);
        if (error) {
            throw new Error(error.message);
        }
    }
    deleteTask(req.params.id).then(() => {
        res.json({ success: true, message: "Task deleted successfully" });
    }).catch((error) => {
        console.error("Error deleting task in Supabase:", error.message);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    });
});

export default router;