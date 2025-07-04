const radios = document.querySelectorAll('input[name="plan"]');
    const contentBoxes = document.querySelectorAll('.content-box');

    radios.forEach(radio => {
      radio.addEventListener('change', () => {
        const selected = radio.value;

        contentBoxes.forEach(box => {
          box.classList.toggle('active', box.id === selected);
        });
      });
    });