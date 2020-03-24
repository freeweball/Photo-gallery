window.onload = function() {
      const elem = document.querySelector('.grid');
      const msnry = new Masonry( elem, {
        itemSelector: '.grid-item',
        columnWidth: 250,
        gutter: 10
      });

  const items = document.querySelectorAll(`.image__item`);

  items.forEach((el) => {
    el.classList.add(`visible`);
  });

  $('[data-fancybox="gallery"]').fancybox({
    thumbs : {
      autoStart   : true
    }
  });
};
