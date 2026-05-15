/* ui_kits/web-app/Icons.jsx — small set of inline Lucide-style icons.
   1.5px stroke. Use color={var(--fg-2)} or pass color via style/className. */
const _ico = (path) => (props) => (
  <svg width={props.size || 20} height={props.size || 20} viewBox="0 0 24 24"
       fill="none" stroke="currentColor" strokeWidth="1.5"
       strokeLinecap="round" strokeLinejoin="round" {...props}
       style={{ flexShrink: 0, ...(props.style || {}) }}>
    {path}
  </svg>
);

const IconSearch  = _ico(<><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></>);
const IconBook    = _ico(<><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></>);
const IconBrief   = _ico(<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h5"/></>);
const IconFolder  = _ico(<><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></>);
const IconClock   = _ico(<><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>);
const IconStar    = _ico(<><path d="m12 17.27 6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></>);
const IconPlus    = _ico(<><circle cx="12" cy="12" r="10"/><path d="M16 12H8M12 8v8"/></>);
const IconSlider  = _ico(<><path d="M4 6h10M18 6h2M4 12h2M10 12h10M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="8" cy="12" r="2"/><circle cx="18" cy="18" r="2"/></>);
const IconBack    = _ico(<><path d="m15 18-6-6 6-6"/></>);
const IconCheck   = _ico(<><path d="m5 12 5 5L20 7"/></>);
const IconScales  = _ico(<><path d="M12 3v18M5 9l7-6 7 6"/><circle cx="6" cy="14" r="3"/><circle cx="18" cy="14" r="3"/><path d="M3 21h18"/></>);
const IconBookmark= _ico(<><path d="M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18l-6-4-6 4z"/></>);
const IconHistory = _ico(<><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l3 2"/></>);
const IconSettings= _ico(<><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></>);

Object.assign(window, {
  IconSearch, IconBook, IconBrief, IconFolder, IconClock, IconStar, IconPlus,
  IconSlider, IconBack, IconCheck, IconScales, IconBookmark, IconHistory, IconSettings
});
