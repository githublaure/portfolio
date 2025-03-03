// header scrolling effect
$(window).on('scroll', function(){
	if($(window).scrollTop()){
      $('header').addClass('nav-show');

	} 
	else{
		$('header').removeClass('nav-show');
	}

})

//hamburger
const navSlide = () => {
	 const hamburger = document.querySelector(".hamburger");
	 const navbar = document.querySelector(".nav-bar");
	 const navLinks = document.querySelectorAll(".nav-bar li");

     hamburger.onclick = () => {

	 navbar.classList.toggle("nav-active");

      //Animation links
	 navLinks.forEach((link, index) => {
		if (link.style.animation) {
			link.style.animation = "";
		} else {
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+1}s`;
		   }
		});
	  //hamburger animation
	 hamburger.classList.toggle("toggle");
    }

}

// Animation de chargement
window.addEventListener("load", function() {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
});

// Animation au défilement
const scrollAppear = () => {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(element => {
        // Position de l'élément par rapport au haut de la fenêtre
        const elementPosition = element.getBoundingClientRect().top;
        // Hauteur de la fenêtre
        const windowHeight = window.innerHeight;
        // Point de déclenchement - 100px avant que l'élément soit visible
        const triggerPoint = windowHeight - 100;

        if(elementPosition < triggerPoint) {
            element.classList.add('appear');
        } else {
            element.classList.remove('appear');
        }
    });
};

// Animation des chakras
const initChakras = () => {
    const chakras = document.querySelectorAll('.chakra');
    const treeContainer = document.querySelector('.chakra-tree-container');

    if (treeContainer) {
        // S'assurer que l'arbre est visible
        treeContainer.style.display = 'block';
        treeContainer.style.position = 'relative';
        treeContainer.style.zIndex = '2';

        // Vérifier si l'image de l'arbre est chargée
        const treeImg = new Image();
        treeImg.onload = function() {
            console.log("L'image de l'arbre est chargée");
            const chakraTree = document.querySelector('.chakra-tree');
            if (chakraTree) {
                chakraTree.style.opacity = '1';
            }
        };
        treeImg.onerror = function() {
            console.error("Erreur de chargement de l'image de l'arbre");
            // Fallback en cas d'erreur de chargement
            const chakraTree = document.querySelector('.chakra-tree');
            if (chakraTree) {
                chakraTree.style.background = '#000';
            }
        };
        treeImg.src = 'arbre.png';
    }

    // Animation pulse décalée pour chaque chakra
    chakras.forEach((chakra, index) => {
        // S'assurer que les chakras sont visibles (sauf le premier qui est vide)
        if (index !== 0) { // Ignorer le premier chakra vide
            chakra.style.display = 'block';
            chakra.style.animationDelay = `${index * 0.2}s`;

            // Position dynamique des tooltips en fonction de la position du chakra
            chakra.addEventListener('mouseenter', () => {
                const tooltip = chakra.querySelector('.tooltip');
                if (tooltip) {
                    const rect = chakra.getBoundingClientRect();

                    // Positionner les tooltips selon la position du chakra
                    if (rect.left > window.innerWidth / 2) {
                        // Chakra à droite de l'écran
                        tooltip.style.left = 'auto';
                        tooltip.style.right = 'calc(100% + 20px)';
                        tooltip.style.top = '50%';
                        tooltip.style.transform = 'translateY(-50%)';
                    } else if (rect.top < window.innerHeight / 3) {
                        // Chakra en haut de l'arbre
                        tooltip.style.left = '50%';
                        tooltip.style.transform = 'translateX(-50%)';
                        tooltip.style.top = 'calc(100% + 20px)';
                    } else {
                        // Chakra à gauche ou au centre
                        tooltip.style.left = 'calc(100% + 20px)';
                        tooltip.style.right = 'auto';
                        tooltip.style.top = '50%';
                        tooltip.style.transform = 'translateY(-50%)';
                    }
                    
                    // Assurer la visibilité du tooltip
                    tooltip.style.opacity = '1';
                    tooltip.style.visibility = 'visible';
                }
            });
        }
    });

    // Animation subtile de l'arbre
    const tree = document.querySelector('.chakra-tree');
    if (tree) {
        // Animation au mouvement de la souris
        document.addEventListener('mousemove', (e) => {
            const moveX = (e.clientX - window.innerWidth / 2) / 50;
            const moveY = (e.clientY - window.innerHeight / 2) / 50;
            tree.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.03)`;
        });

        // Animation de flottement léger même sans mouvement
        let time = 0;
        const animate = () => {
            const floatX = Math.sin(time * 0.001) * 5;
            const floatY = Math.cos(time * 0.002) * 3;

            if (!tree.style.transform.includes('translate')) {
                tree.style.transform = `translate(${floatX}px, ${floatY}px)`;
            }

            time += 1;
            requestAnimationFrame(animate);
        };
        animate();
    }
}

