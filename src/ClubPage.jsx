'use client'

import { motion } from "framer-motion"
import { Calendar, MapPin, Clock } from 'lucide-react'

// Sample data structure
const events = [
  {
    "month": "January",
    "events": [
      {
        "id": 1,
        "title": "New Year Music Festival",
        "date": "January 1, 2024",
        "time": "20:00",
        "location": "Central Park",
        "image": "https://images.unsplash.com/photo-1719937206491-ed673f64be1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8l",
        "category": "Music"
      },
      {
        "id": 2,
        "title": "Winter Art Exhibition",
        "date": "January 15, 2024",
        "time": "10:00",
        "location": "City Gallery",
        "image": "https://images.unsplash.com/photo-1719937206491-ed673f64be1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
        "category": "Art"
      },
      {
        "id": 3,
        "title": "Winter Art Exhibition",
        "date": "January 15, 2024",
        "time": "10:00",
        "location": "City Gallery",
        "image": "https://images.unsplash.com/photo-1719937206491-ed673f64be1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
        "category": "Art"
      },
    ]
  },
  {
    "month": "February",
    "events": [
      {
        "id": 6,
        "title": "Tech Conference 2024",
        "date": "February 5, 2024",
        "time": "09:00",
        "location": "Convention Center",
        "image": "https://source.unsplash.com/800x600/?technology,conference",
        "category": "Technology"
      }
    ]
  },
  {
    "month": "March",
    "events": [
      {
        "id": 7,
        "title": "Spring Food Festival",
        "date": "March 10, 2024",
        "time": "11:00",
        "location": "Downtown Square",
        "image": "https://source.unsplash.com/800x600/?food,festival",
        "category": "Food"
      }
    ]
  }
]

export default function Timeline() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] w-full overflow-hidden">
        <img
          src="/banners/epoch.jpeg"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
        
        <div className="relative h-full max-w-6xl mx-auto px-4 sm:px-8 flex flex-col justify-end pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
           
            <h1 className="text-5xl sm:text-7xl font-bold text-white">
             Epoch
            </h1>
            <p className="max-w-xl text-lg text-gray-300">
             AI ML Club
            </p>
          </motion.div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16">
        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Upcoming Events
        </h2>
        
        <div className="relative space-y-16">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-purple-600 via-pink-600 to-blue-600" />

          {events.map((monthGroup, index) => (
            <div key={monthGroup.month} className="relative">
  {/* Month Label with connecting line */}
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.2 }}
    className="sticky top-4 z-10 mb-8 ml-8 flex items-center"
  >
    {/* Circle on timeline */}
    <div className="absolute -left-[35px] w-4 h-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600" />
    {/* Horizontal line */}
    <div className="absolute -left-[19px] w-6 h-px bg-gradient-to-r from-purple-600 to-pink-600" />
    <h2 className="inline-block px-6 py-2 text-lg font-semibold rounded-full bg-white/10 backdrop-blur-sm">
      {monthGroup.month}
    </h2>
  </motion.div>

  {/* Events Grid */}
  <div className="grid gap-6 md:grid-cols-2 ml-8">
    {monthGroup.events.map((event, eventIndex) => (
      <motion.div
        key={event.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: (index * 0.2) + (eventIndex * 0.1) }}
      >
        <div className="rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white/5 backdrop-blur-sm">
          <div className="relative h-48 overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute top-4 right-4">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-black/50 text-white backdrop-blur-sm rounded-full">
                {event.category}
              </span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {event.title}
            </h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{event.location}</span>
              </div>
            </div>
            {/* Details Button */}
            <a href={`/event/${event.title}`}>
            <button className="mt-4 inline-block px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-md hover:shadow-lg transition-shadow">
              Details
            </button>
            </a>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</div>

          ))}
        </div>
      </div>
    </div>
  )
}

