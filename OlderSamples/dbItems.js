import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'

const supabaseUrl = process.env.SUPABASE_TEAM;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey)


const { data, error } = await supabase
    .from('Tasks')
    .select('title, description')    

console.log(data, error);

/*
const { datab, errorb } = await supabase
  .from('Tasks')
  .select('title')

console.log(datab, errorb);*/

/*
const { data, error } = await supabase
  .from('Tasks')
  .select('title, status')
  .eq('status', 'SELECCIONADO')

console.log(data, error);
*/
/*
const { error } = await supabase
  .from('Tasks')
  .insert({ title: 'Esta es una tarea desde JS 🤖', description: 'Solo una tarea mas, pero desde JS', status: 'SELECCIONADO' })

console.log(error);*/

/*
const { error } = await supabase
  .from('Tasks')
  .update({ title: '💯 developers, nunca indevelopers' })
  .eq('id', 1)

console.log(error);
*/
/*
const { error } = await supabase
  .from('Tasks')
  .delete()
  .eq('id', 4)

console.log(error);
*/