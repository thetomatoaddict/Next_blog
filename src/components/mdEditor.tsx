'use client'
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState, useCallback } from "react";
import Submit from "@/service/save";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor"),
  { ssr: false }
);

export default function MdEditor() {
  const [value, setValue] = useState("**Hello world!!!**");
  const onChange = useCallback((value)=>{
    setValue(value)
  },[])

  const [title, setTitle] = useState("");
  const onChange2 = useCallback((value)=>{
    setTitle(value)
  },[])

  const [enTitle, setEnTitle] = useState("");
  const onChange3 = useCallback((value)=>{
    setEnTitle(value)
  },[])

  const [category, setCategory] = useState("");
  const onChange4 = useCallback((value)=>{
    setCategory(value)
  },[])

  const [description, setDescription] = useState("");
  const onChange5 = useCallback((value)=>{
    setDescription(value)
  },[])

  return (
    <>
    <h1 className="font-bold text-4xl my-8">새 글 작성하기</h1>
    <input onChange={onChange2} placeholder="한글 제목을 입력하세요." className="w-full text-2xl my-2"/>
    <input onChange={onChange3} placeholder="path를 입력하세요." className="w-full text-2xl my-2"/>
    <div data-color-mode="light">
      <MDEditor value={value} onChange={onChange} height={800}/>
    </div>
    <div className="flex justify-end">
    <input onChange={onChange5} placeholder="요약정보를 입력하세요." className="w-full text-2xl my-2"/>
    <input onChange={onChange4} placeholder="카테고리를 입력하세요." className="w-full text-2xl my-2"/>
    <button className="bg-black text-xl text-white font-semibold my-4 rounded-full h-12 w-24"
    onClick={()=>{Submit(title,value,enTitle,category,description)}}>Save</button>
    </div>
    </>
  );
}
