emailjs.init("7uEA7MqTvXv-HQy8h"); // Remplacez par votre clé publique EmailJS

            // Gestionnaire d'événements pour le formulaire
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault(); // Empêche le rechargement de la page

                // Récupérer les données du formulaire
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const message = document.getElementById('message').value;

                // Préparer les données pour EmailJS
                const templateParams = {
                    name: name,
                    email: email,
                    message: message
                };

                // Envoyer l'e-mail via EmailJS
                emailjs.send('portfolio', 'template_l566mfy', templateParams)
                    .then(function(response) {
                        alert('Email sent successfully!');
                    }, function(error) {
                        alert('Failed to send email. Please try again later.');
                        console.error('EmailJS error:', error);
                    });
            });            