// ─── PROKITS STORE — FULL JERSEY DATA ─────────────────────────────────────────
// Structure per team:
//   seasons: { '2025/26': [...kits], '2024/25': [...kits], '2023/24': [...], '2022/23': [...] }
//   retro:   [ { year, name, note } ]  — iconic kits with a story

const FOOTBALL = {
  england: {
    flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', name: 'Premier League', country: 'England',
    teams: [
      {
        e: '⚽', n: 'Manchester City', p: '$40–$45',
        seasons: {
          '2025/26': ['Home','Away','Third'],
          '2024/25': ['Home','Away','Third'],
          '2023/24': ['Home','Away','Third'],
          '2022/23': ['Home','Away','Third']
        },
        retro: [
          { year: '1998/99', name: 'Home', note: 'Classic sky blue — Goater era' },
          { year: '2011/12', name: 'Home', note: 'Title-winning season — Aguerooo!' },
          { year: '2018/19', name: 'Home', note: '100-point season kit' }
        ]
      },
      {
        e: '⚽', n: 'Arsenal', p: '$40–$45',
        seasons: {
          '2025/26': ['Home','Away','Third'],
          '2024/25': ['Home','Away','Third'],
          '2023/24': ['Home','Away','Third'],
          '2022/23': ['Home','Away','Third']
        },
        retro: [
          { year: '1989/90', name: 'Home', note: 'Bruised banana away — iconic!' },
          { year: '2003/04', name: 'Home', note: 'The Invincibles season' },
          { year: '2013/14', name: 'Away', note: 'Ox & Özil — cult classic' }
        ]
      },
      {
        e: '⚽', n: 'Liverpool', p: '$40–$45',
        seasons: {
          '2025/26': ['Home','Away','Third'],
          '2024/25': ['Home','Away','Third'],
          '2023/24': ['Home','Away','Third'],
          '2022/23': ['Home','Away','Third']
        },
        retro: [
          { year: '1983/84', name: 'Home', note: 'European Cup winners — Dalglish era' },
          { year: '2004/05', name: 'Home', note: 'Istanbul miracle season' },
          { year: '2019/20', name: 'Home', note: 'Premier League title — 30 years wait' }
        ]
      },
      {
        e: '⚽', n: 'Manchester United', p: '$40–$45',
        seasons: {
          '2025/26': ['Home','Away','Third'],
          '2024/25': ['Home','Away','Third'],
          '2023/24': ['Home','Away','Third'],
          '2022/23': ['Home','Away','Third']
        },
        retro: [
          { year: '1994/95', name: 'Home', note: 'Classic Newton Heath collar kit' },
          { year: '1998/99', name: 'Home', note: 'Treble season — most iconic kit ever' },
          { year: '2007/08', name: 'Home', note: 'Ronaldo\'s Champions League season' }
        ]
      },
      {
        e: '⚽', n: 'Chelsea', p: '$40–$45',
        seasons: {
          '2025/26': ['Home','Away','Third'],
          '2024/25': ['Home','Away','Third'],
          '2023/24': ['Home','Away','Third'],
          '2022/23': ['Home','Away','Third']
        },
        retro: [
          { year: '1997/98', name: 'Home', note: 'Zola era — fan favourite' },
          { year: '2004/05', name: 'Home', note: 'Mourinho\'s first title — the Special One' },
          { year: '2011/12', name: 'Away', note: 'Champions League winners' }
        ]
      },
      {
        e: '⚽', n: 'Tottenham Hotspur', p: '$40–$45',
        seasons: {
          '2025/26': ['Home','Away','Third'],
          '2024/25': ['Home','Away','Third'],
          '2023/24': ['Home','Away','Third'],
          '2022/23': ['Home','Away','Third']
        },
        retro: [
          { year: '1960/61', name: 'Home', note: 'Double winners — Blanchflower era' },
          { year: '1984/85', name: 'Home', note: 'Hoddle & Ardiles classic' },
          { year: '2018/19', name: 'Home', note: 'Champions League final season' }
        ]
      },
      {
        e: '⚽', n: 'Newcastle United', p: '$38–$42',
        seasons: {
          '2025/26': ['Home','Away'],
          '2024/25': ['Home','Away'],
          '2023/24': ['Home','Away'],
          '2022/23': ['Home','Away']
        },
        retro: [
          { year: '1995/96', name: 'Home', note: 'Keegan\'s entertainers — classic black & white' },
          { year: '1996/97', name: 'Away', note: 'Iconic brown ale away kit' }
        ]
      },
      {
        e: '⚽', n: 'Aston Villa', p: '$38–$42',
        seasons: {
          '2025/26': ['Home','Away'],
          '2024/25': ['Home','Away'],
          '2023/24': ['Home','Away'],
          '2022/23': ['Home','Away']
        },
        retro: [
          { year: '1981/82', name: 'Home', note: 'European Cup winners' },
          { year: '1992/93', name: 'Home', note: 'Original Premier League season' }
        ]
      }
    ]
  },
  spain: {
    flag: '🇪🇸', name: 'La Liga', country: 'Spain',
    teams: [
      {
        e: '⚽', n: 'Real Madrid', p: '$42–$48',
        seasons: {
          '2025/26': ['Home','Away','Third'],
          '2024/25': ['Home','Away','Third'],
          '2023/24': ['Home','Away','Third'],
          '2022/23': ['Home','Away','Third']
        },
        retro: [
          { year: '2001/02', name: 'Home', note: 'Galácticos — Zidane, Ronaldo, Figo' },
          { year: '2011/12', name: 'Home', note: '100-point La Liga record — Mourinho era' },
          { year: '2015/16', name: 'Away', note: 'UCL winners in Milan — Ramos penalty' }
        ]
      },
      {
        e: '⚽', n: 'FC Barcelona', p: '$42–$48',
        seasons: {
          '2025/26': ['Home','Away','Third'],
          '2024/25': ['Home','Away','Third'],
          '2023/24': ['Home','Away','Third'],
          '2022/23': ['Home','Away','Third']
        },
        retro: [
          { year: '2005/06', name: 'Home', note: 'Ronaldinho era — Unicef shirt debut' },
          { year: '2008/09', name: 'Home', note: 'Pep\'s treble season — the best team ever' },
          { year: '2010/11', name: 'Away', note: 'Wembley final vs United — dark blue' }
        ]
      },
      {
        e: '⚽', n: 'Atletico Madrid', p: '$40–$45',
        seasons: {
          '2025/26': ['Home','Away','Third'],
          '2024/25': ['Home','Away','Third'],
          '2023/24': ['Home','Away','Third'],
          '2022/23': ['Home','Away','Third']
        },
        retro: [
          { year: '1995/96', name: 'Home', note: 'La Liga & Copa del Rey double' },
          { year: '2013/14', name: 'Home', note: 'La Liga title — Simeone revolution' }
        ]
      },
      {
        e: '⚽', n: 'Sevilla FC', p: '$38–$42',
        seasons: {
          '2025/26': ['Home','Away'],
          '2024/25': ['Home','Away'],
          '2023/24': ['Home','Away'],
          '2022/23': ['Home','Away']
        },
        retro: [
          { year: '2005/06', name: 'Home', note: 'First UEFA Cup win — Kanouté era' }
        ]
      },
      {
        e: '⚽', n: 'Valencia CF', p: '$38–$42',
        seasons: {
          '2025/26': ['Home','Away'],
          '2024/25': ['Home','Away'],
          '2023/24': ['Home','Away'],
          '2022/23': ['Home','Away']
        },
        retro: [
          { year: '2001/02', name: 'Home', note: 'UCL finalists — Aimar & Baraja' }
        ]
      }
    ]
  },
  france: {
    flag: '🇫🇷', name: 'Ligue 1', country: 'France',
    teams: [
      {
        e: '⚽', n: 'Paris Saint-Germain', p: '$40–$48',
        seasons: {
          '2025/26': ['Home','Away','Third'],
          '2024/25': ['Home','Away','Third'],
          '2023/24': ['Home','Away','Third'],
          '2022/23': ['Home','Away','Third']
        },
        retro: [
          { year: '1993/94', name: 'Home', note: 'Cup Winners Cup season — Ginola era' },
          { year: '2012/13', name: 'Home', note: 'QSI takeover — Ibrahimovic arrives' },
          { year: '2017/18', name: 'Home', note: 'Neymar & Mbappé debut season' }
        ]
      },
      {
        e: '⚽', n: 'Olympique Marseille', p: '$38–$44',
        seasons: {
          '2025/26': ['Home','Away','Third'],
          '2024/25': ['Home','Away','Third'],
          '2023/24': ['Home','Away'],
          '2022/23': ['Home','Away']
        },
        retro: [
          { year: '1992/93', name: 'Home', note: 'Champions League winners — Deschamps' },
          { year: '1999/00', name: 'Away', note: 'Drogba youth era' }
        ]
      },
      {
        e: '⚽', n: 'AS Monaco', p: '$38–$42',
        seasons: {
          '2025/26': ['Home','Away'],
          '2024/25': ['Home','Away'],
          '2023/24': ['Home','Away'],
          '2022/23': ['Home','Away']
        },
        retro: [
          { year: '2016/17', name: 'Home', note: 'Mbappé breakout season — UCL semis' }
        ]
      }
    ]
  },
  germany: {
    flag: '🇩🇪', name: 'Bundesliga', country: 'Germany',
    teams: [
      {
        e: '⚽', n: 'Bayern Munich', p: '$40–$46',
        seasons: {
          '2025/26': ['Home','Away','Third'],
          '2024/25': ['Home','Away','Third'],
          '2023/24': ['Home','Away','Third'],
          '2022/23': ['Home','Away','Third']
        },
        retro: [
          { year: '1999/00', name: 'Home', note: 'Elber & Scholl era' },
          { year: '2012/13', name: 'Home', note: 'Treble season — Ribéry & Robben' },
          { year: '2019/20', name: 'Away', note: 'Flick\'s dominant treble squad' }
        ]
      },
      {
        e: '⚽', n: 'Borussia Dortmund', p: '$40–$46',
        seasons: {
          '2025/26': ['Home','Away','Third'],
          '2024/25': ['Home','Away','Third'],
          '2023/24': ['Home','Away','Third'],
          '2022/23': ['Home','Away','Third']
        },
        retro: [
          { year: '1996/97', name: 'Home', note: 'Champions League winners — Möller era' },
          { year: '2011/12', name: 'Home', note: 'Klopp\'s Bundesliga back-to-back' }
        ]
      },
      {
        e: '⚽', n: 'Bayer Leverkusen', p: '$38–$42',
        seasons: {
          '2025/26': ['Home','Away'],
          '2024/25': ['Home','Away'],
          '2023/24': ['Home','Away'],
          '2022/23': ['Home','Away']
        },
        retro: [
          { year: '2023/24', name: 'Home', note: 'Unbeaten Bundesliga title — Xabi Alonso' }
        ]
      },
      {
        e: '⚽', n: 'RB Leipzig', p: '$38–$42',
        seasons: {
          '2025/26': ['Home','Away'],
          '2024/25': ['Home','Away'],
          '2023/24': ['Home','Away'],
          '2022/23': ['Home','Away']
        },
        retro: []
      }
    ]
  },
  italy: {
    flag: '🇮🇹', name: 'Serie A', country: 'Italy',
    teams: [
      {
        e: '⚽', n: 'Juventus', p: '$40–$46',
        seasons: {
          '2025/26': ['Home','Away','Third'],
          '2024/25': ['Home','Away','Third'],
          '2023/24': ['Home','Away','Third'],
          '2022/23': ['Home','Away','Third']
        },
        retro: [
          { year: '1994/95', name: 'Home', note: 'Del Piero & Vialli — Scudetto season' },
          { year: '2002/03', name: 'Home', note: 'UCL finalists — Buffon & Trezeguet' },
          { year: '2014/15', name: 'Home', note: 'Pogba & Tevez — UCL finalists' }
        ]
      },
      {
        e: '⚽', n: 'AC Milan', p: '$40–$46',
        seasons: {
          '2025/26': ['Home','Away','Third'],
          '2024/25': ['Home','Away','Third'],
          '2023/24': ['Home','Away','Third'],
          '2022/23': ['Home','Away','Third']
        },
        retro: [
          { year: '1993/94', name: 'Home', note: 'Sacchi era — Maldini & Baresi' },
          { year: '2002/03', name: 'Home', note: 'UCL winners — Shevchenko era' },
          { year: '2006/07', name: 'Away', note: 'Athens final — Kaká\'s masterclass' }
        ]
      },
      {
        e: '⚽', n: 'Inter Milan', p: '$40–$46',
        seasons: {
          '2025/26': ['Home','Away','Third'],
          '2024/25': ['Home','Away','Third'],
          '2023/24': ['Home','Away','Third'],
          '2022/23': ['Home','Away','Third']
        },
        retro: [
          { year: '2009/10', name: 'Home', note: 'Mourinho\'s treble — iconic black & blue' },
          { year: '2020/21', name: 'Home', note: 'Lukaku & Lautaro — Scudetto' }
        ]
      },
      {
        e: '⚽', n: 'AS Roma', p: '$38–$44',
        seasons: {
          '2025/26': ['Home','Away','Third'],
          '2024/25': ['Home','Away','Third'],
          '2023/24': ['Home','Away'],
          '2022/23': ['Home','Away']
        },
        retro: [
          { year: '2000/01', name: 'Home', note: 'Totti\'s Scudetto — greatest Roma kit' }
        ]
      },
      {
        e: '⚽', n: 'SSC Napoli', p: '$38–$44',
        seasons: {
          '2025/26': ['Home','Away'],
          '2024/25': ['Home','Away'],
          '2023/24': ['Home','Away'],
          '2022/23': ['Home','Away']
        },
        retro: [
          { year: '1986/87', name: 'Home', note: 'Maradona\'s first Scudetto — legendary' },
          { year: '2022/23', name: 'Home', note: 'Scudetto after 33 years — Osimhen' }
        ]
      }
    ]
  },
  portugal: {
    flag: '🇵🇹', name: 'Liga NOS', country: 'Portugal',
    teams: [
      {
        e: '⚽', n: 'SL Benfica', p: '$38–$44',
        seasons: {
          '2025/26': ['Home','Away','Third'],
          '2024/25': ['Home','Away','Third'],
          '2023/24': ['Home','Away'],
          '2022/23': ['Home','Away']
        },
        retro: [
          { year: '1961/62', name: 'Home', note: 'European Cup winners — Eusébio era' },
          { year: '2004/05', name: 'Home', note: 'Simão & Luisão — league title' }
        ]
      },
      {
        e: '⚽', n: 'FC Porto', p: '$38–$44',
        seasons: {
          '2025/26': ['Home','Away','Third'],
          '2024/25': ['Home','Away','Third'],
          '2023/24': ['Home','Away'],
          '2022/23': ['Home','Away']
        },
        retro: [
          { year: '2003/04', name: 'Home', note: 'Mourinho UCL winners — Deco & Derlei' }
        ]
      },
      {
        e: '⚽', n: 'Sporting CP', p: '$36–$42',
        seasons: {
          '2025/26': ['Home','Away'],
          '2024/25': ['Home','Away'],
          '2023/24': ['Home','Away'],
          '2022/23': ['Home','Away']
        },
        retro: [
          { year: '2020/21', name: 'Home', note: 'Liga title after 19 years' }
        ]
      }
    ]
  },
  netherlands: {
    flag: '🇳🇱', name: 'Eredivisie', country: 'Netherlands',
    teams: [
      {
        e: '⚽', n: 'Ajax', p: '$38–$44',
        seasons: {
          '2025/26': ['Home','Away','Third'],
          '2024/25': ['Home','Away','Third'],
          '2023/24': ['Home','Away'],
          '2022/23': ['Home','Away']
        },
        retro: [
          { year: '1994/95', name: 'Home', note: 'Champions League winners — Van der Sar era' },
          { year: '2018/19', name: 'Home', note: 'UCL semi-final run — De Ligt & De Jong' }
        ]
      },
      {
        e: '⚽', n: 'PSV Eindhoven', p: '$36–$42',
        seasons: {
          '2025/26': ['Home','Away'],
          '2024/25': ['Home','Away'],
          '2023/24': ['Home','Away'],
          '2022/23': ['Home','Away']
        },
        retro: [
          { year: '1987/88', name: 'Home', note: 'European Cup winners — Gullit & Van Basten' }
        ]
      },
      {
        e: '⚽', n: 'Feyenoord', p: '$36–$42',
        seasons: {
          '2025/26': ['Home','Away'],
          '2024/25': ['Home','Away'],
          '2023/24': ['Home','Away'],
          '2022/23': ['Home','Away']
        },
        retro: [
          { year: '2021/22', name: 'Home', note: 'Conference League winners' }
        ]
      }
    ]
  },
  international: {
    flag: '🌍', name: 'National Teams', country: 'International',
    teams: [
      {
        e: '⚽', n: 'Brazil', p: '$42–$48',
        seasons: {
          '2025/26': ['Home','Away'],
          '2024/25': ['Home','Away'],
          '2023/24': ['Home','Away'],
          '2022/23': ['Home','Away']
        },
        retro: [
          { year: '1970', name: 'Home', note: 'Mexico World Cup — Pelé\'s greatest team' },
          { year: '1982', name: 'Home', note: 'The most beautiful team to never win' },
          { year: '2002', name: 'Home', note: 'Ronaldo\'s redemption — R9, Ronaldinho, Rivaldo' }
        ]
      },
      {
        e: '⚽', n: 'Argentina', p: '$42–$48',
        seasons: {
          '2025/26': ['Home','Away'],
          '2024/25': ['Home','Away'],
          '2023/24': ['Home','Away'],
          '2022/23': ['Home','Away']
        },
        retro: [
          { year: '1978', name: 'Home', note: 'Kempes World Cup winners — Buenos Aires' },
          { year: '1986', name: 'Home', note: 'Maradona\'s World Cup — Hand of God' },
          { year: '2022', name: 'Home', note: 'Qatar World Cup — Messi\'s crowning glory' }
        ]
      },
      {
        e: '⚽', n: 'France', p: '$42–$48',
        seasons: {
          '2025/26': ['Home','Away'],
          '2024/25': ['Home','Away'],
          '2023/24': ['Home','Away'],
          '2022/23': ['Home','Away']
        },
        retro: [
          { year: '1998', name: 'Home', note: 'Home World Cup winners — Zidane & Henry' },
          { year: '2000', name: 'Home', note: 'Euro 2000 — back-to-back trophies' }
        ]
      },
      {
        e: '⚽', n: 'England', p: '$42–$48',
        seasons: {
          '2025/26': ['Home','Away'],
          '2024/25': ['Home','Away'],
          '2023/24': ['Home','Away'],
          '2022/23': ['Home','Away']
        },
        retro: [
          { year: '1966', name: 'Home', note: 'World Cup winners — Wembley final' },
          { year: '1990', name: 'Away', note: 'Gazza\'s tears — Italia 90' },
          { year: '1996', name: 'Home', note: 'Euro 96 — Football\'s coming home' }
        ]
      },
      {
        e: '⚽', n: 'Germany', p: '$42–$48',
        seasons: {
          '2025/26': ['Home','Away'],
          '2024/25': ['Home','Away'],
          '2023/24': ['Home','Away'],
          '2022/23': ['Home','Away']
        },
        retro: [
          { year: '1990', name: 'Home', note: 'World Cup winners — Matthaus era' },
          { year: '2014', name: 'Away', note: 'Brazil 7-1 — Götze final goal' }
        ]
      },
      {
        e: '⚽', n: 'Italy', p: '$42–$48',
        seasons: {
          '2025/26': ['Home','Away'],
          '2024/25': ['Home','Away'],
          '2023/24': ['Home','Away'],
          '2022/23': ['Home','Away']
        },
        retro: [
          { year: '1982', name: 'Home', note: 'Spain World Cup — Rossi hat-tricks' },
          { year: '2006', name: 'Away', note: 'Berlin World Cup — Zidane headbutt final' }
        ]
      },
      {
        e: '⚽', n: 'Spain', p: '$42–$48',
        seasons: {
          '2025/26': ['Home','Away'],
          '2024/25': ['Home','Away'],
          '2023/24': ['Home','Away'],
          '2022/23': ['Home','Away']
        },
        retro: [
          { year: '2010', name: 'Home', note: 'South Africa World Cup — Iniesta final goal' },
          { year: '2012', name: 'Away', note: 'Euro 2012 — 4-0 Italy — peak tiki-taka' }
        ]
      },
      {
        e: '⚽', n: 'Portugal', p: '$42–$48',
        seasons: {
          '2025/26': ['Home','Away'],
          '2024/25': ['Home','Away'],
          '2023/24': ['Home','Away'],
          '2022/23': ['Home','Away']
        },
        retro: [
          { year: '2016', name: 'Home', note: 'Euro 2016 winners — Eder\'s final goal' }
        ]
      },
      {
        e: '⚽', n: 'Netherlands', p: '$40–$46',
        seasons: {
          '2025/26': ['Home','Away'],
          '2024/25': ['Home','Away'],
          '2023/24': ['Home','Away'],
          '2022/23': ['Home','Away']
        },
        retro: [
          { year: '1988', name: 'Home', note: 'Euro 88 winners — Van Basten volley' },
          { year: '1994', name: 'Away', note: 'White away — Bergkamp & Overmars' }
        ]
      },
      {
        e: '⚽', n: 'Morocco', p: '$40–$46',
        seasons: {
          '2025/26': ['Home','Away'],
          '2024/25': ['Home','Away'],
          '2023/24': ['Home','Away'],
          '2022/23': ['Home','Away']
        },
        retro: [
          { year: '2022', name: 'Home', note: 'Qatar WC semi-finalists — historic run' }
        ]
      }
    ]
  }
};

