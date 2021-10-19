//*function findActiveLink() {
//    const links = document.querySelectorAll('a href');
//    links.forEach(checkIfLinkIsActive)
//  }
//  
//  function checkIfLinkIsActive(link) {
//    if (link.href.contains(location.pathname) ){
//      link.classList.add('active');
//    } else {
//      link.classList.remove('active');
//    }
//    
//  }
//  window.addEventListener('DOMContentLoaded', findActiveLink)

window.onload = function () {
    var all_links = document.getElementById("nav-link").getElementsByTagName("a"),
    i=0, len=all_links.length,
    full_path = location.href.split("#")[0];

    for(; i<len; i++){
        if(all_links[i].href.split("#")[0] == full_path){
            all_links[i].className = "nav-link-active";
        }
    }
}