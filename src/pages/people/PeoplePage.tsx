import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Filter,
  Download,
  ChevronLeft,
  ChevronRight,
  UserPlus
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { useTheme } from '../../contexts/ThemeContext';

const employees = [
	{
		id: 1,
		name: 'Alicia Shankur',
		email: 'alicia.shankur@gmail.com',
		jobTitle: 'Software Engineer',
		department: 'Engineering',
		salary: '$2,500',
		startDate: 'Mar 16, 2023',
		status: 'Active',
		lifeCycle: 'Hired',
	},
	{
		id: 2,
		name: 'James Oyinkan',
		email: 'jamesoyinkan@gmail.com',
		jobTitle: 'Visual Designer',
		department: 'Design',
		salary: '$2,000',
		startDate: 'Jan 16, 2023',
		status: 'Active',
		lifeCycle: 'Hired',
	},
	{
		id: 3,
		name: 'Diti Shreyas',
		email: 'ditishreyas@gmail.com',
		jobTitle: 'Visual Designer',
		department: 'Design',
		salary: '$2,000',
		startDate: 'Dec 09, 2024',
		status: 'Inactive',
		lifeCycle: 'Employed',
	},
	{
		id: 4,
		name: 'Ishta Bhatgnar',
		email: 'ishtabhad67@gmail.com',
		jobTitle: 'UI/UX Designer',
		department: 'Design',
		salary: '$1,500',
		startDate: 'Jan 09, 2024',
		status: 'Active',
		lifeCycle: 'Employed',
	},
	{
		id: 5,
		name: 'Kito Ashuth',
		email: 'ashuthore@gmail.com',
		jobTitle: 'Content Writer',
		department: 'Content',
		salary: '$1,000',
		startDate: 'Jan 09, 2024',
		status: 'Active',
		lifeCycle: 'Hired',
	},
	{
		id: 6,
		name: 'Dario Berik',
		email: 'darioberik@yahoo.com',
		jobTitle: 'Sales Manager',
		department: 'Operation',
		salary: '$4,000',
		startDate: 'Feb 21, 2022',
		status: 'Active',
		lifeCycle: 'Hired',
	},
	{
		id: 7,
		name: 'Aresen Vlamadir',
		email: 'darioberik@yahoo.com',
		jobTitle: 'Mobile Assistant',
		department: 'Product',
		salary: '$3,000',
		startDate: 'Aug 07, 2022',
		status: 'Inactive',
		lifeCycle: 'Employed',
	},
	{
		id: 8,
		name: 'Debby Philade',
		email: 'debbythegreat@gmail.com',
		jobTitle: 'Product Manager',
		department: 'Product',
		salary: '$4,500',
		startDate: 'Apr 02, 2022',
		status: 'Active',
		lifeCycle: 'Hired',
	},
];

