"use client";
import React, { useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  aiOutput: string;
}

const convertHtmlToMarkdown = (html: string): string => {
  if (!html) return "";

  let markdown = html;

  // Line breaks
  markdown = markdown.replace(/<br\s*\/?>/gi, '\n');

  // Bold
  markdown = markdown.replace(/<(b|strong)>(.*?)<\/\1>/gi, (_match: string, _tag: string, content: string) => {
    return `**${content.trim()}**`;
  });

  // Italic
  markdown = markdown.replace(/<(i|em)>(.*?)<\/\1>/gi, (_match: string, _tag: string, content: string) => {
    return `_${content.trim()}_`;
  });

  // Unordered list
  markdown = markdown.replace(/<ul>([\s\S]*?)<\/ul>/gi, (_match: string, listItems: string) => {
    return listItems
      .replace(/<li>(.*?)<\/li>/g, (_liMatch: string, item: string) => `* ${item.trim()}`)
      .trim();
  });

  // Ordered list
  markdown = markdown.replace(/<ol>([\s\S]*?)<\/ol>/gi, (_match: string, listItems: string) => {
    let i = 1;
    return listItems
      .replace(/<li>(.*?)<\/li>/g, (_liMatch: string, item: string) => `${i++}. ${item.trim()}`)
      .trim();
  });

  // Strip remaining tags
  markdown = markdown.replace(/<[^>]+>/g, '');

  return markdown.trim();
};


function OutputSection({ aiOutput }: Props) {
  const editorRef = useRef<any>(null);

  useEffect(() => {
    const editorInstance = editorRef.current?.getInstance();
    if (editorInstance) {
      const cleanOutput = convertHtmlToMarkdown(aiOutput);
      editorInstance.setMarkdown(cleanOutput);
    }
  }, [aiOutput]);

  const handleCopy = () => {
    const editorInstance = editorRef.current?.getInstance();
    const cleanText = editorInstance?.getMarkdown(); // <- clean markdown (no HTML)
    if (cleanText) {
      navigator.clipboard.writeText(cleanText);
    }
  };

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Your Result</h2>
        <Button className="flex gap-2" onClick={handleCopy}>
          <Copy className="w-4 h-4" /> Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will appear here"
        initialEditType="wysiwyg"
        height="600px"
        useCommandShortcut={true}
        onChange={() =>
          console.log(editorRef.current?.getInstance()?.getMarkdown())
        }
      />
    </div>
  );
}

export default OutputSection;
