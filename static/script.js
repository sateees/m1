function submitQuiz() {
    // Send responses to the server as JSON
    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(responses)
    }).then(response => {
        if (response.ok) {
            // Successful response (status code 200-299)
            response.json().then(data => {
                const prediction = data.prediction;
                predictionResult(prediction);
                });
        } else {
            alert('Error submitting survey.');
        }
    }).catch(error => {
        console.error('Error:', error);
        alert('Error submitting survey.');
    });
}
