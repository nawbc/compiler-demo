import { LexicalError } from "../helper/error";
import { generateToken } from "../utils/generateToken";

// import name from '';

const relOpLexical = function (srcCode: string, index: number) {
  let state = 0;
  let op = '';

  while (true) {
    const char = srcCode[index++];
    op += char;

    switch (state) {
      case 0: {
        switch (char) {
          case '+':
            state = 1;
            break;
          case '-':
            state = 2;
            break;
          case '*':
            state = 3;
            break;
          case '=':
            state = 4;
            break;
          case '!':
            state = 5;
            break;
          case '&':
            state = 6;
            break;
          case '|':
            state = 7;
            break;
          case '^':
            state = 8;
            break;
          case '/':
            state = 9;
            break;
          case '<':
            state = 10;
            break;
          case '>':
            state = 11;
            break;
          case '%':
          case '~':
          case '[':
          case ']':
          case '{':
          case '}':
          case ';':
          case '?':
          case ':':
            generateToken('operator', op);
            break;
          default:
            throw new LexicalError(`${char} is not a relation operator`)
        }
      };
        break;
      // relation operator
      case 1: {
        if (char === '=') {
          generateToken('operator', '+=');
        } else {
          generateToken('operator', (char === '+') ? '++' : '+');
        }
      }
        break;
      case 2:
        if (char === '=') {
          generateToken('operator', '-=');
        } else {
          generateToken('operator', (char === '-') ? '--' : '-');
        }
        break;
      case 3:
        if (char === '=') {
          generateToken('operator', '*=');
        } else {
          generateToken('operator', (char === '*') ? '**' : '*');
        }
        break;
      case 4: {
        if (char === '=') {
          state = 12;
        } else {
          generateToken('operator', '=');
        }
      }
        break;
      case 5:
        if (char === '=') {
          state = 13;
        } else {
          generateToken('operator', '!');
        }
        break;
      case 6:
        generateToken('operator', (char === '&') ? '&&' : '&');
        break;
      case 7:
        generateToken('operator', (char === '|') ? '||' : '|');
        break;
      case 8:
        generateToken('operator', (char === '=') ? '^=' : '^');
        break;
      case 9:
        generateToken('operator', (char === '=') ? '/=' : '/');
        break;
      case 10:
        generateToken('operator', (char === '=') ? '>=' : '>');
        break;
      case 11:
        generateToken('operator', (char === '=') ? '<=' : '<');
        break;
      case 12:
        generateToken('operator', (char === '=') ? '===' : '==');
        break;
      case 12:
        generateToken('operator', (char === '=') ? '!==' : '!=');
        break;
      default:
        throw new LexicalError(`${char} is not a relation operator`)
    }
  }
}

export default relOpLexical;