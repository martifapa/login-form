// elements
const inputs = document.querySelectorAll('input');

// event listeners
inputs.forEach(input => input.addEventListener('focus', activateLabelAnimation));
inputs.forEach(input => input.addEventListener('focusout', activateLabelAnimation));

// functions
function activateLabelAnimation(e) {
    const elementId = e.target.id;
    const label = document.querySelector(`label[for="${elementId}"]`);
    
    label.classList.toggle('focused');

    // remove label text if input has content
    if (e.target.value) {
        setTimeout(() => label.textContent = '', 300);
    } else {
        ''
    }
}