
import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Instagram, Youtube, Twitter, Send } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#263238] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1  lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1 flex flex-col md:items-start items-center space-y-10 ">
            <div className="flex-shrink-0">
              <Link href="/">
                <img
                  className="h-6 w-auto cursor-pointer md:h-8"
                  src="/Neee.svg"
                  alt="Logo"
                />
              </Link>
            </div>

            <div className="text-sm text-[#F5F7FA] flex flex-col max-w-xs gap-2">
              <p>Copyright © 2020 Landify UI Kit.</p>
              <p>All rights reserved</p>
            </div>

            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <div className="w-4 h-4 rounded-full border-2 border-current"></div>
              </Link>
              <Link
                href="#"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="flex flex-row justify-evenly w-full lg:col-span-2">

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <div className="space-y-3">
                <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                  About us
                </Link>
                <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
                <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Contact us
                </Link>
                <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Pricing
                </Link>
                <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Support</h3>
              <div className="space-y-3">
                <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Help center
                </Link>
                <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Terms of service
                </Link>
                <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Legal
                </Link>
                <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Privacy policy
                </Link>
                <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Status
                </Link>
              </div>
            </div>

          </div>
          <div className="space-y-4 lg:col-span-1 flex flex-col md:items-start items-center">
            <h3 className="text-lg font-semibold">Stay up to date</h3>
            <div className="flex w-[90%] max-w-md">
              <Input
                type="email"
                placeholder="Your email address"
                // className="bg-[#515B60] rounded-r-none border-[#515B60] text-white focus:border-none"
                className="bg-[#515B60] border-[#515B60] text-white placeholder:text-[#D9DBE1] rounded-r-none"
              />
              <Button type="submit" className="bg-[#515B60] rounded-l-none px-3">
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
