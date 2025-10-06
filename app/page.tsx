import Hero from "@/components/Hero"
import Menu from "@/components/Menu"
import Offers from "@/components/Offers"
import Location from "@/components/Location"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import FloatingPhoneButton from "@/components/FloatingPhoneButton"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Menu />
      <Offers />
      <Location />
      <Contact />
      <Footer />
      <FloatingPhoneButton />
    </main>
  )
}
