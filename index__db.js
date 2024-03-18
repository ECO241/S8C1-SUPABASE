
import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = 
// const supabaseKey = 

const supabase = createClient(supabaseUrl, supabaseKey)

//console.log({supabase});
/*
const { data, error } = await supabase
    .from('Tasks')
    .select('title')

console.log(data, error);*/

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

const { error } = await supabase
  .from('Tasks')
  .delete()
  .eq('id', 4)

console.log(error);