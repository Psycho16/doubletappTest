import { useRootStore } from "@hooks/common/useStore"


const useRegisterFormLogic = () => {
  const { authStore: { registerRequest } } = useRootStore()

  return {
    submittionError: registerRequest.errors && registerRequest.errors[0].message,
    onSubmit: registerRequest.send,
    isLoading: registerRequest.isLoading
  }
}

export default useRegisterFormLogic