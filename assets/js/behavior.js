function enlargeImage(event, thumbnail) {
    event.preventDefault();
  
    var enlargedContainer = document.querySelector('.enlarged');
    var enlargedImage = enlargedContainer.querySelector('img');
    enlargedImage.src = thumbnail.querySelector('img').src;
  
    enlargedContainer.style.opacity = 1;
    enlargedContainer.style.pointerEvents = 'auto';
    document.body.style.overflow = 'hidden';
  }
  
  function closeImage() {
    var enlargedContainer = document.querySelector('.enlarged');
    enlargedContainer.style.opacity = 0;
    enlargedContainer.style.pointerEvents = 'none';
    document.body.style.overflow = 'auto';
  }
  
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('work__img')) {
      enlargeImage(event, event.target);
    }
  });
  
  document.addEventListener('touchstart', function(event) {
    if (event.target.classList.contains('work__img')) {
      enlargeImage(event, event.target);
    }
  });
  