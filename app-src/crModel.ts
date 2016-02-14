
/**
 * Class to define CR Model bean
 */
export class CrModel {
  // unique id
  private id: string;
  // CR name
  private name: string;
  // CR Date of creation
  private time: Date;

  constructor(name: string) {
    this.name = name;
    this.id = this.getRandomNumber();
    this.time = new Date();
  }
  // Method to generate random string
  getRandomNumber(): string {
    return "ID" + Math.floor(Math.random() * (1000 - 1) + 1) + "-" + Math.floor(Math.random() * (1000 - 1) + 1);
  }
  // Getter for name
  getName(): string {
    return this.name;
  }
}
