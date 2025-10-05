import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen-safe flex flex-col items-center justify-between px-6 pt-safe-top pb-safe-bottom bg-gradient-to-b from-primary-50 to-white">
      {/* Top section */}
      <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 max-w-md">
        <div className="w-20 h-20 bg-primary-600 rounded-3xl flex items-center justify-center">
          <span className="text-4xl text-white font-bold">FF</span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 leading-tight">
          Welcome to <span className="text-primary-600">FitFam</span>
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed">
          Track your fitness journey, create workout plans, and compete with your crew.
        </p>
      </div>

      {/* Bottom CTA section */}
      <div className="w-full max-w-md space-y-3 pb-8">
        <Link to="/login" className="block w-full">
          <button className="w-full bg-primary-600 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg active:scale-95 transition-transform">
            Get Started
          </button>
        </Link>
        <Link to="/login" className="block w-full">
          <button className="w-full bg-white text-primary-600 py-4 rounded-2xl font-semibold text-lg border-2 border-primary-600 active:scale-95 transition-transform">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}
