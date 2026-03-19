// Mock data for the dashboard
export const mockMachines = [
  { id: "EXC-001", name: "CAT 320 Excavator", type: "Excavator", operator: "James Mwangi", status: "active", fuelLevel: 72, hoursToday: 6.5, idleHours: 1.2, fuelUsedToday: 45 },
  { id: "LDR-002", name: "Komatsu WA380 Loader", type: "Loader", operator: "Peter Ochieng", status: "active", fuelLevel: 45, hoursToday: 7.1, idleHours: 0.8, fuelUsedToday: 62 },
  { id: "TRK-003", name: "Isuzu FVZ Tipper", type: "Truck", operator: "David Kamau", status: "idle", fuelLevel: 88, hoursToday: 3.2, idleHours: 4.1, fuelUsedToday: 28 },
  { id: "DZR-004", name: "CAT D6 Dozer", type: "Dozer", operator: "John Kipchoge", status: "active", fuelLevel: 31, hoursToday: 8.0, idleHours: 0.5, fuelUsedToday: 85 },
  { id: "CRN-005", name: "Liebherr LTM Crane", type: "Crane", operator: "Samuel Wanjiku", status: "maintenance", fuelLevel: 55, hoursToday: 0, idleHours: 0, fuelUsedToday: 0 },
  { id: "GRD-006", name: "CAT 140M Grader", type: "Grader", operator: "Michael Otieno", status: "active", fuelLevel: 63, hoursToday: 5.8, idleHours: 1.5, fuelUsedToday: 38 },
];

export const mockAlerts = [
  { id: 1, type: "critical", machine: "TRK-003", message: "High idle time: 4.1 hrs with 28L fuel consumed", time: "12 min ago" },
  { id: 2, type: "warning", machine: "DZR-004", message: "Fuel level critically low at 31%", time: "25 min ago" },
  { id: 3, type: "warning", machine: "LDR-002", message: "Fuel consumption 15% above average for hours worked", time: "1 hr ago" },
  { id: 4, type: "info", machine: "EXC-001", message: "Scheduled maintenance due in 48 hours", time: "2 hrs ago" },
];

export const mockFuelHistory = [
  { day: "Mon", fuel: 320, hours: 42 },
  { day: "Tue", fuel: 285, hours: 38 },
  { day: "Wed", fuel: 410, hours: 45 },
  { day: "Thu", fuel: 295, hours: 40 },
  { day: "Fri", fuel: 380, hours: 44 },
  { day: "Sat", fuel: 220, hours: 28 },
  { day: "Sun", fuel: 150, hours: 18 },
];

export const mockOperatorStats = [
  { name: "James Mwangi", efficiency: 92, fuelPerHour: 6.9 },
  { name: "Peter Ochieng", efficiency: 85, fuelPerHour: 8.7 },
  { name: "David Kamau", efficiency: 58, fuelPerHour: 8.8 },
  { name: "John Kipchoge", efficiency: 95, fuelPerHour: 10.6 },
  { name: "Michael Otieno", efficiency: 78, fuelPerHour: 6.6 },
];
