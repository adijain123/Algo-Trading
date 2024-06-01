"use client"
import React from "react"
import { AnimatedTooltip } from "./ui/animated-tooltip"
const people = [
  {
    id: 1,
    name: "Pratham Gupta",
    designation: "Mentor + Developer + Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"
  },
  {
    id: 2,
    name: "Adi Jain",
    designation: "Developer + Designer",
    image:
      "../Images/adi.jpg"
  },
  {
    id: 3,
    name: "Dhruv Dhirwani",
    designation: "Data Scientist",
    image:
      "../Images/dhruv.jpg"
  },
  {
    id: 4,
    name: "Rishi Rathore",
    designation: "Data Scientist",
    image:
      "../Images/rishi.jpg"
  },
  {
    id: 5,
    name: "Manvendra Saini",
    designation: "Developer",
    image:
      "../Images/manvendra.jpg"
  },
]

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  )
}
