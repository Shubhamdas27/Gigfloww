import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, Calendar, BarChart2, Plus } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import PageTransition from '../../components/layout/PageTransition';
import { useTheme } from '../../contexts/ThemeContext';

// Mock data for performance reviews
const reviewsData = [
	{
		id: 1,
		employeeName: 'Alicia Shankur',
		position: 'Software Engineer',
		department: 'Engineering',
		reviewDate: 'Mar 15, 2023',
		reviewType: 'Annual',
		rating: 4.5,
		status: 'Completed',
		approved: true,
		reviewedBy: 'James Wilson',
	},
	{
		id: 2,
		employeeName: 'James Oyinkan',
		position: 'Visual Designer',
		department: 'Design',
		reviewDate: 'Apr 10, 2023',
		reviewType: 'Quarterly',
		rating: 3.8,
		status: 'Completed',
		approved: true,
		reviewedBy: 'Sarah Chen',
	},
	{
		id: 3,
		employeeName: 'Diti Shreyas',
		position: 'Visual Designer',
		department: 'Design',
		reviewDate: 'Jun 20, 2023',
		reviewType: 'Semi-Annual',
		rating: 4.2,
		status: 'Completed',
		approved: true,
		reviewedBy: 'Miguel Rodriguez',
	},
	{
		id: 4,
		employeeName: 'Ishita Bhatnagar',
		position: 'UI/UX Designer',
		department: 'Design',
		reviewDate: 'Jul 05, 2023',
		reviewType: 'Quarterly',
		rating: 4.0,
		status: 'Completed',
		approved: true,
		reviewedBy: 'Emma Thompson',
	},
	{
		id: 5,
		employeeName: 'Kito Aahuth',
		position: 'Content Writer',
		department: 'Content',
		reviewDate: 'Aug 15, 2023',
		reviewType: 'Annual',
		rating: 3.5,
		status: 'Completed',
		approved: true,
		reviewedBy: 'David Kim',
	},
	{
		id: 6,
		employeeName: 'Dario Berik',
		position: 'Sales Manager',
		department: 'Operation',
		reviewDate: 'Sep 22, 2023',
		reviewType: 'Quarterly',
		rating: 4.7,
		status: 'Pending',
		approved: false,
		reviewedBy: 'Rachel Green',
	},
	{
		id: 7,
		employeeName: 'Aresen Vlamadir',
		position: 'Mobile Assistant',
		department: 'Product',
		reviewDate: 'Oct 30, 2023',
		reviewType: 'Semi-Annual',
		rating: 3.9,
		status: 'Pending',
		approved: false,
		reviewedBy: 'John Smith',
	},
];

