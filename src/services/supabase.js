import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://tmeriegmjxwylraulipi.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtZXJpZWdtanh3eWxyYXVsaXBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0NzE3NzYsImV4cCI6MjAzMzA0Nzc3Nn0.xahY5Xfc_fu9vqj2FFxomzoeYtu7OU3Bv-wANESA1Yg';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
