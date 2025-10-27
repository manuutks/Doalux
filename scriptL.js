const checkboxes = document.querySelectorAll(".filtro input[type='checkbox']");
const produtos = document.querySelectorAll(".produto");

checkboxes.forEach(filtro => {
  filtro.addEventListener("change", () => {
    const ativos = Array.from(checkboxes)
      .filter(c => c.checked)
      .map(c => c.value);

    produtos.forEach(prod => {
      const categoria = prod.dataset.categoria;
      const cor = prod.dataset.cor;

      if (ativos.length === 0 || ativos.includes(categoria) || ativos.includes(cor)) {
        prod.style.display = "block";
      } else {
        prod.style.display = "none";
      }
    });
  });
});
