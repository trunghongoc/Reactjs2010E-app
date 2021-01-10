import { useMemo } from 'react'
import { useSelector } from 'react-redux'

const User = () => {
  const userStore = useSelector(store => store.userReducer)
  console.log(userStore)

  const user = useMemo(() => {
    return userStore.user || {
      name: 'Tên mặc định'
    }
  }, [userStore])

  return (
    <>
      <h2>User name: {user.name}</h2>
    </>
  )
}

export default User