// Matrice pour l'animation "hacker"
const matrix = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let targets = document.querySelectorAll(".nav-link");

    targets.forEach(target => {
        target.addEventListener("mouseover", event => {
            let iterations = 0;

            const interval = setInterval(() => {
                event.target.innerText = event.target.innerText
                    .split("")
                    .map((letter, index) => {
                        if(index < iterations) {
                            return event.target.dataset.value[index];
                        }
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("");

                if(iterations >= event.target.dataset.value.length) clearInterval(interval);

                iterations += 1 / 3;
            }, 30);
        });

        // Sauvegarde du texte original
        target.dataset.value = target.innerText;
    });
}

// Effet de typing plus réaliste
const initTypingEffect = () => {
    const typingElement = document.querySelector('.typing-effect');
    if (typingElement) {
        const originalText = typingElement.textContent;
        typingElement.textContent = originalText;
        typingElement.classList.add('typing-active');
    }

    // Activer l'animation de typing pour les titres h3 dans .typewriter
    const typewriterElement = document.querySelector('.typewriter h3');
    if (typewriterElement) {
        typewriterElement.style.width = '0';
        setTimeout(() => {
            typewriterElement.style.animation = 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite';
            typewriterElement.style.width = '100%';
        }, 500);
    }
}

// Initialisation des animations sociales
const initSocialAnimations = () => {
    const socialLinks = document.querySelectorAll('.social-media a');
    socialLinks.forEach(link => {
        // Utiliser les classes CSS plutôt que des styles inline pour une meilleure performance
        link.addEventListener('mouseenter', () => {
            const icon = link.querySelector('i');
            if (icon) {
                icon.classList.add('hover-effect');
            }
        });

        link.addEventListener('mouseleave', () => {
            const icon = link.querySelector('i');
            if (icon) {
                icon.classList.remove('hover-effect');
            }
        });
    });
}


// Système de score et tri pour les images Laure
const initLaureGallery = () => {
    const laureItems = document.querySelectorAll('.laure-item');
    if (!laureItems.length) return;

    // Ajouter les événements de clic pour augmenter le score
    laureItems.forEach(item => {
        item.addEventListener('click', () => {
            // Augmenter le score
            let score = parseInt(item.getAttribute('data-score')) + 1;
            item.setAttribute('data-score', score);
            
            // Mettre à jour l'affichage du score pour tous les éléments avec la même image
            const imgSrc = item.querySelector('img').src;
            // Extraire le nom du fichier de l'URL complète
            const imgFileName = imgSrc.split('/').pop();
            
            // Sélectionner tous les éléments avec la même image par nom de fichier
            const allMatchingItems = document.querySelectorAll('.laure-item');
            
            allMatchingItems.forEach(matchItem => {
                const matchImg = matchItem.querySelector('img');
                if (matchImg && matchImg.src.includes(imgFileName)) {
                    matchItem.setAttribute('data-score', score);
                    const scoreElement = matchItem.querySelector('.score');
                    if (scoreElement) {
                        scoreElement.textContent = score;
                    }
                }
            });
            
            // Trier les éléments en fonction du score
            sortLaureItems();
            sortNavbarLaureItems();
        });
    });
};

// Fonction pour trier les éléments Laure par score dans la section principale
const sortLaureItems = () => {
    const gallery = document.querySelector('.laure-gallery');
    if (!gallery) return;
    
    // Convertir NodeList en tableau pour le tri
    const items = Array.from(gallery.querySelectorAll('.laure-item'));
    
    // Trier par score décroissant
    items.sort((a, b) => {
        const scoreA = parseInt(a.getAttribute('data-score'));
        const scoreB = parseInt(b.getAttribute('data-score'));
        return scoreB - scoreA;
    });
    
    // Animation de tri
    items.forEach((item, index) => {
        // Appliquer une transition pour le déplacement
        item.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
        item.style.opacity = '0.7';
        
        // Repositionner après un court délai pour permettre l'animation
        setTimeout(() => {
            gallery.appendChild(item);
            item.style.opacity = '1';
        }, index * 100);
    });
};

// Fonction pour trier les éléments Laure par score dans la navbar
const sortNavbarLaureItems = () => {
    const navbarGallery = document.querySelector('.navbar-laure-gallery');
    if (!navbarGallery) return;
    
    // Convertir NodeList en tableau pour le tri
    const items = Array.from(navbarGallery.querySelectorAll('.laure-item'));
    
    // Trier par score décroissant
    items.sort((a, b) => {
        const scoreA = parseInt(a.getAttribute('data-score'));
        const scoreB = parseInt(b.getAttribute('data-score'));
        return scoreB - scoreA;
    });
    
    // Animation de tri
    items.forEach((item, index) => {
        // Appliquer une transition pour le déplacement
        item.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
        item.style.opacity = '0.7';
        
        // Repositionner après un court délai pour permettre l'animation
        setTimeout(() => {
            navbarGallery.appendChild(item);
            item.style.opacity = '1';
        }, index * 50);
    });
};

// Initialisation de toutes les animations
window.onload = () => {
    navSlide();
    scrollAppear();
    matrix();
    initChakras();
    initTypingEffect();
    initSocialAnimations();
    initLaureGallery(); // Initialiser la galerie Laure

    // Détecter le scroll pour les animations
    window.addEventListener('scroll', scrollAppear);
};