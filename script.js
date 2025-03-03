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
    
    // Si on est sur mobile, rendre tous les éléments visibles immédiatement
    if (window.innerWidth <= 768) {
        fadeInElements.forEach(element => {
            element.classList.add('appear');
        });
        return;
    }
    
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

        // Pour mobile, ajuster la position et la taille
        if (window.innerWidth <= 768) {
            treeContainer.style.width = '100%';
            treeContainer.style.height = '400px';
            treeContainer.style.left = '0';
            treeContainer.style.transform = 'scale(0.6)';
            treeContainer.style.margin = '0 auto';
        }

        // Vérifier si l'image de l'arbre est chargée
        const treeImg = new Image();
        treeImg.onload = function() {
            console.log("L'image de l'arbre est chargée");
            const chakraTree = document.querySelector('.chakra-tree');
            if (chakraTree) {
                chakraTree.style.opacity = '1';
            }
            
            // S'assurer que tous les chakras sont bien affichés
            chakras.forEach(chakra => {
                chakra.style.display = 'block';
                chakra.style.visibility = 'visible';
                chakra.style.opacity = '1';
            });
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

    // Définir les couleurs et descriptions pour chaque chakra
    const chakraData = [
        { color: '#FF0000', name: 'Racine - Data Engineering' }, // Rouge (index 0)
        { color: '#FFA500', name: 'Sacré - Machine Learning' }, // Orange (index 1)
        { color: '#FFFF00', name: 'Plexus Solaire - Cloud' }, // Jaune (index 2)
        { color: '#00FF00', name: 'Cœur - Programmation' }, // Vert (index 3)
        { color: '#00FFFF', name: 'Gorge - Visualisation' }, // Bleu ciel (index 4)
        { color: '#0000FF', name: '3ème Œil - IA' }, // Bleu foncé (index 5)
        { color: '#800080', name: 'Couronne - Leadership' }, // Violet (index 6)
    ];

    // Animation pulse décalée pour chaque chakra
    chakras.forEach((chakra, index) => {
        // S'assurer que tous les chakras sont visibles
        chakra.style.display = 'block';
        chakra.style.opacity = '1';
        chakra.style.visibility = 'visible';

        // Configurez tous les chakras pour être sûrs qu'ils sont visibles
        if (index === 0) { // Rouge
            chakra.style.zIndex = '20'; // Z-index plus élevé pour être sûr qu'il est au-dessus
            console.log("Chakra rouge configuré:", chakra.style.display, chakra.style.opacity, chakra.style.zIndex);
        } else if (index === 1) { // Orange
            chakra.style.zIndex = '19'; // Z-index légèrement inférieur au rouge
            chakra.style.background = '#FFA500'; // Forcer la couleur orange
            console.log("Chakra orange configuré:", chakra.style.display, chakra.style.opacity, chakra.style.zIndex);
        } else if (index === 2) { // Jaune
            chakra.style.zIndex = '18'; // Z-index légèrement inférieur à l'orange
            chakra.style.background = '#FFFF00'; // Forcer la couleur jaune
            console.log("Chakra jaune configuré:", chakra.style.display, chakra.style.opacity, chakra.style.zIndex);
        } else if (index === 3) { // Vert
            chakra.style.zIndex = '17'; // Z-index légèrement inférieur au jaune
            chakra.style.background = '#00FF00'; // Forcer la couleur verte
            console.log("Chakra vert configuré:", chakra.style.display, chakra.style.opacity, chakra.style.zIndex);
        } else if (index === 4) { // Bleu clair
            chakra.style.zIndex = '16'; // Z-index légèrement inférieur au vert
            chakra.style.background = '#00FFFF'; // Forcer la couleur bleu clair
            console.log("Chakra bleu clair configuré:", chakra.style.display, chakra.style.opacity, chakra.style.zIndex);
        }

        chakra.style.animationDelay = `${index * 0.2}s`;

        // Récupérer les données du chakra (si disponible)
        if (index < chakraData.length) {
            const data = chakraData[index];

            // Définir les descriptions correctes pour chaque chakra
            let title, paragraphs;
            if (index === 0) { // Rouge - Racine
                title = "Chakra Racine - Data Engineering";
                paragraphs = [
                    "• Expert ETL/ELT: 8 ans d'expérience",
                    "• Hadoop, Spark, Airflow maîtrisés",
                    "• Conception de data lakes à grande échelle"
                ];
            } else if (index === 1) { // Orange - Sacré
                title = "Chakra Sacré - Machine Learning";
                paragraphs = [
                    "• Modèles prédictifs et classifications",
                    "• Scikit-learn, pandas, NumPy expert",
                    "• Optimisation d'algorithmes ML"
                ];
            } else if (index === 2) { // Jaune - Plexus Solaire
                title = "Chakra Plexus Solaire - Cloud";
                paragraphs = [
                    "• AWS Solutions Architect certifié",
                    "• GCP & Azure: déploiement multi-cloud",
                    "• Kubernetes, Terraform, DevOps CI/CD"
                ];
            } else if (index === 3) { // Vert - Cœur
                title = "Chakra Cœur - Programmation";
                paragraphs = [
                    "• Python, JavaScript, SQL, Scala, R",
                    "• Backend: Flask, Django, Node.js, Express",
                    "• Mentor pour 15+ juniors devs"
                ];
            } else if (index === 4) { // Bleu ciel - Gorge
                title = "Chakra Gorge - Data Visualization";
                paragraphs = [
                    "• Tableau, Power BI, D3.js",
                    "• Dashboards interactifs primés",
                    "• Formation en design d'expérience utilisateur"
                ];
            } else if (index === 5) { // Bleu foncé - 3ème œil
                title = "Chakra Troisième Œil - IA";
                paragraphs = [
                    "• Réseaux de neurones avancés",
                    "• TensorFlow, PyTorch, Keras",
                    "• Contributeur open source: HuggingFace"
                ];
            } else if (index === 6) { // Violet - Couronne
                title = "Chakra Couronne - Leadership";
                paragraphs = [
                    "• Direction stratégique des projets data",
                    "• Gestion d'équipes multidisciplinaires",
                    "• Vision produit et innovation"
                ];
            }

            // Gestion de l'infobulle pour chaque chakra
            const tooltip = chakra.querySelector('.tooltip');

            if (tooltip) {
                // Mettre à jour le titre du tooltip
                const titleElement = tooltip.querySelector('h4');
                if (titleElement && title) {
                    titleElement.textContent = title;
                }

                // Mettre à jour les paragraphes si nécessaire
                if (paragraphs) {
                    const paragraphElements = tooltip.querySelectorAll('p');
                    if (paragraphElements.length >= paragraphs.length) {
                        paragraphs.forEach((text, i) => {
                            if (paragraphElements[i]) {
                                paragraphElements[i].textContent = text;
                            }
                        });
                    }
                }

                // Appliquer les styles communs pour tous les tooltips
                tooltip.style.background = 'rgba(255, 255, 255, 0.9)';
                tooltip.style.color = '#333';
                tooltip.style.borderColor = data.color;
                tooltip.style.zIndex = '200';
            }

            // Position dynamique des tooltips en fonction de la position du chakra
            chakra.addEventListener('mouseenter', () => {
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
                    tooltip.style.display = 'block';
                }
            });

            // Ajouter un événement pour cacher l'infobulle quand on quitte le chakra
            chakra.addEventListener('mouseleave', () => {
                if (tooltip) {
                    tooltip.style.opacity = '0';
                    tooltip.style.visibility = 'hidden';
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

// JavaScript for handling mobile nav-bar
function navSlide() {
  const hamburger = document.querySelector(".hamburger");
  const navBar = document.querySelector(".nav-bar");
  const navLinks = document.querySelectorAll(".nav-bar li");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      // Toggle navigation
      navBar.classList.toggle("nav-active");

      // Animation for nav items
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
        link.style.opacity = "1";
        link.style.visibility = "visible";
        link.style.display = "block";
      });

      // Toggle hamburger animation
      hamburger.classList.toggle("toggle");
    });
  }
  
  // Close menu when clicking a nav link
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (navBar.classList.contains("nav-active")) {
        navBar.classList.remove("nav-active");
        hamburger.classList.remove("toggle");
      }
    });
  });
}

