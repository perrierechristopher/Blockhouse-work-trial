"use client";
import React, { useEffect, useState }  from 'react'
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import { dashboardAPI } from '@/services/main';

const BarChart = dynamic(()=>import("@/components/charts/bar/main"), {
  ssr: false,
});
const LineChart = dynamic(()=>import("@/components/charts/line/main"), {
  ssr: false,
});
const PieChart = dynamic(()=>import("@/components/charts/pie/main"), {
  ssr: false,
});


const chartsType: any = {
    "line": {
      ui: LineChart,
      endpoint: dashboardAPI.getLineChartData
    },
    "pie" : {
      ui: PieChart,
      endpoint: dashboardAPI.getPieChartData
    },
    "bar" : {
      ui: BarChart,
      endpoint: dashboardAPI.getBarChartData
    }
}


function Page() {
    const searchParams = useSearchParams(); 
    const chart = searchParams.get('type') || 'line';
    const ChartToRender = chartsType[chart].ui;
    const [data, setData] = useState({});

    useEffect(() => {
      chartsType[chart].endpoint.then((res: any)=>setData(res))
    }, [chart])
    
  return (
    <div className='w-full '>
        <ChartToRender data={data} />
    </div>
  )
}

export default Page