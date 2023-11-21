export default function NotFound() {
  return (
    <div className="mx-auto mt-40 text-center">
      <h2 className="mb-4 text-3xl font-bold">Post Not Found</h2>
      <a href="/blog">
        <span className="mr-2">&larr;</span>
        <span>Go to list page</span>
      </a>
    </div>
  );
}
