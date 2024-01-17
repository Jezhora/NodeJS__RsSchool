// Develop a program that prompts the user to enter two numbers.
// It should add these numbers if executed with the -s  flag,
// or multiply them if executed with the -m flag. After performing the operation,
// the program should then terminate.
// Employ standard input/output streams for data input and output.
// Below is an example of how it should work (user input starts with >):

const { stdin, stdout, argv, exit } = process;
const flags = ['-m', '-s'];
const [multiple, summ] = flags;
const arg = argv[2];

if(!flags.includes(arg)) {
  stdout.write('Please add flag -m to multiple or -s to summ\n');
  exit();
}

stdout.write('Please, enter the two numbers\n>');

stdin.on('data', (data) => {
  const arrData = data.toString().trim().split(' ');
  const [num1, num2] = arrData.map(num => +num)

  if(arrData.some(num => Number.isNaN(+num))) {
    stdout.write('Please enter only numbers!\n');
    exit();
  }

  if (arrData.length !== 2) {
    stdout.write('Please enter two numbers through space\n');
    exit();
  }

  if (arg === multiple) {
    const mult = num1 * num2;
    stdout.write(`${num1} * ${num2} = ${mult}\n`);
    exit();
  }
  if (arg === summ) {
    const summ = num1 + num2;
    stdout.write(`${num1} + ${num2} = ${summ}\n`);
    exit();
  }
})