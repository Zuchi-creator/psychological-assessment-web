// JavaScript for processing form data and providing feedback
document.getElementById("assessmentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission (page reload)

    // Get the values from the form
    const q1Value = parseInt(document.getElementById("question1").value);
    const q2Value = parseInt(document.getElementById("question2").value);
    const q3Value = parseInt(document.getElementById("question3").value);
    const q4Value = parseInt(document.getElementById("question4").value);
    const q5Value = parseInt(document.getElementById("question5").value);
    

    // Calculate the total score (you can adjust the calculation method based on your needs)
    const totalScore = q1Value + q2Value + q3Value + q4Value + q5Value;

    // Provide feedback based on the score
    let feedback = "";
    if (totalScore <= 20) {
        feedback = "You're feeling quite relaxed. Keep up the good work!";
    } else if (totalScore <= 6) {
        feedback = "You might be feeling a bit stressed. Consider taking some time for relaxation.";
    } else if (totalScore <= 15) {
        feedback = "You're feeling quite stressed. It might help to reach out for support or try stress management techniques.";
    }

    // Show the feedback in the 'feedback' div
    document.getElementById("feedback").innerText = feedback;
});
