import { useState } from "react";
import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";

interface InputCardProps {
    onSubmit: (size:number,numSize:number) => void
}

export default function InputCard({
    onSubmit = (size,numSize) => {},
}:InputCardProps) {
    const [numSize, setNumSize] = useState(8);
    const [size, setSize] = useState(10);
    return(
        <Card color="transparent" shadow={false} className=" w-80 max-w-screen-lg sm:w-96">
            <Typography variant="h4" color="blue-gray" className="">
                随机数生成器
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                    位数
                </Typography>
                <Input
                    crossOrigin={"anonymous"}
                    placeholder={"位数，默认为 8"}
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    value={numSize}
                    onChange={(e)=>setNumSize(parseInt(e.target.value))}
                    labelProps={{
                    className: "before:content-none after:content-none",
                    }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                    个数
                </Typography>
                <Input
                    crossOrigin={"anonymous"}
                    placeholder={"个数，默认为 10"}
                    value={size}
                    onChange={(e)=>setSize(parseInt(e.target.value))}
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                    className: "before:content-none after:content-none",
                    }}
                />
                </div>
                <Button className="mt-6" fullWidth onClick={ ()=>onSubmit(size,numSize) }>
                生成
                </Button>
            </form>
        </Card>
    )
}