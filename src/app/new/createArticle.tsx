"use client"

import Viewer from '@/components/rich-text/viewer'
import Editor from '@/components/rich-text/editor'
import { useState } from 'react'
import "../prose-mirror.css"

export default function CreateArticle() {
  const [value, setValue] = useState("hello world ")

  return (
    <div className="flex flex-col w-full items-center p-4">
    <Editor content={value} onChange={setValue} placeholder="Write your post here..." />
    </div>
  )
}