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

    // Effet hackerEffect pour l'image de profil
    const profilePic = document.querySelector(".profile-picture");
    if (profilePic) {
        profilePic.addEventListener("mouseenter", function() {
            // Créer un canvas pour l'effet de matrice
            if (!document.querySelector('.matrix-canvas')) {
                const canvas = document.createElement('canvas');
                canvas.className = 'matrix-canvas';
                canvas.width = profilePic.offsetWidth;
                canvas.height = profilePic.offsetHeight;
                canvas.style.position = 'absolute';
                canvas.style.top = '0';
                canvas.style.left = '0';
                canvas.style.zIndex = '3';
                canvas.style.opacity = '0.5';
                canvas.style.borderRadius = '50%';
                canvas.style.pointerEvents = 'none';
                profilePic.appendChild(canvas);

                // Initialiser l'effet de pluie de code
                const ctx = canvas.getContext('2d');
                const characters = "DATASCIENCE DATASCIENCE DATASCIENCE DATASCIENCE DATASCIENCE DATASCIENCE DATASCIENCE DATASCIENCE DATASCIENCE DATASCIENCE DAT";
                const columns = Math.floor(canvas.width / 10);
                const drops = [];

                // Initialiser les positions de départ des caractères
                for (let i = 0; i < columns; i++) {
                    drops[i] = Math.random() * -100;
                }

                // Fonction pour dessiner l'effet de matrice
                function drawMatrix() {
                    // Ajouter un fond semi-transparent pour créer un effet de traînée
                    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);

                    // Définir le style pour les caractères
                    ctx.fillStyle = "#0F0";
                    ctx.font = "10px monospace";

                    // Dessiner les caractères
                    for (let i = 0; i < drops.length; i++) {
                        // Caractère aléatoire
                        const text = characters.charAt(Math.floor(Math.random() * characters.length));
                        // Position x dépend de l'index de la colonne
                        const x = i * 10;
                        // Position y dépend de la valeur dans le tableau drops
                        const y = drops[i] * 10;

                        // Dessiner le caractère
                        ctx.fillText(text, x, y);

                        // Réinitialiser quand le caractère sort de l'écran ou aléatoirement
                        if (y > canvas.height || Math.random() > 0.98) {
                            drops[i] = 0;
                        }

                        // Déplacer le caractère vers le bas
                        drops[i]++;
                    }
                }

                // ID de l'animation pour pouvoir l'arrêter plus tard
                const matrixInterval = setInterval(drawMatrix, 50);

                // Arrêter l'animation quand la souris quitte l'image
                profilePic.addEventListener("mouseleave", function() {
                    clearInterval(matrixInterval);
                    if (canvas) {
                        canvas.remove();
                    }
                });
            }
        });
    }
});

