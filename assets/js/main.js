document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    // Toggle mobile navigation menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

const sendEmail = () => {
    event.preventDefault();

    const formData = {
        name: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        isClient: document.getElementById('isClient').value,
        message: document.getElementById('message').value
    };

    emailjs.send(
        'service_g31m1rc',
        'template_gp02ugl',
        {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            is_client: formData.isClient,
            message: formData.message,
            to_email: 'madhavanperiyasamy09@gmail.com'
        }
    ).then((response) => {
        alert('The message has been sent successfully!');
        document.getElementById('contactForm').reset();
    },
        (error) => {
            alert('An error occurred while sending. Please try again.');
            console.error('Email failed to send:', error);
        }
    );

    return false;
}
