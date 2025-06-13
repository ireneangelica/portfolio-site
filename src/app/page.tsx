"use client"

import Image from "next/image"
import {ImageModal} from "../components/ImageModal"
import {SocialIcon} from "../components/SocialIcon"
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Menu, Github, Linkedin, Youtube, LinkedinIcon } from "lucide-react"
import { ContactSection } from '@/components/ContactSection'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 p-6">
      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8">
        {/* Left Sidebar */}
        <div className="space-y-8">
          {/* Profile Header */}
          <div className="flex items-center gap-4">
            <ImageModal 
              src="https://media.licdn.com/dms/image/v2/D5603AQF6O41SEYdORA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723624129862?e=1755129600&v=beta&t=Ruxu_XGwtJOXCThxj44Gu7s7VUJCJwqFPJPa6mdfOnI" 
              alt="Profile Photo"
            >
              <Image
                src="https://media.licdn.com/dms/image/v2/D5603AQF6O41SEYdORA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723624129862?e=1755129600&v=beta&t=Ruxu_XGwtJOXCThxj44Gu7s7VUJCJwqFPJPa6mdfOnI"
                alt="Profile"
                width={100}
                height={100}
                unoptimized
                className="rounded-full border-2 border-mint-200 cursor-pointer hover:opacity-80 transition-opacity"
              />
            </ImageModal>
            <div>
              <h1 className="text-2xl font-mono text-pink-600">IRENE ANGELIKA</h1>
              <p className="text-mint-600">PROJECT MANAGEMENT</p>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              I specialize in managing large-scale, multi-client projects at an outsourcing company, overseeing operations for 100–800+ workers across diverse client portfolios. <br></br>
              Technology has always surprise me, and I'm excited to be part with technology.
            </p>
            <Button 
              variant="outline" 
              className="rounded-full border-pink-300 text-pink-600 hover:bg-pink-100"
              asChild
            >
              <a 
                href="/IreneAngelika_Resume.pdf" 
                download="IreneAngelika_Resume.pdf"
              >
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <div className="flex gap-4">
              <SocialIcon 
                href="https://www.linkedin.com/in/irene-angelika-603339208/"
                icon={<LinkedinIcon className="w-5 h-5 text-pink-600 hover:text-pink-700" />}
                ariaLabel="LinkedIn profile"
                className="hover:bg-pink-100/50"
              />
              <SocialIcon 
                href="https://github.com/ireneangelica/"
                icon={<Github className="w-5 h-5 text-pink-600 hover:text-pink-700" />}
                ariaLabel="GitHub profile"
                className="hover:bg-pink-100/50"
              />
            </div>
            <div className="text-gray-500 text-sm">
              <p>© Irene Angelika Portfolio</p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-8">
          {/* Menu Button - Only show on mobile */}
          <div className="flex justify-end lg:hidden">
            <Button variant="ghost" size="icon" className="text-pink-600">
              <Menu className="w-6 h-6" />
            </Button>
          </div>

          {/* Projects Section */}
          <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-mono text-pink-600">My Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                id: 1,
                title: "Astro",
                image: "https://play-lh.googleusercontent.com/J-MCv2jtYCOXA9J5AsEsbhGxF0MVOFoUpWtClpx4_VM4dajDTIvWj5tylltQj7azsAMW=w720-h405-rw",
                pdf: "/portfolio/TRIO_MALLOW.pdf"
              },
              {
                id: 2,
                title: "Sagala Cloud Kitchen",
                image: "https://media.licdn.com/dms/image/v2/C560BAQHiPLjGoxJeoQ/company-logo_200_200/company-logo_200_200/0/1630671362999?e=2147483647&v=beta&t=g5yNo2MF3j5j5dV99UMqEjwlKc8fU2brmKDDWSW94NY",
                pdf: "/portfolio/TRIO_MALLOW.pdf"
              },
              {
                id: 3,
                title: "Uniqlo",
                image: "https://www.neosohojakarta.com/upload/tenant/668e0c5367388_UNIQLO-Logo.jpg",
                pdf: "/portfolio/TRIO_MALLOW.pdf"
              },
              {
                id: 4,
                title: "Chomp Chomp Marshmallow",
                image: "https://mms.img.susercontent.com/04bf468a5bb73649b97458241bfafdcd",
                pdf: "/portfolio/TRIO_MALLOW.pdf"
              }
            ].map((project) => (
              <div key={project.id} className="group relative">
                <Link 
                  href={project.pdf} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative aspect-square bg-white rounded-lg overflow-hidden border border-pink-200 transition-all duration-200 group-hover:border-pink-300 group-hover:shadow-md">
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-103"
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="bg-white/90 text-pink-600 border-pink-300 hover:bg-white text-xs"
                      >
                        View Case
                      </Button>
                    </div>
                  </div>
                  <h3 className="mt-2 text-base font-medium text-gray-800 group-hover:text-pink-600 transition-colors">
                    {project.title}
                  </h3>
                </Link>
              </div>
            ))}
          </div>
        </section>

          {/* Certificates Section */}
          <section className="bg-mint-100 rounded-xl p-6 border border-mint-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-mono text-mint-800">My Certificates</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                {
                  id: 1,
                  name: "Certificate MOOC",
                  image: "/certificates/certificate_mooc.png",
                  url: "/certificates/Certificate MOOC_Irene Angelika.pdf"
                },
                {
                  id: 2,
                  name: "Certificate Financial Markets",
                  image: "/certificates/certificate_financial_markets.png",
                  url: "/certificates/Certificate_Financial_Markets.pdf"
                },
                {
                  id: 3,
                  name: "Certificate Enlighten",
                  image: "/certificates/certificate_enlighten.png",
                  url: "/certificates/Certificate_enlighten.pdf"
                }
              ].map((cert) => (
                <Link 
                  key={cert.id}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center"
                >
                  <div className="w-64 h-40 bg-white rounded-lg border-2 border-mint-300 overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      width={256} // Matches w-64
                      height={160} // Matches h-40
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <span className="mt-3 text-base font-medium text-center text-mint-800 group-hover:text-mint-900 group-hover:underline">
                    {cert.name}
                  </span>
                </Link>
              ))}
            </div>
          </section>



          {/* Contact Section */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> */}
            {/* Contact Section */}
            <ContactSection/>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}
