import { Outlet } from 'react-router-dom'

import { motion } from 'framer-motion'

export const DefaultLayout = () => {
  return (
    <motion.div
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className="box"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.6,
      }}
    >
      <div className="flex flex-col antialiased">
        <div className="flex h-screen overflow-hidden">
          <div className="flex flex-1 flex-col gap-4 p-4 pt-16">
            <Outlet />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
