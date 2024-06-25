/* Active la fonctionnalité ScrollSpy de Bootstrap pour la barre de navigation lattérale,
* mettant en subrillance automatiquement les liens de la navigation en fonction de la section visible de la page.
* Ajout de fontionnalité pour fermer automatiquement la barre de navigation réactive après un clic sur un lien.
* Ajout de fonctionnalité pour afficher un bouton de retour en haut de page après un certain défilement vers le bas.
*/

window.addEventListener('DOMContentLoaded', event => {

    // Activer le scrollspy de Bootstrap sur l'élément nav principal
    const sideNav = document.body.querySelector('#sidebar');
    new bootstrap.ScrollSpy(document.body, {
        target: '#sidebar',
        offset: 74,
    });

    // Fermer automatiquement la barre de navigation réactive après un clic sur un lien
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function(responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

} ); // fin de la fonction d'écoute de l'événement DOMContentLoaded

// Activer le bouton de retour en haut de page
let mybutton = document.getElementById("btn-back-to-top");

// Afficher le bouton de retour en haut Lorsque l'utilisateur fait défiler le document de 20 px vers le bas
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// Retourner en haut de la page lors du clic sur le bouton
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

