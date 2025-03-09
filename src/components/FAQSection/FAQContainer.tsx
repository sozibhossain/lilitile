"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

type FaqItem = {
  question: string
  answer: string
}

const faqData: FaqItem[] = [
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed augue iaculis, pellentesque elit ultrices, viverra nunc. Etiam at sem tortor. Pellentesque id ultricies augue. Integer sagittis urna non orci sagittis vehicula. Vivamus hendrerit dignissim ligula in sagittis. Suspendisse eleifend feugiat eros sit amet semper.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed augue iaculis, pellentesque elit ultrices, viverra nunc. Etiam at sem tortor. Pellentesque id ultricies augue.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed augue iaculis, pellentesque elit ultrices, viverra nunc. Etiam at sem tortor. Pellentesque id ultricies augue.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed augue iaculis, pellentesque elit ultrices, viverra nunc. Etiam at sem tortor. Pellentesque id ultricies augue.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed augue iaculis, pellentesque elit ultrices, viverra nunc. Etiam at sem tortor. Pellentesque id ultricies augue.",
  },
]

export function FaqContainer() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqData.map((faq, index) => (
        <div key={index} className="border border-[#595959]/70 rounded-lg overflow-hidden">
          <div className="flex justify-between items-center p-4 cursor-pointer" onClick={() => toggleFaq(index)}>
            <h3 className="font-semibold text-[18px]">{faq.question}</h3>
            <motion.button
              className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={openIndex === index ? "Close answer" : "Open answer"}
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={openIndex === index ? "minus" : "plus"}
                  initial={{ rotate: openIndex === index ? -90 : 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: openIndex === index ? 90 : -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: "auto",
                  opacity: 1,
                  transition: {
                    height: { duration: 0.3 },
                    opacity: { duration: 0.25, delay: 0.05 },
                  },
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                  transition: {
                    height: { duration: 0.3 },
                    opacity: { duration: 0.2 },
                  },
                }}
                className="overflow-hidden"
              >
                <div className="p-4 bg-gray-100 text-[#787878] text-base font-normal leading-[150%]">
                  <motion.p initial={{ y: 10 }} animate={{ y: 0 }} exit={{ y: 10 }} transition={{ duration: 0.2 }}>
                    {faq.answer}
                  </motion.p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

