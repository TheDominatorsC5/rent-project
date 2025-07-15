import HomeProductCard from "./HomeProductCard";

export default function ProductList() {
    const products = [
        {
            //   image: 'Modern Downtown Apartment',
            //   price: '$2,400',
            //   title: 'Luxury 2BR Downtown',
            //   location: 'Downtown, City Center',
            //   beds: '2 bed • 2 bath',
            //   size: '1,200',
            image: 'https://via.placeholder.com/400x250/34495e/ecf0f1?text=Modern+Downtown+Apartmenhttps://i.pinimg.com/1200x/03/0b/5c/030b5cfede15f68f8a5f2f20e04dcac6.jpgt',
            price: '$2,400/month',
            title: 'Modern Downtown Apartment',
            description: 'Luxury 2BR Downtown',
            location: 'Downtown, City Center',
            beds: '2 bed',
            baths: '2 bath',
            sqft: '1,200 sq ft',
            verified: true,
        },
        {
            image: 'Cozy Suburban House',
            price: '$1,800',
            title: 'Family Home with Garden',
            location: 'Suburban District, West Side',
            beds: '3 bed • 2 bath',
            size: '1,800',
        },
        {
            image: 'Studio Apartment',
            price: '$1,200',
            title: 'Modern Studio Loft',
            location: 'Arts District, East Side',
            beds: 'Studio • 1 bath',
            size: '650',
        },
    ];

    return (
        <section className="max-w-7xl mx-auto py-10 px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Discover our most popular rental properties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-md text-sm">
                    View All Listings
                </button>
            </div>
        </section>
    );
}
