
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CustomBadge } from "@/components/ui/custom-badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, MoreHorizontal, MessageSquare, Filter, Inbox, User, Send } from "lucide-react";
import { supportTicketsMockData } from "@/services/adminMockData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Support = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priority, setPriority] = useState("all");
  const [status, setStatus] = useState("all");
  const [category, setCategory] = useState("all");
  const [selectedTicket, setSelectedTicket] = useState(supportTicketsMockData[0].id);
  
  const filteredTickets = supportTicketsMockData.filter(ticket => {
    // Filter by search term
    const searchMatch = ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        ticket.userName.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by priority
    const priorityMatch = priority === 'all' || ticket.priority === priority;
    
    // Filter by status
    const statusMatch = status === 'all' || ticket.status === status;
    
    // Filter by category
    const categoryMatch = category === 'all' || ticket.category === category;
    
    return searchMatch && priorityMatch && statusMatch && categoryMatch;
  });

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "open":
        return "warning";
      case "in-progress":
        return "secondary";
      case "closed":
        return "outline";
      default:
        return "outline";
    }
  };

  const getPriorityBadgeVariant = (priority: string) => {
    switch (priority) {
      case "high":
        return "destructive";
      case "medium":
        return "warning";
      case "low":
        return "default";
      default:
        return "outline";
    }
  };

  const currentTicket = supportTicketsMockData.find(ticket => ticket.id === selectedTicket);

  return (
    <div className="animate-fade-in">
      <h1 className="admin-page-title">Support Management</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Support Tickets</CardTitle>
                <Badge variant="outline" className="bg-background">
                  <Inbox className="h-3.5 w-3.5 mr-1" />
                  {filteredTickets.filter(t => t.status !== 'closed').length} active
                </Badge>
              </div>
              <CardDescription>
                Manage user support tickets and inquiries.
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-0">
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search tickets..."
                    className="pl-8 bg-background"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Filter className="h-3.5 w-3.5" />
                    <span>Filters</span>
                  </Button>
                  
                  <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger className="h-8 text-xs w-[120px]">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="open">Open</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="closed">Closed</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <div className="px-6 mt-4">
              <div className="text-sm font-medium text-muted-foreground mb-2">
                {filteredTickets.length} tickets
              </div>
            </div>
            <div className="max-h-[600px] overflow-y-auto">
              {filteredTickets.length > 0 ? (
                filteredTickets.map((ticket) => (
                  <div
                    key={ticket.id}
                    className={`p-4 border-b cursor-pointer hover:bg-muted/50 flex flex-col gap-2 ${
                      selectedTicket === ticket.id ? "bg-muted" : ""
                    }`}
                    onClick={() => setSelectedTicket(ticket.id)}
                  >
                    <div className="flex items-center justify-between">
                      <CustomBadge variant={getStatusBadgeVariant(ticket.status)} className="capitalize">
                        {ticket.status}
                      </CustomBadge>
                      <CustomBadge variant={getPriorityBadgeVariant(ticket.priority)} className="capitalize">
                        {ticket.priority}
                      </CustomBadge>
                    </div>
                    <div className="font-medium">{ticket.subject}</div>
                    <div className="text-sm text-muted-foreground">
                      {ticket.userName}
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>
                        {new Date(ticket.lastUpdated).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <MessageSquare className="h-3.5 w-3.5 mr-1" />
                        {ticket.messages.length}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-10">
                  <Inbox className="h-10 w-10 text-muted-foreground mb-2" />
                  <p className="text-muted-foreground">No tickets found</p>
                </div>
              )}
            </div>
          </Card>
        </div>

        <div className="lg:col-span-2">
          {currentTicket ? (
            <Card className="h-full flex flex-col">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>{currentTicket.subject}</CardTitle>
                  <div className="flex gap-2">
                    <CustomBadge variant={getStatusBadgeVariant(currentTicket.status)} className="capitalize">
                      {currentTicket.status}
                    </CustomBadge>
                    <CustomBadge variant={getPriorityBadgeVariant(currentTicket.priority)} className="capitalize">
                      {currentTicket.priority}
                    </CustomBadge>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Assign to me</DropdownMenuItem>
                        <DropdownMenuItem>Change priority</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {currentTicket.status !== 'closed' ? (
                          <DropdownMenuItem>Close ticket</DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem>Reopen ticket</DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <CardDescription className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span>{currentTicket.userName}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="capitalize">
                      {currentTicket.category}
                    </Badge>
                  </div>
                  <div className="text-xs">
                    Created: {new Date(currentTicket.createdAt).toLocaleDateString()} at {new Date(currentTicket.createdAt).toLocaleTimeString()}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow overflow-y-auto">
                <div className="space-y-4">
                  {currentTicket.messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        message.sender === "admin" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-4 ${
                          message.sender === "admin"
                            ? "bg-admin-primary text-white"
                            : "bg-muted"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          {message.sender === "user" ? (
                            <Avatar className="h-6 w-6">
                              <AvatarFallback>{currentTicket.userName[0]}</AvatarFallback>
                            </Avatar>
                          ) : (
                            <Avatar className="h-6 w-6">
                              <AvatarFallback>A</AvatarFallback>
                            </Avatar>
                          )}
                          <span className="text-sm font-medium">
                            {message.sender === "user" ? currentTicket.userName : "Support Agent"}
                          </span>
                          <span className="text-xs opacity-70">
                            {new Date(message.timestamp).toLocaleTimeString()}
                          </span>
                        </div>
                        <p>{message.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex items-center gap-2 p-4 border-t">
                <Input
                  placeholder="Type your reply..."
                  className="flex-grow"
                />
                <Button className="flex items-center gap-1">
                  <Send className="h-4 w-4" />
                  <span>Reply</span>
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card className="h-full flex items-center justify-center">
              <CardContent className="text-center p-10">
                <MessageSquare className="h-12 w-12 text-muted-foreground mb-4 mx-auto" />
                <h3 className="text-lg font-medium mb-2">No Ticket Selected</h3>
                <p className="text-muted-foreground">
                  Select a ticket from the list to view details and respond
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Support;
