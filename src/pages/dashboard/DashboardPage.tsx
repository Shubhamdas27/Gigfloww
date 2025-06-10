import { useState } from 'react';
import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Dashboard = () => {
  const { theme } = useTheme();
  const darkMode = theme === 'dark';
  const [period, setPeriod] = useState('Weekly');
  
  // Chart data
  const weeklyLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const monthlyLabels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
  
  const chartData = {
    labels: period === 'Weekly' ? weeklyLabels : monthlyLabels,
    datasets: [
      {
        label: 'Productivity',
        data: period === 'Weekly' 
          ? [65, 78, 52, 91, 83, 56, 76] 
          : [72, 85, 91, 65],
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Engagement',
        data: period === 'Weekly' 
          ? [45, 59, 80, 81, 56, 55, 40] 
          : [58, 65, 75, 62],
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.05)',
        tension: 0.4,
        fill: true,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
        backgroundColor: '#fff',
        titleColor: '#333',
        bodyColor: '#666',
        borderColor: '#e2e8f0',
        borderWidth: 1,
        padding: 10,
        boxPadding: 4,
        usePointStyle: true,
        titleFont: {
          size: 12,
          weight: 'bold' as const,
        },
        callbacks: {
          title: function(tooltipItems: any) {
            return tooltipItems[0].label;
          },
          label: function(context: any) {
            return `  ${context.dataset.label}: ${context.raw}%`;
          }
        }
      },
    },
    scales: {
      y: {
        suggestedMin: 0,
        suggestedMax: 100,
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          callback: (value: any) => `${value}%`,
          color: '#64748b',
        }
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#64748b',
        }
      },
    },
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
  };

  return (
    <div className={`min-h-screen flex flex-col items-center py-2 sm:py-4 ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      
      {/* 🔷 Top Banner */}
      <div className={`w-full max-w-[1360px] px-3 xs:px-4 sm:px-6 h-auto ${darkMode ? 'bg-blue-900/20 text-blue-200' : 'bg-blue-100 text-blue-900'} rounded-md flex items-center justify-center py-3 sm:py-4 text-xs xs:text-sm font-medium text-center shadow`}>
        Optimize your experience on <span className="font-semibold mx-1">Gigfloww</span> - track your job post, manage teams and streamline HR OPERATIONS EFFORTLESSLY TODAY!
      </div>

      {/* 🧑 Welcome + Date */}
      <div className="w-full max-w-[1360px] flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 sm:mt-6 px-3 xs:px-4 sm:px-6">
        <h2 className={`text-lg xs:text-xl sm:text-2xl font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Welcome Back, Nuraj group</h2>
        <p className={`text-xs xs:text-sm mt-1 sm:mt-0 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>📅 Wed 23, May 2025</p>
      </div>

      {/* 📊 Cards + Upcoming Actions */}
      <div className="w-full max-w-[1360px] flex flex-col lg:flex-row gap-4 sm:gap-6 mt-4 px-3 xs:px-4 sm:px-6">
        {/* Left: Stats + Graph */}
        <div className="flex flex-col gap-4 sm:gap-6 w-full lg:w-2/3">
          {/* Cards */}
          <div className="w-full h-auto grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {[
              { 
                title: "Employees", 
                value: 24, 
                iconBg: darkMode ? "bg-pink-900" : "bg-pink-100",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="#FBECFF" />
                    <path d="M20 20.75C16.83 20.75 14.25 18.17 14.25 15C14.25 11.83 16.83 9.25 20 9.25C23.17 9.25 25.75 11.83 25.75 15C25.75 18.17 23.17 20.75 20 20.75Z" fill="#7B61FF"/>
                    <path d="M28.59 30.75C28.18 30.75 27.84 30.41 27.84 30C27.84 26.55 24.36 23.75 20 23.75C15.64 23.75 12.16 26.55 12.16 30C12.16 30.41 11.82 30.75 11.41 30.75C11 30.75 10.66 30.41 10.66 30C10.66 25.73 14.85 22.25 20 22.25C25.15 22.25 29.34 25.73 29.34 30C29.34 30.41 29 30.75 28.59 30.75Z" fill="#7B61FF"/>
                  </svg>
                )
              },
              { 
                title: "Hiring", 
                value: 5, 
                iconBg: "bg-blue-100",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="#DCEFFE" />
                    <path d="M20 20C18.9 20 18 19.1 18 18C18 16.9 18.9 16 20 16C21.1 16 22 16.9 22 18C22 19.1 21.1 20 20 20Z" fill="#2374A5"/>
                    <path d="M15 18C15 15.79 17.24 14 20 14C22.76 14 25 15.79 25 18C25 20.21 22.76 22 20 22C17.24 22 15 20.21 15 18ZM15 27C15 24.79 17.24 23 20 23C22.76 23 25 24.79 25 27" stroke="#2374A5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20 22C17.24 22 15 23.79 15 26C15 28.21 17.24 30 20 30C22.76 30 25 28.21 25 26" stroke="#2374A5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M25 18H28" stroke="#2374A5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M25 26H28" stroke="#2374A5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 18H15" stroke="#2374A5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 26H15" stroke="#2374A5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              { 
                title: "Projects", 
                value: 1, 
                iconBg: "bg-green-100",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="#E8FCF1" />
                    <path d="M25 11H15C12.24 11 10 13.24 10 16V27C10 27.55 10.45 28 11 28H25C27.76 28 30 25.76 30 23V16C30 13.24 27.76 11 25 11Z" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20.91 16.84L15.72 22.03C15.52 22.23 15.33 22.62 15.29 22.9L15.01 24.88C14.91 25.6 15.41 26.1 16.13 26L18.11 25.72C18.39 25.68 18.78 25.49 18.98 25.29L24.17 20.1C25.06 19.21 25.49 18.17 24.17 16.85C22.85 15.52 21.81 15.95 20.91 16.84Z" stroke="#22C55E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20.17 17.58C20.61 19.15 21.84 20.39 23.42 20.83" stroke="#22C55E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} rounded-xl shadow p-5 flex flex-col justify-between ${idx === 1 ? 'border-2 border-blue-500' : ''}`}
              >
                <div className="flex justify-between items-center">
                  <p className="text-lg font-medium">{item.title}</p>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.iconBg}`}>
                    {item.icon}
                  </div>
                </div>
                <p className="text-3xl font-bold mt-2">{item.value}</p>
                <a href="#" className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} flex items-center text-sm font-medium mt-2`}>
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>

          {/* Graph */}
          <div className={`w-full h-auto sm:h-[26.31rem] ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow p-3 xs:p-4 sm:p-6`}>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 sm:mb-4 gap-2 sm:gap-0">
              <h3 className={`text-base xs:text-lg font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Performance Report</h3>
              <div className="flex items-center gap-3 sm:gap-4">
                <label htmlFor="performance-period" className="sr-only">Select performance period</label>
                <select
                  id="performance-period"
                  className={`border px-2 xs:px-3 py-1 text-xs xs:text-sm rounded ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'border'}`}
                  aria-label="Select performance period"
                  title="Select performance period"
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                >
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
              </div>
            </div>
            {/* Chart */}
            <div className="h-[180px] xs:h-[220px] sm:h-[21rem]">
              <Line options={chartOptions} data={chartData} />
            </div>
          </div>
        </div>

        {/* Right: Upcoming Actions */}
        <div className={`w-full lg:w-1/3 h-auto lg:h-[38.31rem] ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow p-3 xs:p-4`}>
          <h3 className={`text-base xs:text-lg font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-700'} mb-3 xs:mb-4`}>Upcoming Actions</h3>
          <div className="space-y-3 sm:space-y-4 overflow-y-auto max-h-[300px] lg:h-[calc(100%-2rem)] pr-2">
            {[
              { time: "09:00 am", title: "Performance Review", team: "Engineering team" },
              { time: "11:30 am", title: "Onboarding Session", team: "New employees" },
              { time: "03:30 pm", title: "Internal Meeting with Joda", team: "UI designer" },
              { time: "05:00 pm", title: "Internal Meeting", team: "Content team" },
              { time: "07:00 pm", title: "Interview", team: "Achuyat – UI intern" },
              { time: "05:00 pm", title: "Internal Meeting", team: "Content team" },
              { time: "05:00 pm", title: "Internal Meeting", team: "Content team" }
            ].map((event, idx) => (
              <div key={idx} className={`text-sm border-l-4 border-blue-500 pl-2 ${darkMode ? 'text-gray-300' : ''}`}>
                <p className="font-semibold">{event.time}</p>
                <p>{event.title}</p>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{event.team}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 👤 Incoming Applications */}
      <div className={`w-full max-w-[1360px] ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow p-3 xs:p-4 sm:p-6 mt-4 sm:mt-6`}>
        <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center gap-3 xs:gap-0 mb-4 sm:mb-6">
          <div>
            <h3 className={`text-xl sm:text-2xl font-semibold ${darkMode ? 'text-gray-200' : 'text-neutral-800'}`}>Incoming Application</h3>
            <p className={`text-xs xs:text-sm ${darkMode ? 'text-gray-400' : 'text-neutral-600'}`}>Manage application for your job posting</p>
          </div>
          <button className={`${darkMode ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white px-3 sm:px-5 py-1.5 sm:py-2 text-sm rounded-md`}>
            See all
          </button>
        </div>
        
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-6">
          {[
            { 
              name: "Elizabeth Filade", 
              exp: "3 years in Software Development",
              company: "Tucker Inc", 
              date: "12 Dec 2024 - 10 May 2025",
              image: "https://randomuser.me/api/portraits/women/56.jpg",
              logoColor: darkMode ? "bg-pink-800" : "bg-pink-600"
            },
            { 
              name: "Andre Suares", 
              exp: "3 years in Software Development",
              company: "Tucker Inc", 
              date: "12 Dec 2024 - 10 May 2025",
              image: "https://randomuser.me/api/portraits/men/36.jpg",
              logoColor: darkMode ? "bg-orange-700" : "bg-orange-500"
            },
            { 
              name: "Ishita Ashuth", 
              exp: "3 years in Software Development",
              company: "Tucker Inc", 
              date: "12 Dec 2024 - 10 May 2025",
              image: "https://randomuser.me/api/portraits/women/65.jpg",
              logoColor: darkMode ? "bg-indigo-800" : "bg-indigo-600"
            },
            { 
              name: "Ishita Ashuth", 
              exp: "3 years in Software Development",
              company: "Tucker Inc", 
              date: "12 Dec 2024 - 10 May 2025",
              image: "https://randomuser.me/api/portraits/women/65.jpg",
              logoColor: darkMode ? "bg-indigo-800" : "bg-indigo-600"
            }
          ].map((app, idx) => (
            <div key={idx} className={`border ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'} rounded-lg p-5`}>
              {/* Profile header */}
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src={app.image} 
                  alt={app.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div>
                  <h4 className={`font-medium ${darkMode ? 'text-gray-200' : 'text-neutral-800'}`}>{app.name}</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-neutral-600'}`}>{app.exp}</p>
                </div>
              </div>

              {/* Latest Experience */}
              <div>
                <p className={`${darkMode ? 'text-gray-400' : 'text-neutral-500'} text-sm font-medium mb-2`}>Latest Experience</p>
                <div className="flex items-center space-x-2 mb-1">
                  <div className={`w-8 h-8 rounded flex items-center justify-center text-white ${app.logoColor}`}>
                    {app.company === "Tucker Inc" && 
                      <span className="font-bold text-sm">T</span>
                    }
                  </div>
                  <span className={`${darkMode ? 'text-gray-300' : 'text-neutral-800'} font-medium`}>{app.company}</span>
                </div>
                <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-neutral-500'} mb-4`}>{app.date}</p>
              </div>

              {/* View Resume Button */}
              <div className={`pt-2 border-t ${darkMode ? 'border-gray-700' : 'border-gray-100'}`}>
                <a href="#" className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} flex items-center justify-between font-medium`}>
                  View Resume
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
