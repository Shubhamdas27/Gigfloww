import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ChevronDown } from 'lucide-react';
import { format } from 'date-fns';
import { useTheme } from '../../contexts/ThemeContext';

// Mock data for salary information with values in Rupees
const salaryData = [
	{
		id: 1,
		name: 'Alicia Shankur',
		email: 'alicia.shankur@gmail.com',
		jobTitle: 'Software Engineer',
		department: 'Engineering',
		netSalary: '₹1,85,000',
		status: 'Paid',
	},
	{
		id: 2,
		name: 'James Oyinkan',
		email: 'james.oyin@gmail.com',
		jobTitle: 'Visual Designer',
		department: 'Design',
		netSalary: '₹1,55,000',
		status: 'Paid',
	},
	{
		id: 3,
		name: 'Aresen Vlamadir',
		email: 'aresen@gmail.com',
		jobTitle: 'Sales Manager',
		department: 'Product',
		netSalary: '₹3,48,000',
		status: 'Pending',
	},
	{
		id: 4,
		name: 'Kito Aahuth',
		email: 'kito@gmail.com',
		jobTitle: 'Content Writer',
		department: 'Content',
		netSalary: '₹1,48,000',
		status: 'Paid',
	},
	{
		id: 5,
		name: 'Diti Shreyas',
		email: 'diti.shreyas@gmail.com',
		jobTitle: 'Backend Engineer',
		department: 'Engineering',
		netSalary: '₹1,85,000',
		status: 'Paid',
	},
	{
		id: 6,
		name: 'Alicia Shankur',
		email: 'alicia.shankur@gmail.com',
		jobTitle: 'Product Manager',
		department: 'Product',
		netSalary: '₹2,96,000',
		status: 'Pending',
	},
	{
		id: 7,
		name: 'Dario Berik',
		email: 'dario@gmail.com',
		jobTitle: 'Software Engineer',
		department: 'Engineering',
		netSalary: '₹1,40,000',
		status: 'Paid',
	},
];

// Selected employee mock data with values in Rupees
const selectedEmployeeDetails = {
	name: 'Elizabeth James',
	position: 'UI Lead',
	department: 'Design',
	status: 'Active',
	basicSalary: '₹2,59,000',
	bonus: '₹37,000',
	deduction: '₹7,400',
	nextSalary: '₹2,88,600',
	bankDetails: '23456789 ICICI Bank',
	currency: 'INR',
	profilePic: 'https://randomuser.me/api/portraits/women/67.jpg',
};

// Move DetailRow above SalaryPage to ensure it's defined before use
type DetailRowProps = {
	label: string;
	value: string;
	isStatus?: boolean;
};

const DetailRow = ({ label, value, isStatus = false }: DetailRowProps) => {
	const { theme } = useTheme();
	const darkMode = theme === 'dark';
	
	let statusClass = '';
	if (isStatus) {
		statusClass =
			value === 'Active'
				? darkMode ? 'text-green-400' : 'text-green-600'
				: value === 'Pending'
				? darkMode ? 'text-yellow-400' : 'text-yellow-600'
				: darkMode ? 'text-gray-400' : 'text-neutral-600';
	}

	return (
		<div className={`flex justify-between items-center py-2 border-b ${
			darkMode ? 'border-gray-700' : 'border-neutral-100'
		}`}>
			<span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-neutral-600'}`}>{label}</span>
			<span
				className={`text-sm font-medium ${
					isStatus ? statusClass : darkMode ? 'text-gray-200' : 'text-neutral-800'
				}`}
			>
				{value}
			</span>
		</div>
	);
};

