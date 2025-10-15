// 1. Array berisi semua kutipan (tambahkan kutipanmu di sini!)
const quotes = [
    {
        quote: "Cara terbaik untuk memulai adalah dengan berhenti berbicara dan mulai melakukan.",
        author: "Walt Disney"
    },
    {
        quote: "Waktu Anda terbatas, jangan sia-siakan dengan menjalani hidup orang lain.",
        author: "Steve Jobs"
    },
    {
        quote: "Kesuksesan bukanlah final; kegagalan bukanlah fatal: keberanian untuk melanjutkanlah yang terpenting.",
        author: "Winston Churchill"
    },
    {
        quote: "Belajar adalah satu-satunya hal yang tidak pernah menghabiskan pikiran.",
        author: "Leonardo da Vinci"
    },
    {
        quote: "Jika kamu ingin mengangkat dirimu, angkatlah orang lain.",
        author: "Booker T. Washington"
    }
];

// 2. Mendapatkan elemen HTML
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');

// 3. Fungsi untuk menghasilkan kutipan acak
function generateQuote() {
    // Menghasilkan indeks acak berdasarkan panjang array quotes
    const randomIndex = Math.floor(Math.random() * quotes.length);
    
    // Mendapatkan kutipan yang dipilih
    const randomQuote = quotes[randomIndex];
    
    // Memperbarui konten HTML
    quoteText.textContent = `"${randomQuote.quote}"`;
    quoteAuthor.textContent = `- ${randomQuote.author}`;
}

// 4. Event Listener: menjalankan fungsi saat tombol diklik
newQuoteBtn.addEventListener('click', generateQuote);

// Opsional: Panggil fungsi sekali saat halaman dimuat agar tidak kosong
generateQuote();
