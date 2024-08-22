import { createClient } from "@supabase/supabase-js";

/* https://www.youtube.com/watch?v=iXz82niZ3OA&list=PL8HkCX2C5h0X9ZFgSSUhzTI5Nh8-Olijv*/


export const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
/*
export const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!
);
*/


