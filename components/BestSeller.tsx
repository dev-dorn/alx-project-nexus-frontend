import { useContext, useState, useEffect } from 'react';
import { ShopContext, Product, ShopContextValue } from "@/context/ShopContext";
import Title from './Title';
import ProductItem from './productItem';

const BestSeller: React.FC = () => {
  const ctx = useContext(ShopContext) as ShopContextValue;
  const { products } = ctx;
  const [bestSeller, setBestSeller] = useState<Product[]>([]);

  useEffect(() => {
  const bestProduct = products.filter((item: any) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'Best'} text2={'SELLERS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis voluptatibus, deserunt minima non excepturi sed odio dolorum tempore laboriosam dolorem tempora commodi at reiciendis, iusto alias totam cum eveniet accusantium!
            </p>
            </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
      {
        bestSeller.map((item, index) => (
          <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
        ))
      }
      </div>
      
    </div>
  )
}

export default BestSeller
