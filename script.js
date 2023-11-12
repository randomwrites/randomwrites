document.getElementById('submitStory').addEventListener('click', function() {
    var storyInput = document.getElementById('storyInput').value;
    if (storyInput.trim() !== '') {
        alert('Thank you for sharing your story!');
        // You can send the story to a server or perform other actions as needed.
    } else {
        alert('Please enter your story before submitting.');
    }
});
