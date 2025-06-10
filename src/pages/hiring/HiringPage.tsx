import { Search, Filter, Calendar } from "lucide-react";
import { useTheme } from '../../contexts/ThemeContext';

export default function HiringPage() {
  const { theme } = useTheme();
  const darkMode = theme === 'dark';
  return (
    <div className={`p-6 space-y-6 font-sans ${darkMode ? 'text-gray-200' : ''}`}>
      {/* Header */}
      <div className="space-y-1">
        <h1 className={`text-3xl font-bold ${darkMode ? 'text-gray-100' : 'text-neutral-800'}`}>Job Posting</h1>
        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>
          Post new jobs and manage your current listings
        </p>
      </div>

      {/* Top Toolbar */}
      <div className={`flex items-center gap-4 border-b pb-4 ${darkMode ? 'border-gray-700' : ''}`}>
        <div className="relative w-full max-w-md">
          <Search className={`absolute left-3 top-2.5 h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
          <input
            type="text"
            placeholder="Search job titles, companies..."
            className={`w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none ${
              darkMode ? 'bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400' : 'border-neutral-300'
            }`}
          />
        </div>
        <button className={`flex items-center gap-2 px-4 py-2 border rounded-md text-sm ${
          darkMode ? 'border-gray-700 bg-gray-800 text-gray-200 hover:bg-gray-700' : 'bg-white hover:bg-neutral-50'
        }`}>
          <Filter className="h-4 w-4" /> Filter
        </button>
        <button className={`flex items-center gap-2 px-4 py-2 border rounded-md text-sm ${
          darkMode ? 'border-gray-700 bg-gray-800 text-gray-200 hover:bg-gray-700' : 'bg-white hover:bg-neutral-50'
        }`}>
          <Calendar className="h-4 w-4" /> Date
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Job Posting Form */}
        <div className={`col-span-2 w-[925px] h-[900px] border rounded-lg p-6 space-y-6 shadow ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-neutral-200'
        }`}>
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : ''}`}>Post a New Job</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className={`block font-medium ${darkMode ? 'text-gray-300' : ''}`}>Job Role</label>
              <input
                type="text"
                placeholder="e.g. Software Engineer"
                className={`w-full p-2 border rounded-md ${
                  darkMode ? 'bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400' : 'border-neutral-300'
                }`}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className={`block font-medium ${darkMode ? 'text-gray-300' : ''}`}>Skills</label>
                <input
                  type="text"
                  placeholder="e.g. React, Node.js"
                  className={`w-full p-2 border rounded-md ${
                    darkMode ? 'bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400' : 'border-neutral-300'
                  }`}
                />
              </div>
              <div className="space-y-2">
                <label className={`block font-medium ${darkMode ? 'text-gray-300' : ''}`}>Experience</label>
                <input
                  type="text"
                  placeholder="e.g. 2-4 years"
                  className={`w-full p-2 border rounded-md ${
                    darkMode ? 'bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400' : 'border-neutral-300'
                  }`}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className={`block font-medium ${darkMode ? 'text-gray-300' : ''}`}>Job Type</label>
                <input
                  type="text"
                  placeholder="e.g. Full-time"
                  className={`w-full p-2 border rounded-md ${
                    darkMode ? 'bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400' : 'border-neutral-300'
                  }`}
                />
              </div>
              <div className="space-y-2">
                <label className={`block font-medium ${darkMode ? 'text-gray-300' : ''}`}>Mode</label>
                <input
                  type="text"
                  placeholder="e.g. Remote / On-site"
                  className={`w-full p-2 border rounded-md ${
                    darkMode ? 'bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400' : 'border-neutral-300'
                  }`}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className={`block font-medium ${darkMode ? 'text-gray-300' : ''}`}>Payment</label>
                <input
                  type="text"
                  placeholder="e.g. ₹50,000/month"
                  className={`w-full p-2 border rounded-md ${
                    darkMode ? 'bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400' : 'border-neutral-300'
                  }`}
                />
              </div>
              <div className="space-y-2">
                <label className={`block font-medium ${darkMode ? 'text-gray-300' : ''}`}>Location</label>
                <input
                  type="text"
                  placeholder="e.g. Bangalore"
                  className={`w-full p-2 border rounded-md ${
                    darkMode ? 'bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400' : 'border-neutral-300'
                  }`}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className={`block font-medium ${darkMode ? 'text-gray-300' : ''}`}>Job Description</label>
              <textarea
                rows={5}
                placeholder="Write a detailed job description here..."
                className={`w-full p-2 border rounded-md ${
                  darkMode ? 'bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400' : 'border-neutral-300'
                }`}
              />
            </div>
            <button className={`w-full py-2 rounded-md ${
              darkMode ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'
            } text-white`}>
              Post Job
            </button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Manage Postings */}
          <div className={`w-[403px] h-[456px] border rounded-lg p-4 shadow ${
            darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-neutral-200'
          }`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-gray-100' : ''}`}>Manage Posting</h3>
              <a href="#" className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} text-sm font-medium`}>See all</a>
            </div>
            {[1, 2].map((_, i) => (
              <div key={i} className={`flex items-start gap-4 p-3 border rounded-md mb-4 ${
                darkMode ? 'border-gray-700' : 'border-neutral-200'
              }`}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png"
                  alt="company logo"
                  className="w-10 h-10 rounded-md object-cover"
                />
                <div className="flex-1 space-y-1">
                  <p className={`font-semibold text-sm ${darkMode ? 'text-gray-100' : ''}`}>UI Designer Intern (Remote)</p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Article studio</p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Bangalore, India</p>
                  <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Under applying | posted 12/02/24</p>
                  <div className="flex gap-6 pt-2 text-xs">
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>24 <span className={`${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Views</span></span>
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>106 <span className={`${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Applicants</span></span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* AI Section */}
          <div className={`w-[403px] h-[382px] border rounded-lg p-4 shadow ${
            darkMode ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-white text-gray-600'
          } text-sm`}>
            <div className="flex justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
                alt="ai assistant"
                className="w-24 h-24 object-contain"
              />
            </div>
            <h3 className={`text-lg font-semibold mt-4 ${darkMode ? 'text-gray-100' : ''}`}>Use AI to write</h3>
            <p className="mt-2">
              Write perfectly and flawless with AI. If you want help with job description and other fields, AI will suggest for you.
            </p>
            <button className={`w-full mt-4 py-2 rounded-md text-white ${
              darkMode ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'
            }`}>
              Write with AI
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
