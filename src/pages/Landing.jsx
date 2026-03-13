import Navbar from '../components/layout/Navbar'
import BackgroundEffects from '../components/home/BackgroundEffects'
import Hero from '../components/home/Hero'
import Stats from '../components/home/Stats'
import Categories from '../components/home/Categories'
import Trending from '../components/home/Trending'
import Comparisons from '../components/home/Comparisons'
import BottomCTA from '../components/home/BottomCTA'

export default function Landing() {
  return (
    <div className="min-h-screen bg-dark-950 text-gray-200 relative overflow-x-hidden">
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <Stats />
      <Categories />
      <Trending />
      <Comparisons />
      <BottomCTA />
    </div>
  )
}