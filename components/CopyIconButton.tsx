import { ClipboardDocumentCheckIcon,ClipboardDocumentListIcon } from '@heroicons/react/24/solid'
import { IconButton, Tooltip } from '@material-tailwind/react'
import { useState } from 'react'

import { useCopyToClipboard } from "@uidotdev/usehooks";
export default function CopyIconButton({text}:{text:string}) {
    const [copied, setCopied] = useState(false)
    const [copiedText, copyToClipboard] = useCopyToClipboard();
    const handleCopy = () => {
        copyToClipboard(text)
        setCopied(true)
    }
    return (
        <Tooltip
            content={copied?"copied":"copy"}
            placement="top"
            className="rounded-md py-1 px-2 text-xs font-medium"
        >
            <IconButton
            type="button"
            variant="text"
            size="sm"
            color={"blue-gray"}
            className={
                "hover:text-blue-gray-900"
            }
            onClick={handleCopy}
            onMouseLeave={() => setCopied(false)}
            >
            {copied ? (
                <ClipboardDocumentCheckIcon
                className="h-5 w-5"
                strokeWidth={1.5}
                />
            ) : (
                <ClipboardDocumentListIcon
                className="h-5 w-5"
                strokeWidth={1.5}
                />
            )}
            </IconButton>
        </Tooltip>
    )
}