
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Area, AreaChart } from 'recharts';
import { Globe, Download, Users, Database, TrendingUp, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Statistics = () => {
  const downloadData = [
    { month: 'Jan', genotype: 45, phenotype: 32 },
    { month: 'Feb', genotype: 52, phenotype: 41 },
    { month: 'Mar', genotype: 61, phenotype: 38 },
    { month: 'Apr', genotype: 58, phenotype: 47 },
    { month: 'May', genotype: 67, phenotype: 53 },
    { month: 'Jun', genotype: 74, phenotype: 59 }
  ];

  const toolUsageData = [
    { name: 'GWAS', value: 156, color: '#3B82F6' },
    { name: 'QTL Mapping', value: 134, color: '#10B981' },
    { name: 'Variant Filtering', value: 98, color: '#F59E0B' },
    { name: 'Pop Genetics', value: 87, color: '#EF4444' },
    { name: 'Summary Stats', value: 76, color: '#8B5CF6' }
  ];

  const visitorData = [
    { country: 'China', visitors: 245, color: '#3B82F6' },
    { country: 'USA', visitors: 189, color: '#10B981' },
    { country: 'Japan', visitors: 167, color: '#F59E0B' },
    { country: 'Norway', visitors: 134, color: '#EF4444' },
    { country: 'Others', visitors: 298, color: '#8B5CF6' }
  ];

  const monthlyUsers = [
    { month: 'Jan', users: 1250 },
    { month: 'Feb', users: 1380 },
    { month: 'Mar', users: 1520 },
    { month: 'Apr', users: 1680 },
    { month: 'May', users: 1850 },
    { month: 'Jun', users: 2100 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Platform Statistics</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time analytics and usage statistics for ShellfishDB platform
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,847</div>
              <p className="text-xs text-muted-foreground">
                +12.5% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Data Downloads</CardTitle>
              <Download className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,456</div>
              <p className="text-xs text-muted-foreground">
                +8.2% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Datasets</CardTitle>
              <Database className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">284</div>
              <p className="text-xs text-muted-foreground">
                +15.3% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Analysis Jobs</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3,924</div>
              <p className="text-xs text-muted-foreground">
                +22.1% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row 1 */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Data Downloads</CardTitle>
              <CardDescription>Genotype vs Phenotype data downloads over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={downloadData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="genotype" fill="#3B82F6" name="Genotype Data" />
                  <Bar dataKey="phenotype" fill="#10B981" name="Phenotype Data" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tool Usage Distribution</CardTitle>
              <CardDescription>Most popular analysis tools by usage count</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={toolUsageData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}`}
                  >
                    {toolUsageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row 2 */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Active Users</CardTitle>
              <CardDescription>Growth in user engagement over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={monthlyUsers}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="users" 
                    stroke="#3B82F6" 
                    fill="#3B82F6" 
                    fillOpacity={0.3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Global User Distribution</CardTitle>
              <CardDescription>Visitors by geographic location</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {visitorData.map((country, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: country.color }}
                      />
                      <span className="font-medium">{country.country}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-600">{country.visitors}</span>
                      <MapPin className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Total Visitors</span>
                  <span className="font-semibold">1,033</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Geographic Map Placeholder */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="w-5 h-5" />
              <span>Global Access Map</span>
            </CardTitle>
            <CardDescription>
              Interactive map showing user access patterns worldwide
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Globe className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Interactive World Map</h3>
                <p className="text-gray-600">Map integration coming soon</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Statistics;
