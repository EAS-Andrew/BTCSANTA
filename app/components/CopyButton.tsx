'use client'

import { useState } from 'react'

export default function CopyButton({ text }: { text: string }) {
    const [copied, setCopied] = useState(false)

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div>
            <div className="flex items-center justify-between bg-gray-100 p-3 rounded">
                <p className="font-mono text-gray-800 break-all text-left">
                    {text}
                </p>
                <button
                    onClick={copyToClipboard}
                    className="ml-2 p-2 hover:bg-gray-200 rounded transition-all"
                    title="Copy to clipboard"
                >
                    <svg
                        className={`w-5 h-5 ${copied ? "text-green-500" : "text-gray-500"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                        />
                    </svg>
                </button>
            </div>
            {copied && (
                <p className="text-green-500 text-sm mt-1">Copied to clipboard!</p>
            )}
        </div>
    )
} 