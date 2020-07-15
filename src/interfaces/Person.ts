export interface PersonOriginal {
  name: string;
  sex: string;
  born: number;
  died: number;
  fatherName: string;
  motherName: string;
  slug: string;
}

export interface Person extends PersonOriginal {
  mother: PersonOriginal | null;
  father: PersonOriginal | null;
}
