function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand">
          <div className="brand-badge">IN</div>
          <div className="brand-copy">
            <strong>보험상담센터</strong>
            <span>맞춤형 보험 상담 플랫폼</span>
          </div>
        </div>

        <nav className="header-nav" aria-label="주요 메뉴">
          <a href="#benefits">장점</a>
          <a href="#products">상품 안내</a>
          <a href="#consultation">상담 신청</a>
        </nav>

        <a className="header-cta" href="#consultation">
          무료 상담 신청
        </a>
      </div>
    </header>
  )
}

export default Header