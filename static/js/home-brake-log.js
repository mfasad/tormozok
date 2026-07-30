(function () {
  var dropdown = document.getElementById('globalSearchDropdown');
  if (!dropdown || !window.MutationObserver) return;

  function hideDatedResults() {
    dropdown.querySelectorAll('.sd-item').forEach(function (item) {
      if (/\b(?:19|20)\d{2}\b/.test(item.textContent || '')) item.remove();
    });
  }

  new MutationObserver(hideDatedResults).observe(dropdown, {
    childList: true,
    subtree: true
  });
})();