// Animation au défilement
const scrollAppear = () => {
    const fadeInElements = document.querySelectorAll('.fade-in');
    const projectsSection = document.getElementById('projects');
    const projectCards = document.querySelectorAll('#projects .card');

    // Si on est sur mobile, rendre tous les éléments visibles immédiatement
    if (window.innerWidth <= 768) {
        fadeInElements.forEach(element => {
            element.classList.add('appear');
        });
        return;
    }

    // Traitement spécial pour la section projets (animation depuis la droite)
    if (projectsSection) {
        const projectsPosition = projectsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const triggerPoint = windowHeight - 100;

        if (projectsPosition < triggerPoint) {
            // Ajouter les classes avec délai pour chaque carte
            projectCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('appear');
                }, index * 100); // Délai progressif pour chaque carte
            });
        }
    }

    // Pour les autres éléments fade-in (non cartes de projet)
    fadeInElements.forEach(element => {
        // Ne pas traiter à nouveau les cartes de projet
        if (!element.classList.contains('card')) {
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

        // Adapter le conteneur pour maintenir les proportions
        const setTreeContainerSize = () => {
            // Conserver un rapport largeur/hauteur fixe
            const containerWidth = Math.min(window.innerWidth * 0.8, 900);
            const containerHeight = containerWidth * 1.11; // Ratio hauteur/largeur ~ 1.11
            
            treeContainer.style.width = `${containerWidth}px`;
            treeContainer.style.height = `${containerHeight}px`;
            treeContainer.style.margin = '0 auto';
            
            // Assurer que l'arbre reste centré et à la bonne taille
            const chakraTree = document.querySelector('.chakra-tree');
            if (chakraTree) {
                chakraTree.style.position = 'absolute';
                chakraTree.style.top = '0';
                chakraTree.style.left = '0';
                chakraTree.style.width = '100%';
                chakraTree.style.height = '100%';
                chakraTree.style.transformOrigin = 'center center';
            }
            
            // Sur mobile, utiliser une mise à l'échelle spécifique
            if (window.innerWidth <= 768) {
                treeContainer.style.width = '100%';
                treeContainer.style.height = '750px';
                treeContainer.style.transform = 'scale(1)';
                treeContainer.style.transformOrigin = 'center center';
            }
        };
        
        // Appliquer le dimensionnement initial
        setTreeContainerSize();
        
        // Ajouter un écouteur de redimensionnement pour maintenir les proportions
        window.addEventListener('resize', setTreeContainerSize);

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

                    // S'assurer que le tooltip est au premier plan avec un z-index très élevé
                    tooltip.style.zIndex = '9999';
                    
                    // Comportement spécifique sur mobile (écran < 768px)
                    if (window.innerWidth <= 768) {
                        // Sur mobile, afficher le tooltip au centre de l'écran
                        tooltip.style.position = 'fixed';
                        tooltip.style.left = '50%';
                        tooltip.style.top = '50%';
                        tooltip.style.transform = 'translate(-50%, -50%)';
                        tooltip.style.width = '80%';
                        tooltip.style.maxWidth = '300px';
                        tooltip.style.maxHeight = '300px';
                        tooltip.style.overflow = 'auto';
                        tooltip.style.background = 'rgba(255, 255, 255, 0.95)';
                        tooltip.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.5)';
                        tooltip.style.padding = '15px';
                        tooltip.style.borderRadius = '10px';
                        tooltip.style.zIndex = '9999';
                        // Ajouter un peu d'espace en haut et en bas
                        tooltip.style.marginTop = '0';
                        // Assurer que le texte est lisible
                        tooltip.style.fontSize = '14px';
                        tooltip.style.lineHeight = '1.4';
                        
                        // Forcer le style avec !important
                        tooltip.style.setProperty('position', 'fixed', 'important');
                        tooltip.style.setProperty('left', '50%', 'important');
                        tooltip.style.setProperty('top', '50%', 'important');
                        tooltip.style.setProperty('transform', 'translate(-50%, -50%)', 'important');
                        tooltip.style.setProperty('z-index', '9999', 'important');
                    } else {
                        // Positionner les tooltips selon la position du chakra sur desktop
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

                        // Correction spécifique pour les chakras jaune (index 2), vert (index 3) et bleu clair (index 4)
                        if (index === 2) { // Jaune
                            tooltip.style.left = '50%';
                            tooltip.style.right = 'auto';
                            tooltip.style.top = 'calc(100% + 15px)'; // Afficher en-dessous du chakra au lieu d'au-dessus
                            tooltip.style.bottom = 'auto';
                            tooltip.style.transform = 'translateX(-50%)';
                        } else if (index === 3) { // Vert
                            tooltip.style.left = 'auto';
                            tooltip.style.right = 'calc(100% + 10px)';
                            tooltip.style.top = '50%';
                            tooltip.style.transform = 'translateY(-50%)';
                        } else if (index === 4) { // Bleu clair
                            tooltip.style.left = 'auto';
                            tooltip.style.right = 'calc(100% + 10px)';
                            tooltip.style.top = '0';
                            tooltip.style.transform = 'translateY(0)';
                        }
                        tooltip.style.position = 'absolute';
                    }

                    // Assurer la visibilité du tooltip et le positionner au-dessus de tout
                    tooltip.style.opacity = '1';
                    tooltip.style.visibility = 'visible';
                    tooltip.style.display = 'block';

                    // Ajouter un style important pour s'assurer que le tooltip est visible
                    tooltip.style.setProperty('z-index', '9999', 'important');
                    tooltip.style.setProperty('background-color', 'rgba(255, 255, 255, 0.95)', 'important');
                    tooltip.style.setProperty('box-shadow', '0 0 20px rgba(0, 0, 0, 0.3)', 'important');
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
        // Ajustement spécifique pour le chakra violet (Couronne)
        if (index === 6) {
            chakra.style.zIndex = '25'; // Z-index plus élevé pour être sûr qu'il est au-dessus
            chakra.style.top = '10%';
            chakra.style.left = '50%';
            chakra.style.transform = 'translate(-50%, -50%)';
            chakra.style.boxShadow = '0 0 20px 8px #800080'; // Augmenter l'effet lumineux
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


// Exécuter cette fonction au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
  // S'assurer que navSlide est correctement initialisé
  navSlide();

  // Forcer la visibilité de tous les éléments sur mobile
  if (window.innerWidth <= 768) {
    document.querySelectorAll('.chakra, .laure-item, .card').forEach(item => {
      item.style.display = 'block';
      item.style.opacity = '1';
      item.style.visibility = 'visible';
    });
  }
});

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
  // Ensure Laure items are visible
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
}setTimeout(() => {
    document.querySelector(".loader").style.display = "none";
  }, 500);
});

