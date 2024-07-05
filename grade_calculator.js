document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateGrade();
});

function calculateGrade() {
    const score = document.getElementById('score').value;
    let grade, gpa;

    if (score >= 80 && score <= 100) {
        grade = 'A+';
        gpa = "5.00";
    } else if (score >= 70 && score <= 79) {
        grade = 'A';
        gpa = "4.00";
    } else if (score >= 60 && score <= 69) {
        grade = 'A-';
        gpa = "3.50";
    } else if (score >= 50 && score <= 59) {
        grade = 'B';
        gpa = "3.00";
    } else if (score >= 40 && score <= 49) {
        grade = 'C';
        gpa = "2.00";
    } else if (score >= 33 && score <= 39) {
        grade = 'D';
        gpa = "1.00";
    } else if (score >= 0 && score <= 32) {
        grade = 'F';
        gpa = "0.00";
    } else {
        grade = 'Invalid';
        gpa = 'Invalid';
    }

    document.getElementById('result').innerHTML = `Grade: ${grade}, GPA: ${gpa}`;
}
