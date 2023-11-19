import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemSuffix,
    ListItemPrefix,
    Switch,
  } from "@material-tailwind/react";
import CopyIconButton from "@/components/CopyIconButton";
import { useState } from "react";


export default function ResultCard({res}:{res:string[]}) {
    const [showIndex,setShowIndex] = useState<boolean>(false)

    return(
        <Card  color="transparent" shadow={false} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <Typography variant="h4" color="blue-gray">
                生成结果 
            </Typography>
            <Switch onChange={(event)=>setShowIndex(event.target.checked)} crossOrigin={""} label="显示索引" />
            <Card className="h-96 overflow-y-auto">
                <List >
                    {res.map((item,index)=>(
                        <ListItem key={index} selected={false} ripple={false} >
                            {showIndex?
                            (<ListItemPrefix>
                                {index+1}: 
                            </ListItemPrefix>):(<></>)}
                            {item}
                            <ListItemSuffix>
                                <CopyIconButton text={item}/>
                            </ListItemSuffix>
                        </ListItem>
                    ))}
                </List>
            </Card>
        </Card>
    )
}


