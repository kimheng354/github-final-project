# Personal Portfolio Website — IBM Full Stack Software Developer Final Project

A responsive, accessible personal portfolio website built with semantic **HTML5**, modern **CSS3**, and vanilla **JavaScript** as part of the IBM Full Stack Software Developer Professional Certificate on Coursera.

Live Demo: [https://kimheng354.github.io/github-final-project/](https://kimheng354.github.io/github-final-project/)

---

## Portfolio Sections & Features

1. **Header & Navigation Bar (`#home`)**
   - Developer branding: **Kimheng Bonly — Software Developer**.
   - Contact details with direct `mailto:` email and phone placeholders using relative image assets.
   - Smooth navigation scroll links targeting `#about-me`, `#skills`, `#projects`, and `#recommendations`.
   - Hover transition and underline animations.

2. **About Me (`#about-me`)**
   - Personalized greeting and waving-hand animation.
   - Professional bio introducing expertise in frontend development, modern web applications, and digital business systems.
   - Clean profile avatar illustration.

3. **Skills Showcase (`#skills`)**
   - 6 technical competencies with official logos and experience metrics:
     - HTML5 (2 years experience)
     - CSS3 (2 years experience)
     - JavaScript (2 years experience)
     - React.js (1.5 years experience)
     - Node.js (1.5 years experience)
     - IBM Cloud (1 year experience)
   - Interactive skill cards with hover elevation and box shadows.

4. **Projects (`#projects`)**
   - **Project 1 — Personal Portfolio Website**: Responsive portfolio built with HTML, CSS, and JavaScript.
   - **Project 2 — Task Management Application**: Web application for tracking daily productivity and activities.
   - **Project 3 — Learning Portal**: Modular platform for digital training materials and documentation.

5. **Recommendations & Interactive Form (`#recommendations`, `#contact`)**
   - Pre-loaded with 3 professional testimonials featuring quote styling.
   - Interactive recommendation submission form with live client-side validation.
   - Secure DOM manipulation using `textContent` to prevent HTML injection / XSS vulnerabilities.
   - Confirmation dialog popup (`#popup`) displayed only upon successful submission and dismissed via the "Ok" button.

6. **Floating Action Button (`.iconbutton`)**
   - Fixed SVG scroll-to-top button with hover elevation and smooth scroll back to `#home`.

---

## Project Structure

```text
IBM_lab/
├── index.html                 # Core portfolio structure and semantic markup
├── style.css                  # Modern stylesheet, typography, and responsive rules
├── script.js                  # Dynamic DOM scripting and popup controllers
├── README.md                  # Project documentation and deployment guide
├── html_finalprojimages/      # Local image assets and technology logos
│   ├── avatar.svg             # Developer profile avatar
│   ├── bullet.png
│   ├── checkmark--outline.svg # Submission confirmation checkmark
│   ├── CSS3.png               # CSS3 logo
│   ├── envelope.png           # Contact email icon
│   ├── flash.png
│   ├── home.png
│   ├── html5.png              # HTML5 logo
│   ├── IBM_Cloud.png          # IBM Cloud logo
│   ├── java.png
│   ├── js.jpeg                # JavaScript logo
│   ├── node.png               # Node.js logo
│   ├── phone.png              # Contact phone icon
│   ├── react.png              # React.js logo
│   ├── tailwindcss.svg
│   └── waving-hand.png        # Welcome waving hand icon
└── coursera-submission/       # Coursera peer-graded submission package
    ├── functionality.png      # Real browser screenshot showing core features
    ├── new_recommendation.png # Real browser screenshot showing new recommendation
    ├── task1_index.html       # HTML code for Task 1
    ├── task2_style.css        # CSS code for Task 2
    ├── task2_requirements.md  # Detailed Task 2 submission instructions
    ├── task3_script.js        # JavaScript code for Task 3
    └── SUBMISSION_GUIDE.md    # Step-by-step submission guide for Coursera
```

---

## Local Development & Testing

No external dependencies or package managers are required.

To run the website locally:
1. Double-click `index.html` to open it directly in any modern browser.
2. Or serve it via any static HTTP server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   ```
   Open `http://localhost:8000` in your browser.

---

## Deployment to GitHub Pages

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "Complete IBM Full Stack Portfolio Website Final Project"
   git push origin main
   ```
2. Navigate to your repository on GitHub.
3. Open **Settings** > **Pages**.
4. Set **Source** to `Deploy from a branch`.
5. Select branch `main` and folder `/ (root)`, then click **Save**.
6. The deployed site will be available at:
   `https://<username>.github.io/<repository-name>/`

---

## License

This project is created for educational purposes as part of the IBM Full Stack Software Developer Professional Certificate on Coursera.
