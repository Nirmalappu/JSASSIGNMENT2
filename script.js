
const transformString = (str) => {
    return str
      .split('')
      .map((char, index) => `${index}${char.toUpperCase()}`)
      .join('');
  };
  
  const userInput = prompt("Enter a string:");

  document.write(transformString(userInput));
  