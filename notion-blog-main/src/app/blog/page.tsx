import CategoryFilter from '@/components/filter/category-filter';
import SearchBar from '@/components/filter/search-bar';
import PostsGrid from '@/components/posts/posts-grid';
import { getAllPostsFromNotion } from '@/services/posts';
import { toUniqueArray } from '@/utils/to-unique-array';

export const metadata = {
  title: 'Blog',
  description: 'All posts are created by notion ai.',
};

export default async function BlogPage() {
  try {
    const allPosts = await getAllPostsFromNotion();
    console.log(allPosts)
  
    const allCategories = toUniqueArray(
      allPosts
        .filter((post) => post.published)
        .map((post) => post.categories)
        .flat()
    ).sort();

    return (
      <>
        <section className="mb-16 mt-0 space-y-8 md:mt-20">
          <SearchBar />
          <CategoryFilter allCategories={allCategories} />
        </section>
        <PostsGrid allPosts={allPosts} />
      </>
    );
  } catch (error) {
    // Handle the error, log it, or render an error message
    console.error('Error fetching posts:', error);
    // You might want to render an error message or redirect to an error page
    return <div>Error fetching posts. Please try again later.</div>;
  }
}