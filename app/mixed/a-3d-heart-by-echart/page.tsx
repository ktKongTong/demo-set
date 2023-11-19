'use client'

import { option } from './options';
import ReactECharts from 'echarts-for-react';
import ClientOnly from '@/components/ClientOnly';
import { useEffect, useState } from 'react';
import 'echarts-gl';
export default function Home() {
    const [data, setData] = useState({});
    useEffect(() => {
        setData(option);
    },[]);
    return (
        <ClientOnly>
            {/* <ReactECharts option={data} style={{height : "100vh"}}/> */}
        </ClientOnly> 
    )
}