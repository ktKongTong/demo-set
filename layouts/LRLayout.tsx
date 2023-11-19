
import React from 'react';


export default function LRLayout(
    {children}: {children: React.ReactNode}
){
    return (
        <section className="grid grid-cols-2 gap-4">
            {children}
        </section>
    )
}
