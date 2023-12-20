import React from 'react'
import Link from 'next/link'

const Herosection = () => {
  return (
    <div>
        <div
              
              className="text-center mx-auto lg:w-[80%]"
            >
              <h1 className="heading1 lg:text-6xl text-3xl lg:pb-8 font-bold tracking-tight text-white sm:text-6xl">
                Level up With AI: Best Game Development Company in India
              </h1>

              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="/">
                  <div className="getintouch rounded-3xl px-10 py-4 text-sm text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Consult Our Experts
                    <span aria-hidden="true" className="arrow">
                      ➜
                    </span>
                  </div>
                </Link>
              </div>
            </div>
    </div>
  )
}

export default Herosection