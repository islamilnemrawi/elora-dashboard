window.ELORA_SUPABASE_URL = 'https://dmttevcncsxzbamazmmq.supabase.co';
window.ELORA_SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_UxXOA92gcX3CHzbU7h3udQ_3khfMMzH';
// بعد نشر Cloudflare Worker الخاص بالصور، ضع رابطه هنا.
window.ELORA_IMAGE_UPLOAD_URL = '';
window.ELORA_PAYMENT_CONFIG = { createPaymentUrl: '' };
if (window.supabase && window.ELORA_SUPABASE_URL && window.ELORA_SUPABASE_PUBLISHABLE_KEY) {
  window.eloraSupabase = window.supabase.createClient(
    window.ELORA_SUPABASE_URL,
    window.ELORA_SUPABASE_PUBLISHABLE_KEY
  );
}
