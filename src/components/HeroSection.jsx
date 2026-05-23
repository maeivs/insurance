import heroImage from '../assets/hero.png'

const heroPoints = [
  { title: '24시간 이내 연결', description: '신청 후 빠르게 상담 일정을 조율합니다.' },
  { title: '1:1 맞춤 설계', description: '상황과 예산에 맞는 보장 범위를 제안합니다.' },
  { title: '여러 보험사 비교', description: '조건을 함께 비교해 합리적으로 결정합니다.' },
]

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="section-inner hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Insurance Consultation</span>
          <h1>
            안심할 수 있는 보험,
            <br />
            지금 바로 상담받으세요
          </h1>
          <p>
            전문 상담사가 고객님의 상황을 먼저 이해하고, 필요한 보장만 선별해
            가장 현실적인 보험 플랜을 제안합니다.
          </p>

          <div className="hero-actions">
            <a className="primary-link" href="#consultation">
              무료 상담 신청하기
            </a>
            <a className="secondary-link" href="#products">
              보험 상품 살펴보기
            </a>
          </div>

          <div className="hero-points">
            {heroPoints.map((point) => (
              <article className="hero-point" key={point.title}>
                <strong>{point.title}</strong>
                <span>{point.description}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <img src={heroImage} alt="보험 상담을 상징하는 이미지" />
            <div className="hero-overlay">
              <article>
                <strong>전문 상담으로 시작하세요</strong>
                <span>경험 많은 전문가가 최적의 보험 선택을 도와드립니다.</span>
              </article>
            </div>
          </div>

          <aside className="floating-card">
            <strong>상담 만족도 98%</strong>
            <span>초기 상담부터 가입 검토까지 한 번에 안내합니다.</span>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default HeroSection