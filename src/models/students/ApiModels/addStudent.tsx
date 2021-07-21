export type addStudentRequest = {
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

export type addStudentResponse = {
  success: boolean;
}
