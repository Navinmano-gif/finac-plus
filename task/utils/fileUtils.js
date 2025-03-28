
const fs = require('fs').promises;

async function writeToFile(fileName, data) {
  try {
    
    await fs.appendFile(fileName, data);
    console.log(`Data written to file: ${fileName}`);
  } catch (err) {
    console.error('Error writing to file:', err);
  }
}

module.exports = { writeToFile };
