/* ui_kits/web-app/SearchDashboard.jsx */
function SearchDashboard({ onSearch, onOpen }) {
  const quick = [
    '347 U.S. 483',
    'Roe v. Wade',
    'qualified immunity 42 USC 1983',
    'Chevron deference 2024'
  ];
  const recent = [
    { name: 'Miranda v. Arizona', cite: '384 U.S. 436', date: 'Yesterday' },
    { name: 'Citizens United v. FEC', cite: '558 U.S. 310', date: '2 days ago' },
    { name: 'Marbury v. Madison', cite: '5 U.S. (1 Cranch) 137', date: 'Last week' }
  ];
  return (
    <div className="page">
      <div className="page__eyebrow">Tuesday, April 8</div>
      <h1 className="page__title">Good morning, Amelia.</h1>
      <p className="page__sub">Pick up where you left off, or start a new line of research.</p>

      <div className="empty">
        <h2>Search a citation, a case name, or a phrase.</h2>
        <p>Citelines pulls the opinion, every case it cites, and every case that has cited it — with the lineage on one page.</p>
        <div className="quick">
          {quick.map(q => (
            <span key={q} className="chip chip--mono" onClick={() => onSearch(q)}>{q}</span>
          ))}
        </div>
      </div>

      <div className="page__eyebrow" style={{ marginTop: 36 }}>Recent</div>
      <h3 style={{ font: '500 22px/1.2 var(--font-display)', color: 'var(--fg-1)', margin: '4px 0 14px' }}>What you were reading</h3>
      <div className="stack">
        {recent.map(r => (
          <div key={r.cite} className="card case-card" onClick={() => onOpen(r)}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <span className="badge badge--moss"><span className="dot" style={{ background:'#4a7c59' }}/>Good standing</span>
              <span style={{ font: '500 12px/1 var(--font-body)', color: 'var(--fg-3)' }}>{r.date}</span>
            </div>
            <div className="case-card__name"><em>{r.name}</em></div>
            <div className="case-card__cite">{r.cite}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
window.SearchDashboard = SearchDashboard;
