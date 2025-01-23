"use client"

import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { useState } from "react"

export function DatePicker({onChange, name}) {
  const [date, setDate] = useState()
  const onDateSelect = (e)=> {
    setDate(e)
    onChange(e)
  }

  return (
    <Popover className="">
      <PopoverTrigger asChild name={name}>
        <Button
          variant={"outline"}
          className={cn(
            "w-full h-10 justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className=" p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={onDateSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
