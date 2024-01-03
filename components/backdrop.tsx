import { motion } from "framer-motion";

interface IBackdropPropa {
    children: React.ReactNode;
    onClick?(): void;
}
const Backdrop = ({ children, onClick }: IBackdropPropa) => {

    return (
        <motion.div
            onClick={onClick}
            className="overflow-auto absolute top-0 left-0 h-full w-full flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    );
};

export default Backdrop;