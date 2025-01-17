import React, { useState } from 'react'
import { Calendar, Clock, MapPin, Users, Phone, DollarSign, Search, Filter, LogOut } from 'lucide-react'

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState("upcoming")

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="bg-black/50 backdrop-blur-lg border-b border-white/10 py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold ">
            EventSphere
          </div>
          <button className="px-4 py-2 text-white hover:text-purple-400 flex items-center">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-purple-600/20" />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=2070")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            opacity: 0.3
          }}
        />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400 bg-clip-text text-transparent">
            Discover  Events
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join exciting events, competitions, and festivals happening around your campus
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto backdrop-blur-lg bg-white/5 p-4 rounded-lg">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search events..."
                className="w-full px-10 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <select className="w-full md:w-auto px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-600">
              <option value="">All Categories</option>
              <option value="technical">Technical</option>
              <option value="sports">Sports</option>
              <option value="cultural">Cultural</option>
            </select>
            <select className="w-full md:w-auto px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-600">
              <option value="">All Clubs</option>
              <option value="coding">Coding Club</option>
              <option value="sports">Sports Club</option>
              <option value="drama">Drama Club</option>
            </select>
          </div>
        </div>
      </section>

      {/* Events Tabs and Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div className="w-full max-w-md">
            <div className="flex bg-white/5 rounded-md p-1">
              <button
                className={`flex-1 px-4 py-2 rounded-md transition-colors duration-200 ease-in-out ${
                  activeTab === 'upcoming' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab('upcoming')}
              >
                Upcoming Events
              </button>
              <button
                className={`flex-1 px-4 py-2 rounded-md transition-colors duration-200 ease-in-out ${
                  activeTab === 'past' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab('past')}
              >
                Past Events
              </button>
            </div>
          </div>
          <button className="px-4 py-2 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-600 hover:text-white transition-colors duration-200 ease-in-out">
            <Filter className="w-4 h-4 inline-block mr-2" />
            Filters
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events
            .filter(event => event.status === activeTab)
            .map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
        </div>
      </section>
    </div>
  )
}

function EventCard({
  title,
  description,
  date,
  time,
  venue,
  teamSize,
  contact,
  price,
  prize,
  categories,
  image,
  status,
}: {
  title: string
  description: string
  date: string
  time: string
  venue: string
  teamSize: number
  contact: string
  price: number
  prize: number
  categories: string[]
  image: string
  status: "upcoming" | "past"
}) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden group hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={image || "/placeholder.svg"}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex gap-2">
          {categories.map((category) => (
            <span
              key={category}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-purple-600/80 text-white"
            >
              {category}
            </span>
          ))}
          {price > 0 && (
            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-emerald-600/80 text-white">
              Paid
            </span>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>
        {prize > 0 && (
          <div className="flex items-center gap-2 text-yellow-500 mb-4">
            <DollarSign className="w-4 h-4" />
            <span className="font-bold">Prize pool: ${prize}</span>
          </div>
        )}
        <div className="space-y-2 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{venue}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>Team: {teamSize}</span>
          </div>
        </div>
      </div>
      <div className="px-6 py-4 border-t border-white/10 flex justify-between items-center">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Phone className="w-4 h-4" />
          <span>{contact}</span>
        </div>
        <button 
          className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
            status === "upcoming"
              ? "bg-purple-600 text-white hover:bg-purple-700 hover:scale-105"
              : "bg-gray-600 text-gray-300 cursor-not-allowed opacity-50"
          }`}
          disabled={status === "past"}
        ><a href="/event/abcd">
                    {status === "upcoming" ? "Register Now" : "Event Ended"}
         </a>
        </button>
      </div>
    </div>
  )
}

const events = [
  {
    id: 1,
    title: "Hackathon 2024",
    description: "Join us for a 24-hour coding marathon where teams compete to build innovative solutions. Great prizes, amazing networking opportunities!",
    date: "Mar 15, 2024",
    time: "09:00 AM",
    venue: "Main Auditorium, Tech Campus",
    teamSize: 4,
    contact: "+1 (555) 123-4567",
    price: 50,
    prize: 5000,
    categories: ["Technical"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000",
    status: "upcoming"
  },
  {
    id: 2,
    title: "Inter-College Sports Festival",
    description: "A grand sports event featuring multiple disciplines. Compete with the best athletes from colleges across the region!",
    date: "Apr 20, 2024",
    time: "08:00 AM",
    venue: "University Sports Complex",
    teamSize: 10,
    contact: "+1 (555) 987-6543",
    price: 100,
    prize: 10000,
    categories: ["Sports"],
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=1000",
    status: "upcoming"
  },
  {
    id: 3,
    title: "Cultural Night 2024",
    description: "Experience an evening of music, dance, and drama performances by talented artists from various colleges.",
    date: "May 5, 2024",
    time: "06:00 PM",
    venue: "College Amphitheater",
    teamSize: 1,
    contact: "+1 (555) 246-8135",
    price: 0,
    prize: 0,
    categories: ["Cultural"],
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1000",
    status: "upcoming"
  },
  {
    id: 4,
    title: "Tech Symposium 2023",
    description: "A past event that showcased the latest advancements in technology with keynote speakers from leading tech companies.",
    date: "Nov 10, 2023",
    time: "10:00 AM",
    venue: "Virtual Event",
    teamSize: 1,
    contact: "+1 (555) 369-2580",
    price: 25,
    prize: 0,
    categories: ["Technical"],
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000",
    status: "past"
  },
  {
    id: 5,
    title: "Annual Chess Tournament 2023",
    description: "The biggest chess event of the year that brought together the brightest minds from various colleges.",
    date: "Dec 5, 2023",
    time: "09:00 AM",
    venue: "Central Library",
    teamSize: 1,
    contact: "+1 (555) 147-2589",
    price: 10,
    prize: 2000,
    categories: ["Sports"],
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=1000",
    status: "past"
  }
]

