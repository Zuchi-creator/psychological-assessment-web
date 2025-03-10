// JavaScript for processing form data and providing feedback
document.getElementById("assessmentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission (page reload)

    // Get the values from the form
    const q1Value = parseInt(document.getElementById("question1").value);
    const q2Value = parseInt(document.getElementById("question2").value);

    // Calculate the total score (you can adjust the calculation method based on your needs)
    const totalScore = q1Value + q2Value;

    // Provide feedback based on the score
    let feedback = "";
    if (totalScore <= 3) {
        feedback = "You're feeling quite relaxed. Keep up the good work!";
    } else if (totalScore <= 6) {
        feedback = "You might be feeling a bit stressed. Consider taking some time for relaxation.";
    } else if (totalScore <= 8) {
        feedback = "You're feeling quite stressed. It might help to reach out for support or try stress management techniques.";
    }

    // Show the feedback in the 'feedback' div
    document.getElementById("feedback").innerText = feedback;
});