// Rendre toutes les animations responsives lors du redimensionnement
function checkScreenSize() {
  const chakraTreeContainer = document.querySelector(".chakra-tree-container");
  const chakraTree = document.querySelector('.chakra-tree');

  if (!chakraTreeContainer || !chakraTree) return;
  
  // Adapter la taille du conteneur en fonction de la fenêtre
  const containerWidth = Math.min(window.innerWidth * 0.8, 900);
  const containerHeight = containerWidth * 1.11; // Ratio hauteur/largeur
  
  // Configurer le conteneur principal
  chakraTreeContainer.style.width = `${containerWidth}px`;
  chakraTreeContainer.style.height = `${containerHeight}px`;
  chakraTreeContainer.style.margin = '0 auto';
  chakraTreeContainer.style.position = 'relative';
  chakraTreeContainer.style.transformOrigin = 'center center';
  
  // Configurer l'arbre
  chakraTree.style.position = 'absolute';
  chakraTree.style.top = '0';
  chakraTree.style.left = '0';
  chakraTree.style.width = '100%';
  chakraTree.style.height = '100%';
  chakraTree.style.transform = 'none';

  if (window.innerWidth <= 768) {
    // Configuration pour mobile
    document.querySelectorAll(".chakra").forEach((chakra, index) => {
      chakra.style.width = "25px";
      chakra.style.height = "25px";
      chakra.style.transform = "translate(-50%, -50%)";
      chakra.style.display = "block";
      chakra.style.opacity = "1";
      chakra.style.visibility = "visible";
      
      // Positions fixes par rapport à l'arbre, avec espacement vertical réduit
      switch(index) {
        case 0: // Rouge - Racine
          chakra.style.top = "80%";
          chakra.style.left = "50%";
          chakra.style.zIndex = "20";
          break;
        case 1: // Orange - Sacré
          chakra.style.top = "72%";
          chakra.style.left = "38%";
          chakra.style.zIndex = "19";
          break;
        case 2: // Jaune - Plexus solaire
          chakra.style.top = "64%";
          chakra.style.left = "50%";
          chakra.style.zIndex = "18";
          break;
        case 3: // Vert - Cœur
          chakra.style.top = "56%";
          chakra.style.left = "62%";
          chakra.style.zIndex = "17";
          break;
        case 4: // Bleu clair - Gorge
          chakra.style.top = "48%";
          chakra.style.left = "50%";
          chakra.style.zIndex = "16";
          break;
        case 5: // Bleu foncé - Troisième œil
          chakra.style.top = "40%";
          chakra.style.left = "38%";
          chakra.style.zIndex = "15";
          break;
        case 6: // Violet - Couronne
          chakra.style.top = "25%"; // Position plus basse pour éviter la légende
          chakra.style.left = "50%";
          chakra.style.zIndex = "25";
          break;
      }
      
      // Configuration spéciale pour les infobulles sur mobile
      const tooltip = chakra.querySelector('.tooltip');
      if (tooltip) {
        // Définir l'infobulle pour qu'elle s'affiche toujours au centre de l'écran sur mobile
        chakra.addEventListener('mouseenter', () => {
          tooltip.style.setProperty('position', 'fixed', 'important');
          tooltip.style.setProperty('left', '50%', 'important');
          tooltip.style.setProperty('right', 'auto', 'important');
          tooltip.style.setProperty('top', '50%', 'important');
          tooltip.style.setProperty('transform', 'translate(-50%, -50%)', 'important');
          tooltip.style.setProperty('width', '250px', 'important');
          tooltip.style.setProperty('maxWidth', '90vw', 'important');
          tooltip.style.setProperty('z-index', '9999', 'important');
          tooltip.style.setProperty('background', 'rgba(255, 255, 255, 0.95)', 'important');
          tooltip.style.setProperty('box-shadow', '0 0 20px rgba(0, 0, 0, 0.5)', 'important');
          tooltip.style.setProperty('visibility', 'visible', 'important');
          tooltip.style.setProperty('opacity', '1', 'important');
          tooltip.style.setProperty('display', 'block', 'important');
        });
      }
    });

    // Configuration du conteneur pour mobile
    chakraTreeContainer.style.width = "100%";
    chakraTreeContainer.style.height = "750px";
    chakraTreeContainer.style.marginTop = "80px";
    chakraTreeContainer.style.display = "flex";
    chakraTreeContainer.style.flexDirection = "column";
    chakraTreeContainer.style.alignItems = "center";
    chakraTreeContainer.style.justifyContent = "center";
    chakraTreeContainer.style.position = "relative";
    chakraTreeContainer.style.overflow = "visible";
    
    // Centrer l'arbre correctement
    const chakraTree = document.querySelector('.chakra-tree');
    if (chakraTree) {
      chakraTree.style.setProperty('left', '50%', 'important');
      chakraTree.style.setProperty('transform', 'translateX(-50%)', 'important');
      chakraTree.style.setProperty('position', 'absolute', 'important');
      chakraTree.style.setProperty('width', '100%', 'important');
      chakraTree.style.setProperty('height', '100%', 'important');
      chakraTree.style.setProperty('background-position', 'center', 'important');
    }
    
    // Assurer que la légende ne cache pas les chakras
    const chakraLegend = document.querySelector('.chakra-legend');
    if (chakraLegend) {
      chakraLegend.style.position = 'relative';
      chakraLegend.style.top = 'auto';
      chakraLegend.style.right = 'auto';
      chakraLegend.style.marginBottom = '80px';
      chakraLegend.style.order = '-1';
    }
  } else {
    // Configuration pour desktop
    document.querySelectorAll(".chakra").forEach((chakra, index) => {
      chakra.style.width = "40px";
      chakra.style.height = "40px";
      chakra.style.transform = "translate(-50%, -50%)";
      
      // Utiliser les positions définies en CSS pour les grands écrans
      // Les positions sont déjà définies en pourcentage dans le CSS
    });
    
    // Configuration du conteneur pour desktop
    chakraTreeContainer.style.transform = "scale(1)";
    
    // Remettre la légende à sa position normale
    const chakraLegend = document.querySelector('.chakra-legend');
    if (chakraLegend) {
      chakraLegend.style.position = 'absolute';
      chakraLegend.style.top = '65%';
      chakraLegend.style.right = '2%';
      chakraLegend.style.marginBottom = '0';
      chakraLegend.style.order = 'unset';
    }
  }
}

