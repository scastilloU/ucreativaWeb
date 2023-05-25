const fs = require('fs');

// Read the JavaScript file
fs.readFile('app.js', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // File contents are stored in the `data` variable
  console.log('File contents:', data);
});
