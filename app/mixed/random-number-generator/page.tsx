'use client'

import CenterLayout from "@/layouts/CenterLayout";
import { useState } from "react";

import InputCard from "./InputCard";
import ResultCard from "./ResultCard";
import ClientOnly from "@/components/ClientOnly";

const generateRandomNumbers = (size:number,numSize:number) => {
const randomNumbers = [];
for (let i = 0; i < size; i++) {
    let randomNumber = '';
    for (let j = 0; j < numSize; j++) {
    randomNumber += Math.floor(Math.random() * 10);
    }
    randomNumbers.push(randomNumber);
}
return randomNumbers;
}

export default function Home() {
    const onSubmit = (size:number,numSize:number) => {
        setRes(generateRandomNumbers(size,numSize))
    }
    const [res , setRes] = useState<string[]>([])

    
    return (
        <ClientOnly>
        <CenterLayout>
            <section className="grid xl:grid-cols-2 gap-4">
                <InputCard onSubmit={onSubmit}/>
                <ResultCard res={res}/>
            </section>
        </CenterLayout>
        </ClientOnly>
    )
}

