'use client'
import { useSearchParams } from "next/navigation"
import { useState } from "react"

export const Menu = () => {
    const username = useSearchParams().get('username')

    return <div className="w-2/4 m-auto bg-blue-200 absolute rounded-2xl mb-2 bottom-0 p-4 text-black font-bold h-10">
        <div className="flex gap-4">

        </div>
    </div>
}