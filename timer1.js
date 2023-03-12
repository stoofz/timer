const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Time value required');
  return;
}

for (const timeValue of args) {

  if ((timeValue < 0) || (isNaN(timeValue))) {
    continue;
  }

  setTimeout(() => {
    process.stdout.write('\x07'); console.log(`Beep at ${timeValue} seconds`);
  }, timeValue * 1000);
}
