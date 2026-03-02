const chapterDiagrams = {

// ─── Chapter 1: Reliance Industries Overview ─────────────────────────────────
1: `<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <!-- Title -->
  <text x="250" y="20" text-anchor="middle" font-size="11" font-weight="600" fill="var(--accent)">Reliance Industries — Business Segments</text>
  <!-- O2C (largest block) -->
  <rect x="20" y="38" width="220" height="100" rx="6" fill="var(--accent)" opacity="0.15" stroke="var(--accent)" stroke-width="1.5"/>
  <text x="130" y="70" text-anchor="middle" font-size="12" font-weight="700" fill="var(--accent)">O2C</text>
  <text x="130" y="86" text-anchor="middle" font-size="9" fill="var(--dim)">Oil-to-Chemicals</text>
  <text x="130" y="102" text-anchor="middle" font-size="10" font-weight="600" fill="var(--gold)">₹5,22,000 Cr</text>
  <text x="130" y="118" text-anchor="middle" font-size="9" fill="var(--dim)">~54% of Revenue</text>
  <!-- Digital Services -->
  <rect x="250" y="38" width="110" height="100" rx="6" fill="var(--cyan)" opacity="0.12" stroke="var(--cyan)" stroke-width="1.2"/>
  <text x="305" y="68" text-anchor="middle" font-size="11" font-weight="600" fill="var(--cyan)">Digital</text>
  <text x="305" y="82" text-anchor="middle" font-size="9" fill="var(--dim)">Services (Jio)</text>
  <text x="305" y="100" text-anchor="middle" font-size="10" font-weight="600" fill="var(--gold)">₹1,32,000 Cr</text>
  <text x="305" y="114" text-anchor="middle" font-size="9" fill="var(--dim)">~14%</text>
  <!-- Retail -->
  <rect x="370" y="38" width="110" height="100" rx="6" fill="var(--green)" opacity="0.12" stroke="var(--green)" stroke-width="1.2"/>
  <text x="425" y="68" text-anchor="middle" font-size="11" font-weight="600" fill="var(--green)">Retail</text>
  <text x="425" y="82" text-anchor="middle" font-size="9" fill="var(--dim)">Reliance Retail</text>
  <text x="425" y="100" text-anchor="middle" font-size="10" font-weight="600" fill="var(--gold)">₹2,60,000 Cr</text>
  <text x="425" y="114" text-anchor="middle" font-size="9" fill="var(--dim)">~27%</text>
  <!-- Oil & Gas -->
  <rect x="20" y="148" width="150" height="52" rx="6" fill="var(--pink)" opacity="0.10" stroke="var(--pink)" stroke-width="1.2"/>
  <text x="95" y="170" text-anchor="middle" font-size="10" font-weight="600" fill="var(--pink)">Oil & Gas (E&P)</text>
  <text x="95" y="186" text-anchor="middle" font-size="9" fill="var(--dim)">₹16,500 Cr · ~2%</text>
  <!-- Financial Services -->
  <rect x="180" y="148" width="150" height="52" rx="6" fill="var(--gold)" opacity="0.10" stroke="var(--gold)" stroke-width="1.2"/>
  <text x="255" y="170" text-anchor="middle" font-size="10" font-weight="600" fill="var(--gold)">Financial Services</text>
  <text x="255" y="186" text-anchor="middle" font-size="9" fill="var(--dim)">₹28,000 Cr · ~3%</text>
  <!-- Total -->
  <rect x="340" y="148" width="140" height="52" rx="6" fill="var(--code-bg)" stroke="var(--border)" stroke-width="1"/>
  <text x="410" y="168" text-anchor="middle" font-size="9" fill="var(--dim)">Total Revenue (FY24)</text>
  <text x="410" y="186" text-anchor="middle" font-size="12" font-weight="700" fill="var(--text)">₹9,57,000 Cr</text>
  <!-- Footnote -->
  <text x="250" y="225" text-anchor="middle" font-size="8" fill="var(--dim)">Reliance is India's largest private-sector company by revenue and market cap</text>
  <!-- Decorative line -->
  <line x1="20" y1="236" x2="480" y2="236" stroke="var(--border)" stroke-width="0.5" stroke-dasharray="4,3"/>
  <text x="250" y="250" text-anchor="middle" font-size="8" fill="var(--dim)">O2C segment is the backbone — contributing the majority of operating profit</text>
</svg>`,

// ─── Chapter 2: Jamnagar Refinery Complex ────────────────────────────────────
2: `<svg viewBox="0 0 500 270" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <!-- Title -->
  <text x="250" y="20" text-anchor="middle" font-size="11" font-weight="600" fill="var(--accent)">Jamnagar Refinery Complex — World's Largest</text>
  <!-- DTA Refinery -->
  <rect x="20" y="40" width="220" height="110" rx="8" fill="var(--cyan)" opacity="0.10" stroke="var(--cyan)" stroke-width="1.5"/>
  <rect x="30" y="50" width="200" height="20" rx="3" fill="var(--cyan)" opacity="0.2"/>
  <text x="130" y="64" text-anchor="middle" font-size="10" font-weight="700" fill="var(--cyan)">DTA Refinery</text>
  <text x="130" y="84" text-anchor="middle" font-size="9" fill="var(--dim)">Domestic Tariff Area</text>
  <text x="130" y="102" text-anchor="middle" font-size="14" font-weight="700" fill="var(--text)">33 MMTPA</text>
  <text x="130" y="118" text-anchor="middle" font-size="9" fill="var(--dim)">~660,000 bbl/day</text>
  <text x="130" y="134" text-anchor="middle" font-size="8" fill="var(--dim)">Commissioned: 1999</text>
  <!-- SEZ Refinery -->
  <rect x="260" y="40" width="220" height="110" rx="8" fill="var(--accent)" opacity="0.10" stroke="var(--accent)" stroke-width="1.5"/>
  <rect x="270" y="50" width="200" height="20" rx="3" fill="var(--accent)" opacity="0.2"/>
  <text x="370" y="64" text-anchor="middle" font-size="10" font-weight="700" fill="var(--accent)">SEZ Refinery</text>
  <text x="370" y="84" text-anchor="middle" font-size="9" fill="var(--dim)">Special Economic Zone</text>
  <text x="370" y="102" text-anchor="middle" font-size="14" font-weight="700" fill="var(--text)">35.2 MMTPA</text>
  <text x="370" y="118" text-anchor="middle" font-size="9" fill="var(--dim)">~704,000 bbl/day</text>
  <text x="370" y="134" text-anchor="middle" font-size="8" fill="var(--dim)">Commissioned: 2008</text>
  <!-- Connecting line -->
  <line x1="240" y1="95" x2="260" y2="95" stroke="var(--border)" stroke-width="1.5" stroke-dasharray="4,3"/>
  <!-- Sikka Port below -->
  <rect x="120" y="175" width="260" height="44" rx="6" fill="var(--green)" opacity="0.10" stroke="var(--green)" stroke-width="1.2"/>
  <text x="250" y="193" text-anchor="middle" font-size="10" font-weight="600" fill="var(--green)">Sikka Port & Marine Terminal</text>
  <text x="250" y="208" text-anchor="middle" font-size="9" fill="var(--dim)">Crude import & product export — SPM, jetties, tank farms</text>
  <!-- Arrows from refineries to port -->
  <line x1="130" y1="150" x2="200" y2="175" stroke="var(--cyan)" stroke-width="1" opacity="0.5"/>
  <line x1="370" y1="150" x2="300" y2="175" stroke="var(--accent)" stroke-width="1" opacity="0.5"/>
  <!-- Total capacity label -->
  <rect x="140" y="230" width="220" height="30" rx="6" fill="var(--gold)" opacity="0.12" stroke="var(--gold)" stroke-width="1.2"/>
  <text x="250" y="250" text-anchor="middle" font-size="12" font-weight="700" fill="var(--gold)">Total: 68.2 MMTPA (~1.36M bbl/day)</text>
</svg>`,

// ─── Chapter 3: Crude Procurement ────────────────────────────────────────────
3: `<svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <!-- Title -->
  <text x="250" y="18" text-anchor="middle" font-size="11" font-weight="600" fill="var(--accent)">Crude Procurement — Global Sourcing Network</text>
  <!-- Jamnagar Center -->
  <rect x="195" y="110" width="110" height="50" rx="8" fill="var(--accent)" opacity="0.18" stroke="var(--accent)" stroke-width="2"/>
  <text x="250" y="132" text-anchor="middle" font-size="10" font-weight="700" fill="var(--accent)">JAMNAGAR</text>
  <text x="250" y="148" text-anchor="middle" font-size="8" fill="var(--dim)">68.2 MMTPA intake</text>
  <!-- Middle East (top-left) -->
  <rect x="20" y="30" width="120" height="50" rx="6" fill="var(--gold)" opacity="0.12" stroke="var(--gold)" stroke-width="1.2"/>
  <text x="80" y="50" text-anchor="middle" font-size="10" font-weight="600" fill="var(--gold)">Middle East</text>
  <text x="80" y="64" text-anchor="middle" font-size="8" fill="var(--dim)">Saudi, Iraq, UAE, Kuwait</text>
  <text x="80" y="76" text-anchor="middle" font-size="9" font-weight="600" fill="var(--text)">~60% volume</text>
  <line x1="140" y1="68" x2="195" y2="125" stroke="var(--gold)" stroke-width="1.5" marker-end="url(#arrowGold)"/>
  <!-- Africa (bottom-left) -->
  <rect x="20" y="190" width="120" height="50" rx="6" fill="var(--green)" opacity="0.12" stroke="var(--green)" stroke-width="1.2"/>
  <text x="80" y="210" text-anchor="middle" font-size="10" font-weight="600" fill="var(--green)">Africa</text>
  <text x="80" y="224" text-anchor="middle" font-size="8" fill="var(--dim)">Nigeria, Angola, Libya</text>
  <text x="80" y="236" text-anchor="middle" font-size="9" font-weight="600" fill="var(--text)">~15% volume</text>
  <line x1="140" y1="210" x2="195" y2="148" stroke="var(--green)" stroke-width="1.5" marker-end="url(#arrowGreen)"/>
  <!-- Americas (top-right) -->
  <rect x="360" y="30" width="120" height="50" rx="6" fill="var(--cyan)" opacity="0.12" stroke="var(--cyan)" stroke-width="1.2"/>
  <text x="420" y="50" text-anchor="middle" font-size="10" font-weight="600" fill="var(--cyan)">Americas</text>
  <text x="420" y="64" text-anchor="middle" font-size="8" fill="var(--dim)">US, Venezuela, Brazil</text>
  <text x="420" y="76" text-anchor="middle" font-size="9" font-weight="600" fill="var(--text)">~15% volume</text>
  <line x1="360" y1="68" x2="305" y2="125" stroke="var(--cyan)" stroke-width="1.5" marker-end="url(#arrowCyan)"/>
  <!-- Russia (bottom-right) -->
  <rect x="360" y="190" width="120" height="50" rx="6" fill="var(--pink)" opacity="0.12" stroke="var(--pink)" stroke-width="1.2"/>
  <text x="420" y="210" text-anchor="middle" font-size="10" font-weight="600" fill="var(--pink)">Russia</text>
  <text x="420" y="224" text-anchor="middle" font-size="8" fill="var(--dim)">Urals, ESPO blend</text>
  <text x="420" y="236" text-anchor="middle" font-size="9" font-weight="600" fill="var(--text)">~10% volume</text>
  <line x1="360" y1="210" x2="305" y2="148" stroke="var(--pink)" stroke-width="1.5" marker-end="url(#arrowPink)"/>
  <!-- Arrow markers -->
  <defs>
    <marker id="arrowGold" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6Z" fill="var(--gold)"/></marker>
    <marker id="arrowGreen" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6Z" fill="var(--green)"/></marker>
    <marker id="arrowCyan" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6Z" fill="var(--cyan)"/></marker>
    <marker id="arrowPink" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6Z" fill="var(--pink)"/></marker>
  </defs>
  <!-- Footnote -->
  <text x="250" y="268" text-anchor="middle" font-size="8" fill="var(--dim)">Diversified sourcing optimizes for grade quality, price, and logistics</text>
</svg>`,

// ─── Chapter 4: Refining Operations ──────────────────────────────────────────
4: `<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <defs>
    <marker id="arrowFlow" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto"><path d="M0,0 L7,2.5 L0,5Z" fill="var(--accent)"/></marker>
  </defs>
  <!-- Title -->
  <text x="250" y="18" text-anchor="middle" font-size="11" font-weight="600" fill="var(--accent)">Refining Operations — Simplified Process Flow</text>
  <!-- Crude Input -->
  <rect x="10" y="65" width="60" height="44" rx="6" fill="var(--gold)" opacity="0.15" stroke="var(--gold)" stroke-width="1.2"/>
  <text x="40" y="84" text-anchor="middle" font-size="9" font-weight="600" fill="var(--gold)">Crude</text>
  <text x="40" y="96" text-anchor="middle" font-size="7" fill="var(--dim)">Oil Feed</text>
  <!-- Arrow -->
  <line x1="70" y1="87" x2="90" y2="87" stroke="var(--accent)" stroke-width="1.5" marker-end="url(#arrowFlow)"/>
  <!-- CDU -->
  <rect x="92" y="55" width="62" height="64" rx="6" fill="var(--accent)" opacity="0.12" stroke="var(--accent)" stroke-width="1.5"/>
  <text x="123" y="80" text-anchor="middle" font-size="10" font-weight="700" fill="var(--accent)">CDU</text>
  <text x="123" y="93" text-anchor="middle" font-size="7" fill="var(--dim)">Atmospheric</text>
  <text x="123" y="103" text-anchor="middle" font-size="7" fill="var(--dim)">Distillation</text>
  <!-- Arrow -->
  <line x1="154" y1="87" x2="174" y2="87" stroke="var(--accent)" stroke-width="1.5" marker-end="url(#arrowFlow)"/>
  <!-- VDU -->
  <rect x="176" y="55" width="62" height="64" rx="6" fill="var(--accent)" opacity="0.12" stroke="var(--accent)" stroke-width="1.5"/>
  <text x="207" y="80" text-anchor="middle" font-size="10" font-weight="700" fill="var(--accent)">VDU</text>
  <text x="207" y="93" text-anchor="middle" font-size="7" fill="var(--dim)">Vacuum</text>
  <text x="207" y="103" text-anchor="middle" font-size="7" fill="var(--dim)">Distillation</text>
  <!-- Branching arrows from VDU -->
  <!-- To FCC (top) -->
  <line x1="238" y1="72" x2="282" y2="42" stroke="var(--cyan)" stroke-width="1.2" marker-end="url(#arrowFlow)"/>
  <!-- To Hydrocracker (middle) -->
  <line x1="238" y1="87" x2="282" y2="87" stroke="var(--green)" stroke-width="1.2" marker-end="url(#arrowFlow)"/>
  <!-- To Coker (bottom) -->
  <line x1="238" y1="102" x2="282" y2="132" stroke="var(--pink)" stroke-width="1.2" marker-end="url(#arrowFlow)"/>
  <!-- FCC -->
  <rect x="284" y="26" width="78" height="36" rx="5" fill="var(--cyan)" opacity="0.12" stroke="var(--cyan)" stroke-width="1.2"/>
  <text x="323" y="42" text-anchor="middle" font-size="9" font-weight="600" fill="var(--cyan)">FCC</text>
  <text x="323" y="54" text-anchor="middle" font-size="7" fill="var(--dim)">Fluid Cat Crack</text>
  <!-- Hydrocracker -->
  <rect x="284" y="70" width="78" height="36" rx="5" fill="var(--green)" opacity="0.12" stroke="var(--green)" stroke-width="1.2"/>
  <text x="323" y="86" text-anchor="middle" font-size="9" font-weight="600" fill="var(--green)">Hydrocracker</text>
  <text x="323" y="98" text-anchor="middle" font-size="7" fill="var(--dim)">High Conversion</text>
  <!-- Coker -->
  <rect x="284" y="114" width="78" height="36" rx="5" fill="var(--pink)" opacity="0.12" stroke="var(--pink)" stroke-width="1.2"/>
  <text x="323" y="130" text-anchor="middle" font-size="9" font-weight="600" fill="var(--pink)">Coker</text>
  <text x="323" y="142" text-anchor="middle" font-size="7" fill="var(--dim)">Residue Upgrade</text>
  <!-- Arrows to Products -->
  <line x1="362" y1="44" x2="400" y2="72" stroke="var(--cyan)" stroke-width="1" marker-end="url(#arrowFlow)"/>
  <line x1="362" y1="88" x2="400" y2="88" stroke="var(--green)" stroke-width="1" marker-end="url(#arrowFlow)"/>
  <line x1="362" y1="132" x2="400" y2="104" stroke="var(--pink)" stroke-width="1" marker-end="url(#arrowFlow)"/>
  <!-- Products box -->
  <rect x="402" y="56" width="85" height="66" rx="6" fill="var(--gold)" opacity="0.12" stroke="var(--gold)" stroke-width="1.5"/>
  <text x="444" y="74" text-anchor="middle" font-size="9" font-weight="700" fill="var(--gold)">Products</text>
  <text x="444" y="87" text-anchor="middle" font-size="7" fill="var(--dim)">Petrol, Diesel</text>
  <text x="444" y="98" text-anchor="middle" font-size="7" fill="var(--dim)">ATF, Naphtha</text>
  <text x="444" y="109" text-anchor="middle" font-size="7" fill="var(--dim)">LPG, Pet Coke</text>
  <!-- Bottom legend -->
  <rect x="20" y="170" width="460" height="78" rx="6" fill="var(--code-bg)" stroke="var(--border)" stroke-width="0.8"/>
  <text x="250" y="188" text-anchor="middle" font-size="9" font-weight="600" fill="var(--text)">Key Complexity Advantages</text>
  <text x="40" y="206" font-size="8" fill="var(--cyan)">FCC</text>
  <text x="64" y="206" font-size="8" fill="var(--dim)">— Converts heavy gas oil to gasoline & LPG</text>
  <text x="40" y="220" font-size="8" fill="var(--green)">Hydrocracker</text>
  <text x="110" y="220" font-size="8" fill="var(--dim)">— Produces premium diesel & jet fuel from heavy feeds</text>
  <text x="40" y="234" font-size="8" fill="var(--pink)">Coker</text>
  <text x="70" y="234" font-size="8" fill="var(--dim)">— Converts vacuum residue to lighter products + pet coke</text>
  <text x="375" y="206" font-size="8" fill="var(--dim)">Nelson Complexity:</text>
  <text x="375" y="220" font-size="10" font-weight="700" fill="var(--accent)">14+ (among world's highest)</text>
</svg>`,

// ─── Chapter 5: Petrochemical Integration ────────────────────────────────────
5: `<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <defs>
    <marker id="arrowPC" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto"><path d="M0,0 L7,2.5 L0,5Z" fill="var(--accent)"/></marker>
  </defs>
  <!-- Title -->
  <text x="250" y="18" text-anchor="middle" font-size="11" font-weight="600" fill="var(--accent)">Petrochemical Integration — O2C Value Chain</text>
  <!-- Step 1: Refinery -->
  <rect x="10" y="50" width="80" height="60" rx="6" fill="var(--gold)" opacity="0.14" stroke="var(--gold)" stroke-width="1.5"/>
  <text x="50" y="72" text-anchor="middle" font-size="10" font-weight="700" fill="var(--gold)">Refinery</text>
  <text x="50" y="86" text-anchor="middle" font-size="7" fill="var(--dim)">68.2 MMTPA</text>
  <text x="50" y="97" text-anchor="middle" font-size="7" fill="var(--dim)">crude input</text>
  <!-- Arrow -->
  <line x1="90" y1="80" x2="112" y2="80" stroke="var(--accent)" stroke-width="1.5" marker-end="url(#arrowPC)"/>
  <!-- Step 2: Feedstock -->
  <rect x="114" y="44" width="76" height="72" rx="6" fill="var(--cyan)" opacity="0.12" stroke="var(--cyan)" stroke-width="1.2"/>
  <text x="152" y="64" text-anchor="middle" font-size="9" font-weight="600" fill="var(--cyan)">Feedstock</text>
  <text x="152" y="78" text-anchor="middle" font-size="8" fill="var(--dim)">Naphtha</text>
  <text x="152" y="90" text-anchor="middle" font-size="8" fill="var(--dim)">Off-gases</text>
  <text x="152" y="102" text-anchor="middle" font-size="8" fill="var(--dim)">Propylene</text>
  <!-- Arrow -->
  <line x1="190" y1="80" x2="212" y2="80" stroke="var(--accent)" stroke-width="1.5" marker-end="url(#arrowPC)"/>
  <!-- Step 3: Cracker -->
  <rect x="214" y="50" width="76" height="60" rx="6" fill="var(--accent)" opacity="0.14" stroke="var(--accent)" stroke-width="1.5"/>
  <text x="252" y="72" text-anchor="middle" font-size="10" font-weight="700" fill="var(--accent)">Cracker</text>
  <text x="252" y="86" text-anchor="middle" font-size="7" fill="var(--dim)">Steam / Ethane</text>
  <text x="252" y="97" text-anchor="middle" font-size="7" fill="var(--dim)">cracker units</text>
  <!-- Arrow -->
  <line x1="290" y1="80" x2="312" y2="80" stroke="var(--accent)" stroke-width="1.5" marker-end="url(#arrowPC)"/>
  <!-- Step 4: Polymers -->
  <rect x="314" y="44" width="76" height="72" rx="6" fill="var(--green)" opacity="0.12" stroke="var(--green)" stroke-width="1.2"/>
  <text x="352" y="64" text-anchor="middle" font-size="9" font-weight="600" fill="var(--green)">Polymers</text>
  <text x="352" y="78" text-anchor="middle" font-size="8" fill="var(--dim)">PP</text>
  <text x="352" y="90" text-anchor="middle" font-size="8" fill="var(--dim)">PE (HDPE/LLDPE)</text>
  <text x="352" y="102" text-anchor="middle" font-size="8" fill="var(--dim)">PVC</text>
  <!-- Arrow -->
  <line x1="390" y1="80" x2="412" y2="80" stroke="var(--accent)" stroke-width="1.5" marker-end="url(#arrowPC)"/>
  <!-- Step 5: End Products -->
  <rect x="414" y="40" width="76" height="80" rx="6" fill="var(--pink)" opacity="0.10" stroke="var(--pink)" stroke-width="1.2"/>
  <text x="452" y="58" text-anchor="middle" font-size="9" font-weight="600" fill="var(--pink)">End Use</text>
  <text x="452" y="72" text-anchor="middle" font-size="7" fill="var(--dim)">Packaging</text>
  <text x="452" y="83" text-anchor="middle" font-size="7" fill="var(--dim)">Automotive</text>
  <text x="452" y="94" text-anchor="middle" font-size="7" fill="var(--dim)">Textiles</text>
  <text x="452" y="105" text-anchor="middle" font-size="7" fill="var(--dim)">Construction</text>
  <!-- Integration advantage box -->
  <rect x="30" y="140" width="440" height="106" rx="6" fill="var(--code-bg)" stroke="var(--border)" stroke-width="0.8"/>
  <text x="250" y="158" text-anchor="middle" font-size="10" font-weight="600" fill="var(--accent)">Integration Advantage</text>
  <!-- Left column -->
  <circle cx="60" cy="178" r="4" fill="var(--green)"/>
  <text x="72" y="182" font-size="8" fill="var(--text)">Feed flexibility — switch between naphtha, ethane, propane</text>
  <circle cx="60" cy="198" r="4" fill="var(--green)"/>
  <text x="72" y="202" font-size="8" fill="var(--text)">Zero waste — refinery off-gases feed petchem crackers</text>
  <circle cx="60" cy="218" r="4" fill="var(--green)"/>
  <text x="72" y="222" font-size="8" fill="var(--text)">Margin capture — $200-400/MT higher vs standalone refiner</text>
  <circle cx="60" cy="238" r="4" fill="var(--green)"/>
  <text x="72" y="242" font-size="8" fill="var(--text)">Scale — largest integrated O2C complex globally</text>
</svg>`,

// ─── Chapter 6: Product Portfolio ────────────────────────────────────────────
6: `<svg viewBox="0 0 500 270" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <!-- Title -->
  <text x="250" y="18" text-anchor="middle" font-size="11" font-weight="600" fill="var(--accent)">Product Portfolio — Revenue Breakdown by Category</text>
  <!-- Fuels (largest block) -->
  <rect x="20" y="34" width="240" height="100" rx="7" fill="var(--gold)" opacity="0.14" stroke="var(--gold)" stroke-width="1.5"/>
  <text x="140" y="58" text-anchor="middle" font-size="13" font-weight="700" fill="var(--gold)">Fuels</text>
  <text x="140" y="76" text-anchor="middle" font-size="9" fill="var(--dim)">Diesel · Petrol · ATF · LPG · Naphtha</text>
  <text x="140" y="94" text-anchor="middle" font-size="11" font-weight="600" fill="var(--text)">~55% of O2C Revenue</text>
  <text x="140" y="112" text-anchor="middle" font-size="8" fill="var(--dim)">Export share: ~35% of production</text>
  <!-- Polymers -->
  <rect x="270" y="34" width="210" height="55" rx="6" fill="var(--cyan)" opacity="0.12" stroke="var(--cyan)" stroke-width="1.2"/>
  <text x="375" y="54" text-anchor="middle" font-size="11" font-weight="700" fill="var(--cyan)">Polymers</text>
  <text x="375" y="68" text-anchor="middle" font-size="9" fill="var(--dim)">PP · PE · PVC — ~22% of O2C Rev</text>
  <text x="375" y="82" text-anchor="middle" font-size="8" fill="var(--dim)">Export: ~25%</text>
  <!-- Polyester -->
  <rect x="270" y="96" width="105" height="38" rx="6" fill="var(--green)" opacity="0.12" stroke="var(--green)" stroke-width="1.2"/>
  <text x="322" y="113" text-anchor="middle" font-size="10" font-weight="600" fill="var(--green)">Polyester</text>
  <text x="322" y="127" text-anchor="middle" font-size="8" fill="var(--dim)">PET, PTA — ~12%</text>
  <!-- Specialty Chemicals -->
  <rect x="382" y="96" width="98" height="38" rx="6" fill="var(--pink)" opacity="0.10" stroke="var(--pink)" stroke-width="1.2"/>
  <text x="431" y="113" text-anchor="middle" font-size="10" font-weight="600" fill="var(--pink)">Specialty</text>
  <text x="431" y="127" text-anchor="middle" font-size="8" fill="var(--dim)">LAB, Butadiene ~6%</text>
  <!-- Elastomers & Others -->
  <rect x="20" y="140" width="100" height="32" rx="5" fill="var(--border)" opacity="0.3" stroke="var(--border)" stroke-width="1"/>
  <text x="70" y="160" text-anchor="middle" font-size="9" fill="var(--dim)">Elastomers ~3%</text>
  <rect x="128" y="140" width="100" height="32" rx="5" fill="var(--border)" opacity="0.3" stroke="var(--border)" stroke-width="1"/>
  <text x="178" y="160" text-anchor="middle" font-size="9" fill="var(--dim)">Others ~2%</text>
  <!-- Export summary -->
  <rect x="30" y="190" width="440" height="68" rx="6" fill="var(--code-bg)" stroke="var(--border)" stroke-width="0.8"/>
  <text x="250" y="208" text-anchor="middle" font-size="9" font-weight="600" fill="var(--accent)">Global Reach</text>
  <!-- Export bars -->
  <text x="50" y="226" font-size="8" fill="var(--dim)">Fuels Export</text>
  <rect x="130" y="218" width="126" height="12" rx="3" fill="var(--gold)" opacity="0.3"/>
  <rect x="130" y="218" width="44" height="12" rx="3" fill="var(--gold)" opacity="0.7"/>
  <text x="182" y="228" font-size="8" fill="var(--text)">35%</text>
  <text x="50" y="244" font-size="8" fill="var(--dim)">Petchem Export</text>
  <rect x="130" y="236" width="126" height="12" rx="3" fill="var(--cyan)" opacity="0.3"/>
  <rect x="130" y="236" width="32" height="12" rx="3" fill="var(--cyan)" opacity="0.7"/>
  <text x="168" y="246" font-size="8" fill="var(--text)">25%</text>
  <text x="310" y="230" font-size="9" fill="var(--dim)">Exports to 100+ countries across</text>
  <text x="310" y="244" font-size="9" fill="var(--dim)">Asia, Europe, Africa, Americas</text>
</svg>`,

// ─── Chapter 7: Financial Performance ────────────────────────────────────────
7: `<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <!-- Title -->
  <text x="250" y="18" text-anchor="middle" font-size="11" font-weight="600" fill="var(--accent)">GRM Comparison — $/bbl (FY24 Estimates)</text>
  <!-- Y-axis -->
  <line x1="80" y1="40" x2="80" y2="180" stroke="var(--border)" stroke-width="1"/>
  <!-- Y-axis labels -->
  <text x="72" y="52" text-anchor="end" font-size="8" fill="var(--dim)">$14</text>
  <line x1="78" y1="48" x2="460" y2="48" stroke="var(--border)" stroke-width="0.3" stroke-dasharray="3,3"/>
  <text x="72" y="80" text-anchor="end" font-size="8" fill="var(--dim)">$10</text>
  <line x1="78" y1="76" x2="460" y2="76" stroke="var(--border)" stroke-width="0.3" stroke-dasharray="3,3"/>
  <text x="72" y="108" text-anchor="end" font-size="8" fill="var(--dim)">$7</text>
  <line x1="78" y1="104" x2="460" y2="104" stroke="var(--border)" stroke-width="0.3" stroke-dasharray="3,3"/>
  <text x="72" y="136" text-anchor="end" font-size="8" fill="var(--dim)">$4</text>
  <line x1="78" y1="132" x2="460" y2="132" stroke="var(--border)" stroke-width="0.3" stroke-dasharray="3,3"/>
  <text x="72" y="165" text-anchor="end" font-size="8" fill="var(--dim)">$1</text>
  <line x1="78" y1="161" x2="460" y2="161" stroke="var(--border)" stroke-width="0.3" stroke-dasharray="3,3"/>
  <!-- X-axis -->
  <line x1="80" y1="180" x2="460" y2="180" stroke="var(--border)" stroke-width="1"/>
  <!-- Reliance Bar (GRM ~$10-12 → use $11) -->
  <rect x="110" y="55" width="60" height="125" rx="4" fill="var(--accent)" opacity="0.25"/>
  <rect x="110" y="55" width="60" height="125" rx="4" fill="var(--accent)" opacity="0.5" stroke="var(--accent)" stroke-width="1.5"/>
  <text x="140" y="48" text-anchor="middle" font-size="10" font-weight="700" fill="var(--accent)">$11.5</text>
  <text x="140" y="195" text-anchor="middle" font-size="9" font-weight="600" fill="var(--text)">Reliance</text>
  <!-- Singapore Benchmark (GRM ~$5-7 → use $6) -->
  <rect x="210" y="116" width="60" height="64" rx="4" fill="var(--cyan)" opacity="0.25"/>
  <rect x="210" y="116" width="60" height="64" rx="4" fill="var(--cyan)" opacity="0.5" stroke="var(--cyan)" stroke-width="1.5"/>
  <text x="240" y="110" text-anchor="middle" font-size="10" font-weight="700" fill="var(--cyan)">$6.0</text>
  <text x="240" y="195" text-anchor="middle" font-size="9" font-weight="600" fill="var(--text)">Singapore</text>
  <text x="240" y="207" text-anchor="middle" font-size="8" fill="var(--dim)">Benchmark</text>
  <!-- IOCL (GRM ~$5-8 → use $7) -->
  <rect x="310" y="104" width="60" height="76" rx="4" fill="var(--green)" opacity="0.25"/>
  <rect x="310" y="104" width="60" height="76" rx="4" fill="var(--green)" opacity="0.5" stroke="var(--green)" stroke-width="1.5"/>
  <text x="340" y="98" text-anchor="middle" font-size="10" font-weight="700" fill="var(--green)">$7.0</text>
  <text x="340" y="195" text-anchor="middle" font-size="9" font-weight="600" fill="var(--text)">IOCL</text>
  <!-- BPCL -->
  <rect x="400" y="111" width="52" height="69" rx="4" fill="var(--pink)" opacity="0.25"/>
  <rect x="400" y="111" width="52" height="69" rx="4" fill="var(--pink)" opacity="0.5" stroke="var(--pink)" stroke-width="1.5"/>
  <text x="426" y="105" text-anchor="middle" font-size="10" font-weight="700" fill="var(--pink)">$6.5</text>
  <text x="426" y="195" text-anchor="middle" font-size="9" font-weight="600" fill="var(--text)">BPCL</text>
  <!-- Bottom insight -->
  <rect x="30" y="218" width="440" height="34" rx="5" fill="var(--code-bg)" stroke="var(--border)" stroke-width="0.8"/>
  <text x="250" y="234" text-anchor="middle" font-size="9" fill="var(--dim)">Reliance premium of</text>
  <text x="325" y="234" font-size="9" font-weight="700" fill="var(--accent)">$4-5/bbl</text>
  <text x="375" y="234" font-size="9" fill="var(--dim)">over benchmarks driven by complexity + petchem integration</text>
</svg>`,

// ─── Chapter 8: Sustainability ───────────────────────────────────────────────
8: `<svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <!-- Title -->
  <text x="250" y="18" text-anchor="middle" font-size="11" font-weight="600" fill="var(--accent)">Sustainability Roadmap — Journey to Net Zero</text>
  <!-- Timeline line -->
  <line x1="30" y1="90" x2="470" y2="90" stroke="var(--border)" stroke-width="2"/>
  <!-- Node 1: Current Operations -->
  <circle cx="60" cy="90" r="12" fill="var(--gold)" opacity="0.2" stroke="var(--gold)" stroke-width="2"/>
  <circle cx="60" cy="90" r="5" fill="var(--gold)"/>
  <text x="60" y="72" text-anchor="middle" font-size="9" font-weight="600" fill="var(--gold)">Current Ops</text>
  <text x="60" y="114" text-anchor="middle" font-size="7" fill="var(--dim)">Refinery</text>
  <text x="60" y="126" text-anchor="middle" font-size="7" fill="var(--dim)">Optimization</text>
  <text x="60" y="138" text-anchor="middle" font-size="7" fill="var(--dim)">Energy efficiency</text>
  <!-- Connector -->
  <line x1="72" y1="90" x2="140" y2="90" stroke="var(--gold)" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Node 2: Green H2 -->
  <circle cx="160" cy="90" r="12" fill="var(--green)" opacity="0.2" stroke="var(--green)" stroke-width="2"/>
  <circle cx="160" cy="90" r="5" fill="var(--green)"/>
  <text x="160" y="72" text-anchor="middle" font-size="9" font-weight="600" fill="var(--green)">Green H₂</text>
  <text x="160" y="114" text-anchor="middle" font-size="7" fill="var(--dim)">Electrolyzer</text>
  <text x="160" y="126" text-anchor="middle" font-size="7" fill="var(--dim)">capacity at</text>
  <text x="160" y="138" text-anchor="middle" font-size="7" fill="var(--dim)">Jamnagar</text>
  <!-- Connector -->
  <line x1="172" y1="90" x2="240" y2="90" stroke="var(--green)" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Node 3: Solar Manufacturing -->
  <circle cx="260" cy="90" r="12" fill="var(--cyan)" opacity="0.2" stroke="var(--cyan)" stroke-width="2"/>
  <circle cx="260" cy="90" r="5" fill="var(--cyan)"/>
  <text x="260" y="72" text-anchor="middle" font-size="9" font-weight="600" fill="var(--cyan)">Solar Mfg</text>
  <text x="260" y="114" text-anchor="middle" font-size="7" fill="var(--dim)">10 GW module</text>
  <text x="260" y="126" text-anchor="middle" font-size="7" fill="var(--dim)">factory + cell</text>
  <text x="260" y="138" text-anchor="middle" font-size="7" fill="var(--dim)">production</text>
  <!-- Connector -->
  <line x1="272" y1="90" x2="340" y2="90" stroke="var(--cyan)" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Node 4: Battery -->
  <circle cx="360" cy="90" r="12" fill="var(--pink)" opacity="0.2" stroke="var(--pink)" stroke-width="2"/>
  <circle cx="360" cy="90" r="5" fill="var(--pink)"/>
  <text x="360" y="72" text-anchor="middle" font-size="9" font-weight="600" fill="var(--pink)">Battery</text>
  <text x="360" y="114" text-anchor="middle" font-size="7" fill="var(--dim)">MWh-scale</text>
  <text x="360" y="126" text-anchor="middle" font-size="7" fill="var(--dim)">energy storage</text>
  <text x="360" y="138" text-anchor="middle" font-size="7" fill="var(--dim)">solutions</text>
  <!-- Connector -->
  <line x1="372" y1="90" x2="440" y2="90" stroke="var(--pink)" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Node 5: Net Zero -->
  <circle cx="460" cy="90" r="14" fill="var(--accent)" opacity="0.2" stroke="var(--accent)" stroke-width="2.5"/>
  <circle cx="460" cy="90" r="6" fill="var(--accent)"/>
  <text x="460" y="70" text-anchor="middle" font-size="10" font-weight="700" fill="var(--accent)">Net Zero</text>
  <text x="460" y="114" text-anchor="middle" font-size="8" font-weight="600" fill="var(--accent)">2035 Target</text>
  <text x="460" y="128" text-anchor="middle" font-size="7" fill="var(--dim)">Carbon neutral</text>
  <text x="460" y="140" text-anchor="middle" font-size="7" fill="var(--dim)">operations</text>
  <!-- Investment box -->
  <rect x="30" y="162" width="440" height="64" rx="6" fill="var(--code-bg)" stroke="var(--border)" stroke-width="0.8"/>
  <text x="250" y="180" text-anchor="middle" font-size="9" font-weight="600" fill="var(--accent)">New Energy Investment Commitment</text>
  <text x="250" y="198" text-anchor="middle" font-size="10" font-weight="700" fill="var(--gold)">₹75,000 Crore ($10B+) over 3 years</text>
  <text x="250" y="214" text-anchor="middle" font-size="8" fill="var(--dim)">Giga factories in Jamnagar: Solar · Battery · Hydrogen Electrolyzer · Fuel Cell</text>
</svg>`,

// ─── Chapter 9: Competitive Positioning ──────────────────────────────────────
9: `<svg viewBox="0 0 500 270" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <!-- Title -->
  <text x="250" y="18" text-anchor="middle" font-size="11" font-weight="600" fill="var(--accent)">Competitive Positioning — Key Metrics Comparison</text>
  <!-- Column headers -->
  <text x="170" y="42" text-anchor="middle" font-size="8" font-weight="600" fill="var(--dim)">Capacity (MMTPA)</text>
  <text x="290" y="42" text-anchor="middle" font-size="8" font-weight="600" fill="var(--dim)">Nelson Index</text>
  <text x="410" y="42" text-anchor="middle" font-size="8" font-weight="600" fill="var(--dim)">GRM ($/bbl)</text>
  <!-- Separator -->
  <line x1="30" y1="50" x2="470" y2="50" stroke="var(--border)" stroke-width="0.8"/>
  <!-- Row 1: Reliance -->
  <text x="30" y="74" font-size="10" font-weight="700" fill="var(--accent)">Reliance</text>
  <!-- Capacity bar -->
  <rect x="120" y="62" width="100" height="16" rx="3" fill="var(--accent)" opacity="0.3"/>
  <rect x="120" y="62" width="100" height="16" rx="3" fill="var(--accent)" opacity="0.15" stroke="var(--accent)" stroke-width="1"/>
  <text x="170" y="74" text-anchor="middle" font-size="9" font-weight="600" fill="var(--accent)">68.2</text>
  <!-- Nelson bar -->
  <rect x="250" y="62" width="80" height="16" rx="3" fill="var(--accent)" opacity="0.3"/>
  <rect x="250" y="62" width="80" height="16" rx="3" fill="var(--accent)" opacity="0.15" stroke="var(--accent)" stroke-width="1"/>
  <text x="290" y="74" text-anchor="middle" font-size="9" font-weight="600" fill="var(--accent)">14.0</text>
  <!-- GRM bar -->
  <rect x="365" y="62" width="90" height="16" rx="3" fill="var(--accent)" opacity="0.3"/>
  <rect x="365" y="62" width="90" height="16" rx="3" fill="var(--accent)" opacity="0.15" stroke="var(--accent)" stroke-width="1"/>
  <text x="410" y="74" text-anchor="middle" font-size="9" font-weight="600" fill="var(--accent)">$11.5</text>
  <!-- Row 2: IOCL -->
  <text x="30" y="106" font-size="10" font-weight="600" fill="var(--green)">IOCL</text>
  <rect x="120" y="94" width="78" height="16" rx="3" fill="var(--green)" opacity="0.2" stroke="var(--green)" stroke-width="1"/>
  <text x="159" y="106" text-anchor="middle" font-size="9" font-weight="600" fill="var(--green)">69.2</text>
  <rect x="250" y="94" width="52" height="16" rx="3" fill="var(--green)" opacity="0.2" stroke="var(--green)" stroke-width="1"/>
  <text x="276" y="106" text-anchor="middle" font-size="9" font-weight="600" fill="var(--green)">9.5</text>
  <rect x="365" y="94" width="56" height="16" rx="3" fill="var(--green)" opacity="0.2" stroke="var(--green)" stroke-width="1"/>
  <text x="393" y="106" text-anchor="middle" font-size="9" font-weight="600" fill="var(--green)">$7.0</text>
  <!-- Row 3: Shell -->
  <text x="30" y="138" font-size="10" font-weight="600" fill="var(--cyan)">Shell</text>
  <rect x="120" y="126" width="62" height="16" rx="3" fill="var(--cyan)" opacity="0.2" stroke="var(--cyan)" stroke-width="1"/>
  <text x="151" y="138" text-anchor="middle" font-size="9" font-weight="600" fill="var(--cyan)">54.0</text>
  <rect x="250" y="126" width="58" height="16" rx="3" fill="var(--cyan)" opacity="0.2" stroke="var(--cyan)" stroke-width="1"/>
  <text x="279" y="138" text-anchor="middle" font-size="9" font-weight="600" fill="var(--cyan)">10.5</text>
  <rect x="365" y="126" width="50" height="16" rx="3" fill="var(--cyan)" opacity="0.2" stroke="var(--cyan)" stroke-width="1"/>
  <text x="390" y="138" text-anchor="middle" font-size="9" font-weight="600" fill="var(--cyan)">$6.0</text>
  <!-- Row 4: Saudi Aramco -->
  <text x="30" y="170" font-size="10" font-weight="600" fill="var(--gold)">Saudi Aramco</text>
  <rect x="120" y="158" width="90" height="16" rx="3" fill="var(--gold)" opacity="0.2" stroke="var(--gold)" stroke-width="1"/>
  <text x="165" y="170" text-anchor="middle" font-size="9" font-weight="600" fill="var(--gold)">90.0+</text>
  <rect x="250" y="158" width="40" height="16" rx="3" fill="var(--gold)" opacity="0.2" stroke="var(--gold)" stroke-width="1"/>
  <text x="270" y="170" text-anchor="middle" font-size="9" font-weight="600" fill="var(--gold)">7.0</text>
  <rect x="365" y="158" width="46" height="16" rx="3" fill="var(--gold)" opacity="0.2" stroke="var(--gold)" stroke-width="1"/>
  <text x="388" y="170" text-anchor="middle" font-size="9" font-weight="600" fill="var(--gold)">$5.5</text>
  <!-- Separator -->
  <line x1="30" y1="186" x2="470" y2="186" stroke="var(--border)" stroke-width="0.8"/>
  <!-- Insight box -->
  <rect x="30" y="196" width="440" height="62" rx="6" fill="var(--code-bg)" stroke="var(--border)" stroke-width="0.8"/>
  <text x="250" y="214" text-anchor="middle" font-size="9" font-weight="600" fill="var(--accent)">Reliance Differentiators</text>
  <circle cx="52" cy="232" r="3" fill="var(--accent)"/>
  <text x="62" y="236" font-size="8" fill="var(--dim)">Highest Nelson Complexity globally (14+) — enables processing of cheap heavy/sour crudes</text>
  <circle cx="52" cy="248" r="3" fill="var(--accent)"/>
  <text x="62" y="252" font-size="8" fill="var(--dim)">Single-site scale + petchem integration = industry-leading GRM premium of $4-5/bbl</text>
</svg>`,

// ─── Chapter 10: Future Roadmap ──────────────────────────────────────────────
10: `<svg viewBox="0 0 500 270" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <defs>
    <marker id="arrowRoad" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto"><path d="M0,0 L7,2.5 L0,5Z" fill="var(--accent)" opacity="0.6"/></marker>
  </defs>
  <!-- Title -->
  <text x="250" y="18" text-anchor="middle" font-size="11" font-weight="600" fill="var(--accent)">Future Roadmap — Strategic Transformation</text>
  <!-- O2C Core (left pillar) -->
  <rect x="15" y="40" width="140" height="130" rx="8" fill="var(--gold)" opacity="0.10" stroke="var(--gold)" stroke-width="1.5"/>
  <rect x="25" y="48" width="120" height="22" rx="4" fill="var(--gold)" opacity="0.2"/>
  <text x="85" y="64" text-anchor="middle" font-size="10" font-weight="700" fill="var(--gold)">O2C Core</text>
  <text x="85" y="84" text-anchor="middle" font-size="8" fill="var(--dim)">Cash cow business</text>
  <line x1="35" y1="92" x2="135" y2="92" stroke="var(--border)" stroke-width="0.5"/>
  <text x="85" y="108" text-anchor="middle" font-size="8" fill="var(--text)">Debottleneck to</text>
  <text x="85" y="120" text-anchor="middle" font-size="9" font-weight="600" fill="var(--gold)">75+ MMTPA</text>
  <text x="85" y="136" text-anchor="middle" font-size="8" fill="var(--dim)">Petchem expansion</text>
  <text x="85" y="148" text-anchor="middle" font-size="8" fill="var(--dim)">MJ catalyst tech</text>
  <text x="85" y="163" text-anchor="middle" font-size="8" fill="var(--dim)">EBITDA: ₹55,000 Cr+</text>
  <!-- Arrow from O2C to New Energy -->
  <line x1="155" y1="105" x2="177" y2="105" stroke="var(--accent)" stroke-width="1.5" marker-end="url(#arrowRoad)"/>
  <!-- New Energy (center pillar) -->
  <rect x="180" y="40" width="140" height="130" rx="8" fill="var(--green)" opacity="0.10" stroke="var(--green)" stroke-width="1.5"/>
  <rect x="190" y="48" width="120" height="22" rx="4" fill="var(--green)" opacity="0.2"/>
  <text x="250" y="64" text-anchor="middle" font-size="10" font-weight="700" fill="var(--green)">New Energy</text>
  <text x="250" y="84" text-anchor="middle" font-size="8" fill="var(--dim)">Growth engine</text>
  <line x1="200" y1="92" x2="300" y2="92" stroke="var(--border)" stroke-width="0.5"/>
  <text x="250" y="108" text-anchor="middle" font-size="8" fill="var(--text)">Green H₂ at scale</text>
  <text x="250" y="120" text-anchor="middle" font-size="9" font-weight="600" fill="var(--green)">₹75,000 Cr invest</text>
  <text x="250" y="136" text-anchor="middle" font-size="8" fill="var(--dim)">Solar giga-factory</text>
  <text x="250" y="148" text-anchor="middle" font-size="8" fill="var(--dim)">Battery + fuel cell</text>
  <text x="250" y="163" text-anchor="middle" font-size="8" fill="var(--dim)">Bio-energy pathways</text>
  <!-- Arrow from New Energy to Digital -->
  <line x1="320" y1="105" x2="342" y2="105" stroke="var(--accent)" stroke-width="1.5" marker-end="url(#arrowRoad)"/>
  <!-- Digital Integration (right pillar) -->
  <rect x="345" y="40" width="140" height="130" rx="8" fill="var(--cyan)" opacity="0.10" stroke="var(--cyan)" stroke-width="1.5"/>
  <rect x="355" y="48" width="120" height="22" rx="4" fill="var(--cyan)" opacity="0.2"/>
  <text x="415" y="64" text-anchor="middle" font-size="10" font-weight="700" fill="var(--cyan)">Digital Integration</text>
  <text x="415" y="84" text-anchor="middle" font-size="8" fill="var(--dim)">Synergy multiplier</text>
  <line x1="365" y1="92" x2="465" y2="92" stroke="var(--border)" stroke-width="0.5"/>
  <text x="415" y="108" text-anchor="middle" font-size="8" fill="var(--text)">AI/ML for refinery</text>
  <text x="415" y="120" text-anchor="middle" font-size="9" font-weight="600" fill="var(--cyan)">Digital twin ops</text>
  <text x="415" y="136" text-anchor="middle" font-size="8" fill="var(--dim)">Jio platform for</text>
  <text x="415" y="148" text-anchor="middle" font-size="8" fill="var(--dim)">energy commerce</text>
  <text x="415" y="163" text-anchor="middle" font-size="8" fill="var(--dim)">EV charging network</text>
  <!-- Vision box at bottom -->
  <rect x="30" y="185" width="440" height="72" rx="6" fill="var(--code-bg)" stroke="var(--border)" stroke-width="0.8"/>
  <text x="250" y="204" text-anchor="middle" font-size="10" font-weight="600" fill="var(--accent)">Vision: From O2C to New Energy Materials Company</text>
  <text x="250" y="222" text-anchor="middle" font-size="9" fill="var(--text)">Transition refinery feedstock from crude oil → green hydrogen, bio-feedstock, recycled materials</text>
  <text x="250" y="238" text-anchor="middle" font-size="9" fill="var(--dim)">Leverage Jamnagar infrastructure + Jio digital backbone for India's energy transition</text>
  <text x="250" y="252" text-anchor="middle" font-size="8" font-weight="600" fill="var(--gold)">Target: Net Zero by 2035 · $15B+ New Energy revenue by 2030</text>
</svg>`

};
