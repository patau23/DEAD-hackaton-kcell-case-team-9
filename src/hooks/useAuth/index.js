import { useContext } from 'react'

import { AuthContext } from '../../contexts/authContext/context'

export default function () {
  return useContext(AuthContext)
}