// Close menu when clicking a nav link
navLinks.forEach(link => link.addEventListener("click", () => {
  hamburger.classList.remove("toggle");
  navBar.classList.remove("nav-active");

  navLinks.forEach(link => {
    link.style.animation = "";
  });
}));

// Hide/show header on scroll
let lastScrollTop = 0;
window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll down
    document.querySelector("header").style.top = "-70px";
  } else {
    // Scroll up
    document.querySelector("header").style.top = "0";
  }
  lastScrollTop = scrollTop;
});

// Page loader
window.addEventListener("load", () => {
  document.querySelector(".loader").classList.add("hidden");
  
  // S'assurer que les éléments Laure sont visibles
  document.querySelect// Ensure Laure items are visible
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.laure-item').forEach(item => {
    item.style.display = 'inline-block';
    item.style.opacity = '1';
    item.style.visibility = 'visible';
  });
  
  // Navigation hamburger menu
  navSlide();
  
  // Forcer le recalcul du viewport sur mobile
  function adjustViewport() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    // Assurer que la largeur est correcte
    document.body.style.width = '100%';
    document.documentElement.style.width = '100%';
    document.querySelector('.container').style.width = '100%';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflowX = 'hidden';
    
    // Centrer le contenu
    document.querySelectorAll('#home, #projects, #contact, #chakra-section, footer').forEach(section => {
      section.style.width = '100%';
      section.style.boxSizing = 'border-box';
      section.style.margin = '0 auto';
    });
  }
  
  // Exécuter au chargement et lors du redimensionnement
  adjustViewport();
  window.addEventListener('resize', adjustViewport);
  
  // Animation du loader
  setTimeout(() => {
    document.querySelector(".loader").classList.add("hidden");
    document.querySelector(".loader").style.display = "none";
  }, 500);
  
  // S'assurer que tous les éléments sont visibles sur mobile
  if (window.innerWidth <= 768) {
    document.querySelectorAll('.chakra').forEach(function(el) {
      el.style.display = 'block';
      el.style.opacity = '1';
      el.style.visibility = 'visible';
    });
    
    document.querySelectorAll('.card, .laure-item').forEach(function(el) {
      el.style.display = 'block';
      el.style.opacity = '1';
      el.style.visibility = 'visible';
    });
  }
});

