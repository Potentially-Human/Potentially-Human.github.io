window.addEventListener("load", (event) => {

    words2 = ['of', 'to', 'in', 'is', 'on', 'by', 'it', 'or', 'be', 'at', 'as', 'an', 'we', 'us', 'if', 'my', 'do', 'no', 'he', 'up', 'so', 'pm', 'am', 'me', 're', 'go', 'cd', 'tv', 'pc'];
    words3 = ['the', 'and', 'for', 'you', 'not', 'are', 'all', 'new', 'was', 'can', 'has', 'but', 'our', 'one', 'may', 'out', 'use', 'any', 'see', 'his', 'who', 'web', 'now', 'get', 'how', 'its', 'top', 'had', 'day', 'two', 'buy', 'her', 'add', 'jan', 'she', 'set', 'map', 'way', 'off', 'did', 'car', 'dvd', 'own', 'end', 'him', 'per', 'big', 'law', 'art', 'usa', 'old', 'non', 'why', 'low', 'man', 'job', 'too', 'men', 'box', 'gay', 'air', 'yes', 'hot', 'say', 'dec', 'san', 'tax', 'got', 'let', 'act', 'red', 'key', 'few', 'age', 'oct', 'pay', 'war', 'nov', 'fax', 'yet', 'sun', 'rss', 'run', 'net', 'put', 'try', 'log', 'faq', 'fun', 'feb', 'sep', 'lot', 'ask', 'due', 'mar', 'pro', 'url', 'aug', 'ago', 'apr', 'via', 'bad', 'far', 'jul', 'jun', 'oil', 'bit', 'bay', 'bar', 'dog', 'eur', 'pdf', 'usr', 'mon', 'com', 'gas', 'six', 'pre', 'sat', 'zip', 'bid', 'fri', 'wed', 'inn', 'ltd', 'los', 'inc', 'win', 'bed', 'tue', 'thu', 'sea', 'cut', 'tel', 'kit', 'boy', 'est', 'son', 'mac', 'iii', 'gmt', 'max', 'xml', 'bin', 'van', 'ads', 'pop', 'int', 'hit', 'eye', 'usb', 'php', 'etc', 'msn', 'fee', 'las', 'min', 'aid', 'fat', 'saw', 'pst', 'tom', 'sub', 'led', 'fan', 'ten', 'cat', 'die', 'pet', 'guy', 'dev', 'cup', 'vol', 'lee', 'bob', 'fit', 'met', 'www', 'ice', 'llc', 'sec', 'bus', 'bag', 'ibm', 'nor', 'bug', 'mid', 'jim', 'del', 'joe', 'cds', 'lab', 'cvs', 'des', 'lcd', 'ave', 'pic', 'tag', 'mix', 'vhs', 'fix', 'ray', 'dry', 'spa', 'con', 'ups', 'var', 'won', 'doc', 'mom', 'row', 'usd', 'eat', 'aim', 'les', 'ann', 'tip', 'ski', 'dan', 'fly', 'hey', 'bbc', 'tea', 'avg', 'sky', 'rom', 'toy', 'src', 'hip', 'dot', 'hiv', 'pda', 'dsl', 'zum', 'dna', 'tim', 'sql', 'don', 'gps', 'acc', 'cap', 'ink', 'pin', 'raw', 'gnu', 'ben', 'aol', 'hat', 'lib', 'utc', 'der', 'cam', 'wet', 'ram', 'fox', 'arm', 'pub', 'hop', 'gun', 'sam', 'pdt', 'ref', 'kid', 'pan', 'psp', 'und', 'nfl', 'iso', 'sum', 'oak', 'vat', 'sir', 'kim', 'spy', 'res', 'sit', 'wow', 'que', 'fig', 'tab', 'css', 'qty', 'bio', 'pcs', 'von', 'sci', 'edt', 'sin', 'ing', 'ftp', 'med', 'leg', 'abc', 'jay', 'gap', 'biz', 'rob', 'era', 'gcc', 'asp', 'jet', 'par', 'mad', 'ken', 'exp', 'pen', 'joy', 'cpu', 'ran', 'jon', 'ill', 'lbs', 'lay', 'lol', 'mph', 'bet', 'def', 'nba', 'epa', 'ron', 'org', 'dad', 'pat', 'reg', 'nsw', 'ear', 'pci', 'tie', 'ian', 'mod', 'bmw', 'cst', 'ceo', 'rep', 'mit', 'sri', 'toe', 'api', 'urw', 'lan', 'sms', 'nec', 'den', 'aud', 'lie', 'crm', 'amp', 'usc', 'amd', 'eve', 'pad', 'rod', 'hrs', 'sad', 'cal', 'pot', 'img', 'rpm', 'pee', 'tvs', 'egg', 'mhz', 'lat', 'sur', 'rev', 'nyc', 'jam', 'rio', 'arc', 'mrs', 'app', 'roy', 'ion', 'fed', 'ban', 'zus', 'ent', 'odd', 'ext', 'amy', 'phd', 'cry', 'zoo', 'aka', 'tee', 'cad', 'tcp', 'dir', 'val', 'ghz', 'hub', 'eng', 'ace', 'sue', 'gbp', 'chi', 'rfc', 'seo', 'isp', 'ins', 'jpg', 'ssl', 'opt', 'flu', 'mlb', 'rap', 'tin', 'oem', 'rat', 'dos', 'plc', 'msg', 'cod', 'gen', 'nhl', 'gel', 'aaa', 'std', 'vid', 'fda', 'thy', 'tri', 'pal', 'mat', 'ted', 'gym', 'kde', 'tan', 'alt', 'pie', 'cbs', 'bow', 'hon', 'atm', 'cms', 'vic', 'pos', 'nav', 'cab', 'ist', 'dam', 'cnn', 'lil', 'das', 'sys', 'icq', 'dns', 'pty', 'sox', 'tub', 'ash', 'ali', 'tft', 'jvc', 'cgi', 'por', 'mem', 'tap', 'vii', 'bee', 'cfr', 'pmc', 'mba', 'pit', 'mag', 'gsm', 'ddr', 'rec', 'ton', 'gif', 'gpl', 'irc', 'bra', 'phi', 'mls', 'cow', 'cet', 'ppc', 'div', 'ons', 'avi', 'ide', 'rpg', 'tgp', 'leo', 'diy', 'arg', 'geo', 'doe', 'ati', 'wal', 'abs', 'sim', 'rna', 'rid', 'rip', 'buf', 'sol', 'eco', 'bat', 'lip', 'sap', 'ict', 'sku', 'pts', 'rrp', 'ooo', 'nhs', 'aye', 'ste', 'col', 'une', 'tex', 'cia', 'dod', 'neo', 'dig', 'nat', 'dpi', 'gis', 'loc', 'gui', 'ver', 'rim', 'zen', 'dis', 'kay', 'ser', 'fwd', 'aus', 'hwy', 'nam', 'gdp', 'pig', 'lit', 'una', 'ada', 'yrs', 'foo', 'gba', 'sig', 'duo', 'fog', 'str', 'vip', 'yea', 'fur', 'tar', 'soc', 'rug', 'dem', 'wav', 'ham', 'fbi', 'tba', 'sie', 'eva', 'rca', 'gst', 'bon', 'mas', 'len', 'kai', 'dom', 'obj', 'jar', 'cos', 'pac', 'erp', 'vpn', 'fcc', 'eds', 'wax', 'nut', 'irs', 'bye', 'cdt', 'ana', 'eau', 'mil', 'lap', 'sao', 'gmc', 'asn', 'ppm', 'ant', 'apt', 'inf', 'eos', 'vcr', 'uri', 'gem', 'psi', 'pct', 'qld', 'pas', 'gig', 'sas', 'liz', 'ccd', 'llp', 'boc', 'tmp', 'ate', 'fin', 'mud', 'uni', 'ala', 'dip', 'nbc', 'mpg', 'cas', 'cio', 'dow', 'upc', 'dui', 'yen', 'lid', 'pvc', 'enb', 'til', 'wto', 'hay', 'isa', 'pix', 'mic', 'ata', 'nil', 'pam', 'cop', 'dim', 'mai', 'abu', 'mtv', 'leu', 'lou', 'pgp', 'sip', 'dee', 'mae', 'mel', 'sic', 'seq', 'wma', 'cir', 'acm', 'ips', 'dsc', 'mia', 'wan', 'gtk', 'ira', 'sen', 'dts', 'pod', 'dat', 'soa', 'cho', 'wit', 'bbs', 'ind', 'qui', 'mug', 'ids'];
    words4 = ['that', 'this', 'with', 'from', 'your', 'have', 'more', 'will', 'home', 'page', 'free', 'time', 'they', 'site', 'what', 'news', 'only', 'when', 'here', 'also', 'help', 'view', 'been', 'were', 'some', 'like', 'than', 'find', 'date', 'back', 'list', 'name', 'just', 'over', 'year', 'into', 'next', 'used', 'work', 'last', 'most', 'data', 'make', 'them', 'post', 'city', 'such', 'best', 'then', 'good', 'well', 'info', 'high', 'each', 'very', 'book', 'read', 'need', 'many', 'user', 'said', 'does', 'mail', 'full', 'life', 'know', 'days', 'part', 'real', 'item', 'ebay', 'must', 'made', 'line', 'send', 'type', 'take', 'area', 'want', 'long', 'code', 'show', 'even', 'much', 'sign', 'file', 'link', 'open', 'case', 'same', 'both', 'game', 'care', 'down', 'size', 'shop', 'text', 'rate', 'form', 'love', 'john', 'main', 'call', 'save', 'york', 'card', 'jobs', 'food', 'sale', 'teen', 'room', 'join', 'west', 'look', 'left', 'team', 'week', 'note', 'live', 'june', 'plan', 'cost', 'july', 'test', 'come', 'cart', 'play', 'less', 'blog', 'park', 'side', 'give', 'sell', 'body', 'east', 'club', 'road', 'gift', 'hard', 'four', 'blue', 'easy', 'star', 'hand', 'keep', 'baby', 'term', 'film', 'head', 'cell', 'self', 'away', 'once', 'sure', 'cars', 'tell', 'able', 'gold', 'arts', 'past', 'five', 'upon', 'says', 'land', 'done', 'ever', 'word', 'bill', 'talk', 'kids', 'true', 'else', 'mark', 'rock', 'tips', 'plus', 'auto', 'edit', 'fast', 'fact', 'unit', 'tech', 'meet', 'feel', 'bank', 'risk', 'town', 'girl', 'toys', 'golf', 'loan', 'wide', 'sort', 'half', 'step', 'none', 'paul', 'lake', 'sony', 'fire', 'chat', 'html', 'loss', 'face', 'base', 'near', 'stay', 'turn', 'mean', 'king', 'copy', 'drug', 'pics', 'cash', 'seen', 'port', 'stop', 'soon', 'held', 'mind', 'lost', 'tour', 'menu', 'hope', 'wish', 'role', 'came', 'fine', 'hour', 'bush', 'huge', 'kind', 'move', 'logo', 'nice', 'sent', 'band', 'lead', 'went', 'mode', 'fund', 'male', 'took', 'song', 'cnet', 'late', 'fall', 'idea', 'tool', 'hill', 'maps', 'deal', 'hold', 'safe', 'feed', 'hall', 'anti', 'ship', 'paid', 'hair', 'tree', 'thus', 'wall', 'wine', 'vote', 'ways', 'rule', 'told', 'feet', 'door', 'cool', 'asia', 'uses', 'java', 'pass', 'fees', 'skin', 'prev', 'mary', 'ring', 'iraq', 'boys', 'deep', 'rest', 'pool', 'mini', 'fish', 'pack', 'born', 'race', 'debt', 'core', 'sets', 'wood', 'rent', 'dark', 'host', 'isbn', 'fair', 'ohio', 'gets', 'dead', 'mike', 'trip', 'poor', 'eyes', 'farm', 'lord', 'hear', 'goes', 'wife', 'hits', 'zone', 'jack', 'flat', 'flow', 'path', 'laws', 'skip', 'diet', 'army', 'gear', 'lots', 'firm', 'jump', 'dvds', 'ball', 'goal', 'sold', 'wind', 'palm', 'pain', 'xbox', 'oral', 'ford', 'edge', 'root', 'pink', 'shot', 'cold', 'foot', 'mass', 'heat', 'wild', 'miss', 'task', 'soft', 'fuel', 'walk', 'wait', 'rose', 'pick', 'load', 'tags', 'guys', 'drop', 'rich', 'ipod', 'seem', 'hire', 'gave', 'ones', 'rank', 'kong', 'died', 'inch', 'snow', 'camp', 'fill', 'gone', 'fort', 'gene', 'disc', 'boat', 'icon', 'ends', 'cast', 'felt', 'soul', 'aids', 'flag', 'atom', 'iron', 'void', 'disk', 'desk', 'dave', 'hong', 'vice', 'duty', 'bear', 'gain', 'lack', 'iowa', 'knew', 'zoom', 'blow', 'clip', 'wire', 'tape', 'spam', 'acid', 'cent', 'null', 'zero', 'roll', 'bath', 'font', 'beta', 'fail', 'jazz', 'bags', 'wear', 'rare', 'bars', 'dual', 'rise', 'bird', 'lady', 'fans', 'dell', 'seat', 'bids', 'toll', 'cape', 'mine', 'whom', 'math', 'dogs', 'moon', 'fear', 'wars', 'kept', 'beat', 'arms', 'utah', 'hide', 'slow', 'faqs', 'nine', 'eric', 'spot', 'grow', 'rain', 'onto', 'diff', 'bass', 'hole', 'pets', 'ride', 'pair', 'runs', 'yeah', 'evil', 'euro', 'peak', 'salt', 'bell', 'jeff', 'lane', 'kill', 'ages', 'plug', 'cook', 'perl', 'bike', 'lose', 'seek', 'tony', 'kits', 'soil', 'matt', 'exit', 'iran', 'keys', 'wave', 'holy', 'acts', 'mesh', 'dean', 'poll', 'unix', 'bond', 'jean', 'visa', 'pure', 'lens', 'draw', 'warm', 'babe', 'crew', 'legs', 'rear', 'node', 'lock', 'mile', 'mens', 'bowl', 'tank', 'navy', 'dish', 'adam', 'slot', 'gray', 'demo', 'hate', 'rice', 'loop', 'gary', 'vary', 'rome', 'arab', 'milk', 'boot', 'push', 'misc', 'alan', 'dear', 'beer', 'jose', 'jane', 'earn', 'twin', 'dont', 'bits', 'suit', 'chip', 'char', 'echo', 'grid', 'voip', 'pull', 'nasa', 'nick', 'plot', 'pump', 'anne', 'exam', 'ryan', 'beds', 'grey', 'bold', 'scan', 'aged', 'bulk', 'pmid', 'cute', 'para', 'seed', 'peer', 'meat', 'alex', 'bang', 'bone', 'bugs', 'gate', 'tone', 'busy', 'neck', 'wing', 'tiny', 'rail', 'tube', 'belt', 'luck', 'dial', 'gang', 'cake', 'semi', 'andy', 'cafe', 'till', 'shoe', 'sand', 'seal', 'lies', 'pipe', 'deck', 'thin', 'sick', 'dose', 'lets', 'cats', 'greg', 'folk', 'okay', 'hist', 'lift', 'lisa', 'mall', 'fell', 'yard', 'sean', 'pour', 'tion', 'dust', 'wiki', 'kent', 'adds', 'ward', 'roof', 'kiss', 'rush', 'mpeg', 'yoga', 'lamp', 'rico', 'phil', 'http', 'glad', 'wins', 'rack', 'boss', 'ross', 'anna', 'solo', 'tall', 'pdas', 'nova', 'wake', 'drum', 'foto', 'ease', 'tabs', 'pine', 'tend', 'gulf', 'rick', 'hunt', 'thai', 'fred', 'mill', 'burn', 'labs', 'sole', 'laid', 'clay', 'weak', 'blvd', 'wise', 'odds', 'marc', 'sons', 'leaf', 'cuba', 'silk', 'kate', 'wolf', 'fits', 'kick', 'meal', 'hurt', 'slip', 'cuts', 'mars', 'caps', 'pill', 'meta', 'mint', 'spin', 'wash', 'aims', 'ieee', 'corp', 'soap', 'axis', 'guns', 'hero', 'punk', 'duke', 'pace', 'wage', 'dawn', 'carl', 'coat', 'rica', 'doll', 'peru', 'nike', 'reed', 'mice', 'temp', 'vast', 'wrap', 'mood', 'quiz', 'beam', 'tops', 'shut', 'ncaa', 'thou', 'mask', 'coal', 'lion', 'goto', 'neil', 'beef', 'hats', 'surf', 'hook', 'cord', 'crop', 'lite', 'sing', 'tons', 'hang', 'hood', 'fame', 'eggs', 'ruby', 'mins', 'stem', 'drew', 'tune', 'corn', 'puts', 'grew', 'trek', 'ties', 'brad', 'jury', 'tail', 'lawn', 'soup', 'byte', 'nose', 'oclc', 'juan', 'thru', 'jews', 'trim', 'espn', 'quit', 'lung', 'todd', 'doug', 'sees', 'bull', 'cole', 'mart', 'tale', 'lynn', 'docs', 'coin', 'fake', 'cure', 'arch', 'hdtv', 'asin', 'bomb', 'harm', 'deer', 'oven', 'noon', 'cams', 'joel', 'proc', 'mate', 'chef', 'isle', 'slim', 'luke', 'comp', 'pete', 'spec', 'penn', 'midi', 'tied', 'dale', 'oils', 'sept', 'unto', 'pays', 'lang', 'stud', 'fold', 'phys', 'pole', 'mega', 'bend', 'moms', 'glen', 'lips', 'pond', 'tire', 'chad', 'josh', 'drag', 'ripe', 'rely', 'scsi', 'nuts', 'nail', 'span', 'joke', 'univ', 'pads', 'inns', 'cups', 'foam', 'poem', 'asks', 'bean', 'bias', 'swim', 'nano', 'loud', 'rats', 'stat', 'cruz', 'bios', 'thee', 'ruth', 'pray', 'pope', 'jeep', 'bare', 'hung', 'mono', 'tile', 'apps', 'ciao', 'knee', 'prep', 'chem', 'pros', 'cant', 'sara', 'joan', 'duck', 'dive', 'fiji', 'audi', 'raid', 'volt', 'dirt', 'acer', 'dist', 'geek', 'sink', 'grip', 'watt', 'pins', 'reno', 'polo', 'horn', 'prot', 'frog', 'logs', 'snap', 'jpeg', 'swap', 'flip', 'buzz', 'nuke', 'boom', 'calm', 'fork', 'troy', 'zope', 'gmbh', 'sims', 'tray', 'sage', 'suse', 'cave', 'wool', 'eyed', 'grab', 'oops', 'trap', 'fool', 'karl', 'dies', 'jail', 'ipaq', 'comm', 'lace', 'ugly', 'hart', 'ment', 'biol', 'rows', 'treo', 'gods', 'poly', 'ears', 'fist', 'mere', 'cons', 'taxi', 'worn', 'shaw', 'expo', 'deny', 'bali', 'judy', 'trio', 'cube', 'rugs', 'fate', 'gras', 'oval', 'soma', 'href', 'benz', 'wifi', 'tier', 'earl', 'guam', 'cite', 'mess', 'rope', 'dump', 'hose', 'pubs', 'mild', 'clan', 'sync', 'mesa', 'hull', 'shed', 'memo', 'tide', 'funk', 'reel', 'bind', 'rand', 'buck', 'usgs', 'acre', 'lows', 'aqua', 'chen', 'emma', 'pest', 'reef', 'chan', 'beth', 'jill', 'sofa', 'dans', 'viii', 'tent', 'dept', 'hack', 'dare', 'hawk', 'lamb', 'junk', 'lucy', 'hans', 'poet', 'epic', 'sake', 'sans', 'lean', 'dude', 'luis', 'alto', 'gore', 'cult', 'dash', 'cage', 'divx', 'hugh', 'jake', 'eval', 'ping', 'flux', 'muze', 'oman', 'rage', 'adsl', 'prix', 'avon', 'rays', 'walt', 'acne', 'libs', 'undo', 'dana', 'halo', 'gays', 'exec', 'maui', 'vids', 'yale', 'doom', 'owen', 'bite', 'issn', 'myth', 'weed', 'oecd', 'dice', 'quad', 'dock', 'mods', 'hint', 'msie', 'buys', 'pork', 'barn', 'fare', 'asus', 'bald', 'fuji', 'leon', 'mold', 'dame', 'herb', 'alot', 'idle', 'cove', 'casa', 'eden', 'incl', 'reid', 'flex', 'rosa', 'hash', 'lazy', 'carb', 'pens', 'worm', 'deaf', 'mats', 'blah', 'mime', 'feof', 'usda', 'keen', 'peas', 'urls', 'owns', 'zinc', 'guru', 'levy', 'grad', 'bras', 'kyle', 'pale', 'gaps', 'tear', 'nest', 'nato', 'gale', 'stan', 'idol', 'moss', 'cork', 'mali', 'dome', 'heel', 'yang', 'dumb', 'feat', 'ntsc', 'usps', 'conf', 'glow', 'oaks', 'erik', 'paso', 'norm', 'ware', 'jade', 'foul', 'keno', 'seas', 'pose', 'mrna', 'goat', 'sail', 'sega', 'cdna', 'bolt', 'gage', 'urge', 'smtp', 'kurt', 'neon', 'ours', 'lone', 'cope', 'lime', 'kirk', 'bool', 'spas', 'jets', 'intl', 'yarn', 'knit', 'pike', 'hugo', 'gzip', 'ctrl', 'bent', 'laos', 'pigs'];

    words = [[], [], words2, words3, words4]

    function charIsAlpha(char) {
        code = char.charCodeAt(0);
        return (code > 64 && code < 91) || (code > 96 && code < 123) || code == 92;
    }

    function isAlpha(text) {
        if (text.includes("'")) {
            return true; 
        }
        var punctuation_removed = removeSymbols(text, " ").trim().split(" ");
        if (punctuation_removed.length == 1) {
            for (var i = 0; i < punctuation_removed[0].length; i++) {
                if (!charIsAlpha(punctuation_removed[0][i])) {
                    return false;
                }
            }
            return true;
        } else {
            individual_isAlpha = []
            for (var i = 0; i < punctuation_removed.length; i++) {
                individual_isAlpha.push(isAlpha(punctuation_removed[0]));
            }
            return individual_isAlpha;
        }
    }

    function removeSymbols(text, replaceWith = "") {
        const symbolsToRemove = [",", ".", "/", "?", ">", "<", '"', ";", "|", ";", ":", "]", "[", "=", "+", "-", "_", "(", ")", "*", "&", "^", "%", "$", "#", "@", "!", "`", "~"]
        removedText = text;
        for (var i = 0; i < symbolsToRemove.length; i++)  {
            removedText = removedText.replaceAll(symbolsToRemove[i], replaceWith); 
        }
        return removedText;
    }

    function removedSymbolsWithList(text) {
        var lastCharIsAlpha = false; 
        var removedText = [];
        for (var i = 0; i < text.length; i++)  {
            if (charIsAlpha(text[i])) {
                if (lastCharIsAlpha) {
                    removedText[removedText.length - 1] += text[i];
                } else {
                    removedText.push(text[i]);
                    lastCharIsAlpha = true; 
                }
            } else {
                lastCharIsAlpha = false; 
                removedText.push(text[i]);
            }
        }
        return removedText;
    }

    function isAWord(text) {
        if (removeSymbols(text.toLowerCase()) == "\\") {
            return false; 
        }
        if (removeSymbols(text.toLowerCase()).length <= 4) {
            return (words[removeSymbols(text).length].includes(removeSymbols(text)));
        }
        return true; 
    }

    function stringToBeAdded(text, couldHaveSymbols = false) {
        if (text.includes("\\")) {
            return "} " + text + " \\text{";
        }
        if (removeSymbols(text.toLowerCase()).length <= 4) {
            if (!isAWord(text.toLowerCase())) {
                return "} " + text + " \\text{"
            } else {
                return text;
            }
        } else if (!isAlpha(removeSymbols(text).toLowerCase())) {
            return "} " + text + " \\text{"
        }
         else {
            return text;
        }
    }

    function modifytext(text) {
        var mathString = text;
        var mathStringUpdated = ""
        var mathStringArray = mathString.split('\n'); 
        var mathStringSubarray = []
        for (var i = 0; i < mathStringArray.length; i++) {
            mathStringSubarray.push(mathStringArray[i].split(" "));
        }
        for (var i = 0; i < mathStringArray.length; i++) {
            mathStringUpdated += "\\(\\text{";
            for (var j = 0; j < mathStringSubarray[i].length; j++) {
                var mathStringCleaned = removeSymbols(mathStringSubarray[i][j], " ").trim().split(" ");
                if (mathStringCleaned.length == 1) {
                    mathStringUpdated += stringToBeAdded(mathStringSubarray[i][j]) + " ";
                } else {
                    var mathStringsssCleaned = removedSymbolsWithList(mathStringSubarray[i][j]);
                    for (var k = 0; k < mathStringsssCleaned.length; k++) {
                        var nextSymbolTextMode = false; 
                        if (charIsAlpha(mathStringsssCleaned[k])) {
                            mathStringUpdated += stringToBeAdded(mathStringsssCleaned[k]);
                            if (isAWord(mathStringsssCleaned[k])) {
                                nextSymbolTextMode = true; 
                            }
                        } else {
                            if (nextSymbolTextMode) {
                                mathStringUpdated += mathStringsssCleaned[k];
                                nextSymbolTextMode = false; 
                            } else {
                                if (k < mathStringsssCleaned.length - 1) {
                                    if (isAWord(mathStringsssCleaned[k + 1])) {
                                        const symbolsToRemove = [",", ".", "/", "?", ">", "<", '"', ";", "|", ";", ":", "]", "[", "=", "+", "-", "_", "(", ")", "*", "&", "^", "%", "$", "#", "@", "!", "`", "~"]
                                        if (symbolsToRemove.includes(mathStringsssCleaned[k])) {
                                            mathStringUpdated += mathStringsssCleaned[k];
                                        } else {
                                            mathStringUpdated += "}" + mathStringsssCleaned[k] + "\\text{";
                                        }
                                    } else {
                                        mathStringUpdated += "}" + mathStringsssCleaned[k] + "\\text{";
                                    }
                                } else {
                                    mathStringUpdated += "}" + mathStringsssCleaned[k] + "\\text{";
                                }
                            }
                        }
                    }
                    mathStringUpdated += " ";
                }
            }
            mathStringUpdated += "} \\)<br>";
        }
        mathStringUpdated = mathStringUpdated.replaceAll("\\text{}", "").replaceAll("\\text{ }", "").replaceAll("\\ {", "\\{").replaceAll("\\ }", "\\}"); 
        console.log(mathStringUpdated)
        return mathStringUpdated;
    }

    function updateMath() {
        mathString = document.getElementById("editor-textarea").value;

        if (mathString == "") {
            document.getElementById("editor-displayarea").innerHTML = "\\(\\text{The math will appear here.}\\)<br>";
            MathJax.typeset();
            return ;
        }

        mathStringUpdated = ""
        mathStringArray = mathString.split('\n'); 
        for (var i = 0; i < mathStringArray.length; i++) {
            mathStringUpdated += "\\(\\text{" + mathStringArray[i] + "}\\)<br>";
        }
        mathStringUpdated.replaceAll(" ", "\\ space")
        document.getElementById("editor-displayarea").innerHTML = modifytext(mathString);
        MathJax.typeset();
    }

    document.getElementById("editor-textarea").addEventListener("input", (e) => {
        updateMath();
    }, false);

    document.getElementById("editor-textarea").addEventListener("change", (e) => {
        updateMath();
    }, false);

    updateMath();
});