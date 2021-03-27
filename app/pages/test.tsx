import { useRouter } from "next/router"
import React from "react"

export default function Test() {
  const { replace } = useRouter()

  const handleChange = (event) => {
    // replace({ query }, undefined, { shallow: true })
    replace(`/test?p=${event.target.value}`)
  }

  return <input onChange={handleChange} />
}
