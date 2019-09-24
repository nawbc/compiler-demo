export class LexicalError extends Error {
  constructor(msg: string | undefined) {
    super(msg);
  }
}