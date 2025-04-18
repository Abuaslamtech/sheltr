
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
import { Search, MoreHorizontal, Download, UserPlus } from "lucide-react";
import { Users as UsersIcon } from "lucide-react";
import { userMockData } from "@/services/adminMockData";

const Users = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [userType, setUserType] = useState("all");
  const [status, setStatus] = useState("all");
  
  const filteredUsers = userMockData.filter(user => {
    // Filter by search term
    const searchMatch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by user type
    const typeMatch = userType === 'all' || user.type === userType;
    
    // Filter by status
    const statusMatch = status === 'all' || user.status === status;
    
    return searchMatch && typeMatch && statusMatch;
  });

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "active":
        return "success";
      case "pending":
        return "warning";
      case "suspended":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <div className="animate-fade-in">
      <h1 className="admin-page-title">User Management</h1>

      <div className="grid gap-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search users..."
                className="pl-8 w-full md:w-[250px] bg-background"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Select value={userType} onValueChange={setUserType}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="User Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>User Type</SelectLabel>
                    <SelectItem value="all">All Users</SelectItem>
                    <SelectItem value="individual">Individual</SelectItem>
                    <SelectItem value="corporate">Corporate</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Status</SelectLabel>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="suspended">Suspended</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="flex items-center gap-1">
              <Download className="h-4 w-4" />
              <span>Export</span>
            </Button>
            <Button size="sm" className="flex items-center gap-1">
              <UserPlus className="h-4 w-4" />
              <span>Add User</span>
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>Users</CardTitle>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="bg-background">
                  <UsersIcon className="h-3.5 w-3.5 mr-1" />
                  {filteredUsers.length} users
                </Badge>
              </div>
            </div>
            <CardDescription>
              Manage and monitor user accounts across the platform.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px]">Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Subscription</TableHead>
                  <TableHead>Properties</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Registered</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-xs text-muted-foreground">{user.email}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="capitalize">
                          {user.type}
                        </Badge>
                      </TableCell>
                      <TableCell className="capitalize">{user.subscription}</TableCell>
                      <TableCell>{user.properties}</TableCell>
                      <TableCell>
                        <CustomBadge variant={getStatusBadgeVariant(user.status)} className="capitalize">
                          {user.status}
                        </CustomBadge>
                      </TableCell>
                      <TableCell>{user.registrationDate}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>View details</DropdownMenuItem>
                            <DropdownMenuItem>Edit user</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Reset password</DropdownMenuItem>
                            {user.status === "active" ? (
                              <DropdownMenuItem className="text-destructive">Suspend account</DropdownMenuItem>
                            ) : (
                              <DropdownMenuItem>Activate account</DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-10">
                      <div className="flex flex-col items-center justify-center">
                        <UsersIcon className="h-10 w-10 text-muted-foreground mb-2" />
                        <p className="text-muted-foreground">No users found with the current filters</p>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Users;