// ─── NFL ─────────────────────────────────────────────────
const NFL_TEAMS = {
  afc: {
    name: 'AFC – American Football Conference',
    teams: [
      { e:'🏈', n:'Kansas City Chiefs', j:'Home · Away · Alternate', p:'$48–$55', pop:true,
        seasons:{'2024':'Home · Away · Alternate','2023':'Home · Away','2022':'Home · Away'},
        retro:[{year:'2019',name:'Home',note:'Mahomes first Super Bowl'},{year:'2022',name:'Home',note:'Super Bowl LVII winners'}]
      },
      { e:'🏈', n:'Buffalo Bills', j:'Home · Away · Alternate', p:'$45–$52', pop:true,
        seasons:{'2024':'Home · Away · Alternate','2023':'Home · Away','2022':'Home · Away'},
        retro:[{year:'1993',name:'Home',note:'4 consecutive Super Bowl era — Kelly & Thomas'}]
      },
      { e:'🏈', n:'Baltimore Ravens', j:'Home · Away · Alternate', p:'$45–$52', pop:true,
        seasons:{'2024':'Home · Away · Alternate','2023':'Home · Away','2022':'Home · Away'},
        retro:[{year:'2000',name:'Home',note:'Super Bowl XXXV — Ray Lewis legend'},{year:'2012',name:'Home',note:'Super Bowl XLVII — Flacco MVP'}]
      },
      { e:'🏈', n:'Miami Dolphins', j:'Home · Away · Alternate', p:'$45–$52', pop:true,
        seasons:{'2024':'Home · Away · Alternate','2023':'Home · Away','2022':'Home · Away'},
        retro:[{year:'1972',name:'Home',note:'Only perfect season in NFL history'},{year:'1984',name:'Home',note:'Marino\'s record-breaking season'}]
      },
      { e:'🏈', n:'Cincinnati Bengals', j:'Home · Away · Alternate', p:'$45–$52', pop:true,
        seasons:{'2024':'Home · Away · Alternate','2023':'Home · Away','2022':'Home · Away'},
        retro:[{year:'2021',name:'Home',note:'Burrow\'s Super Bowl run'}]
      },
      { e:'🏈', n:'New England Patriots', j:'Home · Away · Alternate', p:'$45–$52',
        seasons:{'2024':'Home · Away','2023':'Home · Away','2022':'Home · Away'},
        retro:[{year:'2001',name:'Home',note:'Brady\'s first Super Bowl'},{year:'2007',name:'Home',note:'Perfect regular season — 16-0'},{year:'2018',name:'Home',note:'Super Bowl LIII — dynasty finale'}]
      },
      { e:'🏈', n:'Pittsburgh Steelers', j:'Home · Away · Alternate', p:'$45–$52',
        seasons:{'2024':'Home · Away · Alternate','2023':'Home · Away','2022':'Home · Away'},
        retro:[{year:'1975',name:'Home',note:'Steel Curtain era — dynasty peak'},{year:'2005',name:'Home',note:'Super Bowl XL — Roethlisberger & Bus'}]
      },
      { e:'🏈', n:'Las Vegas Raiders', j:'Home · Away', p:'$45–$52',
        seasons:{'2024':'Home · Away','2023':'Home · Away','2022':'Home · Away'},
        retro:[{year:'1976',name:'Home',note:'Super Bowl XI — Stabler era'}]
      },
      { e:'🏈', n:'New York Jets', j:'Home · Away', p:'$43–$50',
        seasons:{'2024':'Home · Away','2023':'Home · Away','2022':'Home · Away'}, retro:[]
      },
      { e:'🏈', n:'Cleveland Browns', j:'Home · Away', p:'$43–$50',
        seasons:{'2024':'Home · Away','2023':'Home · Away','2022':'Home · Away'}, retro:[]
      },
      { e:'🏈', n:'Houston Texans', j:'Home · Away', p:'$43–$50',
        seasons:{'2024':'Home · Away','2023':'Home · Away','2022':'Home · Away'}, retro:[]
      },
      { e:'🏈', n:'Indianapolis Colts', j:'Home · Away', p:'$43–$50',
        seasons:{'2024':'Home · Away','2023':'Home · Away','2022':'Home · Away'},
        retro:[{year:'2006',name:'Home',note:'Peyton Manning Super Bowl XLI'}]
      },
      { e:'🏈', n:'Jacksonville Jaguars', j:'Home · Away', p:'$43–$50',
        seasons:{'2024':'Home · Away','2023':'Home · Away','2022':'Home · Away'}, retro:[]
      },
      { e:'🏈', n:'Tennessee Titans', j:'Home · Away', p:'$43–$50',
        seasons:{'2024':'Home · Away','2023':'Home · Away','2022':'Home · Away'}, retro:[]
      },
      { e:'🏈', n:'Los Angeles Chargers', j:'Home · Away', p:'$43–$50',
        seasons:{'2024':'Home · Away','2023':'Home · Away','2022':'Home · Away'}, retro:[]
      },
      { e:'🏈', n:'Denver Broncos', j:'Home · Away', p:'$43–$50',
        seasons:{'2024':'Home · Away','2023':'Home · Away','2022':'Home · Away'},
        retro:[{year:'1997',name:'Home',note:'Elway\'s first Super Bowl'},{year:'2015',name:'Home',note:'Peyton\'s last season — Super Bowl 50'}]
      }
    ]
  },
  nfc: {
    name: 'NFC – National Football Conference',
    teams: [
      { e:'🏈', n:'Dallas Cowboys', j:'Home · Away · Alternate', p:'$48–$55', pop:true,
        seasons:{'2024':'Home · Away · Alternate','2023':'Home · Away · Alternate','2022':'Home · Away · Alternate'},
        retro:[{year:'1992',name:'Home',note:'First of 3 Super Bowls — Emmitt & Aikman'},{year:'1995',name:'Home',note:'Third Super Bowl — dynasty complete'}]
      },
      { e:'🏈', n:'Philadelphia Eagles', j:'Home · Away · Alternate', p:'$45–$52', pop:true,
        seasons:{'2024':'Home · Away · Alternate','2023':'Home · Away · Alternate','2022':'Home · Away · Alternate'},
        retro:[{year:'2017',name:'Home',note:'Super Bowl LII — Foles miracle'},{year:'2022',name:'Home',note:'Super Bowl LVII run — Hurts era'}]
      },
      { e:'🏈', n:'San Francisco 49ers', j:'Home · Away · Alternate', p:'$45–$52', pop:true,
        seasons:{'2024':'Home · Away · Alternate','2023':'Home · Away · Alternate','2022':'Home · Away · Alternate'},
        retro:[{year:'1984',name:'Home',note:'Montana & Rice — dynasty begins'},{year:'1994',name:'Home',note:'Last Super Bowl — Young & Rice'}]
      },
      { e:'🏈', n:'Green Bay Packers', j:'Home · Away · Alternate', p:'$45–$52', pop:true,
        seasons:{'2024':'Home · Away · Alternate','2023':'Home · Away','2022':'Home · Away'},
        retro:[{year:'1996',name:'Home',note:'Favre\'s Super Bowl — Reggie White'},{year:'2010',name:'Home',note:'Rodgers Super Bowl XLV'}]
      },
      { e:'🏈', n:'Detroit Lions', j:'Home · Away · Alternate', p:'$45–$52',
        seasons:{'2024':'Home · Away · Alternate','2023':'Home · Away · Alternate','2022':'Home · Away'}, retro:[]
      },
      { e:'🏈', n:'Minnesota Vikings', j:'Home · Away', p:'$43–$50',
        seasons:{'2024':'Home · Away','2023':'Home · Away','2022':'Home · Away'}, retro:[]
      },
      { e:'🏈', n:'Chicago Bears', j:'Home · Away', p:'$43–$50',
        seasons:{'2024':'Home · Away','2023':'Home · Away','2022':'Home · Away'},
        retro:[{year:'1985',name:'Home',note:'The Super Bowl Shuffle — Payton & McMahon'}]
      },
      { e:'🏈', n:'New York Giants', j:'Home · Away', p:'$43–$50',
        seasons:{'2024':'Home · Away','2023':'Home · Away','2022':'Home · Away'},
        retro:[{year:'2007',name:'Away',note:'Upset of the century — Tyree helmet catch'}]
      },
      { e:'🏈', n:'Washington Commanders', j:'Home · Away', p:'$43–$50',
        seasons:{'2024':'Home · Away','2023':'Home · Away','2022':'Home · Away'}, retro:[]
      },
      { e:'🏈', n:'Tampa Bay Buccaneers', j:'Home · Away · Alternate', p:'$45–$52',
        seasons:{'2024':'Home · Away · Alternate','2023':'Home · Away','2022':'Home · Away'},
        retro:[{year:'2020',name:'Home',note:'Brady\'s Super Bowl LV — 7th ring'}]
      },
      { e:'🏈', n:'New Orleans Saints', j:'Home · Away', p:'$43–$50',
        seasons:{'2024':'Home · Away','2023':'Home · Away','2022':'Home · Away'},
        retro:[{year:'2009',name:'Home',note:'Super Bowl XLIV — Brees & Payton'}]
      },
      { e:'🏈', n:'Atlanta Falcons', j:'Home · Away', p:'$43–$50',
        seasons:{'2024':'Home · Away','2023':'Home · Away','2022':'Home · Away'}, retro:[]
      },
      { e:'🏈', n:'Carolina Panthers', j:'Home · Away', p:'$43–$50',
        seasons:{'2024':'Home · Away','2023':'Home · Away','2022':'Home · Away'}, retro:[]
      },
      { e:'🏈', n:'Los Angeles Rams', j:'Home · Away', p:'$43–$50',
        seasons:{'2024':'Home · Away','2023':'Home · Away','2022':'Home · Away'},
        retro:[{year:'2021',name:'Home',note:'Super Bowl LVI — home field victory'}]
      },
      { e:'🏈', n:'Seattle Seahawks', j:'Home · Away', p:'$43–$50',
        seasons:{'2024':'Home · Away','2023':'Home · Away','2022':'Home · Away'},
        retro:[{year:'2013',name:'Home',note:'Super Bowl XLVIII — Legion of Boom'}]
      },
      { e:'🏈', n:'Arizona Cardinals', j:'Home · Away', p:'$43–$50',
        seasons:{'2024':'Home · Away','2023':'Home · Away','2022':'Home · Away'}, retro:[]
      }
    ]
  }
};

