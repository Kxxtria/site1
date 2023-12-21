function toggleText() {
    var moreText = document.querySelector('.content .more');
    var buttonText = document.querySelector('.content button');
  
    if (moreText.style.display === 'none') {
      moreText.style.display = 'block';
      buttonText.textContent = 'Свернуть';
    } else {
      moreText.style.display = 'none';
      buttonText.textContent = 'Читать далее';
    }
  }