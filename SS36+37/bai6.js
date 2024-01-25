function createStudent() {
    let studentId = document.getElementById("studentId").value;
    let studentName = document.getElementById("studentName").value;
    let age = document.getElementById("age").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    let isValid = true;
    let errorMessage = "";


    if (studentId.length !== 6) {
        isValid = false;
        errorMessage += "Ma sinh vien phai co 6 ki tu. ";
    }

    if (studentName.trim() === "") {
        isValid = false;
        errorMessage += "Ten sinh vien khong duoc de trong. ";
    }


    if (age < 18) {
        isValid = false;
        errorMessage += "Tuoi phải lon hon hoac bang 18. ";
    }


    let phonePattern = /^\d{10}$/; 
    if (!phone.match(phonePattern)) {
        isValid = false;
        errorMessage += "So dien thoai khong hop le. ";
    }


    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!email.match(emailPattern)) {
        isValid = false;
        errorMessage += "Email khong hop le. ";
    }


    let studentInfo = document.getElementById("studentInfo");
    if (isValid) {
        let infoHTML =
            "<h3>Student Information</h3>" +
            "<p><strong>Student ID:</strong> " + studentId + "</p>" +
            "<p><strong>Student Name:</strong> " + studentName + "</p>" +
            "<p><strong>Age:</strong> " + age + "</p>" +
            "<p><strong>Phone:</strong> " + phone + "</p>" +
            "<p><strong>Email:</strong> " + email + "</p>";
        studentInfo.innerHTML = infoHTML;
        studentInfo.classList.remove("error");
    } else {
        studentInfo.innerHTML = errorMessage;
        studentInfo.classList.add("error");
    }
}