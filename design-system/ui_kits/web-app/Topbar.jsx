/* ui_kits/web-app/Topbar.jsx */
function Topbar({ query, onSearch }) {
  const [val, setVal] = React.useState(query || '');
  React.useEffect(() => setVal(query || ''), [query]);
  const submit = (e) => { e.preventDefault(); onSearch(val); };
  return (
    <div className="topbar">
      <form className="topbar__search" onSubmit={submit}>
        <IconSearch size={18}/>
        <input value={val} onChange={(e) => setVal(e.target.value)}
               placeholder="Search a citation, case name, or phrase — e.g. 347 U.S. 483"/>
      </form>
      <button className="btn btn--ghost btn--sm"><IconHistory size={16}/> History</button>
      <div className="topbar__avatar" title="Amelia Chen">AC</div>
    </div>
  );
}
window.Topbar = Topbar;
