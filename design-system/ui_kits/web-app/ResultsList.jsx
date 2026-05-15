/* ui_kits/web-app/ResultsList.jsx */
function ResultsList({ query, onOpen, onBack }) {
  const results = [
    {
      name: 'Brown v. Board of Education',
      cite: '347 U.S. 483',
      court: 'SCOTUS',
      year: 1954,
      treat: 'moss', treatLabel: 'Good standing',
      excerpt: 'Racial segregation of children in public schools held unconstitutional under the Equal Protection Clause of the Fourteenth Amendment.',
      cited: 16402
    },
    {
      name: 'Plessy v. Ferguson',
      cite: '163 U.S. 537',
      court: 'SCOTUS',
      year: 1896,
      treat: 'coral', treatLabel: 'Overruled',
      excerpt: 'Held that "separate but equal" facilities did not violate the Equal Protection Clause — overruled in pertinent part by Brown.',
      cited: 1843
    },
    {
      name: 'Cooper v. Aaron',
      cite: '358 U.S. 1',
      court: 'SCOTUS',
      year: 1958,
      treat: 'moss', treatLabel: 'Good standing',
      excerpt: 'Reaffirmed Brown and held that state officials are bound by federal court orders interpreting the Constitution.',
      cited: 3210
    },
    {
      name: 'Parents Involved in Cmty. Schs. v. Seattle School Dist. No. 1',
      cite: '551 U.S. 701',
      court: 'SCOTUS',
      year: 2007,
      treat: 'amber', treatLabel: 'Distinguished',
      excerpt: 'Struck down voluntary student-assignment plans relying on race; Brown discussed and distinguished.',
      cited: 412
    },
  ];
  return (
    <div className="page">
      <button className="btn btn--ghost btn--sm" style={{ marginBottom: 12 }} onClick={onBack}>
        <IconBack size={16}/> Back to search
      </button>
      <div className="page__eyebrow">Results · {results.length} cases</div>
      <h1 className="page__title">{query}</h1>
      <div className="toolbar">
        <span className="chip chip--active">All jurisdictions</span>
        <span className="chip">SCOTUS</span>
        <span className="chip">Circuit</span>
        <span className="chip">State</span>
        <span className="chip">1950 – present</span>
        <div className="toolbar__spacer"/>
        <span className="chip"><IconSlider size={14}/> Sort: Most cited</span>
      </div>

      <div className="stack">
        {results.map(r => (
          <div key={r.cite} className="card case-card" onClick={() => onOpen(r)}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <span className={'badge badge--' + r.treat}>
                <span className="dot" style={{ background: r.treat === 'moss' ? '#4a7c59' : r.treat === 'amber' ? '#c98b3c' : r.treat === 'coral' ? '#c8553d' : '#2f5e93' }}/>
                {r.treatLabel}
              </span>
              <span style={{ font: '500 12px/1 var(--font-body)', color: 'var(--fg-3)' }}>{r.court} · {r.year}</span>
            </div>
            <div className="case-card__name"><em>{r.name}</em></div>
            <div className="case-card__cite">{r.cite}</div>
            <p className="case-card__excerpt">{r.excerpt}</p>
            <div className="case-card__meta">
              <span>Cited <strong style={{ color:'var(--ink-700)', fontWeight: 600 }}>{r.cited.toLocaleString()}×</strong></span>
              <span style={{ color: 'var(--ink-600)' }}>Open →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
window.ResultsList = ResultsList;
