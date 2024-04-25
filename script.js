function addExperience() {
    const experienceSection = document.getElementById("experienceSection");
    const inputField = document.createElement("div");
    inputField.innerHTML = 
        <label for="experience">Experience:</label>
        <textarea name="experience" rows="4" required></textarea><br>
    ;
    experienceSection.appendChild(inputField);
}

document.getElementById("resumeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const summary = document.getElementById("summary").value;
    const experienceInputs = document.querySelectorAll("textarea[name='experience']");

    document.getElementById("outputName").textContent = fullName;
    document.getElementById("outputEmail").textContent = "Email: " + email;
    document.getElementById("outputPhone").textContent = "Phone: " + phone;
    document.getElementById("outputSummary").textContent = "Summary: " + summary;

    const outputExperience = document.getElementById("outputExperience");
    outputExperience.innerHTML = "";
    experienceInputs.forEach(input => {
        const listItem = document.createElement("li");
        listItem.textContent = input.value;
        outputExperience.appendChild(listItem);
    });

    document.getElementById("resumeOutput").classList.remove("hidden");
});