import { Hero } from '@/components/Hero'
import { PriceTrackerWrapper } from '@/components/PriceTrackerWrapper'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { Products } from '@/components/Products'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PriceTrackerWrapper />
      <About />
      <Services />
      <Products />
      <Contact />
      <Footer />
    </main>
  )
}