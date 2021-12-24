// Validate person name

const isValid = (username) => {
  if (
    !username ||
    username === "" ||
    typeof username !== "string" ||
    username.length === 0 ||
    !username.includes(" ")
  ) {
    return false;
  }

  {
    for (char of username) {
      if (char === " ") {
        continue;
      }

      if (
        char.toLowerCase().charCodeAt(0) <= 97 &&
        char.toLowerCase().charCodeAt(0) >= 122
      ) {
        return false;
      }
    }

    return true;
  }
};

const result = isValid("Mark Last");
console.log(result);
