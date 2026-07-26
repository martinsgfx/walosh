import { useState } from "react";
import { TABS } from "./productsData.js";

function ProductCard({ img, name, badge }) {
  return (
    <div>
      <div className="aspect-3/4 w-full overflow-hidden bg-white">
        <img
          src={img}
          alt={name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-2 px-4">
        <p className="mt-3 text-lg font-bold text-black">{name}</p>
      <p className="text-sm text-black">{badge}</p>

      </div>
      
    </div>
  );
}

export default function Products() {
  const [activeId, setActiveId] = useState(TABS[0].id);
  const activeTab = TABS.find((t) => t.id === activeId);
 
  return (
    <div className="min-h-screen px-4 py-10 sm:px-6 lg:px-8">
      {/* Tab bar */}
      <div className="flex flex-wrap items-center justify-center  gap-x-6 gap-y-3 pb-4 sm:gap-x-10 lg:gap-x-20">
        {TABS.map((tab) => {
          const isActive = tab.id === activeId;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveId(tab.id)}
              className={`text-md transition-colors sm:text-base ${
                isActive
                  ? "font-semibold text-gray-900 underline underline-offset-4"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
 
      {/* Product grid — content swaps with the active tab */}
      <div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {activeTab.products.map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
      </div>
    </div>
  );
}






