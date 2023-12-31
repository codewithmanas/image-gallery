
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAdminKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ""
const supabaseAdmin = createClient(supabaseUrl, supabaseAdminKey)

export default supabaseAdmin