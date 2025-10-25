"use client";

import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye, 
  MoreVertical,
  Users,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  Star,
  TrendingUp,
  MessageSquare,
  Settings,
  UserPlus,
  Shield,
  Crown,
  Clock,
  Target,
  DollarSign
} from "lucide-react";

export default function Team() {
  const [teamMembers, setTeamMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");
  const [showAddModal, setShowAddModal] = useState(false);

  const roles = ["All", "Admin", "Senior Agent", "Travel Agent", "Support"];

  const mockTeamMembers = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@tripclap.com",
      phone: "+91 98765 43210",
      role: "Admin",
      avatar: "AJ",
      status: "online",
      joinDate: "2023-01-15",
      location: "Mumbai",
      performance: {
        leads: 45,
        conversions: 12,
        revenue: "₹450,000",
        rating: 4.9,
        target: 50
      },
      skills: ["Customer Service", "Sales", "Travel Planning"],
      lastActive: "2 hours ago"
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob@tripclap.com",
      phone: "+91 98765 43211",
      role: "Senior Agent",
      avatar: "BS",
      status: "away",
      joinDate: "2023-03-20",
      location: "Delhi",
      performance: {
        leads: 38,
        conversions: 8,
        revenue: "₹320,000",
        rating: 4.7,
        target: 40
      },
      skills: ["International Travel", "Luxury Packages", "Customer Relations"],
      lastActive: "1 day ago"
    },
    {
      id: 3,
      name: "Carol Davis",
      email: "carol@tripclap.com",
      phone: "+91 98765 43212",
      role: "Travel Agent",
      avatar: "CD",
      status: "online",
      joinDate: "2023-06-10",
      location: "Bangalore",
      performance: {
        leads: 42,
        conversions: 10,
        revenue: "₹380,000",
        rating: 4.8,
        target: 45
      },
      skills: ["Domestic Travel", "Adventure Tours", "Group Bookings"],
      lastActive: "30 minutes ago"
    },
    {
      id: 4,
      name: "David Wilson",
      email: "david@tripclap.com",
      phone: "+91 98765 43213",
      role: "Support",
      avatar: "DW",
      status: "offline",
      joinDate: "2023-08-05",
      location: "Chennai",
      performance: {
        leads: 25,
        conversions: 5,
        revenue: "₹200,000",
        rating: 4.6,
        target: 30
      },
      skills: ["Customer Support", "Technical Assistance", "Problem Solving"],
      lastActive: "3 days ago"
    }
  ];

  const teamStats = [
    { title: "Total Members", value: "24", change: "+2", icon: Users, color: "blue" },
    { title: "Active Today", value: "18", change: "+3", icon: TrendingUp, color: "green" },
    { title: "Avg Performance", value: "87%", change: "+5%", icon: Target, color: "purple" },
    { title: "Team Revenue", value: "₹1.35M", change: "+12%", icon: DollarSign, color: "orange" }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setTeamMembers(mockTeamMembers);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === "All" || member.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online": return "bg-green-500";
      case "away": return "bg-yellow-500";
      case "offline": return "bg-gray-400";
      default: return "bg-gray-400";
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "Admin": return <Crown size={16} className="text-yellow-600" />;
      case "Senior Agent": return <Award size={16} className="text-blue-600" />;
      case "Travel Agent": return <Users size={16} className="text-green-600" />;
      case "Support": return <Shield size={16} className="text-purple-600" />;
      default: return <Users size={16} className="text-gray-600" />;
    }
  };

  const getPerformanceColor = (percentage: number) => {
    if (percentage >= 90) return "text-green-600";
    if (percentage >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen">
      <div className="flex">
        <Sidebar />
        
        <div className="flex-1 lg:ml-16">
          {/* Header */}
          <div className="bg-white shadow-sm border-b px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Team Management</h1>
                <p className="text-gray-600">Manage your team members and their performance</p>
              </div>
              <div className="flex space-x-3">
                <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center">
                  <Settings size={16} className="mr-2" />
                  Settings
                </button>
                <button 
                  onClick={() => setShowAddModal(true)}
                  className="px-4 py-2 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center"
                >
                  <UserPlus size={16} className="mr-2" />
                  Add Member
                </button>
              </div>
            </div>
          </div>

          <div className="p-6">
            {/* Team Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {teamStats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-green-600 flex items-center mt-1">
                        <TrendingUp size={14} className="mr-1" />
                        {stat.change}
                      </p>
                    </div>
                    <div className={`p-3 rounded-full bg-${stat.color}-100`}>
                      <stat.icon size={24} className={`text-${stat.color}-600`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Search and Filters */}
            <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search team members by name, email, or location..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <select
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  >
                    {roles.map(role => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center">
                    <Filter size={16} className="mr-2" />
                    Filters
                  </button>
                </div>
              </div>
            </div>

            {/* Team Members Grid */}
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto"></div>
                <p className="text-gray-500 mt-2">Loading team members...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMembers.map((member) => (
                  <div key={member.id} className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
                    {/* Member Header */}
                    <div className="p-6 border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="relative">
                            <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                              <span className="text-lg font-medium text-purple-600">
                                {member.avatar}
                              </span>
                            </div>
                            <div className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${getStatusColor(member.status)}`}></div>
                          </div>
                          <div className="ml-4">
                            <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                            <div className="flex items-center text-sm text-gray-500">
                              {getRoleIcon(member.role)}
                              <span className="ml-1">{member.role}</span>
                            </div>
                          </div>
                        </div>
                        <button className="p-2 text-gray-400 hover:text-gray-600">
                          <MoreVertical size={20} />
                        </button>
                      </div>
                    </div>

                    {/* Member Details */}
                    <div className="p-6">
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Mail size={14} className="mr-2" />
                          {member.email}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Phone size={14} className="mr-2" />
                          {member.phone}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin size={14} className="mr-2" />
                          {member.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar size={14} className="mr-2" />
                          Joined {new Date(member.joinDate).toLocaleDateString()}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock size={14} className="mr-2" />
                          Last active {member.lastActive}
                        </div>
                      </div>

                      {/* Performance Metrics */}
                      <div className="bg-gray-50 rounded-lg p-4 mb-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-3">Performance</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="text-gray-500">Leads</div>
                            <div className="font-medium">{member.performance.leads}</div>
                          </div>
                          <div>
                            <div className="text-gray-500">Conversions</div>
                            <div className="font-medium">{member.performance.conversions}</div>
                          </div>
                          <div>
                            <div className="text-gray-500">Revenue</div>
                            <div className="font-medium">{member.performance.revenue}</div>
                          </div>
                          <div>
                            <div className="text-gray-500">Rating</div>
                            <div className="flex items-center">
                              <Star size={14} className="text-yellow-500 mr-1" />
                              <span className="font-medium">{member.performance.rating}</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-500">Target Progress</span>
                            <span className="font-medium">
                              {Math.round((member.performance.leads / member.performance.target) * 100)}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${
                                (member.performance.leads / member.performance.target) >= 0.9 ? 'bg-green-500' :
                                (member.performance.leads / member.performance.target) >= 0.7 ? 'bg-yellow-500' : 'bg-red-500'
                              }`}
                              style={{ width: `${Math.min((member.performance.leads / member.performance.target) * 100, 100)}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Skills</h4>
                        <div className="flex flex-wrap gap-1">
                          {member.skills.map((skill: string, index: number) => (
                            <span key={index} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex space-x-2">
                        <button className="flex-1 px-3 py-2 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center justify-center">
                          <MessageSquare size={14} className="mr-1" />
                          Message
                        </button>
                        <button className="px-3 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                          <Edit size={14} />
                        </button>
                        <button className="px-3 py-2 text-sm border border-red-300 text-red-700 rounded-lg hover:bg-red-50">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {!loading && filteredMembers.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-500">
                  <Users size={48} className="mx-auto mb-4 text-gray-300" />
                  <p className="text-lg font-medium">No team members found</p>
                  <p className="text-sm">Try adjusting your search or filters</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
