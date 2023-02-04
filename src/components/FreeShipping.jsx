const services = [
  {
    id: 1,
    title: "free shipping",
    desc: "Free shipping worldwide",
  },
  {
    id: 2,
    title: "24 x 7 service",
    desc: "Free shipping worldwide",
  },
  {
    id: 3,
    title: "festival offer",
    desc: "Free shipping worldwide",
  },
];

const FreeShipping = () => {
  return (
    <div className="pt-8">
      <ul
        role="list"
        className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3"
      >
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-freeShipping p-16 italic text-center"
          >
            <p className="uppercase text-2xl font-bold">{service.title}</p>
            <p className=" font-normal text-text_banner pt-2">{service.desc}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default FreeShipping;
