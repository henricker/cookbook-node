process.stdin.on('data', (data) => {
  //processing on each data event

  const name = data.toString().trim().toUpperCase();

  if(!name) {
    process.stderr.write('Invalid name\n');
  } else {
    process.stdout.write(`Hello ${name}!\n`);
  }

})