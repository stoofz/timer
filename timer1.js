const args = process.argv.slice(2);

if (args.length === 0) {
  return;
}

for (const timeValue of args) {

  if ((timeValue < 0) || (isNaN(timeValue))) {
    continue;
  }

  setTimeout(() => process.stdout.write('\x07'), timeValue * 1000);
}