function findActiveLink() {
    const links = document.querySelector('a');
    links.forEach(checkIfLinkIsActive)
  }
  
  function checkIfLinkIsActive(link) {
    if (link.href.contains(location.pathname)){
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  }
  
  window.addEventListener('DOMContentLoaded', findActiveLink)