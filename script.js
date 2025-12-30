function toggleSkill() {
    // Get the skill paragraph and button
    const skillText = document.getElementById('skillText');
    const button = document.getElementById('skillButton');

    // Check current state and toggle
    if (skillText.style.display === "none" || skillText.style.display === "") {
        skillText.style.display = "block"; // show skill
        skillText.textContent = " Coding and Design 💻✨";
        button.textContent = "Hide Skill ";
    } else {
        skillText.style.display = "none"; // hide skill
        skillText.textContent = "";
        button.textContent = "Show Skill ";
    }
}