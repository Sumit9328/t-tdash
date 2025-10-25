"use client";

import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { 
  Save, 
  Upload, 
  Bell, 
  Shield, 
  Globe, 
  Palette, 
  Database, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  User,
  Lock,
  Eye,
  EyeOff,
  Check,
  X,
  AlertCircle,
  Info,
  Settings as SettingsIcon,
  Bell as Notifications,
  Shield as Security,
  Palette as Appearance,
  Link as Integrations,
  CreditCard as Billing,
  Users as Team,
  Settings as General
} from "lucide-react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("general");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const tabs = [
    { id: "general", label: "General", icon: General },
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Notifications },
    { id: "security", label: "Security", icon: Security },
    { id: "appearance", label: "Appearance", icon: Appearance },
    { id: "integrations", label: "Integrations", icon: Integrations },
    { id: "billing", label: "Billing", icon: Billing },
    { id: "team", label: "Team", icon: Team }
  ];

  const [formData, setFormData] = useState({
    // General Settings
    companyName: "TripClap Travel Agency",
    website: "https://tripclap.com",
    timezone: "Asia/Kolkata",
    currency: "INR",
    language: "English",
    
    // Profile Settings
    firstName: "John",
    lastName: "Doe",
    email: "john@tripclap.com",
    phone: "+91 98765 43210",
    location: "Mumbai, India",
    bio: "Experienced travel agent with 5+ years in the industry",
    
    // Notification Settings
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    marketingEmails: false,
    leadAlerts: true,
    bookingUpdates: true,
    
    // Security Settings
    twoFactorAuth: false,
    loginAlerts: true,
    sessionTimeout: "30",
    
    // Appearance Settings
    theme: "light",
    sidebarCollapsed: false,
    compactMode: false,
    
    // Integration Settings
    googleCalendar: false,
    slackIntegration: false,
    whatsappBusiness: true,
    emailMarketing: false
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    // Show success message
  };

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
        <input
          type="text"
          value={formData.companyName}
          onChange={(e) => handleInputChange("companyName", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
        <input
          type="url"
          value={formData.website}
          onChange={(e) => handleInputChange("website", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
          <select
            value={formData.timezone}
            onChange={(e) => handleInputChange("timezone", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
            <option value="UTC">UTC</option>
            <option value="America/New_York">America/New_York (EST)</option>
            <option value="Europe/London">Europe/London (GMT)</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
          <select
            value={formData.currency}
            onChange={(e) => handleInputChange("currency", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="INR">INR (₹)</option>
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="GBP">GBP (£)</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderProfileSettings = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-6">
        <div className="h-20 w-20 rounded-full bg-purple-100 flex items-center justify-center">
          <span className="text-2xl font-medium text-purple-600">JD</span>
        </div>
        <div>
          <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center">
            <Upload size={16} className="mr-2" />
            Change Photo
          </button>
          <p className="text-xs text-gray-500 mt-1">JPG, PNG up to 2MB</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
        <input
          type="text"
          value={formData.location}
          onChange={(e) => handleInputChange("location", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
        <textarea
          value={formData.bio}
          onChange={(e) => handleInputChange("bio", e.target.value)}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <h3 className="text-sm font-medium text-gray-900">Email Notifications</h3>
            <p className="text-sm text-gray-500">Receive notifications via email</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={formData.emailNotifications}
              onChange={(e) => handleInputChange("emailNotifications", e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
          </label>
        </div>
        
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <h3 className="text-sm font-medium text-gray-900">SMS Notifications</h3>
            <p className="text-sm text-gray-500">Receive notifications via SMS</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={formData.smsNotifications}
              onChange={(e) => handleInputChange("smsNotifications", e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
          </label>
        </div>
        
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <h3 className="text-sm font-medium text-gray-900">Push Notifications</h3>
            <p className="text-sm text-gray-500">Receive push notifications in browser</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={formData.pushNotifications}
              onChange={(e) => handleInputChange("pushNotifications", e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
          </label>
        </div>
        
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <h3 className="text-sm font-medium text-gray-900">Lead Alerts</h3>
            <p className="text-sm text-gray-500">Get notified about new leads</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={formData.leadAlerts}
              onChange={(e) => handleInputChange("leadAlerts", e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
          </label>
        </div>
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Change Password</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-10"
                placeholder="Enter current password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? <EyeOff size={20} className="text-gray-400" /> : <Eye size={20} className="text-gray-400" />}
              </button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter new password"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Confirm new password"
            />
          </div>
        </div>
      </div>
      
      <div className="border-t pt-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Two-Factor Authentication</h3>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <h4 className="text-sm font-medium text-gray-900">Enable 2FA</h4>
            <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={formData.twoFactorAuth}
              onChange={(e) => handleInputChange("twoFactorAuth", e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
          </label>
        </div>
      </div>
    </div>
  );

  const renderAppearanceSettings = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
        <div className="grid grid-cols-3 gap-4">
          {[
            { value: "light", label: "Light", description: "Clean and bright" },
            { value: "dark", label: "Dark", description: "Easy on the eyes" },
            { value: "auto", label: "Auto", description: "Follow system" }
          ].map((theme) => (
            <label key={theme.value} className="relative cursor-pointer">
              <input
                type="radio"
                name="theme"
                value={theme.value}
                checked={formData.theme === theme.value}
                onChange={(e) => handleInputChange("theme", e.target.value)}
                className="sr-only peer"
              />
              <div className="p-4 border-2 border-gray-200 rounded-lg peer-checked:border-purple-500 peer-checked:bg-purple-50">
                <div className="text-sm font-medium text-gray-900">{theme.label}</div>
                <div className="text-xs text-gray-500">{theme.description}</div>
              </div>
            </label>
          ))}
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <h3 className="text-sm font-medium text-gray-900">Compact Mode</h3>
            <p className="text-sm text-gray-500">Reduce spacing for more content</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={formData.compactMode}
              onChange={(e) => handleInputChange("compactMode", e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
          </label>
        </div>
      </div>
    </div>
  );

  const renderIntegrationsSettings = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        {[
          { name: "Google Calendar", description: "Sync your calendar events", enabled: formData.googleCalendar, icon: Calendar },
          { name: "Slack", description: "Get notifications in Slack", enabled: formData.slackIntegration, icon: Bell },
          { name: "WhatsApp Business", description: "Send messages via WhatsApp", enabled: formData.whatsappBusiness, icon: Phone },
          { name: "Email Marketing", description: "Connect with email marketing tools", enabled: formData.emailMarketing, icon: Mail }
        ].map((integration, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg mr-3">
                <integration.icon size={20} className="text-purple-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">{integration.name}</h3>
                <p className="text-sm text-gray-500">{integration.description}</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={integration.enabled}
                onChange={(e) => handleInputChange(
                  integration.name.toLowerCase().replace(/\s+/g, '') + (integration.name === 'Google Calendar' ? 'Calendar' : ''),
                  e.target.checked
                )}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "general": return renderGeneralSettings();
      case "profile": return renderProfileSettings();
      case "notifications": return renderNotificationSettings();
      case "security": return renderSecuritySettings();
      case "appearance": return renderAppearanceSettings();
      case "integrations": return renderIntegrationsSettings();
      default: return renderGeneralSettings();
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
                <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
                <p className="text-gray-600">Manage your account and application preferences</p>
              </div>
              <button
                onClick={handleSave}
                disabled={loading}
                className="px-4 py-2 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 flex items-center"
              >
                {loading ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                ) : (
                  <Save size={16} className="mr-2" />
                )}
                Save Changes
              </button>
            </div>
          </div>

          <div className="flex">
            {/* Settings Sidebar */}
            <div className="w-64 bg-white border-r min-h-screen">
              <nav className="p-4">
                <div className="space-y-1">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? 'bg-purple-100 text-purple-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <tab.icon size={16} className="mr-3" />
                      {tab.label}
                    </button>
                  ))}
                </div>
              </nav>
            </div>

            {/* Settings Content */}
            <div className="flex-1 p-6">
              <div className="max-w-2xl">
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 capitalize">
                    {tabs.find(tab => tab.id === activeTab)?.label} Settings
                  </h2>
                  <p className="text-gray-600 mt-1">
                    {activeTab === "general" && "Configure your general application settings"}
                    {activeTab === "profile" && "Update your personal information and profile"}
                    {activeTab === "notifications" && "Manage your notification preferences"}
                    {activeTab === "security" && "Secure your account with strong passwords and 2FA"}
                    {activeTab === "appearance" && "Customize the look and feel of your dashboard"}
                    {activeTab === "integrations" && "Connect with third-party services"}
                    {activeTab === "billing" && "Manage your subscription and billing"}
                    {activeTab === "team" && "Configure team settings and permissions"}
                  </p>
                </div>

                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
