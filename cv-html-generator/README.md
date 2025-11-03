# CV HTML Generator

This project is a CV HTML generator that takes structured data from a JSON file and generates a styled HTML representation of a CV.

## Project Structure

```
cv-html-generator
├── src
│   ├── CV.json          # Contains structured data for the CV
│   ├── template.html     # HTML template for rendering the CV
│   └── styles.css        # Styles for the HTML template
├── scripts
│   └── generate.js       # Logic to read CV.json and generate HTML
├── package.json          # npm configuration file
├── .gitignore            # Files and directories to ignore in Git
└── README.md             # Project documentation
```

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd cv-html-generator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Generate the CV:**
   Run the following command to generate the CV HTML:
   ```bash
   node scripts/generate.js
   ```

4. **Open the generated HTML file:**
   The generated HTML file will be located in the `dist` directory (or wherever your script outputs the file). Open it in your browser to view your CV.

## Customization

- Modify `src/CV.json` to update your personal information, education, work experience, and skills.
- Adjust `src/template.html` to change the layout or structure of the CV.
- Update `src/styles.css` to customize the appearance of the CV.

## License

This project is licensed under the MIT License.