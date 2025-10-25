window.calculateCost = function () {
  const volume = parseFloat(document.getElementById('volume').value);
  const materialCost = parseFloat(document.getElementById('materialCost').value);
  const total = (volume * materialCost).toFixed(2);
  document.getElementById('result').innerText = `Estimated Cost: $${total}`;
};
