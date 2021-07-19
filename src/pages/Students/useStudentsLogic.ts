import { useRootStore } from "@hooks/common/useStore"


const useStudentsLogic = () => {
  const { StudentsStore: { studentsRequest } } = useRootStore()
  return {
    submittionError: studentsRequest.errors && studentsRequest.errors[0].message,
    onSubmit: studentsRequest.send,
    isLoading: studentsRequest.isLoading
  }
}

export default useStudentsLogic