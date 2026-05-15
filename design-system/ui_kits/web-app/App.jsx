/* ui_kits/web-app/App.jsx — the click-thru shell */
function App() {
  const [view, setView] = React.useState('home');
  const [query, setQuery] = React.useState('');
  const [openCase, setOpenCase] = React.useState(null);
  const [folder, setFolder] = React.useState(null);

  const go = (id) => {
    if (id === 'home') { setView('home'); return; }
    if (id === 'results') { setView('results'); setQuery(query || 'Brown v. Board of Education'); return; }
    if (id === 'reader') { setView('reader'); return; }
    if (id === 'starred') { setView('home'); return; }
    if (id.startsWith('f-')) {
      const map = { 'f-mtd': 'Q3 motion to dismiss', 'f-fed': 'Fed. § 1983 research', 'f-app': 'Smith appeal brief' };
      setFolder(map[id]); setView('folder'); return;
    }
  };

  const onSearch = (q) => { setQuery(q); setView('results'); };
  const onOpen = (c) => { setOpenCase(c); setView('reader'); };

  let activeId = view;
  if (view === 'folder') activeId = Object.keys({ 'f-mtd':'Q3 motion to dismiss','f-fed':'Fed. § 1983 research','f-app':'Smith appeal brief' }).find(k => ({ 'f-mtd':'Q3 motion to dismiss','f-fed':'Fed. § 1983 research','f-app':'Smith appeal brief' })[k] === folder) || 'home';

  return (
    <div className="app">
      <div className="app__sidebar"><Sidebar active={activeId} onNavigate={go}/></div>
      <div className="app__topbar"><Topbar query={query} onSearch={onSearch}/></div>
      <div className="app__main">
        {view === 'home'    && <SearchDashboard onSearch={onSearch} onOpen={onOpen}/>}
        {view === 'results' && <ResultsList query={query} onOpen={onOpen} onBack={() => setView('home')}/>}
        {view === 'reader'  && <CaseReader caseData={openCase} onBack={() => setView('results')}/>}
        {view === 'folder'  && <FolderView folder={folder} onOpen={onOpen}/>}
      </div>
    </div>
  );
}
window.App = App;
