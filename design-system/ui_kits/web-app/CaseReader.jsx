/* ui_kits/web-app/CaseReader.jsx */
function CaseReader({ caseData, onBack }) {
  const c = caseData || {
    name: 'Brown v. Board of Education',
    cite: '347 U.S. 483',
    court: 'Supreme Court of the United States',
    year: 1954,
  };
  const citedIn = [
    { name: 'Cooper v. Aaron', cite: '358 U.S. 1 (1958)' },
    { name: 'Green v. County School Bd.', cite: '391 U.S. 430 (1968)' },
    { name: 'Swann v. Charlotte-Mecklenburg', cite: '402 U.S. 1 (1971)' },
    { name: 'Parents Involved v. Seattle', cite: '551 U.S. 701 (2007)' },
  ];
  const citing = [
    { name: 'Plessy v. Ferguson', cite: '163 U.S. 537 (1896)' },
    { name: 'Sweatt v. Painter', cite: '339 U.S. 629 (1950)' },
    { name: 'McLaurin v. Okla. State Regents', cite: '339 U.S. 637 (1950)' },
  ];
  return (
    <div className="page" style={{ maxWidth: 1180 }}>
      <button className="btn btn--ghost btn--sm" style={{ marginBottom: 16 }} onClick={onBack}>
        <IconBack size={16}/> Back to results
      </button>

      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 14 }}>
        <span className="badge badge--moss"><span className="dot" style={{ background:'#4a7c59' }}/>Good standing · 16,402 citing references</span>
        <div style={{ display:'flex', gap: 8 }}>
          <button className="btn btn--secondary"><IconStar size={16}/> Star</button>
          <button className="btn btn--secondary"><IconBookmark size={16}/> Save to folder</button>
          <button className="btn btn--primary"><IconBrief size={16}/> Add to brief</button>
        </div>
      </div>

      <div className="reader">
        <div className="reader__doc">
          <h1><em>{c.name}</em></h1>
          <div className="reader__cite">{c.cite} ({c.year}) · {c.court}</div>

          <p style={{ fontStyle:'italic', borderLeft:'2px solid var(--ink-300)', paddingLeft:'18px', color:'var(--fg-2)', font:'400 18px/1.6 var(--font-display)', margin:'0 0 24px' }}>
            "We conclude that, in the field of public education, the doctrine of 'separate but equal' has no place."
          </p>

          <p>These cases come to us from the States of Kansas, South Carolina, Virginia, and Delaware. They are premised on different facts and different local conditions, but a common legal question justifies their consideration together in this consolidated opinion. <a className="footcite">347 U.S. 483, 486</a></p>

          <p>In each of the cases, minors of the Negro race, through their legal representatives, seek the aid of the courts in obtaining admission to the public schools of their community on a nonsegregated basis. In <em>Sweatt v. Painter</em>, <a className="footcite">339 U.S. 629</a>, the Court reserved decision on the validity of <em>Plessy v. Ferguson</em>, <a className="footcite">163 U.S. 537</a>.</p>

          <p>To separate them from others of similar age and qualifications solely because of their race generates a feeling of inferiority as to their status in the community that may affect their hearts and minds in a way unlikely ever to be undone. Whatever may have been the extent of psychological knowledge at the time of <em>Plessy v. Ferguson</em>, this finding is amply supported by modern authority.</p>

          <p>We conclude that, in the field of public education, the doctrine of "separate but equal" has no place. Separate educational facilities are inherently unequal. <a className="footcite">347 U.S. 483, 495</a></p>
        </div>

        <aside className="reader__aside">
          <div className="reader__aside-panel">
            <h3>Cited by · 4 of 16,402</h3>
            {citedIn.map(x => (
              <div key={x.cite} className="reader__aside-cite">
                <div className="nm">{x.name}</div>
                <div className="c">{x.cite}</div>
              </div>
            ))}
            <button className="btn btn--ghost btn--sm" style={{ marginTop: 8, padding: 0 }}>See all citing references →</button>
          </div>

          <div className="reader__aside-panel">
            <h3>This opinion cites · 3 of 27</h3>
            {citing.map(x => (
              <div key={x.cite} className="reader__aside-cite">
                <div className="nm">{x.name}</div>
                <div className="c">{x.cite}</div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
window.CaseReader = CaseReader;
