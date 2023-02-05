import Pagination from "../elements/Pagination";
import { useNavigate } from 'react-router-dom';

const Product = ({ products, pagination = false }) => {
  const navigate = useNavigate();
  
  return (
    <div className="lg:col-span-3">
      {/* Replace with your content */}
      <div className="pt-16">
        <div className="space-y-12">
          <ul
            role="list"
            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
          >
            {products?.map((product) => (
              <li key={product?._id?.["$oid"]} className="cursor-pointer" onClick={() => navigate(`/detail/${product?._id?.["$oid"]}`)}>
                <p>{product?._id[0]?.["$oid"]}</p>
                <div className="space-y-4">
                  <div className="group aspect-w-2 aspect-h-1 overflow-auto sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2 hover:cursor-pointer">
                    <img
                      className="object-cover object-center group-hover:opacity-75"
                      src={product?.img1}
                      alt={product?.name}
                    />
                    <div
                      aria-hidden="true"
                      className="bg-gradient-to-b from-transparent to-black opacity-50"
                    />
                  </div>

                  <div className="space-y-2 text-center">
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3>{product?.name}</h3>
                    </div>
                    <div className="space-y-1 text-lg font-normal leading-6 italic text-text_banner">
                      <h3>
                        {new Intl.NumberFormat("de-DE").format(product?.price)}{" "}
                        VND
                      </h3>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {pagination && <Pagination totalProducts={products.length} />}
      </div>
      {/* /End replace */}
    </div>
  );
};

export default Product;
