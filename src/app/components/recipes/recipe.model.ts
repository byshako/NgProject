export class Recipe {
    public name: string;
    public descriptions: string;
    public imagePath: string;

    constructor(name: string, description: string, imagePath: string) {
        this.name = name;
        this.descriptions = description;
        this.imagePath = imagePath;
    }
}