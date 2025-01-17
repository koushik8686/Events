import React from 'react'
import { format } from 'date-fns'
import { Calendar, MapPin, Users, DollarSign, Star, Clock, Trophy, Phone } from 'lucide-react'

interface Club {
  name: string
  logo: string
}

interface Rating {
  user: string
  name: string
  rating: number
  comment: string
  createdAt: Date
}

interface Event {
  _id: string
  title: string
  description: string
  imageUrl: string
  clubs: Club[]
  date: Date
  time: string
  venue: string
  isTeamEvent: boolean
  teamSize?: number
  prizeMoney: number
  isPaid: boolean
  amount?: number
  category: string
  contactInfo: string
  participants: string[]
  remarks: string[]
  ratings: Rating[]
  createdAt: Date
  updatedAt: Date
}

interface EventCardProps {
  event: Event
  onEdit: (event: Event) => void
  onDelete: (eventId: string) => void
}

export function EventCard({ event, onEdit, onDelete }: EventCardProps) {
  const averageRating = event.ratings.length 
    ? (event.ratings.reduce((acc, curr) => acc + curr.rating, 0) / event.ratings.length).toFixed(1)
    : 0

  return (
    <div className="bg-[#1E1E1E] rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-[1.02]">
      <div className="relative">
        <img
          src={event.imageUrl || "/placeholder.svg"}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium">
            {event.category}
          </span>
          {event.isPaid && (
            <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium">
              Paid
            </span>
          )}
        </div>
        {event.prizeMoney > 0 && (
          <div className="absolute bottom-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            <Trophy className="w-3 h-3" />
            ${event.prizeMoney}
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white">{event.title}</h3>
          <div className="flex -space-x-2">
            {event.clubs.map((club, index) => (
              <div key={index} className="relative group">
                <img
                  src={club.logo || "/placeholder.svg"}
                  alt={club.name}
                  className="w-8 h-8 rounded-full border-2 border-[#1E1E1E] object-cover"
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {club.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-gray-400 text-sm line-clamp-2 mb-4">
          {event.description}
        </p>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center text-gray-400">
            <Calendar className="h-4 w-4 mr-2 text-purple-500" />
            <span className="text-xs">{format(new Date(event.date), 'MMM dd, yyyy')}</span>
          </div>
          
          <div className="flex items-center text-gray-400">
            <Clock className="h-4 w-4 mr-2 text-purple-500" />
            <span className="text-xs">{event.time}</span>
          </div>
          
          <div className="flex items-center text-gray-400">
            <MapPin className="h-4 w-4 mr-2 text-purple-500" />
            <span className="text-xs">{event.venue}</span>
          </div>
          
          <div className="flex items-center text-gray-400">
            <Users className="h-4 w-4 mr-2 text-purple-500" />
            <span className="text-xs">
              {event.isTeamEvent ? `Team: ${event.teamSize}` : 'Individual'}
            </span>
          </div>

          {event.isPaid && (
            <div className="flex items-center text-gray-400">
              <DollarSign className="h-4 w-4 mr-2 text-purple-500" />
              <span className="text-xs">${event.amount}</span>
            </div>
          )}

          <div className="flex items-center text-gray-400">
            <Phone className="h-4 w-4 mr-2 text-purple-500" />
            <span className="text-xs">{event.contactInfo}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-purple-500/10">
        <a href="/participants">
        <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[...Array(Math.min(3, event.participants.length))].map((_, i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full bg-purple-500/20 border-2 border-[#1E1E1E] flex items-center justify-center"
                >
                  <span className="text-[10px] text-purple-400">P{i + 1}</span>
                </div>
              ))}
            </div>
            <span className="text-xs text-gray-400">
              {event.participants.length} Participants
            </span>
          </div>
        </a>

          <div className="flex gap-2">
            <button
              onClick={() => onEdit(event)}
              className="px-3 py-1 text-sm bg-purple-500/10 text-purple-400 rounded-md hover:bg-purple-500/20 transition-colors"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(event._id)}
              className="px-3 py-1 text-sm bg-red-500/10 text-red-400 rounded-md hover:bg-red-500/20 transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

