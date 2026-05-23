const benefits = [
  {
    icon: '맞춤',
    title: '맞춤형 보험 설계',
    description: '고객님의 상황에 맞는 보험 상품과 보장 범위를 정리해드립니다.',
  },
  {
    icon: '신속',
    title: '빠른 상담 진행',
    description: '상담 신청 후 24시간 내 연락드려 진행 상황을 안내합니다.',
  },
  {
    icon: '전문',
    title: '전문 상담사 연결',
    description: '경험 많은 상담사가 직접 설명하고 비교 포인트를 짚어드립니다.',
  },
  {
    icon: '비교',
    title: '합리적인 보험료 검토',
    description: '여러 보험사 기준으로 조건과 비용을 함께 비교합니다.',
  },
]

function BenefitsSection() {
  return (
    <section className="content-section" id="benefits">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <h2>왜 저희를 선택해야 할까요?</h2>
            <p>
              단순 상품 소개가 아니라 필요한 보장을 이해하고 선택할 수 있도록 돕는
              상담 경험에 초점을 맞췄습니다.
            </p>
          </div>
        </div>

        <div className="benefit-grid">
          {benefits.map((benefit) => (
            <article className="benefit-card" key={benefit.title}>
              <div className="icon-pill" aria-hidden="true">
                {benefit.icon}
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection