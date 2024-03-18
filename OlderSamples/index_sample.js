import { createClient } from '@supabase/supabase-js'

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

// Get all users
const { data, error } = await supabase
  .from('users')
  .select();
console.log(data, error)

// Create a new user
const { dataA, errorA } = await supabase
  .from('users')
  .insert({ name: 'Andrés', mail: 'mm@icesi.edu.co'})
console.log(dataA, errorA)