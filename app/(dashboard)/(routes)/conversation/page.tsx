import { Heading } from "@/components/heading"
import { MessageSquare } from "lucide-react"

const ConverstationPage=()=>{
return (
    <div>
       <Heading
       title="Conversation"
       description="Chat with our Model"
       icon={MessageSquare}
       iconColor="text-green-500"
       bgColor="bg-green-100"
       />
    </div>
)
}

export default ConverstationPage