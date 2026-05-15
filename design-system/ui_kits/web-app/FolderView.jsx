/* ui_kits/web-app/FolderView.jsx */
function FolderView({ folder, onOpen }) {
  const items = [
    { name: 'Brown v. Board of Education', cite: '347 U.S. 483 (1954)', note: 'Lead case for the segregation argument.', treat: 'moss' },
    { name: 'Cooper v. Aaron', cite: '358 U.S. 1 (1958)', note: 'For the state-officials-are-bound point.', treat: 'moss' },
    { name: 'Parents Involved v. Seattle', cite: '551 U.S. 701 (2007)', note: 'Distinguish on facts — voluntary plan, not mandate.', treat: 'amber' },
  ];
  return (
    <div className="page">
      <div className="page__eyebrow">Folder · 7 saved citations · Updated 2 hr ago</div>
      <h1 className="page__title">{folder || 'Q3 motion to dismiss'}</h1>
      <p className="page__sub">Notes and saved citations for the response brief due April 22.</p>

      <div className="toolbar">
        <button className="btn btn--secondary btn--sm"><IconPlus size={14}/> Add citation</button>
        <button className="btn btn--ghost btn--sm">Export brief</button>
        <button className="btn btn--ghost btn--sm">Share folder</button>
      </div>

      <div className="stack">
        {items.map(it => (
          <div key={it.cite} className="card case-card" onClick={() => onOpen(it)}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <span className={'badge badge--' + it.treat}>
                <span className="dot" style={{ background: it.treat === 'moss' ? '#4a7c59' : '#c98b3c' }}/>
                {it.treat === 'moss' ? 'Good standing' : 'Distinguished'}
              </span>
              <span style={{ font:'500 12px/1 var(--font-body)', color:'var(--fg-3)' }}>Saved Apr 4</span>
            </div>
            <div className="case-card__name"><em>{it.name}</em></div>
            <div className="case-card__cite">{it.cite}</div>
            <p style={{ font:'italic 400 14px/1.55 var(--font-display)', color:'var(--fg-2)', margin:'8px 0 0', borderLeft:'2px solid var(--paper-300)', paddingLeft:'12px' }}>
              {it.note}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
window.FolderView = FolderView;
