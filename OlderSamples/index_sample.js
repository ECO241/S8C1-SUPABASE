import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://puplqkhpqxjgsfwuqikb.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1cGxxa2hwcXhqZ3Nmd3VxaWtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0Njg3MzEsImV4cCI6MjAyNjA0NDczMX0.5FKItdFAo4XZoqufgHi_FQcgsmwddD7lZ-xjVMblXu0"
const supabase = createClient(supabaseUrl, supabaseKey)
//console.log(supabase)
/*
// Get all users
const { data, error } = await supabase
  .from('users')
  .select();
console.log(data, error)
*/

// Create a new user
const { data, error } = await supabase
  .from('users')
  .insert({ name: 'Andrés', mail: 'mm@icesi.edu.co'})
console.log(data, error)