// Check screen size on load and resize
window.addEventListener("load", checkScreenSize);
window.addEventListener("resize", checkScreenSize);

// Initialisation du filtrage des projets par catégories
const initProjectCategories = () => {
    const categoryBullets = document.querySelectorAll('.category-bullet');
    const projectCards = document.querySelectorAll('.work .card');
    
    console.log("Nombre de cartes trouvées:", projectCards.length);
    
    // Définir des catégories et des données pour les projets
    const categories = ['datascience', 'webdesign', 'community', 'design'];
    const projectData = [
        { 
            title: "Analyse prédictive des données clients", 
            category: "datascience", 
            description: "Développement d'un modèle prédictif pour anticiper les comportements d'achat client basé sur l'historique des transactions et les données démographiques. Implémentation avec Python, pandas et scikit-learn.",
            fullImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        { 
            title: "Segmentation des utilisateurs par clustering", 
            category: "datascience", 
            description: "Création d'un système de segmentation automatique des utilisateurs par méthodes de clustering non-supervisées (K-means, DBSCAN). Interface de visualisation avec Plotly et Dash.",
            fullImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        { 
            title: "Refonte de site e-commerce", 
            category: "webdesign", 
            description: "Refonte complète de l'expérience utilisateur et de l'interface d'un site e-commerce, incluant une optimisation mobile et une amélioration du tunnel de conversion. Technologies utilisées : HTML5, CSS3, JavaScript, React.",
            fullImage: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        { 
            title: "Portfolio d'artiste interactif", 
            category: "webdesign", 
            description: "Conception et développement d'un portfolio digital pour un artiste visuel, avec galerie interactive et animations sur mesure. Site construit avec Vue.js et GSAP pour les animations.",
            fullImage: "https://images.unsplash.com/photo-1462642109801-4ac2971a3a51?ixlib=rb-1.2.1&auto=format&fit=crop&w=1266&q=80"
        },
        { 
            title: "Campagne social media pour startup", 
            category: "community", 
            description: "Stratégie et mise en œuvre d'une campagne de communication sur les réseaux sociaux pour une startup tech, augmentant l'engagement de 300% en 3 mois. Planification de contenu avec Buffer et analyse avec Google Analytics.",
            fullImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        { 
            title: "Gestion de communauté pour événement tech", 
            category: "community", 
            description: "Animation de la communauté en ligne avant, pendant et après un événement tech majeur. Coordination des AMA (Ask Me Anything) avec les intervenants et modération du forum de discussion.",
            fullImage: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        { 
            title: "Modélisation 3D d'espace bureau", 
            category: "design", 
            description: "Conception 3D d'un espace de bureau moderne avec visualisation photo-réaliste. Réalisation sur Blender avec rendu en ray tracing pour un résultat ultra-réaliste.",
            fullImage: "https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        { 
            title: "Illustrations pour application éducative", 
            category: "design", 
            description: "Création d'une série d'illustrations vectorielles pour une application d'apprentissage destinée aux enfants. Design réalisé sur Adobe Illustrator avec une charte graphique ludique et inclusive.",
            fullImage: "https://images.unsplash.com/photo-1535556116002-6281ff3e9f36?ixlib=rb-1.2.1&auto=format&fit=crop&w=781&q=80"
        },
        { 
            title: "Dashboard de visualisation de données", 
            category: "datascience", 
            description: "Conception et implémentation d'un tableau de bord interactif pour la visualisation de données complexes en temps réel, facilitant la prise de décision pour les équipes marketing.",
            fullImage: "https://images.unsplash.com/photo-1518611507436-f9221403cca2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80"
        },
        { 
            title: "Application web de gestion de projet", 
            category: "webdesign", 
            description: "Développement d'une application web de gestion de projet avec fonctionnalités de tableau Kanban, suivi du temps et rapports analytiques. Stack technique : Node.js, Express, MongoDB et React.",
            fullImage: "https://images.unsplash.com/photo-1485815457792-d1a966f9bde0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        { 
            title: "Brand book pour entreprise tech", 
            category: "design", 
            description: "Création d'un guide de marque complet pour une entreprise tech, incluant logo, typographie, palette de couleurs et applications sur divers supports. Réalisé avec la suite Adobe.",
            fullImage: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        },
        { 
            title: "Stratégie d'engagement sur LinkedIn", 
            category: "community", 
            description: "Développement et exécution d'une stratégie de contenu B2B sur LinkedIn, augmentant le taux d'engagement de 250% et générant 30% de leads qualifiés supplémentaires.",
            fullImage: "https://images.unsplash.com/photo-1483546416237-76fd26bbcdd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        }
    ];
    
    // Attribuer les données aux cartes existantes
    projectCards.forEach((card, index) => {
        if (index < projectData.length) {
            const data = projectData[index];
            card.setAttribute('data-category', data.category);
            card.setAttribute('data-title', data.title);
            card.setAttribute('data-description', data.description);
            card.setAttribute('data-image', data.fullImage);
            
            // Mise à jour du contenu texte de la carte
            const workContent = card.querySelector('.work-content');
            if (workContent) {
                workContent.textContent = data.title;
            }
            
            // Mise à jour de l'image
            const workImg = card.querySelector('.work-img');
            if (workImg) {
                workImg.src = data.fullImage;
            }
        }
    });
    
    // Créer la popup
    createProjectPopup();
    
    // Ajouter les événements de clic sur les cartes
    projectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const title = card.getAttribute('data-title');
            const category = card.getAttribute('data-category');
            const description = card.getAttribute('data-description');
            const image = card.getAttribute('data-image');
            
            if (title && category && description && image) {
                showProjectPopup(title, category, description, image);
            }
        });
    });
    
    // Ajouter les événements de clic sur les filtres de catégorie
    if (categoryBullets.length > 0) {
        // Premier clic sur "Tous" pour initialiser l'affichage
        
        categoryBullets.forEach(bullet => {
            bullet.addEventListener('click', () => {
                console.log("Catégorie cliquée:", bullet.getAttribute('data-category'));
                
                // Supprimer la classe active de tous les bullets
                categoryBullets.forEach(b => b.classList.remove('active'));
                
                // Ajouter la classe active au bullet cliqué
                bullet.classList.add('active');
                
                const selectedCategory = bullet.getAttribute('data-category');
                console.log("Catégorie sélectionnée:", selectedCategory);
                
                // Nettoyage et force d'affichage des cartes
                projectCards.forEach(card => {
                    card.style.removeProperty('display');
                    card.style.removeProperty('visibility');
                    card.style.removeProperty('opacity');
                });

                // Filtrer les projets immédiatement
                projectCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    console.log("Carte:", card.getAttribute('data-title'), "- Catégorie:", cardCategory);
                    
                    if (selectedCategory === 'all' || cardCategory === selectedCategory) {
                        // Forcer l'affichage avec !important pour écraser toute autre valeur
                        card.style.setProperty('display', 'flex', 'important');
                        card.style.setProperty('visibility', 'visible', 'important');
                        card.style.setProperty('opacity', '1', 'important');
                        card.classList.add('appear');
                        console.log("Carte à afficher:", card.getAttribute('data-title'));
                    } else {
                        // Forcer le masquage avec !important
                        card.style.setProperty('display', 'none', 'important');
                        card.style.setProperty('visibility', 'hidden', 'important');
                        card.style.setProperty('opacity', '0', 'important');
                        card.classList.remove('appear');
                        console.log("Carte à masquer:", card.getAttribute('data-title'));
                    }
                });
                
                // Animation des bullets avec effet bump
                bullet.style.animation = 'none';
                setTimeout(() => {
                    bullet.style.animation = 'bump 0.5s ease-out';
                }, 10);
            });
        });
        
        // Déclencher le clic sur "Tous" pour initialiser l'affichage
        const allBullet = document.querySelector('.category-bullet[data-category="all"]');
        if (allBullet) {
            setTimeout(() => {
                allBullet.click();
            }, 200);
        }
    }
};

