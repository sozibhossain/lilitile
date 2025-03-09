import Image from "next/image";
import { ButtonArrow } from "../Shared/Button/ButtonArrow";
import { FaqContainer } from "./FAQContainer";

function FAQSection() {
    return (
        <section className="container h-auto relative my-[80px]">
            <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start">
                <div className="text-center md:text-left lg:text-left">
                    <h1 className="text-[40px] md:text-[32px] lg:text-[32px] font-semibold text-black pb-2">
                        What do you want to know?
                    </h1>
                    <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#787878] leading-6 mb-10 font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed augue iaculis, pellentesque elit ultrices.
                    </p>
                </div>
                <div>
                    <ButtonArrow text="Explore" href="/" size="md" />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-[28px]">
                {/* Left Image Section */}
                <div className="lg:flex justify-center hidden">
                    <div>
                        <Image
                            src="/faq.png"
                            width={470}
                            height={544}
                            alt="Decorative background"
                            className="rounded-lg object-cover md:w-full lg:w-[470px] md:h-[600px] lg:h-[600px]"
                        />
                    </div>
                </div>

                {/* Right Content Section */}
                <div className="md:w-full lg:w-3/5">


                    {/* Accordion Section */}
                    <FaqContainer />
                </div>
            </div>
        </section>
    );
}

export default FAQSection;