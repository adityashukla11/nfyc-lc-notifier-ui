export class NfycLcUser {
  constructor(
    public readonly fullname: string,
    public readonly lcUsername: string,
    public readonly email: string,
  ) {}

  static getNfycUser(fullName: string, lcUsername: string, email: string) {
    return new NfycLcUser(fullName, lcUsername, email);
  }
}