// Création de la popup
const createProjectPopup = () => {
    if (!document.getElementById('project-popup')) {
        const popup = document.createElement('div');
        popup.id = 'project-popup';
        popup.className = 'project-popup';
        popup.innerHTML = `
            <div class="popup-content">
                <span class="close-popup">&times;</span>
                <div class="popup-category"></div>
                <h2 class="popup-title"></h2>
                <div class="popup-body">
                    <div class="popup-image">
                        <img src="" alt="Project image">
                    </div>
                    <div class="popup-description"></div>
                </div>
                <div class="popup-navigation">
                    <button class="nav-prev" title="Projet précédent de la même catégorie">&#10094;</button>
                    <button class="nav-next" title="Projet suivant de la même catégorie">&#10095;</button>
                </div>
            </div>
        `;
        document.body.appendChild(popup);
        
        // Fermer la popup au clic sur la croix
        const closeBtn = popup.querySelector('.close-popup');
        closeBtn.addEventListener('click', () => {
            popup.classList.remove('active');
        });
        
        // Fermer la popup au clic en dehors du contenu
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                popup.classList.remove('active');
            }
        });
        
        // Navigation entre projets
        const prevBtn = popup.querySelector('.nav-prev');
        const nextBtn = popup.querySelector('.nav-next');
        
        prevBtn.addEventListener('click', () => {
            navigateProjects('prev');
        });
        
        nextBtn.addEventListener('click', () => {
            navigateProjects('next');
        });
    }
};

