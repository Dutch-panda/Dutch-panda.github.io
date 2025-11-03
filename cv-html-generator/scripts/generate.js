const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const cvDataPath = path.join(__dirname, '../src/CV.json');
const templatePath = path.join(__dirname, '../src/template.html');
const outputDir = path.join(__dirname, '../output');
const outputPath = path.join(outputDir, 'CV.html');
const outputCssPath = path.join(outputDir, 'styles.css');
const srcCssPath = path.join(__dirname, '../src/styles.css');

// Read CV data from JSON file
fs.readFile(cvDataPath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading CV data:', err);
        return;
    }

    let cvData;
    try {
        cvData = JSON.parse(data);
    } catch (e) {
        console.error('Invalid JSON in CV.json:', e);
        return;
    }

    // Read HTML template
    fs.readFile(templatePath, 'utf8', (err, template) => {
        if (err) {
            console.error('Error reading template:', err);
            return;
        }

        // Render HTML with CV data
        const htmlOutput = ejs.render(template, { cv: cvData, date: new Date().toLocaleDateString() });

        // Ensure output dir exists
        fs.mkdir(outputDir, { recursive: true }, (err) => {
            if (err) {
                console.error('Error creating output directory:', err);
                return;
            }

            // Write HTML
            fs.writeFile(outputPath, htmlOutput, (err) => {
                if (err) {
                    console.error('Error writing output HTML:', err);
                } else {
                    console.log('CV HTML generated successfully:', outputPath);
                }
            });

            // Copy CSS to output
            fs.copyFile(srcCssPath, outputCssPath, (err) => {
                if (err) {
                    console.error('Error copying CSS to output:', err);
                } else {
                    console.log('CSS copied to output:', outputCssPath);
                }
            });
        });
    });
});