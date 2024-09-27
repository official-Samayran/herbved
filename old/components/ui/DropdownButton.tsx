import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown  } from "lucide-react";

// Define the props interface for links and the dropdown name
interface DropdownLink {
  link: string;
  value: string;
  icon?: React.ReactNode; // Optional icon prop
}

interface DropdownButtonProps {
  name: string;
  links: DropdownLink[];
  icon?: React.ReactNode; // Optional icon prop for button
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ name, links, icon }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative">
      {/* The button that triggers the dropdown */}
      <button
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
        className="flex items-center px-0 py-2 text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
      >
        <span className="mr-2">{name}</span>
        {icon}
        <ChevronDown className="w-4 h-4 ml-2" />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-md z-50"
          >
            <div className="py-2">
              {/* Dynamically render the links passed as props */}
              {links.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="flex px-4 py-2 text-sm text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors flex items-center"
                >
                  {item.icon && <span className="mr-2">{item.icon}</span>}
                  {item.value}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownButton;
