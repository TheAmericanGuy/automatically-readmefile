// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === 'None'){
    return '';
  }
  return `![License](https://img.shields.io/badge/license-${encodeURIComponent(license)}-green)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === 'None') {
    return '';
  }

  const licenseLinks = {
    MIT: 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    GPL: 'https://www.gnu.org/licenses/gpl-3.0',
  };

  return licenseLinks[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'None') {
    return '';
  }

  const licenseLink = renderLicenseLink(license);
  return `## License

This project is licensed under the ${license} license.  
For more information, please visit [this link](${licenseLink}).
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}
  
  - **What was your motivation?**  
    ${data.motivation || 'N/A'}
  
  - **Why did you build this project?**  
    ${data.reason || 'N/A'}
  
  - **What problem does it solve?**  
    ${data.solution || 'N/A'}
  
  - **What did you learn?**  
    ${data.learned || 'N/A'}
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.use}
  
  ## Credits
  
  ${data.credits || 'List your collaborators, third-party assets, or tutorials here.'}
  
  ${renderLicenseSection(data.license)}
  
  ${data.features ? `## Features\n\n${data.features}` : ''}
  
  ${data.contribution ? `## How to Contribute\n\n${data.contribution}` : ''}
  
  `;
}

export default generateMarkdown;
