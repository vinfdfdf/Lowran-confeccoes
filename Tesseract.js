// CDN: <script src="https://cdn.jsdelivr.net/npm/tesseract.js@4/dist/tesseract.min.js"></script>

async function extrairTextoDeImagem(arquivoImagem) {
  const { data: { text } } = await Tesseract.recognize(
    arquivoImagem,
    'por', // Idioma (português)
    { logger: m => console.log(m) }
  );
  return text;
}

// Uso:
const inputImagem = document.getElementById('fileInput');
inputImagem.addEventListener('change', async (e) => {
  const arquivo = e.target.files[0];
  const texto = await extrairTextoDeImagem(arquivo);
  console.log("Texto extraído:", texto);
});