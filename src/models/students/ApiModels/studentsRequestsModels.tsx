export type AddStudentRequest = {
          email: string,
          name: string,
          sex: string,
          specialty: string,
          group: string,
          color: string,
          rating: string,
          birthday: string,
          avatar?: string
    }

export type AddStudentResponse = {
  success: boolean;
}

export type DeleteStudentResponse = {
  success: boolean;
}

export type GetStudentsResponse = {
  students: 
    {
      id: number,
      email: string,
      name: string,
      sex: string,
      specialty: string,
      group: string,
      color: string,
      rating: number,
      birthday: string,
      avatar: string
    }[]
}

