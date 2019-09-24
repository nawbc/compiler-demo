type TokenType = 'id' | 'keywords ' | 'number' | 'operator';

export interface Token {
  type: TokenType;
  value: string
}

export const generateToken = function (type: TokenType, value: string): Token {
  return { type, value }
}