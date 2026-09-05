"use client"

import React from 'react';
import { 
  LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar 
} from 'recharts';
import { 
  TrendingUp, Users, Clock, DollarSign, Sparkles, Video, ThumbsUp, MessageCircle, PlayCircle 
} from 'lucide-react';

// Mock Data for the dashboard
const audienceActivityData = [
  { time: '12 AM', active: 1200 },
  { time: '3 AM', active: 800 },
  { time: '6 AM', active: 1500 },
  { time: '9 AM', active: 4500 },
  { time: '12 PM', active: 8900 },
  { time: '3 PM', active: 11200 },
  { time: '6 PM', active: 15600 },
  { time: '9 PM', active: 18400 },
];

const contentPerformanceData = [
  { name: 'AI Tutorials', views: 125000, likes: 14000 },
  { name: 'Vlogs', views: 45000, likes: 3200 },
  { name: 'Tech Reviews', views: 89000, likes: 9800 },
  { name: 'Shorts (Comedy)', views: 250000, likes: 35000 },
];

const viralInsights = {
  trendingTopic: "AI Tutorials & Automation",
  viralFormat: "Shorts (< 30s)",
  reason: "High retention in first 5 seconds and 45% share rate.",
  nextIdea: "Generate a 20-second Short: 'How I Automate My Emails with AI'. Use a fast zoom hook and put text on screen immediately."
};

export default function AnalyticsDashboard() {
  return (
    <main className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-1">Analytics & Revenue Tracker</h1>
          <p className="text-gray-400">Real-time performance and AI-driven content strategy.</p>
        </div>
        <div className="flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-lg font-medium border border-blue-500/20">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          Live Sync Active
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="glass-card p-6 rounded-xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-gray-400 font-medium">Est. Revenue</h3>
            <DollarSign className="text-emerald-400" size={20} />
          </div>
          <p className="text-3xl font-bold">$4,289.00</p>
          <p className="text-sm text-emerald-400 mt-2 flex items-center gap-1">
            <TrendingUp size={14} /> +12.5% this month
          </p>
        </div>
        
        <div className="glass-card p-6 rounded-xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-gray-400 font-medium">Total Views</h3>
            <PlayCircle className="text-blue-400" size={20} />
          </div>
          <p className="text-3xl font-bold">509,000</p>
          <p className="text-sm text-emerald-400 mt-2 flex items-center gap-1">
            <TrendingUp size={14} /> +8.2% this month
          </p>
        </div>

        <div className="glass-card p-6 rounded-xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-gray-400 font-medium">Watch Time (Hours)</h3>
            <Clock className="text-purple-400" size={20} />
          </div>
          <p className="text-3xl font-bold">14,205</p>
          <p className="text-sm text-emerald-400 mt-2 flex items-center gap-1">
            <TrendingUp size={14} /> +24% this month
          </p>
        </div>

        <div className="glass-card p-6 rounded-xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-gray-400 font-medium">Engagement</h3>
            <MessageCircle className="text-pink-400" size={20} />
          </div>
          <div className="flex items-end gap-2">
            <p className="text-3xl font-bold">62,800</p>
            <span className="text-sm text-gray-400 mb-1">likes & comments</span>
          </div>
          <p className="text-sm text-emerald-400 mt-2 flex items-center gap-1">
            <TrendingUp size={14} /> +18.1% this month
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        
        {/* Main Charts Area */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Audience Activity Chart */}
          <div className="glass-card p-6 rounded-xl">
            <div className="mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Users className="text-blue-400" /> Peak Audience Activity
              </h2>
              <p className="text-gray-400 text-sm">When your viewers are most active online.</p>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={audienceActivityData}>
                  <defs>
                    <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                  <XAxis dataKey="time" stroke="#9ca3af" axisLine={false} tickLine={false} />
                  <YAxis stroke="#9ca3af" axisLine={false} tickLine={false} tickFormatter={(val) => `${val/1000}k`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Area type="monotone" dataKey="active" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorActive)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20 text-sm text-blue-200 flex items-start gap-3">
              <Sparkles className="text-blue-400 shrink-0 mt-0.5" size={18} />
              <p><strong>Actionable Insight:</strong> Your audience peaks exactly at <strong>9:00 PM</strong>. Schedule your next uploads for 8:15 PM to ride the algorithmic wave as they come online.</p>
            </div>
          </div>

          {/* Content Performance Chart */}
          <div className="glass-card p-6 rounded-xl">
            <div className="mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Video className="text-purple-400" /> Content Type Performance
              </h2>
              <p className="text-gray-400 text-sm">Comparing views across your video formats.</p>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={contentPerformanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                  <XAxis dataKey="name" stroke="#9ca3af" axisLine={false} tickLine={false} />
                  <YAxis stroke="#9ca3af" axisLine={false} tickLine={false} tickFormatter={(val) => `${val/1000}k`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', borderRadius: '8px' }}
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  />
                  <Bar dataKey="views" fill="#a855f7" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

        {/* AI Insight Sidebar */}
        <div className="space-y-8">
          
          <div className="glass-card p-1 rounded-2xl bg-gradient-to-b from-primary/50 to-transparent">
            <div className="bg-[#0a0a0f] p-6 rounded-xl h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                  <Sparkles className="text-white" size={20} />
                </div>
                <h2 className="text-xl font-bold">AI Strategist</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-400 mb-1">What's Going Viral Right Now:</p>
                  <p className="text-lg font-semibold text-white">{viralInsights.trendingTopic}</p>
                  <p className="text-sm text-purple-400 font-medium">Format: {viralInsights.viralFormat}</p>
                </div>

                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <p className="text-sm text-gray-300">
                    <strong className="text-white">Why it's working:</strong> {viralInsights.reason}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-400 mb-2">Auto-Generated Next Idea:</p>
                  <div className="p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg">
                    <p className="text-white font-medium text-sm leading-relaxed">
                      {viralInsights.nextIdea}
                    </p>
                    <button className="mt-4 w-full bg-white text-black py-2 rounded-md text-sm font-bold hover:bg-gray-200 transition-colors">
                      Send to Script Generator
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 rounded-xl">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <ThumbsUp className="text-emerald-400" size={18} /> Top Viewer Comments
            </h2>
            <div className="space-y-4">
              <div className="border-b border-white/5 pb-3">
                <p className="text-sm font-medium">@TechCreator2024</p>
                <p className="text-sm text-gray-400">"This workflow saved me 5 hours this week alone!"</p>
              </div>
              <div className="border-b border-white/5 pb-3">
                <p className="text-sm font-medium">@ViralEditor</p>
                <p className="text-sm text-gray-400">"Can you do a video on how you edited the text popups?"</p>
                <span className="inline-block mt-1 text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded">AI Idea Extracted</span>
              </div>
              <div>
                <p className="text-sm font-medium">@SarahVlogs</p>
                <p className="text-sm text-gray-400">"The audio quality is insane on this one."</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
