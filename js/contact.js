const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        const subject = encodeURIComponent('Contact Form Submission from ' + name);
        const body = encodeURIComponent(
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Phone: ${phone}\n\n` +
            `Message:\n${message}`
        );
        
        window.location.href = `mailto:info@costtocost.com?subject=${subject}&body=${body}`;
        
        alert('Your message is being prepared. Your default email client will open.');
        
        contactForm.reset();
    });
}
