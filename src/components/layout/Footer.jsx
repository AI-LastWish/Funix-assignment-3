const footerNavigation = {
  customerServices: [
    { name: "Help & Contact us", href: "#" },
    { name: "Returns & Refunds", href: "#" },
    { name: "Online Stores", href: "#" },
    { name: "Terms & Conditions", href: "#" },
  ],
  company: [
    { name: "What we do", href: "#" },
    { name: "Available Services", href: "#" },
    { name: "Latest Posts", href: "#" },
    { name: "FAQs", href: "#" },
  ],
  socialMedia: [
    { name: "Twitter", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Facebook", href: "#" },
    { name: "Pinterest", href: "#" },
  ],
};

export default function Footer() {
  return (
    <>
      <footer aria-labelledby="footer-heading" className="bg-black">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-2 gap-8 py-20 sm:grid-cols-2 sm:gap-y-0 lg:grid-cols-3">
            <div className="grid grid-cols-1 gap-y-10 lg:col-span-3 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
              <div>
                <ul role="list" className="mt-6 space-y-6">
                  <p className="text-white text-lg italic font-bold">
                    CUSTOMER SERVICES
                  </p>
                  {footerNavigation.customerServices.map((item) => (
                    <li key={item.name} className="text-sm">
                      <a
                        href={item.href}
                        className="text-gray-500 hover:text-gray-600"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul role="list" className="mt-6 space-y-6">
                  <p className="text-white text-lg italic font-bold">COMPANY</p>
                  {footerNavigation.company.map((item) => (
                    <li key={item.name} className="text-sm">
                      <a
                        href={item.href}
                        className="text-gray-500 hover:text-gray-600"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul role="list" className="mt-6 space-y-6">
                  <p className="text-white text-lg italic font-bold">
                    SOCIAL MEDIA
                  </p>
                  {footerNavigation.socialMedia.map((item) => (
                    <li key={item.name} className="text-sm">
                      <a
                        href={item.href}
                        className="text-gray-500 hover:text-gray-600"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
