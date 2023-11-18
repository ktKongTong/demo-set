'use client'

import { VChart } from '@visactor/react-vchart';
import { spec } from './data-spec';
import ClientOnly from '@/components/ClientOnly';
export default function Home() {
    return (
        <ClientOnly>
            <VChart spec={spec}/>
        </ClientOnly>
    )
}