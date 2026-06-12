import{d as o,o as s,l as d,G as f,p as h,C as a,m as k,B as y,t as x,x as w}from"./vue-zCjMriuG.js";const l=["base","upgrade","ten","artifact"],p={base:{label:"基础",color:"slate",border:"border-slate-500",bg:"bg-slate-800/60",text:"text-slate-300"},upgrade:{label:"进阶",color:"emerald",border:"border-emerald-500",bg:"bg-emerald-900/40",text:"text-emerald-300"},ten:{label:"传说",color:"orange",border:"border-orange-500",bg:"bg-orange-900/40",text:"text-orange-300"},artifact:{label:"神器",color:"amber",border:"border-amber-500",bg:"bg-gradient-to-br from-amber-700/50 to-rose-700/50",text:"text-amber-300"}},b={base:1,upgrade:1.6,ten:3.5,artifact:8},m={base:1e3,upgrade:5e3,ten:2e4,artifact:null},g=[{id:1,base:"棒球棒",upgrade:"程管执法棒",ten:"祥云火炬",artifact:"神·大力神杯",awakenType:2,icon:"🏏",baseStats:{atk:80,def:40,spd:120,crit:8}},{id:2,base:"木槌",upgrade:"紫金八卦槌",ten:"雷神之锤",artifact:"神·雷神之锤",awakenType:1,icon:"🔨",baseStats:{atk:110,def:90,spd:30,crit:6}},{id:3,base:"开山斧",upgrade:"真·开山斧",ten:"盘古开天斧",artifact:"神·霸皇",awakenType:1,icon:"🪓",baseStats:{atk:150,def:60,spd:40,crit:10}},{id:4,base:"蛇矛",upgrade:"丈八蛇矛",ten:"降妖宝杖",artifact:"神·丈八蛇矛",awakenType:1,icon:"🗡️",baseStats:{atk:130,def:50,spd:100,crit:12}},{id:5,base:"青龙戟",upgrade:"真·青龙戟",ten:"盘龙之戟",artifact:"神·青龙戟",awakenType:1,icon:"⚔️",baseStats:{atk:140,def:70,spd:80,crit:9}},{id:6,base:"三叉戟",upgrade:"真·三叉戟",ten:"海洋之心",artifact:"神·海王叉",awakenType:1,icon:"🔱",baseStats:{atk:120,def:80,spd:70,crit:11}},{id:7,base:"充气锤子",upgrade:"真·充气锤子",ten:"蒸汽重锤",artifact:"神·熔岩蒸汽锤",awakenType:1,icon:"🔨",baseStats:{atk:90,def:70,spd:50,crit:7}},{id:8,base:"关刀",upgrade:"真·关刀宽刃龙脊",awakenType:1,icon:"⚔️",baseStats:{atk:160,def:55,spd:60,crit:9}},{id:9,base:"蛇影弓",upgrade:"落日弓",ten:"射雕神弓",artifact:"神·射雕神弓",awakenType:1,icon:"🏹",baseStats:{atk:100,def:30,spd:140,crit:18}},{id:10,base:"红缨枪",upgrade:"真·红缨枪",ten:"穿刺之枪",artifact:"神·命运之枪",awakenType:1,icon:"🔱",baseStats:{atk:125,def:45,spd:110,crit:13}},{id:11,base:"折凳",upgrade:"绝世好折凳",ten:"老虎凳",artifact:"神·折凳",awakenType:1,icon:"🪑",baseStats:{atk:70,def:100,spd:40,crit:5}},{id:12,base:"菜刀",upgrade:"双持弯刀",ten:"双持狂战斧",artifact:"神·埃辛诺斯战刃",awakenType:1,icon:"🔪",baseStats:{atk:115,def:50,spd:95,crit:15}},{id:13,base:"接力棒",intermediate:["好棒","真棒"],upgrade:"真的好棒",ten:"传说之杖",artifact:"神·星之杖",awakenType:2,icon:"🏃",baseStats:{atk:60,def:30,spd:180,crit:20}},{id:14,base:"平底锅",upgrade:"刘罗锅",ten:"佛跳墙",artifact:"神·电饭煲",awakenType:2,icon:"🍳",baseStats:{atk:70,def:120,spd:35,crit:6}},{id:15,base:"扳手",upgrade:"大力管钳",ten:"合金钻头",artifact:"神·钻头粉碎者",awakenType:2,icon:"🔧",baseStats:{atk:105,def:85,spd:55,crit:8}},{id:16,base:"神·全家桶",awakenType:2,icon:"🍗",baseStats:{atk:50,def:50,spd:50,crit:5}},{id:17,base:"拖鞋",upgrade:"我的滑板鞋",ten:"我的篮球鞋",artifact:"神·无敌飞鞋",awakenType:2,icon:"🩴",baseStats:{atk:40,def:35,spd:200,crit:22}},{id:18,base:"手雷",upgrade:"燃烧瓶",ten:"核弹",artifact:"神·圣手雷",awakenType:1,icon:"💣",baseStats:{atk:200,def:20,spd:25,crit:4}},{id:19,base:"锦毛鼠",intermediate:["翻江鼠","穿山鼠","彻地鼠"],upgrade:"钻天鼠",ten:"王牌飞行鼠",artifact:"神·霸天鼠",awakenType:1,icon:"🐭",baseStats:{atk:75,def:45,spd:160,crit:14}},{id:20,base:"汽水罐",upgrade:"大桶可乐",ten:"可乐终结者",artifact:"神·可乐切割枪",awakenType:1,icon:"🥤",baseStats:{atk:95,def:40,spd:85,crit:10}},{id:21,base:"流星球",upgrade:"流星赶月",ten:"螺旋手里剑",artifact:"神·风刃",awakenType:1,icon:"🔮",baseStats:{atk:110,def:50,spd:130,crit:11}},{id:22,base:"仙人掌",upgrade:"巨型仙人球",ten:"奇妙种子",artifact:"神·花仙子",awakenType:1,icon:"🌵",baseStats:{atk:65,def:90,spd:30,crit:7}},{id:23,base:"长矛",upgrade:"标枪",ten:"贯星长枪",artifact:"神·神王",awakenType:1,icon:"🔱",baseStats:{atk:120,def:50,spd:105,crit:12}},{id:24,base:"镇妖塔",ten:"玲珑宝塔",awakenType:1,icon:"🗼",baseStats:{atk:85,def:110,spd:20,crit:5}},{id:25,base:"捆仙绳",ten:"缚龙仙绳",awakenType:1,icon:"🪢",baseStats:{atk:60,def:80,spd:90,crit:10}}],S=t=>g.find(e=>e.id===t),M=(t,e)=>{const i=b[e];return{atk:Math.round(t.baseStats.atk*i),def:Math.round(t.baseStats.def*i),spd:Math.round(t.baseStats.spd*i),crit:Math.round(t.baseStats.crit*i)}},Q=t=>{const e=l.indexOf(t);return e<0||e>=l.length-1?null:l[e+1]},u=["width","height","innerHTML"],L=o({__name:"WeaponArt",props:{id:{},size:{default:48}},setup(t){const e=t,i={1:`<g transform="rotate(30 32 32)">
        <rect x="29" y="4" width="6" height="50" rx="3" fill="#a0522d" stroke="#5c2e0d" stroke-width="1"/>
        <ellipse cx="32" cy="52" rx="5" ry="3" fill="#5c2e0d"/>
        <line x1="32" y1="14" x2="32" y2="50" stroke="#8b4513" stroke-width="0.5"/>
      </g>`,2:`<rect x="14" y="8" width="36" height="20" rx="3" fill="#8b4513" stroke="#5c2e0d" stroke-width="1.5"/>
      <rect x="29" y="28" width="6" height="32" fill="#a0522d" stroke="#5c2e0d" stroke-width="1"/>
      <circle cx="22" cy="18" r="1.5" fill="#3c2410"/>
      <circle cx="42" cy="18" r="1.5" fill="#3c2410"/>`,3:`<rect x="30" y="14" width="4" height="46" fill="#8b4513"/>
      <path d="M8 14 Q32 4 34 14 L34 32 Q32 36 8 34 Z" fill="#c0c0c0" stroke="#808080" stroke-width="1.5"/>
      <path d="M14 18 Q28 12 32 18" fill="none" stroke="#fff" stroke-width="1" opacity="0.6"/>`,4:`<rect x="31" y="20" width="2" height="42" fill="#5c2e0d"/>
      <path d="M32 2 L42 18 L32 22 L22 18 Z" fill="#c0c0c0" stroke="#606060" stroke-width="1"/>
      <line x1="32" y1="6" x2="32" y2="18" stroke="#fff" stroke-width="0.5" opacity="0.7"/>
      <circle cx="32" cy="22" r="2" fill="#606060"/>`,5:`<rect x="31" y="20" width="2" height="42" fill="#5c2e0d"/>
      <path d="M20 14 L44 14 L42 18 L20 18 Z" fill="#228b22" stroke="#006400" stroke-width="1"/>
      <path d="M30 4 L34 4 L34 14 L30 14 Z" fill="#228b22" stroke="#006400" stroke-width="1"/>
      <circle cx="24" cy="16" r="1" fill="#ffd700"/>
      <circle cx="40" cy="16" r="1" fill="#ffd700"/>`,6:`<rect x="31" y="20" width="2" height="42" fill="#909090"/>
      <rect x="20" y="4" width="3" height="18" fill="#c0c0c0" stroke="#808080"/>
      <rect x="30" y="2" width="4" height="20" fill="#c0c0c0" stroke="#808080"/>
      <rect x="41" y="4" width="3" height="18" fill="#c0c0c0" stroke="#808080"/>
      <rect x="22" y="20" width="20" height="4" fill="#909090" rx="1"/>`,7:`<rect x="29" y="22" width="6" height="40" fill="#5c2e0d"/>
      <ellipse cx="32" cy="16" rx="14" ry="12" fill="#654321" stroke="#3c2410" stroke-width="1.5"/>
      <ellipse cx="28" cy="12" rx="3" ry="2" fill="#8b6f47" opacity="0.7"/>`,8:`<rect x="30" y="20" width="4" height="42" fill="#8b4513" stroke="#5c2e0d" stroke-width="0.5"/>
      <path d="M30 4 Q52 8 52 24 L30 22 Z" fill="#c0c0c0" stroke="#808080" stroke-width="1.5"/>
      <path d="M34 8 Q48 10 48 20" fill="none" stroke="#fff" stroke-width="1" opacity="0.5"/>
      <circle cx="32" cy="22" r="2" fill="#606060"/>`,9:`<path d="M14 4 Q44 4 50 32 Q44 60 14 60" fill="none" stroke="#8b4513" stroke-width="4" stroke-linecap="round"/>
      <line x1="14" y1="6" x2="14" y2="58" stroke="#fff8dc" stroke-width="1"/>
      <line x1="50" y1="8" x2="50" y2="56" stroke="#fff8dc" stroke-width="1"/>
      <line x1="14" y1="32" x2="50" y2="32" stroke="#fff8dc" stroke-width="1.2"/>
      <polygon points="32,28 36,32 32,36 28,32" fill="#dc143c"/>`,10:`<line x1="32" y1="14" x2="32" y2="58" stroke="#8b4513" stroke-width="2.5"/>
       <path d="M32 2 L40 16 L32 18 L24 16 Z" fill="#c0c0c0" stroke="#606060" stroke-width="1"/>
       <line x1="32" y1="6" x2="32" y2="16" stroke="#fff" stroke-width="0.5" opacity="0.7"/>
       <circle cx="32" cy="22" r="4" fill="#dc143c"/>
       <line x1="28" y1="22" x2="36" y2="22" stroke="#8b0000" stroke-width="1"/>
       <line x1="32" y1="18" x2="32" y2="26" stroke="#8b0000" stroke-width="1"/>`,11:`<rect x="10" y="20" width="44" height="6" rx="1" fill="#8b4513" stroke="#5c2e0d" stroke-width="1"/>
       <rect x="12" y="26" width="4" height="32" fill="#5c2e0d"/>
       <rect x="48" y="26" width="4" height="32" fill="#5c2e0d"/>
       <line x1="14" y1="34" x2="50" y2="34" stroke="#5c2e0d" stroke-width="1.5"/>
       <line x1="14" y1="48" x2="50" y2="48" stroke="#5c2e0d" stroke-width="1.5"/>`,12:`<rect x="22" y="8" width="32" height="22" rx="1" fill="#c0c0c0" stroke="#808080" stroke-width="1.5"/>
       <line x1="24" y1="11" x2="24" y2="27" stroke="#fff" stroke-width="1" opacity="0.6"/>
       <rect x="6" y="14" width="16" height="10" rx="2" fill="#5c2e0d" stroke="#3c2410" stroke-width="1"/>
       <circle cx="10" cy="19" r="1" fill="#3c2410"/>`,13:`<rect x="20" y="20" width="24" height="24" rx="2" fill="#dc143c" stroke="#8b0000" stroke-width="1"/>
       <rect x="24" y="22" width="16" height="20" fill="#fff"/>
       <text x="32" y="36" text-anchor="middle" fill="#dc143c" font-size="10" font-weight="bold">4×</text>
       <line x1="22" y1="24" x2="22" y2="40" stroke="#8b0000" stroke-width="0.5"/>`,14:`<ellipse cx="22" cy="32" rx="20" ry="18" fill="#1a1a1a" stroke="#000" stroke-width="1.5"/>
       <ellipse cx="18" cy="28" rx="6" ry="3" fill="#3a3a3a" opacity="0.6"/>
       <rect x="40" y="28" width="22" height="8" rx="3" fill="#5c2e0d" stroke="#3c2410" stroke-width="1"/>`,15:`<path d="M10 4 L20 4 Q24 4 24 8 L24 14 L34 14 Q38 14 38 18 L38 28 L52 28 Q56 28 56 32 L56 56 Q56 60 52 60 L46 60 Q42 60 42 56 L42 36 L32 36 Q28 36 28 32 L28 22 L18 22 Q14 22 14 18 L14 8 Q14 4 18 4 Z"
        fill="#a0a0a0" stroke="#606060" stroke-width="1.5"/>
       <circle cx="48" cy="46" r="4" fill="none" stroke="#606060" stroke-width="1.5"/>`,16:`<path d="M14 16 L50 16 L54 58 L10 58 Z" fill="#dc143c" stroke="#8b0000" stroke-width="1.5"/>
       <ellipse cx="32" cy="16" rx="18" ry="3" fill="#8b0000"/>
       <path d="M22 14 Q32 2 42 14" fill="none" stroke="#8b0000" stroke-width="2.5"/>
       <text x="32" y="40" text-anchor="middle" fill="#ffd700" font-size="10" font-weight="bold">KFC</text>
       <text x="32" y="50" text-anchor="middle" fill="#ffd700" font-size="6">全家桶</text>`,17:`<path d="M6 38 Q6 26 22 24 L40 24 Q50 24 50 34 L50 44 Q50 52 42 52 L18 52 Q6 52 6 44 Z"
        fill="#4169e1" stroke="#1e3a8a" stroke-width="1.5"/>
       <path d="M22 28 L38 28" stroke="#fff" stroke-width="1" opacity="0.5"/>
       <path d="M22 32 L40 32" stroke="#fff" stroke-width="1" opacity="0.5"/>
       <circle cx="44" cy="36" r="2" fill="#ffd700"/>`,18:`<ellipse cx="32" cy="38" rx="14" ry="18" fill="#556b2f" stroke="#2f4f2f" stroke-width="1.5"/>
       <rect x="30" y="14" width="4" height="6" fill="#909090"/>
       <line x1="32" y1="14" x2="40" y2="6" stroke="#909090" stroke-width="2.5"/>
       <circle cx="40" cy="6" r="2" fill="#909090"/>
       <line x1="24" y1="34" x2="40" y2="34" stroke="#2f4f2f" stroke-width="0.5"/>
       <line x1="24" y1="42" x2="40" y2="42" stroke="#2f4f2f" stroke-width="0.5"/>`,19:`<ellipse cx="28" cy="36" rx="20" ry="14" fill="#909090" stroke="#606060" stroke-width="1"/>
       <circle cx="18" cy="22" r="5" fill="#909090" stroke="#606060" stroke-width="1"/>
       <circle cx="36" cy="22" r="5" fill="#909090" stroke="#606060" stroke-width="1"/>
       <circle cx="18" cy="22" r="2.5" fill="#ffc0cb"/>
       <circle cx="36" cy="22" r="2.5" fill="#ffc0cb"/>
       <circle cx="12" cy="32" r="1.5" fill="#000"/>
       <circle cx="42" cy="32" r="1.5" fill="#000"/>
       <circle cx="28" cy="34" r="1" fill="#000"/>
       <path d="M48 40 Q58 40 60 28" fill="none" stroke="#909090" stroke-width="3"/>`,20:`<rect x="20" y="6" width="24" height="52" rx="3" fill="#dc143c" stroke="#8b0000" stroke-width="1.5"/>
       <rect x="22" y="10" width="20" height="8" fill="#fff"/>
       <rect x="30" y="6" width="4" height="2" fill="#909090"/>
       <ellipse cx="32" cy="6" rx="5" ry="1" fill="#606060"/>
       <text x="32" y="38" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">COLA</text>
       <line x1="22" y1="48" x2="42" y2="48" stroke="#fff" stroke-width="0.5" opacity="0.5"/>`,21:`<line x1="32" y1="4" x2="32" y2="20" stroke="#5c2e0d" stroke-width="2"/>
       <circle cx="32" cy="36" r="18" fill="#c0c0c0" stroke="#606060" stroke-width="2"/>
       <circle cx="32" cy="36" r="6" fill="#606060"/>
       <circle cx="32" cy="36" r="2" fill="#909090"/>
       <path d="M16 36 Q12 36 14 40" fill="none" stroke="#5c2e0d" stroke-width="1.5"/>
       <path d="M48 36 Q52 36 50 40" fill="none" stroke="#5c2e0d" stroke-width="1.5"/>`,22:`<rect x="26" y="14" width="12" height="46" rx="6" fill="#228b22" stroke="#006400" stroke-width="1.5"/>
       <rect x="12" y="26" width="10" height="20" rx="5" fill="#228b22" stroke="#006400" stroke-width="1.5"/>
       <rect x="42" y="22" width="10" height="18" rx="5" fill="#228b22" stroke="#006400" stroke-width="1.5"/>
       <circle cx="32" cy="22" r="2" fill="#ffd700"/>
       <circle cx="32" cy="34" r="2" fill="#ffd700"/>
       <circle cx="32" cy="46" r="2" fill="#ffd700"/>
       <circle cx="17" cy="32" r="1.5" fill="#ffd700"/>
       <circle cx="47" cy="28" r="1.5" fill="#ffd700"/>`,23:`<line x1="32" y1="20" x2="32" y2="58" stroke="#8b4513" stroke-width="3"/>
       <path d="M32 2 L42 18 L32 22 L22 18 Z" fill="#c0c0c0" stroke="#606060" stroke-width="1"/>
       <line x1="32" y1="6" x2="32" y2="18" stroke="#fff" stroke-width="0.5" opacity="0.7"/>
       <rect x="30" y="58" width="4" height="4" fill="#5c2e0d"/>`,24:`<rect x="20" y="48" width="24" height="12" fill="#8b4513" stroke="#5c2e0d" stroke-width="1"/>
       <polygon points="20,48 32,42 44,48" fill="#5c2e0d"/>
       <rect x="23" y="34" width="18" height="14" fill="#dc143c" stroke="#8b0000" stroke-width="1"/>
       <polygon points="23,34 32,28 41,34" fill="#8b4513"/>
       <rect x="26" y="20" width="12" height="14" fill="#dc143c" stroke="#8b0000" stroke-width="1"/>
       <polygon points="26,20 32,14 38,20" fill="#8b4513"/>
       <rect x="29" y="6" width="6" height="14" fill="#dc143c" stroke="#8b0000" stroke-width="1"/>
       <polygon points="29,6 32,2 35,6" fill="#ffd700"/>
       <circle cx="32" cy="13" r="1.5" fill="#ffd700"/>`,25:`<circle cx="22" cy="22" r="10" fill="none" stroke="#d2b48c" stroke-width="4"/>
       <circle cx="42" cy="22" r="10" fill="none" stroke="#d2b48c" stroke-width="4"/>
       <circle cx="32" cy="42" r="10" fill="none" stroke="#d2b48c" stroke-width="4"/>
       <circle cx="22" cy="22" r="2" fill="#a0522d"/>
       <circle cx="42" cy="22" r="2" fill="#a0522d"/>
       <circle cx="32" cy="42" r="2" fill="#a0522d"/>
       <path d="M30 12 Q32 8 34 12" fill="none" stroke="#a0522d" stroke-width="1"/>
       <path d="M30 32 Q32 28 34 32" fill="none" stroke="#a0522d" stroke-width="1"/>`},r=f(()=>i[e.id]||'<text x="32" y="36" text-anchor="middle" fill="#888" font-size="10">?</text>');return(c,n)=>(s(),d("svg",{width:t.size,height:t.size,viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg",style:{display:"block"},innerHTML:r.value},null,8,u))}}),z=o({__name:"WeaponIcon",props:{weapon:{},tier:{default:"base"},size:{default:64},showAwakenBadge:{type:Boolean,default:!0}},setup(t){const e=t,i=f(()=>p[e.tier]),r=c=>c===1?"bg-sky-600 text-white":"bg-purple-600 text-white";return(c,n)=>(s(),d("div",{class:a(["relative inline-flex items-center justify-center rounded-lg overflow-hidden ring-1",i.value.border]),style:h({width:t.size+"px",height:t.size+"px"})},[k("div",{class:a(["absolute inset-0",i.value.bg])},null,2),y(L,{id:t.weapon.id,size:Math.round(t.size*.78)},null,8,["id","size"]),t.showAwakenBadge?(s(),d("span",{key:0,class:a(["absolute bottom-0 right-0 px-1 text-[9px] font-bold rounded-tl",r(t.weapon.awakenType)])}," 觉"+x(t.weapon.awakenType),3)):w("",!0)],6))}});export{p as T,m as U,z as _,S as a,Q as n,M as s,g as w};
//# sourceMappingURL=WeaponIcon.vue_vue_type_script_setup_true_lang-oSWTRL6I.js.map
