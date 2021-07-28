export type StudentProps = {
  id: number
  avatar: string
  name: string
  specialty: string
  group: string
  color: string
  rating: number
  birthday: string
}

export type IFormInput = {
  name: string;
  group: string;
  specialty: string;
  birthday: string;
  email: string;
  sex: string; 
  rating: string;
  color: string;
  avatar: string | File;
}