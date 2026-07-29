/* ==========================================================================
   CONFIG.JS
   Satu-satunya file yang perlu kamu ubah.
   Isi SUPABASE_URL & SUPABASE_ANON_KEY dari project Supabase kamu.
   JANGAN PERNAH memakai Service Role Key di sini — hanya Anon/Public Key.
   ========================================================================== */
const CONFIG = {
  SUPABASE_URL: "https://YOUR-PROJECT-REF.supabase.co", // URL project Supabase
  SUPABASE_ANON_KEY: "YOUR-ANON-PUBLIC-KEY",             // Anon/public key (aman untuk frontend)
  STORAGE_BUCKET: "uploads",                             // Nama bucket Storage (harus public)
  MAX_FILE_SIZE: 100 * 1024 * 1024                        // Ukuran file maksimum (default 100MB) dalam byte
};
