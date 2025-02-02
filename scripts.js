document.addEventListener('DOMContentLoaded', function() {
    const teacherImages = document.querySelectorAll('.teacher-image');
    const teacherNames = document.querySelectorAll('.teacher-name');

    // Attach click event listeners to images
    teacherImages.forEach(image => {
        image.addEventListener('click', function() {
            const teacherItem = this.closest('.teacher-item');
            console.log('Clicked on teacher image:', teacherItem.querySelector('h3').textContent);
        });
    });

    // Attach click event listeners to names
    teacherNames.forEach(name => {
        name.addEventListener('click', function() {
            const teacherItem = this.closest('.teacher-item');
            console.log('Clicked on teacher name:', this.textContent);
        });
    });
});