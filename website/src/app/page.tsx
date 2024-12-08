
'use client'
import Image from 'next/image'
import { FaTelegram, FaTwitter, FaCopy } from 'react-icons/fa'
import { useState } from 'react'

export default function Home() {
  const [copied, setCopied] = useState(false)
  const contractAddress = 'Hj4t8A3WV1gNpRp9yZKRds9ruRPo7E3znLWoeghBpump'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="min-h-screen bg-[#7ed65b] text-black">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="animate-bounce mb-8">
          <Image
            src="/logo.png"
            alt="BTCSANTA Logo"
            width={200}
            height={200}
            className="mx-auto"
          />
        </div>
        <h1 className="text-6xl font-bold mb-4 animate-pulse text-red-600">BTCSANTA</h1>
        <p className="text-2xl mb-8 font-semibold">🎅 The Most Festive Token on Solana! 🎄</p>

        {/* Contract Address */}
        <div className="bg-white rounded-lg p-6 shadow-lg max-w-2xl mx-auto mb-8">
          <p className="text-sm text-gray-600 mb-2 font-semibold">Contract Address:</p>
          <div className="flex items-center justify-between bg-gray-100 p-3 rounded">
            <p className="font-mono text-gray-800 break-all text-left">
              {contractAddress}
            </p>
            <button
              onClick={copyToClipboard}
              className="ml-2 p-2 hover:bg-gray-200 rounded transition-all"
              title="Copy to clipboard"
            >
              <FaCopy size={20} className={copied ? "text-green-500" : "text-gray-500"} />
            </button>
          </div>
          {copied && (
            <p className="text-green-500 text-sm mt-1">Copied to clipboard!</p>
          )}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-16">
          <a href="https://t.me/BTC_Santa_CTO" target="_blank" rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 p-4 rounded-full transition-all">
            <FaTelegram size={24} className="text-white" />
          </a>
          <a href="https://x.com/btcsanta_sol" target="_blank" rel="noopener noreferrer"
            className="bg-blue-400 hover:bg-blue-500 p-4 rounded-full transition-all">
            <FaTwitter size={24} className="text-white" />
          </a>
        </div>

        {/* Tokenomics */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-red-600">💎 HODL</h3>
            <p className="font-medium">No Tax</p>
            <p className="font-medium">No Team Tokens</p>
            <p className="font-medium">LP Locked</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-red-600">🎁 Tokenomics</h3>
            <p className="font-medium">Total Supply: 1,000,000,000</p>
            <p className="font-medium">95% to LP</p>
            <p className="font-medium">5% Marketing</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-red-600">🚀 Features</h3>
            <p className="font-medium">Fair Launch</p>
            <p className="font-medium">Community Driven</p>
            <p className="font-medium">Christmas Rewards</p>
          </div>
        </div>

        {/* Buy Now Button */}
        <a href="https://raydium.io/swap/?inputMint=sol&outputMint=Hj4t8A3WV1gNpRp9yZKRds9ruRPo7E3znLWoeghBpump"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-xl inline-block transition-all hover:scale-105 shadow-lg">
          Buy Now on Raydium
        </a>
      </div>

      {/* Floating Snow Effect */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          >
            ❄️
          </div>
        ))}
      </div>
    </main>
  )
}
