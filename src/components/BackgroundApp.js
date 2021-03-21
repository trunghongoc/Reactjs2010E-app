import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const BackgroundApp = () => {
  const history = useHistory()
  const user = useSelector(store => store.user.currentUser)

  useEffect(() => {
    if (!user) {
      history.push('/login')
    }
  }, [user, history])

  return (
    <>
      <span></span>
    </>
  )
}

export default BackgroundApp
