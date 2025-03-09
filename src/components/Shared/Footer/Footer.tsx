import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Company Info */}
          <div className="space-y-6">
            <div className="">
              <Image src="/logo.png" alt="Logo" width={48} height={48} />
            </div>
            <p className="text-base font-normal leading-[150%]">
              We&apos;re a cement tile company with a passion for color, stocking hundreds of cement tiles at our warehouse
              in New Jersey with fast shipping nationwide!<br />Let&apos;s help you create a space you&apos;ll love!
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="p-[10px] border border-white rounded-full hover:bg-white hover:text-black transition-colors"
              >
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="p-[10px] border border-white rounded-full hover:bg-white hover:text-black transition-colors"
              >
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="p-[10px] border border-white rounded-full hover:bg-white hover:text-black transition-colors"
              >
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="p-[10px] border border-white rounded-full hover:bg-white hover:text-black transition-colors"
              >
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-2xl font-medium mb-6 leading-[150%]">Quick Link</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:underline text-base font-normal leading-[150%] text-[#BFBFBF]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-base font-normal leading-[150%] text-[#BFBFBF]">
                  Browse Cement Tiles
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-base font-normal leading-[150%] text-[#BFBFBF]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-base font-normal leading-[150%] text-[#BFBFBF]">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-base font-normal leading-[150%] text-[#BFBFBF]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-base font-normal leading-[150%] text-[#BFBFBF]">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-base font-normal leading-[150%] text-[#BFBFBF]">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-base font-normal leading-[150%] text-[#BFBFBF]">
                  Trade
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-base font-normal leading-[150%] text-[#BFBFBF]">
                  Data sheet
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-base font-normal leading-[150%] text-[#BFBFBF]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div className="space-y-4">
            <h3 className="text-2xl font-medium mb-6 leading-[150%]">Quick Link</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:underline text-base font-normal leading-[150%] text-[#BFBFBF]">
                  All Tiles
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-base font-normal leading-[150%] text-[#BFBFBF]">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-base font-normal leading-[150%] text-[#BFBFBF]">
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-base font-normal leading-[150%] text-[#BFBFBF]">
                  Terrazzo
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-base font-normal leading-[150%] text-[#BFBFBF]">
                  Metal Insert
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-base font-normal leading-[150%] text-[#BFBFBF]">
                  Solid
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-base font-normal leading-[150%] text-[#BFBFBF]">
                  Glaze
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-base font-normal leading-[150%] text-[#BFBFBF]">
                  Terracotta
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-base font-normal leading-[150%] text-[#BFBFBF]">
                  Zellige
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-base font-normal leading-[150%] text-[#BFBFBF]">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter and Contact */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold leading-[150%]">Subscribe To Our Daily Newsletter</h3>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input type="email" placeholder="Enter Your Email" className="bg-white text-black" />
                <Button className="bg-red-600 hover:bg-red-700 text-white">Subscribe</Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-medium">Contract</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2 text-xl font-normal text-[#BFBFBF]">
                  <MapPin className="mt-1 flex-shrink-0" size={18} />
                  <p>
                    18000 Commerce Parkway
                    <br />
                    Mt Laurel, NJ 08054
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xl font-normal text-[#BFBFBF]">
                  <Phone size={18} />
                  <p>856-988-1802</p>
                </div>
                <div className="flex items-center gap-2 text-xl font-normal text-[#BFBFBF]">
                  <Mail size={18} />
                  <p>olesya@lilitile.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base font-normal leading-[150%] text-[#BFBFBF]">© 2025 LiLi Tile All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-base hover:underline font-normal leading-[150%] text-[#BFBFBF]">
              Privacy Policy
            </Link>
            <Link href="#" className="text-base hover:underline font-normal leading-[150%] text-[#BFBFBF]">
              Conditions
            </Link>
            <Link href="#" className="text-base hover:underline font-normal leading-[150%] text-[#BFBFBF]">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

