import { useRootStore } from "@hooks/common/useStore"


const useLoginFormLogic = () => {
  const { authStore: { loginRequest } } = useRootStore()
  return {
    isLoading: loginRequest.isLoading,
    onSubmit: loginRequest.send,
    submittionError: loginRequest.errors && loginRequest.errors[0].message
  }
}

export default useLoginFormLogic