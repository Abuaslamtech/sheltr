
// Mock data for the admin dashboard
export const dashboardStats = {
  totalUsers: 2456,
  individualUsers: 2158,
  corporateUsers: 298,
  activeSubscriptions: 1832,
  propertyUploads: 4371,
  tourRequests: 351,
  monthlyRevenue: 58720,
  monthlySales: 142,
  userGrowth: [
    { month: "Jan", individual: 120, corporate: 15 },
    { month: "Feb", individual: 145, corporate: 18 },
    { month: "Mar", individual: 162, corporate: 22 },
    { month: "Apr", individual: 190, corporate: 26 },
    { month: "May", individual: 210, corporate: 30 },
    { month: "Jun", individual: 235, corporate: 32 },
    { month: "Jul", individual: 258, corporate: 35 },
    { month: "Aug", individual: 290, corporate: 38 },
    { month: "Sep", individual: 310, corporate: 42 },
    { month: "Oct", individual: 330, corporate: 47 },
    { month: "Nov", individual: 360, corporate: 51 },
    { month: "Dec", individual: 398, corporate: 58 },
  ],
  revenueData: [
    { month: "Jan", amount: 32450 },
    { month: "Feb", amount: 36780 },
    { month: "Mar", amount: 42110 },
    { month: "Apr", amount: 45670 },
    { month: "May", amount: 48320 },
    { month: "Jun", amount: 51980 },
    { month: "Jul", amount: 53450 },
    { month: "Aug", amount: 56780 },
    { month: "Sep", amount: 54320 },
    { month: "Oct", amount: 57850 },
    { month: "Nov", amount: 59340 },
    { month: "Dec", amount: 58720 },
  ],
  propertyData: [
    { month: "Jan", uploads: 214, tours: 18 },
    { month: "Feb", uploads: 258, tours: 22 },
    { month: "Mar", uploads: 297, tours: 26 },
    { month: "Apr", uploads: 315, tours: 28 },
    { month: "May", uploads: 342, tours: 32 },
    { month: "Jun", uploads: 368, tours: 35 },
    { month: "Jul", uploads: 390, tours: 38 },
    { month: "Aug", uploads: 421, tours: 41 },
    { month: "Sep", uploads: 397, tours: 36 },
    { month: "Oct", uploads: 412, tours: 39 },
    { month: "Nov", uploads: 432, tours: 42 },
    { month: "Dec", uploads: 425, tours: 44 },
  ],
};

export const userMockData = [
  {
    id: "u1",
    name: "John Smith",
    email: "john.smith@example.com",
    type: "individual",
    registrationDate: "2023-10-15",
    status: "active",
    subscription: "premium",
    properties: 3,
    lastActive: "2023-12-10",
  },
  {
    id: "u2",
    name: "Jane Doe",
    email: "jane.doe@example.com",
    type: "individual",
    registrationDate: "2023-09-20",
    status: "active",
    subscription: "basic",
    properties: 1,
    lastActive: "2023-12-12",
  },
  {
    id: "u3",
    name: "Acme Real Estate",
    email: "contact@acmerealestate.com",
    type: "corporate",
    registrationDate: "2023-08-05",
    status: "active",
    subscription: "enterprise",
    properties: 47,
    lastActive: "2023-12-11",
  },
  {
    id: "u4",
    name: "Robert Johnson",
    email: "robert.j@example.com",
    type: "individual",
    registrationDate: "2023-11-08",
    status: "pending",
    subscription: "none",
    properties: 0,
    lastActive: "2023-11-08",
  },
  {
    id: "u5",
    name: "City Properties LLC",
    email: "info@cityproperties.com",
    type: "corporate",
    registrationDate: "2023-07-12",
    status: "active",
    subscription: "enterprise",
    properties: 32,
    lastActive: "2023-12-09",
  },
];

export const propertyMockData = [
  {
    id: "p1",
    title: "Modern Downtown Apartment",
    owner: "John Smith",
    ownerType: "individual",
    listingType: "rent",
    status: "active",
    address: "123 Main St, New York, NY",
    price: 2500,
    bedrooms: 2,
    bathrooms: 2,
    has3DTour: true,
    dateAdded: "2023-11-05",
    verificationStatus: "verified",
  },
  {
    id: "p2",
    title: "Luxury Beachfront Villa",
    owner: "Acme Real Estate",
    ownerType: "corporate",
    listingType: "sale",
    status: "active",
    address: "456 Ocean Dr, Miami, FL",
    price: 1250000,
    bedrooms: 4,
    bathrooms: 3.5,
    has3DTour: true,
    dateAdded: "2023-10-20",
    verificationStatus: "verified",
  },
  {
    id: "p3",
    title: "Cozy Suburban Home",
    owner: "Jane Doe",
    ownerType: "individual",
    listingType: "sale",
    status: "pending",
    address: "789 Oak St, Chicago, IL",
    price: 450000,
    bedrooms: 3,
    bathrooms: 2,
    has3DTour: false,
    dateAdded: "2023-11-12",
    verificationStatus: "pending",
  },
  {
    id: "p4",
    title: "Commercial Office Space",
    owner: "City Properties LLC",
    ownerType: "corporate",
    listingType: "rent",
    status: "active",
    address: "101 Business Blvd, San Francisco, CA",
    price: 5000,
    bedrooms: 0,
    bathrooms: 2,
    has3DTour: true,
    dateAdded: "2023-09-15",
    verificationStatus: "verified",
  },
  {
    id: "p5",
    title: "Mountain Retreat Cabin",
    owner: "Acme Real Estate",
    ownerType: "corporate",
    listingType: "sale",
    status: "active",
    address: "222 Pine Rd, Denver, CO",
    price: 650000,
    bedrooms: 3,
    bathrooms: 2,
    has3DTour: true,
    dateAdded: "2023-10-05",
    verificationStatus: "verified",
  },
];

