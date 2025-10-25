"use client";

import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  Calendar, 
  Search, 
  Filter, 
  Download,
  Eye,
  Edit,
  Trash2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Plus
} from "lucide-react";

export default function Home() {
  const [filters, setFilters] = useState({
    fromCity: "",
    toCity: "",
    dateRange: "",
    departureDate: "",
    leadStatus: "All",
    teamMate: "All",
    international: false,
    domestic: false,
  });

  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLeads, setSelectedLeads] = useState<number[]>([]);

  // Mock data for dashboard stats
  const dashboardStats = [
    { title: "Total Leads", value: "1,247", change: "+12%", icon: Users, color: "blue" },
    { title: "Converted", value: "89", change: "+8%", icon: TrendingUp, color: "green" },
    { title: "Revenue", value: "₹2.4M", change: "+15%", icon: DollarSign, color: "purple" },
    { title: "This Month", value: "156", change: "+23%", icon: Calendar, color: "orange" },
  ];

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFilters({
      ...filters,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSelectLead = (index: number) => {
    setSelectedLeads(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const handleSelectAll = () => {
    if (selectedLeads.length === leads.length) {
      setSelectedLeads([]);
    } else {
      setSelectedLeads(leads.map((_, index) => index));
    }
  };

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        console.log("🚀 Fetching leads from backend...");
        const res = await fetch("http://localhost:5000/api/leads", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log("🛰️ Response status:", res.status);

        if (!res.ok) throw new Error("Failed to fetch leads");

        const result = await res.json();
        console.log("📦 Full backend response:", result);

        if (result.success && Array.isArray(result.data)) {
          setLeads(result.data);
          console.log("✅ Leads set in state:", result.data);
        } else {
          console.warn("⚠️ No data found or success flag missing");
          setLeads([]);
        }
      } catch (error) {
        console.error("❌ Error fetching leads:", error);
        // Use mock data if backend fails
        setLeads([
          {
            _id: "1",
            name: "John Doe",
            email: "john@example.com",
            mobile: "+91 98765 43210",
            fromLocation: "Mumbai",
            toLocation: "Goa",
            startDate: "2024-02-15",
            endDate: "2024-02-20",
            status: "New",
            budget: "₹50,000",
            travelers: 2
          },
          {
            _id: "2",
            name: "Jane Smith",
            email: "jane@example.com",
            mobile: "+91 98765 43211",
            fromLocation: "Delhi",
            toLocation: "Kerala",
            startDate: "2024-03-01",
            endDate: "2024-03-07",
            status: "Contacted",
            budget: "₹75,000",
            travelers: 4
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  const filteredLeads = leads.filter(lead => 
    searchTerm === "" || 
    lead.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.mobile?.includes(searchTerm) ||
    lead.fromLocation?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.toLocation?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen">
      <div className="flex">
          <Sidebar />

        <div className="flex-1 lg:ml-16">
          {/* Header */}
          <div className="bg-white shadow-sm border-b px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600">Welcome back! Here's what's happening with your leads.</p>
              </div>
              <div className="flex space-x-3">
                <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center">
                  <Download size={16} className="mr-2" />
                  Export
              </button>
                <button className="px-4 py-2 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center">
                  <Plus size={16} className="mr-2" />
                  Add Lead
              </button>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {dashboardStats.map((stat, index) => (
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
                      placeholder="Search leads by name, email, phone, or location..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <select
                    name="leadStatus"
                    value={filters.leadStatus}
                    onChange={handleChange}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="All">All Status</option>
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Qualified">Qualified</option>
                    <option value="Converted">Converted</option>
                  </select>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center">
                    <Filter size={16} className="mr-2" />
                    Filters
                  </button>
                </div>
              </div>
          </div>

            {/* Leads Table */}
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
              <div className="px-6 py-4 border-b bg-gray-50">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Leads</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">
                      {filteredLeads.length} leads found
                    </span>
                    {selectedLeads.length > 0 && (
                      <span className="text-sm text-purple-600">
                        {selectedLeads.length} selected
                      </span>
                    )}
                  </div>
                </div>
              </div>

            {loading ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto"></div>
                  <p className="text-gray-500 mt-2">Loading leads...</p>
              </div>
            ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left">
                          <input
                            type="checkbox"
                            checked={selectedLeads.length === leads.length && leads.length > 0}
                            onChange={handleSelectAll}
                            className="rounded border-gray-300"
                          />
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Lead
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Contact
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Trip Details
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Budget
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                  </tr>
                </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredLeads.length > 0 ? (
                        filteredLeads.map((lead: any, index: number) => (
                          <tr key={lead._id || index} className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                              <input
                                type="checkbox"
                                checked={selectedLeads.includes(index)}
                                onChange={() => handleSelectLead(index)}
                                className="rounded border-gray-300"
                              />
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center">
                                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                                  <span className="text-sm font-medium text-purple-600">
                                    {lead.name?.charAt(0) || "?"}
                                  </span>
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    {lead.name || "—"}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {lead.travelers || 1} traveler{lead.travelers > 1 ? 's' : ''}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="text-sm text-gray-900">{lead.email || "—"}</div>
                              <div className="text-sm text-gray-500 flex items-center">
                                <Phone size={12} className="mr-1" />
                                {lead.mobile || "—"}
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="text-sm text-gray-900 flex items-center">
                                <MapPin size={12} className="mr-1 text-gray-400" />
                                {lead.fromLocation || "—"} → {lead.toLocation || "—"}
                              </div>
                              <div className="text-sm text-gray-500 flex items-center">
                                <Calendar size={12} className="mr-1" />
                                {lead.startDate || "—"} to {lead.endDate || "—"}
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="text-sm font-medium text-gray-900">
                                {lead.budget || "—"}
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                lead.status === 'New' ? 'bg-blue-100 text-blue-800' :
                                lead.status === 'Contacted' ? 'bg-yellow-100 text-yellow-800' :
                                lead.status === 'Qualified' ? 'bg-green-100 text-green-800' :
                                lead.status === 'Converted' ? 'bg-purple-100 text-purple-800' :
                                'bg-gray-100 text-gray-800'
                              }`}>
                                {lead.status || "New"}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex space-x-2">
                                <button className="text-blue-600 hover:text-blue-800">
                                  <Eye size={16} />
                                </button>
                                <button className="text-green-600 hover:text-green-800">
                                  <Edit size={16} />
                                </button>
                                <button className="text-red-600 hover:text-red-800">
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                          <td colSpan={7} className="px-6 py-12 text-center">
                            <div className="text-gray-500">
                              <Users size={48} className="mx-auto mb-4 text-gray-300" />
                              <p className="text-lg font-medium">No leads found</p>
                              <p className="text-sm">Try adjusting your search or filters</p>
                            </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
                </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// <div className="bg-gray-50 text-gray-800 font-sans min-h-screen flex">
//   {/* Sidebar - 10% width */}
//   <div className="w-[10%] bg-gray-900 text-white">
//     <Sidebar />
//   </div>

//   {/* Main content - 90% width */}
//   <div className="flex-1 bg-gray-50">
//     {/* Header */}
//     <div className="flex items-center justify-between bg-white shadow-sm px-6 py-4 border-b">
//       <div className="text-lg font-semibold text-gray-700">Leads</div>
//       <div className="space-x-2">
//         <button className="px-4 py-2 text-sm border border-purple-500 text-purple-600 rounded hover:bg-purple-100">
//           More Actions
//         </button>
//         <button className="px-4 py-2 text-sm bg-purple-600 text-white rounded hover:bg-purple-700">
//           View Activities
//         </button>
//       </div>
//     </div>

//     {/* Filters Section */}
//     <div className="bg-white shadow-md rounded-lg p-6 m-6">
//       {/* Filter inputs... */}
//     </div>

//     {/* Table Section */}
//     <div className="bg-white shadow-md rounded-lg m-6 p-4 overflow-x-auto">
//       {loading ? (
//         <div className="text-center py-6 text-gray-500">
//           Loading leads...
//         </div>
//       ) : (
//         <table className="min-w-full border border-gray-200 text-sm">
//           <thead className="bg-gray-100 text-gray-700">
//             <tr>
//               <th className="border px-3 py-2">S.No.</th>
//               <th className="border px-3 py-2">Name</th>
//               <th className="border px-3 py-2">Email</th>
//               <th className="border px-3 py-2">Mobile</th>
//               <th className="border px-3 py-2">From</th>
//               <th className="border px-3 py-2">To</th>
//               <th className="border px-3 py-2">Start Date</th>
//               <th className="border px-3 py-2">End Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {leads.length > 0 ? (
//               leads.map((lead: any, index: number) => (
//                 <tr key={lead._id || index} className="text-center hover:bg-gray-50">
//                   <td className="border px-3 py-2">{index + 1}</td>
//                   <td className="border px-3 py-2">{lead.name || "—"}</td>
//                   <td className="border px-3 py-2">{lead.email || "—"}</td>
//                   <td className="border px-3 py-2">{lead.mobile || "—"}</td>
//                   <td className="border px-3 py-2">{lead.fromLocation || "—"}</td>
//                   <td className="border px-3 py-2">{lead.toLocation || "—"}</td>
//                   <td className="border px-3 py-2">{lead.startDate || "—"}</td>
//                   <td className="border px-3 py-2">{lead.endDate || "—"}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td className="border px-3 py-2 text-center" colSpan={8}>
//                   No leads found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       )}
//     </div>
//   </div>
// </div>
