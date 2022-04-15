import { useState } from 'react'

const useInputValues = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    agree: false,
  })
  const handleChangeBlur = (e) => {
    const { name, value } = e.target
    setState((pre) => ({
      ...pre,
      [name]: value,
    }))
  }

  return [
    state.email,
    state.password,
    state.confirmPassword,
    state.agree,
    handleChangeBlur,
  ]
}

export default useInputValues
