const FOOTBALL = {
  england:{flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',name:'Premier League',country:'England',teams:[
    {e:'⚽',n:'Manchester City',j:'Home · Away · Third',p:'$40–$45'},{e:'⚽',n:'Arsenal',j:'Home · Away · Third',p:'$40–$45'},
    {e:'⚽',n:'Liverpool',j:'Home · Away · Third',p:'$40–$45'},{e:'⚽',n:'Manchester United',j:'Home · Away · Third',p:'$40–$45'},
    {e:'⚽',n:'Chelsea',j:'Home · Away · Third',p:'$40–$45'},{e:'⚽',n:'Tottenham Hotspur',j:'Home · Away · Third',p:'$40–$45'},
    {e:'⚽',n:'Newcastle United',j:'Home · Away',p:'$38–$42'},{e:'⚽',n:'Aston Villa',j:'Home · Away',p:'$38–$42'},
    {e:'⚽',n:'West Ham United',j:'Home · Away',p:'$38–$42'},{e:'⚽',n:'Everton',j:'Home · Away',p:'$38–$42'},
    {e:'⚽',n:'Leicester City',j:'Home · Away',p:'$38–$42'},{e:'⚽',n:'Brighton & Hove Albion',j:'Home · Away',p:'$38–$42'}
  ]},
  spain:{flag:'🇪🇸',name:'La Liga',country:'Spain',teams:[
    {e:'⚽',n:'Real Madrid',j:'Home · Away · Third',p:'$42–$48'},{e:'⚽',n:'FC Barcelona',j:'Home · Away · Third',p:'$42–$48'},
    {e:'⚽',n:'Atletico Madrid',j:'Home · Away · Third',p:'$40–$45'},{e:'⚽',n:'Sevilla FC',j:'Home · Away',p:'$38–$42'},
    {e:'⚽',n:'Real Betis',j:'Home · Away',p:'$38–$42'},{e:'⚽',n:'Valencia CF',j:'Home · Away',p:'$38–$42'},
    {e:'⚽',n:'Real Sociedad',j:'Home · Away',p:'$38–$42'},{e:'⚽',n:'Athletic Bilbao',j:'Home · Away',p:'$38–$42'}
  ]},
  france:{flag:'🇫🇷',name:'Ligue 1',country:'France',teams:[
    {e:'⚽',n:'Paris Saint-Germain',j:'Home · Away · Third',p:'$40–$48'},{e:'⚽',n:'Olympique Marseille',j:'Home · Away · Third',p:'$38–$44'},
    {e:'⚽',n:'Olympique Lyonnais',j:'Home · Away',p:'$38–$42'},{e:'⚽',n:'AS Monaco',j:'Home · Away',p:'$38–$42'},
    {e:'⚽',n:'Lille OSC',j:'Home · Away',p:'$36–$40'},{e:'⚽',n:'RC Lens',j:'Home · Away',p:'$36–$40'},
    {e:'⚽',n:'Stade Rennais',j:'Home · Away',p:'$36–$40'},{e:'⚽',n:'OGC Nice',j:'Home · Away',p:'$36–$40'}
  ]},
  germany:{flag:'🇩🇪',name:'Bundesliga',country:'Germany',teams:[
    {e:'⚽',n:'Bayern Munich',j:'Home · Away · Third',p:'$40–$46'},{e:'⚽',n:'Borussia Dortmund',j:'Home · Away · Third',p:'$40–$46'},
    {e:'⚽',n:'Bayer Leverkusen',j:'Home · Away',p:'$38–$42'},{e:'⚽',n:'RB Leipzig',j:'Home · Away',p:'$38–$42'},
    {e:'⚽',n:'Borussia Mönchengladbach',j:'Home · Away',p:'$36–$40'},{e:'⚽',n:'Eintracht Frankfurt',j:'Home · Away',p:'$36–$40'},
    {e:'⚽',n:'VfB Stuttgart',j:'Home · Away',p:'$36–$40'},{e:'⚽',n:'Werder Bremen',j:'Home · Away',p:'$36–$40'}
  ]},
  italy:{flag:'🇮🇹',name:'Serie A',country:'Italy',teams:[
    {e:'⚽',n:'Juventus',j:'Home · Away · Third',p:'$40–$46'},{e:'⚽',n:'AC Milan',j:'Home · Away · Third',p:'$40–$46'},
    {e:'⚽',n:'Inter Milan',j:'Home · Away · Third',p:'$40–$46'},{e:'⚽',n:'AS Roma',j:'Home · Away · Third',p:'$38–$44'},
    {e:'⚽',n:'SSC Napoli',j:'Home · Away',p:'$38–$44'},{e:'⚽',n:'SS Lazio',j:'Home · Away',p:'$36–$42'},
    {e:'⚽',n:'Atalanta BC',j:'Home · Away',p:'$36–$40'},{e:'⚽',n:'ACF Fiorentina',j:'Home · Away',p:'$36–$40'}
  ]},
  portugal:{flag:'🇵🇹',name:'Liga NOS',country:'Portugal',teams:[
    {e:'⚽',n:'SL Benfica',j:'Home · Away · Third',p:'$38–$44'},{e:'⚽',n:'FC Porto',j:'Home · Away · Third',p:'$38–$44'},
    {e:'⚽',n:'Sporting CP',j:'Home · Away',p:'$36–$42'},{e:'⚽',n:'SC Braga',j:'Home · Away',p:'$34–$38'}
  ]},
  netherlands:{flag:'🇳🇱',name:'Eredivisie',country:'Netherlands',teams:[
    {e:'⚽',n:'Ajax',j:'Home · Away · Third',p:'$38–$44'},{e:'⚽',n:'PSV Eindhoven',j:'Home · Away',p:'$36–$42'},
    {e:'⚽',n:'Feyenoord',j:'Home · Away',p:'$36–$42'},{e:'⚽',n:'AZ Alkmaar',j:'Home · Away',p:'$34–$38'}
  ]},
  international:{flag:'🌍',name:'National Teams',country:'International',teams:[
    {e:'⚽',n:'Brazil',j:'Home · Away',p:'$42–$48'},{e:'⚽',n:'Argentina',j:'Home · Away',p:'$42–$48'},
    {e:'⚽',n:'France',j:'Home · Away',p:'$42–$48'},{e:'⚽',n:'England',j:'Home · Away',p:'$42–$48'},
    {e:'⚽',n:'Germany',j:'Home · Away',p:'$42–$48'},{e:'⚽',n:'Spain',j:'Home · Away',p:'$42–$48'},
    {e:'⚽',n:'Portugal',j:'Home · Away',p:'$42–$48'},{e:'⚽',n:'Italy',j:'Home · Away',p:'$42–$48'},
    {e:'⚽',n:'Netherlands',j:'Home · Away',p:'$40–$46'},{e:'⚽',n:'Belgium',j:'Home · Away',p:'$40–$46'},
    {e:'⚽',n:'Morocco',j:'Home · Away',p:'$40–$46'},{e:'⚽',n:'Senegal',j:'Home · Away',p:'$40–$46'}
  ]}
};

