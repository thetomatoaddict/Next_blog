
'use client';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from "remark-gfm";
import Image from 'next/image';

export default function MarkdownViewer({article}:{article : string}) {
 
return  <ReactMarkdown remarkPlugins={[remarkGfm]} className="prose max-w-none" components={{
    code({node, inline, className, children, ...props}) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter
          language={match[1]}
          PreTag="div"
          {...props}
          style={materialDark}
        >{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
      ) : (
        <code {...props} className={className}>
          {children}
        </code>
      )
    },
    img(image){
        return (
        <Image className="w-full max-h-60 object-cover" src={image.src || ""} alt={image.alt || ""} width={500} height={350}/>
        )}
  }} >
    {article}
    </ReactMarkdown>
      
}