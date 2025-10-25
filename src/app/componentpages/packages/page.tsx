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
  Star, 
  MapPin, 
  Calendar, 
  Users, 
  DollarSign,
  Download,
  Upload,
  Globe,
  Mountain,
  Plane,
  Car,
  Hotel,
  Utensils,
  Package
} from "lucide-react";

export default function Packages() {
  const [packages, setPackages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAddModal, setShowAddModal] = useState(false);

  const categories = ["All", "Domestic", "International", "Adventure", "Religious", "Honeymoon", "Family"];

  const mockPackages = [
    {
      id: 1,
      name: "Goa Beach Paradise",
      description: "5 days of sun, sand, and sea in beautiful Goa",
      duration: "5 Days / 4 Nights",
      price: "₹25,000",
      originalPrice: "₹30,000",
      discount: "17%",
      category: "Domestic",
      destinations: ["Goa", "Calangute", "Baga Beach"],
      highlights: ["Beach Activities", "Water Sports", "Nightlife", "Local Cuisine"],
      rating: 4.8,
      reviews: 124,
      image: "/api/placeholder/300/200",
      status: "Active",
      bookings: 45,
      maxCapacity: 50
    },
    {
      id: 2,
      name: "Kerala Backwaters",
      description: "Experience the serene backwaters and lush greenery",
      duration: "6 Days / 5 Nights",
      price: "₹35,000",
      originalPrice: "₹40,000",
      discount: "12%",
      category: "Domestic",
      destinations: ["Kochi", "Alleppey", "Munnar"],
      highlights: ["Houseboat Stay", "Tea Plantations", "Spice Gardens", "Cultural Shows"],
      rating: 4.9,
      reviews: 89,
      image: "/api/placeholder/300/200",
      status: "Active",
      bookings: 32,
      maxCapacity: 40
    },
    {
      id: 3,
      name: "Dubai Extravaganza",
      description: "Luxury experience in the city of gold",
      duration: "7 Days / 6 Nights",
      price: "₹85,000",
      originalPrice: "₹95,000",
      discount: "11%",
      category: "International",
      destinations: ["Dubai", "Abu Dhabi", "Sharjah"],
      highlights: ["Burj Khalifa", "Desert Safari", "Shopping", "Luxury Hotels"],
      rating: 4.7,
      reviews: 156,
      image: "/api/placeholder/300/200",
      status: "Active",
      bookings: 28,
      maxCapacity: 35
    },
    {
      id: 4,
      name: "Himachal Adventure",
      description: "Thrilling mountain adventure in the Himalayas",
      duration: "8 Days / 7 Nights",
      price: "₹45,000",
      originalPrice: "₹50,000",
      discount: "10%",
      category: "Adventure",
      destinations: ["Manali", "Shimla", "Kullu"],
      highlights: ["Trekking", "River Rafting", "Paragliding", "Mountain Biking"],
      rating: 4.6,
      reviews: 67,
      image: "/api/placeholder/300/200",
      status: "Active",
      bookings: 18,
      maxCapacity: 25
    }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setPackages(mockPackages);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredPackages = packages.filter(pkg => {
    const matchesSearch = pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pkg.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pkg.destinations.some((dest: string) => dest.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || pkg.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Domestic": return <MapPin size={16} />;
      case "International": return <Globe size={16} />;
      case "Adventure": return <Mountain size={16} />;
      case "Religious": return <Star size={16} />;
      case "Honeymoon": return <Star size={16} />;
      case "Family": return <Users size={16} />;
      default: return <MapPin size={16} />;
    }
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
                <h1 className="text-2xl font-bold text-gray-900">Travel Packages</h1>
                <p className="text-gray-600">Manage your travel packages and itineraries</p>
              </div>
              <div className="flex space-x-3">
                <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center">
                  <Download size={16} className="mr-2" />
                  Export
                </button>
                <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center">
                  <Upload size={16} className="mr-2" />
                  Import
                </button>
                <button 
                  onClick={() => setShowAddModal(true)}
                  className="px-4 py-2 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center"
                >
                  <Plus size={16} className="mr-2" />
                  Add Package
                </button>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="p-6">
            <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search packages by name, destination, or description..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center">
                    <Filter size={16} className="mr-2" />
                    More Filters
                  </button>
                </div>
              </div>
            </div>

            {/* Packages Grid */}
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto"></div>
                <p className="text-gray-500 mt-2">Loading packages...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPackages.map((pkg) => (
                  <div key={pkg.id} className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
                    {/* Package Image */}
                    <div className="relative h-48 bg-gradient-to-r from-purple-400 to-pink-400">
                      <div className="absolute top-4 left-4">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          pkg.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {pkg.status}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded">
                          {pkg.discount} OFF
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="flex items-center">
                          <Star size={16} className="text-yellow-400 mr-1" />
                          <span className="text-sm font-medium">{pkg.rating}</span>
                          <span className="text-xs text-gray-200 ml-1">({pkg.reviews})</span>
                        </div>
                      </div>
                    </div>

                    {/* Package Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{pkg.name}</h3>
                        <div className="flex items-center text-gray-500">
                          {getCategoryIcon(pkg.category)}
                          <span className="ml-1 text-sm">{pkg.category}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-3">{pkg.description}</p>
                      
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <Calendar size={14} className="mr-1" />
                        <span>{pkg.duration}</span>
                        <Users size={14} className="ml-3 mr-1" />
                        <span>{pkg.bookings}/{pkg.maxCapacity} booked</span>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-2xl font-bold text-gray-900">{pkg.price}</span>
                            <span className="text-sm text-gray-500 line-through ml-2">{pkg.originalPrice}</span>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-500">per person</div>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="text-sm font-medium text-gray-700 mb-2">Destinations:</div>
                        <div className="flex flex-wrap gap-1">
                          {pkg.destinations.map((dest: string, index: number) => (
                            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                              {dest}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="text-sm font-medium text-gray-700 mb-2">Highlights:</div>
                        <div className="flex flex-wrap gap-1">
                          {pkg.highlights.slice(0, 3).map((highlight: string, index: number) => (
                            <span key={index} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">
                              {highlight}
                            </span>
                          ))}
                          {pkg.highlights.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                              +{pkg.highlights.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <button className="flex-1 px-3 py-2 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center justify-center">
                          <Eye size={14} className="mr-1" />
                          View
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

            {!loading && filteredPackages.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-500">
                  <Package size={48} className="mx-auto mb-4 text-gray-300" />
                  <p className="text-lg font-medium">No packages found</p>
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
