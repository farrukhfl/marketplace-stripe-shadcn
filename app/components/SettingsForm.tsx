"use client"

import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import SubmitButtons from "./SubmitButtons"
import { useFormState } from "react-dom"
import { State, UpdateUserSettings } from "../action"
import { useEffect } from "react"
import { toast } from "sonner"

interface iAppProps{
    firstName: string
    lastName: string
    email: string

}


function SettingsForm({email, firstName, lastName}:iAppProps) {
    const initialState: State = { message: "", status: undefined };
    const [state, formAction] = useFormState(UpdateUserSettings, initialState)


    useEffect(() => {
        if (state.status === "success") {
          toast.success(state.message);
        } else if (state.status === "error") {
          toast.error(state.message);
        }
      }, [state]);

  return (
    <form action={formAction}>
      <CardHeader>
        <CardTitle>
            Settings
        </CardTitle>
        <CardDescription>
            Here you will find settings according to your account
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-2">
        <Label>First Name</Label>
        <Input name="firstName" type="text" defaultValue={firstName}/>
        </div>

        <div className="flex flex-col gap-y-2">
        <Label>Last Name</Label>
        <Input name="lastName" type="text" defaultValue={lastName} />
        </div>

        <div className="flex flex-col gap-y-2">
        <Label>Email</Label>
        <Input name="email" type="email" disabled defaultValue="farrukh@mail.com" />
        </div>

      </CardContent>
      <CardFooter>
        <SubmitButtons title="Update your settings" />
      </CardFooter>
    </form>
  )
}

export default SettingsForm
