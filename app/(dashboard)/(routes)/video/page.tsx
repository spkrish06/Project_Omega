import { Heading } from "@/components/heading"
import { VideoIcon } from "lucide-react"

const Video = ()=>{
    return (
        <div>
            <Heading
            title="SnapMotion"
            description="Upload a Video"
            icon={VideoIcon}
            iconColor="text-[#C62E2E]"
            bgColor="bg-[#C62E2E]/10"
            />
        </div>
    )
}

export default Video