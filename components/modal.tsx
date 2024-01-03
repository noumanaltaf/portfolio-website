import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosClose } from "react-icons/io";
import Backdrop from "./backdrop";
import ReactDOM from "react-dom";

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
    const rootModalElement = document.getElementById('modal-root');

    return rootModalElement ? ReactDOM.createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={"initial"}
                    animate={"isOpen"}
                    exit={"exit"}
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30"
                    variants={modalVariant}
                >
                    <Backdrop onClick={handleClose}>
                        <motion.div
                            onClick={(e) => e.stopPropagation()}  // Prevent click from closing modal
                            className="w-[calc(100%-20px)] m-auto md:m-0 md:w-[500px] h-auto bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md"
                            variants={containerVariant}>
                            <IoIosClose onClick={handleClose} className="absolute right-0 text-5xl float-right cursor-pointer" />
                            <motion.div className="h-full w-full flex justify-center items-center">
                                {children}
                            </motion.div>
                        </motion.div>
                    </Backdrop>

                </motion.div>
            )}
        </AnimatePresence>,
        rootModalElement
    ) : null;
};

export default Modal;
