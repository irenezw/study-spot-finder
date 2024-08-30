
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase URL or anonymous key environment variable');
}


export const supabase = createClient(supabaseUrl, supabaseKey);

const checkConnection = async () => {
  const { data, error } = await supabase.from('my_spots').select('*').limit(1);
  if (error) {
    console.error('Connection error:', error);
  } else {
    console.log('Connected to the database:', data);
  }
};

checkConnection();
