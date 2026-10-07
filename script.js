// Task 1 - Age Checker

const ageButton = document.getElementById("ageButton");
const ageResult = document.getElementById("ageResult");

ageButton.addEventListener("click", function () {

    const age = Number(document.getElementById("age").value);

    if (age >= 18) {
        ageResult.textContent = "You are an adult.";
    } else {
        ageResult.textContent = "You are a minor.";
    }

    console.log(age);
});


// Task 2 - Number Checker

const numberButton = document.getElementById("numberButton");
const numberResult = document.getElementById("numberResult");

numberButton.addEventListener("click", function () {

    const number = Number(document.getElementById("number").value);

    if (number > 0) {
        numberResult.textContent = "Positive number";
    } else if (number < 0) {
        numberResult.textContent = "Negative number";
    } else {
        numberResult.textContent = "Zero";
    }

    console.log(number);
});


// Task 3 - Grade Checker

const gradeButton = document.getElementById("gradeButton");
const gradeResult = document.getElementById("gradeResult");

gradeButton.addEventListener("click", function () {

    const score = Number(document.getElementById("score").value);

    if (score < 0 || score > 100) {
        gradeResult.textContent = "Invalid score";
    } else if (score >= 90) {
        gradeResult.textContent = "Grade: A";
    } else if (score >= 80) {
        gradeResult.textContent = "Grade: B";
    } else if (score >= 70) {
        gradeResult.textContent = "Grade: C";
    } else if (score >= 60) {
        gradeResult.textContent = "Grade: D";
    } else {
        gradeResult.textContent = "Grade: F";
    }

    console.log(score);
});


// Task 4 - Even or Odd

const evenButton = document.getElementById("evenButton");
const evenResult = document.getElementById("evenResult");

evenButton.addEventListener("click", function () {

    const number = Number(document.getElementById("evenNumber").value);

    if (number % 2 === 0) {
        evenResult.textContent = "Even";
    } else {
        evenResult.textContent = "Odd";
    }

    console.log(number);
});


// Task 5 - Login Checker

const loginButton = document.getElementById("loginButton");
const loginResult = document.getElementById("loginResult");

loginButton.addEventListener("click", function () {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "123456") {
        loginResult.textContent = "Login successful";
    } else {
        loginResult.textContent = "Invalid username or password";
    }

    console.log(username);
    console.log(password);
});


// Task 6 - Ternary Operator

const ternaryButton = document.getElementById("ternaryButton");
const ternaryResult = document.getElementById("ternaryResult");

ternaryButton.addEventListener("click", function () {

    const age = Number(document.getElementById("ternaryAge").value);

    const result = age >= 18 ? "Adult" : "Minor";

    ternaryResult.textContent = result;

    console.log(result);
});


// Task 7 - Access Checker

const accessButton = document.getElementById("accessButton");
const accessResult = document.getElementById("accessResult");

accessButton.addEventListener("click", function () {

    const age = Number(document.getElementById("accessAge").value);

    const hasID = document.getElementById("hasID").checked;

    if (age >= 18 && hasID) {
        accessResult.textContent = "Access granted";
    } else {
        accessResult.textContent = "Access denied";
    }

    console.log(age);
    console.log(hasID);
});


// Bonus - Student Result Checker

const studentForm = document.getElementById("studentForm");
const studentResult = document.getElementById("studentResult");

studentForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const studentName = document.getElementById("studentName").value;
    const studentScore = Number(document.getElementById("studentScore").value);

    let grade;
    let status;

    if (studentScore < 0 || studentScore > 100) {

        studentResult.textContent = "Invalid score";

    } else {

        if (studentScore >= 90) {
            grade = "A";
        } else if (studentScore >= 80) {
            grade = "B";
        } else if (studentScore >= 70) {
            grade = "C";
        } else if (studentScore >= 60) {
            grade = "D";
        } else {
            grade = "F";
        }

        status = studentScore >= 60 ? "Passed" : "Failed";

        studentResult.textContent =
            "Student: " + studentName +
            " | Score: " + studentScore +
            " | Grade: " + grade +
            " | Status: " + status;

        console.log(studentName);
        console.log(studentScore);
        console.log(grade);
        console.log(status);
    }
});