document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("signature-input");
    const preview = document.getElementById("signature-preview");
    const fontSelect = document.getElementById("font-select");
    const colorPicker = document.getElementById("color-picker");
    const increaseSizeBtn = document.getElementById("increase-size");
    const decreaseSizeBtn = document.getElementById("decrease-size");
    const downloadBtn = document.getElementById("download-btn");
  
    let fontSize = 36;
  
    // Define a fonte inicial para "fonte1"
    preview.style.fontFamily = "fonte1";
  
    // Atualiza a assinatura em tempo real
    input.addEventListener("input", function () {
      preview.textContent = input.value;
    });
  
    fontSelect.addEventListener("change", function () {
      preview.style.fontFamily = fontSelect.value;
    });
  
    colorPicker.addEventListener("input", function () {
      preview.style.color = colorPicker.value;
    });
  
    increaseSizeBtn.addEventListener("click", function () {
      fontSize += fontSize * 0.5;
      preview.style.fontSize = `${fontSize}px`;
    });
  
    decreaseSizeBtn.addEventListener("click", function () {
      fontSize -= fontSize * 0.5;
      preview.style.fontSize = `${fontSize}px`;
    });
  
    downloadBtn.addEventListener("click", function () {
      html2canvas(preview, { backgroundColor: null }).then((canvas) => {
        const link = document.createElement("a");
        link.download = "assinatura.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      });
    });
  });
  