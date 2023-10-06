export class Project {
  public name: string;
  public description: string;
  public imagePath: string;
  public link: string;

  constructor(name: string, desc: string, imagePath: string, link: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.link = link;
  }
}
