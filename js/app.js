const textarea = document.querySelector('.textarea textarea');
const placeholder = document.querySelector('.placeholder');

textarea.addEventListener('input', function() {
  placeholder.style.display = this.value ? 'none' : 'block';
});