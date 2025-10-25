"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  DollarSign, 
  Calendar, 
  Download, 
  Filter,
  BarChart3,
  PieChart,
  Activity,
  Target,
  Award,
  Clock,
  MapPin,
  Star,
  MessageSquare,
  Phone,
  Mail
} from "lucide-react";

export default function Reports() {
  const [loading, setLoading] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState("30d");
  const [selectedMetric, setSelectedMetric] = useState("revenue");

  const periods = [
    { value: "7d", label: "Last 7 days" },
    { value: "30d", label: "Last 30 days" },
    { value: "90d", label: "Last 90 days" },
    { value: "1y", label: "Last year" }
  ];

  const metrics = [
    { value: "revenue", label: "Revenue", icon: DollarSign, color: "green" },
    { value: "leads", label: "Leads", icon: Users, color: "blue" },
    { value: "conversions", label: "Conversions", icon: Target, color: "purple" },
    { value: "satisfaction", label: "Satisfaction", icon: Star, color: "yellow" }
  ];

  const overviewStats = [
    {
      title: "Total Revenue",
      value: "₹2,847,500",
      change: "+12.5%",
      changeType: "positive",
      icon: DollarSign,
      color: "green"
    },
    {
      title: "New Leads",
      value: "1,247",
      change: "+8.2%",
      changeType: "positive",
      icon: Users,
      color: "blue"
    },
    {
      title: "Conversion Rate",
      value: "23.4%",
      change: "+2.1%",
      changeType: "positive",
      icon: Target,
      color: "purple"
    },
    {
      title: "Customer Satisfaction",
      value: "4.8/5",
      change: "+0.3",
      changeType: "positive",
      icon: Star,
      color: "yellow"
    }
  ];

  const topDestinations = [
    { name: "Goa", bookings: 45, revenue: "₹1,125,000", growth: "+15%" },
    { name: "Kerala", bookings: 38, revenue: "₹1,140,000", growth: "+12%" },
    { name: "Dubai", bookings: 28, revenue: "₹2,380,000", growth: "+8%" },
    { name: "Manali", bookings: 22, revenue: "₹990,000", growth: "+18%" },
    { name: "Rajasthan", bookings: 19, revenue: "₹855,000", growth: "+5%" }
  ];

  const leadSources = [
    { source: "Website", leads: 45, percentage: 35 },
    { source: "Social Media", leads: 28, percentage: 22 },
    { source: "Referrals", leads: 25, percentage: 19 },
    { source: "Google Ads", leads: 18, percentage: 14 },
    { source: "Other", leads: 12, percentage: 10 }
  ];

  const recentActivities = [
    {
      id: 1,
      type: "booking",
      message: "New booking received for Goa package",
      customer: "John Doe",
      amount: "₹25,000",
      timestamp: "2 hours ago",
      icon: Calendar,
      color: "green"
    },
    {
      id: 2,
      type: "lead",
      message: "New lead from website",
      customer: "Jane Smith",
      amount: null,
      timestamp: "4 hours ago",
      icon: Users,
      color: "blue"
    },
    {
      id: 3,
      type: "payment",
      message: "Payment received for Kerala package",
      customer: "Mike Johnson",
      amount: "₹35,000",
      timestamp: "6 hours ago",
      icon: DollarSign,
      color: "green"
    },
    {
      id: 4,
      type: "review",
      message: "5-star review received",
      customer: "Sarah Wilson",
      amount: null,
      timestamp: "1 day ago",
      icon: Star,
      color: "yellow"
    }
  ];

  const teamPerformance = [
    {
      name: "Alice Johnson",
      role: "Senior Agent",
      leads: 45,
      conversions: 12,
      revenue: "₹450,000",
      rating: 4.9,
      avatar: "AJ"
    },
    {
      name: "Bob Smith",
      role: "Travel Agent",
      leads: 38,
      conversions: 8,
      revenue: "₹320,000",
      rating: 4.7,
      avatar: "BS"
    },
    {
      name: "Carol Davis",
      role: "Travel Agent",
      leads: 42,
      conversions: 10,
      revenue: "₹380,000",
      rating: 4.8,
      avatar: "CD"
    }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const getChangeColor = (changeType: string) => {
    return changeType === "positive" ? "text-green-600" : "text-red-600";
  };

  const getChangeIcon = (changeType: string) => {
    return changeType === "positive" ? TrendingUp : TrendingDown;
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
                <h1 className="text-2xl font-bold text-gray-900">Analytics & Reports</h1>
                <p className="text-gray-600">Track your business performance and insights</p>
              </div>
              <div className="flex space-x-3">
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                >
                  {periods.map(period => (
                    <option key={period.value} value={period.value}>{period.label}</option>
                  ))}
                </select>
                <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center">
                  <Filter size={16} className="mr-2" />
                  Filters
                </button>
                <button className="px-4 py-2 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center">
                  <Download size={16} className="mr-2" />
                  Export Report
                </button>
              </div>
            </div>
          </div>

          <div className="p-6">
            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {overviewStats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className={`text-sm flex items-center mt-1 ${getChangeColor(stat.changeType)}`}>
                        {React.createElement(getChangeIcon(stat.changeType), { size: 14, className: "mr-1" })}
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

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Revenue Chart */}
              <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Revenue Trend</h3>
                  <div className="flex space-x-2">
                    {metrics.map(metric => (
                      <button
                        key={metric.value}
                        onClick={() => setSelectedMetric(metric.value)}
                        className={`px-3 py-1 text-sm rounded-lg flex items-center ${
                          selectedMetric === metric.value
                            ? 'bg-purple-100 text-purple-700'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <metric.icon size={14} className="mr-1" />
                        {metric.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 size={48} className="mx-auto mb-4 text-gray-300" />
                    <p className="text-gray-500">Revenue chart would be displayed here</p>
                    <p className="text-sm text-gray-400">Integration with charting library needed</p>
                  </div>
                </div>
              </div>

              {/* Lead Sources */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Lead Sources</h3>
                <div className="space-y-4">
                  {leadSources.map((source, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-purple-500 mr-3"></div>
                        <span className="text-sm font-medium text-gray-900">{source.source}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">{source.leads}</div>
                        <div className="text-xs text-gray-500">{source.percentage}%</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '35%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Top Destinations */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Destinations</h3>
                <div className="space-y-4">
                  {topDestinations.map((destination, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-sm font-medium text-purple-600">{index + 1}</span>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{destination.name}</div>
                          <div className="text-sm text-gray-500">{destination.bookings} bookings</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-gray-900">{destination.revenue}</div>
                        <div className="text-sm text-green-600">{destination.growth}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Performance */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Team Performance</h3>
                <div className="space-y-4">
                  {teamPerformance.map((member, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-sm font-medium text-purple-600">{member.avatar}</span>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{member.name}</div>
                          <div className="text-sm text-gray-500">{member.role}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">{member.revenue}</div>
                        <div className="text-xs text-gray-500">{member.leads} leads • {member.conversions} conversions</div>
                        <div className="flex items-center text-yellow-500">
                          <Star size={12} className="mr-1" />
                          <span className="text-xs">{member.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activities</h3>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className={`p-2 rounded-full bg-${activity.color}-100 mr-4`}>
                      <activity.icon size={20} className={`text-${activity.color}-600`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                      <p className="text-xs text-gray-500">{activity.customer} • {activity.timestamp}</p>
                    </div>
                    {activity.amount && (
                      <div className="text-sm font-medium text-gray-900">{activity.amount}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
