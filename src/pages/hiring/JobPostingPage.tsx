import { useState } from 'react';
import { Button } from '../../components/ui/Button';
import PageTransition from '../../components/layout/PageTransition';
import { useTheme } from '../../contexts/ThemeContext';

const JobPostingPage = () => {
  const { theme } = useTheme();
  const darkMode = theme === 'dark';
  
  const [formData, setFormData] = useState({
    role: '',
    skillsRequired: '',
    yearsOfExperience: '',
    employmentType: '',
    workplaceType: '',
    diploma: '',
    numberOfOpenings: '',
    jobDescription: '',
    relevantLinks: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-neutral-800'}`}>Job Posting</h1>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-neutral-500'}`}>Post Jobs to hire best people for your job role</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-neutral-200'} rounded-lg shadow-sm border p-6`}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
          <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-neutral-700'} mb-1`}>Role</label>
          <input
            type="text"
            name="role"
            placeholder="e.g. UX/UI Designer"
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={formData.role}
            onChange={handleChange}
          />
            </div>

            <div>
          <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-neutral-700'} mb-1`}>Skills Required</label>
          <input
            type="text"
            name="skillsRequired"
            placeholder="Enter required skills"
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={formData.skillsRequired}
            onChange={handleChange}
          />
            </div>

            <div>
          <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-neutral-700'} mb-1`}>Years of Experience/Experience Level</label>
          <select
            name="yearsOfExperience"
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={formData.yearsOfExperience}
            onChange={handleChange}
            aria-label="Years of Experience"
          >
            <option value="">Select experience level</option>
            <option value="0-1">0-1 years</option>
            <option value="1-3">1-3 years</option>
            <option value="3-5">3-5 years</option>
            <option value="5+">5+ years</option>
          </select>
            </div>

            <div>
          <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-neutral-700'} mb-1`}>Employment Type</label>
          <select
            name="employmentType"
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={formData.employmentType}
            onChange={handleChange}
            aria-label="Employment Type"
          >
            <option value="">Select employment type</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
            <option value="internship">Internship</option>
          </select>
            </div>

            <div>
          <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-neutral-700'} mb-1`}>Workplace Type</label>
          <select
            name="workplaceType"
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={formData.workplaceType}
            onChange={handleChange}
            aria-label="Workplace Type"
          >
            <option value="">Select workplace type</option>
            <option value="on-site">On-site</option>
            <option value="hybrid">Hybrid</option>
            <option value="remote">Remote</option>
          </select>
            </div>

            <div>
          <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-neutral-700'} mb-1`}>Diploma</label>
          <input
            type="text"
            name="diploma"
            placeholder="Enter required qualifications"
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={formData.diploma}
            onChange={handleChange}
          />
            </div>

            <div>
          <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-neutral-700'} mb-1`}>No. of Opening (if it is more than 1 role)</label>
          <input
            type="number"
            name="numberOfOpenings"
            placeholder="Enter number of openings"
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={formData.numberOfOpenings}
            onChange={handleChange}
          />
            </div>

            <div>
          <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-neutral-700'} mb-1`}>Job Description</label>
          <textarea
            name="jobDescription"
            rows={6}
            placeholder="Enter detailed job description"
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={formData.jobDescription}
            onChange={handleChange}
          />
            </div>

            <div>
          <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-neutral-700'} mb-1`}>Relevant Link(s)</label>
          <input
            type="text"
            name="relevantLinks"
            placeholder="Enter relevant links"
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={formData.relevantLinks}
            onChange={handleChange}
          />
            </div>

            <div className="flex justify-end">
          <Button type="submit">Post Job</Button>
            </div>
          </form>
        </div>
          </div>

          <div className="lg:col-span-1">
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-neutral-200'} rounded-lg shadow-sm border p-6`}>
          <h2 className={`text-lg font-semibold ${darkMode ? 'text-gray-100' : 'text-neutral-800'} mb-4`}>Manage Hiring</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
          <div className={`w-10 h-10 ${darkMode ? 'bg-blue-900' : 'bg-primary-100'} rounded-lg flex items-center justify-center`}>
            <div className={`w-6 h-6 ${darkMode ? 'bg-blue-600' : 'bg-primary-500'} rounded-md`} />
          </div>
          <div>
            <p className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-neutral-800'}`}>Designer Asset (Remote)</p>
            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-neutral-500'}`}>Published: Feb 24, 2024</p>
          </div>
            </div>
            <div className="flex items-start space-x-3">
          <div className={`w-10 h-10 ${darkMode ? 'bg-blue-900' : 'bg-primary-100'} rounded-lg flex items-center justify-center`}>
            <div className={`w-6 h-6 ${darkMode ? 'bg-blue-600' : 'bg-primary-500'} rounded-md`} />
          </div>
          <div>
            <p className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-neutral-800'}`}>Designer Asset (Remote)</p>
            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-neutral-500'}`}>Published: Feb 24, 2024</p>
          </div>
            </div>
          </div>

          <div className="mt-8">
            <img 
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Hiring illustration"
          className="w-full h-48 object-cover rounded-lg"
            />
            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-neutral-500'} mt-2 text-center`}>
          Let us help you find the best talent for your team
            </p>
          </div>
        </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default JobPostingPage;