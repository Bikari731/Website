import CTAButton2 from '../components/CTAButton2';
import { blogs as localBlogs } from '../data/blogs';
import BlogsCard from './BlogsCard';
import BlogPost from '../interface/blog';
import { getApiBlogs } from '../lib/getNews';
import { blogSectionContent } from '../data/home';
import AnimateInView from '../components/Animate';

const Blogs = async () => {
  let apiBlogs: BlogPost[] = [];
  try {
    apiBlogs = await getApiBlogs(); // server-side fetch
  } catch (e) {
    console.error("API blogs fetch failed:", e);
  }

  const combinedBlogs = [...apiBlogs, ...localBlogs].slice(0, 4);

  return (
    <section className="bg-gray-100 w-full py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        {/* Header */}
        <AnimateInView direction="up">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-gray-900">
              {blogSectionContent.headingParts.map((part, i) => (
                <span key={i} className={part.className}>
                  {part.text}
                </span>
              ))}
            </h1>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight max-w-4xl">
              {blogSectionContent.subheading}
            </h2>
            <div className="relative group cursor-pointer flex items-center w-fit">
              <CTAButton2 href={blogSectionContent.cta.href} label={blogSectionContent.cta.text} />
            </div>
          </div>
        </AnimateInView>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center ">
          {combinedBlogs.map((blog, i) => (
            <AnimateInView key={blog.id || blog.slug || i} direction="up" delay={i * 0.15}>
              <BlogsCard blog={blog} />
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
