
import Link from 'next/link';

export const metadata = {
  title: 'Welcome | SiliconScriptor',
};

export default function HomePage() {

  const handleButton1Click = () => {
  };

  const handleButton2Click = () => {
  };

  return(
  <div className="flex flex-col lg:flex-row h-screen items-center">
  <div className="lg:w-70 w-full p-8">
    <h1 className="text-4xl font-bold mb-4">Explore Tech Wonders & Blog Bliss at SiliconScriptor</h1>
    <p className="text-lg text-gray-600 mb-4">Embark on a captivating journey through the realm of emerging technologies with me, Sahil Chordia. Delve into the fascinating world of coding, innovation, and continuous learning. Join me on an exploration that goes beyond boundaries and encourages you to navigate through insightful blogs, uncovering the latest trends and discoveries</p>
    <div className="flex">
      <Link href='/contact'>
  <button className="bg-blue-500 text-white px-10 py-3 mr-4 rounded-full">Contact me</button>
  </Link>
  <Link href='/about'>
  <button className="border border-green-500 text-green-500 px-10 py-3 rounded-full">Learn More</button>
  </Link>
</div>
  </div>

  <div className="lg:w-30 w-full p-10">
    <img
      className="w-full h-auto lg:w-auto lg:h-full mx-auto lg:mx-0"
      src="/logo.png"
      alt="Placeholder"
    />
  </div>
</div>
  )
}
