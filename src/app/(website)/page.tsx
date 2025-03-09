"use client"

import React, { useState } from 'react'
import FAQSection from '@/components/FAQSection/FAQSection'
import PacificPagination from '@/components/ui/PacificPagination'

function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div>
      <FAQSection/>
      <div className="">
        <PacificPagination
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
          totalPages={5}
        />
      </div>
    </div>
  )
}

export default Page