const SalaryPage = () => {
	const { theme } = useTheme();
	const darkMode = theme === 'dark';

	const [searchTerm, setSearchTerm] = useState('');
	const [selectedEmployee, setSelectedEmployee] = useState<number | null>(null);
	const [selectedMonth] = useState(format(new Date(), 'MMM yyyy'));

	const filteredSalaryData = salaryData.filter(
		(employee) =>
			employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
			employee.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
			employee.department.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const handleEmployeeSelect = (id: number) => {
		setSelectedEmployee(id === selectedEmployee ? null : id);
	};

	const getStatusClass = (status: string) => {
		if (status === 'Paid') return darkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-700';
		if (status === 'Pending') return darkMode ? 'bg-yellow-900/30 text-yellow-300' : 'bg-yellow-100 text-yellow-700';
		return darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700';
	};

	return (
		<div className={`min-h-screen pt-16 px-4 font-sans ${
			darkMode ? 'bg-gray-900 text-gray-200' : 'bg-neutral-100'
		}`}>
			<div className="max-w-[1272px] mx-auto space-y-6">
				<div className="flex items-center justify-between salary-header">
					<h1 className={`font-bold ${darkMode ? 'text-gray-100' : 'text-neutral-800'} salary-title`}>
						Salary Activities
					</h1>
					<div
						className={`flex items-center px-3 py-1 border rounded-md cursor-pointer salary-month-dropdown ${
							darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-neutral-300'
						}`}
					>
						<span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-neutral-700'} mr-2`}>
							{selectedMonth}
						</span>
						<ChevronDown size={16} className={`${darkMode ? 'text-gray-400' : 'text-neutral-500'}`} />
					</div>
				</div>

				<div className="flex gap-4">
					{/* Details Card */}
					<div
						className={`rounded-lg shadow-sm border overflow-hidden flex flex-col ${
							darkMode 
								? 'bg-gray-800 border-gray-700' 
								: 'bg-white border-neutral-200'
						}`}
						style={{ width: 988, height: 600 }}
					>
						{/* Search & Filters */}
						<div
							className={`flex items-center gap-4 px-4 py-3 ${
								darkMode ? 'border-gray-700' : 'border-b border-neutral-200'
							}`}
						>
							{/* Search box */}
							<div className="relative" style={{ width: 320 }}>
								<Search
									className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
										darkMode ? 'text-gray-400' : 'text-neutral-400'
									}`}
									size={18}
								/>
								<input
									type="text"
									placeholder="Search employee name, job, etc."
									className={`w-full h-10 pl-10 pr-4 text-sm rounded-md focus:outline-none ${
										darkMode 
											? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500' 
											: 'bg-white border-neutral-300 text-gray-800 focus:ring-blue-500 focus:border-blue-500'
									}`}
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
								/>
							</div>

							{/* Filter Button */}
							<button
								className={`flex items-center justify-center h-10 px-4 border rounded-md text-sm ${
									darkMode 
										? 'bg-gray-700 border-gray-600 text-white hover:bg-gray-600' 
										: 'bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-50'
								}`}
							>
								<Filter size={16} className="mr-2" />
								<span>Filter</span>
							</button>

							{/* Monthly Salary - Adjusted height to match others */}
							<div
								className="flex items-center justify-between ml-auto px-4 py-2 bg-white border border-neutral-300 rounded-md"
								style={{ width: 260 }}
							>
								<span className="text-sm font-medium text-neutral-700">
									Monthly Salary:
								</span>
								<span className="text-lg font-bold text-neutral-800">
									₹2,59,000
								</span>
							</div>
						</div>

						{/* Table */}
						<div className="overflow-x-auto flex-1">
							<table className="w-full">
								<thead className={`${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-neutral-50 text-neutral-600'}`}>
									<tr>
										<th className={`py-3 px-4 text-left text-sm font-medium ${darkMode ? 'border-b border-gray-600' : 'border-b'}`}>
											Name
										</th>
										<th className="py-3 px-4 text-left text-sm font-medium border-b">
											Job Title
										</th>
										<th className="py-3 px-4 text-left text-sm font-medium border-b">
											Department
										</th>
										<th className="py-3 px-4 text-left text-sm font-medium border-b">
											Net Salary
										</th>
										<th className="py-3 px-4 text-left text-sm font-medium border-b">
											Status
										</th>
									</tr>
								</thead>
								<tbody>
									{filteredSalaryData.map((employee) => (
										<motion.tr
											key={employee.id}
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ duration: 0.3 }}
											className={`hover:bg-neutral-50 cursor-pointer ${
												selectedEmployee === employee.id
													? darkMode ? 'bg-blue-900' : 'bg-blue-50'
													: darkMode ? 'hover:bg-gray-700' : 'hover:bg-neutral-50'
											}`}
											onClick={() => handleEmployeeSelect(employee.id)}
										>
											<td className={`py-3 px-4 ${darkMode ? 'border-b border-gray-700' : 'border-b'}`}>
												<div>
													<p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-neutral-800'}`}>
														{employee.name}
													</p>
													<p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-neutral-500'}`}>
														{employee.email}
													</p>
												</div>
											</td>
											<td className={`py-3 px-4 border-b text-sm ${darkMode ? 'text-gray-300 border-gray-700' : 'text-neutral-800'}`}>
												{employee.jobTitle}
											</td>
											<td className={`py-3 px-4 border-b text-sm ${darkMode ? 'text-gray-300 border-gray-700' : 'text-neutral-800'}`}>
												{employee.department}
											</td>
											<td className={`py-3 px-4 border-b text-sm ${darkMode ? 'text-gray-300 border-gray-700' : 'text-neutral-800'}`}>
												{employee.netSalary}
											</td>
											<td className="py-3 px-4 border-b">
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
					</div>

					{/* Profile Card with dark mode */}
					<div
						className={`rounded-lg shadow-sm border overflow-hidden flex-shrink-0 flex flex-col ${
							darkMode 
								? 'bg-gray-800 border-gray-700' 
								: 'bg-white border-neutral-200'
						}`}
						style={{ width: 340, height: 600 }}
					>
						<div className="bg-gradient-to-r from-blue-700 to-cyan-600 h-48 relative">
							<div className="absolute top-0.75 bottom-0 left-2 right-2 flex justify-center">
								<div className="w-20 h-20 rounded-full bg-white p-1 transform translate-y-1/2">
									<img
										src={selectedEmployeeDetails.profilePic}
										alt={selectedEmployeeDetails.name}
										className="w-full h-full rounded-full object-cover"
									/>
								</div>
							</div>
						</div>

						<div className="pt-14 pb-6 px-4 text-center">
							<h3 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-neutral-800'}`}>
								{selectedEmployeeDetails.name}
							</h3>
							<p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-neutral-500'}`}>
								{selectedEmployeeDetails.position}
							</p>
						</div>
						<div className="px-4 flex-1 flex flex-col justify-between">
							<div>
								<DetailRow
									label="Department"
									value={selectedEmployeeDetails.department}
								/>
								<DetailRow
									label="Status"
									value={selectedEmployeeDetails.status}
									isStatus
								/>
								<DetailRow
									label="Basic Salary"
									value={selectedEmployeeDetails.basicSalary}
								/>
								<DetailRow
									label="Bonus"
									value={selectedEmployeeDetails.bonus}
								/>
								<DetailRow
									label="Deduction"
									value={selectedEmployeeDetails.deduction}
								/>
								<DetailRow
									label="Next Salary"
									value={selectedEmployeeDetails.nextSalary}
								/>
								<DetailRow
									label="Bank Details"
									value={selectedEmployeeDetails.bankDetails}
								/>
								<DetailRow
									label="Currency"
									value={selectedEmployeeDetails.currency}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SalaryPage;
