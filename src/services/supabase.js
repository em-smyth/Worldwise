import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pvmmkonuvkfvnkyuftpk.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2bW1rb251dmtmdm5reXVmdHBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcyNTk4NDYsImV4cCI6MjAyMjgzNTg0Nn0.LB8iZN2X5MlXVzt50Al0WvO-lsKEcAyrEtL30V0unds";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
