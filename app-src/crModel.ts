export class CrModel {

  private id: string;
  private name: string;
  private time: Date;

  constructor(name: string) {
    this.name = name;
    this.id = this.getRandomNumber();
    this.time = new Date();
  }

  getRandomNumber(): string {
    return "ID" + Math.floor(Math.random() * (1000 - 1) + 1) + "-" + Math.floor(Math.random() * (1000 - 1) + 1);
  }

  getName(): string {
    return this.name;
  }
}
