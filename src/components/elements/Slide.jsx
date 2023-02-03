export default function Example({ url, alt }) {
  return (
    <div className="relative overflow-hidden py-24 px-8 shadow-2xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-16">
      <div className="absolute inset-0 ">
        <img src={url} alt={alt} className="h-full w-full object-cover" />
      </div>
      <div className="relative lg:col-span-1">
        <blockquote className="mt-6 text-left">
          <p className="text-xl font-medium uppercase italic text-text_banner">
            New Inspiration {new Date().getFullYear()}
          </p>
          <p className="mt-4 text-4xl font-medium uppercase ">
            20% off on new season
          </p>
          <footer className="mt-6">
            <button
              type="button"
              className="inline-flex items-center border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Browse collections
            </button>
          </footer>
        </blockquote>
      </div>
    </div>
  );
}
