var tracker_ua_base = (function() {
  var y = "Samsung"
    , n = "Sharp"
    , d = "Sony Ericsson"
    , t = "Motorola"
    , b = "LG"
    , m = "Huawei"
    , z = "HTC"
    , f = "Coolpad"
    , g = "Asus"
    , B = "Acer";
  var x = " based device";
  var C = {
      SAMSUNG: {
          "GT-S3370C": [y, "Corby 3G"],
          "GT-S3650": [y, "Corby"],
          "GT-S3653": [y, "Corby"],
          "GT-S3850": [y, "Corby II"],
          "GT-S5230": [y, "Star"],
          "GT-S5230W": [y, "Star"],
          "GT-S5233": [y, "Star"],
          "GT-S5260": [y, "Star II"],
          "GT-S5560": [y, "Marvel"],
          "GT-S5620": [y, "Monte"],
          "GT-S7550": [y, "Blue Earth"],
          "GT-S8000": [y, "Jet"],
          "GT-S8003": [y, "Jet"],
          "SGH-F480": [y, "Tocco"],
          "SGH-T528g": [y, "Straight Talk"],
          "GT-B3410": [y, "Star Qwerty"],
          "GT-B5310": [y, "Corby Pro"],
          "GT-B7722": [y, "Star Duos"],
          "GT-C6712": [y, "Star II Duos"]
      }
  };
  var e = {
      SAMSUNG: {
          "GT- S5250": [y, "Wave 525"],
          "GT-S5250": [y, "Wave 525"],
          "GT-S5253": [y, "Wave 525"],
          "GT-S5330": [y, "Wave 533"],
          "GT-S5380": [y, "Wave Y"],
          "GT-S5380D": [y, "Wave Y"],
          "GT-S5380K": [y, "Wave Y"],
          "GT-S5750E": [y, "Wave 575"],
          "GT-S5753E": [y, "Wave 575"],
          "GT-S7230B": [y, "Wave 723"],
          "GT-S7230E": [y, "Wave 723"],
          "GT-S7233E": [y, "Wave 723"],
          "GT-S7250": [y, "Wave M"],
          "GT-S7250D": [y, "Wave M"],
          "GT-S8500": [y, "Wave"],
          "GT-S8500C": [y, "Wave"],
          "GT-S8500R": [y, "Wave"],
          "GT-S8500T": [y, "Wave"],
          "GT-S8530": [y, "Wave II"],
          "GT-S8600": [y, "Wave 3"],
          "SHW-M410": [y, "Wave 3"]
      }
  };
  var A = {
      "GT-B7300": [y, "Omnia Lite"],
      "GT-B7610": [y, "Omnia Pro"],
      "GT-i8000": [y, "Omnia 2"],
      "GT-I8000": [y, "Omnia 2"],
      "GT-I8000U": [y, "Omnia 2"],
      M1i: [d, "M1i Aspen"]
  };
  var q = {
      Android: [null, null],
      "google sdk": [null, null],
      sdk: [null, null],
      generic: [null, null],
      "generic x86": [null, null],
      "amd brazos": ["AMD", "Fusionbased device"],
      "ODROID-A": ["Hardkernel", "ODROID-A developer tablet", "tablet"],
      "youwave custom": ["Youwave", "Android on PC", "desktop"],
      "ASUS Transformer TF300T": ["Asus", "Transformer Pad 300", "tablet"],
      "ASUS Transformer Pad TF300T": ["Asus", "Transformer Pad 300", "tablet"],
      "ASUS Transformer Pad TF300TG": ["Asus", "Transformer Pad 300", "tablet"],
      "ASUS Transformer Pad TF700T": ["Asus", "Transformer Pad Infinity 700", "tablet"],
      "ASUS Transformer Pad TF700K": ["Asus", "Transformer Pad Infinity 700", "tablet"],
      "ASUS Transformer TF700K": ["Asus", "Transformer Pad Infinity 700", "tablet"],
      PadFone: ["Asus", "Padfone", "tablet"],
      "OMS TTD": ["Asus", "Eee Pc T10"],
      "ASUS T20": ["Asus", "Eee Pc T20"],
      ETBW11AA: ["Asus", "Tough"],
      "Dell Aero": ["Dell", "Aero"],
      "Dell M01M": ["Dell", "Mini 5", "tablet"],
      "Dell Streak": ["Dell", "Streak", "tablet"],
      "001DL": ["Dell", "Streak", "tablet"],
      "101DL": ["Dell", "Streak Pro", "tablet"],
      GS01: ["Dell", "Streak Pro", "tablet"],
      "Dell Streak Pro": ["Dell", "Streak Pro", "tablet"],
      streak7: ["Dell", "Streak 7", "tablet"],
      "Dell Streak 7": ["Dell", "Streak 7", "tablet"],
      "Dell Streak 10 Pro": ["Dell", "Streak 10 Pro", "tablet"],
      "Dell V04B": ["Dell", "Streak V04B", "tablet"],
      "Dell Venue": ["Dell", "Venue"],
      "Dell XCD35": ["Dell", "XCD35"],
      XCD35: ["Dell", "XCD35"],
      "Google Ion": ["Google", "Ion"],
      "Nexus One": ["Google", "Nexus One"],
      NexusOne: ["Google", "Nexus One"],
      "HTC Nexus One": ["Google", "Nexus One"],
      "Nexus S": ["Google", "Nexus S"],
      "Google Nexus S": ["Google", "Nexus S"],
      "Nexus S 4G": ["Google", "Nexus S 4G"],
      "Dooderbutt-4.0.3-v1": ["Google", "Nexus S 4G"],
      "Nexus 7": ["Google", "Nexus 7", "tablet"],
      Touchpad: ["HP", "TouchPad", "tablet"],
      "HP Touchpad": ["HP", "TouchPad", "tablet"],
      "cm tenderloin": ["HP", "TouchPad", "tablet"],
      "aokp tenderloin": ["HP", "TouchPad", "tablet"],
      "Huawei MediaPad": ["Huawei", "MediaPad", "tablet"],
      "HUAWEI MediaPad": ["Huawei", "MediaPad", "tablet"],
      "Huawei S7-312u": ["Huawei", "MediaPad", "tablet"],
      "MediaPad 10 FHD": ["Huawei", "MediaPad", "tablet"],
      "Huawei C8500": ["Huawei", "C8500"],
      "Huawei C8500S": ["Huawei", "C8500"],
      "Huawei C8600": ["Huawei", "C8600"],
      "Huawei C8650": ["Huawei", "C8650"],
      "Huawei C8650+": ["Huawei", "C8650"],
      "Huawei C8800": ["Huawei", "IDEOS X5"],
      "Huawei C8810": ["Huawei", "Ascend G300"],
      "Huawei C8812": ["Huawei", "Ascend C8812"],
      "Huawei C8812E": ["Huawei", "Ascend C8812"],
      "Huawei C8825D": ["Huawei", "Ascend C8825D"],
      "Huawei C8860E": ["Huawei", "Honor"],
      "Huawei M835": ["Huawei", "M835"],
      "Huawei M860": ["Huawei", "Ascend"],
      "Huawei M921": ["Huawei", "M921"],
      "Huawei S8520": ["Huawei", "S8520"],
      "Huawei S8600": ["Huawei", "S8600"],
      "Huawei T8300": ["Huawei", "T8300"],
      "Huawei T8600": ["Huawei", "T8600"],
      "Huawei T8830": ["Huawei", "T8830"],
      T8830: ["Huawei", "T8830"],
      T8620: ["Huawei", "T8620"],
      "Huawei T8828": ["Huawei", "T8828"],
      "Huawei U8220": ["Huawei", "U8220"],
      "Huawei u8500": ["Huawei", "IDEOS X2"],
      "Huawei U8815": ["Huawei", "Ascend G300"],
      "Huawei U8825D": ["Huawei", "Ascend G330D"],
      "Huawei U8850": ["Huawei", "Vision"],
      "Huawei U8652": ["Huawei", "Sonic"],
      "Huawei U8800-51": ["Huawei", "IDEOS X5"],
      "Huawei U8818": ["Huawei", "Ascend G300"],
      "Huawei U9000": ["Huawei", "Ascend X"],
      "Huawei IDEOS U8500": ["Huawei", "IDEOS X2"],
      "Huawei IDEOS U8650": ["Huawei", "Sonic"],
      "Huawei IDEOS X3": ["Huawei", "IDEOS X3"],
      "Huawei Ideos X5": ["Huawei", "IDEOS X5"],
      "Huawei Ideos X5 1.12.9(ret4rt)": ["Huawei", "IDEOS X5"],
      "Huawei SONIC": ["Huawei", "Sonic"],
      "Huawei 8100-9": ["Huawei", "U8100"],
      FUSIONideos: ["Huawei", "IDEOS"],
      "Gnappo Ideos": ["Huawei", "IDEOS"],
      Ideos: ["Huawei", "IDEOS"],
      "IDEOS X5": ["Huawei", "IDEOS X5"],
      "Ideos S7": ["Huawei", "IDEOS S7", "tablet"],
      "IDEOS S7": ["Huawei", "IDEOS S7", "tablet"],
      "IDEOS S7 Slim": ["Huawei", "IDEOS S7", "tablet"],
      "Huawei S7": ["Huawei", "IDEOS S7", "tablet"],
      SONIC: ["Huawei", "Sonic"],
      "Kyivstar Aqua": ["Huawei", "Sonic"],
      "Lucky Ultra Sonic U8650": ["Huawei", "Sonic"],
      "Turkcell T20": ["Huawei", "Sonic"],
      "MTC 950": ["Huawei", "U8160"],
      "MTC 955": ["Huawei", "Sonic"],
      "MTC Evo": ["Huawei", "C8500"],
      "MTC Android": ["Huawei", "U8110"],
      S31HW: ["Huawei", "Pocket WiFi S"],
      S41HW: ["Huawei", "Pocket WiFi S II"],
      "007HW": ["Huawei", "Vision"],
      UM840: ["Huawei", "Evolution"],
      M860: ["Huawei", "Ascend"],
      M865: ["Huawei", "Ascend II"],
      M886: ["Huawei", "Glory"],
      C8150: ["Huawei", "IDEOS"],
      c8500: ["Huawei", "C8500"],
      C8500: ["Huawei", "C8500"],
      C8500S: ["Huawei", "C8500"],
      C8600: ["Huawei", "C8600"],
      c8650: ["Huawei", "C8650"],
      C8650: ["Huawei", "C8650"],
      c8800: ["Huawei", "C8800"],
      C8800: ["Huawei", "C8800"],
      c8810: ["Huawei", "Ascend G300C"],
      C8812: ["Huawei", "Ascend C8812"],
      S8600: ["Huawei", "S8600"],
      U8100: ["Huawei", "U8100"],
      U8110: ["Huawei", "U8110"],
      u8120: ["Huawei", "U8120"],
      U8120: ["Huawei", "U8120"],
      U8180: ["Huawei", "IDEOS X1"],
      U8220: ["Huawei", "Pulse"],
      U8300: ["Huawei", "U8300"],
      U8350: ["Huawei", "Boulder"],
      U8150: ["Huawei", "IDEOS"],
      U8160: ["Huawei", "U8160"],
      U8500: ["Huawei", "IDEOS X2"],
      "U8500 HiQQ": ["Huawei", "U8500 HiQQ Edition"],
      U8510: ["Huawei", "IDEOS X3"],
      u8650: ["Huawei", "Sonic"],
      U8650: ["Huawei", "Sonic"],
      "U8650-1": ["Huawei", "Sonic"],
      U8660: ["Huawei", "Sonic"],
      u8800: ["Huawei", "IDEOS X5"],
      U8800: ["Huawei", "IDEOS X5"],
      "U8800+": ["Huawei", "IDEOS X5"],
      U8800X: ["Huawei", "IDEOS X5"],
      U8800pro: ["Huawei", "IDEOS X5 Pro"],
      U8800PRO: ["Huawei", "IDEOS X5 Pro"],
      U8800Pro: ["Huawei", "IDEOS X5 Pro"],
      u8800pro: ["Huawei", "IDEOS X5 Pro"],
      "U8800 Pro": ["Huawei", "IDEOS X5 Pro"],
      U8818: ["Huawei", "Ascend G300"],
      U8850: ["Huawei", "Vision"],
      u8860: ["Huawei", "Honor"],
      U8860: ["Huawei", "Honor"],
      U9000: ["Huawei", "Ascend X"],
      U9200: ["Huawei", "Ascend P1"],
      "U9200-1": ["Huawei", "Ascend P1"],
      U9500: ["Huawei", "Ascend D1"],
      U9501L: ["Huawei", "Ascend D LTE"],
      U9510: ["Huawei", "Ascend D quad"],
      U9510E: ["Huawei", "Ascend D quad"],
      Comet: ["Huawei", "Comet"],
      GS02: ["Huawei", "Honor"],
      GS03: ["Huawei", "Ascend P1"],
      "DroniX-0.5": ["Huawei", "U8180"],
      "MTS-SP101": ["Huawei", "C8511"],
      TSP21: ["Huawei", "U8110"],
      M8: ["Meizu", "M8"],
      M9: ["Meizu", "M9"],
      M040: ["Meizu", "M040"],
      "M9-unlocked": ["Meizu", "M9"],
      "meizu m9": ["Meizu", "M9"],
      "MEIZU M9": ["Meizu", "M9"],
      "MEIZU MX": ["Meizu", "MX"],
      M030: ["Meizu", "MX M030"],
      M031: ["Meizu", "MX M031"],
      M032: ["Meizu", "MX M032"],
      X903: ["Oppo", "Find Me X903"],
      X905: ["Oppo", "Find 3 X905"],
      R805: ["Oppo", "R805"],
      R801: ["Oppo", "R801"],
      R811: ["Oppo", "R811"],
      X909: ["Oppo", "X909"],
      OPPOR801: ["Oppo", "R801"],
      OPPOX905: ["Oppo", "Find 3 X905"],
      OPPOX907: ["Oppo", "Find 3 X907"],
      X907: ["Oppo", "Find 3 X907"],
      X9015: ["Oppo", "Find X9015"],
      OPPOX9017: ["Oppo", "Finder X9017"],
      OPPOU701: ["Oppo", "OPPOU701"],
      OPPOR807: ["Oppo", "Real R807"],
      OPPOR805: ["Oppo", "Real R805"],
      R807: ["Oppo", "Real R807"],
      OPPOT703: ["Oppo", "T703"],
      "GT-S7568": ["Samsung", "S7568"],
      "WellcoM-A99": ["WellcoM", "A99"],
      N12: ["Window", "N12", "tablet"],
      N12R: ["Window", "N12R", "tablet"],
      N50: ["Window", "N50", "tablet"],
      N50DT: ["Window", "N50DT", "tablet"],
      N50GT: ["Window", "N50GT", "tablet"],
      "N50GT A": ["Window", "N50GT-A", "tablet"],
      N70: ["Window", "N70", "tablet"],
      "N70 DUAL CORE": ["Window", "N70 Dual Core", "tablet"],
      N80: ["Window", "N80", "tablet"],
      N90: ["Window", "N90", "tablet"],
      "N90 DUAL CORE2 V12": ["Window", "N90 Dual Core", "tablet"],
      "MI-ONE": ["Xiaomi", "MI-ONE"],
      "MI-ONE C1": ["Xiaomi", "MI-ONE C1"],
      "MI-ONE Plus": ["Xiaomi", "MI-ONE Plus"],
      "MI 1S": ["Xiaomi", "MI-ONE Plus"],
      "MI 1SC": ["Xiaomi", "MI-ONE 1SC"],
      "mione plus": ["Xiaomi", "MI-ONE Plus"],
      "MI-TWO": ["Xiaomi", "MI-TWO"],
      "MI 2": ["Xiaomi", "MI-TWO"],
      "MI 2S": ["Xiaomi", "MI-TWO Plus"],
      "MI 2SC": ["Xiaomi", "MI-TWO Plus"],
      "ZTE Libra": ["ZTE", "Libra"],
      "ZTE-T T9": ["ZTE", "Light Tab T9", "tablet"],
      V9: ["ZTE", "Light Tab V9", "tablet"],
      "V9e+": ["ZTE", "Light Tab 2", "tablet"],
      V9A: ["ZTE", "Light Tab 2", "tablet"],
      "Light Tab 2W": ["ZTE", "Light Tab 2", "tablet"],
      "Light Tab 2": ["ZTE", "Light Tab 2", "tablet"],
      V9C: ["ZTE", "Light Tab 3", "tablet"],
      V55: ["ZTE", "Optik", "tablet"],
      Acqua: ["ZTE", "Acqua"],
      Blade: ["ZTE", "Blade"],
      "Blade-V880": ["ZTE", "Blade"],
      "ZTE-U V880": ["ZTE", "Blade"],
      "Blade-opda": ["ZTE", "Blade"],
      "ZTE-BLADE": ["ZTE", "Blade"],
      "ZTE Blade": ["ZTE", "Blade"],
      "ZTE V880": ["ZTE", "Blade"],
      "ZTE-U(V)880+": ["ZTE", "Blade"],
      V880: ["ZTE", "Blade"],
      a5: ["ZTE", "Blade"],
      Blade2: ["ZTE", "Blade 2"],
      "Blade S": ["ZTE", "Blade S"],
      X500: ["ZTE", "Score"],
      "ZTE-X500": ["ZTE", "Score"],
      Skate: ["ZTE", "Skate"],
      "ZTE Skate": ["ZTE", "Skate"],
      "ZTE-Skate": ["ZTE", "Skate"],
      "ZTE-SKATE": ["ZTE", "Skate"],
      "ZTE-V960": ["ZTE", "Skate"],
      "ZTE-U V960": ["ZTE", "Skate"],
      "ZTE Racer": ["ZTE", "Racer"],
      "ZTE-RACER": ["ZTE", "Racer"],
      "MTC 916": ["ZTE", "Racer"],
      Racer: ["ZTE", "Racer"],
      RacerII: ["ZTE", "Racer 2"],
      RACERII: ["ZTE", "Racer 2"],
      "ZTE Roamer": ["ZTE", "Roamer"],
      N860: ["ZTE", "Warp"],
      N880: ["ZTE", "Blade"],
      "i-mobile i691": ["i-Mobile", "i691"],
      "i-mobile i695": ["i-Mobile", "i695"],
      "i-mobile i858": ["i-Mobile", "i858"],
      "i-mobile 3G 8500": ["i-Mobile", "3G 8500"],
      "i-mobile I-Note": ["i-Mobile", "i-Note", "tablet"],
      "Optimus Boston": ["Optimus", "Boston"],
      "Optimus San Francisco": ["Optimus", "San Francisco"],
      "Optimus Monte Carlo": ["Optimus", "Monte Carlo"],
      "Orange Boston": ["Orange", "Boston"],
      "Orange Monte Carlo": ["Orange", "Monte Carlo"],
      "San Francisco": ["Orange", "San Francisco"],
      "San Francisco for Orange": ["Orange", "San Francisco"],
      "Orange San Francisco": ["Orange", "San Francisco"],
      MOVE: ["T-Mobile", "MOVE"],
      "T-Mobile G1": ["T-Mobile", "G1"],
      "T-Mobile G2": ["T-Mobile", "G2"],
      "T-Mobile G2 Touch": ["T-Mobile", "G2"],
      "LG-P999": ["T-Mobile", "G2x"],
      "LG-E739": ["T-Mobile", "myTouch"],
      "T-Mobile myTouch 3G": ["T-Mobile", "myTouch 3G"],
      "T-Mobile myTouch 3G Slide": ["T-Mobile", "myTouch 3G Slide"],
      "T-Mobile Espresso": ["T-Mobile", "myTouch 3G Slide"],
      "HTC myTouch 3G Slide": ["T-Mobile", "myTouch 3G Slide"],
      "T-Mobile myTouch 4G": ["T-Mobile", "myTouch 4G"],
      "HTC Glacier": ["T-Mobile", "myTouch 4G"],
      "HTC Panache": ["T-Mobile", "myTouch 4G"],
      myTouch4G: ["T-Mobile", "myTouch 4G"],
      "My Touch 4G": ["T-Mobile", "myTouch 4G"],
      "HTC Mytouch 4G": ["T-Mobile", "myTouch 4G"],
      "HTC My Touch 4G": ["T-Mobile", "myTouch 4G"],
      "HTC mytouch4g": ["T-Mobile", "myTouch 4G"],
      "HTC myTouch 4G Slide": ["T-Mobile", "myTouch 4G Slide"],
      "myTouch 4G Slide": ["T-Mobile", "myTouch 4G Slide"],
      "T-Mobile myTouch Q": ["T-Mobile", "myTouch Q"],
      "LG-C800": ["T-Mobile", "myTouch Q"],
      "Pulse Mini": ["T-Mobile", "Pulse Mini"],
      "Vodafone 845": ["Vodafone", "845 Nova"],
      "Vodafone 858": ["Vodafone", "858 Smart"],
      "Vodafone 945": ["Vodafone", "945"],
      "Vodafone Smart II": ["Vodafone", "Smart II"],
      SmartTab10: ["Vodafone", "SmartTab 10", "tablet"],
      "SCH-N719": ["Samsung", "Galaxy Note II"],
      "Coolpad 8190": ["Coolpad", "8190"],
      U705T: ["Oppo", "Ulike2"],
      "Coolpad 8020+": ["Coolpad", "8020"],
      "Huawei Y310-5000": ["Huawei", "Y310"],
      "GT-S7572": ["Samsung", "Galaxy Trend Duos II"],
      "Lenovo A278t": ["Lenovo", "A278t"],
      "Lenovo A690": ["Lenovo", "A690"],
      "GT-I8262D": ["Samsung", "LePhone I8262D"],
      "Lenovo A278t": ["Lenovo", "A278t"],
      "MI 2C": ["Xiaomi", "MI-TWO"],
      "Coolpad 8070": ["Coolpad", "8070"],
      R813T: ["Oppo", "R813T"],
      "ZTE U930": ["ZTE", "U930"],
      "Lenovo A360": ["Lenovo", "LePhone A360"],
      "SCH-N719": ["Samsung", "Galaxy Note II"],
      "Coolpad 8010": ["Coolpad", "8010"],
      "LENOVO-Lenovo-A288t": ["Lenovo", "A288t"],
      U701T: ["Oppo", "U701T"],
      ZTEU795: ["Coolpad", "U795"],
      "Haier-HT-I617": ["Haier", "I617"],
      ZTEU880s: ["ZTE", "T-U880"],
      "GT-S6352": ["Samsung", "GT-S6352"],
      "GT-S7568": ["Samsung", "GT-S7568"],
      "K-Touch T619+": ["K-Touch", "T619"],
      "MI 2A": ["Xiaomi", "MI-TWO A"],
      "GT-N7108": ["Samsung", "Galaxy Note II"],
      "K-Touch T621": ["K-Touch", "T621"],
      "LENOVO-Lenovo-A298t": ["Lenovo", "A298"],
      "Coolpad 8150": ["Coolpad", "8150"],
      "5860S": ["Coolpad", "5860"],
      ZTEU807: ["ZTE", "U807"],
      "SCH-I739": ["Samsung", "SCH-I739"],
      "SCH-I829": ["Samsung", "SCH-I829"],
      "HS-E830": ["Hisense", "E830"],
      "HS-E920": ["Hisense", "E920"],
      "Lenovo S720": ["Lenovo", "S720"],
      "MI 2C": ["Xiaomi", "MI-TWO"],
      "OPPO R813T": ["Oppo", "R813"],
      "SCH-I879": ["Samsung", "Galaxy Note"],
      "GT-S6102E": ["Samsung", "Galaxy Y Duos"]
  };
  var s = {
      "9600": "Bold",
      "9650": "Bold",
      "9700": "Bold",
      "9780": "Bold",
      "9790": "Bold",
      "9900": "Bold",
      "9930": "Bold",
      "8300": "Curve",
      "8310": "Curve",
      "8320": "Curve",
      "8330": "Curve",
      "8350i": "Curve",
      "8520": "Curve",
      "8530": "Curve",
      "8900": "Curve",
      "9220": "Curve",
      "9300": "Curve",
      "9330": "Curve",
      "9350": "Curve",
      "9360": "Curve",
      "9370": "Curve",
      "9380": "Curve",
      "8100": "Pearl",
      "8110": "Pearl",
      "8120": "Pearl",
      "8130": "Pearl",
      "8220": "Pearl",
      "8230": "Pearl",
      "9100": "Pearl",
      "9105": "Pearl",
      "9530": "Storm",
      "9550": "Storm",
      "9670": "Style",
      "9800": "Torch",
      "9810": "Torch",
      "9850": "Torch",
      "9860": "Torch",
      "9630": "Tour",
      "9981": "Porsche P"
  };
  var h = function() {
      this.initialize.apply(this, Array.prototype.slice.call(arguments))
  };
  h.prototype = {
      initialize: function(D) {
          this.original = D.value || null;
          this.alias = D.alias || null
      }
  };
  var w = function() {
      this.initialize.apply(this, arguments)
  };
  w.prototype = {
      initialize: function(E, D) {
          this.options = {
              useFeatures: D && D.useFeatures || false,
              detectCamouflage: D && D.detectCamouflage || true
          };
          this.browser = {
              stock: true,
              hidden: false,
              channel: ""
          };
          this.engine = {};
          this.os = {};
          this.device = {
              type: "desktop",
              identified: false
          };
          this.camouflage = false;
          this.features = [];
          this.detect(E)
      },
      detect: function(D) {
          if (D.match("Unix")) {
              this.os.name = "Unix"
          }
          if (D.match("FreeBSD")) {
              this.os.name = "FreeBSD"
          }
          if (D.match("OpenBSD")) {
              this.os.name = "OpenBSD"
          }
          if (D.match("NetBSD")) {
              this.os.name = "NetBSD"
          }
          if (D.match("SunOS")) {
              this.os.name = "Solaris"
          }
          if (D.match("Linux")) {
              this.os.name = "Linux";
              if (D.match("CentOS")) {
                  this.os.name = "CentOS";
                  if (match = /CentOS\/[0-9\.\-]+el([0-9_]+)/.exec(D)) {
                      this.os.version = new h({
                          value: match[1].replace(/_/g, ".")
                      })
                  }
              }
              if (D.match("Debian")) {
                  this.os.name = "Debian"
              }
              if (D.match("Fedora")) {
                  this.os.name = "Fedora";
                  if (match = /Fedora\/[0-9\.\-]+fc([0-9]+)/.exec(D)) {
                      this.os.version = new h({
                          value: match[1]
                      })
                  }
              }
              if (D.match("Gentoo")) {
                  this.os.name = "Gentoo"
              }
              if (D.match("Kubuntu")) {
                  this.os.name = "Kubuntu"
              }
              if (D.match("Mandriva Linux")) {
                  this.os.name = "Mandriva";
                  if (match = /Mandriva Linux\/[0-9\.\-]+mdv([0-9]+)/.exec(D)) {
                      this.os.version = new h({
                          value: match[1]
                      })
                  }
              }
              if (D.match("Mageia")) {
                  this.os.name = "Mageia";
                  if (match = /Mageia\/[0-9\.\-]+mga([0-9]+)/.exec(D)) {
                      this.os.version = new h({
                          value: match[1]
                      })
                  }
              }
              if (D.match("Red Hat")) {
                  this.os.name = "Red Hat";
                  if (match = /Red Hat[^\/]*\/[0-9\.\-]+el([0-9_]+)/.exec(D)) {
                      this.os.version = new h({
                          value: match[1].replace(/_/g, ".")
                      })
                  }
              }
              if (D.match("Ubuntu")) {
                  this.os.name = "Ubuntu";
                  if (match = /Ubuntu\/([0-9.]*)/.exec(D)) {
                      this.os.version = new h({
                          value: match[1]
                      })
                  }
              }
          }
          if (D.match("iPhone( Simulator)?;") || D.match("iPad;") || D.match("iPod;") || D.match(/iPhone\s*\d*s?[cp]?;/i)) {
              this.os.name = "iOS";
              this.os.version = new h({
                  value: "1.0"
              });
              if (match = /OS (.*) like Mac OS X/.exec(D)) {
                  this.os.version = new h({
                      value: match[1].replace(/_/g, ".")
                  })
              }
              if (D.match("iPhone Simulator;")) {
                  this.device.type = "emulator"
              } else {
                  if (D.match("iPod;")) {
                      this.device.type = "media";
                      this.device.manufacturer = "Apple";
                      this.device.model = "iPod Touch"
                  } else {
                      if (D.match("iPhone;") || D.match(/iPhone\s*\d*s?[cp]?;/i)) {
                          this.device.type = "mobile";
                          this.device.manufacturer = "Apple";
                          this.device.model = "iPhone"
                      } else {
                          this.device.type = "tablet";
                          this.device.manufacturer = "Apple";
                          this.device.model = "iPad"
                      }
                  }
              }
              this.device.identified = true
          } else {
              if (D.match("Mac OS X")) {
                  this.os.name = "Mac OS X";
                  if (match = /Mac OS X (10[0-9\._]*)/.exec(D)) {
                      this.os.version = new h({
                          value: match[1].replace(/_/g, ".")
                      })
                  }
              }
          }
          if (D.match("Windows")) {
              this.os.name = "Windows";
              if (match = /Windows NT ([0-9]\.[0-9])/.exec(D)) {
                  this.os.version = a(match[1]);
                  switch (match[1]) {
                  case "6.2":
                      this.os.version = new h({
                          value: match[1],
                          alias: "8"
                      });
                      break;
                  case "6.1":
                      this.os.version = new h({
                          value: match[1],
                          alias: "7"
                      });
                      break;
                  case "6.0":
                      this.os.version = new h({
                          value: match[1],
                          alias: "Vista"
                      });
                      break;
                  case "5.2":
                      this.os.version = new h({
                          value: match[1],
                          alias: "Server 2003"
                      });
                      break;
                  case "5.1":
                      this.os.version = new h({
                          value: match[1],
                          alias: "XP"
                      });
                      break;
                  case "5.0":
                      this.os.version = new h({
                          value: match[1],
                          alias: "2000"
                      });
                      break;
                  default:
                      this.os.version = new h({
                          value: match[1],
                          alias: "NT " + this.os.version
                      })
                  }
              }
              if (D.match("Windows 95") || D.match("Win95") || D.match("Win 9x 4.00")) {
                  this.os.version = new h({
                      value: "4.0",
                      alias: "95"
                  })
              }
              if (D.match("Windows 98") || D.match("Win98") || D.match("Win 9x 4.10")) {
                  this.os.version = new h({
                      value: "4.1",
                      alias: "98"
                  })
              }
              if (D.match("Windows ME") || D.match("WinME") || D.match("Win 9x 4.90")) {
                  this.os.version = new h({
                      value: "4.9",
                      alias: "ME"
                  })
              }
              if (D.match("Windows XP") || D.match("WinXP")) {
                  this.os.name = new h({
                      value: "5.1",
                      alias: "XP"
                  })
              }
              if (D.match("WP7")) {
                  this.os.name = "Windows Phone";
                  this.os.version = new h({
                      value: "7.0",
                      details: 2
                  });
                  this.device.type = "mobile";
                  this.browser.mode = "desktop"
              }
              if (D.match("Windows CE") || D.match("WinCE") || D.match("WindowsCE")) {
                  if (D.match(" IEMobile")) {
                      this.os.name = "Windows Mobile";
                      if (D.match(" IEMobile 8")) {
                          this.os.version = new h({
                              value: "6.5",
                              details: 2
                          })
                      }
                      if (D.match(" IEMobile 7")) {
                          this.os.version = new h({
                              value: "6.1",
                              details: 2
                          })
                      }
                      if (D.match(" IEMobile 6")) {
                          this.os.version = new h({
                              value: "6.0",
                              details: 2
                          })
                      }
                  } else {
                      this.os.name = "Windows CE";
                      if (match = /WindowsCEOS\/([0-9.]*)/.exec(D)) {
                          this.os.version = new h({
                              value: match[1],
                              details: 2
                          })
                      }
                      if (match = /Windows CE ([0-9.]*)/.exec(D)) {
                          this.os.version = new h({
                              value: match[1],
                              details: 2
                          })
                      }
                  }
                  this.device.type = "mobile"
              }
              if (D.match("Windows Mobile")) {
                  this.os.name = "Windows Mobile";
                  this.device.type = "mobile"
              }
              if (match = /WindowsMobile\/([0-9.]*)/.exec(D)) {
                  this.os.name = "Windows Mobile";
                  this.os.version = new h({
                      value: match[1],
                      details: 2
                  });
                  this.device.type = "mobile"
              }
              if (D.match("Windows Phone [0-9]")) {
                  this.os.name = "Windows Mobile";
                  this.os.version = new h({
                      value: D.match(/Windows Phone ([0-9.]*)/)[1],
                      details: 2
                  });
                  this.device.type = "mobile"
              }
              if (D.match("Windows Phone OS")) {
                  this.os.name = "Windows Phone";
                  this.os.version = new h({
                      value: D.match(/Windows Phone OS ([0-9.]*)/)[1],
                      details: 2
                  });
                  if (this.os.version < 7) {
                      this.os.name = "Windows Mobile"
                  }
                  if (match = /IEMobile\/[^;]+; ([^;]+); ([^;]+)[;|\)]/.exec(D)) {
                      this.device.manufacturer = match[1];
                      this.device.model = match[2]
                  }
                  this.device.type = "mobile";
                  var M = this.device.manufacturer;
                  var I = l(this.device.model);
                  if (typeof WINDOWS_PHONE_MODELS[M] !== "undefined" && typeof WINDOWS_PHONE_MODELS[M][I] !== "undefined") {
                      this.device.manufacturer = WINDOWS_PHONE_MODELS[M][I][0];
                      this.device.model = WINDOWS_PHONE_MODELS[M][I][1];
                      this.device.identified = true
                  }
                  if (M === "Microsoft" && I === "XDeviceEmulator") {
                      this.device.manufacturer = null;
                      this.device.model = null;
                      this.device.type = "emulator";
                      this.device.identified = true
                  }
              }
          }
          if (D.match("Android")) {
              this.os.name = "Android";
              this.os.version = null;
              if (match = /Android(?: )?(?:AllPhone_|CyanogenMod_)?(?:\/)?v?([0-9.]+)/.exec(D.replace("-update", "."))) {
                  this.os.version = new h({
                      value: match[1],
                      details: 3
                  })
              }
              if (D.match("Android Eclair")) {
                  this.os.version = new h({
                      value: "2.0",
                      details: 3
                  })
              }
              this.device.type = "mobile";
              if (this.os.version >= 3) {
                  this.device.type = "tablet"
              }
              if (this.os.version >= 4 && D.match("Mobile")) {
                  this.device.type = "mobile"
              }
              if (match = /Eclair; (?:[a-zA-Z][a-zA-Z](?:[-_][a-zA-Z][a-zA-Z])?) Build\/([^\/]*)\//.exec(D)) {
                  this.device.model = match[1]
              } else {
                  if (match = /; ([^;]*[^;\s])\s+Build/.exec(D)) {
                      this.device.model = match[1]
                  } else {
                      if (match = /[a-zA-Z][a-zA-Z](?:[-_][a-zA-Z][a-zA-Z])?; ([^;]*[^;\s]);\s+Build/.exec(D)) {
                          this.device.model = match[1]
                      } else {
                          if (match = /\(([^;]+);U;Android\/[^;]+;[0-9]+\*[0-9]+;CTC\/2.0\)/.exec(D)) {
                              this.device.model = match[1]
                          } else {
                              if (match = /;\s?([^;]+);\s?[0-9]+\*[0-9]+;\s?CTC\/2.0/.exec(D)) {
                                  this.device.model = match[1]
                              } else {
                                  if (match = /zh-cn;\s*(.*?)(\/|build)/i.exec(D)) {
                                      this.device.model = match[1]
                                  } else {
                                      if (match = /Android [^;]+; (?:[a-zA-Z][a-zA-Z](?:[-_][a-zA-Z][a-zA-Z])?; )?([^)]+)\)/.exec(D)) {
                                          if (!D.match(/[a-zA-Z][a-zA-Z](?:[-_][a-zA-Z][a-zA-Z])?/)) {
                                              this.device.model = match[1]
                                          }
                                      } else {
                                          if (match = /^(.+?)\/\S+/i.exec(D)) {
                                              this.device.model = match[1]
                                          }
                                      }
                                  }
                              }
                          }
                      }
                  }
              }
              if (this.device.model && this.device.model.substring(0, 7) === "Android") {
                  this.device.model = null
              }
              if (this.device.model) {
                  var I = l(this.device.model);
                  if (typeof q[I] !== "undefined") {
                      this.device.manufacturer = q[I][0];
                      this.device.model = q[I][1];
                      if (typeof q[I][2] !== "undefined") {
                          this.device.type = q[I][2]
                      }
                      this.device.identified = true
                  }
                  if (I === "Emulator" || I === "x86 Emulator" || I === "x86 VirtualBox" || I === "vm") {
                      this.device.manufacturer = null;
                      this.device.model = null;
                      this.device.type = "emulator";
                      this.device.identified = true
                  }
              }
              if (D.match("HP eStation")) {
                  this.device.manufacturer = "HP";
                  this.device.model = "eStation";
                  this.device.type = "tablet";
                  this.device.identified = true
              }
              if (D.match("Pre/1.0")) {
                  this.device.manufacturer = "Palm";
                  this.device.model = "Pre";
                  this.device.identified = true
              }
              if (D.match("Pre/1.1")) {
                  this.device.manufacturer = "Palm";
                  this.device.model = "Pre Plus";
                  this.device.identified = true
              }
              if (D.match("Pre/1.2")) {
                  this.device.manufacturer = "Palm";
                  this.device.model = "Pre 2";
                  this.device.identified = true
              }
              if (D.match("Pre/3.0")) {
                  this.device.manufacturer = "HP";
                  this.device.model = "Pre 3";
                  this.device.identified = true
              }
              if (D.match("Pixi/1.0")) {
                  this.device.manufacturer = "Palm";
                  this.device.model = "Pixi";
                  this.device.identified = true
              }
              if (D.match("Pixi/1.1")) {
                  this.device.manufacturer = "Palm";
                  this.device.model = "Pixi Plus";
                  this.device.identified = true
              }
              if (D.match("P160UN?A?/1.0")) {
                  this.device.manufacturer = "HP";
                  this.device.model = "Veer";
                  this.device.identified = true
              }
          }
          if (D.match("GoogleTV")) {
              this.os.name = "Google TV";
              if (D.match("Chrome/5.")) {
                  this.os.version = new h({
                      value: "1"
                  })
              }
              if (D.match("Chrome/11.")) {
                  this.os.version = new h({
                      value: "2"
                  })
              }
              this.device.type = "television"
          }
          if (D.match("WoPhone")) {
              this.os.name = "WoPhone";
              if (match = /WoPhone\/([0-9\.]*)/.exec(D)) {
                  this.os.version = new h({
                      value: match[1]
                  })
              }
              this.device.type = "mobile"
          }
          if (D.match("BlackBerry")) {
              this.os.name = "BlackBerry OS";
              if (!D.match("Opera")) {
                  if (match = /BlackBerry([0-9]*)\/([0-9.]*)/.exec(D)) {
                      this.device.model = match[1];
                      this.os.version = new h({
                          value: match[2],
                          details: 2
                      })
                  }
                  if (match = /; BlackBerry ([0-9]*);/.exec(D)) {
                      this.device.model = match[1]
                  }
                  if (match = /Version\/([0-9.]*)/.exec(D)) {
                      this.os.version = new h({
                          value: match[1],
                          details: 2
                      })
                  }
                  if (this.os.version >= 10) {
                      this.os.name = "BlackBerry"
                  }
                  if (typeof this.device.model !== "undefined") {
                      if (typeof s[this.device.model] !== "undefined") {
                          this.device.model = "BlackBerry " + s[this.device.model] + " " + this.device.model
                      } else {
                          this.device.model = "BlackBerry " + this.device.model
                      }
                  } else {
                      this.device.model = "BlackBerry"
                  }
              } else {
                  this.device.model = "BlackBerry"
              }
              this.device.manufacturer = "RIM";
              this.device.type = "mobile";
              this.device.identified = true
          }
          if (D.match("RIM Tablet OS")) {
              this.os.name = "BlackBerry Tablet OS";
              this.os.version = new h({
                  value: D.match(/RIM Tablet OS ([0-9.]*)/)[1],
                  details: 2
              });
              this.device.manufacturer = "RIM";
              this.device.model = "BlackBerry PlayBook";
              this.device.type = "tablet";
              this.device.identified = true
          } else {
              if (D.match("PlayBook")) {
                  if (match = /Version\/(10[0-9.]*)/.exec(D)) {
                      this.os.name = "BlackBerry";
                      this.os.version = new h({
                          value: match[1],
                          details: 2
                      });
                      this.device.manufacturer = "RIM";
                      this.device.model = "BlackBerry PlayBook";
                      this.device.type = "tablet";
                      this.device.identified = true
                  }
              }
          }
          if (D.match("(?:web|hpw)OS")) {
              this.os.name = "webOS";
              this.os.version = new h({
                  value: D.match(/(?:web|hpw)OS\/([0-9.]*)/)[1]
              });
              if (D.match("tablet")) {
                  this.device.type = "tablet"
              } else {
                  this.device.type = "mobile"
              }
              this.device.manufacturer = D.match("hpwOS") ? "HP" : "Palm";
              if (D.match("Pre/1.0")) {
                  this.device.model = "Pre"
              }
              if (D.match("Pre/1.1")) {
                  this.device.model = "Pre Plus"
              }
              if (D.match("Pre/1.2")) {
                  this.device.model = "Pre2"
              }
              if (D.match("Pre/3.0")) {
                  this.device.model = "Pre3"
              }
              if (D.match("Pixi/1.0")) {
                  this.device.model = "Pixi"
              }
              if (D.match("Pixi/1.1")) {
                  this.device.model = "Pixi Plus"
              }
              if (D.match("P160UN?A?/1.0")) {
                  this.device.model = "Veer"
              }
              if (D.match("TouchPad/1.0")) {
                  this.device.model = "TouchPad"
              }
              if (D.match("Emulator/") || D.match("Desktop/")) {
                  this.device.type = "emulator";
                  this.device.manufacturer = null;
                  this.device.model = null
              }
              this.device.identified = true
          }
          if (D.match("Symbian") || D.match("Series[ ]?60") || D.match("S60")) {
              this.os.name = "Series60";
              if (D.match("SymbianOS/9.1") && !D.match("Series60")) {
                  this.os.version = new h({
                      value: "3.0"
                  })
              }
              if (match = /Series60\/([0-9.]*)/.exec(D)) {
                  this.os.version = new h({
                      value: match[1]
                  })
              }
              if (match = /Nokia([^\/;]+)[\/|;]/.exec(D)) {
                  if (match[1] !== "Browser") {
                      this.device.manufacturer = "Nokia";
                      this.device.model = match[1];
                      this.device.identified = true
                  }
              }
              if (match = /Vertu([^\/;]+)[\/|;]/.exec(D)) {
                  this.device.manufacturer = "Vertu";
                  this.device.model = match[1];
                  this.device.identified = true
              }
              if (match = /Symbian; U; ([^;]+); [a-z][a-z]\-[a-z][a-z]/i.exec(D)) {
                  this.device.manufacturer = "Nokia";
                  this.device.model = match[1];
                  this.device.identified = true
              }
              if (match = /Samsung\/([^;]*);/.exec(D)) {
                  this.device.manufacturer = y;
                  this.device.model = match[1];
                  this.device.identified = true
              }
              this.device.type = "mobile"
          }
          if (D.match("Series40")) {
              this.os.name = "Series40";
              if (match = /Nokia([^\/]+)\//.exec(D)) {
                  this.device.manufacturer = "Nokia";
                  this.device.model = match[1];
                  this.device.identified = true
              }
              this.device.type = "mobile"
          }
          if (D.match("MeeGo")) {
              this.os.name = "MeeGo";
              this.device.type = "mobile";
              if (match = /Nokia([^\)]+)\)/.exec(D)) {
                  this.device.manufacturer = "Nokia";
                  this.device.model = match[1];
                  this.device.identified = true
              }
          }
          if (D.match("Maemo")) {
              this.os.name = "Maemo";
              this.device.type = "mobile";
              if (match = /(N[0-9]+)/.exec(D)) {
                  this.device.manufacturer = "Nokia";
                  this.device.model = match[1];
                  this.device.identified = true
              }
          }
          if (D.match("Tizen")) {
              this.os.name = "Tizen";
              if (match = /Tizen[\/ ]([0-9.]*)/.exec(D)) {
                  this.os.version = new h({
                      value: match[1]
                  })
              }
              this.device.type = "mobile";
              if (match = /\(([^;]+); ([^\/]+)\//.exec(D)) {
                  if (match[1] !== "Linux") {
                      this.device.manufacturer = match[1];
                      this.device.model = match[2];
                      if (typeof TIZEN_MODELS[this.device.manufacturer] !== "undefined" && typeof TIZEN_MODELS[this.device.manufacturer][this.device.model] !== "undefined") {
                          var M = this.device.manufacturer;
                          var I = l(this.device.model);
                          this.device.manufacturer = TIZEN_MODELS[M][I][0];
                          this.device.model = TIZEN_MODELS[M][I][1];
                          this.device.identified = true
                      }
                  }
              }
          }
          if (D.match("[b|B]ada")) {
              this.os.name = "Bada";
              if (match = /[b|B]ada\/([0-9.]*)/.exec(D)) {
                  this.os.version = new h({
                      value: match[1]
                  })
              }
              this.device.type = "mobile";
              if (match = /\(([^;]+); ([^\/]+)\//.exec(D)) {
                  this.device.manufacturer = match[1];
                  this.device.model = l(match[2])
              }
              if (typeof e[this.device.manufacturer] !== "undefined" && typeof e[this.device.manufacturer][this.device.model] !== "undefined") {
                  var M = this.device.manufacturer;
                  var I = l(this.device.model);
                  this.device.manufacturer = e[M][I][0];
                  this.device.model = e[M][I][1];
                  this.device.identified = true
              }
          }
          if (D.match(/BREW/i) || D.match("BMP; U")) {
              this.os.name = "Brew";
              this.device.type = "mobile";
              if (match = /BREW; U; ([0-9.]*)/i.exec(D)) {
                  this.os.version = new h({
                      value: match[1]
                  })
              } else {
                  if (match = /;BREW\/([0-9.]*)/i.exec(D)) {
                      this.os.version = new h({
                          value: match[1]
                      })
                  }
              }
              if (match = /\(([^;]+);U;REX\/[^;]+;BREW\/[^;]+;(?:.*;)?[0-9]+\*[0-9]+;CTC\/2.0\)/.exec(D)) {
                  this.device.model = match[1]
              }
              if (this.device.model) {
                  var I = l(this.device.model);
                  if (typeof BREW_MODELS[I] !== "undefined") {
                      this.device.manufacturer = BREW_MODELS[I][0];
                      this.device.model = BREW_MODELS[I][1];
                      this.device.identified = true
                  }
              }
          }
          if (D.match(/\(MTK;/)) {
              this.os.name = "MTK";
              this.device.type = "mobile"
          }
          if (D.match("CrOS")) {
              this.os.name = "Chrome OS";
              this.device.type = "desktop"
          }
          if (D.match("Joli OS")) {
              this.os.name = "Joli OS";
              this.device.type = "desktop";
              if (match = /Joli OS\/([0-9.]*)/i.exec(D)) {
                  this.os.version = new h({
                      value: match[1]
                  })
              }
          }
          if (D.match("Haiku")) {
              this.os.name = "Haiku";
              this.device.type = "desktop"
          }
          if (D.match("QNX")) {
              this.os.name = "QNX";
              this.device.type = "mobile"
          }
          if (D.match("OS/2; Warp")) {
              this.os.name = "OS/2 Warp";
              this.device.type = "desktop";
              if (match = /OS\/2; Warp ([0-9.]*)/i.exec(D)) {
                  this.os.version = new h({
                      value: match[1]
                  })
              }
          }
          if (D.match("Grid OS")) {
              this.os.name = "Grid OS";
              this.device.type = "tablet";
              if (match = /Grid OS ([0-9.]*)/i.exec(D)) {
                  this.os.version = new h({
                      value: match[1]
                  })
              }
          }
          if (D.match(/AmigaOS/i)) {
              this.os.name = "AmigaOS";
              this.device.type = "desktop";
              if (match = /AmigaOS ([0-9.]*)/i.exec(D)) {
                  this.os.version = new h({
                      value: match[1]
                  })
              }
          }
          if (D.match(/MorphOS/i)) {
              this.os.name = "MorphOS";
              this.device.type = "desktop";
              if (match = /MorphOS ([0-9.]*)/i.exec(D)) {
                  this.os.version = new h({
                      value: match[1]
                  })
              }
          }
          if (D.match("Kindle") && !D.match("Fire")) {
              this.os.name = "";
              this.device.manufacturer = "Amazon";
              this.device.model = "Kindle";
              this.device.type = "ereader";
              if (D.match("Kindle/2.0")) {
                  this.device.model = "Kindle 2"
              }
              if (D.match("Kindle/3.0")) {
                  this.device.model = "Kindle 3 or later"
              }
              this.device.identified = true
          }
          if (D.match("nook browser")) {
              this.os.name = "Android";
              this.device.manufacturer = "Barnes & Noble";
              this.device.model = "NOOK";
              this.device.type = "ereader";
              this.device.identified = true
          }
          if (D.match("bookeen/cybook")) {
              this.os.name = "";
              this.device.manufacturer = "Bookeen";
              this.device.model = "Cybook";
              this.device.type = "ereader";
              if (D.match("Orizon")) {
                  this.device.model = "Cybook Orizon"
              }
              this.device.identified = true
          }
          if (D.match("EBRD1101")) {
              this.os.name = "";
              this.device.manufacturer = "Sony";
              this.device.model = "Reader";
              this.device.type = "ereader";
              this.device.identified = true
          }
          if (D.match("Iriver ;")) {
              this.os.name = "";
              this.device.manufacturer = "iRiver";
              this.device.model = "Story";
              this.device.type = "ereader";
              if (D.match("EB07")) {
                  this.device.model = "Story HD EB07"
              }
              this.device.identified = true
          }
          if (D.match("Nintendo Wii")) {
              this.os.name = "";
              this.device.manufacturer = "Nintendo";
              this.device.model = "Wii";
              this.device.type = "gaming";
              this.device.identified = true
          }
          if (match = /Winbox Evo2/.exec(D)) {
              this.os.name = "";
              this.device.manufacturer = "Winbox";
              this.device.model = "Evo2";
              this.device.type = "television";
              this.device.identified = true
          }
          if (match = /^Roku\/DVP-([0-9]+)/.exec(D)) {
              this.device.manufacturer = "Roku";
              this.device.type = "television";
              switch (match[1]) {
              case "2000":
                  this.device.model = "HD";
                  break;
              case "2050":
                  this.device.model = "XD";
                  break;
              case "2100":
                  this.device.model = "XDS";
                  break;
              case "2400":
                  this.device.model = "LT";
                  break;
              case "3000":
                  this.device.model = "2 HD";
                  break;
              case "3050":
                  this.device.model = "2 XD";
                  break;
              case "3100":
                  this.device.model = "2 XS";
                  break
              }
              this.device.identified = true
          }
          if (match = /HbbTV\/1.1.1 \([^;]*;\s*([^;]*)\s*;\s*([^;]*)\s*;/.exec(D)) {
              var E = match[1].trim();
              var K = match[2].trim();
              if (!this.device.manufacturer && E !== "" && E !== "vendorName") {
                  switch (E) {
                  case "LGE":
                      this.device.manufacturer = "LG";
                      break;
                  case "TOSHIBA":
                      this.device.manufacturer = "Toshiba";
                      break;
                  case "smart":
                      this.device.manufacturer = "Smart";
                      break;
                  case "tv2n":
                      this.device.manufacturer = "TV2N";
                      break;
                  default:
                      this.device.manufacturer = E
                  }
                  if (!this.device.model && K !== "" && K !== "modelName") {
                      switch (K) {
                      case "GLOBAL_PLAT3":
                          this.device.model = "NetCast TV";
                          break;
                      case "SmartTV2012":
                          this.device.model = "Smart TV 2012";
                          break;
                      case "videoweb":
                          this.device.model = "Videoweb";
                          break;
                      default:
                          this.device.model = K
                      }
                      if (E === "Humax") {
                          this.device.model = this.device.model.toUpperCase()
                      }
                      this.device.identified = true;
                      this.os.name = ""
                  }
              }
              this.device.type = "television"
          }
          if (D.match("InettvBrowser")) {
              this.device.type = "television"
          }
          if (D.match("MIDP")) {
              this.device.type = "mobile"
          }
          if (!this.device.model && !this.device.manufacturer) {
              var H = [];
              if (!D.match(/^(Mozilla|Opera)/)) {
                  if (match = /^(?:MQQBrowser\/[0-9\.]+\/)?([^\s]+)/.exec(D)) {
                      match[1] = match[1].replace(/_TD$/, "");
                      match[1] = match[1].replace(/_CMCC$/, "");
                      match[1] = match[1].replace(/[_ ]Mozilla$/, "");
                      match[1] = match[1].replace(/ Linux$/, "");
                      match[1] = match[1].replace(/ Opera$/, "");
                      match[1] = match[1].replace(/\/[0-9].*$/, "");
                      H.push(match[1])
                  }
              }
              if (match = /[0-9]+x[0-9]+; ([^;]+)/.exec(D)) {
                  H.push(match[1])
              }
              if (match = /[0-9]+X[0-9]+ ([^;\/\(\)]+)/.exec(D)) {
                  H.push(match[1])
              }
              if (match = /Windows NT 5.1; ([^;]+); Windows Phone/.exec(D)) {
                  H.push(match[1])
              }
              if (match = /\) PPC; (?:[0-9]+x[0-9]+; )?([^;\/\(\)]+)/.exec(D)) {
                  H.push(match[1])
              }
              if (match = /\(([^;]+); U; Windows Mobile/.exec(D)) {
                  H.push(match[1])
              }
              if (match = /Vodafone\/1.0\/([^\/]+)/.exec(D)) {
                  H.push(match[1])
              }
              if (match = /\ ([^\s]+)$/.exec(D)) {
                  H.push(match[1])
              }
              for (var G = 0; G < H.length; G++) {
                  if (!this.device.model && !this.device.manufacturer) {
                      var I = l(H[G]);
                      var N = false;
                      if (this.os.name === "Android") {
                          if (typeof q[I] !== "undefined") {
                              this.device.manufacturer = q[I][0];
                              this.device.model = q[I][1];
                              if (typeof q[I][2] !== "undefined") {
                                  this.device.type = q[I][2]
                              }
                              this.device.identified = true;
                              N = true
                          }
                      }
                      if (!this.os.name || this.os.name === "Windows" || this.os.name === "Windows Mobile" || this.os.name === "Windows CE") {
                          if (typeof A[I] !== "undefined") {
                              this.device.manufacturer = A[I][0];
                              this.device.model = A[I][1];
                              this.device.type = "mobile";
                              this.device.identified = true;
                              if (this.os.name !== "Windows Mobile") {
                                  this.os.name = "Windows Mobile";
                                  this.os.version = null
                              }
                              N = true
                          }
                      }
                  }
                  if (!N) {
                      if (match = /^GIONEE-([^\s]+)/.exec(H[G])) {
                          this.device.manufacturer = "Gionee";
                          this.device.model = l(match[1]);
                          this.device.type = "mobile";
                          this.device.identified = true
                      }
                      if (match = /^HTC_?([^\/_]+)(?:\/|_|$)/.exec(H[G])) {
                          this.device.manufacturer = z;
                          this.device.model = l(match[1]);
                          this.device.type = "mobile";
                          this.device.identified = true
                      }
                      if (match = /^HUAWEI-([^\/]*)/.exec(H[G])) {
                          this.device.manufacturer = m;
                          this.device.model = l(match[1]);
                          this.device.type = "mobile";
                          this.device.identified = true
                      }
                      if (match = /(?:^|\()LGE?(?:\/|-|_|\s)([^\s]*)/.exec(H[G])) {
                          this.device.manufacturer = b;
                          this.device.model = l(match[1]);
                          this.device.type = "mobile";
                          this.device.identified = true
                      }
                      if (match = /^MOT-([^\/_]+)(?:\/|_|$)/.exec(H[G])) {
                          this.device.manufacturer = t;
                          this.device.model = l(match[1]);
                          this.device.type = "mobile";
                          this.device.identified = true
                      }
                      if (match = /^Motorola_([^\/_]+)(?:\/|_|$)/.exec(H[G])) {
                          this.device.manufacturer = t;
                          this.device.model = l(match[1]);
                          this.device.type = "mobile";
                          this.device.identified = true
                      }
                      if (match = /^Nokia([^\/]+)(?:\/|$)/.exec(H[G])) {
                          this.device.manufacturer = "Nokia";
                          this.device.model = l(match[1]);
                          this.device.type = "mobile";
                          this.device.identified = true;
                          if (!this.os.name) {
                              this.os.name = "Series40"
                          }
                      }
                      if (match = /^SonyEricsson([^\/_]+)(?:\/|_|$)/.exec(H[G])) {
                          this.device.manufacturer = d;
                          this.device.model = l(match[1]);
                          this.device.type = "mobile";
                          this.device.identified = true
                      }
                      if (match = /^SAMSUNG-([^\/_]+)(?:\/|_|$)/.exec(H[G])) {
                          this.device.manufacturer = y;
                          this.device.model = l(match[1]);
                          this.device.type = "mobile";
                          if (this.os.name === "Bada") {
                              var M = "SAMSUNG";
                              var I = l(this.device.model);
                              if (typeof e[M] !== "undefined" && typeof e[M][I] !== "undefined") {
                                  this.device.manufacturer = e[M][I][0];
                                  this.device.model = e[M][I][1];
                                  this.device.identified = true
                              }
                          } else {
                              if (match = /Jasmine\/([0-9.]*)/.exec(D)) {
                                  var J = match[1];
                                  var M = "SAMSUNG";
                                  var I = l(this.device.model);
                                  if (typeof C[M] !== "undefined" && typeof C[M][I] !== "undefined") {
                                      this.device.manufacturer = C[M][I][0];
                                      this.device.model = C[M][I][1];
                                      this.device.identified = true;
                                      this.os.name = "Touchwiz";
                                      this.os.version = new h({
                                          value: "2.0"
                                      })
                                  }
                              } else {
                                  if (match = /Dolfin\/([0-9.]*)/.exec(D)) {
                                      var J = match[1];
                                      var M = "SAMSUNG";
                                      var I = l(this.device.model);
                                      if (typeof e[M] !== "undefined" && typeof e[M][I] !== "undefined") {
                                          this.device.manufacturer = e[M][I][0];
                                          this.device.model = e[M][I][1];
                                          this.device.identified = true;
                                          this.os.name = "Bada";
                                          switch (J) {
                                          case "2.0":
                                              this.os.version = new h({
                                                  value: "1.0"
                                              });
                                              break;
                                          case "2.2":
                                              this.os.version = new h({
                                                  value: "1.2"
                                              });
                                              break;
                                          case "3.0":
                                              this.os.version = new h({
                                                  value: "2.0"
                                              });
                                              break
                                          }
                                      }
                                      if (typeof C[M] !== "undefined" && typeof C[M][I] !== "undefined") {
                                          this.device.manufacturer = C[M][I][0];
                                          this.device.model = C[M][I][1];
                                          this.device.identified = true;
                                          this.os.name = "Touchwiz";
                                          switch (J) {
                                          case "1.0":
                                              this.os.version = new h({
                                                  value: "1.0"
                                              });
                                              break;
                                          case "1.5":
                                              this.os.version = new h({
                                                  value: "2.0"
                                              });
                                              break;
                                          case "2.0":
                                              this.os.version = new h({
                                                  value: "3.0"
                                              });
                                              break
                                          }
                                      }
                                  }
                              }
                          }
                      }
                  }
              }
          }
          if (match = /\((?:LG[-|\/])(.*) (?:Browser\/)?AppleWebkit/.exec(D)) {
              this.device.manufacturer = b;
              this.device.model = match[1];
              this.device.type = "mobile";
              this.device.identified = true
          }
          if (match = /^Mozilla\/5.0 \((?:Nokia|NOKIA)(?:\s?)([^\)]+)\)UC AppleWebkit\(like Gecko\) Safari\/530$/.exec(D)) {
              this.device.manufacturer = "Nokia";
              this.device.model = match[1];
              this.device.type = "mobile";
              this.device.identified = true;
              this.os.name = "Series60"
          }
          if (D.match("Safari")) {
              if (this.os.name === "iOS") {
                  this.browser.stock = true;
                  this.browser.hidden = true;
                  this.browser.name = "Safari";
                  this.browser.version = null
              }
              if (this.os.name === "Mac OS X" || this.os.name === "Windows") {
                  this.browser.name = "Safari";
                  this.browser.stock = this.os.name === "Mac OS X";
                  if (match = /Version\/([0-9\.]+)/.exec(D)) {
                      this.browser.version = new h({
                          value: match[1]
                      })
                  }
                  if (D.match(/AppleWebKit\/[0-9\.]+\+/)) {
                      this.browser.name = "WebKit Nightly Build";
                      this.browser.version = null
                  }
              }
          }
          if (D.match("MSIE")) {
              this.browser.name = "Internet Explorer";
              if (D.match("IEMobile") || D.match("Windows CE") || D.match("Windows Phone") || D.match("WP7")) {
                  this.browser.name = "Mobile Internet Explorer"
              }
              if (match = /MSIE ([0-9.]*)/.exec(D)) {
                  this.browser.version = new h({
                      value: match[1]
                  })
              }
          }
          if (D.match(/Opera/i)) {
              this.browser.stock = false;
              this.browser.name = "Opera";
              if (match = /Opera[\/| ]([0-9.]*)/.exec(D)) {
                  this.browser.version = new h({
                      value: match[1]
                  })
              }
              if (match = /Version\/([0-9.]*)/.exec(D)) {
                  if (parseFloat(match[1]) >= 10) {
                      this.browser.version = new h({
                          value: match[1]
                      })
                  } else {
                      this.browser.version = null
                  }
              }
              if (this.browser.version && D.match("Edition Labs")) {
                  this.browser.version.type = "alpha";
                  this.browser.channel = "Labs"
              }
              if (this.browser.version && D.match("Edition Next")) {
                  this.browser.version.type = "alpha";
                  this.browser.channel = "Next"
              }
              if (D.match("Opera Tablet")) {
                  this.browser.name = "Opera Mobile";
                  this.device.type = "tablet"
              }
              if (D.match("Opera Mobi")) {
                  this.browser.name = "Opera Mobile";
                  this.device.type = "mobile"
              }
              if (match = /Opera Mini;/.exec(D)) {
                  this.browser.name = "Opera Mini";
                  this.browser.version = null;
                  this.browser.mode = "proxy";
                  this.device.type = "mobile"
              }
              if (match = /Opera Mini\/(?:att\/)?([0-9.]*)/.exec(D)) {
                  this.browser.name = "Opera Mini";
                  this.browser.version = new h({
                      value: match[1],
                      details: -1
                  });
                  this.browser.mode = "proxy";
                  this.device.type = "mobile"
              }
              if (this.browser.name === "Opera" && this.device.type === "mobile") {
                  this.browser.name = "Opera Mobile";
                  if (D.match(/BER/)) {
                      this.browser.name = "Opera Mini";
                      this.browser.version = null
                  }
              }
              if (D.match("InettvBrowser")) {
                  this.device.type = "television"
              }
              if (D.match("Opera TV") || D.match("Opera-TV")) {
                  this.browser.name = "Opera";
                  this.device.type = "television"
              }
              if (D.match("Linux zbov")) {
                  this.browser.name = "Opera Mobile";
                  this.browser.mode = "desktop";
                  this.device.type = "mobile";
                  this.os.name = null;
                  this.os.version = null
              }
              if (D.match("Linux zvav")) {
                  this.browser.name = "Opera Mini";
                  this.browser.version = null;
                  this.browser.mode = "desktop";
                  this.device.type = "mobile";
                  this.os.name = null;
                  this.os.version = null
              }
          }
          if (D.match("Firefox")) {
              this.browser.stock = false;
              this.browser.name = "Firefox";
              if (match = /Firefox\/([0-9ab.]*)/.exec(D)) {
                  this.browser.version = new h({
                      value: match[1]
                  })
              }
              if (this.browser.version.type === "alpha") {
                  this.browser.channel = "Aurora"
              }
              if (this.browser.version.type === "beta") {
                  this.browser.channel = "Beta"
              }
              if (D.match("Fennec")) {
                  this.device.type = "mobile"
              }
              if (D.match("Mobile; rv")) {
                  this.device.type = "mobile"
              }
              if (D.match("Tablet; rv")) {
                  this.device.type = "tablet"
              }
              if (this.device.type === "mobile" || this.device.type === "tablet") {
                  this.browser.name = "Firefox Mobile"
              }
          }
          if (D.match("Namoroka")) {
              this.browser.stock = false;
              this.browser.name = "Firefox";
              if (match = /Namoroka\/([0-9ab.]*)/.exec(D)) {
                  this.browser.version = new h({
                      value: match[1]
                  })
              }
              this.browser.channel = "Namoroka"
          }
          if (D.match("Shiretoko")) {
              this.browser.stock = false;
              this.browser.name = "Firefox";
              if (match = /Shiretoko\/([0-9ab.]*)/.exec(D)) {
                  this.browser.version = new h({
                      value: match[1]
                  })
              }
              this.browser.channel = "Shiretoko"
          }
          if (D.match("Minefield")) {
              this.browser.stock = false;
              this.browser.name = "Firefox";
              if (match = /Minefield\/([0-9ab.]*)/.exec(D)) {
                  this.browser.version = new h({
                      value: match[1]
                  })
              }
              this.browser.channel = "Minefield"
          }
          if (D.match("Firebird")) {
              this.browser.stock = false;
              this.browser.name = "Firebird";
              if (match = /Firebird\/([0-9ab.]*)/.exec(D)) {
                  this.browser.version = new h({
                      value: match[1]
                  })
              }
          }
          if (D.match("SeaMonkey")) {
              this.browser.stock = false;
              this.browser.name = "SeaMonkey";
              if (match = /SeaMonkey\/([0-9.]*)/.exec(D)) {
                  this.browser.version = new h({
                      value: match[1]
                  })
              }
          }
          if (D.match("Netscape")) {
              this.browser.stock = false;
              this.browser.name = "Netscape";
              if (match = /Netscape[0-9]?\/([0-9.]*)/.exec(D)) {
                  this.browser.version = new h({
                      value: match[1]
                  })
              }
          }
          if (D.match("[k|K]onqueror/")) {
              this.browser.name = "Konqueror";
              if (match = /[k|K]onqueror\/([0-9.]*)/.exec(D)) {
                  this.browser.version = new h({
                      value: match[1]
                  })
              }
          }
          if (match = /(?:Chrome|CrMo|CriOS)\/([0-9.]*)/.exec(D)) {
              this.browser.stock = false;
              this.browser.name = "Chrome";
              this.browser.version = new h({
                  value: match[1]
              });
              if (this.os.name === "Android") {
                  switch (match[1].split(".", 3).join(".")) {
                  case "16.0.912":
                      this.browser.channel = "Beta";
                      break;
                  case "18.0.1025":
                      this.browser.version.details = 1;
                      break;
                  default:
                      this.browser.channel = "Nightly";
                      break
                  }
              } else {
                  switch (match[1].split(".", 3).join(".")) {
                  case "0.2.149":
                  case "0.3.154":
                  case "0.4.154":
                  case "1.0.154":
                  case "2.0.172":
                  case "3.0.195":
                  case "4.0.249":
                  case "4.1.249":
                  case "5.0.375":
                  case "6.0.472":
                  case "7.0.517":
                  case "8.0.552":
                  case "9.0.597":
                  case "10.0.648":
                  case "11.0.696":
                  case "12.0.742":
                  case "13.0.782":
                  case "14.0.835":
                  case "15.0.874":
                  case "16.0.912":
                  case "17.0.963":
                  case "18.0.1025":
                  case "19.0.1084":
                  case "20.0.1132":
                  case "21.0.1180":
                      if (this.browser.version.minor === 0) {
                          this.browser.version.details = 1
                      } else {
                          this.browser.version.details = 2
                      }
                      break;
                  default:
                      this.browser.channel = "Nightly";
                      break
                  }
              }
          }
          if (D.match("chromeframe")) {
              this.browser.stock = false;
              this.browser.name = "Chrome Frame";
              if (match = /chromeframe\/([0-9.]*)/.exec(D)) {
                  this.browser.version = new h({
                      value: match[1]
                  })
              }
          }
          if (D.match("Chromium")) {
              this.browser.stock = false;
              this.browser.channel = "";
              this.browser.name = "Chromium";
              if (match = /Chromium\/([0-9.]*)/.exec(D)) {
                  this.browser.version = new h({
                      value: match[1]
                  })
              }
          }
          if (D.match("BrowserNG")) {
              this.browser.name = "Nokia Browser";
              if (match = /BrowserNG\/([0-9.]*)/.exec(D)) {
                  this.browser.version = new h({
                      value: match[1],
                      details: 3,
                      builds: false
                  })
              }
          }
          if (D.match("NokiaBrowser")) {
              this.browser.name = "Nokia Browser";
              if (match = /NokiaBrowser\/([0-9.]*)/.exec(D)) {
                  this.browser.version = new h({
                      value: match[1],
                      details: 3
                  })
              }
          }
          if (D.match("Maemo[ |_]Browser")) {
              this.browser.name = "MicroB";
              if (match = /Maemo[ |_]Browser[ |_]([0-9.]*)/.exec(D)) {
                  this.browser.version = new h({
                      value: match[1],
                      details: 3
                  })
              }
          }
          if (D.match("Iris")) {
              this.browser.name = "Iris";
              this.device.type = "mobile";
              this.device.model = null;
              this.device.manufacturer = null;
              this.os.name = "Windows Mobile";
              this.os.version = null;
              if (match = /Iris\/([0-9.]*)/.exec(D)) {
                  this.browser.version = new h({
                      value: match[1]
                  })
              }
              if (match = / WM([0-9]) /.exec(D)) {
                  this.os.version = new h({
                      value: match[1] + ".0"
                  })
              } else {
                  this.browser.mode = "desktop"
              }
          }
          if (D.match("Jasmine")) {
              this.browser.name = "Jasmine";
              if (match = /Jasmine\/([0-9.]*)/.exec(D)) {
                  this.browser.version = new h({
                      value: match[1]
                  })
              }
          }
          if (D.match("Boxee")) {
              this.browser.name = "Boxee";
              this.device.type = "television";
              if (match = /Boxee\/([0-9.]*)/.exec(D)) {
                  this.browser.version = new h({
                      value: match[1]
                  })
              }
          }
          if (D.match("Espial")) {
              this.browser.name = "Espial";
              this.os.name = "";
              this.os.version = null;
              if (this.device.type !== "television") {
                  this.device.type = "television";
                  this.device.model = null;
                  this.device.manufacturer = null
              }
              if (match = /Espial\/([0-9.]*)/.exec(D)) {
                  this.browser.version = new h({
                      value: match[1]
                  })
              }
          }
          if (match = /ANTGalio\/([0-9.]*)/.exec(D)) {
              this.browser.name = "ANT Galio";
              this.browser.version = new h({
                  value: match[1],
                  details: 3
              });
              this.device.type = "television"
          }
          if (match = /NX\/([0-9.]*)/.exec(D)) {
              this.browser.name = "NetFront NX";
              this.browser.version = new h({
                  value: match[1],
                  details: 2
              });
              if (match = /DTV/i.exec(D)) {
                  this.device.type = "television"
              } else {
                  if (match = /mobile/i.exec(D)) {
                      this.device.type = "mobile"
                  } else {
                      this.device.type = "desktop"
                  }
              }
              this.os.name = null;
              this.os.version = null
          }
          if (D.match(/Obigo/i)) {
              this.browser.name = "Obigo";
              if (match = /Obigo\/([0-9.]*)/i.exec(D)) {
                  this.browser.version = new h({
                      value: match[1]
                  })
              }
              if (match = /Obigo\/([A-Z])([0-9.]*)/i.exec(D)) {
                  this.browser.name = "Obigo " + match[1];
                  this.browser.version = new h({
                      value: match[2]
                  })
              }
              if (match = /Obigo-([A-Z])([0-9.]*)\//i.exec(D)) {
                  this.browser.name = "Obigo " + match[1];
                  this.browser.version = new h({
                      value: match[2]
                  })
              }
          }
          if (D.match("UCWEB")) {
              this.browser.stock = false;
              this.browser.name = "UC Browser";
              if (match = /UCWEB([0-9]*[.][0-9]*)/.exec(D)) {
                  this.browser.version = new h({
                      value: match[1],
                      details: 3
                  })
              }
              if (this.os.name === "Linux") {
                  this.os.name = ""
              }
              this.device.type = "mobile";
              if (match = /^IUC \(U;\s?iOS ([0-9\.]+);/.exec(D)) {
                  this.os.name = "iOS";
                  this.os.version = new h({
                      value: match[1]
                  })
              }
              if (match = /^JUC \(Linux; U; ([0-9\.]+)[^;]*; [^;]+; ([^;]*[^\s])\s*; [0-9]+\*[0-9]+\)/.exec(D)) {
                  var I = l(match[2]);
                  this.os.name = "Android";
                  this.os.version = new h({
                      value: match[1]
                  });
                  if (typeof q[I] !== "undefined") {
                      this.device.manufacturer = q[I][0];
                      this.device.model = q[I][1];
                      if (typeof q[I][2] !== "undefined") {
                          this.device.type = q[I][2]
                      }
                      this.device.identified = true
                  }
              }
          }
          if (D.match(/\) UC /)) {
              this.browser.stock = false;
              this.browser.name = "UC Browser"
          }
          if (match = /UCBrowser\/([0-9.]*)/.exec(D)) {
              this.browser.stock = false;
              this.browser.name = "UC Browser";
              this.browser.version = new h({
                  value: match[1],
                  details: 2
              })
          }
          if (match = /Ninesky(?:-android-mobile(?:-cn)?)?\/([0-9.]*)/.exec(D)) {
              this.browser.name = "NineSky";
              this.browser.version = new h({
                  value: match[1]
              });
              if (this.os.name !== "Android") {
                  this.os.name = "Android";
                  this.os.version = null;
                  this.device.manufacturer = null;
                  this.device.model = null
              }
          }
          if (match = /Skyfire\/([0-9.]*)/.exec(D)) {
              this.browser.name = "Skyfire";
              this.browser.version = new h({
                  value: match[1]
              });
              this.device.type = "mobile";
              this.os.name = "Android";
              this.os.version = null
          }
          if (match = /DolphinHDCN\/([0-9.]*)/.exec(D)) {
              this.browser.name = "Dolphin";
              this.browser.version = new h({
                  value: match[1]
              });
              this.device.type = "mobile";
              if (this.os.name !== "Android") {
                  this.os.name = "Android";
                  this.os.version = null
              }
          }
          if (match = /Dolphin\/INT/.exec(D)) {
              this.browser.name = "Dolphin";
              this.device.type = "mobile"
          }
          if (match = /(M?QQBrowser)\/([0-9.]*)/.exec(D)) {
              this.browser.name = "QQ Browser";
              var J = match[2];
              if (J.match(/^[0-9][0-9]$/)) {
                  J = J[0] + "." + J[1]
              }
              this.browser.version = new h({
                  value: J,
                  details: 2
              });
              this.browser.channel = "";
              if (!this.os.name && match[1] === "QQBrowser") {
                  this.os.name = "Windows"
              }
          }
          if (match = /(iBrowser)\/([0-9.]*)/.exec(D)) {
              this.browser.name = "iBrowser";
              var J = match[2];
              if (J.match(/[0-9][0-9]/)) {
                  J = J[0] + "." + J[1]
              }
              this.browser.version = new h({
                  value: J,
                  details: 2
              });
              this.browser.channel = ""
          }
          if (match = /Puffin\/([0-9.]*)/.exec(D)) {
              this.browser.name = "Puffin";
              this.browser.version = new h({
                  value: match[1],
                  details: 2
              });
              this.device.type = "mobile";
              if (this.os.name === "Linux") {
                  this.os.name = null;
                  this.os.version = null
              }
          }
          if (D.match("360EE")) {
              this.browser.stock = false;
              this.browser.name = "360 Extreme Explorer";
              this.browser.version = null
          }
          if (match = /Midori\/([0-9.]*)/.exec(D)) {
              this.browser.name = "Midori";
              this.browser.version = new h({
                  value: match[1]
              });
              if (this.os.name !== "Linux") {
                  this.os.name = "Linux";
                  this.os.version = null
              }
              this.device.manufacturer = null;
              this.device.model = null;
              this.device.type = "desktop"
          }
          var F = [{
              name: "AdobeAIR",
              regexp: /AdobeAIR\/([0-9.]*)/
          }, {
              name: "Awesomium",
              regexp: /Awesomium\/([0-9.]*)/
          }, {
              name: "Canvace",
              regexp: /Canvace Standalone\/([0-9.]*)/
          }, {
              name: "Ekioh",
              regexp: /Ekioh\/([0-9.]*)/
          }, {
              name: "JavaFX",
              regexp: /JavaFX\/([0-9.]*)/
          }, {
              name: "GFXe",
              regexp: /GFXe\/([0-9.]*)/
          }, {
              name: "LuaKit",
              regexp: /luakit/
          }, {
              name: "Titanium",
              regexp: /Titanium\/([0-9.]*)/
          }, {
              name: "OpenWebKitSharp",
              regexp: /OpenWebKitSharp/
          }, {
              name: "Prism",
              regexp: /Prism\/([0-9.]*)/
          }, {
              name: "Qt",
              regexp: /Qt\/([0-9.]*)/
          }, {
              name: "QtEmbedded",
              regexp: /QtEmbedded/
          }, {
              name: "QtEmbedded",
              regexp: /QtEmbedded.*Qt\/([0-9.]*)/
          }, {
              name: "RhoSimulator",
              regexp: /RhoSimulator/
          }, {
              name: "UWebKit",
              regexp: /UWebKit\/([0-9.]*)/
          }, {
              name: "PhantomJS",
              regexp: /PhantomJS\/([0-9.]*)/
          }, {
              name: "Google Web Preview",
              regexp: /Google Web Preview/
          }, {
              name: "Google Earth",
              regexp: /Google Earth\/([0-9.]*)/
          }, {
              name: "EA Origin",
              regexp: /Origin\/([0-9.]*)/
          }, {
              name: "SecondLife",
              regexp: /SecondLife\/([0-9.]*)/
          }, {
              name: "Valve Steam",
              regexp: /Valve Steam/
          }, {
              name: "Songbird",
              regexp: /Songbird\/([0-9.]*)/
          }, {
              name: "Thunderbird",
              regexp: /Thunderbird\/([0-9.]*)/
          }, {
              name: "Abrowser",
              regexp: /Abrowser\/([0-9.]*)/
          }, {
              name: "arora",
              regexp: /[Aa]rora\/([0-9.]*)/
          }, {
              name: "Baidu Browser",
              regexp: /M?BaiduBrowser\/([0-9.]*)/i
          }, {
              name: "Camino",
              regexp: /Camino\/([0-9.]*)/
          }, {
              name: "Canure",
              regexp: /Canure\/([0-9.]*)/,
              details: 3
          }, {
              name: "CometBird",
              regexp: /CometBird\/([0-9.]*)/
          }, {
              name: "Comodo Dragon",
              regexp: /Comodo_Dragon\/([0-9.]*)/,
              details: 2
          }, {
              name: "Conkeror",
              regexp: /[Cc]onkeror\/([0-9.]*)/
          }, {
              name: "CoolNovo",
              regexp: /(?:CoolNovo|CoolNovoChromePlus)\/([0-9.]*)/,
              details: 3
          }, {
              name: "ChromePlus",
              regexp: /ChromePlus(?:\/([0-9.]*))?$/,
              details: 3
          }, {
              name: "Daedalus",
              regexp: /Daedalus ([0-9.]*)/,
              details: 2
          }, {
              name: "Demobrowser",
              regexp: /demobrowser\/([0-9.]*)/
          }, {
              name: "Dooble",
              regexp: /Dooble(?:\/([0-9.]*))?/
          }, {
              name: "DWB",
              regexp: /dwb(?:-hg)?(?:\/([0-9.]*))?/
          }, {
              name: "Epiphany",
              regexp: /Epiphany\/([0-9.]*)/
          }, {
              name: "FireWeb",
              regexp: /FireWeb\/([0-9.]*)/
          }, {
              name: "Flock",
              regexp: /Flock\/([0-9.]*)/,
              details: 3
          }, {
              name: "Galeon",
              regexp: /Galeon\/([0-9.]*)/,
              details: 3
          }, {
              name: "Helium",
              regexp: /HeliumMobileBrowser\/([0-9.]*)/
          }, {
              name: "iCab",
              regexp: /iCab\/([0-9.]*)/
          }, {
              name: "Iceape",
              regexp: /Iceape\/([0-9.]*)/
          }, {
              name: "IceCat",
              regexp: /IceCat ([0-9.]*)/
          }, {
              name: "Iceweasel",
              regexp: /Iceweasel\/([0-9.]*)/
          }, {
              name: "InternetSurfboard",
              regexp: /InternetSurfboard\/([0-9.]*)/
          }, {
              name: "Iron",
              regexp: /Iron\/([0-9.]*)/,
              details: 2
          }, {
              name: "Isis",
              regexp: /BrowserServer/
          }, {
              name: "Jumanji",
              regexp: /jumanji/
          }, {
              name: "Kazehakase",
              regexp: /Kazehakase\/([0-9.]*)/
          }, {
              name: "KChrome",
              regexp: /KChrome\/([0-9.]*)/,
              details: 3
          }, {
              name: "K-Meleon",
              regexp: /K-Meleon\/([0-9.]*)/
          }, {
              name: "Leechcraft",
              regexp: /Leechcraft(?:\/([0-9.]*))?/,
              details: 2
          }, {
              name: "Lightning",
              regexp: /Lightning\/([0-9.]*)/
          }, {
              name: "Lunascape",
              regexp: /Lunascape[\/| ]([0-9.]*)/,
              details: 3
          }, {
              name: "iLunascape",
              regexp: /iLunascape\/([0-9.]*)/,
              details: 3
          }, {
              name: "Maxthon",
              regexp: /Maxthon[\/ ]([0-9.]*)/,
              details: 3
          }, {
              name: "MiniBrowser",
              regexp: /MiniBr?owserM\/([0-9.]*)/
          }, {
              name: "MiniBrowser",
              regexp: /MiniBrowserMobile\/([0-9.]*)/
          }, {
              name: "MixShark",
              regexp: /MixShark\/([0-9.]*)/
          }, {
              name: "Motorola WebKit",
              regexp: /MotorolaWebKit\/([0-9.]*)/,
              details: 3
          }, {
              name: "NetFront LifeBrowser",
              regexp: /NetFrontLifeBrowser\/([0-9.]*)/
          }, {
              name: "Netscape Navigator",
              regexp: /Navigator\/([0-9.]*)/,
              details: 3
          }, {
              name: "Odyssey",
              regexp: /OWB\/([0-9.]*)/
          }, {
              name: "OmniWeb",
              regexp: /OmniWeb/
          }, {
              name: "Orca",
              regexp: /Orca\/([0-9.]*)/
          }, {
              name: "Origyn",
              regexp: /Origyn Web Browser/
          }, {
              name: "Palemoon",
              regexp: /Pale[mM]oon\/([0-9.]*)/
          }, {
              name: "Phantom",
              regexp: /Phantom\/V([0-9.]*)/
          }, {
              name: "Polaris",
              regexp: /Polaris\/v?([0-9.]*)/i,
              details: 2
          }, {
              name: "QtCreator",
              regexp: /QtCreator\/([0-9.]*)/
          }, {
              name: "QtQmlViewer",
              regexp: /QtQmlViewer/
          }, {
              name: "QtTestBrowser",
              regexp: /QtTestBrowser\/([0-9.]*)/
          }, {
              name: "QtWeb",
              regexp: /QtWeb Internet Browser\/([0-9.]*)/
          }, {
              name: "QupZilla",
              regexp: /QupZilla\/([0-9.]*)/
          }, {
              name: "Roccat",
              regexp: /Roccat\/([0-9]\.[0-9.]*)/
          }, {
              name: "Raven for Mac",
              regexp: /Raven for Mac\/([0-9.]*)/
          }, {
              name: "rekonq",
              regexp: /rekonq/
          }, {
              name: "RockMelt",
              regexp: /RockMelt\/([0-9.]*)/,
              details: 2
          }, {
              name: "Sleipnir",
              regexp: /Sleipnir\/([0-9.]*)/,
              details: 3
          }, {
              name: "SMBrowser",
              regexp: /SMBrowser/
          }, {
              name: "Sogou Explorer",
              regexp: /SE 2.X MetaSr/
          }, {
              name: "SunChrome",
              regexp: /SunChrome\/([0-9.]*)/
          }];
          for (var L = 0; L < F.length; L++) {
              if (match = F[L].regexp.exec(D)) {
                  this.browser.name = F[L].name;
                  this.browser.channel = "";
                  this.browser.stock = false;
                  if (match[1]) {
                      this.browser.version = new h({
                          value: match[1],
                          details: F[L].details || null
                      })
                  } else {
                      this.browser.version = null
                  }
              }
          }
          if (match = /WebKit\/([0-9.]*)/i.exec(D)) {
              this.engine.name = "Webkit";
              this.engine.version = new h({
                  value: match[1]
              })
          }
          if (match = /Browser\/AppleWebKit([0-9.]*)/i.exec(D)) {
              this.engine.name = "Webkit";
              this.engine.version = new h({
                  value: match[1]
              })
          }
          if (match = /KHTML\/([0-9.]*)/.exec(D)) {
              this.engine.name = "KHTML";
              this.engine.version = new h({
                  value: match[1]
              })
          }
          if (/Gecko/.exec(D) && !/like Gecko/i.exec(D)) {
              this.engine.name = "Gecko";
              if (match = /; rv:([^\)]+)\)/.exec(D)) {
                  this.engine.version = new h({
                      value: match[1]
                  })
              }
          }
          if (match = /Presto\/([0-9.]*)/.exec(D)) {
              this.engine.name = "Presto";
              this.engine.version = new h({
                  value: match[1]
              })
          }
          if (match = /Trident\/([0-9.]*)/.exec(D)) {
              this.engine.name = "Trident";
              this.engine.version = new h({
                  value: match[1]
              });
              if (this.browser.name === "Internet Explorer") {
                  if (a(this.engine.version) === 6 && parseFloat(this.browser.version) < 10) {
                      this.browser.version = new h({
                          value: "10.0"
                      });
                      this.browser.mode = "compat"
                  }
                  if (a(this.engine.version) === 5 && parseFloat(this.browser.version) < 9) {
                      this.browser.version = new h({
                          value: "9.0"
                      });
                      this.browser.mode = "compat"
                  }
                  if (a(this.engine.version) === 4 && parseFloat(this.browser.version) < 8) {
                      this.browser.version = new h({
                          value: "8.0"
                      });
                      this.browser.mode = "compat"
                  }
              }
              if (this.os.name === "Windows Phone") {
                  if (a(this.engine.version) === 5 && parseFloat(this.os.version) < 7.5) {
                      this.os.version = new h({
                          value: "7.5"
                      })
                  }
              }
          }
          if (this.os.name === "Android" && this.browser.stock) {
              this.browser.hidden = true
          }
          if (this.os.name === "iOS" && this.browser.name === "Opera Mini") {
              this.os.version = null
          }
          if (this.browser.name === "Midori" && this.engine.name !== "Webkit") {
              this.engine.name = "Webkit";
              this.engine.version = null
          }
          if (this.device.type === "television" && this.browser.name === "Opera") {
              this.browser.name = "Opera Devices";
              switch (true) {
              case this.engine.version.is("2.10"):
                  this.browser.version = new h({
                      value: 3.2
                  });
                  break;
              case this.engine.version.is("2.9"):
                  this.browser.version = new h({
                      value: 3.1
                  });
                  break;
              case this.engine.version.is("2.8"):
                  this.browser.version = new h({
                      value: 3
                  });
                  break;
              case this.engine.version.is("2.7"):
                  this.browser.version = new h({
                      value: 2.9
                  });
                  break;
              case this.engine.version.is("2.6"):
                  this.browser.version = new h({
                      value: 2.8
                  });
                  break;
              case this.engine.version.is("2.4"):
                  this.browser.version = new h({
                      value: 10.3
                  });
                  break;
              case this.engine.version.is("2.3"):
                  this.browser.version = new h({
                      value: 10
                  });
                  break;
              case this.engine.version.is("2.2"):
                  this.browser.version = new h({
                      value: 9.7
                  });
                  break;
              case this.engine.version.is("2.1"):
                  this.browser.version = new h({
                      value: 9.6
                  });
                  break;
              default:
                  this.browser.version = null
              }
              this.os.name = null;
              this.os.version = null
          }
          if (this.options.detectCamouflage) {
              if (match = /Mac OS X 10_6_3; ([^;]+); [a-z]{2}-(?:[a-z]{2})?\)/.exec(D)) {
                  this.browser.name = "";
                  this.browser.version = null;
                  this.browser.mode = "desktop";
                  this.os.name = "Android";
                  this.os.version = null;
                  this.engine.name = "Webkit";
                  this.engine.version = null;
                  this.device.model = match[1];
                  this.device.type = "mobile";
                  var I = l(this.device.model);
                  if (typeof q[I] !== "undefined") {
                      this.device.manufacturer = q[I][0];
                      this.device.model = q[I][1];
                      if (typeof q[I][2] !== "undefined") {
                          this.device.type = q[I][2]
                      }
                      this.device.identified = true
                  }
                  this.features.push("foundDevice")
              }
              if (match = /Linux Ventana; [a-z]{2}-[a-z]{2}; (.+) Build/.exec(D)) {
                  this.browser.name = "";
                  this.browser.version = null;
                  this.browser.mode = "desktop";
                  this.os.name = "Android";
                  this.os.version = null;
                  this.engine.name = "Webkit";
                  this.engine.version = null;
                  this.device.model = match[1];
                  this.device.type = "mobile";
                  var I = l(this.device.model);
                  if (typeof q[I] !== "undefined") {
                      this.device.manufacturer = q[I][0];
                      this.device.model = q[I][1];
                      if (typeof q[I][2] !== "undefined") {
                          this.device.type = q[I][2]
                      }
                      this.device.identified = true
                  }
                  this.features.push("foundDevice")
              }
              if (this.browser.name === "Safari") {
                  if (this.os.name !== "iOS" && /AppleWebKit\/([0-9]+.[0-9]+)/i.exec(D)[1] !== /Safari\/([0-9]+.[0-9]+)/i.exec(D)[1]) {
                      this.features.push("safariMismatch");
                      this.camouflage = true
                  }
                  if (this.os.name === "iOS" && !D.match(/^Mozilla/)) {
                      this.features.push("noMozillaPrefix");
                      this.camouflage = true
                  }
                  if (!/Version\/[0-9\.]+/.exec(D)) {
                      this.features.push("noVersion");
                      this.camouflage = true
                  }
              }
              if (this.browser.name === "Chrome") {
                  if (!/(?:Chrome|CrMo|CriOS)\/([0-9]{1,2}\.[0-9]\.[0-9]{3,4}\.[0-9]+)/.exec(D)) {
                      this.features.push("wrongVersion");
                      this.camouflage = true
                  }
              }
              if (this.options.useFeatures) {
                  if (window.ActiveXObject) {
                      this.features.push("trident");
                      if (typeof this.engine.name !== "undefined" && this.engine.name !== "Trident") {
                          this.camouflage = typeof this.browser.name === "undefined" || this.browser.name !== "Maxthon"
                      }
                  }
                  if (window.opera) {
                      this.features.push("presto");
                      if (typeof this.engine.name !== "undefined" && this.engine.name !== "Presto") {
                          this.camouflage = true
                      }
                      if (this.browser.name === "Internet Explorer") {
                          this.camouflage = true
                      }
                  }
                  if ("getBoxObjectFor"in document || "mozInnerScreenX"in window) {
                      this.features.push("gecko");
                      if (typeof this.engine.name !== "undefined" && this.engine.name !== "Gecko") {
                          this.camouflage = true
                      }
                      if (this.browser.name === "Internet Explorer") {
                          this.camouflage = true
                      }
                  }
                  if ("WebKitCSSMatrix"in window || "WebKitPoint"in window || "webkitStorageInfo"in window || "webkitURL"in window) {
                      this.features.push("webkit");
                      if (typeof this.engine.name !== "undefined" && this.engine.name !== "Webkit") {
                          this.camouflage = true
                      }
                      if (this.browser.name === "Internet Explorer") {
                          this.camouflage = true
                      }
                  }
                  if (this.engine.name === "Webkit" && ({}.toString).toString().indexOf("\n") === -1) {
                      this.features.push("v8");
                      if (this.browser !== null && this.browser.name === "Safari") {
                          this.camouflage = true
                      }
                  }
                  if (this.device.model === "iPad") {
                      if ((screen.width !== 0 && screen.height !== 0) && (screen.width !== 768 && screen.height !== 1024) && (screen.width !== 1024 && screen.height !== 768)) {
                          this.features.push("sizeMismatch");
                          this.camouflage = true
                      }
                  }
                  if (this.device.model === "iPhone" || this.device.model === "iPod") {
                      if ((screen.width !== 0 && screen.height !== 0) && (screen.width !== 320 && screen.height !== 480) && (screen.width !== 480 && screen.height !== 320)) {
                          this.features.push("sizeMismatch");
                          this.camouflage = true
                      }
                  }
                  if (this.os.name === "iOS" && this.os.version) {
                      if (this.os.version.isOlder("4.0") && "sandbox"in document.createElement("iframe")) {
                          this.features.push("foundSandbox");
                          this.camouflage = true
                      }
                      if (this.os.version.isOlder("4.2") && "WebSocket"in window) {
                          this.features.push("foundSockets");
                          this.camouflage = true
                      }
                      if (this.os.version.isOlder("5.0") && !!window.Worker) {
                          this.features.push("foundWorker");
                          this.camouflage = true
                      }
                      if (this.os.version.isNewer("2.1") && !window.applicationCache) {
                          this.features.push("noAppCache");
                          this.camouflage = true
                      }
                  }
                  if (this.os.name !== "iOS" && this.browser.name === "Safari" && this.browser.version) {
                      if (this.browser.version.isOlder("4.0") && !!window.applicationCache) {
                          this.features.push("foundAppCache");
                          this.camouflage = true
                      }
                      if (this.browser.version.isOlder("4.1") && !!(window.history && history.pushState)) {
                          this.features.push("foundHistory");
                          this.camouflage = true
                      }
                      if (this.browser.version.isOlder("5.1") && !!document.documentElement.webkitRequestFullScreen) {
                          this.features.push("foundFullscreen");
                          this.camouflage = true
                      }
                      if (this.browser.version.isOlder("5.2") && "FileReader"in window) {
                          this.features.push("foundFileReader");
                          this.camouflage = true
                      }
                  }
              }
          }
      }
  };
  function l(D) {
      D = typeof D === "undefined" ? "" : D;
      D = D.replace(/_TD$/, "");
      D = D.replace(/_CMCC$/, "");
      D = D.replace(/_/g, " ");
      D = D.replace(/^\s+|\s+$/g, "");
      D = D.replace(/\/[^/]+$/, "");
      D = D.replace(/\/[^/]+ Android\/.*/, "");
      D = D.replace(/^tita on /, "");
      D = D.replace(/^Android on /, "");
      D = D.replace(/^Android for /, "");
      D = D.replace(/^ICS AOSP on /, "");
      D = D.replace(/^Full AOSP on /, "");
      D = D.replace(/^Full Android on /, "");
      D = D.replace(/^Full Cappuccino on /, "");
      D = D.replace(/^Full MIPS Android on /, "");
      D = D.replace(/^Full Android/, "");
      D = D.replace(/^Acer ?/i, "");
      D = D.replace(/^Iconia /, "");
      D = D.replace(/^Ainol /, "");
      D = D.replace(/^Coolpad ?/i, "Coolpad ");
      D = D.replace(/^ALCATEL /, "");
      D = D.replace(/^Alcatel OT-(.*)/, "one touch $1");
      D = D.replace(/^YL-/, "");
      D = D.replace(/^Novo7 ?/i, "Novo7 ");
      D = D.replace(/^GIONEE /, "");
      D = D.replace(/^HW-/, "");
      D = D.replace(/^Huawei[ -]/i, "Huawei ");
      D = D.replace(/^SAMSUNG[ -]/i, "");
      D = D.replace(/^SonyEricsson/, "");
      D = D.replace(/^Lenovo Lenovo/, "Lenovo");
      D = D.replace(/^LNV-Lenovo/, "Lenovo");
      D = D.replace(/^Lenovo-/, "Lenovo ");
      D = D.replace(/^(LG)[ _\/]/, "$1-");
      D = D.replace(/^(HTC.*)\s(?:v|V)?[0-9.]+$/, "$1");
      D = D.replace(/^(HTC)[-\/]/, "$1 ");
      D = D.replace(/^(HTC)([A-Z][0-9][0-9][0-9])/, "$1 $2");
      D = D.replace(/^(Motorola[\s|-])/, "");
      D = D.replace(/^(Moto|MOT-)/, "");
      D = D.replace(/-?(orange(-ls)?|vodafone|bouygues)$/i, "");
      D = D.replace(/http:\/\/.+$/i, "");
      D = D.replace(/^\s+|\s+$/g, "");
      return D
  }
  function a(D) {
      D = D.toString();
      var F = D.split(".");
      var E = F.shift();
      return parseFloat(E + "." + F.join(""))
  }
  return w
}
)();
var tracker_ua_device = function(b) {
  var d = tracker_ua_base;
  var h = new d(b);
  var a;
  var g;
  if (h.device.type === "mobile" || h.device.type === "tablet") {
      if (a = b.match(/(ZTE|Samsung|Motorola|HTC|Coolpad|Huawei|Lenovo|LG|Sony Ericsson|Oppo|TCL|Vivo|Sony|Meizu|Nokia)/i)) {
          h.device.manufacturer = a[1];
          if (h.device.model && h.device.model.indexOf(a[1]) >= 0) {
              h.device.model = h.device.model.replace(a[1], "")
          }
      }
      if (a = b.match(/(iPod|iPad|iPhone)/i)) {
          h.device.manufacturer = "Apple";
          h.device.model = a[1]
      } else {
          if (a = b.match(/[-\s](Galaxy[\s-_]nexus|Galaxy[\s-_]\w*[\s-_]\w*|Galaxy[\s-_]\w*|SM-\w*|GT-\w*|s[cgp]h-\w*|shw-\w*|ATIV|i9070|omnia|s7568|A3000|A3009|A5000|A5009|A7000|A7009|A8000|C101|C1116|C1158|E400|E500F|E7000|E7009|G3139D|G3502|G3502i|G3508|G3508J|G3508i|G3509|G3509i|G3558|G3559|G3568V|G3586V|G3589W|G3606|G3608|G3609|G3812|G388F|G5108|G5108Q|G5109|G5306W|G5308W|G5309W|G550|G600|G7106|G7108|G7108V|G7109|G7200|G720NO|G7508Q|G7509|G8508S|G8509V|G9006V|G9006W|G9008V|G9008W|G9009D|G9009W|G9198|G9200|G9208|G9209|G9250|G9280|I535|I679|I739|I8190N|I8262|I879|I879E|I889|I9000|I9060|I9082|I9082C|I9082i|I9100|I9100G|I9108|I9128|I9128E|I9128i|I9152|I9152P|I9158|I9158P|I9158V|I9168|I9168i|I9190|I9192|I9195|I9195I|I9200|I9208|I9220|I9228|I9260|I9268|I9300|I9300i|I9305|I9308|I9308i|I939|I939D|I939i|I9500|I9502|I9505|I9507V|I9508|I9508V|I959|J100|J110|J5008|J7008|N7100|N7102|N7105|N7108|N7108D|N719|N750|N7505|N7506V|N7508V|N7509V|N900|N9002|N9005|N9006|N9008|N9008S|N9008V|N9009|N9100|N9106W|N9108V|N9109W|N9150|N916|N9200|P709|P709E|P729|S6358|S7278|S7278U|S7562C|S7562i|S7898i|b9388)[\s\)]/i)) {
              h.device.manufacturer = "Samsung";
              h.device.model = a[1].replace(/Galaxy S VI/i, "Galaxy S6").replace(/Galaxy S V/i, "Galaxy S5").replace(/Galaxy S IV/i, "Galaxy S4").replace(/Galaxy s III/i, "Galaxy S3").replace(/Galaxy S II/i, "Galaxy S2").replace(/Galaxy S I/i, "Galaxy S1").replace(/([a-z]+[0-9]{3})[0-9]?[a-z]*/i, "$1")
          } else {
              if (h.device.manufacturer && h.device.manufacturer.toLowerCase() === "samsung" && h.device.model) {
                  h.device.model = h.device.model.replace(/Galaxy S VI/i, "Galaxy S6").replace(/Galaxy S V/i, "Galaxy S5").replace(/Galaxy S IV/i, "Galaxy S4").replace(/Galaxy s III/i, "Galaxy S3").replace(/Galaxy S II/i, "Galaxy S2").replace(/Galaxy S I/i, "Galaxy S1").replace(/([a-z]+[0-9]{3})[0-9]?[a-z]*/i, "$1")
              } else {
                  if (a = b.match(/(Huawei[\s-_](\w*[-_]?\w*)|\s(7D-\w*|ALE-\w*|ATH-\w*|CHE-\w*|CHM-\w*|Che1-\w*|Che2-\w*|D2-\w*|G616-\w*|G620S-\w*|G621-\w*|G660-\w*|G750-\w*|GRA-\w*|Hol-\w*|MT2-\w*|MT7-\w*|PE-\w*|PLK-\w*|SC-\w*|SCL-\w*|H60-\w*|H30-\w*)[\s\)])/i)) {
                      h.device.manufacturer = "Huawei";
                      if (a[2]) {
                          h.device.model = a[2]
                      } else {
                          if (a[3]) {
                              h.device.model = a[3]
                          }
                      }
                      if (a = h.device.model.match(/(\w*)[\s-_]+[a-z0-9]+/i)) {
                          h.device.model = a[1]
                      }
                  } else {
                      if (a = b.match(/;\s(mi|m1|m2|m3|m4|hm)(\s*\w*)[\s\)]/i)) {
                          if (g = b.match(/(meitu|MediaPad)/i)) {
                              h.device.manufacturer = g[1];
                              h.device.model = ""
                          } else {
                              if (a[2].length > 0 && !((/\s/).test(a[2]))) {
                                  if (g = a[2].match(/(\d)/i)) {
                                      h.device.model = a[1] + "-" + g[1]
                                  }
                              } else {
                                  h.device.manufacturer = "Xiaomi";
                                  if (a[2] && a[2].length > 0) {
                                      a[2] = a[2].replace(/\s/, "");
                                      h.device.model = (a[1].substr(a[1].length - 2) + "-" + a[2]).replace(/m(\d)-/i, "MI-$1")
                                  } else {
                                      h.device.model = (a[1].substr(a[1].length - 2)).replace(/m(\d)/i, "MI-$1")
                                  }
                                  if (/(mi|hm)(-\d)/i.test(h.device.model)) {
                                      if (a = h.device.model.match(/(mi|hm)(-\ds)/i)) {
                                          h.device.model = a[1] + a[2]
                                      } else {
                                          if (a = h.device.model.match(/(mi|hm)(-\d{2})/i)) {
                                              h.device.model = a[1]
                                          } else {
                                              if (a = h.device.model.match(/(mi|hm)(-\d)[A-Z]/i)) {
                                                  h.device.model = a[1] + a[2]
                                              }
                                          }
                                      }
                                  }
                                  if (a = h.device.model.match(/(mi|hm)(-\dg)/i)) {
                                      h.device.model = a[1]
                                  }
                              }
                          }
                      } else {
                          if (/build\/HM\d{0,7}\)/i.test(b)) {
                              h.device.manufacturer = "Xiaomi";
                              h.device.model = "HM"
                          } else {
                              if (a = b.match(/redmi\s?(\d+)?/i)) {
                                  h.device.manufacturer = "Xiaomi";
                                  h.device.model = "HM-" + a[1]
                              } else {
                                  if (h.device.manufacturer && h.device.manufacturer.toLowerCase() === "xiaomi" && h.device.model) {
                                      if (a = h.device.model.match(/mi-one/i)) {
                                          h.device.model = "MI-1"
                                      } else {
                                          if (a = h.device.model.match(/mi-two/i)) {
                                              h.device.model = "MI-2"
                                          } else {
                                              if (a = h.device.model.match(/\d{6}/i)) {
                                                  h.device.model = ""
                                              } else {
                                                  if (a = h.device.model.match(/redmi/i)) {
                                                      h.device.model = h.device.model.toUpperCase().replace(/redmi/i, "HM")
                                                  } else {
                                                      if (a = h.device.model.match(/(m\d)[\s-_](s?)/i)) {
                                                          h.device.model = a[1].replace(/m/, "MI-") + a[2]
                                                      } else {
                                                          if (a = h.device.model.match(/(hm|mi)[\s-_](\d?)[a-rt-z]/i)) {
                                                              if (g = h.device.model.match(/(mi|hm)[\s-_](note|pad)(\d?s?)/i)) {
                                                                  h.device.model = g[1] + "-" + g[2] + g[3]
                                                              } else {
                                                                  h.device.model = a[2] ? a[1] + "-" + a[2] : a[1]
                                                              }
                                                          } else {
                                                              if (a = h.device.model.match(/hm/i)) {
                                                                  if (a = h.device.model.match(/(hm)[\s-_](\d{2})/i)) {
                                                                      h.device.model = "HM"
                                                                  } else {
                                                                      if (a = h.device.model.match(/(hm)[\s-_](\ds)/i)) {
                                                                          h.device.model = "HM-" + a[2]
                                                                      } else {
                                                                          if (a = h.device.model.match(/(hm)[\s-_](\d)[a-z]/i)) {
                                                                              h.device.model = "HM-" + a[2]
                                                                          } else {
                                                                              h.device.model = "HM"
                                                                          }
                                                                      }
                                                                  }
                                                                  if (/hm-\dg/.test(h.device.model)) {
                                                                      h.device.model = "HM"
                                                                  }
                                                              }
                                                          }
                                                      }
                                                  }
                                              }
                                          }
                                      }
                                  } else {
                                      if (a = b.match(/(vivo[\s-_](\w*)|\s(E1\w?|E3\w?|E5\w?|V1\w?|V2\w?|S11\w?|S12\w?|S1\w?|S3\w?|S6\w?|S7\w?|S9\w?|X1\w?|X3\w?|X520\w?|X5\w?|X5Max|X5Max+|X5Pro|X5SL|X710F|X710L|Xplay|Xshot|Xpaly3S|Y11\w?|Y11i\w?|Y11i\w?|Y13\w?|Y15\w?|Y17\w?|Y18\w?|Y19\w?|Y1\w?|Y20\w?|Y22\w?|Y22i\w?|Y23\w?|Y27\w?|Y28\w?|Y29\w?|Y33\w?|Y37\w?|Y3\w?|Y613\w?|Y622\w?|Y627\w?|Y913\w?|Y923\w?|Y927\w?|Y928\w?|Y929\w?|Y937\w?)[\s\)])/i)) {
                                          h.device.manufacturer = "Vivo";
                                          h.device.model = a[1];
                                          h.device.model = h.device.model.replace(/(viv[\s-_]|vivo[\s-_]|bbg[\s-_])/i, "");
                                          if (a = h.device.model.match(/([a-z]+[0-9]+)i?[a-z]?[\s-_]?/i)) {
                                              h.device.model = a[1]
                                          }
                                      } else {
                                          if (a = b.match(/(Oppo[\s-_](\w*)|\s(1100|1105|1107|3000|3005|3007|6607|A100|A103|A105|A105K|A109|A109K|A11|A113|A115|A115K|A121|A125|A127|A129|A201|A203|A209|A31|A31c|A31t|A31u|A51kc|A520|A613|A615|A617|E21W|Find|Mirror|N5110|N5117|N5207|N5209|R2010|R2017|R6007|R7005|R7007|R7c|R7t|R8000|R8007|R801|R805|R807|R809T|R8107|R8109|R811|R811W|R813T|R815T|R815W|R817|R819T|R8200|R8205|R8207|R821T|R823T|R827T|R830|R830S|R831S|R831T|R833T|R850|Real|T703|U2S|U521|U525|U529|U539|U701|U701T|U705T|U705W|X9000|X9007|X903|X905|X9070|X9077|X909|Z101|R829T)[\s\)])/i)) {
                                              h.device.manufacturer = "Oppo";
                                              if (a[2]) {
                                                  h.device.model = a[2]
                                              } else {
                                                  if (a[3]) {
                                                      h.device.model = a[3]
                                                  }
                                              }
                                              if (a = h.device.model.match(/([a-z]+[0-9]+)-?(plus)/i)) {
                                                  h.device.model = a[1] + "-" + a[2]
                                              } else {
                                                  if (a = h.device.model.match(/(\w*-?[a-z]+[0-9]+)/i)) {
                                                      h.device.model = a[1]
                                                  }
                                              }
                                          } else {
                                              if (h.device.manufacturer && h.device.manufacturer.toLowerCase() === "oppo" && h.device.model) {
                                                  if (a = h.device.model.match(/([a-z]+[0-9]+)-?(plus)/i)) {
                                                      h.device.model = a[1] + "-" + a[2]
                                                  } else {
                                                      if (a = h.device.model.match(/(\w*-?[a-z]+[0-9]+)/i)) {
                                                          h.device.model = a[1]
                                                      }
                                                  }
                                              } else {
                                                  if (a = b.match(/\s(mx\d*\w*|mz-(\w*))\s(\w*)\s*\w*\s*build/i)) {
                                                      h.device.manufacturer = "Meizu";
                                                      var f = a[2] ? a[2] : a[1];
                                                      if (a[3]) {
                                                          h.device.model = f + "-" + a[3]
                                                      } else {
                                                          h.device.model = f + ""
                                                      }
                                                  } else {
                                                      if (a = b.match(/M463C|M35\d/i)) {
                                                          h.device.manufacturer = "Meizu";
                                                          h.device.model = a[1]
                                                      } else {
                                                          if (h.device.manufacturer && h.device.manufacturer.toLowerCase() === "zte" && h.device.model) {
                                                              if (a = h.device.model.match(/([a-z]?[0-9]+)/i)) {
                                                                  h.device.model = a[1]
                                                              }
                                                          } else {
                                                              if (a = b.match(/(Nubia[-_\s](\w*)|(NX501|NX505J|NX506J|NX507J|NX503A|nx\d+\w*)[\s\)])/i)) {
                                                                  h.device.manufacturer = "Nubia";
                                                                  if (a[2]) {
                                                                      h.device.model = a[2]
                                                                  } else {
                                                                      if (a[3]) {
                                                                          h.device.model = a[3]
                                                                      }
                                                                  }
                                                              }
                                                          }
                                                      }
                                                  }
                                              }
                                          }
                                      }
                                  }
                              }
                          }
                      }
                  }
              }
          }
      }
      if (h.device.manufacturer) {
          h.device.manufacturer = h.device.manufacturer.substr(0, 1).toUpperCase() + h.device.manufacturer.substr(1).toLowerCase()
      }
      if (h.device.model) {
          h.device.model = h.device.model.toUpperCase().replace(/-+|_+|\s+/g, " ");
          h.device.model = h.device.model.match(/\s*(\w*\s*\w*)/)[1].replace(/\s+/, "-");
          if (h.device.manufacturer === "Samsung") {
              h.device.model = ({
                  "SCH-I95": "GT-I950",
                  "SCH-I93": "GT-I930",
                  "SCH-I86": "GT-I855",
                  "SCH-N71": "GT-N710",
                  "SCH-I73": "GT-S789",
                  "SCH-P70": "GT-I915"
              })[h.device.model] || h.device.model
          } else {
              if (h.device.manufacturer === "Huawei") {
                  h.device.model = ({
                      CHE1: "CHE",
                      CHE2: "CHE",
                      G620S: "G621",
                      C8817D: "G621"
                  })[h.device.model] || h.device.model
              }
          }
      }
      if (h.device.manufacturer && h.device.manufacturer === "Xiaomi") {
          if (a = h.device.model.match(/(hm|mi)-(note)/i)) {
              h.device.model = a[1] + "-" + a[2]
          } else {
              if (a = h.device.model.match(/(hm|mi)-(\ds?)/i)) {
                  h.device.model = a[1] + "-" + a[2]
              } else {
                  if (a = h.device.model.match(/(hm|mi)-(\d)[a-rt-z]/i)) {
                      h.device.model = a[1] + "-" + a[2]
                  }
              }
          }
      }
  }
  if (h.device.type === "desktop") {
      if (a = b.match(/(Mac OS X [0-9\._]*)/i)) {
          h.device.manufacturer = "Apple";
          h.device.model = a[1]
      }
      if (a = /360se(?:[ \/]([\w.]+))?/i.exec(b)) {
          h.browser.name = "360 security Explorer";
          h.browser.version = {
              original: a[1]
          }
      } else {
          if (a = /the world(?:[ \/]([\w.]+))?/i.exec(b)) {
              h.browser.name = "the world";
              h.browser.version = {
                  original: a[1]
              }
          } else {
              if (a = /tencenttraveler ([\w.]+)/i.exec(b)) {
                  h.browser.name = "tencenttraveler";
                  h.browser.version = {
                      original: a[1]
                  }
              } else {
                  if (a = /LBBROWSER/i.exec(b)) {
                      h.browser.name = "LBBROWSER"
                  }
              }
          }
      }
  } else {
      if (h.device.type === "mobile" || h.device.type === "tablet") {
          if (a = /BaiduHD\s+([\w.]+)/i.exec(b)) {
              h.browser.name = "BaiduHD";
              h.browser.version = {
                  original: a[1]
              }
          } else {
              if (a = /360.s*aphone\s*browser\s*\(version\s*([\w.]+)\)/i.exec(b)) {
                  h.browser.name = "360 Browser";
                  h.browser.version = {
                      original: a[1]
                  }
              } else {
                  if (a = /flyflow\/([\w.]+)/i.exec(b)) {
                      h.browser.name = "Baidu Browser";
                      h.browser.version = {
                          original: a[1]
                      }
                  } else {
                      if (a = /baiduhd ([\w.]+)/i.exec(b)) {
                          h.browser.name = "Baidu HD";
                          h.browser.version = {
                              original: a[1]
                          }
                      } else {
                          if (a = /baidubrowser\/([\d\.]+)\s/i.exec(b)) {
                              h.browser.name = "baidubrowser";
                              h.browser.version = {
                                  original: a[1]
                              }
                          } else {
                              if (a = /LieBaoFast\/([\w.]+)/i.exec(b)) {
                                  h.browser.name = "LieBao Fast";
                                  h.browser.version = {
                                      original: a[1]
                                  }
                              } else {
                                  if (a = /LieBao\/([\w.]+)/i.exec(b)) {
                                      h.browser.name = "LieBao";
                                      h.browser.version = {
                                          original: a[1]
                                      }
                                  } else {
                                      if (a = /Sogou\w+\/([0-9\.]+)/i.exec(b)) {
                                          h.browser.name = "SogouMobileBrowser";
                                          h.browser.version = {
                                              original: a[1]
                                          }
                                      } else {
                                          if (a = /bdbrowser\w+\/([0-9\.]+)/i.exec(b)) {
                                              h.browser.name = "百度国际";
                                              h.browser.version = {
                                                  original: a[1]
                                              }
                                          } else {
                                              if (h.os.name === "Android" && /safari/i.test(b) && (a = /chrome\/([0-9\.]+)/i.exec(b))) {
                                                  if (g = b.match(/\s+(\w+Browser)\/?([\d\.]*)/)) {
                                                      h.browser.name = g[1];
                                                      if (g[2]) {
                                                          h.browser.version = {
                                                              original: g[2]
                                                          }
                                                      } else {
                                                          h.browser.version = {
                                                              original: a[1]
                                                          }
                                                      }
                                                  } else {
                                                      h.browser.name = "Android Chrome";
                                                      h.browser.version = {
                                                          original: a[1]
                                                      }
                                                  }
                                              } else {
                                                  if (h.os.name === "Android" && /safari/i.test(b) && (a = /version\/([0-9\.]+)/i.exec(b))) {
                                                      if (g = b.match(/\s+(\w+Browser)\/?([\d\.]*)/)) {
                                                          h.browser.name = g[1];
                                                          if (g[2]) {
                                                              h.browser.version = {
                                                                  original: g[2]
                                                              }
                                                          } else {
                                                              h.browser.version = {
                                                                  original: a[1]
                                                              }
                                                          }
                                                      } else {
                                                          h.browser.name = "Android Browser";
                                                          h.browser.version = {
                                                              original: a[1]
                                                          }
                                                      }
                                                  } else {
                                                      if (/(ipad|iphone).* applewebkit\/.* mobile/i.test(b)) {
                                                          h.browser.name = "Safari"
                                                      }
                                                  }
                                              }
                                          }
                                      }
                                  }
                              }
                          }
                      }
                  }
              }
          }
      }
  }
  if (a = b.match(/baiduboxapp\/?([\d\.]*)/i)) {
      h.browser.name = "百度框";
      if (a[1]) {
          h.browser.version = {
              original: a[1]
          }
      }
  } else {
      if (/BaiduLightAppRuntime/i.test(b)) {
          h.browser.name = "轻应用runtime"
      } else {
          if (/Weibo/i.test(b)) {
              h.browser.name = "微博"
          } else {
              if (/MQQ/i.test(b)) {
                  h.browser.name = "手机QQ"
              } else {
                  if (/hao123/i.test(b)) {
                      h.browser.name = "hao123"
                  }
              }
          }
      }
  }
  if (a = /MicroMessenger\/([\w.]+)/i.exec(b)) {
      h.browser.name = "微信";
      var e = (a[1]).replace(/_/g, ".");
      g = /(\d+\.\d+\.\d+\.\d+)/.exec(e);
      if (g) {
          e = g[1]
      }
      h.browser.version = {
          original: e
      }
  }
  if (a = /UCBrowser\/([\w.]+)/i.exec(b)) {
      h.browser.name = "UC Browser";
      h.browser.version = {
          original: a[1]
      }
  }
  if (a = /OPR\/([\w.]+)/i.exec(b)) {
      h.browser.name = "Opera";
      h.browser.version = {
          original: a[1]
      }
  } else {
      if (a = /OPiOS\/([\w.]+)/i.exec(b)) {
          h.browser.name = "Opera";
          h.browser.version = {
              original: a[1]
          }
      } else {
          if (/Trident\/7/i.test(b) && /rv:11/i.test(b)) {
              h.browser.name = "Internet Explorer";
              h.browser.version = {
                  major: "11",
                  original: "11"
              }
          } else {
              if (/Edge\/12/i.test(b) && /Windows Phone|Windows NT/i.test(b)) {
                  h.browser.name = "Microsoft Edge";
                  h.browser.version = {
                      major: "12",
                      original: "12"
                  }
              } else {
                  if (a = /miuibrowser\/([\w.]+)/i.exec(b)) {
                      h.browser.name = "miui browser";
                      h.browser.version = {
                          original: a[1]
                      }
                  }
              }
          }
      }
  }
  if (!h.browser.name) {
      if (a = /Safari\/([\w.]+)/i.exec(b) && /Version/i.test(b)) {
          h.browser.name = "Safari"
      }
  }
  if (h.browser.name && !h.browser.version) {
      if (a = /Version\/([\w.]+)/i.exec(b)) {
          h.browser.version = {
              original: a[1]
          }
      }
  }
  if (h.os.name === "Windows" || /Windows/i.test(b)) {
      h.os.name = "Windows";
      if (/NT 6.3/i.test(b)) {
          h.os.version = {
              alias: "8.1",
              original: "8.1"
          }
      } else {
          if (/NT 6.4/i.test(b) || /NT 10.0/i.test(b)) {
              h.os.version = {
                  alias: "10",
                  original: "10"
              }
          }
      }
  } else {
      if (h.os.name === "Mac OS X") {
          h.os.name = "Mac OS X";
          if (a = /Mac OS X[\s\_\-\/](\d+[\.\-\_]\d+[\.\-\_]?\d*)/i.exec(b)) {
              h.os.version = {
                  alias: a[1].replace(/_/g, "."),
                  original: a[1].replace(/_/g, ".")
              }
          } else {
              h.os.version = {
                  alias: "",
                  original: ""
              }
          }
      } else {
          if (/Android/i.test(h.os.name)) {
              if (a = b.match(/Android[\s\_\-\/i686]?[\s\_\-\/](\d+[\.\-\_]\d+[\.\-\_]?\d*)/i)) {
                  h.os.version = {
                      alias: a[1],
                      original: a[1]
                  }
              }
          }
      }
  }
  return h
};
window.bigdataLogs = [];
window.log = {};
window.log.e_d = {};
window.log.page_start_time = new Date().getTime();
window.log.page_url = window.location.href;
Date.prototype.format = function(a) {
  let o = {
      "y+": this.getFullYear(),
      "M+": this.getMonth() + 1,
      "d+": this.getDate(),
      "h+": this.getHours(),
      "m+": this.getMinutes(),
      "s+": this.getSeconds(),
      "q+": Math.floor((this.getMonth() + 3) / 3),
      "S+": this.getMilliseconds()
  };
  for (let k in o) {
      if (new RegExp("(" + k + ")").test(a)) {
          if (k === "y+") {
              a = a.replace(RegExp.$1, ("" + o[k]).substr(4 - RegExp.$1.length))
          } else {
              if (k === "S+") {
                  let lens = RegExp.$1.length;
                  lens = lens === 1 ? 3 : lens;
                  a = a.replace(RegExp.$1, ("00" + o[k]).substr(("" + o[k]).length - 1, lens))
              } else {
                  a = a.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
              }
          }
      }
  }
  return a
}
;
String.prototype.hashCode = function() {
  let hash = 0;
  if (this.length === 0) {
      return hash
  }
  for (let i = 0; i < this.length; i++) {
      let c = this.charCodeAt(i);
      hash = ((hash << 5) - hash) + c;
      hash = hash & hash
  }
  hash = Math.abs(hash);
  return hash
}
;
function getAction1(a) {
  let cat = a.getAttribute("cat");
  let act = a.getAttribute("act");
  let obj = {};
  if (cat && act) {
      obj = {
          cat: cat,
          act: act,
          rdt: "3"
      }
  }
  return obj
}
function getAction2(a) {
  let bd_attr = a.getAttribute("bd_attr");
  let obj = {};
  if (bd_attr) {
      let level1_fields = ["product", "cat", "act", "b_t", "b_v"];
      obj.rdt = "3";
      let kv_pairs = bd_attr.split("&");
      for (let idx in kv_pairs) {
          let kv = kv_pairs[idx].split("=");
          if (kv.length === 2 && kv[0] && kv[1]) {
              if (level1_fields.indexOf(kv[0]) > -1) {
                  obj[kv[0]] = kv[1]
              }
          }
      }
  }
  return obj
}
function isChrome() {
  return window.navigator.userAgent.indexOf("Chrome") !== -1
}
function setCookie(a, b, d) {
  let domain = document.domain;
  if (domain.endsWith(".com.cn") || domain.endsWith(".org.cn") || domain.endsWith(".net.cn")) {
      domain = domain.split(".").slice(-3).join(".")
  } else {
      domain = domain.split(".").slice(-2).join(".")
  }
  if (isChrome()) {
      let exp = new Date();
      exp.setTime(exp.getTime() + d);
      document.cookie = a + "=" + encodeURIComponent(b) + ";domain=" + domain + ";path=/;expires=" + exp.toUTCString()
  } else {
      document.cookie = a + "=" + encodeURIComponent(b) + ";domain=" + domain + ";path=/;"
  }
}
function getCookie(a) {
  let arr, reg = new RegExp("(^| )" + a + "=([^;]*)(;|$)");
  let result = document.cookie.match(reg);
  if (result) {
      return decodeURIComponent(result[2])
  } else {
      return null
  }
}
function removeCookie(a) {
  setCookie(a, "", 1000)
}
function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
      let r = Math.random() * 16 | 0
        , v = a === "x" ? r : (r & 3 | 8);
      return v.toString(16)
  })
}
function uuidx() {
  let idx = uuid();
  return new Date().format("yyyyMMdd") + idx.substr(0, 8)
}
function uuidForShare() {
  let idx = uuid();
  return idx.substr(0, 10)
}
function getCanvasId() {
  let canvasId = getCookie("canvasId");
  if (canvasId) {
      return canvasId
  } else {
      if (!navigator.cookieEnabled) {
          return "cookieDisabled"
      } else {
          return "has_not_generated"
      }
  }
}
function getArgFromStr(b, a) {
  let reg = new RegExp("(^|&|[?])" + a + "=([^&#]*)(#|&|$)","i");
  let r = b.match(reg);
  if (r != null) {
      return decodeURIComponent(r[2])
  }
  return null
}
function addArgToUrl(b, d, a) {
  if (a == undefined || a == null) {
      a = ""
  }
  if (b.indexOf("?") !== -1 || b.indexOf("=") !== -1) {
      return b + "&" + d + "=" + a
  } else {
      return b + "?" + d + "=" + a
  }
}
function replaceUrlParamVal(url, paramName, replaceWith) {
  let re = eval("/(" + paramName + "=)([^&#]*)/gi");
  return url.replace(re, paramName + "=" + replaceWith)
}
function getTerminal() {
  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
      return "iOS"
  } else {
      if (/(Android)/i.test(navigator.userAgent)) {
          return "Android"
      } else {
          if (navigator.platform.indexOf("Win") === 0 || navigator.platform.indexOf("Mac") === 0) {
              return "PC"
          } else {
              return "unknown"
          }
      }
  }
}
function getPlatform() {
  if (/(wxwork)/i.test(navigator.userAgent)) {
      return "WeCom"
  } else {
      if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
          return "wap"
      } else {
          if (navigator.platform.indexOf("Win") === 0 || navigator.platform.indexOf("Mac") === 0) {
              return "PC"
          } else {
              return "unknown"
          }
      }
  }
}
function getDate(g) {
  const e = g;
  const q = e.substring(0, 4);
  const a = (parseInt(e.substring(4, 6)) - 1) + "";
  const n = e.substring(6, 8);
  const f = e.substring(8, 10);
  const b = e.substring(10, 12);
  const l = e.substring(12, 14);
  return new Date(q,a,n,f,b,l)
}
function supplement_tkid(a, b) {
  if (a && b) {
      let arr = b.split("-");
      try {
          if (arr.length === 6) {
              let idx = a.parentElement.dataset.index;
              if (idx) {
                  arr.push(idx)
              } else {
                  let ul_array = a.parentElement.parentElement.parentElement.children;
                  let ul = a.parentElement.parentElement;
                  let ul_div_children = ul.children;
                  let div_current = a.parentElement;
                  idx = [].indexOf.call(ul_div_children, div_current) * ul_array.length + [].indexOf.call(ul_array, ul);
                  arr.push(idx)
              }
          }
          let tdata = a.getAttribute("_tracker_data_");
          if (tdata && arr.length === 7) {
              let tjson = JSON.parse(tdata);
              let product_id = tjson.product_id;
              let type = tjson.type;
              arr.push(type + "_" + product_id)
          }
      } catch (d) {
          console.log("json parse error!")
      }
      return arr.join("-")
  }
  return ""
}
function getUniqueSpm(a) {
  if (!a) {
      return ""
  }
  let tkid_array = a.split(",");
  let prefix_set = new Set();
  let new_tkid_array = [];
  for (let tj in tkid_array) {
      let tje = tkid_array[tj];
      let tje_array = tje.split("-");
      if (tje_array.length >= 6) {
          let module = tje_array[0];
          if (module) {
              if (module === "search" || module === "re") {
                  module = "search-re";
                  if (window.log.e_d.ref_product_id === undefined && tje_array.length === 8) {
                      let t3 = tje_array[7].split("_");
                      if (t3 && t3.length === 2) {
                          window.log.e_d.ref_product_id = t3[1]
                      }
                  }
              }
              if (!prefix_set.has(module)) {
                  new_tkid_array.push(tje);
                  prefix_set.add(module)
              }
          }
      }
  }
  if (new_tkid_array.length >= 6) {
      new_tkid_array.splice(6, 100)
  }
  return new_tkid_array.join(",")
}
function getSeriesTrackID(a) {
  try {
      let tempTrackerId = "";
      let elementTmp = a;
      for (let i = 0; i < 8; i++) {
          let tracking_id_value = elementTmp.getAttribute("tracking_id");
          tracking_id_value = supplement_tkid(elementTmp, tracking_id_value);
          if (tempTrackerId) {
              if (tracking_id_value) {
                  tempTrackerId = tracking_id_value + "," + tempTrackerId
              }
          } else {
              if (tracking_id_value) {
                  tempTrackerId = tracking_id_value
              }
          }
          let isFinal = elementTmp.getAttribute("data-final");
          if (isFinal) {
              break
          }
          elementTmp = elementTmp.parentElement;
          if (!elementTmp) {
              break
          }
      }
      let current_page_ab = "";
      let temp_tracker_ab = getCookie("_tracker_ab");
      if (temp_tracker_ab) {
          let idx = temp_tracker_ab.indexOf("abTest_v1_");
          if (idx > -1) {
              let temp_stg = temp_tracker_ab.substring("abTest_v1_".length);
              current_page_ab = "ab-" + temp_stg + "-page-0-0-0"
          }
      }
      if (!tempTrackerId) {
          tempTrackerId = current_page_ab
      } else {
          if (tempTrackerId.indexOf("ab") === -1) {
              tempTrackerId = tempTrackerId + "," + current_page_ab
          }
      }
      if (window.log && window.log.start_track) {
          let product = window.ilog.product;
          let scene_code = window.scene && window.scene.code;
          if (product && scene_code) {
              if (tempTrackerId.indexOf(product) === -1) {
                  let current_page_tk_id = product + "-" + scene_code + "-page-0-0-0";
                  if (tempTrackerId) {
                      tempTrackerId = current_page_tk_id + "," + tempTrackerId
                  } else {
                      tempTrackerId = current_page_tk_id
                  }
              }
          }
      }
      return getUniqueSpm(tempTrackerId)
  } catch (b) {
      return null
  }
}
function getTrackID(a) {
  try {
      let tracking_id_value = "";
      let elementTmp = a;
      for (let i = 0; i < 8; i++) {
          tracking_id_value = elementTmp.getAttribute("tracking_id");
          if (tracking_id_value) {
              break
          }
          elementTmp = elementTmp.parentElement
      }
      return supplement_tkid(a, tracking_id_value)
  } catch (b) {
      return null
  }
}
function navigatorSendBeacon(a, b) {
  let logLine = JSON.stringify(b);
  if (a.indexOf("//") === 0) {
      navigator.sendBeacon(window.location.protocol + a, logLine)
  } else {
      navigator.sendBeacon(window.location.protocol + "//" + a, logLine)
  }
}
function sendBigdataLogs() {
  if (navigator.sendBeacon) {
      let tmpLogs = window.bigdataLogs.splice(-20);
      if (tmpLogs.length > 0) {
          let logsMap = {};
          for (let j in tmpLogs) {
              let obj = tmpLogs[j];
              if (obj) {
                  let u = obj.url;
                  let log_list = logsMap[u];
                  if (log_list) {
                      log_list.push(obj.log)
                  } else {
                      log_list = [];
                      log_list.push(obj.log);
                      logsMap[u] = log_list
                  }
              }
          }
          for (let url in logsMap) {
              let logLine = JSON.stringify(logsMap[url]);
              navigator.sendBeacon(url, logLine)
          }
      }
  }
  setTimeout("sendBigdataLogs()", 1000)
}
function checkShouldSendPageView() {
  const a = window.log.page_url !== window.location.href;
  if (window.log && window.log.page_url && a) {
      window.log.page_url = window.location.href;
      if (window._tracker_api_) {
          window._tracker_api_.pageView()
      }
  }
  setTimeout("checkShouldSendPageView()", 5000)
}
function beginObserve(b, f) {
  try {
      let arr = document.querySelectorAll(b);
      let observer = new IntersectionObserver(function(h) {
          for (let i = 0; i < h.length; i++) {
              const g = h[i];
              if (g.isIntersecting && g.target) {
                  let element1 = g.target;
                  f(element1)
              }
          }
      }
      ,{
          threshold: 0.6
      });
      for (let i = 0; i < arr.length; i++) {
          const e = arr[i];
          const a = e.getAttribute("bigdata_view");
          if (a == null || a === "0") {
              observer.observe(e);
              e.setAttribute("bigdata_view", "1")
          }
      }
      setTimeout(function() {
          beginObserve(b, f)
      }, 3000)
  } catch (d) {
      console.log(d)
  }
}
function setUserIdToCookie(a) {
  setCookie("_tracker_user_id_", a, 100 * 365 * 24 * 60 * 60 * 1000)
}
(function() {
  let datalog = {};
  datalog.setVisitUserId = function(a) {
      setCookie("_tracker_distinct_id_", a, 100 * 365 * 24 * 60 * 60 * 1000)
  }
  ;
  window.lca = datalog
}
)(window);
try {
  let _tracker_session_id_ = getCookie("_tracker_session_id_");
  if (!_tracker_session_id_) {
      setCookie("_tracker_session_id_", uuid(), 30 * 60 * 1000)
  }
  let userId = getCookie("zqxiu_user_id");
  setUserIdToCookie(userId);
  let _tracker_distinct_id_ = getCookie("_tracker_distinct_id_");
  if (_tracker_distinct_id_ == null) {
      _tracker_distinct_id_ = uuidx();
      setCookie("_tracker_distinct_id_", _tracker_distinct_id_, 100 * 365 * 24 * 60 * 60 * 1000)
  }
  let debug = document.URL.indexOf("env=dev");
  if (debug > -1) {
      setCookie("bigdata_debug", "1", 3600 * 1000 * 6)
  }
  let devInnerIdx = document.URL.indexOf("dev=inner");
  if (devInnerIdx > -1) {
      window.log.inner = true
  }
} catch (err) {
  console.log(err)
}
window.log.b_t = "def";
window.log.b_v = "0";
if (window.ilog) {
  let autoHeatmap = window.ilog.autoHeatmap;
  if (autoHeatmap === false || autoHeatmap === true) {
      window.log.autoHeatmap = autoHeatmap;
      delete window.ilog.autoHeatmap
  }
  let start_track = window.ilog.start_track;
  if (start_track === false || start_track === true) {
      window.log.start_track = start_track;
      delete window.ilog.start_track
  }
}
(function(root) {
  var helper = {};
  helper.getDistinctId = function() {
      if (window.top != window.self) {
          if (document.referrer.indexOf("store.zhenzhidaole.com") == -1) {
              window.log.inner = true
          }
      }
      let distinct_id = getCookie("_tracker_distinct_id_") || window._tracker_distinct_id_;
      if (distinct_id) {
          return distinct_id
      } else {
          let navigator_info = navigator.userAgent + "-" + navigator.appName + "-" + navigator.connection.effectiveType + "-" + navigator.cookieEnabled + "-" + navigator.hardwareConcurrency + "-" + navigator.javaEnabled() + "-" + navigator.language + "-" + navigator.maxTouchPoints + "-" + navigator.platform + "-" + navigator.webdriver;
          return "bro_" + navigator_info.hashCode()
      }
  }
  ;
  helper.getQueryString = function(name) {
      let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
      let r = window.location.search.substr(1).match(reg);
      if (r != null) {
          return unescape(r[2])
      }
      return null
  }
  ;
  helper.addQueryString = function(e, n, t) {
      if (t == undefined || t == null) {
          t = ""
      }
      if (e.indexOf("?") != -1 || e.indexOf("=") != -1) {
          return e + "&" + n + "=" + t
      } else {
          return e + "?" + n + "=" + t
      }
  }
  ;
  helper.each = function(loopable, callback, self) {
      var additionalArgs = Array.prototype.slice.call(arguments, 3);
      if (loopable) {
          if (loopable.length === +loopable.length) {
              for (var i = 0; i < loopable.length; i++) {
                  callback.apply(self, [loopable[i], i].concat(additionalArgs))
              }
          } else {
              for (var item in loopable) {
                  callback.apply(self, [loopable[item], item].concat(additionalArgs))
              }
          }
      }
  }
  ;
  helper.extend = function(base) {
      helper.each(Array.prototype.slice.call(arguments, 1), function(extensionObject) {
          helper.each(extensionObject, function(value, key) {
              if (extensionObject.hasOwnProperty(key)) {
                  base[key] = value
              }
          })
      });
      return base
  }
  ;
  helper.indexOf = function(arrayToSearch, item) {
      if (Array.prototype.indexOf) {
          return arrayToSearch.indexOf(item)
      } else {
          for (var i = 0; i < arrayToSearch.length; i++) {
              if (arrayToSearch[i] === item) {
                  return i
              }
          }
          return -1
      }
  }
  ;
  helper.send = function(server, obj) {
      if (window.log && window.log.inner == true) {
          return
      }
      let protocol = window.location.protocol;
      obj.c_t = new Date().getTime();
      let iosQQInlineBrowser = false;
      if (obj.os == "iOS" && obj.u_a.indexOf("QQ") > 0) {
          iosQQInlineBrowser = true
      }
      delete obj.u_a;
      try {
          if ("traffic_view" == obj.product) {
              delete obj.url;
              delete obj.ref;
              delete obj.eng;
              delete obj.man;
              delete obj.mod;
              delete obj.n_t;
              delete obj.u_i;
              delete obj.wx_o_i;
              delete obj.wx_n_n;
              delete obj.wx_hea;
              delete obj.wx_u_i;
              delete obj.scene_code;
              delete obj.scene_bizType;
              delete obj.scene_property_eqAdType;
              delete obj.scene_ext_yqc_ad;
              delete obj.scene_member_type;
              delete obj.scene_user_type
          } else {
              if ("submit" == obj.e_t) {
                  obj.act = "表单提交";
                  obj.cat = "button"
              }
          }
      } catch (err) {
          console.log(err)
      }
      if (navigator.sendBeacon && !iosQQInlineBrowser) {
          navigatorSendBeacon(server, [obj])
      } else {
          let img = new Image(0,0);
          img.src = protocol + server + "?" + helper.objectToQuery(obj)
      }
      if (window.scene && window.scene.upurl) {
          let at_array = ["page_view", "page_leave", "share", "submit"];
          if (at_array.indexOf(obj.e_t) > -1) {
              let field_array = ["act", "d_i", "url", "ref", "bro", "os", "o_v", "eng", "man", "mod", "sns", "n_t", "c_p", "p_l", "product", "scene_id", "scene_c_u", "scene_code", "e_t", "c_t", "wx_a_i", "wx_hea", "wx_n_n", "wx_o_i", "wx_r_f", "wx_u_i"];
              let new_obj = {};
              for (let i in field_array) {
                  let k = field_array[i];
                  if (k in obj) {
                      new_obj[k] = obj[k]
                  }
              }
              if (navigator.sendBeacon && !iosQQInlineBrowser) {
                  navigatorSendBeacon(window.scene.upurl, [new_obj])
              } else {
                  let img3 = new Image(0,0);
                  img3.src = protocol + "//" + window.scene.upurl + "?" + helper.objectToQuery(new_obj)
              }
          }
      }
  }
  ;
  helper.objectToQuery = function(jsonObj) {
      var args = "";
      for (var i in jsonObj) {
          if (args != "") {
              args += "&"
          }
          args += i + "=" + encodeURIComponent(jsonObj[i])
      }
      return args
  }
  ;
  helper.objectToPlainQuery = function(jsonObj) {
      var args = "";
      for (var i in jsonObj) {
          if (args != "") {
              args += "&"
          }
          var value = jsonObj[i].toString().replace(/\s+/g, ",");
          if (value.length > 0 && value.endsWith(",")) {
              value = value.substring(0, value.length - 1)
          }
          args += i + "=" + value
      }
      return args
  }
  ;
  helper.getXPath = function(element) {
      if (element == document.body) {
          return "/html/" + element.tagName.toLowerCase()
      }
      if (!element.parentNode) {
          return ""
      }
      var ix = 1
        , siblings = element.parentNode.childNodes;
      for (var i = 0, l = siblings.length; i < l; i++) {
          var sibling = siblings[i];
          if (sibling == element) {
              return helper.getXPath(element.parentNode) + "/" + element.tagName.toLowerCase() + "[" + (ix) + "]"
          } else {
              if (sibling.nodeType == 1 && sibling.tagName == element.tagName) {
                  ix++
              }
          }
      }
  }
  ;
  helper.getData = function(element) {
      let level2_fields = ["activity_id", "material_id"];
      if (element) {
          let data = element.getAttribute("_tracker_data_");
          try {
              if (data) {
                  data = eval("(" + data + ")");
                  data = helper.objectToQuery(data)
              }
              if (data != "object") {
                  data = {}
              }
              if (data.text == undefined) {
                  const text = element.innerText;
                  data.text = text
              }
              let bd_attr = element.getAttribute("bd_attr");
              if (bd_attr) {
                  let kv_pairs = bd_attr.split("&");
                  for (let idx in kv_pairs) {
                      let kv = kv_pairs[idx].split("=");
                      if (kv.length == 2 && kv[0] && kv[1]) {
                          if (level2_fields.indexOf(kv[0]) > -1) {
                              data[kv[0]] = kv[1]
                          }
                      }
                  }
              }
              data = helper.objectToPlainQuery(data);
              return data
          } catch (e) {
              return data
          }
      }
      return ""
  }
  ;
  helper.isWeixin = function() {
      return /micromessenger/i.test(navigator.userAgent)
  }
  ;
  helper.on = function(target, type, handler) {
      if (target.addEventListener) {
          target.addEventListener(type, handler, false)
      } else {
          target.attachEvent("on" + type, function(event) {
              return handler.call(target, setEvent)
          }, false)
      }
  }
  ;
  helper.onload = function(callback) {
      if (typeof window.addEventListener != "undefined") {
          window.addEventListener("load", callback, false)
      } else {
          if (typeof document.addEventListener != "undefined") {
              document.addEventListener("load", callback, false)
          } else {
              if (typeof window.attachEvent != "undefined") {
                  window.attachEvent("onload", callback)
              } else {
                  var _callback = window.onload;
                  if (typeof window.onload != "function") {
                      window.onload = callback
                  } else {
                      window.onload = function() {
                          _callback();
                          callback()
                      }
                  }
              }
          }
      }
  }
  ;
  helper.onunload = function(callback) {
      if (helper.isWeixin()) {
          if (typeof window.addEventListener != "undefined") {
              window.addEventListener("unload", callback, false)
          } else {
              if (typeof document.addEventListener != "undefined") {
                  document.addEventListener("unload", callback, false)
              } else {
                  if (typeof window.attachEvent != "undefined") {
                      window.attachEvent("onunload", callback)
                  } else {
                      var _callback = window.onunload;
                      if (typeof window.onunload != "function") {
                          window.onunload = callback
                      } else {
                          window.onunload = function() {
                              _callback();
                              callback("other")
                          }
                      }
                  }
              }
          }
      } else {
          if (typeof window.addEventListener != "undefined") {
              window.addEventListener("beforeunload", callback, false)
          } else {
              if (typeof document.addEventListener != "undefined") {
                  document.addEventListener("beforeunload", callback, false)
              } else {
                  if (typeof window.attachEvent != "undefined") {
                      window.attachEvent("onbeforeunload", callback)
                  } else {
                      var _callback = window.onbeforeunload;
                      if (typeof window.onbeforeunload != "function") {
                          window.onbeforeunload = callback
                      } else {
                          window.onbeforeunload = function() {
                              _callback();
                              callback()
                          }
                      }
                  }
              }
          }
      }
  }
  ;
  helper.getNetType = function() {
      var type = null;
      var ua = window.navigator.userAgent;
      if (/NetType/.test(ua)) {
          var types = ua.match(/NetType\/(\S*)/);
          if (types.length >= 1) {
              type = types[1]
          }
      }
      if (type == null) {
          var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection || {
              type: "unknown"
          };
          type = connection.type || connection.effectiveType || "unknown"
      }
      return type.toLowerCase()
  }
  ;
  helper.getSocialNetworkingSite = function() {
      var ua = window.navigator.userAgent.toLocaleLowerCase();
      if (ua.match(/MicroMessenger/i) == "micromessenger") {
          var url = document.URL || "";
          var ref = document.referrer || "";
          if (ref.indexOf("http://mp.weixinbridge.com/mp/wapredirect?") == 0) {
              return "weixin-article"
          } else {
              if (url.indexOf("from=timeline") > 0) {
                  return "weixin-timeline"
              } else {
                  if (url.indexOf("from=singlemessage") > 0) {
                      return "weixin-singlemessage"
                  } else {
                      if (url.indexOf("from=groupmessage") > 0) {
                          return "weixin-groupmessage"
                      }
                  }
              }
          }
          return "weixin-unknown"
      }
      if (ua.match(/Weibo/i) == "weibo") {
          return "weibo"
      }
      if (ua.match(/QQ\//i) == "qq/") {
          return "qq"
      }
      if (ua.match(/qzone\//i) == "qzone/") {
          return "qzone"
      }
      if (ua.match(/tieba\//i) == "tieba/") {
          return "tieba"
      }
      if (ua.match(/momoWebView\//i) == "momowebview/") {
          return "momo"
      }
      if (ua.match(/douban/i) == "douban") {
          return "douban"
      }
      if (ua.match(/zhihu/i) == "zhihu") {
          return "zhihu"
      }
      if (ua.match(/AlipayClient\//i) == "alipayclient/") {
          return "alipay"
      }
      if (ua.match(/DingTalk\//i) == "dingtalk/") {
          return "dingtalk"
      }
      if (ua.match(/QQBrowser/i) == "qqbrowser") {
          return "QQBrowser"
      }
      if (ua.match(/qqnews\//i) == "qqnews/") {
          return "qqnews"
      }
      if (ua.match(/iqiyi/i) == "iqiyi") {
          return "iqiyi"
      }
      return "unknown"
  }
  ;
  helper.getTrackerData = function(key) {
      let tracker = window._tracker_;
      if (!tracker) {
          try {
              tracker = _tracker_
          } catch (e) {}
      }
      if (!tracker) {
          tracker = []
      }
      for (let i = 0; i < tracker.length; i++) {
          let row = tracker[i];
          if (row && row.length && row.length >= 2) {
              if (key == row[0]) {
                  return row[1]
              }
          }
      }
      if (window.ilog) {
          return window.ilog[key]
      }
      return window.log.e_d[key]
  }
  ;
  helper.getSessionId = function() {
      return helper.getTrackerData("session_id") || getCookie("_tracker_session_id_")
  }
  ;
  helper.getUserId = function() {
      return helper.getTrackerData("user_id") || getCookie("_tracker_user_id_")
  }
  ;
  helper.getClientType = function() {
      return getTerminal() || ""
  }
  ;
  helper.getClientEdition = function() {
      return helper.getTrackerData("b_v") || helper.getTrackerData("client_edition") || "0"
  }
  ;
  helper.getProduct = function() {
      return helper.getTrackerData("product") || "tracker_view"
  }
  ;
  helper.getField = function(fieldName) {
      return helper.getTrackerData(fieldName) || ""
  }
  ;
  helper.getWxUserInfo = function() {
      if (window.eqxH5WxInfo) {
          return window.eqxH5WxInfo
      } else {
          if (window.eqxWxUserInfo) {
              return window.eqxWxUserInfo
          } else {
              return helper.getTrackerData("wx_user_info") || {}
          }
      }
  }
  ;
  helper.getWxReadFrom = function() {
      var ua = window.navigator.userAgent.toLowerCase();
      if (ua.match(/MicroMessenger/i) == "micromessenger") {
          let url = document.URL || "";
          let ref = document.referrer || "";
          if (ref.indexOf("http://mp.weixinbridge.com/mp/wapredirect?") == 0) {
              return "article"
          } else {
              if (url.indexOf("from=timeline") > 0) {
                  return "timeline"
              } else {
                  if (url.indexOf("from=singlemessage") > 0) {
                      return "singlemessage"
                  } else {
                      if (url.indexOf("from=groupmessage") > 0) {
                          return "groupmessage"
                      }
                  }
              }
          }
          return "unknown"
      }
      return ""
  }
  ;
  var collect = {
      time: new Date().getTime(),
      server: "//127.0.0.1:8080/p.gif",
      serverv2: "//127.0.0.1:8080/q.gif",
      pages: {
          currentPageId: "",
          visitedPages: {},
          time: new Date().getTime(),
          total: 1,
          curr: 0,
          depth: 1
      },
      triggers: {
          total: 0,
          id_type: [],
          counts: []
      },
      sdk: "tracker-view.js",
      ver: "6.9.6"
  };
  collect.params = function(element) {
      let p = {};
      p.sdk = collect.sdk;
      p.ver = collect.ver;
      p.d_i = helper.getDistinctId();
      if (document) {
          p.url = document.URL || "";
          p.ref = document.referrer || ""
      }
      if (window && window.screen) {}
      if (navigator) {
          p.u_a = navigator.userAgent || ""
      }
      if (window && window.location.host) {}
      let device = tracker_ua_device(p.u_a);
      if (device && device.browser) {
          p.bro = device.browser.name || ""
      }
      if (device && device.os) {
          p.os = device.os.name || "";
          if (device.os.version) {
              p.o_v = device.os.version.original || ""
          }
      }
      if (device && device.engine) {
          p.eng = device.engine.name || ""
      }
      if (device && device.device) {
          p.man = device.device.manufacturer || "";
          p.mod = device.device.model || ""
      }
      p.sns = helper.getSocialNetworkingSite();
      p.n_t = helper.getNetType();
      p.s_i = window.getCookie("log_session_id") || "";
      p.c_i = getCanvasId();
      p.u_i = helper.getUserId();
      p.c_p = helper.getClientType();
      p.p_l = getPlatform() || "";
      p.b_v = helper.getClientEdition();
      p.product = helper.getProduct();
      p.b_t = helper.getField("b_t");
      if (window.log && window.log.page_start_time) {
          let dur = new Date().getTime() - window.log.page_start_time;
          p.dur = dur
      } else {
          p.dur = 1
      }
      if (element) {
          const tracking_id_value = getTrackID(element);
          if (tracking_id_value) {
              p.tk_id = tracking_id_value
          }
          if (p.loc == undefined) {
              const loc = element.getAttribute("loc");
              if (loc) {
                  p.loc = loc
              }
          }
      }
      let wxUserInfo = window.wxUserInfo // helper.getWxUserInfo();
      p.wx_n_n = wxUserInfo.nickname || "";
      p.wx_hea = wxUserInfo.headimgurl || "";
      p.wx_a_i = "";
      p.wx_o_i = "";
      p.wx_u_i = "";
      try {
          p.wx_a_i = window.sessionStorage.getItem("wx_appid") || window.localStorage.getItem("wx_appid") || "";
          p.wx_o_i = window.sessionStorage.getItem("wx_openid") || window.localStorage.getItem("wx_openid") || wxUserInfo.openid || "";
          p.wx_u_i = window.sessionStorage.getItem("wx_unionid") || window.localStorage.getItem("wx_unionid") || wxUserInfo.unionid || ""
      } catch (error) {
          console.error(error)
      }
      p.wx_r_f = helper.getWxReadFrom();
      p.scene_id = window.scene && window.scene.id || "";
      p.scene_c_u = window.scene && window.scene.userId || "";
      p.scene_code = window.scene && window.scene.code || "";
      p.scene_bizType = window.scene && window.scene.bizType || "undefined";
      p.scene_property_eqAdType = window.scene && window.scene.property && window.scene.property.eqAdType || "undefined";
      p.scene_ext_yqc_ad = window.scene && window.scene.ext && window.scene.ext.yqc && window.scene.ext.yqc.ad || "undefined";
      p.scene_member_type = window.scene && window.scene.memberType || "undefined";
      p.scene_user_type = window.scene && window.scene.userType || "undefined";
      return p
  }
  ;
  collect.addElementClickListener = function() {
      let that = this;
      let nodeList = document.querySelectorAll("div, li, span, a, img, button, input[type='button'], input[type='submit'], input[type='reset'], *[_tracker_data_]");
      helper.each(nodeList, function(element, index) {
          if ((element && element.tagName.toLowerCase() == "div" || element.tagName.toLowerCase() == "span")) {
              let id = element.getAttribute("id") || "";
              let clz = element.getAttribute("class") || "";
              let tid = element.getAttribute("tracking_id") || "";
              let rdt = element.getAttribute("rdt") || "";
              if (clz.indexOf("bdc") < 0 && id.indexOf("btn") < 0 && id.indexOf("button") < 0 && clz.indexOf("btn") < 0 && tid.length < 1 && rdt.length < 1) {
                  return
              }
          }
          if (!element.getAttribute("_tracker_click_")) {
              helper.on(element, "click", function(event) {
                  let params = that.params(element);
                  params.e_t = "element_click";
                  params.e_p = helper.getXPath(element);
                  params.e_d = helper.getData(element);
                  params.scene_page_total = that.pages.total;
                  params.scene_page_curr = that.pages.curr;
                  let rdtValue = element.getAttribute("rdt");
                  if (rdtValue == 3) {
                      params = helper.extend(params, {
                          rdt: "3"
                      })
                  }
                  let act_arr = [getAction1(element), getAction2(element)];
                  for (let i in act_arr) {
                      let tmp_obj = act_arr[i];
                      if (tmp_obj.act) {
                          let tmp_params = Object.assign({}, params, tmp_obj);
                          helper.send(that.server, tmp_params)
                      }
                  }
                  return false
              });
              element.setAttribute("_tracker_click_", "_tracker_click_")
          }
      })
  }
  ;
  collect.addScenePageViewListener = function() {
      let that = this;
      that.pages.currentPageId = document.getElementsByClassName("z-current")[0].getElementsByClassName("m-img")[0].firstElementChild.getAttribute("data-scene-id");
      that.pages.visitedPages[that.pages.currentPageId] = 1;
      function mutationCallback(mutationList, observer) {
          try {
              for (let i = 0; i < mutationList.length; i++) {
                  let mutation = mutationList[i];
                  switch (mutation.type) {
                  case "childList":
                      for (let i = 0; i < mutation.addedNodes.length; i++) {
                          let e = mutation.addedNodes[i];
                          if (e.getAttribute && e.getAttribute("class") && e.getAttribute("class").indexOf("main-page") > -1) {
                              observer.observe(e, observerOptions)
                          }
                      }
                      break;
                  case "attributes":
                      let eqx_progress_bar = document.getElementsByClassName("eqx-progress-bar");
                      if (eqx_progress_bar && eqx_progress_bar.length > 0) {
                          let processArray = eqx_progress_bar[0].innerText.split("/");
                          that.pages.total = processArray[1];
                          that.pages.curr = processArray[0]
                      } else {
                          that.pages.total = 0;
                          that.pages.curr = 0
                      }
                      let targetNode = mutation.target;
                      let clazz = targetNode.getAttribute("class");
                      if (clazz && clazz.indexOf("z-current") > -1) {
                          let imgdiv = targetNode.getElementsByClassName("m-img")[0];
                          let pageId = "";
                          try {
                              pageId = imgdiv.firstElementChild.getAttribute("data-scene-id")
                          } catch (e) {}
                          let current = that.pages.currentPageId;
                          if (current) {
                              let last_dur = 2;
                              if (that.pages.visitedPages[current]) {
                                  last_dur = that.pages.visitedPages[current]
                              }
                              that.pages.visitedPages[current] = last_dur + new Date().getTime() - that.pages.time
                          }
                          that.pages.currentPageId = pageId;
                          that.pages.time = new Date().getTime()
                      }
                      break
                  }
              }
          } catch (error) {
              console.log(error)
          }
      }
      let observerOptions = {
          childList: true,
          attributes: true,
          attributeFilter: ["class"],
          subtree: true
      };
      let previewContentArray = document.getElementsByClassName("preview-content");
      if (previewContentArray && previewContentArray.length > 0) {
          let targetNode = previewContentArray[0];
          let observer = new MutationObserver(mutationCallback);
          observer.observe(targetNode, observerOptions)
      }
  }
  ;
  collect.launch = function() {
      let that = this;
      let params = that.params();
      params.e_t = "launch";
      params.cat = "launch";
      params.act = "launch";
      params.rdt = "1";
      helper.send(that.server, params)
  }
  ;
  collect.pageView = function() {
      let tmp_key = "page_view_time" + document.URL.replace(/[^a-z]/ig, "");
      if (tmp_key.length > 30) {
          tmp_key = tmp_key.substring(0, 30)
      }
      let page_view_time = getCookie(tmp_key);
      if (page_view_time == null) {
          page_view_time = "0"
      }
      let nowtime = new Date().getTime();
      let diff = nowtime - Number(page_view_time);
      if (diff > 8000) {
          const that = this;
          let params = that.params();
          that.pages.total = document.querySelectorAll("section.main-page div.m-img").length;
          params.e_t = "page_view";
          params.cat = "page_view";
          params.rdt = "1";
          params.act = helper.getField("unm");
          if (params.act == "") {
              params.act = "作品浏览"
          }
          params.scene_page_total = that.pages.total;
          params.e_p = "page_view_time_" + nowtime + "_" + diff;
          helper.send(that.server, params);
          setCookie(tmp_key, nowtime, 8000)
      }
  }
  ;
  collect.pageLeave = function() {
      let that = this;
      if (that.pages.currentPageId) {
          let currPageId = that.pages.currentPageId;
          let last_dur = that.pages.visitedPages[currPageId] || 0;
          that.pages.visitedPages[currPageId] = last_dur + new Date().getTime() - that.pages.time
      }
      let params = that.params();
      params.e_t = "page_leave";
      params.cat = "页面";
      params.act = "页面离开";
      params.rdt = "1";
      if (["form", "ls", "h5is"].includes(params.product)) {
          params.scene_page_total = "1";
          params.scene_page_depth = "1";
          params.scene_page_curr = "1";
          params.scene_page_dura = (new Date().getTime() - that.pages.time) + "";
          if (params.product === "h5is") {
              params.scene_page_ids = "0"
          } else {
              params.scene_page_ids = document.getElementsByClassName("z-current")[0].getElementsByClassName("m-img")[0].firstElementChild.getAttribute("data-scene-id")
          }
      } else {
          if ("ebook" === params.product) {
              let nav1 = document.querySelector(" div.eqc-preview-mobile-bottom > div:nth-child(4) > p:nth-child(1)");
              if (nav1) {
                  let navigationBar = nav1.innerText.split("/");
                  params.scene_page_total = navigationBar[1];
                  params.scene_page_depth = navigationBar[0];
                  params.scene_page_curr = navigationBar[0];
                  params.scene_page_dura = (new Date().getTime() - that.pages.time) + "";
                  params.scene_page_ids = "0"
              } else {
                  let current_nav = document.querySelector("ul.footer-list > li.pagination > span:nth-child(1)");
                  let total_nav = document.querySelector("ul.footer-list > li.pagination > span:nth-child(2)");
                  if (current_nav && total_nav) {
                      params.scene_page_total = total_nav.innerText.match(/\d+/)[0];
                      params.scene_page_curr = current_nav.innerText.match(/\d+/)[0];
                      params.scene_page_depth = params.scene_page_curr;
                      params.scene_page_dura = (new Date().getTime() - that.pages.time) + "";
                      params.scene_page_ids = "0"
                  }
              }
          } else {
              params.scene_page_total = that.pages.total + "";
              params.scene_page_depth = Object.keys(that.pages.visitedPages).length + "";
              params.scene_page_curr = that.pages.curr + "";
              for (let k in that.pages.visitedPages) {
                  if (!params.scene_page_ids || params.scene_page_ids.length == 0) {
                      params.scene_page_dura = that.pages.visitedPages[k];
                      params.scene_page_ids = k
                  } else {
                      params.scene_page_dura = params.scene_page_dura + "," + that.pages.visitedPages[k];
                      params.scene_page_ids = params.scene_page_ids + "," + k
                  }
              }
          }
      }
      params.scene_trigger_total = that.triggers.total;
      let trigger_counts = [];
      for (let i = 0; i < that.triggers.id_type.length; i++) {
          trigger_counts.push(that.triggers.id_type[i] + "," + that.triggers.counts[i])
      }
      params.scene_trigger_counts = trigger_counts.join(";");
      helper.send(that.server, params);
      delete this
  }
  ;
  collect.getShareUrl = function(e) {
      var that = this;
      var n = e;
      try {
          var t = "";
          if (e.indexOf("#") != -1) {
              t = e.split("#")[1];
              e = e.split("#")[0]
          }
          var share_level = parseInt(getCookie("_tracker_share_level_"));
          if (e.indexOf("share_level=") != -1) {
              e = e.replace("share_level=" + share_level, "share_level=" + (share_level + 1))
          } else {
              e = helper.addQueryString(e, "share_level", 1)
          }
          var from_user = getCookie("_tracker_from_user_");
          if (e.indexOf("from_user=") != -1) {
              e = e.replace("from_user=" + from_user, "from_user=" + getCookie("_tracker_distinct_id_"))
          } else {
              e = helper.addQueryString(e, "from_user", getCookie("_tracker_distinct_id_"))
          }
          var from_id = getCookie("_tracker_from_id_");
          var share_id = uuidForShare();
          setCookie("_tracker_share_id_", share_id);
          if (e.indexOf("from_id") != -1) {
              e = e.replace("from_id=" + from_id, "from_id=" + share_id)
          } else {
              e = helper.addQueryString(e, "from_id", share_id)
          }
          var share_time = new Date().getTime();
          setCookie("_tracker_share_time_", share_time);
          if (e.indexOf("share_time=") != -1) {
              e = e.replace(/share_time=[a-zA-Z0-9-]{13}/, "share_time=" + share_time)
          } else {
              e = helper.addQueryString(e, "share_time", share_time)
          }
          if (t != "") {
              e += "#" + t
          }
          return e
      } catch (i) {
          return n
      }
  }
  ;
  collect.share = function(to) {
      var that = this;
      var params = that.params();
      if (to == "weibo") {
          to = "unknown"
      }
      params.rdt = "1";
      params.cat = "share";
      params.act = "share";
      params.e_t = "share";
      params.from_user = getCookie("_tracker_from_user_") || "";
      params.share_user = getCookie("_tracker_distinct_id_") || "";
      params.from_id = getCookie("_tracker_from_id_") || "";
      params.share_id = getCookie("_tracker_share_id_") || "";
      params.share_to = to || "unknown";
      params.share_level = (parseInt(getCookie("_tracker_share_level_")) + 1) || 1;
      params.share_time = getCookie("_tracker_share_time_") || "";
      helper.send(that.server, params)
  }
  ;
  collect.trigger = function(id, type, event_name) {
      var that = this;
      if (!id || !type) {
          return
      }
      that.triggers.total += 1;
      var key = id + "," + type;
      var index = that.triggers.id_type.indexOf(key);
      if (index < 0) {
          that.triggers.id_type.push(key);
          that.triggers.counts.push(1)
      } else {
          that.triggers.counts[index] += 1
      }
  }
  ;
  collect.adView = function(customParams) {}
  ;
  collect.adClick = function(customParams) {}
  ;
  collect.report = function(customParams) {
      var that = this;
      var params = that.params();
      params.rdt = "1";
      if (customParams) {
          params = helper.extend(params, customParams)
      }
      if (params.e_t) {
          helper.send(that.serverv2, params)
      } else {
          console.log("Please set argument e_t.")
      }
  }
  ;
  collect.elementView = function(element, b_t) {
      var that = this;
      var params = that.params(element);
      params.e_t = "element_view";
      params.e_p = helper.getXPath(element);
      params.e_d = helper.getData(element);
      params = helper.extend(params, {
          rdt: "3"
      });
      if (!b_t) {
          b_t = "def"
      }
      params = helper.extend(params, {
          b_t: b_t
      });
      let act_arr = [getAction1(element), getAction2(element)];
      for (let i in act_arr) {
          let tmp_obj = act_arr[i];
          if (tmp_obj.act) {
              tmp_obj.act = tmp_obj.act.replace("点击", "曝光");
              let tmp_params = Object.assign({}, params, tmp_obj);
              helper.send(that.server, tmp_params)
          }
      }
      helper.send(that.server, params)
  }
  ;
  var _tracker_launch_ = getCookie("_tracker_launch_");
  if (_tracker_launch_ == null) {
      collect.launch();
      _tracker_launch_ = "1";
      setCookie("_tracker_launch_", _tracker_launch_, 24 * 60 * 60 * 1000)
  }
  setTimeout(function() {
      collect.pageView()
  }, 1500);
  helper.onload(function() {
      try {
          var share_level = helper.getQueryString("share_level") || 0;
          try {
              share_level = parseInt(share_level)
          } catch (e) {
              share_level = 0
          }
          setCookie("_tracker_share_level_", share_level);
          const from_user = helper.getQueryString("from_user") || "";
          setCookie("_tracker_from_user_", from_user);
          const from_id = helper.getQueryString("from_id") || "";
          setCookie("_tracker_from_id_", from_id);
          collect.addElementClickListener();
          let intervalID = window.setInterval(checkPagesExist, 500);
          function checkPagesExist() {
              let z_current = document.getElementsByClassName("z-current");
              if (z_current && z_current.length > 0) {
                  let previewNodeArr = document.getElementsByClassName("preview-content");
                  if (previewNodeArr && previewNodeArr.length > 0) {
                      clearInterval(intervalID);
                      collect.addScenePageViewListener()
                  }
              }
          }
          beginObserve('[bigdata_view="0"]', function(element) {
              collect.elementView(element, "页面元素")
          })
      } catch (e) {
          console.error(e)
      }
  });
  helper.onunload(function(arg) {
      try {
          collect.pageLeave();
          removeCookie("log_session_id")
      } catch (e) {
          console.error(e)
      }
  });
  helper.on(document, "DOMNodeInserted", function(e) {
      try {
          collect.addElementClickListener()
      } catch (e) {
          console.error(e)
      }
  });
  window._tracker_api_ = collect;
  setTimeout(function() {
      setCookie("log_session_id", uuid(), 5 * 60 * 1000)
  }, 5000)
}
)(window);
