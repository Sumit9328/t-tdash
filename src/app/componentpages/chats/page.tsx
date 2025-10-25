"use client";

import { useState, useEffect, useRef } from "react";
import Sidebar from "../components/Sidebar";
import { 
  Search, 
  Send, 
  Phone, 
  Video, 
  MoreVertical, 
  Paperclip, 
  Smile, 
  Clock,
  Check,
  CheckCheck,
  User,
  MessageSquare,
  Filter,
  Archive,
  Star,
  Flag
} from "lucide-react";

export default function Chats() {
  const [chats, setChats] = useState<any[]>([]);
  const [selectedChat, setSelectedChat] = useState<any>(null);
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const mockChats = [
    {
      id: 1,
      customer: {
        name: "John Doe",
        avatar: "JD",
        phone: "+91 98765 43210",
        email: "john@example.com"
      },
      lastMessage: "Thanks for the detailed itinerary!",
      timestamp: "2 min ago",
      unread: 2,
      status: "online",
      leadInfo: {
        destination: "Goa",
        budget: "₹50,000",
        travelers: 2,
        travelDate: "2024-02-15"
      }
    },
    {
      id: 2,
      customer: {
        name: "Jane Smith",
        avatar: "JS",
        phone: "+91 98765 43211",
        email: "jane@example.com"
      },
      lastMessage: "Can you help me with flight bookings?",
      timestamp: "15 min ago",
      unread: 0,
      status: "away",
      leadInfo: {
        destination: "Kerala",
        budget: "₹75,000",
        travelers: 4,
        travelDate: "2024-03-01"
      }
    },
    {
      id: 3,
      customer: {
        name: "Mike Johnson",
        avatar: "MJ",
        phone: "+91 98765 43212",
        email: "mike@example.com"
      },
      lastMessage: "Perfect! I'll confirm the booking tomorrow.",
      timestamp: "1 hour ago",
      unread: 0,
      status: "offline",
      leadInfo: {
        destination: "Dubai",
        budget: "₹1,20,000",
        travelers: 2,
        travelDate: "2024-04-10"
      }
    },
    {
      id: 4,
      customer: {
        name: "Sarah Wilson",
        avatar: "SW",
        phone: "+91 98765 43213",
        email: "sarah@example.com"
      },
      lastMessage: "What about the hotel amenities?",
      timestamp: "2 hours ago",
      unread: 1,
      status: "online",
      leadInfo: {
        destination: "Manali",
        budget: "₹45,000",
        travelers: 3,
        travelDate: "2024-05-20"
      }
    }
  ];

  const mockMessages = {
    1: [
      {
        id: 1,
        text: "Hi! I'm interested in the Goa package you shared.",
        sender: "customer",
        timestamp: "10:30 AM",
        status: "read"
      },
      {
        id: 2,
        text: "Hello John! Great to hear from you. I'd be happy to help you with the Goa package. What specific dates are you looking at?",
        sender: "agent",
        timestamp: "10:32 AM",
        status: "sent"
      },
      {
        id: 3,
        text: "We're planning for February 15-20, 2024. What's included in the package?",
        sender: "customer",
        timestamp: "10:35 AM",
        status: "read"
      },
      {
        id: 4,
        text: "Perfect! The package includes 4 nights accommodation, breakfast, airport transfers, and guided city tour. I'll send you the detailed itinerary.",
        sender: "agent",
        timestamp: "10:37 AM",
        status: "sent"
      },
      {
        id: 5,
        text: "Thanks for the detailed itinerary!",
        sender: "customer",
        timestamp: "10:45 AM",
        status: "read"
      }
    ],
    2: [
      {
        id: 1,
        text: "Hi, I saw your Kerala backwaters package. It looks amazing!",
        sender: "customer",
        timestamp: "9:15 AM",
        status: "read"
      },
      {
        id: 2,
        text: "Hello Jane! Yes, it's one of our most popular packages. The backwaters experience is truly magical. When are you planning to visit?",
        sender: "agent",
        timestamp: "9:17 AM",
        status: "sent"
      },
      {
        id: 3,
        text: "We're thinking March 1-7. Can you help me with flight bookings?",
        sender: "customer",
        timestamp: "9:20 AM",
        status: "read"
      }
    ]
  };

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setChats(mockChats);
      setSelectedChat(mockChats[0]);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedChat]);

  const filteredChats = chats.filter(chat =>
    chat.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chat.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendMessage = () => {
    if (message.trim()) {
      // Here you would typically send the message to your backend
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online": return "bg-green-500";
      case "away": return "bg-yellow-500";
      case "offline": return "bg-gray-400";
      default: return "bg-gray-400";
    }
  };

  const getMessageStatusIcon = (status: string) => {
    switch (status) {
      case "sent": return <Check size={14} className="text-gray-400" />;
      case "delivered": return <CheckCheck size={14} className="text-gray-400" />;
      case "read": return <CheckCheck size={14} className="text-blue-500" />;
      default: return null;
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
                <h1 className="text-2xl font-bold text-gray-900">Customer Chats</h1>
                <p className="text-gray-600">Communicate with your leads and customers</p>
              </div>
              <div className="flex space-x-3">
                <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center">
                  <Filter size={16} className="mr-2" />
                  Filter
                </button>
                <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center">
                  <Archive size={16} className="mr-2" />
                  Archive
                </button>
              </div>
            </div>
          </div>

          <div className="flex h-[calc(100vh-120px)]">
            {/* Chat List */}
            <div className="w-1/3 border-r bg-white">
              <div className="p-4 border-b">
                <div className="relative">
                  <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="overflow-y-auto">
                {loading ? (
                  <div className="p-4 text-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600 mx-auto"></div>
                    <p className="text-gray-500 mt-2 text-sm">Loading chats...</p>
                  </div>
                ) : (
                  filteredChats.map((chat) => (
                    <div
                      key={chat.id}
                      onClick={() => setSelectedChat(chat)}
                      className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                        selectedChat?.id === chat.id ? 'bg-purple-50 border-purple-200' : ''
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                            <span className="text-sm font-medium text-purple-600">
                              {chat.customer.avatar}
                            </span>
                          </div>
                          <div className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${getStatusColor(chat.status)}`}></div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium text-gray-900 truncate">
                              {chat.customer.name}
                            </h3>
                            <span className="text-xs text-gray-500">{chat.timestamp}</span>
                          </div>
                          <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                          <div className="flex items-center justify-between mt-1">
                            <div className="text-xs text-gray-500">
                              {chat.leadInfo.destination} • {chat.leadInfo.budget}
                            </div>
                            {chat.unread > 0 && (
                              <span className="bg-purple-600 text-white text-xs rounded-full px-2 py-1">
                                {chat.unread}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
              {selectedChat ? (
                <>
                  {/* Chat Header */}
                  <div className="bg-white border-b px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                            <span className="text-sm font-medium text-purple-600">
                              {selectedChat.customer.avatar}
                            </span>
                          </div>
                          <div className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${getStatusColor(selectedChat.status)}`}></div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {selectedChat.customer.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {selectedChat.customer.phone} • {selectedChat.customer.email}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
                          <Phone size={20} />
                        </button>
                        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
                          <Video size={20} />
                        </button>
                        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
                          <MoreVertical size={20} />
                        </button>
                      </div>
                    </div>
                    
                    {/* Lead Info */}
                    <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Destination:</span>
                          <span className="ml-2 font-medium">{selectedChat.leadInfo.destination}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Budget:</span>
                          <span className="ml-2 font-medium">{selectedChat.leadInfo.budget}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Travelers:</span>
                          <span className="ml-2 font-medium">{selectedChat.leadInfo.travelers}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Travel Date:</span>
                          <span className="ml-2 font-medium">{selectedChat.leadInfo.travelDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
                    <div className="space-y-4">
                      {mockMessages[selectedChat.id as keyof typeof mockMessages]?.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex ${msg.sender === 'agent' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            msg.sender === 'agent' 
                              ? 'bg-purple-600 text-white' 
                              : 'bg-white text-gray-900 border'
                          }`}>
                            <p className="text-sm">{msg.text}</p>
                            <div className="flex items-center justify-between mt-1">
                              <span className="text-xs opacity-70">{msg.timestamp}</span>
                              {msg.sender === 'agent' && (
                                <div className="ml-2">
                                  {getMessageStatusIcon(msg.status)}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                      <div ref={messagesEndRef} />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="bg-white border-t px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
                        <Paperclip size={20} />
                      </button>
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                          placeholder="Type your message..."
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700">
                          <Smile size={20} />
                        </button>
                      </div>
                      <button
                        onClick={handleSendMessage}
                        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center"
                      >
                        <Send size={16} className="mr-1" />
                        Send
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center bg-gray-50">
                  <div className="text-center">
                    <MessageSquare size={48} className="mx-auto mb-4 text-gray-300" />
                    <p className="text-lg font-medium text-gray-500">Select a conversation</p>
                    <p className="text-sm text-gray-400">Choose a chat from the sidebar to start messaging</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