// Afficher la popup avec les détails du projet
const showProjectPopup = (title, category, description, image) => {
    const popup = document.getElementById('project-popup');
    
    // Sauvegarder les informations du projet courant pour la navigation
    popup.setAttribute('data-current-title', title);
    popup.setAttribute('data-current-category', category);
    
    // Mettre à jour le contenu
    popup.querySelector('.popup-title').textContent = title;
    
    // Formater la catégorie pour l'affichage
    let categoryDisplay = '';
    switch(category) {
        case 'datascience':
            categoryDisplay = 'Data Science';
            break;
        case 'webdesign':
            categoryDisplay = 'Web Design';
            break;
        case 'community':
            categoryDisplay = 'Community Management';
            break;
        case 'design':
            categoryDisplay = '2D/3D Design';
            break;
    }
    
    popup.querySelector('.popup-category').textContent = categoryDisplay;
    popup.querySelector('.popup-description').textContent = description;
    popup.querySelector('.popup-image img').src = image;
    
    // Afficher la popup avec animation
    popup.classList.add('active');
};

// Navigation entre projets de même catégorie
const navigateProjects = (direction) => {
    const popup = document.getElementById('project-popup');
    const currentCategory = popup.getAttribute('data-current-category');
    const currentTitle = popup.getAttribute('data-current-title');
    
    // Récupérer tous les projets de la même catégorie
    const projectsInCategory = Array.from(document.querySelectorAll(`.card[data-category="${currentCategory}"]`));
    
    if (projectsInCategory.length <= 1) return; // Pas de navigation si un seul projet
    
    // Trouver l'index du projet courant
    const currentIndex = projectsInCategory.findIndex(card => 
        card.getAttribute('data-title') === currentTitle
    );
    
    if (currentIndex === -1) return;
    
    // Calculer le nouvel index
    let newIndex;
    if (direction === 'next') {
        newIndex = (currentIndex + 1) % projectsInCategory.length;
    } else {
        newIndex = (currentIndex - 1 + projectsInCategory.length) % projectsInCategory.length;
    }
    
    // Récupérer les données du nouveau projet
    const nextProject = projectsInCategory[newIndex];
    const title = nextProject.getAttribute('data-title');
    const category = nextProject.getAttribute('data-category');
    const description = nextProject.getAttribute('data-description');
    const image = nextProject.getAttribute('data-image');
    
    // Mettre à jour la popup
    showProjectPopup(title, category, description, image);
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
    initProjectCategories(); // Initialiser le filtrage des projets

    // Détecter le scroll pour les animations
    window.addEventListener('scroll', scrollAppear);
};