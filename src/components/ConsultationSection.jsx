function ConsultationSection() {
  return (
    <section className="consult-section" id="consultation">
      <div className="section-inner">
        <div className="consult-card">
          <div className="consult-note">
            <h2>무료 상담 신청</h2>
            <p>
              정보를 입력해주시면 전문 상담사가 연락드려 고객님의 상황에 맞는 상담을
              준비합니다.
            </p>
            <ul>
              <li>간단한 정보만으로 상담 접수가 가능합니다.</li>
              <li>원하시는 보험 종류와 고민을 자유롭게 남길 수 있습니다.</li>
              <li>입력 정보는 상담 목적 외에는 사용되지 않습니다.</li>
            </ul>
          </div>

          <form className="consult-form">
            <div className="field-group">
              <label htmlFor="name">이름</label>
              <input id="name" name="name" placeholder="홍길동" type="text" />
            </div>

            <div className="field-group">
              <label htmlFor="phone">연락처</label>
              <input
                id="phone"
                name="phone"
                placeholder="010-1234-5678"
                type="tel"
              />
            </div>

            <div className="field-group">
              <label htmlFor="message">문의 내용</label>
              <textarea
                id="message"
                name="message"
                placeholder="궁금하신 사항이나 상담받고 싶은 보험 종류를 자유롭게 작성해주세요."
              />
            </div>

            <button className="consult-button" type="button">
              무료 상담 신청하기
            </button>
            <p className="form-caption">
              입력하신 개인정보는 상담 목적으로만 사용되며, 상담 완료 후 안전하게
              파기됩니다.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ConsultationSection