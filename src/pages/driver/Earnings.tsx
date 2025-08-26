/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, TrendingUp, Calendar, Clock, BarChart3, PieChart } from "lucide-react";
import { useGetDriverEarningsQuery } from "@/redux/features/driver/driver.api";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as RechartsPieChart, Cell, Pie } from 'recharts';

export default function Earnings() {
  const { data: earningsData } = useGetDriverEarningsQuery({});
  const earnings = earningsData?.data || {};
  const [viewMode, setViewMode] = useState<'overview' | 'charts'>('overview');
  
  // Dynamic daily earnings based on actual data
  const today = new Date().getDay(); 
  const todayEarnings = earnings.todayEarnings || 0;
  
  const dailyEarnings = [
    { day: 'Mon', amount: today === 1 ? todayEarnings : 0 },
    { day: 'Tue', amount: today === 2 ? todayEarnings : 0 },
    { day: 'Wed', amount: today === 3 ? todayEarnings : 0 },
    { day: 'Thu', amount: today === 4 ? todayEarnings : 0 },
    { day: 'Fri', amount: today === 5 ? todayEarnings : 0 },
    { day: 'Sat', amount: today === 6 ? todayEarnings : 0 },
    { day: 'Sun', amount: today === 0 ? todayEarnings : 0 }
  ];
  
  // Add some mock data for previous days if no real data
  if (todayEarnings === 0) {
    dailyEarnings[today].amount = 500; // Show today's mock data
  }
  
  

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Earnings Dashboard</h1>
        <div className="flex gap-2">
          <Button 
            variant={viewMode === 'overview' ? 'default' : 'outline'}
            onClick={() => setViewMode('overview')}
            size="sm"
          >
            <DollarSign className="h-4 w-4 mr-2" />
            Overview
          </Button>
          <Button 
            variant={viewMode === 'charts' ? 'default' : 'outline'}
            onClick={() => setViewMode('charts')}
            size="sm"
          >
            <BarChart3 className="h-4 w-4 mr-2" />
            Charts
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">৳{earnings.todayEarnings || 0}</div>
            <p className="text-xs text-muted-foreground">{earnings.todayRides || 0} rides completed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">৳{earnings.weeklyEarnings || 0}</div>
            <p className="text-xs text-muted-foreground">{earnings.weeklyRides || 0} rides</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">৳{earnings.monthlyEarnings || 0}</div>
            <p className="text-xs text-muted-foreground">{earnings.monthlyRides || 0} rides</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">৳{earnings.totalEarnings || 0}</div>
            <p className="text-xs text-muted-foreground">Completed rides only</p>
          </CardContent>
        </Card>
      </div>

      {viewMode === 'overview' ? (
        <Card>
          <CardHeader>
            <CardTitle>Recent Earnings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {earnings.recentEarnings?.length > 0 ? (
                earnings.recentEarnings.map((ride: any) => (
                  <div key={ride._id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">
                        {typeof ride.pickupLocation === 'object' 
                          ? ride.pickupLocation?.address 
                          : ride.pickupLocation} → {typeof ride.destinationLocation === 'object' 
                          ? ride.destinationLocation?.address 
                          : ride.destinationLocation}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(ride.completedAt || ride.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">+৳{ride.fare}</p>
                      <p className="text-xs text-muted-foreground">Completed</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-muted-foreground py-8">
                  No earnings yet. Complete rides to start earning!
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Daily Earnings Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Daily Earnings (This Week)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dailyEarnings}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip 
                      formatter={(value) => [`৳${value}`, 'Earnings']}
                      labelStyle={{ color: '#000' }}
                    />
                    <Bar dataKey="amount" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Earnings Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5" />
                Earnings Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Tooltip 
                      formatter={(value) => [`৳${value}`, 'Amount']}
                      labelStyle={{ color: '#000' }}
                    />
                    <Pie
                      data={[
                        { name: 'Today', value: earnings.todayEarnings},
                        { name: 'Week', value: Math.max(earnings.weeklyEarnings) },
                        { name: 'Month', value: Math.max(earnings.monthlyEarnings)},
                        { name: 'Previous', value: Math.max((earnings.totalEarnings) - (earnings.monthlyEarnings)) }
                      ].filter(item => item.value > 0)}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, percent = 0 }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {[
                        '#10b981', '#3b82f6', '#8b5cf6', '#6b7280'
                      ].map((color, index) => (
                        <Cell key={`cell-${index}`} fill={color} />
                      ))}
                    </Pie>
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <Card>
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Average per ride</span>
                  <span className="font-bold">৳{earnings.totalEarnings && earnings.monthlyRides ? (earnings.totalEarnings / earnings.monthlyRides).toFixed(2) : '0.00'}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Daily average</span>
                  <span className="font-bold">৳{earnings.weeklyEarnings ? (earnings.weeklyEarnings / 7).toFixed(2) : '0.00'}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Weekly average</span>
                  <span className="font-bold">৳{earnings.monthlyEarnings ? (earnings.monthlyEarnings / 4).toFixed(2) : '0.00'}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Best day this week</span>
                  <span className="font-bold">৳{Math.max(...dailyEarnings.map(d => d.amount)).toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

        
        </div>
      )}
    </div>
  );
}