// ─── NBA ─────────────────────────────────────────────────
const NBA_TEAMS = {
  east: {
    name: 'Eastern Conference',
    teams: [
      { e:'🏀', n:'Boston Celtics', j:'Home · Away · City Edition', p:'$42–$50', pop:true,
        seasons:{'2024/25':'Home · Away · City Ed.','2023/24':'Home · Away · City Ed.','2022/23':'Home · Away'},
        retro:[{year:'1985/86',name:'Home',note:'Bird, McHale & Parish — peak dynasty'},{year:'2007/08',name:'Home',note:'KG, Pierce & Allen — Banner 17'}]
      },
      { e:'🏀', n:'Miami Heat', j:'Home · Away · City Edition', p:'$42–$50', pop:true,
        seasons:{'2024/25':'Home · Away · City Ed.','2023/24':'Home · Away · City Ed.','2022/23':'Home · Away'},
        retro:[{year:'2005/06',name:'Home',note:'Wade & Shaq — first title'},{year:'2012/13',name:'Home',note:'LeBron, Wade & Bosh — Ray Allen corner 3'}]
      },
      { e:'🏀', n:'Chicago Bulls', j:'Home · Away · City Edition', p:'$42–$50', pop:true,
        seasons:{'2024/25':'Home · Away · City Ed.','2023/24':'Home · Away · City Ed.','2022/23':'Home · Away'},
        retro:[{year:'1991/92',name:'Home',note:'Jordan & Pippen — 2nd threepeat begins'},{year:'1995/96',name:'Home',note:'72-win season — The Last Dance'}]
      },
      { e:'🏀', n:'New York Knicks', j:'Home · Away · City Edition', p:'$42–$50', pop:true,
        seasons:{'2024/25':'Home · Away · City Ed.','2023/24':'Home · Away · City Ed.','2022/23':'Home · Away'},
        retro:[{year:'1969/70',name:'Home',note:'Walt Frazier & Willis Reed — first title'},{year:'1999/00',name:'Home',note:'Ewing era — last finals run'}]
      },
      { e:'🏀', n:'Milwaukee Bucks', j:'Home · Away · City Edition', p:'$42–$50', pop:true,
        seasons:{'2024/25':'Home · Away · City Ed.','2023/24':'Home · Away · City Ed.','2022/23':'Home · Away'},
        retro:[{year:'1970/71',name:'Home',note:'Kareem Abdul-Jabbar — first title'},{year:'2020/21',name:'Home',note:'Giannis — 50-year drought ended'}]
      },
      { e:'🏀', n:'Philadelphia 76ers', j:'Home · Away · City Edition', p:'$42–$50',
        seasons:{'2024/25':'Home · Away · City Ed.','2023/24':'Home · Away','2022/23':'Home · Away'},
        retro:[{year:'1982/83',name:'Home',note:'Dr. J & Moses Malone — Fo, Fo, Fo'},{year:'2000/01',name:'Away',note:'Iverson\'s one-man finals run'}]
      },
      { e:'🏀', n:'Brooklyn Nets', j:'Home · Away · City Edition', p:'$42–$50',
        seasons:{'2024/25':'Home · Away · City Ed.','2023/24':'Home · Away','2022/23':'Home · Away'},
        retro:[{year:'2020/21',name:'Home',note:'KD, Kyrie & Harden Big 3 era'}]
      },
      { e:'🏀', n:'Toronto Raptors', j:'Home · Away · City Edition', p:'$40–$48',
        seasons:{'2024/25':'Home · Away · City Ed.','2023/24':'Home · Away','2022/23':'Home · Away'},
        retro:[{year:'2018/19',name:'Home',note:'Kawhi\'s title — We The North'}]
      },
      { e:'🏀', n:'Cleveland Cavaliers', j:'Home · Away', p:'$40–$48',
        seasons:{'2024/25':'Home · Away','2023/24':'Home · Away','2022/23':'Home · Away'},
        retro:[{year:'2015/16',name:'Home',note:'LeBron\'s 3-1 comeback — city\'s first title'}]
      },
      { e:'🏀', n:'Indiana Pacers', j:'Home · Away', p:'$38–$46',
        seasons:{'2024/25':'Home · Away','2023/24':'Home · Away','2022/23':'Home · Away'}, retro:[]
      },
      { e:'🏀', n:'Atlanta Hawks', j:'Home · Away', p:'$38–$46',
        seasons:{'2024/25':'Home · Away','2023/24':'Home · Away','2022/23':'Home · Away'}, retro:[]
      },
      { e:'🏀', n:'Charlotte Hornets', j:'Home · Away', p:'$38–$46',
        seasons:{'2024/25':'Home · Away','2023/24':'Home · Away','2022/23':'Home · Away'},
        retro:[{year:'1992/93',name:'Home',note:'Grandmama — Larry Johnson era'}]
      },
      { e:'🏀', n:'Washington Wizards', j:'Home · Away', p:'$38–$46',
        seasons:{'2024/25':'Home · Away','2023/24':'Home · Away','2022/23':'Home · Away'}, retro:[]
      },
      { e:'🏀', n:'Orlando Magic', j:'Home · Away', p:'$38–$46',
        seasons:{'2024/25':'Home · Away','2023/24':'Home · Away','2022/23':'Home · Away'},
        retro:[{year:'1994/95',name:'Home',note:'Penny & Shaq — finals run'}]
      },
      { e:'🏀', n:'Detroit Pistons', j:'Home · Away', p:'$38–$46',
        seasons:{'2024/25':'Home · Away','2023/24':'Home · Away','2022/23':'Home · Away'},
        retro:[{year:'2003/04',name:'Home',note:'Bad Boys 2.0 — Billups & Wallace beat Lakers'}]
      }
    ]
  },
  west: {
    name: 'Western Conference',
    teams: [
      { e:'🏀', n:'Los Angeles Lakers', j:'Home · Away · City Edition', p:'$45–$52', pop:true,
        seasons:{'2024/25':'Home · Away · City Ed.','2023/24':'Home · Away · City Ed.','2022/23':'Home · Away'},
        retro:[{year:'1984/85',name:'Home',note:'Showtime Lakers — Magic & Kareem'},{year:'1999/00',name:'Home',note:'Shaq & Kobe — first of threepeat'},{year:'2009/10',name:'Home',note:'Kobe\'s last title — 5th ring'}]
      },
      { e:'🏀', n:'Golden State Warriors', j:'Home · Away · City Edition', p:'$45–$52', pop:true,
        seasons:{'2024/25':'Home · Away · City Ed.','2023/24':'Home · Away · City Ed.','2022/23':'Home · Away'},
        retro:[{year:'2014/15',name:'Home',note:'Curry\'s first title — splash brothers era'},{year:'2015/16',name:'Home',note:'73-win season — record-breakers'}]
      },
      { e:'🏀', n:'Denver Nuggets', j:'Home · Away · City Edition', p:'$42–$50', pop:true,
        seasons:{'2024/25':'Home · Away · City Ed.','2023/24':'Home · Away · City Ed.','2022/23':'Home · Away'},
        retro:[{year:'2022/23',name:'Home',note:'Jokic\'s title — first in franchise history'}]
      },
      { e:'🏀', n:'Dallas Mavericks', j:'Home · Away · City Edition', p:'$42–$50', pop:true,
        seasons:{'2024/25':'Home · Away · City Ed.','2023/24':'Home · Away · City Ed.','2022/23':'Home · Away'},
        retro:[{year:'2010/11',name:'Home',note:'Dirk\'s one-handed title — beat the Heat'},{year:'2023/24',name:'Home',note:'Luka & Kyrie finals run'}]
      },
      { e:'🏀', n:'Phoenix Suns', j:'Home · Away · City Edition', p:'$42–$50',
        seasons:{'2024/25':'Home · Away · City Ed.','2023/24':'Home · Away','2022/23':'Home · Away'},
        retro:[{year:'1992/93',name:'Home',note:'Barkley MVP — finals run vs Chicago'}]
      },
      { e:'🏀', n:'LA Clippers', j:'Home · Away · City Edition', p:'$42–$50',
        seasons:{'2024/25':'Home · Away · City Ed.','2023/24':'Home · Away','2022/23':'Home · Away'}, retro:[]
      },
      { e:'🏀', n:'Oklahoma City Thunder', j:'Home · Away', p:'$40–$48',
        seasons:{'2024/25':'Home · Away','2023/24':'Home · Away','2022/23':'Home · Away'},
        retro:[{year:'2011/12',name:'Home',note:'Durant & Westbrook — finals run'}]
      },
      { e:'🏀', n:'Memphis Grizzlies', j:'Home · Away', p:'$40–$48',
        seasons:{'2024/25':'Home · Away','2023/24':'Home · Away','2022/23':'Home · Away'}, retro:[]
      },
      { e:'🏀', n:'San Antonio Spurs', j:'Home · Away', p:'$38–$46',
        seasons:{'2024/25':'Home · Away','2023/24':'Home · Away','2022/23':'Home · Away'},
        retro:[{year:'1998/99',name:'Home',note:'Duncan\'s first title — lockout season'},{year:'2013/14',name:'Home',note:'Beautiful basketball — Parker & Ginobili finale'}]
      },
      { e:'🏀', n:'Minnesota Timberwolves', j:'Home · Away', p:'$38–$46',
        seasons:{'2024/25':'Home · Away','2023/24':'Home · Away','2022/23':'Home · Away'}, retro:[]
      },
      { e:'🏀', n:'Sacramento Kings', j:'Home · Away', p:'$38–$46',
        seasons:{'2024/25':'Home · Away','2023/24':'Home · Away','2022/23':'Home · Away'},
        retro:[{year:'2001/02',name:'Home',note:'C-Webb, Bibby & Peja — peak Kings'}]
      },
      { e:'🏀', n:'Portland Trail Blazers', j:'Home · Away', p:'$38–$46',
        seasons:{'2024/25':'Home · Away','2023/24':'Home · Away','2022/23':'Home · Away'},
        retro:[{year:'1976/77',name:'Home',note:'Bill Walton — only championship'}]
      },
      { e:'🏀', n:'Utah Jazz', j:'Home · Away', p:'$38–$46',
        seasons:{'2024/25':'Home · Away','2023/24':'Home · Away','2022/23':'Home · Away'},
        retro:[{year:'1996/97',name:'Home',note:'Stockton & Malone — two finals runs'}]
      },
      { e:'🏀', n:'New Orleans Pelicans', j:'Home · Away', p:'$38–$46',
        seasons:{'2024/25':'Home · Away','2023/24':'Home · Away','2022/23':'Home · Away'}, retro:[]
      },
      { e:'🏀', n:'Houston Rockets', j:'Home · Away', p:'$38–$46',
        seasons:{'2024/25':'Home · Away','2023/24':'Home · Away','2022/23':'Home · Away'},
        retro:[{year:'1993/94',name:'Home',note:'Hakeem\'s Dream — first title'},{year:'2017/18',name:'Home',note:'Harden MVP — 65 wins'}]
      }
    ]
  }
};
