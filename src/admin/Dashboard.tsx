'use client'

import React, { useState } from 'react'
import { EventCard } from './components/EventCard'
import { Search, Plus, Bell, ChevronDown, Users, CalendarDays, Building2 } from 'lucide-react'
import AddClubModal from '../forms/AddClub'
import useAuth from '../hooks/useAuth'

// Mock data - replace with actual API calls
const mockEvents = [
  {
    _id: '1',
    title: 'Hackathon 2024',
    description: 'Join us for a 24-hour coding marathon where teams compete to build innovative solutions. Great prizes, amazing networking opportunities, and lots of fun!',
    imageUrl: '/placeholder.svg?height=400&width=600',
    clubs: [
      { name: 'Tech Innovators', logo: '/placeholder.svg?height=100&width=100' },
      { name: 'Code Wizards', logo: '/placeholder.svg?height=100&width=100' }
    ],
    date: new Date('2024-03-15'),
    time: '09:00 AM',
    venue: 'Main Auditorium, Tech Campus',
    isTeamEvent: true,
    teamSize: 4,
    prizeMoney: 5000,
    isPaid: true,
    amount: 50,
    category: 'Technical',
    contactInfo: '+1 (555) 123-4567',
    participants: ['user1', 'user2', 'user3', 'user4'],
    remarks: [
      'Bring your own laptop',
      'WiFi will be provided',
      'Meals included'
    ],
    ratings: [
      {
        user: 'user1',
        name: 'John Doe',
        rating: 5,
        comment: 'Great event!',
        createdAt: new Date()
      }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '2',
    title: 'Inter-College Sports Festival',
    description: 'A grand sports event featuring multiple disciplines. Compete with the best athletes from colleges across the region!',
    imageUrl: '/placeholder.svg?height=400&width=600',
    clubs: [
      { name: 'Sports Club', logo: '/placeholder.svg?height=100&width=100' },
      { name: 'Athletics Association', logo: '/placeholder.svg?height=100&width=100' },
      { name: 'Fitness Enthusiasts', logo: '/placeholder.svg?height=100&width=100' }
    ],
    date: new Date('2024-04-20'),
    time: '08:00 AM',
    venue: 'University Sports Complex',
    isTeamEvent: true,
    teamSize: 10,
    prizeMoney: 10000,
    isPaid: true,
    amount: 100,
    category: 'Sports',
    contactInfo: '+1 (555) 987-6543',
    participants: ['team1', 'team2', 'team3', 'team4', 'team5'],
    remarks: [
      'Multiple sports disciplines',
      'Bring your own sports gear',
      'Refreshments will be provided'
    ],
    ratings: [],
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('events')
  const [searchQuery, setSearchQuery] = useState('')
  const [popup, setpopup] = useState(false)
  const [requestCount, setRequestCount] = useState(3) // Example count, replace with actual data
  const handleEditEvent = (event) => {
    // Implement edit functionality
    console.log('Edit event:', event)
  }

  const handleDeleteEvent = (eventId) => {
    // Implement delete functionality
    console.log('Delete event:', eventId)
  }

  const filteredEvents = mockEvents.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.category.toLowerCase().includes(searchQuery.toLowerCase())
  )
  const onclose=()=>{setpopup(false);}
  return (
    <div className="min-h-screen bg-[#121212]">
      {/* Header */}
      <AddClubModal isOpen={popup} onClose={onclose}/>
      <header className="sticky top-0 z-10 border-b border-purple-800/20 bg-[#1A1A1A]">
        <div className="flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-white">EventSphere Admin</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button className="flex items-center space-x-2 rounded-full bg-red-500/20 px-3 py-2 text-sm font-medium text-red-400 hover:bg-red-500/30 transition-colors">
                <span>Log Out</span>
              </button>
              {/* Dropdown menu would go here */}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Summary Section */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
          <div className="rounded-lg bg-[#1E1E1E] p-4 flex items-center space-x-4">
            <div className="rounded-full bg-purple-500/20 p-3">
              <Building2 className="h-6 w-6 text-purple-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-400">Total Clubs</p>
              <p className="text-2xl font-bold text-white">15</p>
            </div>
          </div>
          <div className="rounded-lg bg-[#1E1E1E] p-4 flex items-center space-x-4">
            <div className="rounded-full bg-purple-500/20 p-3">
              <CalendarDays className="h-6 w-6 text-purple-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-400">Total Events</p>
              <p className="text-2xl font-bold text-white">42</p>
            </div>
          </div>
          <div className="rounded-lg bg-[#1E1E1E] p-4 flex items-center space-x-4">
            <div className="rounded-full bg-purple-500/20 p-3">
              <CalendarDays className="h-6 w-6 text-purple-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-400">Upcoming Events</p>
              <p className="text-2xl font-bold text-white">8</p>
            </div>
          </div>
        </div>

        <div className="mb-6 flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#1E1E1E] border border-purple-800/20 rounded-md text-white placeholder-gray-400
                         focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            />
          </div>
          
          <button onClick={()=>{setpopup(true)}} className="w-full md:w-auto bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md flex items-center justify-center">
            <Plus className="h-4 w-4 mr-2" />
            Add Club
          </button>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex space-x-1 rounded-lg bg-[#1E1E1E] p-1 mb-6">
          <button
            onClick={() => setActiveTab('events')}
            className={`flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium transition-colors
              ${activeTab === 'events' 
                ? 'bg-purple-500 text-white' 
                : 'text-gray-400 hover:bg-purple-500/10 hover:text-purple-400'
              }`}
          >
            <CalendarDays className="h-4 w-4" />
            <span>Events</span>
          </button>
          <button
            onClick={() => setActiveTab('requests')}
            className={`flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium transition-colors
              ${activeTab === 'requests' 
                ? 'bg-purple-500 text-white' 
                : 'text-gray-400 hover:bg-purple-500/10 hover:text-purple-400'
              }`}
          >
            <Users className="h-4 w-4" />
            <span>Event Requests</span>
            {requestCount > 0 && (
              <span className="ml-2 rounded-full bg-purple-500 px-2 py-1 text-xs font-medium text-white">
                {requestCount}
              </span>
            )}
          </button>
        </nav>

        <div className="mt-6">
          {activeTab === 'events' ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredEvents.map(event => (
                <EventCard
                  key={event._id}
                  event={event}
                  onEdit={handleEditEvent}
                  onDelete={handleDeleteEvent}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-lg bg-[#1E1E1E] p-6">
              <p className="text-gray-400">No pending event requests</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

