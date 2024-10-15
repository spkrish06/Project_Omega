import { Heading } from "@/components/heading"
import { ImageIcon } from "lucide-react"

const Image = ()=>{
    return(
        <div>
            <Heading
            title="Artify"
            description="Image Upload"
            icon={ImageIcon}
            iconColor="text-[#387478]"
            bgColor="bg-[#387478]/10"
            />
        </div>
      
    )
}

export default Image