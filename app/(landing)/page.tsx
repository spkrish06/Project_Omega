import { Button } from "@/components/ui/button"
import Link from "next/link"

const LandingPage =()=>{

    return (

        <div>
            Landing Page 
            <div>
                <Link href="/sign-in">
                    <Button>
                        LogIn    
                    </Button>   
                </Link>
                
            </div>
        </div>
    )
}

export default LandingPage