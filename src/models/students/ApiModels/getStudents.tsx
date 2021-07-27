//TODO: delete
export type GetStudentsRequest = {
  
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
