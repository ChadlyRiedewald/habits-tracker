import { motion } from 'framer-motion';
import { VARIANTS } from '../../constants/variants';

const ListItem = ({ children }) => {
    const { listItem } = VARIANTS;

    return (
        <motion.li
            initial='initial'
            whileHover='whileHover'
            whileTap='whileTap'
            variants={listItem}
        >
            {children}
        </motion.li>
    );
};

export default ListItem;
