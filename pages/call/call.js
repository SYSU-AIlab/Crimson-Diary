// pages/call/call.js
var ayu = "AYU"

const hospitals = {
    "上城区": [
        {
            "hospital_name": "浙江大学医学院附属第二医院",
            "hospital_address": "浙江省杭州市上城区解放路68号",
            "phone_number": "0571-8778388387022776",
            "hospital_grade": "三级甲等",
            "区县": "上城区"
        },
        {
            "hospital_name": "浙江医科大学附属妇产科医院",
            "hospital_address": "浙江省杭州市上城区学士路2号",
            "phone_number": "0571-87061501",
            "hospital_grade": "三级甲等",
            "区县": "上城区"
        },
        {
            "hospital_name": "浙江医科大学附属第二医院",
            "hospital_address": "浙江省杭州市上城区解放路68号",
            "phone_number": "0571-87077272",
            "hospital_grade": "三级甲等",
            "区县": "上城区"
        },
        {
            "hospital_name": "浙江省中医医院",
            "hospital_address": "浙江省杭州市上城区邮电路54号",
            "phone_number": "0571-87068001",
            "hospital_grade": "三级甲等",
            "区县": "上城区"
        },
        {
            "hospital_name": "浙江大学医学院附属第一医院城站院区",
            "hospital_address": "浙江省杭州市上城区城站路58号",
            "phone_number": "0571-56181000",
            "hospital_grade": "二级甲等",
            "区县": "上城区"
        },
        {
            "hospital_name": "杭州市第四人民医院",
            "hospital_address": "浙江省杭州市上城区严官巷34号",
            "phone_number": "0571-86052324",
            "hospital_grade": "二级甲等",
            "区县": "上城区"
        },
        {
            "hospital_name": "杭州铁路医院",
            "hospital_address": "浙江省杭州市上城区城站路58号",
            "phone_number": "0571-56181000",
            "hospital_grade": "二级甲等",
            "区县": "上城区"
        },
        {
            "hospital_name": "浙江大学医学院附属第一医院分院",
            "hospital_address": "浙江省杭州市上城区城站路58号",
            "phone_number": "0571-8807543988393516",
            "hospital_grade": "二级甲等",
            "区县": "上城区"
        },
        {
            "hospital_name": "上城区中医医院",
            "hospital_address": "浙江省杭州市上城区河坊街413号",
            "phone_number": "0571-87021506",
            "hospital_grade": "二级乙等",
            "区县": "上城区"
        },
        {
            "hospital_name": "上城区中西医结合医院",
            "hospital_address": "浙江省杭州市上城区南星桥统一码头98号",
            "phone_number": "0571-86068986",
            "hospital_grade": "二级丙等",
            "区县": "上城区"
        },
        {
            "hospital_name": "杭州市卫生研究所",
            "hospital_address": "浙江省杭州市上城区长生路26号",
            "phone_number": "0571-87062766，0571-85459796",
            "hospital_grade": "一级丙等",
            "区县": "上城区"
        },
        {
            "hospital_name": "杭州市上城区中西医结合医院杭州不孕不育专科医院",
            "hospital_address": "浙江省杭州市上城区南星桥秋清路148号",
            "phone_number": "0571-86068986",
            "hospital_grade": NaN,
            "区县": "上城区"
        },
        {
            "hospital_name": "杭州玛莉亚妇女医院",
            "hospital_address": "浙江省杭州市上城区秋涛路300号",
            "phone_number": "0571-86521200",
            "hospital_grade": NaN,
            "区县": "上城区"
        },
        {
            "hospital_name": "杭州市上城区妇幼保健院",
            "hospital_address": "浙江省杭州市上城区江城路417号",
            "phone_number": "0571-86071576",
            "hospital_grade": NaN,
            "区县": "上城区"
        },
        {
            "hospital_name": "杭州第四医院",
            "hospital_address": "浙江省杭州市上城区严官巷34号",
            "phone_number": "0571-86059888",
            "hospital_grade": NaN,
            "区县": "上城区"
        },
        {
            "hospital_name": "浙益眼科诊疗中心",
            "hospital_address": "浙江省杭州市上城区庆春路",
            "phone_number": "0571-87214082",
            "hospital_grade": NaN,
            "区县": "上城区"
        },
        {
            "hospital_name": "杭州市上城区中西医结合医院",
            "hospital_address": "浙江省杭州市上城区南星桥秋清路148号",
            "phone_number": "0571-86068986",
            "hospital_grade": NaN,
            "区县": "上城区"
        },
        {
            "hospital_name": "杭州推拿医院",
            "hospital_address": "浙江省杭州市上城区解放路229号",
            "phone_number": "0571-87066503，0571-87027657，0571-87919671",
            "hospital_grade": NaN,
            "区县": "上城区"
        },
        {
            "hospital_name": "浙江省中医院浙江中医学院附属医院浙江省东方医院",
            "hospital_address": "浙江省杭州市上城区邮电路54号",
            "phone_number": "0571-8707778587068001",
            "hospital_grade": NaN,
            "区县": "上城区"
        },
        {
            "hospital_name": "杭州华山医疗美容医院",
            "hospital_address": "浙江省杭州市上城区东宝路3号杭州汽车南站旁",
            "phone_number": "400-889-0808",
            "hospital_grade": NaN,
            "区县": "上城区"
        },
        {
            "hospital_name": "杭州市小营医院",
            "hospital_address": "浙江省杭州市上城区解放路6264号",
            "phone_number": NaN,
            "hospital_grade": NaN,
            "区县": "上城区"
        }
    ],
    "下城区": [
        {
            "hospital_name": "浙江大学医学院附属儿童医院",
            "hospital_address": "浙江省杭州市下城区竹竿巷57号",
            "phone_number": "0571-87061007",
            "hospital_grade": "三级甲等",
            "区县": "下城区"
        },
        {
            "hospital_name": "杭州市第六人民医院",
            "hospital_address": "浙江省杭州市下城区文晖路201号",
            "phone_number": "0571-85463999，0571-85463993",
            "hospital_grade": "三级甲等",
            "区县": "下城区"
        },
        {
            "hospital_name": "浙江中医院大学附属中西医结合医院",
            "hospital_address": "浙江省杭州市下城区环城东路208号",
            "phone_number": "0571-8518659485186042",
            "hospital_grade": "三级甲等",
            "区县": "下城区"
        },
        {
            "hospital_name": "杭州建国医院",
            "hospital_address": "浙江省杭州市下城区建国北路149号",
            "phone_number": "0571-87291999",
            "hospital_grade": NaN,
            "区县": "下城区"
        },
        {
            "hospital_name": "杭州红房子医院",
            "hospital_address": "浙江省杭州市下城区体育场路286号武林广场东200米",
            "phone_number": "0571-28189999",
            "hospital_grade": NaN,
            "区县": "下城区"
        },
        {
            "hospital_name": "浙江中医药大学附属杭州第六医院杭州市第六人民医院",
            "hospital_address": "浙江省杭州市下城区文晖路201号",
            "phone_number": "0571-8546399985463993",
            "hospital_grade": NaN,
            "区县": "下城区"
        },
        {
            "hospital_name": "杭州市传染病院",
            "hospital_address": "浙江省杭州市下城区朝晖二小区",
            "phone_number": "0571-85451901",
            "hospital_grade": NaN,
            "区县": "下城区"
        }
    ],
    "下沙经济技术开发区": [
        {
            "hospital_name": "浙江省乔司监狱医院",
            "hospital_address": "浙江省杭州市下沙经济技术开发区星野花苑",
            "phone_number": "0571-86931906",
            "hospital_grade": NaN,
            "区县": "下沙经济技术开发区"
        }
    ],
    "中心下城区": [
        {
            "hospital_name": "杭州阿波罗男子医院",
            "hospital_address": "浙江省杭州市中心下城区体育场路58号善宾馆往东100米",
            "phone_number": "0571-85093333，400-899-2008",
            "hospital_grade": NaN,
            "区县": "中心下城区"
        }
    ],
    "临安县": [
        {
            "hospital_name": "临安县于潜人民医院",
            "hospital_address": "浙江省杭州市临安县于潜镇大街281号",
            "phone_number": "0571-638824196388215363885017",
            "hospital_grade": NaN,
            "区县": "临安县"
        }
    ],
    "临安市": [
        {
            "hospital_name": "临安市人民医院",
            "hospital_address": "浙江省杭州市临安市衣锦街548号",
            "phone_number": "0571-63722093，0571-63732608",
            "hospital_grade": "二级甲等",
            "区县": "临安市"
        },
        {
            "hospital_name": "临安市中医院",
            "hospital_address": "浙江省杭州市临安市锦城街道城中街8号",
            "phone_number": "057163723593，0571-63732461，0571-63737120",
            "hospital_grade": "二级乙等",
            "区县": "临安市"
        },
        {
            "hospital_name": "临安市昌化人民医院",
            "hospital_address": "浙江省杭州市临安市昌化镇西大街",
            "phone_number": "0571-63661319",
            "hospital_grade": "一级乙等",
            "区县": "临安市"
        },
        {
            "hospital_name": "临安市昌北人民医院",
            "hospital_address": "浙江省杭州市临安市岛石",
            "phone_number": "0571-63636011",
            "hospital_grade": NaN,
            "区县": "临安市"
        },
        {
            "hospital_name": "临安市妇幼保健所",
            "hospital_address": "浙江省杭州市临安市锦城街道江南路25号",
            "phone_number": "0571-63721853",
            "hospital_grade": NaN,
            "区县": "临安市"
        },
        {
            "hospital_name": "临安市结核病防治所",
            "hospital_address": "浙江省杭州市临安市玲珑街道石山村",
            "phone_number": "0571-63722692",
            "hospital_grade": NaN,
            "区县": "临安市"
        },
        {
            "hospital_name": "临安市锦城镇医院",
            "hospital_address": "浙江省杭州市临安市临水路85号",
            "phone_number": "0571-63721096",
            "hospital_grade": NaN,
            "区县": "临安市"
        },
        {
            "hospital_name": "临安市于潜人民医院",
            "hospital_address": "浙江省杭州市临安市于潜镇大街281号",
            "phone_number": "0571-63882419，0571-63882153，0571-63885017",
            "hospital_grade": NaN,
            "区县": "临安市"
        },
        {
            "hospital_name": "临安市精神病防治站",
            "hospital_address": "浙江省杭州市临安市",
            "phone_number": "0571-63701536",
            "hospital_grade": NaN,
            "区县": "临安市"
        }
    ],
    "余杭区": [
        {
            "hospital_name": "杭州市余杭区中医院",
            "hospital_address": "浙江省杭州市余杭区塘栖镇致和堂街100号",
            "phone_number": "0571-86372126",
            "hospital_grade": "二级甲等",
            "区县": "余杭区"
        },
        {
            "hospital_name": "杭州市余杭区中医医院",
            "hospital_address": "浙江省杭州市余杭区塘栖镇北小河78号",
            "phone_number": "0571-86372126",
            "hospital_grade": "二级甲等",
            "区县": "余杭区"
        },
        {
            "hospital_name": "杭州师范学院附属余杭医院杭州市余杭区第一人民医院",
            "hospital_address": "浙江省杭州市余杭区临平镇保健路28号",
            "phone_number": "0571-86224254",
            "hospital_grade": "二级甲等",
            "区县": "余杭区"
        },
        {
            "hospital_name": "杭州师范学院附属医院",
            "hospital_address": "浙江省杭州市余杭区临平镇保健路28号",
            "phone_number": "0571-86224254",
            "hospital_grade": "二级甲等",
            "区县": "余杭区"
        },
        {
            "hospital_name": "杭州市安康医院",
            "hospital_address": "浙江省杭州市余杭区安溪乡下溪湾",
            "phone_number": "0571-8884641988797178",
            "hospital_grade": "二级乙等",
            "区县": "余杭区"
        },
        {
            "hospital_name": "杭州市余杭区区第二人民医院",
            "hospital_address": "浙江省杭州市余杭区车站路16号",
            "phone_number": "0571-88662274",
            "hospital_grade": "二级乙等",
            "区县": "余杭区"
        },
        {
            "hospital_name": "杭州市余杭区第二人民医院",
            "hospital_address": "浙江省杭州市余杭区余航镇安乐路80号",
            "phone_number": "0571-88662274，0571-88652257",
            "hospital_grade": "二级乙等",
            "区县": "余杭区"
        },
        {
            "hospital_name": "杭州市公安局安康医院",
            "hospital_address": "浙江省杭州市余杭区安溪乡下溪湾",
            "phone_number": "0571-88846419，0571-88797178",
            "hospital_grade": NaN,
            "区县": "余杭区"
        },
        {
            "hospital_name": "余杭区第二人民医院",
            "hospital_address": "浙江省杭州市余杭区余航镇安乐路80号",
            "phone_number": "0571-8866227488652257",
            "hospital_grade": NaN,
            "区县": "余杭区"
        },
        {
            "hospital_name": "杭州市余杭区妇幼保健院",
            "hospital_address": "浙江省杭州市余杭区人民大道359号",
            "phone_number": "0571-86224052，0571-86221964，0571-86166581",
            "hospital_grade": NaN,
            "区县": "余杭区"
        },
        {
            "hospital_name": "余杭区第一人民医院",
            "hospital_address": "浙江省杭州市余杭区临平镇保健路28号",
            "phone_number": "0571-8622491586224254",
            "hospital_grade": NaN,
            "区县": "余杭区"
        },
        {
            "hospital_name": "杭州市余杭区第三人民医院",
            "hospital_address": "浙江省杭州市余杭区大桥北路88号",
            "phone_number": "0571-88541144，0571-88541747",
            "hospital_grade": NaN,
            "区县": "余杭区"
        },
        {
            "hospital_name": "杭州市余杭区第五人民医院",
            "hospital_address": "浙江省杭州市余杭区广和街",
            "phone_number": "0571-86222034",
            "hospital_grade": NaN,
            "区县": "余杭区"
        },
        {
            "hospital_name": "杭州市余杭区第四人民医院",
            "hospital_address": "浙江省杭州市余杭区三墩镇五里塘30号",
            "phone_number": "0571-88551125",
            "hospital_grade": NaN,
            "区县": "余杭区"
        }
    ],
    "富阳市": [
        {
            "hospital_name": "富阳市人民医院",
            "hospital_address": "浙江省杭州市富阳市富阳镇桂花路4号",
            "phone_number": "0571-63353120，0571-63345666",
            "hospital_grade": "二级甲等",
            "区县": "富阳市"
        },
        {
            "hospital_name": "富阳市第二人民医院",
            "hospital_address": "浙江省杭州市富阳市新登镇城北路71号",
            "phone_number": "0571-63251244",
            "hospital_grade": "二级甲等",
            "区县": "富阳市"
        },
        {
            "hospital_name": "富阳市中医骨伤科医院",
            "hospital_address": "浙江省杭州市富阳市富阳镇桂花西路63号",
            "phone_number": "0571-63326240，0571-63324728",
            "hospital_grade": "二级甲等",
            "区县": "富阳市"
        },
        {
            "hospital_name": "富阳市中医院",
            "hospital_address": "浙江省杭州市富阳市富阳镇北门路4号",
            "phone_number": "0571-63323881，0571-63325656",
            "hospital_grade": "二级乙等",
            "区县": "富阳市"
        },
        {
            "hospital_name": "富阳市第三人民医院富阳市精神病防治院",
            "hospital_address": "浙江省杭州市富阳市高桥镇高桥东路8号",
            "phone_number": "0571-63435838",
            "hospital_grade": "二级乙等",
            "区县": "富阳市"
        },
        {
            "hospital_name": "富阳市妇幼保健院",
            "hospital_address": "浙江省杭州市富阳市横凉亭路25号",
            "phone_number": "0571-63369668，0571-63383276，0571-63369669",
            "hospital_grade": NaN,
            "区县": "富阳市"
        },
        {
            "hospital_name": "富阳中医骨病医院",
            "hospital_address": "浙江省杭州市富阳市巨利路23号",
            "phone_number": "0571-63328278，0571-63370024",
            "hospital_grade": NaN,
            "区县": "富阳市"
        },
        {
            "hospital_name": "富阳中医骨髓炎医院",
            "hospital_address": "浙江省杭州市富阳市巨利路23号",
            "phone_number": "0571-63328278",
            "hospital_grade": NaN,
            "区县": "富阳市"
        },
        {
            "hospital_name": "富阳市结核病防治所",
            "hospital_address": "浙江省杭州市富阳市春秋北路43号",
            "phone_number": NaN,
            "hospital_grade": NaN,
            "区县": "富阳市"
        },
        {
            "hospital_name": "富阳市肿瘤康复医院",
            "hospital_address": "浙江省杭州市富阳市鹿山街道办事处旁",
            "phone_number": "0571-63485029，0571-63485159",
            "hospital_grade": NaN,
            "区县": "富阳市"
        }
    ],
    "建德市": [
        {
            "hospital_name": "建德市第四人民医院",
            "hospital_address": "浙江省杭州市建德市寿昌镇城东",
            "phone_number": "0571-64561752",
            "hospital_grade": "二级乙等",
            "区县": "建德市"
        },
        {
            "hospital_name": "建德市第三人民医院",
            "hospital_address": "浙江省杭州市建德市寿昌镇中山中路167号",
            "phone_number": "0571-64561713",
            "hospital_grade": NaN,
            "区县": "建德市"
        },
        {
            "hospital_name": "建德市中医院",
            "hospital_address": "浙江省杭州市建德市健康北路1号",
            "phone_number": "0571-64721341，0571-64721065",
            "hospital_grade": NaN,
            "区县": "建德市"
        },
        {
            "hospital_name": "建德市第二人民医院",
            "hospital_address": "浙江省杭州市建德市梅城镇总府街223号",
            "phone_number": "0571-64140024",
            "hospital_grade": NaN,
            "区县": "建德市"
        },
        {
            "hospital_name": "建德市第一人民医院",
            "hospital_address": "浙江省杭州市建德市新安江街道严州大道599号",
            "phone_number": "0571-64721520，0571-64796601",
            "hospital_grade": NaN,
            "区县": "建德市"
        },
        {
            "hospital_name": "建德市广信医院",
            "hospital_address": "浙江省杭州市建德市乾潭镇康乐路17号",
            "phone_number": "0571-64176323",
            "hospital_grade": NaN,
            "区县": "建德市"
        },
        {
            "hospital_name": "建德市妇幼保健院",
            "hospital_address": "浙江省杭州市建德市新安江街道桥东路65号",
            "phone_number": "0571-64769801，0571-64796803",
            "hospital_grade": NaN,
            "区县": "建德市"
        },
        {
            "hospital_name": "建德市慈诚脊柱病医院",
            "hospital_address": "浙江省杭州市建德市大慈岩镇荷花路6号",
            "phone_number": NaN,
            "hospital_grade": NaN,
            "区县": "建德市"
        }
    ],
    "拱墅区": [
        {
            "hospital_name": "浙江老年关怀医院杭州市拱墅区中医院",
            "hospital_address": "浙江省杭州市拱墅区拱宸桥横里马路23号",
            "phone_number": "0571-88012331",
            "hospital_grade": "二级乙等",
            "区县": "拱墅区"
        },
        {
            "hospital_name": "浙江老年关怀医院",
            "hospital_address": "浙江省杭州市拱墅区拱宸桥横里马路23号",
            "phone_number": "0571-88012331",
            "hospital_grade": "二级乙等",
            "区县": "拱墅区"
        },
        {
            "hospital_name": "杭州市拱墅区第二人民医院",
            "hospital_address": "浙江省杭州市拱墅区上塘路518号",
            "phone_number": "0571-88331818",
            "hospital_grade": "一级甲等",
            "区县": "拱墅区"
        },
        {
            "hospital_name": "杭州钢铁集团公司职工医院",
            "hospital_address": "浙江省杭州市拱墅区半山康健路1号",
            "phone_number": "0571-85144301，0571-88130876",
            "hospital_grade": NaN,
            "区县": "拱墅区"
        },
        {
            "hospital_name": "杭州市拱墅湖墅医院",
            "hospital_address": "浙江省杭州市拱墅区左家新村",
            "phone_number": "0571-88084168",
            "hospital_grade": NaN,
            "区县": "拱墅区"
        },
        {
            "hospital_name": "杭州拱墅区人民医院",
            "hospital_address": "浙江省杭州市拱墅区莫干山路652号",
            "phone_number": "0571-88084025",
            "hospital_grade": NaN,
            "区县": "拱墅区"
        },
        {
            "hospital_name": "杭州市拱墅区湖墅医院",
            "hospital_address": "浙江省杭州市拱墅区左家新村",
            "phone_number": "0571-88084168",
            "hospital_grade": NaN,
            "区县": "拱墅区"
        },
        {
            "hospital_name": "杭州市第一人民医院分院",
            "hospital_address": "浙江省杭州市拱墅区沈半路469号320国道杭玻旁",
            "phone_number": "0571-88148800，0571-88146489，0571-88134465-830",
            "hospital_grade": NaN,
            "区县": "拱墅区"
        },
        {
            "hospital_name": "武警部队杭州消防医院",
            "hospital_address": "浙江省杭州市拱墅区哑巴弄6号",
            "phone_number": "0571-88830602",
            "hospital_grade": NaN,
            "区县": "拱墅区"
        },
        {
            "hospital_name": "杭州市拱墅区半山人民医院",
            "hospital_address": "浙江省杭州市拱墅区半山路17号",
            "phone_number": "0571-88130380，0571-88385135",
            "hospital_grade": NaN,
            "区县": "拱墅区"
        }
    ],
    "朝晖二小区": [
        {
            "hospital_name": "杭州市结核病防治院",
            "hospital_address": "浙江省杭州市朝晖二小区43号",
            "phone_number": "0571-85131590，0571-85131588",
            "hospital_grade": "一级丙等",
            "区县": "朝晖二小区"
        }
    ],
    "朝晖六区": [
        {
            "hospital_name": "浙江工业大学医院",
            "hospital_address": "浙江省杭州市朝晖六区",
            "phone_number": "0571-88320114",
            "hospital_grade": NaN,
            "区县": "朝晖六区"
        }
    ],
    "未知区县": [
        {
            "hospital_name": "浙江省人民医院",
            "hospital_address": "浙江省杭州市上塘路158号",
            "phone_number": "0571-85239988，0571-85893018",
            "hospital_grade": "三级甲等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "浙江大学医学院附属妇产科医院",
            "hospital_address": "浙江省杭州市学士路1号",
            "phone_number": "0571-87061501",
            "hospital_grade": "三级甲等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "浙江省中医院",
            "hospital_address": "浙江省杭州市邮电路54号",
            "phone_number": "0571-87068001，87010630",
            "hospital_grade": "三级甲等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "浙江省肿瘤医院",
            "hospital_address": "浙江省杭州市半山桥广济路38号",
            "phone_number": "0571-88122222，0571-88122233",
            "hospital_grade": "三级甲等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "浙江大学医学院附属第一医院",
            "hospital_address": "浙江省杭州市庆春路261号",
            "phone_number": "0571-87236114，0751-87236666",
            "hospital_grade": "三级甲等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "浙江大学医学院附属邵逸夫医院",
            "hospital_address": "浙江省杭州市庆春东路3号",
            "phone_number": "0571-86090073",
            "hospital_grade": "三级甲等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州市红十字会医院",
            "hospital_address": "浙江省杭州市环城东路208",
            "phone_number": "0571-56109999",
            "hospital_grade": "三级甲等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州市第一人民医院",
            "hospital_address": "浙江省杭州市浣纱路261号",
            "phone_number": "0571-87065701",
            "hospital_grade": "三级甲等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州市中医院",
            "hospital_address": "浙江省杭州市体育场路453号",
            "phone_number": "0571-85827888",
            "hospital_grade": "三级甲等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "浙江医科大学附属第一医院",
            "hospital_address": "浙江省杭州市庆春路79号",
            "phone_number": "0571-87236666",
            "hospital_grade": "三级甲等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "浙江省立同德医院",
            "hospital_address": "浙江省杭州市古翠路234号",
            "phone_number": "0571-89972114",
            "hospital_grade": "三级甲等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "浙江中医药大学附属广兴医院",
            "hospital_address": "浙江省杭州体育场路453号",
            "phone_number": "0571-8582788885118360",
            "hospital_grade": "三级甲等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "浙江省新华医院",
            "hospital_address": "浙江省杭州市潮王路318号",
            "phone_number": "0571-85267000",
            "hospital_grade": "三级甲等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州市第七人民医院杭州市精神病院",
            "hospital_address": "浙江省杭州市天目山路305号",
            "phone_number": "0571-85121914",
            "hospital_grade": "三级甲等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "浙江中医院大学附属第一医院浙江省中医院",
            "hospital_address": "浙江省杭州市邮电路54号",
            "phone_number": "0571-87068001",
            "hospital_grade": "三级甲等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "浙江省肿瘤医院浙江中医药大学附属肿瘤医院",
            "hospital_address": "浙江省杭州市半山桥广济路38号",
            "phone_number": "0571-881222220571-88122233",
            "hospital_grade": "三级甲等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "中国人民解放军第一一七医院",
            "hospital_address": "浙江省杭州市灵隐路14号",
            "phone_number": "0571-87986120",
            "hospital_grade": "三级甲等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州市整形医院",
            "hospital_address": "浙江省杭州市上塘路168号",
            "phone_number": "0571-85331610，0571-85331611",
            "hospital_grade": "三级乙等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州市第二人民医院",
            "hospital_address": "浙江省杭州市温州路126号",
            "phone_number": "0571-88303508",
            "hospital_grade": "三级乙等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州市萧山区中医院",
            "hospital_address": "浙江省杭州萧山区育才路152号",
            "phone_number": "0571-82732288，0571-82722120",
            "hospital_grade": "三级乙等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "武警浙江省总队杭州医院之江医院",
            "hospital_address": "浙江省杭州江中兴路",
            "phone_number": "0571-86685599",
            "hospital_grade": "三级乙等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州师范大学附属医院",
            "hospital_address": "浙江省杭州市拱宸桥温州路126号",
            "phone_number": "0571-88017958",
            "hospital_grade": "三级乙等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "浙江中医院大学附属第二医院",
            "hospital_address": "浙江省杭州市潮王路318号",
            "phone_number": "0571-8808458488077914",
            "hospital_grade": "三级乙等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州师范学院医学院附属医院",
            "hospital_address": "浙江省杭州市温州路126号",
            "phone_number": "0571-88303677，0571-88303506",
            "hospital_grade": "三级乙等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州广仁医院",
            "hospital_address": "浙江省杭州市新塘路327号",
            "phone_number": "0571-86993699",
            "hospital_grade": "三级丙等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州市烧伤医院",
            "hospital_address": "浙江省杭州市机场路222号",
            "phone_number": "0571-85141106，0571-85141304",
            "hospital_grade": "二级甲等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州市余杭区第一人民医院",
            "hospital_address": "浙江省杭州市余杭临平街道保健路28号",
            "phone_number": "0571-86224915，0571-86224254",
            "hospital_grade": "二级甲等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州市第三人民医院",
            "hospital_address": "浙江省杭州市西湖大道38号",
            "phone_number": "0571-87823106，0571-87814481",
            "hospital_grade": "二级甲等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州市口腔医院",
            "hospital_address": "浙江省杭州市平海路57号",
            "phone_number": "0571-87030682",
            "hospital_grade": "二级甲等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州市妇幼保健院",
            "hospital_address": "浙江省杭州市开元路70号",
            "phone_number": "0571-87075164",
            "hospital_grade": "二级甲等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州强生泌尿外科医院",
            "hospital_address": "浙江省杭州下城区环城北路90号",
            "phone_number": "0571-85098899",
            "hospital_grade": "二级甲等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州市萧山区第三人民医院",
            "hospital_address": "浙江省杭州市萧山临浦镇峙山北路",
            "phone_number": "0571-82472434，0571-82472634",
            "hospital_grade": "二级甲等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "浙江中医院大学附属杭州第三医院",
            "hospital_address": "浙江省杭州市西湖大道38号",
            "phone_number": "0571-8782310687814481",
            "hospital_grade": "二级甲等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州市拱墅中西医结合医院",
            "hospital_address": "浙江省杭州拱墅区祥符北街126号",
            "phone_number": "0571-88170681，0571-88174463",
            "hospital_grade": "二级甲等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "浙江省桐庐县第一人民医院",
            "hospital_address": "浙江省桐庐县桐庐镇开元街180号",
            "phone_number": "0571-64623629",
            "hospital_grade": "二级乙等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "浙江大学校医院",
            "hospital_address": "浙大玉古路20号",
            "phone_number": "0571-87951433",
            "hospital_grade": "二级乙等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州市上城区横河医院",
            "hospital_address": "浙江省杭州市大学路北99号",
            "phone_number": "0571-87015247",
            "hospital_grade": "二级乙等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州市下城区中西医结合医院",
            "hospital_address": "浙江省杭州市东新路沈家路6号",
            "phone_number": "0571-85374915",
            "hospital_grade": "二级丙等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "临安市於潜人民医院",
            "hospital_address": "浙江省临安市於潜镇潜阳路341号",
            "phone_number": "0571-63882419",
            "hospital_grade": "二级丙等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "建德市中医医院",
            "hospital_address": "浙江省建德市新安江街道健康北路1号",
            "phone_number": "0571-64721341",
            "hospital_grade": "二级丙等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州市下城区人民医院",
            "hospital_address": "浙江省杭州下城区延安新村耶稣堂弄16号",
            "phone_number": "0571-85157883",
            "hospital_grade": "一级甲等",
            "区县": "未知区县"
        },
        {
            "hospital_name": "浙江省针灸推拿医院",
            "hospital_address": "浙江省杭州市庆春路万家福三楼38号",
            "phone_number": "0571-87240963，0571-87240964",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "浙江大学医学院附属口腔医院",
            "hospital_address": "中国杭州延安路395号",
            "phone_number": "0571-87217218，0571-87217416",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "富阳市新登中医骨伤科医院",
            "hospital_address": "浙江省富阳市新登镇登城南路26号",
            "phone_number": "0571-63230120，0571-63231120",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州新东方女子医院",
            "hospital_address": "浙江省杭州市莫干山路949号",
            "phone_number": "0571-88182888",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州天目山医院",
            "hospital_address": "浙江省杭州市天目山路319号",
            "phone_number": "0571-8502519985027266",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州肛泰医院",
            "hospital_address": "浙江省杭州市东新路269号和平广场往北200米",
            "phone_number": "0571-88300000，400-826-1188",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州市下城区中医院",
            "hospital_address": "浙江省杭州市建国北路677号",
            "phone_number": "0571-85455175，0571-85455364",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州博爱医院",
            "hospital_address": "浙江省杭州市湖墅南路138号",
            "phone_number": "0571-88845888",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州市第七人民医院",
            "hospital_address": "浙江省杭州市天目山路305号",
            "phone_number": "0571-85121914",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "浙江省第二中医院",
            "hospital_address": "浙江省杭州市古翠路234号",
            "phone_number": "0571-88853256",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州同欣整形美容医院",
            "hospital_address": "浙江省杭州市凤起路357号国都商务大厦12楼",
            "phone_number": "0571-8779754587797546",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州市西湖区中西医结合医院",
            "hospital_address": "浙江省杭州市三墩镇西沙口36号",
            "phone_number": "0571-88951397，0571-88235292",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "浙江省建工医院",
            "hospital_address": "浙江省杭州市莫干山路伞坛巷1号",
            "phone_number": "0571-88084584，0571-88077914",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "中船公司七一五研究所职工医院",
            "hospital_address": "富阳市桂花西路82号",
            "phone_number": "0571-63332037",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州市西湖区中医院",
            "hospital_address": "浙江省杭州西湖区北街126号",
            "phone_number": "0571-88170681",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州市拱墅区红十字会医院",
            "hospital_address": "浙江省杭州拱墅区和睦路37号",
            "phone_number": "0571-88061478，0571-88827712",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "浙江省第二中医院浙江立同德医院",
            "hospital_address": "浙江省杭州市古翠路234号",
            "phone_number": "0571-8891326888853256",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州同仁医院",
            "hospital_address": "浙江省杭州建国北路132号",
            "phone_number": "0571-87296661",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "富阳市精神病防治院",
            "hospital_address": "浙江省富阳市高桥镇高桥东路8号",
            "phone_number": "0571-63435838",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州市上城区中医院",
            "hospital_address": "浙江省杭州市河坊街416号",
            "phone_number": "0571-87021506，0571-87026965",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州市聋儿康复中心",
            "hospital_address": "浙江省杭州市大学路89号",
            "phone_number": "0571-87040060",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州市第一人民医院医学美容科",
            "hospital_address": "浙江省杭州市学士路3号",
            "phone_number": "0571-87064278",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "浙江大学医学院肿瘤医院",
            "hospital_address": "浙江省杭州市半山桥广济路38号",
            "phone_number": "0571-8814440188145807",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "浙江省邮电职工医院",
            "hospital_address": "浙江省杭州市莫干山路219号",
            "phone_number": "0571-88393588",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州市下城区红十字会医院",
            "hospital_address": "浙江省杭州下城区新华路86号",
            "phone_number": "0571-87221387，0571-87077053",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州市东城医院",
            "hospital_address": "浙江省杭州市明月桥",
            "phone_number": "0571-86046073",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州萧山华东医院",
            "hospital_address": "浙江省杭州萧山区萧绍路608号",
            "phone_number": "0571-22899999",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "桐庐县富春江地区中医院",
            "hospital_address": "浙江桐庐县盛家210号",
            "phone_number": "0571-64651649",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州市横河医院",
            "hospital_address": "浙江省杭州市大学路北99号",
            "phone_number": "0571-87015247",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "浙江省省立同德医院第二门诊部",
            "hospital_address": "浙江省杭州市天目山路132号",
            "phone_number": "0571-88082214",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州博雅整形美容门诊部",
            "hospital_address": "浙江省杭州拱墅区湖墅南路271号中环大厦3楼",
            "phone_number": "0571-88389833",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "临安市昌化镇中医骨伤科医院",
            "hospital_address": "浙江省临安市平康路1号",
            "phone_number": "0571-63661762",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "中国人民武警部队浙江省总队杭州医院之江医院",
            "hospital_address": "浙江省杭州江中兴路",
            "phone_number": "0571-86685599",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "浙江省第二人民医院浙江省精神病医院",
            "hospital_address": "余杭市闲林镇钱江路15号",
            "phone_number": "0571-8868143152292203",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "浙江省国体委体育职工医院",
            "hospital_address": "浙江省杭州市体育场路155号",
            "phone_number": "0571-85190893",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州时光医疗美容医院",
            "hospital_address": "浙江省杭州市教工路596号教工路北口",
            "phone_number": "0571-28968899",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州市下城区妇幼保健院",
            "hospital_address": "浙江省杭州市新华路94号",
            "phone_number": "0571-87221387",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "浙江水电职业病医院",
            "hospital_address": "浙江省杭州市学院路99号",
            "phone_number": "0571-88863892",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州市化工职业病防治所",
            "hospital_address": "浙江省杭州市文三路110号",
            "phone_number": "0571-85127236",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "浙江省人民医院浙江省立医院",
            "hospital_address": "浙江省杭州市上塘路158号",
            "phone_number": "0571-8523998887980005",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "富春江水电设备总厂职工医院",
            "hospital_address": "桐庐县富春江镇",
            "phone_number": "0571-64651111",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州市红十字会医院浙江省中西医结合医院",
            "hospital_address": "下城区环城东路38号",
            "phone_number": "0571-8518659485186042",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "浙江省残疾儿童康复中心",
            "hospital_address": "浙江杭州观音塘路103号",
            "phone_number": "0571-86439830",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州经济技术开发区下沙医院",
            "hospital_address": "浙江省杭州下沙镇文教路128号",
            "phone_number": "0571-86921744，0571-86936118",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "博凡齿科诊所",
            "hospital_address": "浙江省杭州市体育场路538号金祝大厦二楼座",
            "phone_number": "0571-8521353885213528",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州师范学院医学院附属医院杭州市第二人民医院",
            "hospital_address": "浙江省杭州市温州路126号",
            "phone_number": "0571-880288228801470488017958",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "浙江大学医学院附属口腔医院浙江省口腔医院",
            "hospital_address": "浙江省杭州市延安路88号",
            "phone_number": NaN,
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "浙江省针灸推拿医院浙江省中医学院附属第三医院",
            "hospital_address": "浙江省杭州市庆春路万家福三楼38号",
            "phone_number": "0571-8724096387240964",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "中国人民解放军第一一七医院杭州空军医院",
            "hospital_address": "浙江省杭州市灵隐路14号",
            "phone_number": "0571-87986120",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "国家电力公司职业病防治院",
            "hospital_address": "建德市保健北路26号",
            "phone_number": "0571-64722452",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州市整形医院杭州市手外科医院",
            "hospital_address": "浙江省杭州下城区上塘路朝晖四区",
            "phone_number": "0571-8533159885331599",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州市上城区人民医院",
            "hospital_address": "浙江省杭州市官巷口东平巷4号",
            "phone_number": "0571-87914473，0571-87026592",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州市上城区第二医院",
            "hospital_address": "浙江省杭州市清泰街民生路13号",
            "phone_number": "0571-87819386",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州赵正美容整形外科专家门诊",
            "hospital_address": "浙江省杭州市赵正美容整形外科专家门诊",
            "phone_number": "0571-87914201",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "浙江省残疾儿童康复中心浙江爱福医院",
            "hospital_address": "浙江观音塘路103号",
            "phone_number": "0571-86439830",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "浙江省公安边防总队医院",
            "hospital_address": "浙江省杭州市秋涛北路548号",
            "phone_number": "0571-86955088，0571-86521728",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州市江干区中医院",
            "hospital_address": "浙江省杭州市南星统一码头98号",
            "phone_number": "0571-86068986",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "浙江省立同德医院分院",
            "hospital_address": "浙江省杭州市余杭闲林镇钱江路15号",
            "phone_number": "0571-88695222",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州市江干区红十字会医院",
            "hospital_address": "浙江省杭州市中山南路303号",
            "phone_number": "0571-86061786",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州市朝晖人民医院",
            "hospital_address": "浙江省杭州朝晖七区12号",
            "phone_number": "0571-85236774",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州浙益眼科中心",
            "hospital_address": "浙江省杭州市庆春路79号浙一医院8号楼",
            "phone_number": "0571-87236780",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "浙江省国土资源厅职工医院",
            "hospital_address": "浙江省杭州市文一路152号",
            "phone_number": "0571-88088163",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州钟冠鸿医疗美容诊所",
            "hospital_address": "浙江省杭州市庆春路东清巷1214号",
            "phone_number": "057187224399",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "杭州振康中医肿瘤专科医院",
            "hospital_address": "浙江省杭州半山路44号",
            "phone_number": "0571-88149618",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "浙江省同德医院第二门诊部",
            "hospital_address": "浙江省杭州市天目山路132号",
            "phone_number": "0571-88082214",
            "hospital_grade": NaN,
            "区县": "未知区县"
        },
        {
            "hospital_name": "浙江中医学院门诊部",
            "hospital_address": "浙江省杭州市庆春路万家福三楼38号",
            "phone_number": "0571-87240963，0571-87240964",
            "hospital_grade": NaN,
            "区县": "未知区县"
        }
    ],
    "桐庐县": [
        {
            "hospital_name": "桐庐县中医医院",
            "hospital_address": "浙江省杭州市桐庐县广场路70号",
            "phone_number": "0571-646236",
            "hospital_grade": "二级乙等",
            "区县": "桐庐县"
        },
        {
            "hospital_name": "桐庐县第一人民医院",
            "hospital_address": "浙江省杭州市桐庐县桐庐镇开元街180号",
            "phone_number": "0571-64623629",
            "hospital_grade": "二级乙等",
            "区县": "桐庐县"
        },
        {
            "hospital_name": "桐庐县中医院",
            "hospital_address": "浙江省杭州市桐庐县广场路70号",
            "phone_number": "0571-64623436，0571-64627084",
            "hospital_grade": "二级乙等",
            "区县": "桐庐县"
        },
        {
            "hospital_name": "桐庐县妇幼保健院",
            "hospital_address": "浙江省杭州市桐庐县大奇山路369号",
            "phone_number": "0571-64212280-22428",
            "hospital_grade": NaN,
            "区县": "桐庐县"
        },
        {
            "hospital_name": "杭州富春江医院",
            "hospital_address": "浙江省杭州市桐庐县富春江",
            "phone_number": "0571-64654161",
            "hospital_grade": NaN,
            "区县": "桐庐县"
        },
        {
            "hospital_name": "桐庐县中医骨伤科医院",
            "hospital_address": "浙江省杭州市桐庐县瑶琳镇杨家村56号",
            "phone_number": "0571-64371070，0571-64371071",
            "hospital_grade": NaN,
            "区县": "桐庐县"
        },
        {
            "hospital_name": "桐庐县第二人民医院",
            "hospital_address": "浙江省杭州市桐庐县分水镇新淳路96号",
            "phone_number": "0571-64311854",
            "hospital_grade": NaN,
            "区县": "桐庐县"
        },
        {
            "hospital_name": "桐庐县分水人民医院",
            "hospital_address": "浙江省杭州市桐庐县县前街1号",
            "phone_number": "0571-64311066",
            "hospital_grade": NaN,
            "区县": "桐庐县"
        }
    ],
    "江干区": [
        {
            "hospital_name": "浙医附属邵逸夫医院",
            "hospital_address": "浙江省杭州市江干区庆春东路3号",
            "phone_number": "0571-86090073",
            "hospital_grade": "三级甲等",
            "区县": "江干区"
        },
        {
            "hospital_name": "杭州市第四人民医院杭州市肿瘤医院",
            "hospital_address": "浙江省杭州市江干区严官巷34号",
            "phone_number": "0571-86062281",
            "hospital_grade": "二级甲等",
            "区县": "江干区"
        },
        {
            "hospital_name": "杭州市江干区人民医院",
            "hospital_address": "浙江省杭州市江干区海潮路90号",
            "phone_number": "0571-86521706，0571-86060028",
            "hospital_grade": "二级甲等",
            "区县": "江干区"
        },
        {
            "hospital_name": "浙江省青春医院浙江省监狱中心医院",
            "hospital_address": "浙江省杭州市江干区庆春东路54号",
            "phone_number": "0571-86041717，0571-86041718",
            "hospital_grade": "二级甲等",
            "区县": "江干区"
        },
        {
            "hospital_name": "浙江省青春医院",
            "hospital_address": "浙江省杭州市江干区青春东路54号",
            "phone_number": "0571-801717",
            "hospital_grade": "二级乙等",
            "区县": "江干区"
        },
        {
            "hospital_name": "江干区人民医院",
            "hospital_address": "浙江省杭州市江干区海潮路90号",
            "phone_number": "0571-86062236",
            "hospital_grade": "二级丙等",
            "区县": "江干区"
        },
        {
            "hospital_name": "江干区笕桥医院",
            "hospital_address": "浙江省杭州市江干区机场路迎宾桥",
            "phone_number": "0571-85145026",
            "hospital_grade": "二级丙等",
            "区县": "江干区"
        },
        {
            "hospital_name": "杭州市江干区九堡医院",
            "hospital_address": "浙江省杭州市江干区九堡和睦巷4号",
            "phone_number": "0571-86905195",
            "hospital_grade": NaN,
            "区县": "江干区"
        },
        {
            "hospital_name": "杭州市江干区妇幼保健院",
            "hospital_address": "浙江省杭州市江干区采荷二区双菱路16号",
            "phone_number": "0571-86045996",
            "hospital_grade": NaN,
            "区县": "江干区"
        },
        {
            "hospital_name": "浙江省第六监狱医院",
            "hospital_address": "浙江省杭州市江干区下沙乡杭铣新村",
            "phone_number": "0571-86932288",
            "hospital_grade": NaN,
            "区县": "江干区"
        },
        {
            "hospital_name": "杭州市江干区九堡医院江干区九堡社区卫生服务中心",
            "hospital_address": "浙江省杭州市江干区九堡和睦巷4号",
            "phone_number": "0571-86905195",
            "hospital_grade": NaN,
            "区县": "江干区"
        }
    ],
    "淳安县": [
        {
            "hospital_name": "淳安县第一人民医院",
            "hospital_address": "浙江省杭州市淳安县千岛湖镇",
            "phone_number": "0571-64812271",
            "hospital_grade": "二级甲等",
            "区县": "淳安县"
        },
        {
            "hospital_name": "淳安县中医院",
            "hospital_address": "浙江省杭州市淳安县骑龙巷13号",
            "phone_number": "0571-64812540",
            "hospital_grade": "二级乙等",
            "区县": "淳安县"
        },
        {
            "hospital_name": "淳安县第二人民医院",
            "hospital_address": "浙江省杭州市淳安县汾口镇湖塘路16号",
            "phone_number": "0571-64851263",
            "hospital_grade": "一级乙等",
            "区县": "淳安县"
        },
        {
            "hospital_name": "淳安县妇幼保健院",
            "hospital_address": "浙江省杭州市淳安县千岛湖镇新安东路345号",
            "phone_number": "0571-64818807",
            "hospital_grade": NaN,
            "区县": "淳安县"
        },
        {
            "hospital_name": "淳安县新安江开发公司职工医院",
            "hospital_address": "浙江省杭州市淳安县",
            "phone_number": "0571-64822724",
            "hospital_grade": NaN,
            "区县": "淳安县"
        },
        {
            "hospital_name": "淳安县新安城区医院",
            "hospital_address": "浙江省杭州市淳安县新安城区",
            "phone_number": "0571-64822724",
            "hospital_grade": NaN,
            "区县": "淳安县"
        },
        {
            "hospital_name": "淳安县千岛湖城区医院",
            "hospital_address": "浙江省杭州市淳安县千岛湖镇新安西路13号",
            "phone_number": "0571-64888112",
            "hospital_grade": NaN,
            "区县": "淳安县"
        }
    ],
    "滨江区": [
        {
            "hospital_name": "浙江省人民医院滨江分院",
            "hospital_address": "浙江省杭州市滨江区西兴镇人民路14号",
            "phone_number": "0571-86681016",
            "hospital_grade": NaN,
            "区县": "滨江区"
        },
        {
            "hospital_name": "武警浙江总队杭州医院",
            "hospital_address": "浙江省杭州市滨江区江南大道86号钱江三桥南端",
            "phone_number": "0571-86628050",
            "hospital_grade": NaN,
            "区县": "滨江区"
        }
    ],
    "经济技术开发区": [
        {
            "hospital_name": "浙江省中医院下沙院区",
            "hospital_address": "浙江省杭州市经济技术开发区9号大街9号",
            "phone_number": "0571-8691935486919300",
            "hospital_grade": NaN,
            "区县": "经济技术开发区"
        }
    ],
    "萧山区": [
        {
            "hospital_name": "杭州市萧山区第一人民医院",
            "hospital_address": "浙江省杭州市萧山区城厢镇市心中路199号",
            "phone_number": "0571-82621086",
            "hospital_grade": "三级乙等",
            "区县": "萧山区"
        },
        {
            "hospital_name": "萧山区第一人民医院",
            "hospital_address": "浙江省杭州市萧山区城厢街道市心路199号",
            "phone_number": "0571-82621086",
            "hospital_grade": "三级乙等",
            "区县": "萧山区"
        },
        {
            "hospital_name": "杭州市萧山区第二人民医院",
            "hospital_address": "浙江省杭州市萧山区瓜沥镇东灵路47号",
            "phone_number": "0571-82551232，0571-82556018",
            "hospital_grade": "二级甲等",
            "区县": "萧山区"
        },
        {
            "hospital_name": "萧山区精神病医院",
            "hospital_address": "浙江省杭州市萧山区城厢街道洄澜路66号",
            "phone_number": "0571-82722609",
            "hospital_grade": "二级甲等",
            "区县": "萧山区"
        },
        {
            "hospital_name": "杭州市萧山区第六人民医院杭州市萧山区中医骨伤科医院",
            "hospital_address": "浙江省杭州市萧山区",
            "phone_number": "0571-822310720571-82231751",
            "hospital_grade": "二级甲等",
            "区县": "萧山区"
        },
        {
            "hospital_name": "萧山区妇幼保健院",
            "hospital_address": "浙江省杭州市萧山区萧然东路19号",
            "phone_number": NaN,
            "hospital_grade": "二级甲等",
            "区县": "萧山区"
        },
        {
            "hospital_name": "浙江萧山医院浙美整形美容中心",
            "hospital_address": "浙江省杭州市萧山区城厢镇萧然东路19号",
            "phone_number": "0571-83150091",
            "hospital_grade": "二级甲等",
            "区县": "萧山区"
        },
        {
            "hospital_name": "萧山医院",
            "hospital_address": "浙江省杭州市萧山区育才北路728号",
            "phone_number": "0571-8272852382753053",
            "hospital_grade": "二级甲等",
            "区县": "萧山区"
        },
        {
            "hospital_name": "杭州市萧山区第五人民医院杭州市萧山区红十字医院",
            "hospital_address": "浙江省杭州市萧山区回澜路66号",
            "phone_number": "0571-82722349",
            "hospital_grade": "二级甲等",
            "区县": "萧山区"
        },
        {
            "hospital_name": "萧山区第四人民医院",
            "hospital_address": "浙江省杭州市萧山区义蓬镇义盛路281号",
            "phone_number": "0571-82163352",
            "hospital_grade": "二级甲等",
            "区县": "萧山区"
        },
        {
            "hospital_name": "萧山区中医院",
            "hospital_address": "浙江省杭州市萧山区育才路152号",
            "phone_number": "0571-82732288",
            "hospital_grade": "二级甲等",
            "区县": "萧山区"
        },
        {
            "hospital_name": "杭州市萧山区第四人民医院",
            "hospital_address": "浙江省杭州市萧山区义蓬镇义盛路284号",
            "phone_number": "0571-82163352",
            "hospital_grade": "二级乙等",
            "区县": "萧山区"
        },
        {
            "hospital_name": "杭州市萧山区第六人民医院",
            "hospital_address": "浙江省杭州市萧山区",
            "phone_number": "0571-82231072，0571-82231751",
            "hospital_grade": "二级乙等",
            "区县": "萧山区"
        },
        {
            "hospital_name": "萧山区中医骨伤科医院",
            "hospital_address": "浙江省杭州市萧山区戴村镇",
            "phone_number": NaN,
            "hospital_grade": "二级乙等",
            "区县": "萧山区"
        },
        {
            "hospital_name": "杭州市萧山区中医骨伤科医院",
            "hospital_address": "浙江省杭州市萧山区戴村镇",
            "phone_number": "0571-82234608",
            "hospital_grade": "二级乙等",
            "区县": "萧山区"
        },
        {
            "hospital_name": "萧山区第三人民医院",
            "hospital_address": "浙江省杭州市萧山区临浦镇峙山北路",
            "phone_number": "0571-82472940",
            "hospital_grade": "二级丙等",
            "区县": "萧山区"
        },
        {
            "hospital_name": "萧山区第二人民医院",
            "hospital_address": "浙江省杭州市萧山区瓜沥镇东灵路47号",
            "phone_number": "0571-82551232",
            "hospital_grade": "二级丙等",
            "区县": "萧山区"
        },
        {
            "hospital_name": "杭州第二棉纺织厂职工医院",
            "hospital_address": "浙江省杭州市萧山区城厢镇工人路59号",
            "phone_number": "0571-82623911",
            "hospital_grade": "一级甲等",
            "区县": "萧山区"
        },
        {
            "hospital_name": "杭州市萧山区皮肤病防治院",
            "hospital_address": "浙江省杭州市萧山区萧杭公路50号",
            "phone_number": "0571-82687262",
            "hospital_grade": "一级甲等",
            "区县": "萧山区"
        },
        {
            "hospital_name": "浙江萧山医院",
            "hospital_address": "浙江省杭州市萧山区城厢街道洄澜路66号",
            "phone_number": "0571-82716834",
            "hospital_grade": NaN,
            "区县": "萧山区"
        },
        {
            "hospital_name": "萧山第一人民医院分院",
            "hospital_address": "浙江省杭州市萧山区拱秀路999号",
            "phone_number": "0571-8273155887232451",
            "hospital_grade": NaN,
            "区县": "萧山区"
        },
        {
            "hospital_name": "杭州市萧山区泰和医院",
            "hospital_address": "浙江省杭州市萧山区高桥路南江公园旁",
            "phone_number": "0571-83060362",
            "hospital_grade": NaN,
            "区县": "萧山区"
        },
        {
            "hospital_name": "萧山区皮肤病防治院",
            "hospital_address": "浙江省杭州市萧山区萧杭公路50号",
            "phone_number": "0571-82807801",
            "hospital_grade": NaN,
            "区县": "萧山区"
        },
        {
            "hospital_name": "浙江萧山月子护理院",
            "hospital_address": "浙江省杭州市萧山区市心南路269号",
            "phone_number": "0571-82629788",
            "hospital_grade": NaN,
            "区县": "萧山区"
        },
        {
            "hospital_name": "杭州前进齿轮和集团公司职工医院",
            "hospital_address": "浙江省杭州市萧山区萧金路45号",
            "phone_number": "0571-8268449",
            "hospital_grade": NaN,
            "区县": "萧山区"
        },
        {
            "hospital_name": "杭州萧山仁豪医院",
            "hospital_address": "浙江省杭州市萧山区育才路汇宇花园旁",
            "phone_number": "0571-82659999",
            "hospital_grade": NaN,
            "区县": "萧山区"
        },
        {
            "hospital_name": "杭州萧山钱江医院",
            "hospital_address": "浙江省杭州市萧山区萧绍路1541号",
            "phone_number": "0571-82629000",
            "hospital_grade": NaN,
            "区县": "萧山区"
        },
        {
            "hospital_name": "杭州市萧山区皮肤病医院",
            "hospital_address": "浙江省杭州市萧山区乐园路58号",
            "phone_number": "0571-82686801",
            "hospital_grade": NaN,
            "区县": "萧山区"
        },
        {
            "hospital_name": "杭州市萧山登峰医院",
            "hospital_address": "浙江省杭州市萧山区拱秀路999号",
            "phone_number": "0571-82731558，0571-87232451",
            "hospital_grade": NaN,
            "区县": "萧山区"
        },
        {
            "hospital_name": "杭州二棉职工医院",
            "hospital_address": "浙江省杭州市萧山区城厢街道工人路59号",
            "phone_number": "0571-82621611",
            "hospital_grade": NaN,
            "区县": "萧山区"
        },
        {
            "hospital_name": "杭州杭发集团公司职工医院",
            "hospital_address": "浙江省杭州市萧山区北干街道市眯中路226号",
            "phone_number": "0571-82815276",
            "hospital_grade": NaN,
            "区县": "萧山区"
        },
        {
            "hospital_name": "杭州市萧山区激光医院",
            "hospital_address": "浙江省杭州市萧山区城东",
            "phone_number": "0571-82716205",
            "hospital_grade": NaN,
            "区县": "萧山区"
        },
        {
            "hospital_name": "杭州市萧山区皮肤病医院杭州市萧山区城西人民医院",
            "hospital_address": "浙江省杭州市萧山区乐园路58号",
            "phone_number": "0571-82686801",
            "hospital_grade": NaN,
            "区县": "萧山区"
        },
        {
            "hospital_name": "杭州萧然女子医院",
            "hospital_address": "浙江省杭州市萧山区金家桥路2号江寺公园旁",
            "phone_number": "0571-22811111",
            "hospital_grade": NaN,
            "区县": "萧山区"
        },
        {
            "hospital_name": "萧山登峰医院",
            "hospital_address": "浙江省杭州市萧山区拱秀路999号",
            "phone_number": "0571-82727120",
            "hospital_grade": NaN,
            "区县": "萧山区"
        }
    ],
    "萧山经济技术开发区": [
        {
            "hospital_name": "萧山经济技术开发区医院",
            "hospital_address": "浙江省杭州市萧山经济技术开发区宁税路68号",
            "phone_number": "0571-82831999，0571-82832778",
            "hospital_grade": "二级乙等",
            "区县": "萧山经济技术开发区"
        }
    ],
    "西湖区": [
        {
            "hospital_name": "浙江医院",
            "hospital_address": "浙江省杭州市西湖区灵隐路12号",
            "phone_number": "0571-87987373，0571-88967881",
            "hospital_grade": "三级甲等",
            "区县": "西湖区"
        },
        {
            "hospital_name": "浙江医院分院",
            "hospital_address": "浙江省杭州市西湖区三墩街241号",
            "phone_number": "0571-88951125，0571-88951051",
            "hospital_grade": "二级甲等",
            "区县": "西湖区"
        },
        {
            "hospital_name": "杭州市西湖区人民医院",
            "hospital_address": "浙江省杭州市西湖区外东山弄5号",
            "phone_number": "0571-87979071，0571-87968684",
            "hospital_grade": "二级甲等",
            "区县": "西湖区"
        },
        {
            "hospital_name": "杭州市第九人民医院",
            "hospital_address": "浙江省杭州市西湖区三墩街241号",
            "phone_number": "0571-88951125",
            "hospital_grade": "二级乙等",
            "区县": "西湖区"
        },
        {
            "hospital_name": "杭州哼哈口腔医院",
            "hospital_address": "浙江省杭州市西湖区古墩路20号",
            "phone_number": "87151966871519977",
            "hospital_grade": "二级丙等",
            "区县": "西湖区"
        },
        {
            "hospital_name": "西湖区人民医院",
            "hospital_address": "浙江省杭州市西湖区外东山弄5号",
            "phone_number": "0571-87990689",
            "hospital_grade": "二级丙等",
            "区县": "西湖区"
        },
        {
            "hospital_name": "杭州市西湖区留下医院",
            "hospital_address": "浙江省杭州市西湖区留下镇185号",
            "phone_number": "0571-85229026",
            "hospital_grade": "二级丙等",
            "区县": "西湖区"
        },
        {
            "hospital_name": "浙江大学医院",
            "hospital_address": "浙江省杭州市西湖区浙大路38号",
            "phone_number": "0571-8795131087951433",
            "hospital_grade": NaN,
            "区县": "西湖区"
        },
        {
            "hospital_name": "杭州正大医院",
            "hospital_address": "浙江省杭州市西湖区益乐路28号",
            "phone_number": "0571-88853666",
            "hospital_grade": NaN,
            "区县": "西湖区"
        },
        {
            "hospital_name": "杭州市西湖区第二人民医院",
            "hospital_address": "浙江省杭州市西湖区转塘镇庙山东村6号",
            "phone_number": "0571-87091050，0571-87091223",
            "hospital_grade": NaN,
            "区县": "西湖区"
        },
        {
            "hospital_name": "杭州市西湖区留下人民医院",
            "hospital_address": "浙江省杭州市西湖区留下镇185号",
            "phone_number": "0571-85229026",
            "hospital_grade": NaN,
            "区县": "西湖区"
        },
        {
            "hospital_name": "杭州同济医院",
            "hospital_address": "浙江省杭州市西湖区黄姑山路24号颐高旗舰广场对面",
            "phone_number": "0571-8821888888219148",
            "hospital_grade": NaN,
            "区县": "西湖区"
        },
        {
            "hospital_name": "浙江省水利水电工程局职工医院",
            "hospital_address": "浙江省杭州市西湖区西兴人民路10号",
            "phone_number": "0571-86681016",
            "hospital_grade": NaN,
            "区县": "西湖区"
        },
        {
            "hospital_name": "杭州市西湖区第三人民医院",
            "hospital_address": "浙江省杭州市西湖区古荡小区内",
            "phone_number": "0571-85022771",
            "hospital_grade": NaN,
            "区县": "西湖区"
        },
        {
            "hospital_name": "杭州市西湖区妇幼保健院",
            "hospital_address": "浙江省杭州市西湖区",
            "phone_number": "0571-88831975",
            "hospital_grade": NaN,
            "区县": "西湖区"
        },
        {
            "hospital_name": "杭州市西湖区红十字会医院",
            "hospital_address": "浙江省杭州市西湖区保叔路98号",
            "phone_number": "0571-85155222",
            "hospital_grade": NaN,
            "区县": "西湖区"
        }
    ]
};
const page = {
  data: {
    array: [],
    array2: [],
    date: '2016-09-01',
    index: 5,
    index2: 28,
    tocalendar: 0,
    ipt:{
      tel:''
    },
    districts: Object.keys(hospitals),
    hospitals: hospitals,
    selectedDistrict: '',
    showDistricts: false,
    districtHospitals: [],
    selectedHospital: null
  },
  onLoad: function () {
    // 加载医院信息
    this.setData({
      districts: Object.keys(hospitals),
      hospitals: hospitals
    });
  },
  toggleDistricts: function () {
    this.setData({
      showDistricts: !this.data.showDistricts
    });
  },
  selectDistrict: function (e) {
    this.setData({
      selectedDistrict: e.currentTarget.dataset.district,
      districtHospitals: this.data.hospitals[e.currentTarget.dataset.district],
      selectedHospital: null,
      showDistricts: false
    });
  },
  selectHospital: function (e) {
    const hospitalIndex = e.currentTarget.dataset.index;
    this.setData({
      selectedHospital: this.data.districtHospitals[hospitalIndex]
    });
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerChange2: function (e) {
    this.setData({
      index2: e.detail.value
    })
  },
  bindinput: function(e){
    let that = this
    let ipt = that.data.ipt
    let key_ = e.currentTarget.dataset.key
    let value = e.detail.value
    ipt[key_] = value
  },
  submit: function(){
    let that = this
    let ipt = that.data.ipt
    if(ipt.tel == ''){
      wx.showToast({
        title: '请输入手机号码',
        icon: 'none'
      })
    } else{
      //提交数据
      wx.setStorage({
        key: 'ipt',
        data: this.data.ipt
      })
      wx.showToast({
        title: '成功更新',
        icon: 'none'
      })
    }
  },
  sos: function(){
    let that = this
    wx.getStorage({
      key: 'ipt',
      success: function(res){
        that.setData({
          ipt: res.data
        })
        wx.makePhoneCall({
          phoneNumber: res.data.tel,
          success: function () {
            console.log("拨打电话成功！")
        },
        fail: function () {
            console.log("拨打电话失败！")
        }
        })
      }
    })
  }
}


Page(page)