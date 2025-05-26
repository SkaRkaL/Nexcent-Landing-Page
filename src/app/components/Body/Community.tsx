import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      image: "/images/PersonUsingLaptop.jpg?height=300&width=400",
      link: "#",
    },
    {
      id: 2,
      title: "What are your safeguarding responsibilities and how can you manage them?",
      image: "/images/TablewithLaptop.jpg?height=300&width=400",
      link: "#",
    },
    {
      id: 3,
      title: "Revamping the Membership Model with Triathlon Australia",
      image: "/images/DeskwithLaptop.jpg?height=300&width=400",
      link: "#",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[2.64rem] font-semibold text-[#4D4D4D] mb-6">
            Caring is the new marketing
          </h2>
          <p className="text-[#717171] text-base md:text-[1.12rem] max-w-4xl mx-auto leading-relaxed">
            The Nextcent blog is the best place to read about the latest membership insights, trends and more. See whos joining the community, read about how our community are increasing their membership income and lots more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-5">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className={`relative group ${index === 1 ? "lg:mt-5" : index === 2 ? "md:mt-7 lg:mt-10" : ""}`}
            >
              <div className="relative h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              <div className="absolute -bottom-6 left-4 right-4 bg-[#F5F7FA] rounded-xl shadow-xl p-6 md:p-8 transform transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="text-[#717171] text-left font-medium text-lg md:text-xl mb-4 leading-tight line-clamp-3">
                  {post.title}
                </h3>

                <div className="flex justify-end">
                  <a
                    href={post.link}
                    className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors duration-200 group/link hover:underline md:text-lg text-[1rem] md:leading-6"
                  >
                    Readmore
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>

              <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full opacity-80 animate-pulse" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-200 rounded-full opacity-60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
