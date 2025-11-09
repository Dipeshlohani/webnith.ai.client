'use client'

export const WebDesignIcon = () => (
  <div className="relative w-40 h-40">
    {/* Outer glow rings */}
    <div className="absolute inset-0 animate-ping opacity-20">
      <div className="w-full h-full rounded-full border-4 border-primary" />
    </div>
    <div className="absolute inset-0 animate-pulse opacity-30" style={{ animationDelay: '0.5s' }}>
      <div className="w-full h-full rounded-full border-4 border-brand-purple" />
    </div>
    
    {/* Main icon */}
    <div className="relative flex items-center justify-center h-full">
      <div className="text-7xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-br from-primary via-brand-purple to-accent animate-pulse drop-shadow-[0_0_30px_rgba(36,70,230,0.8)]">
        {'</>'}
      </div>
    </div>
    
    {/* Floating code particles */}
    {['0', '1', '{', '}'].map((char, i) => (
      <div
        key={i}
        className="absolute text-2xl font-mono text-primary/40 animate-float"
        style={{
          top: `${20 + i * 15}%`,
          left: i % 2 === 0 ? '-20%' : '110%',
          animationDelay: `${i * 0.3}s`,
          animationDuration: '3s'
        }}
      >
        {char}
      </div>
    ))}
  </div>
)

