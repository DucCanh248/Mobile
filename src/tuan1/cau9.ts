interface Animal {
  name: string;
  sound(): void;
}

const dog: Animal = {
  name: "Cún",
  sound() {
    console.log(`${this.name} sủa: Gâu gâu!`);
  },
};

dog.sound();