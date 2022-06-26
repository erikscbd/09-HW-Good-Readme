// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}
  # Title
  ${response.title}

  # Description
  ${response.description}
  
  # Usage
  ${response.usage}

  # Installation
  ${response.installation}

  # Testing
  ${response.testing}

  # Contributors
  ${response.contributors}

  # License
  ${response.license}

  # Contact 
  ${response.email}

`
}

module.exports = generateMarkdown;
