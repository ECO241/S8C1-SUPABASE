import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'

const supabaseUrl = process.env.SUPABASE_TEAM;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey)

// GET all tasks with column title and description
let result = await supabase
.from('Tasks')
.select('title, description')
console.log(result.data, result.error);

// GET a specific task by ID
result = await supabase
.from('Tasks')
.select('title')
console.log(result.data, result.error);

// GET all tasks with status SELECCIONADO
result = await supabase
.from('Tasks')
.select('title, status')
.eq('status', 'SELECCIONADO')
console.log(result.data, result.error);

// POST a new task
result = await supabase
.from('Tasks')
.insert({ title: 'Esta es una tarea desde JS 🤖', description: 'Solo una tarea mas, pero desde JS', status: 'SELECCIONADO' })
console.log(result.error);

// PUT a task by ID
result = await supabase
.from('Tasks')
.update({ title: '💯 developers, nunca indevelopers' })
.eq('id', 1)
console.log(result.error);

// DELETE a task by ID
result = await supabase
.from('Tasks')
.delete()
.eq('id', 4)
console.log(result.error);