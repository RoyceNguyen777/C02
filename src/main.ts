import { question } from "readline-sync";
import { IPlayer, IPropsName } from "./types";

const player: IPlayer = {
  id: 1,
  name: "",
  gender: true,
  yearOfBirth: 0,

  input() {
    this.name = question("Name: ");
    this.gender = !question("Gender: ");
    this.yearOfBirth = +question("Years: ");
  },

  output(propsName: any) {
    switch (propsName) {
      case IPropsName["*"]:
        console.log(propsName, this);

      default:
        console.log(propsName, this[propsName as keyof IPlayer]);
    }
  },
  getAge() {
    const now = new Date().getFullYear();
    return now - this.yearOfBirth;
  },
  setName(playerName) {
    this.name = playerName;
  },
  setYearOfBirth(newYears) {
    this.yearOfBirth = newYears;
  },
  setGender(gender) {
    this.gender = gender;
  },
};
player.input();
console.log("age", player.getAge());
