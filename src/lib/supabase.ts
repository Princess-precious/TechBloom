/**
    * @description      : 
    * @author           : HP
    * @group            : 
    * @created          : 29/08/2026 - 22:28:11
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 29/08/2026
    * - Author          : HP
    * - Modification    : 
**/
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient(
  supabaseUrl,
  supabasePublishableKey
);