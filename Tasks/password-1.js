// Generate random password

let GeneratePassword = ( length ) => {
  const MAX = characters.length
  key = '';
  for ( let i = 0; i < length; i++ ){
    Index = Math.floor(Math.random() * MAX);
    key = key + characters[Index];
  };
  return key
}
const characters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
                    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D',
                    'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
                    'Y', 'Z', '!', '@', '#', '$', '%', '^', '&', '*'];
const result = GeneratePassword(7);
console.log(result);