export const subscriptionMockData = [
  {
    id: "s1",
    plan: "Basic",
    userType: "individual",
    activeUsers: 768,
    monthlyPrice: 9.99,
    features: ["Up to 3 property listings", "Basic analytics", "Email support"],
  },
  {
    id: "s2",
    plan: "Premium",
    userType: "individual",
    activeUsers: 542,
    monthlyPrice: 19.99,
    features: [
      "Up to 10 property listings",
      "Advanced analytics",
      "Priority email support",
      "1 free 3D tour per month",
    ],
  },
  {
    id: "s3",
    plan: "Professional",
    userType: "corporate",
    activeUsers: 124,
    monthlyPrice: 49.99,
    features: [
      "Up to 50 property listings",
      "Advanced analytics",
      "Priority support",
      "5 free 3D tours per month",
      "API access",
    ],
  },
  {
    id: "s4",
    plan: "Enterprise",
    userType: "corporate",
    activeUsers: 98,
    monthlyPrice: 199.99,
    features: [
      "Unlimited property listings",
      "Premium analytics and reports",
      "Dedicated account manager",
      "20 free 3D tours per month",
      "Full API access",
      "Custom integration",
    ],
  },
];

export const supportTicketsMockData = [
  {
    id: "t1",
    userId: "u1",
    userName: "John Smith",
    subject: "Unable to upload property images",
    status: "open",
    priority: "medium",
    category: "technical",
    createdAt: "2023-12-08T14:25:00",
    lastUpdated: "2023-12-08T14:25:00",
    messages: [
      {
        sender: "user",
        content: "I'm trying to upload images for my new listing but keep getting an error message.",
        timestamp: "2023-12-08T14:25:00",
      },
    ],
  },
  {
    id: "t2",
    userId: "u3",
    userName: "Acme Real Estate",
    subject: "Billing discrepancy on subscription",
    status: "in-progress",
    priority: "high",
    category: "billing",
    createdAt: "2023-12-07T09:12:00",
    lastUpdated: "2023-12-09T11:45:00",
    messages: [
      {
        sender: "user",
        content: "We were charged twice for our monthly subscription. Please help resolve this issue.",
        timestamp: "2023-12-07T09:12:00",
      },
      {
        sender: "admin",
        content: "I've reviewed your account and confirmed the double charge. I'll process a refund right away.",
        timestamp: "2023-12-09T11:45:00",
      },
    ],
  },
  {
    id: "t3",
    userId: "u2",
    userName: "Jane Doe",
    subject: "Request for account upgrade",
    status: "open",
    priority: "low",
    category: "account",
    createdAt: "2023-12-10T16:50:00",
    lastUpdated: "2023-12-10T16:50:00",
    messages: [
      {
        sender: "user",
        content: "I'd like to upgrade my account from Basic to Premium. Can you help me with this process?",
        timestamp: "2023-12-10T16:50:00",
      },
    ],
  },
  {
    id: "t4",
    userId: "u5",
    userName: "City Properties LLC",
    subject: "3D tour not displaying correctly",
    status: "closed",
    priority: "medium",
    category: "technical",
    createdAt: "2023-12-05T11:30:00",
    lastUpdated: "2023-12-06T15:20:00",
    messages: [
      {
        sender: "user",
        content: "The 3D tour for our Commercial Office Space property isn't loading correctly for some users.",
        timestamp: "2023-12-05T11:30:00",
      },
      {
        sender: "admin",
        content: "I've checked your 3D tour and found a compatibility issue. We've fixed it now.",
        timestamp: "2023-12-06T14:15:00",
      },
      {
        sender: "user",
        content: "Thank you, it's working perfectly now!",
        timestamp: "2023-12-06T15:20:00",
      },
    ],
  },
  {
    id: "t5",
    userId: "u1",
    userName: "John Smith",
    subject: "Need help with property description",
    status: "open",
    priority: "low",
    category: "content",
    createdAt: "2023-12-09T10:05:00",
    lastUpdated: "2023-12-09T10:05:00",
    messages: [
      {
        sender: "user",
        content: "Can you provide guidelines on writing effective property descriptions?",
        timestamp: "2023-12-09T10:05:00",
      },
    ],
  },
];