const NFL_TEAMS = {
  afc:{name:'AFC – American Football Conference',teams:[
    {e:'🏈',n:'Kansas City Chiefs',j:'Home · Away · Alternate',p:'$48–$55',pop:true},
    {e:'🏈',n:'Buffalo Bills',j:'Home · Away · Alternate',p:'$45–$52',pop:true},
    {e:'🏈',n:'Baltimore Ravens',j:'Home · Away · Alternate',p:'$45–$52',pop:true},
    {e:'🏈',n:'Miami Dolphins',j:'Home · Away · Alternate',p:'$45–$52',pop:true},
    {e:'🏈',n:'Cincinnati Bengals',j:'Home · Away · Alternate',p:'$45–$52',pop:true},
    {e:'🏈',n:'New England Patriots',j:'Home · Away · Alternate',p:'$45–$52'},
    {e:'🏈',n:'New York Jets',j:'Home · Away',p:'$43–$50'},
    {e:'🏈',n:'Cleveland Browns',j:'Home · Away',p:'$43–$50'},
    {e:'🏈',n:'Pittsburgh Steelers',j:'Home · Away · Alternate',p:'$45–$52'},
    {e:'🏈',n:'Houston Texans',j:'Home · Away',p:'$43–$50'},
    {e:'🏈',n:'Indianapolis Colts',j:'Home · Away',p:'$43–$50'},
    {e:'🏈',n:'Jacksonville Jaguars',j:'Home · Away',p:'$43–$50'},
    {e:'🏈',n:'Tennessee Titans',j:'Home · Away',p:'$43–$50'},
    {e:'🏈',n:'Las Vegas Raiders',j:'Home · Away',p:'$45–$52'},
    {e:'🏈',n:'Los Angeles Chargers',j:'Home · Away',p:'$43–$50'},
    {e:'🏈',n:'Denver Broncos',j:'Home · Away',p:'$43–$50'}
  ]},
  nfc:{name:'NFC – National Football Conference',teams:[
    {e:'🏈',n:'Dallas Cowboys',j:'Home · Away · Alternate',p:'$48–$55',pop:true},
    {e:'🏈',n:'Philadelphia Eagles',j:'Home · Away · Alternate',p:'$45–$52',pop:true},
    {e:'🏈',n:'San Francisco 49ers',j:'Home · Away · Alternate',p:'$45–$52',pop:true},
    {e:'🏈',n:'Green Bay Packers',j:'Home · Away · Alternate',p:'$45–$52',pop:true},
    {e:'🏈',n:'Seattle Seahawks',j:'Home · Away',p:'$43–$50'},
    {e:'🏈',n:'Los Angeles Rams',j:'Home · Away',p:'$43–$50'},
    {e:'🏈',n:'Arizona Cardinals',j:'Home · Away',p:'$43–$50'},
    {e:'🏈',n:'New York Giants',j:'Home · Away',p:'$43–$50'},
    {e:'🏈',n:'Washington Commanders',j:'Home · Away',p:'$43–$50'},
    {e:'🏈',n:'Chicago Bears',j:'Home · Away',p:'$43–$50'},
    {e:'🏈',n:'Detroit Lions',j:'Home · Away · Alternate',p:'$45–$52'},
    {e:'🏈',n:'Minnesota Vikings',j:'Home · Away',p:'$43–$50'},
    {e:'🏈',n:'New Orleans Saints',j:'Home · Away',p:'$43–$50'},
    {e:'🏈',n:'Atlanta Falcons',j:'Home · Away',p:'$43–$50'},
    {e:'🏈',n:'Carolina Panthers',j:'Home · Away',p:'$43–$50'},
    {e:'🏈',n:'Tampa Bay Buccaneers',j:'Home · Away · Alternate',p:'$45–$52'}
  ]}
};

