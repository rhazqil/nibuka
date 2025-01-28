document.querySelector('.cta-button').addEventListener('click', function() {
    alert('Selamat Datang!');
});
document.getElementById('goToPage').addEventListener('click', function() {
    // Pindah ke halaman lain dengan JavaScript
    window.location.href = "nada.html"; // Ganti dengan URL yang diinginkan
});
// Fungsi untuk scroll ke bagian konten
function scrollToContent() {
    document.getElementById('content').scrollIntoView({
        behavior: 'smooth'
    });
}
function checkAnswers() {
    // Store the correct answers
    const correctAnswers = {
        q1: 'C',
        q2: 'B',
        q3: 'B',
        q4: 'A',
        q5: 'B',
        q6: 'B',
        q7: 'C',
        q8: 'B',
        q9: 'A',
        q10: 'B'
    };

    // Get the user's answers from the form
    const form = document.getElementById('quizForm');
    let score = 0;
    let unanswered = false;

    // Loop through each question and check if any are unanswered
    for (let i = 1; i <= 10; i++) {
        const selectedAnswer = form.querySelector(`input[name="q${i}"]:checked`);
        
        // Check if the question is unanswered
        if (!selectedAnswer) {
            unanswered = true;
        } else {
            // Compare the selected answer with the correct answer
            if (selectedAnswer.value === correctAnswers[`q${i}`]) {
                score++;
            }
        }
    }

    // Show a message if there are unanswered questions
    const resultDiv = document.getElementById('result');
    const nextButton = document.getElementById('nextButton');
    const backButton = document.getElementById('backButton');
    if (unanswered) {
        resultDiv.innerHTML = "Tolong jawab dulu sebelum cek skor";
        resultDiv.style.color = 'red';
        nextButton.style.display = 'none'; // Hide "Lanjut" button if questions are unanswered
        backButton.style.display = 'none'; // Hide "Kembali" button
    } else {
        // Show the result
        resultDiv.innerHTML = `Your score: ${score} out of 10`;

        // Change the text color based on the score
        if (score === 10) {
            resultDiv.style.color = 'green';
        } else if (score >= 7) {
            resultDiv.style.color = 'orange';
        } else {
            resultDiv.style.color = 'red';
        }

        // Display the "Lanjut" and "Kembali" buttons
        nextButton.style.display = 'inline-block';
        backButton.style.display = 'inline-block';

        // Hide the quiz form after submitting
        form.style.display = 'none';

        // Disable all radio buttons after the quiz is completed
        disableQuiz();
    }
}

// Function to handle disabling the quiz (radio buttons)
function disableQuiz() {
    const form = document.getElementById('quizForm');
    const inputs = form.querySelectorAll('input[type="radio"]');

    // Loop through each radio button and disable it
    inputs.forEach(input => {
        input.disabled = true;
    });
}

// Function to handle "Lanjut" button click (you can add further logic for the next step)
function nextStep() {
    alert("Silahkan lanjut, tapi gada lanjutan karena belum update");
    // You can navigate to another page, or trigger any other action here
}

// Function to handle "Kembali" button click (go back to the questions)
function goBackToQuestions() {
    // Show the quiz form again
    const form = document.getElementById('quizForm');
    form.style.display = 'block';

    // Hide the result and buttons
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    resultDiv.style.color = 'black';

    // Enable all radio buttons again
    const inputs = form.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => {
        input.disabled = false;
    });

    // Hide the "Kembali" and "Lanjut" buttons when going back to the questions
    document.getElementById('nextButton').style.display = 'none';
    document.getElementById('backButton').style.display = 'none';
}
