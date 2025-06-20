// Instale via npm (ou use CDN):
// npm install pdf-lib

import { PDFDocument } from 'pdf-lib';

async function extrairTextoDePDF(arquivoPDF) {
  const arrayBuffer = await arquivoPDF.arrayBuffer();
  const pdfDoc = await PDFDocument.load(arrayBuffer);
  const pages = pdfDoc.getPages();
  let textoCompleto = "";

  for (const page of pages) {
    const texto = await page.getTextContent();
    textoCompleto += texto.items.map(item => item.str).join(" ");
  }

  return textoCompleto;
}

// Uso:
const inputArquivo = document.getElementById('fileInput');
inputArquivo.addEventListener('change', async (e) => {
  const arquivo = e.target.files[0];
  const texto = await extrairTextoDePDF(arquivo);
  console.log("Texto extraído:", texto);
});