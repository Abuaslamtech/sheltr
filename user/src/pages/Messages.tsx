
import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Search } from "lucide-react";

const Messages = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const conversations = [
    {
      id: 1,
      name: "Sarah Johnson",
      lastMessage: "Yes, the property is still available",
      time: "10:30 AM",
      unread: 2,
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      name: "Michael Chen",
      lastMessage: "I'm interested in viewing the apartment",
      time: "Yesterday",
      unread: 0,
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      name: "Aisha Mohammed",
      lastMessage: "When can we schedule a viewing?",
      time: "Yesterday",
      unread: 0,
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: 4,
      name: "David Okafor",
      lastMessage: "Thank you for the information",
      time: "Tuesday",
      unread: 0,
      avatar: "https://i.pravatar.cc/150?img=4",
    },
  ];

  return (
    <AppLayout>
      <div className="container-app">
        <div className="pt-6 pb-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Messages</h1>
          </div>
          
          <div className="relative mb-6">
            <Search className="absolute left-3 top-3 h-5 w-5 text-kadestate-neutral-500" />
            <input 
              type="text"
              placeholder="Search messages..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-kadestate-neutral-300 focus:outline-none focus:ring-2 focus:ring-kadestate-blue focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="space-y-4 mb-10">
            {conversations.map((conversation) => (
              <Card 
                key={conversation.id}
                className="p-4 flex items-center cursor-pointer hover:bg-kadestate-neutral-200/50 transition-colors"
              >
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={conversation.avatar} alt={conversation.name} />
                  <AvatarFallback>{conversation.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-semibold text-kadestate-neutral-900 truncate">
                      {conversation.name}
                    </h3>
                    <span className="text-xs text-kadestate-neutral-500 whitespace-nowrap ml-2">
                      {conversation.time}
                    </span>
                  </div>
                  <p className="text-sm text-kadestate-neutral-600 truncate">
                    {conversation.lastMessage}
                  </p>
                </div>
                
                {conversation.unread > 0 && (
                  <div className="ml-3 bg-kadestate-blue text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {conversation.unread}
                  </div>
                )}
              </Card>
            ))}
          </div>
          
          {conversations.length === 0 && (
            <div className="flex flex-col items-center justify-center h-60 text-center">
              <div className="text-kadestate-neutral-600">
                <p className="mb-2">No messages yet</p>
                <p className="text-sm text-kadestate-neutral-500">
                  Your conversations with property owners and interested buyers will appear here
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default Messages;
