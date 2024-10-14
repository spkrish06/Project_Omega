import { Heading } from "@/components/heading"
import { MusicIcon } from "lucide-react"

const Music = ()=>{
    return (
        <div>
            <Heading
            title="TuneSmith"
            description="Upload Music"
            icon={MusicIcon}
            iconColor="text-[#C62E2E]"
            bgColor="bg-[#C62E2E]/10"
            />
        </div>
    )
}

export default Music