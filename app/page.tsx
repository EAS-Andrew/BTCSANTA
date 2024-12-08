import Image from 'next/image'
import CopyButton from './components/CopyButton'

export default function Home() {
  const contractAddress = 'Hj4t8A3WV1gNpRp9yZKRds9ruRPo7E3znLWoeghBpump'

  return (
    <main className="min-h-screen bg-[#7ed65b] text-black overflow-hidden">
      {/* Optimized Snow Effect */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        {/* Single layer with fewer snowflakes */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-fall-medium"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 20}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 4}s`,
              fontSize: `${Math.random() * 6 + 12}px`,
              opacity: Math.random() * 0.4 + 0.3,
            }}
          >
            ❄️
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 text-center relative">
        <div className="animate-bounce mb-8">
          <Image
            src="/logo.png"
            alt="BTCSANTA Logo"
            width={300}
            height={300}
            className="mx-auto"
          />
        </div>
        <h1 className="text-7xl font-bold mb-4 animate-pulse text-red-600">$BTCSANTA</h1>
        <p className="text-3xl mb-2 font-bold">🎅 HO HO HODL! 🎄</p>
        <p className="text-2xl mb-8 font-semibold">The Most Based Christmas Token on Solana! 🚀</p>

        {/* Contract Address */}
        <div className="bg-white rounded-2xl p-6 shadow-lg max-w-2xl mx-auto mb-12 transform hover:scale-105 transition-transform duration-200">
          <p className="text-lg text-gray-600 mb-2 font-bold">Contract Address:</p>
          <CopyButton text={contractAddress} />
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-16">
          <a href="https://t.me/BTC_Santa_CTO" target="_blank" rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 p-5 rounded-full transition-all transform hover:scale-110">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.054-.308-.346-.11l-6.4 4.02-2.76-.918c-.598-.183-.608-.598.126-.885l10.78-4.156c.505-.184.95.126.786.885z" />
            </svg>
          </a>
          <a href="https://x.com/btcsanta_sol" target="_blank" rel="noopener noreferrer"
            className="bg-black hover:bg-gray-800 p-5 rounded-full transition-all transform hover:scale-110">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
        </div>

        {/* Tokenomics */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-200">
            <div className="text-4xl mb-4">💎</div>
            <h3 className="text-3xl font-bold mb-4 text-red-600">HODL SZN</h3>
            <p className="font-bold text-lg mb-2">0% Tax</p>
            <p className="font-bold text-lg mb-2">No Team Tokens</p>
            <p className="font-bold text-lg">LP SAFU 🔒</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-200">
            <div className="text-4xl mb-4">🎁</div>
            <h3 className="text-3xl font-bold mb-4 text-red-600">Tokenomics</h3>
            <p className="font-bold text-lg mb-2">1B Total Supply</p>
            <p className="font-bold text-lg mb-2">95% to LP 🌊</p>
            <p className="font-bold text-lg">5% Marketing 📈</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-200">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-3xl font-bold mb-4 text-red-600">WAGMI</h3>
            <p className="font-bold text-lg mb-2">Fair Launch 🎯</p>
            <p className="font-bold text-lg mb-2">Community Driven 🫂</p>
            <p className="font-bold text-lg">Christmas Gainz 🎄</p>
          </div>
        </div>

        {/* Buy Now Button */}
        <div className="space-y-4">
          <a href="https://raydium.io/swap"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-6 px-12 rounded-full text-2xl inline-block transition-all hover:scale-110 shadow-lg animate-pulse">
            APE IN ON RAYDIUM 🚀
          </a>
          <p className="text-sm font-bold animate-bounce">Early Birds Get The Gainz 🎅</p>
        </div>
      </div>
    </main>
  )
}
