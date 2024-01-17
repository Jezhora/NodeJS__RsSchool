// Develop a program that returns the path to the folder if it is launched
// with the -d flag, or the path to the file if it is launched
// with the -f flag. If the file is launched without a flag or
// with a flag other than those specified in the task,
// a suggestion to run the program with the -d or -f flag is displayed.

const { stdout, argv, exit } = process;
const flags = ['-d', '-f'];
const [folder, path] = flags;
const arg = argv[2];

switch(arg) {
  case folder:
    stdout.write(`${__dirname}\n`);
    break;
    case path:
      stdout.write(`${__filename}\n`);
      break;
      default:
        stdout.write('Run the program with the -d or -f flag\n');
}

