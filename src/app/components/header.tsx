'use client'
import { useSearchParams } from "next/navigation"
import { useState } from "react"

export const Header = () => {
    const username = useSearchParams().get('username')

    return <div className="w-full absolute left-0 top-0 p-4 text-black font-bold">
        <div className="flex gap-4">
            <p>Username:</p>
            <p>{username}</p>
        </div>
    </div>
}