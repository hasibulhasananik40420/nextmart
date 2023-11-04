import Banner from '@/components/Banner'
import Blog from '@/components/Blog'
import Pricing from '@/components/Pricing'
import Products from '@/components/Products'

export default function Home() {
  return (
    <main className="">
      <Banner />
      <Products />
      <Pricing/>
      <Blog/>
    </main>
  )
}
