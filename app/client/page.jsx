'use client'
import { useState } from "react"


function ClientPage() {
    const [count, setCount] = useState(0)
  return (
    <div className="max-w-3xl mx-auto">
        <h1 className="text-7xl mb-8 text-center">{count}</h1>
        <div className="flex justify-center gap-8">
            <button className="btn "
                onClick={() => setCount(count + 1)}
            >
                increase
            </button>
            <button className="btn" onClick={() => setCount(count - 1)}>
                decrease
            </button>
        </div>
    </div>
  )
}

export default ClientPage