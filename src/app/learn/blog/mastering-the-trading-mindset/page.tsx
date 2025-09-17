import { blogPosts } from '../../data/blogContent';
import Footer from '../../../components/Footer';



export default function MasteringTradingMindset() {
  // Find the blog post by slug
  const post = blogPosts.find(post => post.slug === 'mastering-the-trading-mindset');

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center">Blog post not found</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative h-[250px] w-full">
      <div className="absolute inset-0 bg-black w-full h-[300px]"></div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-8 ">
            <h1 className="text-5xl font-bold mb-4 text-white">{post.title}</h1>
            <p className="text-xl opacity-90 text-white">{post.excerpt}</p>
            <div className="flex gap-2 mt-6">
              {post.categories.map((category) => (
                <span
                  key={category}
                  className="px-3 py-1 bg-[#4ED634] text-white rounded-full text-sm"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 md:px-8">
        <article className="max-w-[800px] mx-auto py-16">
          <div className="prose prose-sm sm:prose lg:prose-lg mx-auto text-black overflow-hidden">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </article>
      </div>

      <Footer />
    </div>
  );
} 