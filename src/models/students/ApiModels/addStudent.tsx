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