const PeoplePage = () => {
	const { theme } = useTheme();
	const darkMode = theme === 'dark';
	
	const [searchTerm, setSearchTerm] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [selectedEmployees, setSelectedEmployees] = useState<number[]>([]);

	const filteredEmployees = employees.filter(
		(employee) =>
			employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
			employee.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
			employee.department.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const handleSelectAll = () => {
		if (selectedEmployees.length === filteredEmployees.length) {
			setSelectedEmployees([]);
		} else {
			setSelectedEmployees(filteredEmployees.map((emp) => emp.id));
		}
	};

	const handleSelectEmployee = (id: number) => {
		if (selectedEmployees.includes(id)) {
			setSelectedEmployees(selectedEmployees.filter((empId) => empId !== id));
		} else {
			setSelectedEmployees([...selectedEmployees, id]);
		}
	};  const getStatusClass = (status: string) => {
    if (status === 'Active') return darkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-700';
    if (status === 'Inactive') return darkMode ? 'bg-red-900/30 text-red-300' : 'bg-red-100 text-red-700';
    return darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700';
  };

	return (
		<div className={`px-4 md:px-8 max-w-[1386px] mx-auto space-y-6 ${darkMode ? 'text-gray-200' : ''}`}>
			{/* Header + Add button */}
			<div className="flex justify-between items-center h-[48px]">
				<h1 className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-neutral-800'}`}>List of people</h1>
				<Button className="h-[48px]">
					<UserPlus size={16} className="mr-2" />
					Add new member
				</Button>
			</div>

			{/* Filters Row */}
			<div className="flex flex-wrap md:flex-nowrap items-center gap-4 justify-between">
				<div className="relative w-[465px] h-[56px]">
					<Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-neutral-400'}`} size={18} />
					<input
						type="text"
						placeholder="Search"
						className={`w-full h-full pl-10 pr-4 border ${darkMode ? 'bg-gray-800 border-gray-700' : 'border-neutral-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>

				<div className="flex gap-2 flex-1 justify-end">
					<button className={`px-4 py-2 border ${darkMode ? 'border-gray-700 bg-gray-800 hover:bg-gray-700 text-gray-200' : 'border-neutral-300 bg-white hover:bg-neutral-50'} rounded-md flex items-center`}>
						<span>Type</span>
						<ChevronRight size={16} className="ml-2" />
					</button>
					<button className={`px-4 py-2 border ${darkMode ? 'border-gray-700 bg-gray-800 hover:bg-gray-700 text-gray-200' : 'border-neutral-300 bg-white hover:bg-neutral-50'} rounded-md flex items-center`}>
						<span>Role</span>
						<ChevronRight size={16} className="ml-2" />
					</button>
					<button className={`px-4 py-2 border ${darkMode ? 'border-gray-700 bg-gray-800 hover:bg-gray-700 text-gray-200' : 'border-neutral-300 bg-white hover:bg-neutral-50'} rounded-md flex items-center`}>
						<Filter size={16} className="mr-2" />
						<span>Advanced Filter</span>
					</button>
					<button className={`px-4 py-2 border ${darkMode ? 'border-gray-700 bg-gray-800 hover:bg-gray-700 text-gray-200' : 'border-neutral-300 bg-white hover:bg-neutral-50'} rounded-md flex items-center`}>
						<Download size={16} className="mr-2" />
						<span>Export</span>
					</button>
				</div>
			</div>

			{/* Table */}
			<div className={`overflow-x-auto max-w-full rounded-lg border ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-neutral-200 bg-white'} people-table-container`}>
				<table className="min-w-full">
					<thead className={`${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-neutral-50 text-neutral-600'}`}>
						<tr>
							<th className={`py-3 px-4 text-left ${darkMode ? 'border-gray-700' : 'border-b'}`}>
								<input
									type="checkbox"
									checked={
										selectedEmployees.length === filteredEmployees.length &&
										filteredEmployees.length > 0
									}
									onChange={handleSelectAll}
									className={darkMode ? 'bg-gray-700 border-gray-600' : ''}
								/>
							</th>
							<th className={`py-3 px-4 text-left ${darkMode ? 'border-gray-700' : 'border-b'} text-sm font-medium`}>Name</th>
							<th className={`py-3 px-4 text-left ${darkMode ? 'border-gray-700' : 'border-b'} text-sm font-medium`}>Job Title</th>
							<th className={`py-3 px-4 text-left ${darkMode ? 'border-gray-700' : 'border-b'} text-sm font-medium`}>Department</th>
							<th className={`py-3 px-4 text-left ${darkMode ? 'border-gray-700' : 'border-b'} text-sm font-medium`}>Salary</th>
							<th className={`py-3 px-4 text-left ${darkMode ? 'border-gray-700' : 'border-b'} text-sm font-medium`}>Start Date</th>
							<th className={`py-3 px-4 text-left ${darkMode ? 'border-gray-700' : 'border-b'} text-sm font-medium`}>Life Cycle</th>
							<th className={`py-3 px-4 text-left ${darkMode ? 'border-gray-700' : 'border-b'} text-sm font-medium`}>Status</th>
						</tr>
					</thead>
					<tbody>
						{filteredEmployees.map((employee) => (								<motion.tr
								key={employee.id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
								className={`${darkMode ? 'hover:bg-gray-700' : 'hover:bg-neutral-50'}`}
							>
								<td className={`py-3 px-4 ${darkMode ? 'border-gray-700' : 'border-b'}`}>
									<input
										type="checkbox"
										checked={selectedEmployees.includes(employee.id)}
										onChange={() => handleSelectEmployee(employee.id)}
										aria-label={`Select ${employee.name}`}
										title={`Select ${employee.name}`}
										placeholder={`Select ${employee.name}`}
										className={darkMode ? 'bg-gray-700 border-gray-600' : ''}
									/>
								</td>
								<td className={`py-3 px-4 ${darkMode ? 'border-gray-700' : 'border-b'}`}>
									<div>
										<p className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-neutral-800'}`}>{employee.name}</p>
										<p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-neutral-500'}`}>{employee.email}</p>
									</div>
								</td>
								<td className={`py-3 px-4 ${darkMode ? 'border-gray-700' : 'border-b'} text-sm ${darkMode ? 'text-gray-200' : 'text-neutral-800'}`}>
									{employee.jobTitle}
								</td>
								<td className={`py-3 px-4 ${darkMode ? 'border-gray-700' : 'border-b'} text-sm ${darkMode ? 'text-gray-200' : 'text-neutral-800'}`}>
									{employee.department}
								</td>
								<td className={`py-3 px-4 ${darkMode ? 'border-gray-700' : 'border-b'} text-sm ${darkMode ? 'text-gray-200' : 'text-neutral-800'}`}>
									{employee.salary}
								</td>
								<td className={`py-3 px-4 ${darkMode ? 'border-gray-700' : 'border-b'} text-sm ${darkMode ? 'text-gray-200' : 'text-neutral-800'}`}>
									{employee.startDate}
								</td>
								<td className={`py-3 px-4 ${darkMode ? 'border-gray-700' : 'border-b'} text-sm ${darkMode ? 'text-gray-200' : 'text-neutral-800'}`}>
									{employee.lifeCycle}
								</td>
								<td className={`py-3 px-4 ${darkMode ? 'border-gray-700' : 'border-b'}`}>
									<span
										className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(
											employee.status
										)}`}
									>
										{employee.status}
									</span>
								</td>
							</motion.tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Pagination */}
			<div className="w-[314px] h-[50px] flex justify-end items-center ml-auto">
				<div className="flex items-center space-x-1">
					<button
						type="button"
						title="Previous page"
						className={`w-8 h-8 flex items-center justify-center rounded-md border ${
							darkMode ? 'border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700' : 'border-neutral-300 text-neutral-700 hover:bg-neutral-50'
						}`}
					>
						<ChevronLeft size={16} />
					</button>
					{[1, 2, 3, 4].map((page) => (
						<button
							key={page}
							className={`w-8 h-8 flex items-center justify-center rounded-md ${
								currentPage === page
									? 'bg-blue-600 text-white'
									: darkMode 
									  ? 'border border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700' 
									  : 'border border-neutral-300 text-neutral-700 hover:bg-neutral-50'
							}`}
							onClick={() => setCurrentPage(page)}
						>
							{page}
						</button>
					))}
					<button
						type="button"
						title="Next page"
						className={`w-8 h-8 flex items-center justify-center rounded-md border ${
							darkMode ? 'border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700' : 'border-neutral-300 text-neutral-700 hover:bg-neutral-50'
						}`}
					>
						<ChevronRight size={16} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default PeoplePage;
