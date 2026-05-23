import HeroSection from './HeroSection'
import BenefitsSection from './BenefitsSection'
import ProductsSection from './ProductsSection'
import ConsultationSection from './ConsultationSection'

function MainContent() {
  return (
    <main className="page-main">
      <HeroSection />
      <BenefitsSection />
      <ProductsSection />
      <ConsultationSection />
    </main>
  )
}

export default MainContent