import React from 'react'
import { motion } from 'framer-motion'
import PropTypes, { InferProps } from 'prop-types'


const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 20 }
}

function PageTransition({ children }: InferProps<typeof PageTransition.propTypes>) {
    return (
        <motion.article
            initial={'hidden'}
            animate={'enter'}
            exit={'exit'}
            variants={variants}
            transition={{ duration: 0.6, type: 'easeInOut' }}
            style={{ position: 'relative' }}
        >
            { children }
        </motion.article>
    )
}

PageTransition.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}

export default PageTransition