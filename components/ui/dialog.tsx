import React, { ReactNode, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Dialog Component
interface DialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ open = false, onOpenChange, children }) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (onOpenChange) {
      onOpenChange(open);
    }
  };

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      handleOpenChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// DialogTrigger Component
interface DialogTriggerProps {
  asChild?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const DialogTrigger: React.FC<DialogTriggerProps> = ({ asChild = false, children, onClick }) => {
  if (asChild) {
    return <>{children}</>;
  }

  return <button onClick={onClick}>{children}</button>;
};

// DialogContent Component
interface DialogContentProps {
  children: ReactNode;
  className?: string;
}

const DialogContent: React.FC<DialogContentProps> = ({ children, className = "" }) => {
  return (
    <motion.div
      className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto ${className}`}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

// DialogHeader Component
const DialogHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="mb-4">{children}</div>;
};

// DialogTitle Component
const DialogTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <h2 className="text-xl font-semibold">{children}</h2>;
};

// DialogDescription Component
const DialogDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <p className="text-gray-600 dark:text-gray-400">{children}</p>;
};

// Close Button Component
const CloseButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
      &times; {/* You can replace this with an icon */}
    </button>
  );
};

// Export all components
export { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, CloseButton };
