
import cors from "cors";
import express from "express";
import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'

const supabaseUrl = process.env.SUPABASE_TEAM;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error("Supabase URL or key is missing. Make sure to set SUPABASE_TEAM and SUPABASE_KEY environment variables.");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    try {
        const data = await getAllData();
        res.json({ success: true, data });
    } catch (error) {
        console.error("Error retrieving data from Supabase:", error.message);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});

async function getAllData() {
    const { data, error } = await supabase
        .from('Tasks')
        .select('title, description');
    if (error) {
        throw new Error(error.message);
    }
    return data;
}

export default app;