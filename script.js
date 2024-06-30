const galleryContainer = document.querySelector('.wrappers');

galleryContainer.addEventListener('wheel', (event) => {
  event.preventDefault();
  galleryContainer.scrollBy({
    left: event.deltaY > 0 ? 100 : -100, // Adjust the scrolling speed
    behavior: 'smooth',
  });
});



  // Add custom scroll style to the element with the ID "myElement"
  const element = document.getElementById('myElement');
  element.style.overflow = 'auto';





const members = document.querySelectorAll('.member');

members.forEach((member) => {
  member.addEventListener('mouseenter', () => {
    member.querySelector('p').style.display = 'block';
  });

  member.addEventListener('mouseleave', () => {
    member.querySelector('p').style.display = 'none';
  });
});


