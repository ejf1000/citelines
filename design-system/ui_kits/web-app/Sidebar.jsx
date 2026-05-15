/* ui_kits/web-app/Sidebar.jsx */
function Sidebar({ active, onNavigate }) {
  const items = [
    { id: 'home', label: 'Search', Icon: IconSearch },
    { id: 'results', label: 'Recent results', Icon: IconHistory, count: 12 },
    { id: 'reader', label: 'Currently reading', Icon: IconBook },
    { id: 'starred', label: 'Starred', Icon: IconStar, count: 4 },
  ];
  const folders = [
    { id: 'f-mtd', label: 'Q3 motion to dismiss', count: 7 },
    { id: 'f-fed', label: 'Fed. § 1983 research', count: 14 },
    { id: 'f-app', label: 'Smith appeal brief', count: 3 },
  ];
  return (
    <aside className="sb">
      <div className="sb__brand">
        <img src="../../assets/logo-wordmark.svg" alt="Citelines"/>
      </div>

      <button className="sb__new" onClick={() => onNavigate('home')}>
        <IconPlus size={16}/> New search
      </button>

      <div className="sb__section">Library</div>
      <div className="stack" style={{ gap: 2 }}>
        {items.map(({ id, label, Icon, count }) => (
          <div key={id}
               className={'sb__item' + (active === id ? ' sb__item--active' : '')}
               onClick={() => onNavigate(id)}>
            <Icon size={18}/>
            <span>{label}</span>
            {count != null && <span className="count">{count}</span>}
          </div>
        ))}
      </div>

      <div className="sb__section">Folders</div>
      <div className="stack" style={{ gap: 2 }}>
        {folders.map(f => (
          <div key={f.id}
               className={'sb__item' + (active === f.id ? ' sb__item--active' : '')}
               onClick={() => onNavigate(f.id)}>
            <IconFolder size={18}/>
            <span>{f.label}</span>
            <span className="count">{f.count}</span>
          </div>
        ))}
      </div>

      <div className="sb__section">Workspace</div>
      <div className="stack" style={{ gap: 2 }}>
        <div className="sb__item"><IconBookmark size={18}/> <span>Saved citations</span></div>
        <div className="sb__item"><IconSettings size={18}/> <span>Settings</span></div>
      </div>
    </aside>
  );
}

window.Sidebar = Sidebar;
