function findActiveLink() {
    const links = document.querySelector('a');
    links.forEach(checkIfLinkIsActive)
  }
  
  function checkIfLinkIsActive(link) {
    if (link.href.contains(location.pathname)){
      link.classList.add('nav-link-active');
    } else {
      link.classList.remove('nav-link-active');
    }
  }
  
  window.addEventListener('DOMContentLoaded', findActiveLink)