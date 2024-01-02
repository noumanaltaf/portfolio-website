import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosClose } from "react-icons/io";

const modalVariant = {
    initial: { opacity: 0 },
    isOpen: { opacity: 1 },
    exit: { opacity: 0 }
};
const containerVariant = {
    initial: { top: "-50%", transition: { type: "spring" } },
    isOpen: { top: "50%" },
    exit: { top: "-50%" }
};
interface IModalProps {
    isOpen: boolean;
    handleClose(): void;
    children: React.ReactNode
}

const Modal = ({ handleClose, children, isOpen }: IModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={"initial"}
                    animate={"isOpen"}
                    exit={"exit"}
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30"

                    variants={modalVariant}
                >
                    <motion.div
                        className="w-1/2 h-1/2 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md"
                        variants={containerVariant}>
                        <IoIosClose className="text-black text-5xl float-right cursor-pointer" onClick={handleClose}/>
                        <motion.div className="h-full w-full flex justify-center items-center">
                            {children}
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
