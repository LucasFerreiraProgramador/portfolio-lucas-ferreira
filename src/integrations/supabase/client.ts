import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://xowkpnlixbkxblzuzplw.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhvd2twbmxpeGJreGJsenV6cGx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2ODg1MjQsImV4cCI6MjA4NTI2NDUyNH0.oREmc4Mwx2KnMqVByxp0pUMzo6vp3LUOrc6QFW8ygm4";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);
