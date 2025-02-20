import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vwlixvzqdhajfpyxusee.supabase.co';
const supabaseAnonKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3bGl4dnpxZGhhamZweXh1c2VlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5MDgzMTksImV4cCI6MjA1MzQ4NDMxOX0.hMzftZWT79U8qSlMSNGPhiD3Rq-0D35PfeHPA_FG63o`;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;