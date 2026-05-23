const contacts = [
  { label: '전화 상담', value: '1588-0000' },
  { label: '이메일', value: 'info@insurance.co.kr' },
  { label: '상담 시간', value: '평일 09:00 - 18:00' },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          {contacts.map((contact) => (
            <article className="contact-card" key={contact.label}>
              <span>{contact.label}</span>
              <strong>{contact.value}</strong>
            </article>
          ))}
        </div>
        <p className="footer-copy">© 2026 보험상담센터. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer