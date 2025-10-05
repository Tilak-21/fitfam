export default function Dashboard() {
  return (
    <div className="min-h-screen-safe bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white sticky top-0 z-10 pt-safe-top">
        <div className="px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">FitFam</h1>
          <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">JD</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-6 space-y-6">
        {/* Daily Goals Card */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-bold text-gray-900">Today's Goals</h3>
            <button className="text-primary-600 text-sm font-medium">Set Goal</button>
          </div>
          <p className="text-gray-500">No goals set yet</p>
        </div>

        {/* Quick Actions - Mobile optimized buttons */}
        <div className="space-y-3">
          <button className="w-full bg-primary-600 text-white py-4 rounded-2xl font-semibold text-base shadow-md active:scale-95 transition-transform flex items-center justify-center gap-2">
            <span className="text-xl">+</span>
            Log Workout
          </button>
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-white text-gray-900 py-3 rounded-2xl font-medium text-sm shadow-sm active:scale-95 transition-transform border border-gray-200">
              Create Plan
            </button>
            <button className="bg-white text-gray-900 py-3 rounded-2xl font-medium text-sm shadow-sm active:scale-95 transition-transform border border-gray-200">
              View History
            </button>
          </div>
        </div>

        {/* Recent Workouts Card */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Recent Workouts</h3>
          <div className="text-center py-8">
            <p className="text-gray-400 mb-3">No workouts logged yet</p>
            <button className="text-primary-600 font-medium text-sm">Log your first workout</button>
          </div>
        </div>

        {/* Fam Center Card */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Fam Center</h3>
          <div className="text-center py-6">
            <p className="text-gray-400 mb-4">Join a fam to compete with friends</p>
            <button className="bg-primary-50 text-primary-600 px-6 py-3 rounded-xl font-medium text-sm active:scale-95 transition-transform">
              Join or Create Fam
            </button>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe-bottom">
        <div className="grid grid-cols-4 px-2 py-2">
          <button className="flex flex-col items-center py-2 text-primary-600">
            <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
            </svg>
            <span className="text-xs font-medium">Home</span>
          </button>
          <button className="flex flex-col items-center py-2 text-gray-400">
            <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
            </svg>
            <span className="text-xs font-medium">Workouts</span>
          </button>
          <button className="flex flex-col items-center py-2 text-gray-400">
            <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
            </svg>
            <span className="text-xs font-medium">Fam</span>
          </button>
          <button className="flex flex-col items-center py-2 text-gray-400">
            <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
            </svg>
            <span className="text-xs font-medium">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
