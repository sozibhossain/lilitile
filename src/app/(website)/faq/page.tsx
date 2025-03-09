import FAQSection from '@/components/FAQSection/FAQSection'
import { PageBreadcrumb } from '@/components/Shared/Breadcrumb/Breadcrumb'
import { PageHero } from '@/components/Shared/Hero/Hero'
import React from 'react'

function page() {
    return (
        <div>


            <PageHero title='Frequently Asked Questions' label='Style That Speaks, Comfort That Lasts.' />
            <div className='container'>
                <PageBreadcrumb
                    items={[
                        {
                            label: "Home",
                            href: "/",
                        },
                        {
                            label: "FAQ",
                            href: "/faq",
                        },
                    ]}
                />
            </div>
            <FAQSection />
        </div>
    )
}

export default page