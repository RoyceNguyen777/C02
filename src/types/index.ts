export enum IPropsName {
  "*" = "*",
  NAME = "name",
  GENDER = "gender",
  YEAROFBIRTH = "yearOfBirth",
}
export type IPlayer = {
  id: number;
  name: string;
  gender: boolean;
  input: () => void;
  getAge: () => void;
  yearOfBirth: number;
  output: (name: string) => void;
  setName: (newName: string) => void;
  setGender: (newGender: boolean) => void;
  setYearOfBirth: (newYears: string) => void;
};
