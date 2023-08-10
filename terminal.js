const { exec } = require('child_process');

// Command to be executed
const command = 'your-command';

// Input string to be provided
const input = 'your-input';

// Execute the command
const child = exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log(`Output: ${stdout}`);
});

// Provide input to the command
child.stdin.write(input);
child.stdin.end();
