'use client'
import { useSearchParams } from "next/navigation"
import { Suspense } from 'react';

const UserInfo = () => {
    const searchParams = useSearchParams();
    const username = searchParams.get('username');
    
    return (
        <div className="flex gap-4">
            <p>Username:</p>
            <p>{username}</p>
        </div>
    );
}

export const Header = () => {
    return (
        <div className="w-full absolute left-0 top-0 p-4 text-black font-bold">
            <Suspense fallback={<div>Loading...</div>}>
                <UserInfo />
            </Suspense>
        </div>
    );
}
