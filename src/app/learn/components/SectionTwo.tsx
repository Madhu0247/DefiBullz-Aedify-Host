"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { blogPosts } from "../data/blogContent";

const SectionTwo = () => {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category') || "All";
  
  // Filter blog posts based on the selected category
  const filteredPosts = currentCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => 
        post.categories.includes(currentCategory)
      );

  return (
    <div className="py-12 px-4 sm:px-8 md:px-16 lg:px-24 bg-[#ffffff]">
      {filteredPosts.length === 0 ? (
        <div className="text-center py-16">
          <h3 className="text-2xl font-semibold text-gray-800">No blog posts found for this category.</h3>
          <p className="text-gray-600 mt-2">Try selecting a different category or check back later.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link 
              href={`/website/learn/blog/${post.slug}`} 
              key={post.id} 
              className="block overflow-hidden rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <Image
                src={post.image}
                alt={post.title}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                width={530}
                height={370}
                priority
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SectionTwo;