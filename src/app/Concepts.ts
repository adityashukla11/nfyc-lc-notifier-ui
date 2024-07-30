export class Concept {
  constructor(
    public readonly email: string,
    public readonly conceptTitle: string,
    public readonly conceptDescription: string,
    public readonly priority: number
  ) {}

  static getConcept(email: string, conceptTitle: string, conceptDescription: string, priority: number) {
    return new Concept(email, conceptTitle, conceptDescription, priority);
  }
}

