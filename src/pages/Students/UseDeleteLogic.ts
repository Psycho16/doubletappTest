import { useRootStore } from "../../hooks/common/useStore"


export function useDeleteStudentLogic() {
  const { studentsStore: { deleteStudentRequest } } = useRootStore()
  return {
    isLoading: deleteStudentRequest.isLoading,
    deleteStudent: deleteStudentRequest.send,
    deletingError: deleteStudentRequest.errors && deleteStudentRequest.errors[0].message
  }
}