const ReviewsPage = () => {
	const { theme } = useTheme();
	const darkMode = theme === 'dark';
	
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedFilter, setSelectedFilter] = useState('All');

	const filteredReviews = reviewsData.filter(
		(review) =>
			(selectedFilter === 'All' || review.status === selectedFilter) &&
			(review.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
				review.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
				review.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
				review.reviewType.toLowerCase().includes(searchTerm.toLowerCase()))
	);

	const getStatusClass = (status: string) => {
		if (status === 'Completed') {
			return darkMode ? 'bg-green-900/30 text-green-300' : 'bg-success-100 text-success-700';
		} else if (status === 'Pending') {
			return darkMode ? 'bg-yellow-900/30 text-yellow-300' : 'bg-warning-100 text-warning-700';
		}
		return darkMode ? 'bg-gray-700 text-gray-300' : 'bg-neutral-100 text-neutral-700';
	};

	const getRatingStars = (rating: number) => {
		const stars = [];
		const fullStars = Math.floor(rating);
		const hasHalfStar = rating - fullStars >= 0.5;

		for (let i = 0; i < fullStars; i++) {
			stars.push(
				<Star key={`full-${i}`} size={16} className="text-warning-500 fill-warning-500" />
			);
		}

		if (hasHalfStar) {
			stars.push(
				<div key="half" className="relative">
					<Star size={16} className="text-warning-500" />
					<div className="absolute inset-0 overflow-hidden w-1/2">
						<Star size={16} className="text-warning-500 fill-warning-500" />
					</div>
				</div>
			);
		}

		const remainingStars = 5 - (fullStars + (hasHalfStar ? 1 : 0));
		for (let i = 0; i < remainingStars; i++) {
			stars.push(
				<Star key={`empty-${i}`} size={16} className="text-warning-500" />
			);
		}

		return (
			<div className="flex items-center">
				<div className="flex items-center mr-2">
					{stars}
				</div>
				<span className="text-sm text-neutral-600">{rating.toFixed(1)}</span>
			</div>
		);
	};

	return (
		<PageTransition>
			<div className={`p-6 space-y-6 font-sans ${darkMode ? 'text-gray-200' : ''}`}>
				{/* Header - Fixed the unclosed div and matched HiringPage style */}
				<div className="space-y-1">
					<h1 className={`text-3xl font-bold ${darkMode ? 'text-gray-100' : 'text-neutral-800'}`}>Performance Reviews</h1>
					<p className={`${darkMode ? 'text-gray-400' : 'text-neutral-500'} text-sm`}>
						Manage and track employee performance reviews
					</p>
				</div>

				{/* Top Toolbar - Matched HiringPage style */}
				<div className={`flex items-center justify-between gap-4 border-b ${darkMode ? 'border-gray-700' : ''} pb-4`}>
					<Button className={`${darkMode ? 'bg-blue-700 hover:bg-blue-600' : 'bg-primary-600 hover:bg-primary-700'} text-white px-4 py-2 rounded-md`}>
						<Plus size={16} className="mr-2" />
						New Review
					</Button>
				</div>

				{/* Stats Overview */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<StatCard
						title="Completed Reviews"
						value="28"
						icon={<Calendar size={20} className={`${darkMode ? 'text-blue-400' : 'text-primary-500'}`} />}
						color={darkMode ? 'bg-blue-900/20' : 'bg-primary-50'}
					/>
					<StatCard
						title="Pending Reviews"
						value="12"
						icon={<Calendar size={20} className={`${darkMode ? 'text-yellow-400' : 'text-warning-500'}`} />}
						color={darkMode ? 'bg-yellow-900/20' : 'bg-warning-50'}
					/>
					<StatCard
						title="Average Rating"
						value="4.2"
						icon={<BarChart2 size={20} className={`${darkMode ? 'text-purple-400' : 'text-secondary-500'}`} />}
						color={darkMode ? 'bg-purple-900/20' : 'bg-secondary-50'}
						suffix=						{
							<div className="flex mt-1">
								{[1, 2, 3, 4].map((i) => (
									<Star key={i} size={14} className={`${darkMode ? 'text-yellow-400 fill-yellow-400' : 'text-warning-500 fill-warning-500'}`} />
								))}
								<div className="relative">
									<Star size={14} className={`${darkMode ? 'text-yellow-400' : 'text-warning-500'}`} />
									<div className="absolute inset-0 overflow-hidden w-1/5">
										<Star size={14} className={`${darkMode ? 'text-yellow-400 fill-yellow-400' : 'text-warning-500 fill-warning-500'}`} />
									</div>
								</div>
							</div>
						}
					/>
				</div>

				<div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-neutral-200'} rounded-lg shadow-sm border overflow-hidden`}>
					{/* Search and filters */}
					<div className={`p-4 border-b ${darkMode ? 'border-gray-700' : 'border-neutral-200'} flex flex-wrap gap-3`}>
						<div className="relative flex-1">
							<Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-neutral-400'}`} size={18} />
							<input
								type="text"
								placeholder="Search reviews"
								className={`w-full pl-10 pr-4 py-2 border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400' : 'border-neutral-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
							/>
						</div>

						<div className="flex space-x-2">
							<button
								className={`px-4 py-2 rounded-md text-sm ${
									selectedFilter === 'All'
										? darkMode ? 'bg-blue-700 text-white' : 'bg-primary-600 text-white'
										: darkMode 
										  ? 'bg-gray-800 border border-gray-700 text-gray-200 hover:bg-gray-700' 
										  : 'bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-50'
								}`}
								onClick={() => setSelectedFilter('All')}
							>
								All
							</button>
							<button
								className={`px-4 py-2 rounded-md text-sm ${
									selectedFilter === 'Completed'
										? darkMode ? 'bg-blue-700 text-white' : 'bg-primary-600 text-white'
										: darkMode 
										  ? 'bg-gray-800 border border-gray-700 text-gray-200 hover:bg-gray-700' 
										  : 'bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-50'
								}`}
								onClick={() => setSelectedFilter('Completed')}
							>
								Completed
							</button>
							<button
								className={`px-4 py-2 rounded-md text-sm ${
									selectedFilter === 'Pending'
										? darkMode ? 'bg-blue-700 text-white' : 'bg-primary-600 text-white'
										: darkMode 
										  ? 'bg-gray-800 border border-gray-700 text-gray-200 hover:bg-gray-700' 
										  : 'bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-50'
								}`}
								onClick={() => setSelectedFilter('Pending')}
							>
								Pending
							</button>
						</div>

						<button className={`px-4 py-2 border rounded-md flex items-center ${
							darkMode 
							? 'border-gray-700 bg-gray-800 text-gray-200 hover:bg-gray-700' 
							: 'border-neutral-300 text-neutral-700 bg-white hover:bg-neutral-50'
						}`}>
							<Filter size={16} className="mr-2" />
							<span>More Filters</span>
						</button>
					</div>

					{/* Reviews table */}
					<div className="overflow-x-auto">
						<table className="w-full">
							<thead className={`${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-neutral-50 text-neutral-600'}`}>
								<tr>
									<th className={`py-3 px-4 border-b ${darkMode ? 'border-gray-600' : 'border-neutral-200'} text-left text-sm font-medium`}>Employee</th>
									<th className={`py-3 px-4 border-b ${darkMode ? 'border-gray-600' : 'border-neutral-200'} text-left text-sm font-medium`}>Department</th>
									<th className={`py-3 px-4 border-b ${darkMode ? 'border-gray-600' : 'border-neutral-200'} text-left text-sm font-medium`}>Review Date</th>
									<th className={`py-3 px-4 border-b ${darkMode ? 'border-gray-600' : 'border-neutral-200'} text-left text-sm font-medium`}>Type</th>
									<th className={`py-3 px-4 border-b ${darkMode ? 'border-gray-600' : 'border-neutral-200'} text-left text-sm font-medium`}>Rating</th>
									<th className={`py-3 px-4 border-b ${darkMode ? 'border-gray-600' : 'border-neutral-200'} text-left text-sm font-medium`}>Status</th>
									<th className={`py-3 px-4 border-b ${darkMode ? 'border-gray-600' : 'border-neutral-200'} text-left text-sm font-medium`}>Reviewed By</th>
									<th className={`py-3 px-4 border-b ${darkMode ? 'border-gray-600' : 'border-neutral-200'} text-left text-sm font-medium`}>Action</th>
								</tr>
							</thead>
							<tbody>
								{filteredReviews.map((review) => (
									<motion.tr
										key={review.id}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 0.3 }}
										className={darkMode ? 'hover:bg-gray-700' : 'hover:bg-neutral-50'}
									>
										<td className={`py-3 px-4 border-b ${darkMode ? 'border-gray-700' : 'border-neutral-200'}`}>
											<div>
												<p className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-neutral-800'}`}>{review.employeeName}</p>
												<p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-neutral-500'}`}>{review.position}</p>
											</div>
										</td>
										<td className={`py-3 px-4 border-b ${darkMode ? 'border-gray-700 text-gray-300' : 'border-neutral-200 text-neutral-700'} text-sm`}>
											{review.department}
										</td>
										<td className={`py-3 px-4 border-b ${darkMode ? 'border-gray-700 text-gray-300' : 'border-neutral-200 text-neutral-700'} text-sm`}>
											{review.reviewDate}
										</td>
										<td className={`py-3 px-4 border-b ${darkMode ? 'border-gray-700 text-gray-300' : 'border-neutral-200 text-neutral-700'} text-sm`}>
											{review.reviewType}
										</td>
										<td className={`py-3 px-4 border-b ${darkMode ? 'border-gray-700' : 'border-neutral-200'}`}>
											{getRatingStars(review.rating)}
										</td>
										<td className={`py-3 px-4 border-b ${darkMode ? 'border-gray-700' : 'border-neutral-200'}`}>
											<span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(review.status)}`}>
												{review.status}
											</span>
										</td>
										<td className={`py-3 px-4 border-b ${darkMode ? 'border-gray-700 text-gray-300' : 'border-neutral-200 text-neutral-700'} text-sm`}>
											{review.reviewedBy}
										</td>
										<td className={`py-3 px-4 border-b ${darkMode ? 'border-gray-700' : 'border-neutral-200'}`}>
											<button className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-primary-600 hover:text-primary-700'} text-sm font-medium`}>
												View Details
											</button>
										</td>
									</motion.tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</PageTransition>
	);
};

// Stats card component
const StatCard = ({ title, value, icon, color, suffix }: {
	title: string;
	value: string;
	icon: React.ReactNode;
	color: string;
	suffix?: React.ReactNode;
}) => {
	const { theme } = useTheme();
	const darkMode = theme === 'dark';
	
	return (
		<div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-neutral-200'} rounded-lg shadow-sm border p-4`}>
			<div className="flex justify-between items-start">
				<div className={`${color} p-2 rounded-md`}>
					{icon}
				</div>
			</div>
			<h3 className={`${darkMode ? 'text-gray-300' : 'text-neutral-700'} font-medium mt-3`}>{title}</h3>
			<p className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-neutral-800'} mt-1`}>{value}</p>
			{suffix && suffix}
		</div>
	);
};

export default ReviewsPage;