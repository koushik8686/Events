import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Base_Url } from "./apiserveices/api";

const RegisterEvent = ({ eventId, userId }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const registerForEvent = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${Base_Url}/register-event/${eventId}`,
        {
          // eventId: eventId,
          userid: userId,
        }
      );

      setMessage("Registered successfully!");
    } catch (error) {
      setMessage("Failed to register. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Register Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full flex justify-center mt-12"
      >
        <button
          onClick={registerForEvent}
          disabled={loading}
          className="px-8 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition duration-300"
        >
          {loading ? "Registering..." : "Register Now"}
        </button>
      </motion.div>
      {message && (
        <p className="mt-4 text-center text-purple-600 font-semibold">
          {message}
        </p>
      )}
    </div>
  );
};

export default RegisterEvent;
