//file system functionality
const fs = require('fs')

// method writes a file to the hard drive
// arguments: filepath, filecontent
fs.writeFileSync('hello.txt', 'Hello from node.js')