export const ChatbotIcon = () => (
  <div className="relative w-40 h-40">
    {/* Animated background circles */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-brand-purple/30 animate-pulse blur-xl" />
      <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-brand-purple/30 to-accent/30 animate-pulse blur-lg" style={{ animationDelay: '0.5s' }} />
    </div>
    
    {/* Main chat bubble */}
    <div className="relative flex items-center justify-center h-full">
      <div className="relative w-28 h-28 rounded-3xl bg-gradient-to-br from-primary via-brand-purple to-accent p-1 shadow-[0_0_40px_rgba(123,61,255,0.6)] animate-pulse">
        <div className="w-full h-full bg-midnight rounded-3xl flex items-center justify-center">
          {/* Typing dots */}
          <div className="flex gap-3">
            {[0, 1, 2].map(i => (
              <div 
                key={i} 
                className="w-4 h-4 bg-gradient-to-br from-white to-brand-teal rounded-full animate-bounce shadow-[0_0_20px_rgba(0,230,195,0.8)]" 
                style={{ animationDelay: `${i * 0.15}s`, animationDuration: '0.6s' }} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    
    {/* Floating message bubbles */}
    {[...Array(3)].map((_, i) => (
      <div
        key={i}
        className="absolute w-3 h-3 bg-primary/60 rounded-full animate-float blur-sm"
        style={{
          top: `${30 + i * 20}%`,
          right: i % 2 === 0 ? '-10%' : 'auto',
          left: i % 2 !== 0 ? '-10%' : 'auto',
          animationDelay: `${i * 0.4}s`,
          animationDuration: '4s'
        }}
      />
    ))}
  </div>
)

export const AIMLIcon = () => (
  <div className="relative w-40 h-40">
    {/* Glowing background */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 via-brand-purple/20 to-accent/20 blur-2xl animate-pulse" />
    </div>
    
    {/* Neural network */}
    <svg viewBox="0 0 100 100" className="relative w-full h-full drop-shadow-[0_0_20px_rgba(36,70,230,0.6)]">
      {/* Animated connections */}
      <defs>
        <linearGradient id="line1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" className="[stop-color:#2446e6]" />
          <stop offset="100%" className="[stop-color:#7b3dff]" />
        </linearGradient>
        <linearGradient id="line2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" className="[stop-color:#7b3dff]" />
          <stop offset="100%" className="[stop-color:#ff914d]" />
        </linearGradient>
      </defs>
      
      <line x1="50" y1="20" x2="30" y2="50" stroke="url(#line1)" strokeWidth="2" opacity="0.6" className="animate-pulse" />
      <line x1="50" y1="20" x2="70" y2="50" stroke="url(#line1)" strokeWidth="2" opacity="0.6" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
      <line x1="30" y1="50" x2="50" y2="80" stroke="url(#line2)" strokeWidth="2" opacity="0.6" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
      <line x1="70" y1="50" x2="50" y2="80" stroke="url(#line2)" strokeWidth="2" opacity="0.6" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
      
      {/* Nodes with glow */}
      <circle cx="50" cy="20" r="10" className="fill-primary animate-pulse drop-shadow-[0_0_10px_rgba(36,70,230,1)]" />
      <circle cx="50" cy="20" r="6" className="fill-white" />
      
      <circle cx="30" cy="50" r="10" className="fill-brand-purple animate-pulse drop-shadow-[0_0_10px_rgba(123,61,255,1)]" style={{ animationDelay: '0.2s' }} />
      <circle cx="30" cy="50" r="6" className="fill-white" />
      
      <circle cx="70" cy="50" r="10" className="fill-accent animate-pulse drop-shadow-[0_0_10px_rgba(255,145,77,1)]" style={{ animationDelay: '0.4s' }} />
      <circle cx="70" cy="50" r="6" className="fill-white" />
      
      <circle cx="50" cy="80" r="10" className="fill-brand-teal animate-pulse drop-shadow-[0_0_10px_rgba(0,230,195,1)]" style={{ animationDelay: '0.6s' }} />
      <circle cx="50" cy="80" r="6" className="fill-white" />
    </svg>
    
    {/* Data particles */}
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 bg-gradient-to-br from-primary to-brand-purple rounded-full animate-ping"
        style={{
          top: `${20 + (i * 60) / 6}%`,
          left: `${10 + (i * 80) / 6}%`,
          animationDelay: `${i * 0.2}s`,
          animationDuration: '2s'
        }}
      />
    ))}
  </div>
)

export const BusinessIntelligenceIcon = () => (
  <div className="relative w-40 h-40 flex items-center justify-center">
    {/* Glowing base */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-transparent via-primary to-transparent blur-sm" />
    
    {/* Animated bars with 3D effect */}
    <div className="relative flex items-end justify-center gap-2 h-36 w-36">
      {[
        { height: 40, color: 'from-primary to-brand-purple', delay: 0 },
        { height: 75, color: 'from-brand-purple to-accent', delay: 0.1 },
        { height: 55, color: 'from-primary to-brand-purple', delay: 0.2 },
        { height: 95, color: 'from-accent to-brand-teal', delay: 0.3 },
        { height: 65, color: 'from-brand-purple to-primary', delay: 0.4 }
      ].map((bar, i) => (
        <div key={i} className="relative group" style={{ animationDelay: `${bar.delay}s` }}>
          {/* Bar glow */}
          <div 
            className={`absolute -inset-1 bg-gradient-to-t ${bar.color} rounded-t-lg blur-md opacity-50 group-hover:opacity-100 transition-opacity animate-pulse`}
            style={{ height: `${bar.height}%`, animationDelay: `${bar.delay}s` }}
          />
          {/* Main bar */}
          <div 
            className={`relative w-5 bg-gradient-to-t ${bar.color} rounded-t-lg shadow-[0_0_20px_rgba(36,70,230,0.5)] animate-pulse transform hover:scale-110 transition-transform`}
            style={{ height: `${bar.height}%`, animationDelay: `${bar.delay}s` }}
          >
            {/* 3D highlight */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-t-lg" />
            {/* Top indicator */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-ping" 
                 style={{ animationDelay: `${bar.delay + 0.5}s` }} />
          </div>
        </div>
      ))}
    </div>
    
    {/* Data points floating up */}
    {[...Array(4)].map((_, i) => (
      <div
        key={i}
        className="absolute bottom-0 w-1 h-1 bg-brand-teal rounded-full animate-float opacity-60"
        style={{
          left: `${20 + i * 20}%`,
          animationDelay: `${i * 0.5}s`,
          animationDuration: '3s'
        }}
      />
    ))}
  </div>
)

export const ContentCreationIcon = () => (
  <div className="relative w-40 h-40">
    {/* Magical aura */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent/30 via-brand-purple/30 to-primary/30 blur-2xl animate-pulse" />
    </div>
    
    {/* Main pen/brush */}
    <svg viewBox="0 0 100 100" className="relative w-full h-full drop-shadow-[0_0_20px_rgba(255,145,77,0.6)]">
      <defs>
        <linearGradient id="penGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" className="[stop-color:#ff914d]" />
          <stop offset="50%" className="[stop-color:#7b3dff]" />
          <stop offset="100%" className="[stop-color:#2446e6]" />
        </linearGradient>
      </defs>
      
      {/* Pen stroke trail */}
      <path 
        d="M20 80 Q35 50 50 20 T80 80" 
        stroke="url(#penGrad)" 
        strokeWidth="4" 
        fill="none" 
        strokeLinecap="round"
        className="animate-pulse"
        opacity="0.8"
      />
      
      {/* Pen tip glow */}
      <circle cx="50" cy="20" r="12" className="fill-accent/30 animate-ping" />
      <circle cx="50" cy="20" r="8" className="fill-accent animate-bounce drop-shadow-[0_0_15px_rgba(255,145,77,1)]" />
      <circle cx="50" cy="20" r="4" className="fill-white" />
    </svg>
    
    {/* Sparkle particles */}
    {[
      { x: 20, y: 30, delay: 0 },
      { x: 70, y: 40, delay: 0.3 },
      { x: 40, y: 60, delay: 0.6 },
      { x: 80, y: 70, delay: 0.9 },
      { x: 30, y: 80, delay: 1.2 }
    ].map((pos, i) => (
      <div
        key={i}
        className="absolute"
        style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
      >
        <div className="relative w-3 h-3 animate-ping" style={{ animationDelay: `${pos.delay}s`, animationDuration: '1.5s' }}>
          <div className="absolute inset-0 rotate-45 bg-gradient-to-br from-white to-accent" />
          <div className="absolute inset-0 -rotate-45 bg-gradient-to-br from-white to-brand-purple" />
        </div>
      </div>
    ))}
  </div>
)

export const AddOnsIcon = () => (
  <div className="relative w-40 h-40 flex items-center justify-center">
    {/* Rotating glow rings */}
    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
      <div className="absolute inset-8 rounded-full border-2 border-primary/30" />
    </div>
    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}>
      <div className="absolute inset-12 rounded-full border-2 border-brand-purple/30" />
    </div>
    
    {/* Central plus with 3D effect */}
    <div className="relative">
      {/* Glow layers */}
      <div className="absolute inset-0 blur-2xl">
        <div className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary via-brand-purple to-accent">
          +
        </div>
      </div>
      <div className="absolute inset-0 blur-xl">
        <div className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-accent via-brand-purple to-primary">
          +
        </div>
      </div>
      
      {/* Main plus */}
      <div className="relative text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary via-brand-purple to-accent animate-pulse drop-shadow-[0_0_30px_rgba(123,61,255,1)]">
        +
      </div>
    </div>
    
    {/* Corner accents */}
    {[
      { x: '10%', y: '10%', delay: 0 },
      { x: '90%', y: '10%', delay: 0.2 },
      { x: '10%', y: '90%', delay: 0.4 },
      { x: '90%', y: '90%', delay: 0.6 }
    ].map((corner, i) => (
      <div
        key={i}
        className="absolute w-4 h-4 animate-pulse"
        style={{ left: corner.x, top: corner.y, animationDelay: `${corner.delay}s` }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-brand-teal to-primary shadow-[0_0_20px_rgba(0,230,195,0.8)]" />
      </div>
    ))}
  </div>
)

