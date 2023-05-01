'use client'

import { useRouter } from "next/navigation";
import { useAppContext } from "./app"

export default function Store() {
  const {setStore} = useAppContext()
  const router = useRouter();

  const handleClick = () => {
    setStore('test')
    router.push('/about');
  }

  return (
    <div className="">
      <h2>Store</h2>
      <button onClick={handleClick}>Set Store</button>
    </div>
  )
}