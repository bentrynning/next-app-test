'use client'

import { useRouter } from "next/navigation";
import { useAppContext } from "./app"

export default function Store() {
  const {store, setStore} = useAppContext()
  const router = useRouter();

  console.log(store)
  
  return (
    <div className="">
      <h2>Store</h2>
      <button onClick={() => setStore('test')}>Set context state</button>
      <button onClick={() => router.push('/about')}>Go to checkout</button>
    </div>
  )
}