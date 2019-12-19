export const getValidNumber = param => {
  const charToNumber = char => {
    switch (char) {
      case 'a':
        return 1223;

      case 'b':
        return 2234;

      case 'c':
        return 367;

      case 'd':
        return 4656;

      case 'e':
        return 56546;

      case 'f':
        return 65775;

      case 'g':
        return 77575;

      case 'h':
        return 89789;

      case 'i':
        return 99789;

      case 'j':
        return 17890;

      case 'k':
        return 17891;

      case 'l':
        return 1789;

      case 'm':
        return 7981;

      case 'n':
        return 1789;

      case 'o':
        return 1789;

      case 'p':
        return 1789;

      case 'q':
        return 1789;

      case 'r':
        return 78761;

      case 's':
        return 1677;

      case 't':
        return 1457;

      case 'u':
        return 1457;

      case 'v':
        return 1577;

      case 'x':
        return 1963;

      case 'z':
        return 13963;

      default:
        return 15;
    }
  };

  const numberValidForQuery = param => {
    while (param >= 802) {
      param /= 2;
    }
    return param;
  };

  if (Number.isInteger(param * 1)) {
    if (param <= 0 || param > 802) {
      console.log(Math.ceil(numberValidForQuery(param)).toString());
      return Math.ceil(numberValidForQuery(param)).toString();
    }
  } else {
    let total = 0;
    param.split('').map(char => (total += charToNumber(char)));
    console.log(Math.ceil(numberValidForQuery(total)).toString());
    return Math.ceil(numberValidForQuery(total)).toString();
  }
  return param;
};