const NBA_TEAMS = {
  east:{name:'Eastern Conference',teams:[
    {e:'🏀',n:'Boston Celtics',j:'Home · Away · City Edition',p:'$42–$50',pop:true},
    {e:'🏀',n:'Miami Heat',j:'Home · Away · City Edition',p:'$42–$50',pop:true},
    {e:'🏀',n:'Milwaukee Bucks',j:'Home · Away · City Edition',p:'$42–$50',pop:true},
    {e:'🏀',n:'Philadelphia 76ers',j:'Home · Away · City Edition',p:'$42–$50'},
    {e:'🏀',n:'Chicago Bulls',j:'Home · Away · City Edition',p:'$42–$50',pop:true},
    {e:'🏀',n:'New York Knicks',j:'Home · Away · City Edition',p:'$42–$50',pop:true},
    {e:'🏀',n:'Brooklyn Nets',j:'Home · Away · City Edition',p:'$42–$50'},
    {e:'🏀',n:'Toronto Raptors',j:'Home · Away · City Edition',p:'$40–$48'},
    {e:'🏀',n:'Cleveland Cavaliers',j:'Home · Away',p:'$40–$48'},
    {e:'🏀',n:'Indiana Pacers',j:'Home · Away',p:'$38–$46'},
    {e:'🏀',n:'Atlanta Hawks',j:'Home · Away',p:'$38–$46'},
    {e:'🏀',n:'Charlotte Hornets',j:'Home · Away',p:'$38–$46'},
    {e:'🏀',n:'Washington Wizards',j:'Home · Away',p:'$38–$46'},
    {e:'🏀',n:'Orlando Magic',j:'Home · Away',p:'$38–$46'},
    {e:'🏀',n:'Detroit Pistons',j:'Home · Away',p:'$38–$46'}
  ]},
  west:{name:'Western Conference',teams:[
    {e:'🏀',n:'Los Angeles Lakers',j:'Home · Away · City Edition',p:'$45–$52',pop:true},
    {e:'🏀',n:'Golden State Warriors',j:'Home · Away · City Edition',p:'$45–$52',pop:true},
    {e:'🏀',n:'Denver Nuggets',j:'Home · Away · City Edition',p:'$42–$50',pop:true},
    {e:'🏀',n:'Dallas Mavericks',j:'Home · Away · City Edition',p:'$42–$50',pop:true},
    {e:'🏀',n:'Phoenix Suns',j:'Home · Away · City Edition',p:'$42–$50'},
    {e:'🏀',n:'LA Clippers',j:'Home · Away · City Edition',p:'$42–$50'},
    {e:'🏀',n:'Oklahoma City Thunder',j:'Home · Away',p:'$40–$48'},
    {e:'🏀',n:'Memphis Grizzlies',j:'Home · Away',p:'$40–$48'},
    {e:'🏀',n:'New Orleans Pelicans',j:'Home · Away',p:'$38–$46'},
    {e:'🏀',n:'Minnesota Timberwolves',j:'Home · Away',p:'$38–$46'},
    {e:'🏀',n:'Sacramento Kings',j:'Home · Away',p:'$38–$46'},
    {e:'🏀',n:'Portland Trail Blazers',j:'Home · Away',p:'$38–$46'},
    {e:'🏀',n:'Utah Jazz',j:'Home · Away',p:'$38–$46'},
    {e:'🏀',n:'San Antonio Spurs',j:'Home · Away',p:'$38–$46'},
    {e:'🏀',n:'Houston Rockets',j:'Home · Away',p:'$38–$46'}
  ]}
};
