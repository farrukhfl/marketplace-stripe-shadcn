import { ChefHat, Globe, PartyPopper } from "lucide-react"
import { ReactNode } from "react"

interface iAppProps{
    name: string
    image: ReactNode
    title: string
    id: number
}

export const categoryItem: iAppProps[]= [
    {
        id: 0,
        name: "template",
        title: "Template",
        image: <Globe />
    },
    {
        id: 1,
        name: 'uikit',
        title: 'UI Kit',
        image: <ChefHat />
    },
    {
        id: 2,
        name: 'icon',
        title: "Icon",
        image: <PartyPopper/>
    }
]