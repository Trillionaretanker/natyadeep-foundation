import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

function Counter({ value }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const count = useMotionValue(0)
  const rounded = useTransform(count, Math.round)

  useEffect(() => {
    if (isInView) {
      animate(count, value, {
        duration: 2,
        ease: "easeOut",
      })
    }
  }, [isInView, value])

  return (
    <motion.span ref={ref}>
      {rounded}
    </motion.span>
  )
}

export default Counter
