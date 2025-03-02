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
            document.querySelector('.chakra-tree').style.opacity = '1';
        };
        treeImg.onerror = function() {
            console.error("Erreur de chargement de l'image de l'arbre");
            // Fallback en cas d'erreur de chargement
            document.querySelector('.chakra-tree').style.background = '#000';
        };
        treeImg.src = 'arbre.png';
    }

    // Animation pulse décalée pour chaque chakra
    chakras.forEach((chakra, index) => {
        // S'assurer que les chakras sont visibles
        chakra.style.display = 'block';
        chakra.style.animationDelay = `${index * 0.2}s`;

        // Position dynamique des tooltips en fonction de la position du chakra
        chakra.addEventListener('mouseenter', () => {
            const tooltip = chakra.querySelector('.tooltip');
            const rect = chakra.getBoundingClientRect();

            // Positionner les tooltips selon la position du chakra
            if (rect.left > window.innerWidth / 2) {
                // Chakra à droite de l'écran
                tooltip.style.left = 'auto';
                tooltip.style.right = 'calc(100% + 20px)';
                tooltip.style.top = '50%';
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
        });
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
        typingElement.textContent = '';

        // Animation par CSS plutôt que JS pour plus de performance
        typingElement.textContent = originalText;
        typingElement.style.visibility = 'visible';
    }
}

// Initialisation des animations sociales
const initSocialAnimations = () => {
    const socialLinks = document.querySelectorAll('.social-media a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            const icon = link.querySelector('i');
            if (icon) {
                icon.style.transform = 'translateY(-5px) scale(1.2)';
                icon.style.transition = 'transform 0.3s ease, color 0.3s ease';
            }
        });

        link.addEventListener('mouseleave', () => {
            const icon = link.querySelector('i');
            if (icon) {
                icon.style.transform = 'translateY(0) scale(1)';
            }
        });
    });
}


// Initialisation de toutes les animations
window.onload = () => {
    navSlide();
    scrollAppear();
    matrix();
    initChakras();
    initTypingEffect();
    initSocialAnimations(); // Added social animation initialization

    // Détecter le scroll pour les animations
    window.addEventListener('scroll', scrollAppear);
};