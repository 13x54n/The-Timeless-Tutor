const products = [
    {
      id: 1,
      name: 'dAppp Development',
      href: '#',
      imageSrc: 'https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: "Front of men's Basic Tee in black.",
      reviews: '8.9/10',
      updatedAt: 'August 21, 2023',
      description: "Learn how to build a simple dApp on EVM Compatible Chains."
    },
    {
      id: 2,
      name: 'dAppp Development',
      href: '#',
      imageSrc: 'https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: "Front of men's Basic Tee in black.",
      reviews: '8.9/10',
      updatedAt: 'August 21, 2023',
      description: "Learn how to build a simple dApp on EVM Compatible Chains."
    },
    {
      id: 3,
      name: 'dAppp Development',
      href: '#',
      imageSrc: 'https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: "Front of men's Basic Tee in black.",
      reviews: '8.9/10',
      updatedAt: 'August 21, 2023',
      description: "Learn how to build a simple dApp on EVM Compatible Chains."
    },
    {
      id: 4,
      name: 'dAppp Development',
      href: '#',
      imageSrc: 'https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: "Front of men's Basic Tee in black.",
      reviews: '8.9/10',
      updatedAt: 'August 21, 2023',
      description: "Learn how to build a simple dApp on EVM Compatible Chains."
    },
    {
      id: 5,
      name: 'dAppp Development',
      href: '#',
      imageSrc: 'https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: "Front of men's Basic Tee in black.",
      reviews: '8.9/10',
      updatedAt: 'August 21, 2023',
      description: "Learn how to build a simple dApp on EVM Compatible Chains."
    },
    {
      id: 6,
      name: 'dAppp Development',
      href: '#',
      imageSrc: 'https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: "Front of men's Basic Tee in black.",
      reviews: '8.9/10',
      updatedAt: 'August 21, 2023',
      description: "Learn how to build a simple dApp on EVM Compatible Chains."
    },
    // More products...
  ]
  
  export default function CourseLists() {
    return (
      <div className="bg-white">
        <div className="mx-auto">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-6">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-sm bg-gray-200 lg:aspect-none group-hover:opacity-75">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-40 w-full object-cover object-center"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700 font-semibold">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm my-3 text-gray-500">Updated {product.updatedAt}</p>
                    <p className="mt-1 text-sm text-gray-600">{product?.description}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.reviews}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  