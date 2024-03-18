
// database connection
import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'

// Load environment variables from .env file
const supabaseUrl = process.env.SUPABASE_TEAM;
const supabaseKey = process.env.SUPABASE_KEY;

// Check if the environment variables are set
if (!supabaseUrl || !supabaseKey) {
    console.error("Supabase URL or key is missing. Make sure to set SUPABASE_TEAM and SUPABASE_KEY environment variables.");
    process.exit(1);
}

// Create a new Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

// Fetch all tasks from the database
const getAllData = async () => {
    const { data, error } = await supabase
        .from('Tasks')
        .select();
    if (error) {
        throw new Error(error.message);
    }
    return data;
}

// Fetch a task by ID from the database
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

// Create a new task in the database
const createTask = async (task) => {
    const { error } = await supabase
        .from('Tasks')
        .insert(task);
    if (error) {
        throw new Error(error.message);
    }
}

// Update an existing task in the database
const updateTask = async (id, task) => {
    const { error } = await supabase
        .from('Tasks')
        .update(task)
        .eq('id', id);
    if (error) {
        throw new Error(error.message);
    }
}

// Delete a task from the database
const deleteTask = async (id) => {
    const { error } = await supabase
        .from('Tasks')
        .delete()
        .eq('id', id);
    if (error) {
        throw new Error(error.message);
    }
}

// Export the controller functions
export { 
    getAllData,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
}; 