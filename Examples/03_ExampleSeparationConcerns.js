
// Import the required modules
import cors from "cors";
import express from "express";
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

// Create a new Express application
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET all tasks
app.get("/", async (req, res) => {
    try {
        const data = await getAllData();
        res.json({ success: true, data });
    } catch (error) {
        console.error("Error retrieving data from Supabase:", error.message);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});

// GET a specific task by ID
async function getAllData() {
    const { data, error } = await supabase
        .from('Tasks')
        .select('title, description');
    if (error) {
        throw new Error(error.message);
    }
    return data;
}

// Call the function and send the response
export default app;