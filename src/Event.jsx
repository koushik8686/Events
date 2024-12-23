import { motion } from "framer-motion"
import { MapPin, Phone, Mail, User } from 'lucide-react'

// Sample event data
const eventDetails = {
  id: 1,
  title: "Tech Conference 2024",
  image: "https://media.istockphoto.com/id/1494104649/photo/ai-chatbot-artificial-intelligence-digital-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=bSNvWwiLdPpa57uxQdncwcpu9Xt-NJSsmIBMxNxLQfw=",
  description: "Join us for the biggest tech conference of the year, featuring industry leaders, innovative workshops, and networking opportunities. Learn about the latest trends in AI, Web Development, and Cloud Computing.",
  highlights: [
    "Interactive workshops with hands-on experience",
    "Networking sessions with industry professionals",
    "Live Q&A with speakers",
    "Exclusive access to new product launches",
    "Certificate of participation"
  ],
  speakers: [
    {
      name: "Sarah Johnson",
      role: "AI Research Lead",
      topic: "Future of Artificial Intelligence",
      time: "10:00 AM - 11:30 AM"
    },
    {
      name: "Michael Chen",
      role: "Cloud Architect",
      topic: "Scaling Cloud Infrastructure",
      time: "1:00 PM - 2:30 PM"
    },
    {
      name: "Emily Rodriguez",
      role: "UX Director",
      topic: "Design Systems at Scale",
      time: "3:00 PM - 4:30 PM"
    }
  ],
  host: {
    name: "TechEvents Inc.",
    contact: {
      phone: "+1 (555) 123-4567",
      email: "contact@techevents.com",
      representative: "Alex Thompson"
    }
  }
}

export default function EventDetails() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <img
          src={eventDetails.image}
          alt={eventDetails.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
        <div className="absolute bottom-0 w-full">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
                {eventDetails.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12">
        <div className="space-y-12">
          {/* About */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold">About the Event</h2>
            <p className="text-gray-300 leading-relaxed">
              {eventDetails.description}
            </p>
          </motion.section>

          {/* Highlights */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold">Event Highlights</h2>
            <ul className="grid gap-3">
              {eventDetails.highlights.map((highlight, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-300">
                  <div className="h-2 w-2 rounded-full bg-purple-500 flex-shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Speakers */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold">Featured Speakers</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {eventDetails.speakers.map((speaker, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl bg-white/5 backdrop-blur-sm space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <User className="h-5 w-5 text-purple-500" />
                    <div>
                      <h3 className="font-semibold">{speaker.name}</h3>
                      <p className="text-sm text-gray-400">{speaker.role}</p>
                    </div>
                  </div>
                  <div className="space-y-1 text-gray-300">
                    <p className="text-sm">Topic: {speaker.topic}</p>
                    <p className="text-sm">Time: {speaker.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Host Contact */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl bg-white/5 backdrop-blur-sm p-6 space-y-4"
          >
            <h2 className="text-2xl font-semibold">Event Host</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="h-5 w-5 text-purple-500" />
                <span>{eventDetails.host.name}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <User className="h-5 w-5 text-purple-500" />
                <span>Representative: {eventDetails.host.contact.representative}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="h-5 w-5 text-purple-500" />
                <span>{eventDetails.host.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="h-5 w-5 text-purple-500" />
                <span>{eventDetails.host.contact.email}</span>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}

