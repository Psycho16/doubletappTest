import { useRootStore } from "@hooks/common/useStore"


const UseDeleteStudentLogic = () => {
  const { studentsStore: { deleteStudentRequest } } = useRootStore()
  return {
    isLoading: deleteStudentRequest.isLoading,
    deleteStudent: deleteStudentRequest.send,
    deletingError: deleteStudentRequest.errors && deleteStudentRequest.errors[0].message
  }
}

export default UseDeleteStudentLogic