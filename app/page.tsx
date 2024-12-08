import Image from 'next/image'
import CopyButton from './components/CopyButton'

export default function Home() {
  const contractAddress = 'Hj4t8A3WV1gNpRp9yZKRds9ruRPo7E3znLWoeghBpump'

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
        <h1 className="text-6xl font-bold mb-4 animate-pulse text-red-600">$BTCSANTA</h1>
        <p className="text-2xl mb-8 font-semibold">🎅 The Most Festive Token on Solana! 🎄</p>

        {/* Contract Address */}
        <div className="bg-white rounded-lg p-6 shadow-lg max-w-2xl mx-auto mb-8">
          <p className="text-sm text-gray-600 mb-2 font-semibold">Contract Address:</p>
          <CopyButton text={contractAddress} />
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-16">
          <a href="https://t.me/BTCSantaCTO" target="_blank" rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 p-4 rounded-full transition-all">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.054-.308-.346-.11l-6.4 4.02-2.76-.918c-.598-.183-.608-.598.126-.885l10.78-4.156c.505-.184.95.126.786.885z" />
            </svg>
          </a>
          <a href="https://x.com/btcsanta_sol" target="_blank" rel="noopener noreferrer"
            className="bg-blue-400 hover:bg-blue-500 p-4 rounded-full transition-all">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
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
        <a href="https://raydium.io/swap"
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
