import React from 'react'
import Form from '../components/contact/Form'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <>
      <motion.div
        transition={ { duration: 1, delay: .2 } }
        initial={ { opacity: 0 } }
        animate={ { opacity: 1 } }
        exit={ { opacity: 0 } }
      >
        <Form />
      </motion.div>
    </>  )
}

export default Contact