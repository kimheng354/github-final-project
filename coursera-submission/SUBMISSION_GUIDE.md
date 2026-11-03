# IBM Full Stack Software Developer Final Project: Submission Guide

This guide provides the exact answers, files, and screenshots to submit for each task in your Coursera peer-graded assignment.

---

## Quick Reference Table

| Coursera Task | Required Deliverable | Local File to Use |
| :--- | :--- | :--- |
| **Task 1** | Complete `index.html` code | `coursera-submission/task1_index.html` (or `index.html`) |
| **Task 2** | `style.css` code OR GitHub repository / Pages link | `coursera-submission/task2_style.css` / `coursera-submission/task2_requirements.md` |
| **Task 3** | Complete `script.js` code | `coursera-submission/task3_script.js` (or `script.js`) |
| **Task 4** | Webpage functionality screenshot (`functionality.png`) | `coursera-submission/functionality.png` |
| **Task 5** | New recommendation screenshot (`new_recommendation.png`) | `coursera-submission/new_recommendation.png` |

---

## Detailed Task-by-Task Submission Instructions

### Task 1 — `index.html`
- **What to do:** In the Task 1 text submission field, copy and paste the full contents of `coursera-submission/task1_index.html`.
- **Criteria Verified:**
  - Name: "Kimheng Bonly" prominently in the top-left corner.
  - Professional title: "Software Developer".
  - Contact info with icons: email and phone placeholder.
  - Navigation bar with working scroll links to `#about-me`, `#skills`, `#projects`, and `#recommendations`.
  - About Me section with welcome heading and exact required bio.
  - Skills section displaying at least 5 skills with official logos.
  - Projects section displaying 3 distinct projects.
  - Recommendations section displaying 3 initial testimonials.
  - Recommendation submission form with matching IDs (`new_recommendation`, `recommend_btn`, `all_recommendations`, `popup`).
  - Actionable floating Home SVG icon in the bottom-right corner.

---

### Task 2 — Existing Project Requirements / `style.css`
- **What to do:**
  - If your Coursera form asks for **CSS code**, paste the full contents of `coursera-submission/task2_style.css`.
  - If your Coursera form asks for **GitHub links**, paste your repository URL (`https://github.com/kimheng354/github-final-project`) and your GitHub Pages URL (`https://kimheng354.github.io/github-final-project/`).
- Refer to `coursera-submission/task2_requirements.md` for both formats.

---

### Task 3 — `script.js`
- **What to do:** In the Task 3 text submission field, copy and paste the contents of `coursera-submission/task3_script.js`.
- **Criteria Verified:**
  - Function `addRecommendation()` validates that the message is not empty.
  - Uses `textContent` safely for user-generated text to prevent HTML injection (XSS protection).
  - Appends the new recommendation to `document.getElementById("all_recommendations")`.
  - Clears the form textarea after submission.
  - Invokes `showPopup(true)` **only after** the recommendation is successfully added.
  - Empty submissions do not trigger the popup.
  - Function `showPopup(bool)` manages visibility and display of the confirmation popup.

---

### Task 4 — `functionality.png`
- **What to do:** Upload the image file: `coursera-submission/functionality.png`.
- **Criteria Verified:**
  - Personalized name "Kimheng Bonly" in the top-left corner.
  - Navigation links for About Me, Skills, Project Details, and Recommendations.
  - Updated About Me text and waving hand icon.
  - At least five properly formatted skills with logos (HTML5, CSS3, JavaScript, React.js, Node.js, IBM Cloud).

---

### Task 5 — `new_recommendation.png`
- **What to do:** Upload the image file: `coursera-submission/new_recommendation.png`.
- **Criteria Verified:**
  - Visible "Recommendations" section.
  - Shows the 3 initial recommendations alongside the newly added 4th recommendation card.
  - Demonstrates that `addRecommendation()` successfully appended user input to the list.
