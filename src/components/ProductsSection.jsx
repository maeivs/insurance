import heroImage from '../assets/hero.png'

const products = [
  {
    icon: '건강',
    title: '건강보험',
    description: '암, 질병, 상해 등 건강 관련 보장을 중심으로 상담합니다.',
  },
  {
    icon: '자동',
    title: '자동차보험',
    description: '운전자와 차량 상황에 맞는 종합 보장 조건을 비교합니다.',
  },
  {
    icon: '재산',
    title: '재산보험',
    description: '주택, 화재, 배상 책임 등 재산 관련 보장을 검토합니다.',
  },
  {
    icon: '연금',
    title: '연금보험',
    description: '안정적인 노후 준비를 위한 장기 설계 관점으로 안내합니다.',
  },
]

function ProductsSection() {
  return (
    <section className="content-section" id="products">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <h2>다양한 보험 상품 상담</h2>
            <p>고객님께 필요한 모든 종류의 보험을 한 자리에서 비교 안내해드립니다.</p>
          </div>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.title}>
              <div className="icon-pill" aria-hidden="true">
                {product.icon}
              </div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </article>
          ))}
        </div>

        <div className="product-showcase">
          <article className="showcase-card">
            <img src={heroImage} alt="전문 상담과 보험 안내를 상징하는 이미지" />
            <div className="showcase-copy">
              <h3>전문 상담으로 시작하세요</h3>
              <p>경험 많은 전문가가 고객님께 맞는 보험 방향을 빠르게 정리해드립니다.</p>
            </div>
          </article>

          <aside className="showcase-aside">
            <h3>상담 시 함께 확인하는 내용</h3>
            <p>보장 범위, 납입 기간, 보험료 수준, 기존 가입 내역까지 함께 살펴봅니다.</p>
            <ul>
              <li>현재 보장 공백 여부 확인</li>
              <li>중복 가입 또는 과다 보험료 검토</li>
              <li>가족 구성과 라이프스타일 반영</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection