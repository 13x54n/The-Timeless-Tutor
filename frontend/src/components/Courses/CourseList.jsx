const products = [
    {
      id: 1,
      name: 'dAppp Development',
      href: '#',
      imageSrc: 'https://images.unsplash.com/photo-1559445368-b8a993676d7a?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: "",
      reviews: '8.9/10',
      updatedAt: 'August 21, 2023',
      description: "Learn how to build a simple dApp on EVM Compatible Chains."
    },
    {
      id: 2,
      name: 'Online Marketing',
      href: '#',
      imageSrc: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: "",
      reviews: '7.5/10',
      updatedAt: 'May 26, 2023',
      description: "Online marketing has become the core functionalities for modern business."
    },
    {
      id: 3,
      name: 'Optimize Web Performance',
      href: '#',
      imageSrc: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: "",
      reviews: '6/10',
      updatedAt: 'July 26, 2023',
      description: "This course os designed for those new to web performance, a vital aspect."
    },
    {
      id: 4,
      name: 'Tax Filing & Account in Ontario',
      href: '#',
      imageSrc: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=3226&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: "",
      reviews: '5.4/10',
      updatedAt: 'April 02, 2024',
      description: "Tax filing and reporting made for individuals and know about every benefits you get."
    },
    {
      id: 5,
      name: 'Home Studio Production',
      href: '#',
      imageSrc: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: "",
      reviews: '9.6/10',
      updatedAt: 'October 10, 2023',
      description: "Grammy level musics can be produced from your home to billions of streaming platforms."
    },
    {
      id: 6,
      name: 'Interior Design 101',
      href: '#',
      imageSrc: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: "",
      reviews: '10/10',
      updatedAt: 'July 1, 2023',
      description: "ABC of interior designs, tools, and framing the interiors minimally."
    },
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
  