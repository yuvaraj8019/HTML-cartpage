
document.querySelectorAll('.selectors').forEach(selector => {
    selector.style.display = 'none';
  });
  function handleSelection(option) {
    document.querySelectorAll('.selectors').forEach(selector => {
      selector.style.display = 'none';
    });
    document.getElementById('selectors' + option).style.display = 'block';
      const totalPriceElement = document.getElementById('total-price');
    if (option === 1) {
      totalPriceElement.textContent = '$10.00 USD';
    } else if (option === 2) {
      totalPriceElement.textContent = '$18.00 USD';
    } else if (option === 3) {
      totalPriceElement.textContent = '$24.00 USD';
    }
  }
  