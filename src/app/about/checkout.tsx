'use client'
import { useAppContext } from "../app"

export default function Checkout() {
  const {store} = useAppContext()

  console.log(store);
  return (
    <div className="">
      <h2>Store</h2>
    </div>
  )
}