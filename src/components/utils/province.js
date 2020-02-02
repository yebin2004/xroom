const provinceList = [{
    "chinese": "北京",
    "pinyinl": "beijing",
    "pinyinls": "bj",
    "pinyinu": "BEIJING",
    "pinyinus": "BJ",
    "short": "京",
    "other": "peking pk PEKING PK 北京市"
  },
  {
    "chinese": "天津",
    "pinyinl": "tianjin",
    "pinyinls": "tj",
    "pinyinu": "TIANJIN",
    "pinyinus": "TJ",
    "short": "津",
    "other": "天津市"
  },
  {
    "chinese": "河北",
    "pinyinl": "hebei",
    "pinyinls": "hb(重)",
    "pinyinu": "HEBEI",
    "pinyinus": "HB(重)",
    "short": "冀",
    "other": "河北省"
  },
  {
    "chinese": "内蒙古",
    "pinyinl": "neimenggu",
    "pinyinls": "nmg",
    "pinyinu": "NEIMENGGU",
    "pinyinus": "NMG",
    "short": "蒙",
    "other": "内蒙古自治区 内蒙古蒙古族自治区"
  },
  {
    "chinese": "山西",
    "pinyinl": "shanxi(重)",
    "pinyinls": "sx(重)",
    "pinyinu": "SHANXI(重)",
    "pinyinus": "SX(重)",
    "short": "晋",
    "other": "山西省"
  },
  {
    "chinese": "上海",
    "pinyinl": "shanghai",
    "pinyinls": "sh",
    "pinyinu": "SHANGHAI",
    "pinyinus": "SH",
    "short": "沪",
    "other": "上海市"
  },
  {
    "chinese": "安徽",
    "pinyinl": "anhui",
    "pinyinls": "ah",
    "pinyinu": "ANHUI",
    "pinyinus": "AH",
    "short": "皖",
    "other": "安徽省"
  },
  {
    "chinese": "江苏",
    "pinyinl": "jiangsu",
    "pinyinls": "js",
    "pinyinu": "JIANGSU",
    "pinyinus": "JS",
    "short": "苏",
    "other": "江苏省"
  },
  {
    "chinese": "浙江",
    "pinyinl": "zhejiang",
    "pinyinls": "zj",
    "pinyinu": "ZHEJIANG",
    "pinyinus": "ZJ",
    "short": "浙",
    "other": "浙江省"
  },
  {
    "chinese": "山东",
    "pinyinl": "shandong",
    "pinyinls": "sd",
    "pinyinu": "SHANDONG",
    "pinyinus": "SD",
    "short": "鲁",
    "other": "山东省"
  },
  {
    "chinese": "福建",
    "pinyinl": "fujian",
    "pinyinls": "fj",
    "pinyinu": "FUJIAN",
    "pinyinus": "FJ",
    "short": "闽",
    "other": "福建省"
  },
  {
    "chinese": "江西",
    "pinyinl": "jiangxi",
    "pinyinls": "jx",
    "pinyinu": "JIANGXI",
    "pinyinus": "JX",
    "short": "赣",
    "other": "江西省"
  },
  {
    "chinese": "广东",
    "pinyinl": "guangdong",
    "pinyinls": "gd",
    "pinyinu": "GUANGDONG",
    "pinyinus": "GD",
    "short": "粤",
    "other": "广东省"
  },
  {
    "chinese": "广西",
    "pinyinl": "guangxi",
    "pinyinls": "gx",
    "pinyinu": "GUANGXI",
    "pinyinus": "GX",
    "short": "桂",
    "other": "广西自治区 广西壮族自治区"
  },
  {
    "chinese": "海南",
    "pinyinl": "hainan",
    "pinyinls": "hn(重)",
    "pinyinu": "HAINAN",
    "pinyinus": "HN(重)",
    "short": "琼",
    "other": "海南省"
  },
  {
    "chinese": "河南",
    "pinyinl": "henan",
    "pinyinls": "hn(重)",
    "pinyinu": "HENAN",
    "pinyinus": "HN(重)",
    "short": "豫",
    "other": "河南省"
  },
  {
    "chinese": "湖北",
    "pinyinl": "hubei",
    "pinyinls": "hb(重)",
    "pinyinu": "HUBEI",
    "pinyinus": "HB(重)",
    "short": "鄂",
    "other": "湖北省"
  },
  {
    "chinese": "湖南",
    "pinyinl": "hunan",
    "pinyinls": "hn(重)",
    "pinyinu": "HUNAN",
    "pinyinus": "HN(重)",
    "short": "湘",
    "other": "湖南省"
  },
  {
    "chinese": "黑龙江",
    "pinyinl": "heilongjiang",
    "pinyinls": "hlj",
    "pinyinu": "HEILONGJIANG",
    "pinyinus": "HLJ",
    "short": "黑",
    "other": "黑龙江省"
  },
  {
    "chinese": "吉林",
    "pinyinl": "jilin",
    "pinyinls": "jl",
    "pinyinu": "JILIN",
    "pinyinus": "JL",
    "short": "吉",
    "other": "吉林省"
  },
  {
    "chinese": "辽宁",
    "pinyinl": "liaoning",
    "pinyinls": "ln",
    "pinyinu": "LIAONING",
    "pinyinus": "LN",
    "short": "辽",
    "other": "辽宁省"
  },
  {
    "chinese": "陕西",
    "pinyinl": "shanxi(重)",
    "pinyinls": "sx(重)",
    "pinyinu": "SHANXI(重)",
    "pinyinus": "SX(重)",
    "short": "陕",
    "other": "陕西省"
  },
  {
    "chinese": "甘肃",
    "pinyinl": "gansu",
    "pinyinls": "gs",
    "pinyinu": "GANSU",
    "pinyinus": "GS",
    "short": "甘",
    "other": "甘肃省"
  },
  {
    "chinese": "宁夏",
    "pinyinl": "ningxia",
    "pinyinls": "nx",
    "pinyinu": "NINGXIA",
    "pinyinus": "NX",
    "short": "宁",
    "other": "宁夏自治区 宁夏回族自治区"
  },
  {
    "chinese": "青海",
    "pinyinl": "qinghai",
    "pinyinls": "qh",
    "pinyinu": "QINGHAI",
    "pinyinus": "QH",
    "short": "青",
    "other": "青海省"
  },
  {
    "chinese": "新疆",
    "pinyinl": "xinjiang",
    "pinyinls": "xj",
    "pinyinu": "XINJIANG",
    "pinyinus": "XJ",
    "short": "新",
    "other": "新疆自治区 新疆维吾尔族自治区"
  },
  {
    "chinese": "重庆",
    "pinyinl": "chongqing",
    "pinyinls": "cq",
    "pinyinu": "CHONGQING",
    "pinyinus": "CQ",
    "short": "渝",
    "other": "重庆市"
  },
  {
    "chinese": "四川",
    "pinyinl": "sichuan",
    "pinyinls": "sc",
    "pinyinu": "SICHUAN",
    "pinyinus": "SC",
    "short": "川",
    "other": "四川省"
  },
  {
    "chinese": "云南",
    "pinyinl": "yunnan",
    "pinyinls": "yn",
    "pinyinu": "YUNNAN",
    "pinyinus": "YN",
    "short": "云",
    "other": "云南省"
  },
  {
    "chinese": "贵州",
    "pinyinl": "guizhou",
    "pinyinls": "gz",
    "pinyinu": "GUIZHOU",
    "pinyinus": "GZ",
    "short": "贵",
    "other": "贵州省"
  },
  {
    "chinese": "西藏",
    "pinyinl": "xizang",
    "pinyinls": "xz",
    "pinyinu": "XIZANG",
    "pinyinus": "XZ",
    "short": "藏",
    "other": "tibet tb TIBET TB 西藏自治区 西藏藏族自治区"
  },
  {
    "chinese": "香港",
    "pinyinl": "xianggang",
    "pinyinls": "xg",
    "pinyinu": "XIANGGANG",
    "pinyinus": "XG",
    "short": "港",
    "other": "hongkong hk HONGKONG HK 香港特区 香港特别行政区"
  },
  {
    "chinese": "澳门",
    "pinyinl": "aomen",
    "pinyinls": "am",
    "pinyinu": "AOMEN",
    "pinyinus": "AM",
    "short": "澳",
    "other": "macau mc MACAU MC 澳门特区 澳门特别行政区"
  },
  {
    "chinese": "台湾",
    "pinyinl": "taiwan",
    "pinyinls": "tw",
    "pinyinu": "TAIWAN",
    "pinyinus": "TW",
    "short": "台",
    "other": "台湾省"
  },

]

export const getProvincePinYin = (other) => {
  let pinyin = ''
  provinceList.some(function (value) {
    if (value.other.indexOf(other) > -1) {
      pinyin = value.pinyinl
      return true
    }
  })
  return pinyin
}

export const getProvinceChinese = (other) => {
  let chinese = ''
  provinceList.some(function (value) {
    if (value.other.indexOf(other) > -1) {
      chinese = value.chinese
      return true
    }
  })
  return chinese
}