const { stdin, stdout, argv, exit } = process;
stdout.write('Please, enter the two numbers\n');

stdin.on('data', (data) => {
  const arrData = data.toString().trim().split(' ');
  const [num1, num2] = arrData.map(num => +num)
  const flags = ['-m', '-s'];
  const [multiple, summ] = flags;
  const arg = argv.slice(2).toString();

  if(!flags.includes(arg)) {
    stdout.write('Please add flag -m to multiple or -s to summ\n');
    exit();
  }

  if(!flags.includes(arg)) {
      stdout.write('Please add flag -m to multiple or -s to summ\n');
      exit();
  }

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
    stdout.write(`${num1} * ${num2} = ${mult}`);
    exit();
  }
  if (arg === summ) {
    const summ = num1 + num2;
    stdout.write(`${num1} + ${num2} = ${summ}`);
    exit();
  }

})