import { relOp_lexical, num_lexical } from './lexical';
// import { LexicalError } from './helper/error';
import { Token } from './utils/generateToken';

// auto >= x + 1;
const test_str = '>=';
const Lexer = function (srcCode: string, index: number) {
  let i: number = 0;
  let tokens: Token[] = [];
  while (i < srcCode.length) {
    const char = srcCode[i];

    if (char.match(/[+-\\*/&|=!;()]/)) {
      const token: Token = relOp_lexical(srcCode, i);
      i += token.value.length;
      tokens.push(token);
    }

    if (char === ' ') {
      i++;
    }
  }
}
const token = Lexer(test_str, 0);



