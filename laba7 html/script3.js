function toggleTextt() {
    var moreText = document.querySelector('.contentt .more');
    var buttonText = document.querySelector('.contentt button');
  
    if (moreText.style.display === 'none') {
      moreText.style.display = 'block';
      buttonText.textContent = 'Свернуть';
    } else {
      moreText.style.display = 'none';
      buttonText.textContent = 'Читать далее';
    }
  }