// Generate random password

let GeneratePassword = (length_of_password) => {
  const max = characters.length
  key = [];
  key.length = length_of_password;
  for ( let i = 0; i < length_of_password; i++ ){
    Index = Math.floor(Math.random() * max);
    key[i] = characters[Index];
    };
  return key
}

const characters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e',
                    'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
                    'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
                    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
                    'Y', 'Z', '!', '@', '#', '$', '%', '^', '&', '*'];
const result = GeneratePassword(8);
console.log(result.join(''));
