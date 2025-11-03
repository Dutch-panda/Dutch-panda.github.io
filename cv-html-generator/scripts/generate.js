const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const cvDataPath = path.join(__dirname, '../src/CV.json');
const templatePath = path.join(__dirname, '../src/template.html');
const outputPath = path.join(__dirname, '../output/CV.html');

// Read CV data from JSON file
fs.readFile(cvDataPath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading CV data:', err);
        return;
    }

    const cvData = JSON.parse(data);

    // Read HTML template
    fs.readFile(templatePath, 'utf8', (err, template) => {
        if (err) {
            console.error('Error reading template:', err);
            return;
        }

        // Render HTML with CV data
        const htmlOutput = ejs.render(template, { cv: cvData });

        // Write the output HTML to a file
        fs.mkdir(path.dirname(outputPath), { recursive: true }, (err) => {
            if (err) {
                console.error('Error creating output directory:', err);
                return;
            }

            fs.writeFile(outputPath, htmlOutput, (err) => {
                if (err) {
                    console.error('Error writing output HTML:', err);
                } else {
                    console.log('CV HTML generated successfully:', outputPath);
                }
            });
        });
    });
});