// Function for navigation slide
function navSlide() {
  const hamburger = document.querySelector(".hamburger");
  const navBar = document.querySelector(".nav-bar");
  const navLinks = document.querySelectorAll(".nav-bar li");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      // Toggle navigation
      navBar.classList.toggle("nav-active");
      
      // Hamburger animation
      hamburger.classList.toggle("toggle");
      
      // Animate links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
      });
    });
  }
  
  // Close menu when a link is clicked
  const links = document.querySelectorAll(".nav-link");
  links.forEach(link => {
    link.addEventListener("click", () => {
      if (navBar.classList.contains("nav-active")) {
        navBar.classList.remove("nav-active");
        hamburger.classList.remove("toggle");
        
        navLinks.forEach(link => {
          link.style.animation = "";
        });
      }
    });
  });
}Timeout(() => {
      document.querySelector(".loader").style.display = "none";
    }, 500);
  }, 500);
});

// Rendre toutes les animations responsives sur mobile
function checkScreenSize() {
  const chakraTreeContainer = document.querySelector(".chakra-tree-container");

  if (window.innerWidth <= 768) {
    document.querySelectorAll(".chakra").forEach(chakra => {
      chakra.style.width = "30px";
      chakra.style.height = "30px";
    });

    if (chakraTreeContainer) {
      chakraTreeContainer.style.transform = "scale(0.6)";
    }
  } else {
    document.querySelectorAll(".chakra").forEach(chakra => {
      chakra.style.width = "40px";
      chakra.style.height = "40px";
    });

    if (chakraTreeContainer) {
      chakraTreeContainer.style.transform = "scale(1)";
    }
  }
}

// Check screen size on load and resize
window.addEventListener("load", checkScreenSize);
window.addEventListener("resize", checkScreenSize);

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