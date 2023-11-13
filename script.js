document.addEventListener('DOMContentLoaded', function () {
    const opinionForm = document.getElementById('opinion-form');

    opinionForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const opinionText = document.getElementById('opinion').value;
        const nameText = document.getElementById('name').value;

        // For simplicity, you can log the opinion to the console.
        console.log(`Opinion: ${opinionText}\nName: ${nameText}`);

        // You can send this data to the server using AJAX or fetch API.
        // For this example, we'll just log it to the console.
    });
});
