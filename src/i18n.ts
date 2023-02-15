import { createI18n } from "vue3-i18n";

const messages = {
    en: {
        menu: {
            home: "Home",
            faq: "FAQ",
            chatbot: "Chatbot",
            language: "Language",
            exit: "Exit",
            ngo: "NGO"

        },
        changeLanguageHeading: "Change Language",
        changeLanguageText: " The Mobile Application supports English and Yoruba. click the button to toggle language",
        faqs: [
            {
                question: "Meaning Of Child Abuse",
                answer:
                    "(A). Any form of maltreatment by an adult, which is violent or threatening for the child. (B). Child Abuse is all forms of physical or emotional ill-treatment, sexual abuse, neglect or neglectful action, or commercial or other mistreatment ensuing in definite or possible harm to the child’s health, continued existence, growth or self-esteem in the circumstance of a relationship of accountability, trust or authority",
            },
            {
                question: "How Is Child Abuse and Neglect Defined in Federal Law?",
                answer:
                    "Federal legislation lays the groundwork for State laws on child maltreatment by identifying a minimum set of  actions or behaviors that define child abuse and neglect.  The Federal Child Abuse Prevention and Treatment Act  (CAPTA), as amended and reauthorized by the CAPTA  Reauthorization Act of 2010, defines child abuse and  neglect as, at a minimum, “any recent act or failure to  act on the part of a parent or caretaker which results in  death, serious physical or emotional harm, sexual abuse or  exploitation(including sexual abuse as determined under  section 111), or an act or failure to act which presents an imminent risk of serious harm” (42 U.S.C. 5101 note, § 3)",
            },
            {
                question: "What Are the Major Types of Child Abuse and Neglect?",
                answer:
                    "Within the minimum standards set by The Federal Child Abuse Prevention and Treatment Act (CAPTA), each State is responsible for providing its own definitions of child  abuse and neglect.Most States recognize four major types of maltreatment: physical abuse, neglect, sexual abuse, and emotional abuse.",
            },
            {
                question: "what is physical abuse?",
                answer:
                    "Physical abuse is a nonaccidental physical injury to a child caused by a parent, caregiver, or other person  responsible for a child and can include punching, beating, kicking, biting, shaking, throwing, stabbing, choking, hitting(with a hand, stick, strap, or other object), burning, or otherwise causing physical harm.2  Physical discipline, such as spanking or paddling, is not considered abuse as long as it is reasonable and causes no bodily injury to the  child.Injuries from physical abuse could range from minor  bruises to severe fractures or death",
            },
            {
                question: "What is Neglect?",
                answer:
                    "Neglect is the failure of a parent or other caregiver to  provide for a child’s basic needs.Neglect generally   includes the following categories:   Physical(e.g., failure to provide necessary food or  shelter, lack of appropriate supervision)  Medical(e.g., failure to provide necessary medical   or mental health treatment, withholding medically   indicated treatment from children with life - threatening   conditions) 3   Educational(e.g., failure to educate a child or attend to special education needs)  Emotional(e.g., inattention to a child’s emotional needs, failure to provide psychological care, permitting a child to use alcohol or other drugs) ",
            },
            {
                question: "What is Sexual Abuse?",
                answer:
                    "Sexual abuse includes activities by a parent or other caregiver such as fondling a child’s genitals, penetration,  incest, rape, sodomy, indecent exposure, and exploitation through prostitution or the production of pornographic materials.Sexual abuse is defined by CAPTA as “the  employment, use, persuasion, inducement, enticement,     or coercion of any child to engage in, or assist any other  person to engage in, any sexually explicit conduct or  simulation of such conduct for the purpose of producing  a visual depiction of such conduct; or the rape, and in   cases of caretaker or interfamilial relationships, statutory rape, molestation, prostitution, or other form of sexual  exploitation of children, or incest with children”(42 U.S.C.   § 5106g(a)(4))",
            },
            {
                question: "What is Emotional Abuse?",
                answer:
                    "Emotional abuse (or psychological abuse) is a pattern of behavior that impairs a child’s emotional development or  sense of self- worth.This may include constant criticism, threats, or rejection as well as withholding love, support, or guidance.Emotional abuse is often difficult to prove, and, therefore, child protective services may not be able  to intervene without evidence of harm or mental injury to   the child",
            },
            {
                question: "Anychild Can be abused in one way or the other?",
                answer: "Yes. A child can be abused sexually, physically or Emotionally.",
            },
            {
                question: "A child can easily be abuse by relative or family members",
                answer: "Yes",
            },
            {
                question: "Being as a a child can affect your self esteem? ",
                answer:
                    "YES, A child that is being or been abuse will find it difficult to talk in public.",
            },
            {
                question: "A child who is been abuse will feeling guilty and helpless?",
                answer: " YES",
            },
            {
                question:
                    "A child may be afraid to tell anyone about the abuse especially if the abuser is a parent, relative or family friend??",
                answer: " YES",
            },
            {
                question: "Causes of child abuse in society?",
                answer:
                    " Ignorance, unmoral dressing, illiteracy, poverty, divorce, separation of parents etc. can all cause any form of child abuse",
            },
            {
                question: "All forms of abuse to a child can cause child’s death?",
                answer: " YES",
            },
            {
                question:
                    "Can lack of information, ignorance and illiteracy cause child abuse?",
                answer: "YES",
            },
            {
                question: "What to Consider Before Leaving Your Child Home Alone?",
                answer:
                    " When deciding whether to leave a child home alone,  you will want to consider your child’s physical, mental,  developmental, and emotional well- being; his or her willingness to stay home alone; and laws and policies in your area regarding this issue",
            },
            {
                question: "What to consider before leaving your child home alone",
                answer:
                    "  Does your family have a safety plan for emergencies Can your child follow this plan ?  Does your child know his or her full name, address, and phone number?   Does your child know where you are and how to contact you at all times?  Does your child know the full names and contactinformation of other trusted adults and know to call 112 or 199 in case of emergency",
            },
            {
                question: "Recognizing Signs of Abuse and Neglect and When to Report?",
                answer:
                    " It is important to recognize high-risk situations and the  signs and symptoms of maltreatment.If you suspect a child is being harmed, reporting your suspicions may  protect him or her and help the family receive assistance. Any concerned person can report suspicions of child abuse or neglect.Reporting your concerns is not making an accusation; rather, it is a request for an investigation and assessment to determine if help is needed https://www.childwelfare.gov/topics/systemwide/laws-policies/statutes/manda/?hasBeenRedirected=1",
            },
            {
                question: " Sign of Physical Abuse",
                answer:
                    "A child who exhibits the following signs may be a victim of   physical abuse:  Has unexplained injuries, such as burns, bites, bruises,  broken bones, or black eyes, Has fading bruises or other noticeable marks after an absence from school,  Seems scared, anxious, depressed, withdrawn, or  aggressive   Seems frightened of his or her parents and protests or  cries when it is time to go home  Shrinks at the approach of adults Shows changes in eating and sleeping habits Reports injury by a parent or another adult caregiver Abuses animals or petsUnexplained injuries, such as bruises, broken bones(fractures) or burns, Injuries that aren’t compatible with child’s development ability, Injuries that don’t match the given explanation.",
            },
            {
                question: "Sexual abuse signs and symptoms ",
                answer:
                    "Inappropriate sexual behavior with other children, Genital or anal pain, bleeding, or injury. Sexual behavior or knowledge that’s inappropriate for the child’s age  Pregnancy or a sexually transmitted infection",
            },
            {
                question: "Emotional abuse signs and symptoms ",
                answer:
                    "Depression, Loss of self- confidence or self - esteem, Delayed or inappropriate emotional development, Avoidance of certain situation, such as refusing to go to school or ride the bus,Appears to desperately seek affection, Loss of previously acquired developmental skills, A decrease in school performance or loss of interest in school.",
            },
            {
                question: "Neglect Signs and Symptoms",
                answer:
                    "Poor growth,  Poor personal cleanliness,  Hoarding or stealing food,  Excessive weight with medical complications that are not being adequately addressed, Poor record of school attendance,  Lack of appropriate attention for medical, dental or psychological problems or lack of necessary follow- up care.",
            },
        ]
    },
    yo: {
        menu: {
            home: "Ile",
            faq: "Ibeere to gbajumo",
            chatbot: "Chatbot",
            language: "Yi Ede Pada",
            exit: "Jade",
            ngo: "NGO"
        },
        changeLanguageHeading: "Yi Ede Pada",
        changeLanguageText: "Ohun elo Alagbeka n ṣe atilẹyin Gẹẹsi ati Yoruba. tẹ bọtini naa lati yi ede pada",
        faqs: [
            {
                question: "Itumo ti ilokulo ọmọde",
                answer: "(A) Eyikeyi iru iwa ibajẹ nipasẹ agbalagba, ti o jẹ iwa-ipa tabi idẹruba fun ọmọ naa. (B) Ibajẹ ọmọde jẹ gbogbo iru itọju ti ara tabi ẹdun, ilokulo ibalopo, aibikita tabi iṣe aibikita, tabi iṣowo tabi iṣowo tabi Iwa ibajẹ miiran ti o waye ni pato tabi ipalara ti o ṣeeṣe si ilera ọmọ naa, igbesi aye tẹsiwaju, idagbasoke tabi iyi ara ẹni ni ipo ibatan ti iṣiro, igbẹkẹle tabi aṣẹ"
            },
            {
                question: "Bawo ni Iwakulo ati Aibikita Ọmọ ṣe tumọ si ni Ofin Federal?",
                answer: "Ofin Federal ṣe ipilẹ fun awọn ofin Ipinle lori iwa ibajẹ ọmọde nipasẹ idamo eto ti o kere ju ti awọn iṣe tabi awọn iwa ti o ṣalaye ilokulo ọmọde ati aibikita. Ofin Idena ati Itọju Abuse Ọmọde ti Federal (CAPTA), gẹgẹbi atunṣe ati tun gba aṣẹ nipasẹ Ofin Atunse CAPTA ti Ọdun 2010, ṣalaye ilokulo ọmọ ati aibikita bi, ni o kere ju, “eyikeyi iṣe aipẹ tabi ikuna lati ṣe ni apakan ti obi tabi alabojuto eyiti o yọrisi iku, ipalara ti ara tabi ẹdun nla, ilokulo ibalopo tabi ilokulo (pẹlu ilokulo ibalopo bi a ti pinnu. labẹ apakan 111), tabi iṣe tabi ikuna lati ṣe eyiti o ṣafihan eewu ti o sunmọ ti ipalara nla” (42 U.S.C. 5101 akọsilẹ, § 3)",
            },
            {
                question: "Kini Awọn oriṣi pataki ti ilokulo ọmọde ati aibikita?",
                answer: "Laarin awọn iṣedede ti o kere ju ti Federal Child Abuse Prevention and Treatment Ofin(CAPTA) ṣeto, Ipinle kọọkan ni iduro fun ipese awọn asọye tirẹ ti ilokulo ọmọde ati aibikita.Ọpọlọpọ awọn ipinlẹ mọ awọn oriṣi pataki mẹrin ti ibajẹ: ilokulo ti ara, aibikita, ilokulo ibalopo, ati ilokulo ẹdun.",
            },

            {
                question: "kini ilokulo ti ara?",
                answer:
                    "Iwa-ibajẹ ti ara jẹ ipalara ti ara ti kii ṣe ijamba si ọmọde ti o ṣẹlẹ nipasẹ obi kan, olutọju, tabi eniyan miiran ti o ni ẹtọ fun ọmọde ati pe o le pẹlu punching, lilu, tapa, jijẹ, gbigbọn, jiju, lilu, gbigbọn, lilu (pẹlu ọwọ, ọpá, okun, tabi ohun miiran), sisun, tabi bibẹẹkọ nfa ipalara ti ara.2 Ibawi ti ara, gẹgẹbi lipa tabi fifẹ, ni a ko kà si ilokulo niwọn igba ti o jẹ oye ti ko si fa ipalara ti ara si ọmọ naa. Awọn ipalara lati ipalara ti ara. le wa lati awọn ọgbẹ kekere si awọn dida dida lile tabi iku",
            },
            {
                question: "Kini Aibikita?",
                answer:
                    "Aibikita ni ikuna ti obi tabi olutọju miiran lati pese fun awọn iwulo ipilẹ ọmọde. Aibikita ni gbogbogbo pẹlu awọn ẹka wọnyi: Ti ara (fun apẹẹrẹ, ikuna lati pese ounjẹ pataki tabi ibi aabo, aini abojuto ti o yẹ) Iṣoogun (fun apẹẹrẹ, ikuna lati pese iwosan to ṣe pataki tabi itọju ilera ọpọlọ, didaduro itọju itọkasi iṣoogun lati ọdọ awọn ọmọde ti o ni awọn ipo idẹruba) , ikuna lati pese itọju ọkan, gbigba ọmọ laaye lati lo oti tabi awọn oogun miiran) ",
            },
            {
                question: "Kini ilokulo ibalopo?",
                answer:
                    "Ibalopọ ibalopọ pẹlu awọn iṣẹ ti obi kan tabi awọn alabojuto miiran bii ifẹnukonu ọmọ inu ilohunsoke, wọ inu, ibalopọ, ifipabanilopo, sodomy, ifihan aiṣedeede, ati ilokulo nipasẹ panṣaga tabi iṣelọpọ awọn ohun elo onihoho. Ibalopo jẹ asọye nipasẹ CAPTA bi “iṣẹ , lílò, ìpadàbẹ̀wò, ìmúrasílẹ̀, ìmúnilọ́kànbalẹ̀, tàbí ìfipá mú ọmọdé kan láti kópa nínú, tàbí ṣèrànwọ́ fún ẹnikẹ́ni mìíràn láti kópa nínú, ìbálòpọ̀ ìbálòpọ̀ tàbí àfarawé irú ìwà bẹ́ẹ̀ fún ète ìfihàn ìran irú ìwà bẹ́ẹ̀; ifipabanilopo, ati ninu awọn ọran ti olutọju tabi awọn ibatan laarin idile, ifipabanilopo ti ofin, ifipabanilopo, panṣaga, tabi iru iwa ilokulo ti awọn ọmọde, tabi ibalopọ pẹlu awọn ọmọde”(42 U.S.C. § 5106g(a)(4))"
            },
            {
                question: "Kini ilokulo ẹdun?",
                answer:
                    "Ibanujẹ ẹdun (tabi ilokulo ọpọlọ) jẹ apẹrẹ ti ihuwasi ti o ṣe idiwọ idagbasoke ẹdun ọmọ tabi oye ti ara ẹni. Eyi le pẹlu ibawi igbagbogbo, awọn irokeke, tabi ijusile bakanna bi idaduro ifẹ, atilẹyin, tabi itọsọna. nigbagbogbo nira lati jẹrisi, ati, nitorinaa, awọn iṣẹ aabo ọmọde le ma ni anfani lati laja laisi ẹri ti ipalara tabi ipalara ọpọlọ si ọmọ naa"
            },
            {
                question: "Ọmọ eyikeyi le ṣe ipalara ni ọna kan tabi ekeji?",
                answer: "Bẹẹni. Ọmọde le ṣe ipalara ibalopọ, ti ara tabi ni ẹdun.",
            },
            {
                question: "Ọmọde le ni irọrun jẹ ilokulo nipasẹ ibatan tabi awọn ọmọ ẹbi",
                answer: "Bẹẹni",
            },
            {
                question: "Jije bi ọmọde le ni ipa lori iyi ara rẹ?",
                answer:
                    "BẸẸNI, Ọmọ ti o jẹ tabi ti a ti ni ipalara yoo ṣoro lati sọrọ ni gbangba.",
            },

            {
                question: "Ọmọ ti a ti ni ipalara yoo ni rilara ẹbi ati ailagbara?",
                answer: "BẸẸNI",
            },
            {
                question:
                    "Ọmọde le bẹru lati sọ fun ẹnikẹni nipa ilokulo naa paapaa ti oluṣebi naa jẹ obi, ibatan tabi ọrẹ ẹbi??",
                answer: "BẸẸNI",
            },
            {
                question: "Awọn idi ti ilokulo ọmọde ni awujọ?",
                answer:
                    "Aimọ, imura ti ko tọ, imọwe, osi, ikọsilẹ, iyapa awọn obi ati bẹbẹ lọ gbogbo wọn le fa eyikeyi iru iwa ibajẹ ọmọde",
            },
            {
                question: "Gbogbo awọn iwa ibaje si ọmọde le fa iku ọmọde?",
                answer: "BẸẸNI",
            },
            {
                question:
                    "Njẹ aini alaye, aimọkan ati imọwe le fa ibajẹ ọmọ bi?",
                answer: "BẸẸNI",
            },
            {
                question: "Kini o yẹ ki o ronu Ṣaaju ki o to fi ọmọ rẹ silẹ ni ile nikan?",
                answer:
                    "Nigbati o ba pinnu boya lati fi ọmọ silẹ ni ile nikan, iwọ yoo fẹ lati ṣe akiyesi ara ọmọ rẹ, ti opolo, idagbasoke, ati alafia ẹdun; ifẹ rẹ lati duro ni ile nikan; ati awọn ofin ati awọn ilana ni agbegbe rẹ nipa ọrọ yii.",
            },
            {
                question: "Kini lati ronu ṣaaju ki o to lọ kuro ni ile nikan",
                answer:
                    " Njẹ idile rẹ ni eto aabo fun awọn pajawiri Njẹ ọmọ rẹ le tẹle eto yii? Njẹ ọmọ rẹ mọ orukọ rẹ ni kikun, adirẹsi, ati nọmba foonu rẹ? Njẹ ọmọ rẹ mọ awọn orukọ kikun ati alaye olubasọrọ ti awọn agbalagba miiran ti o gbẹkẹle ati pe o mọ lati pe 112 tabi 199 ni ọran pajawiri",
            },
            {
                question: "Mimọ Awọn ami ti ilokulo ati aibikita ati Nigbawo lati jabo?",
                answer:
                    "O ṣe pataki lati ṣe akiyesi awọn ipo ti o ni ewu ti o ga julọ ati awọn ami ati awọn aami aiṣan ti aiṣedeede.Ti o ba fura pe ọmọ kan ti wa ni ipalara, iroyin awọn ifura rẹ le dabobo rẹ ati ki o ran ẹbi lọwọ lati gba iranlọwọ. Ẹnikẹni ti o ni ifiyesi le sọ awọn ifura ti ọmọde. ilokulo tabi aibikita. Ijabọ awọn ifiyesi rẹ kii ṣe ẹsun kan; dipo, o jẹ ibeere fun iwadii ati igbelewọn lati pinnu boya o nilo iranlọwọ https://www.childwelfare.gov/topics/systemwide/laws-policies/statutes/ manda/?hasBeenRedirected=1",
            },
            {
                question: " Ami ti Iwakulo Ti ara ",
                answer:
                    "Ọmọde ti o ṣe afihan awọn ami wọnyi le jẹ olufaragba ilokulo ti ara: Ni awọn ipalara ti ko ṣe alaye, gẹgẹbi awọn gbigbona, awọn buje, ọgbẹ, egungun fifọ, tabi awọn oju dudu, Ni awọn ọgbẹ rirẹ tabi awọn ami akiyesi miiran lẹhin isansa si ile - iwe, Dabi Ibẹru, aniyan, ibanujẹ, yọkuro, tabi ibinu tabi alabojuto agba miiran Lilo awọn ẹranko tabi awọn ohun ọsin ti ko ṣe alaye, gẹgẹbi awọn ọgbẹ, awọn egungun fifọ(awọn fifọ) tabi sisun, Awọn ipalara ti ko ni ibamu pẹlu agbara idagbasoke ọmọde, Awọn ipalara ti ko baramu alaye ti a fifun.",
            },
            {
                question: "Awọn ami ilokulo ibalopo ati awọn aami aisan",
                answer:
                    "Iwa ibalopọ ti ko yẹ pẹlu awọn ọmọde miiran, Ara tabi furo irora, ẹjẹ, tabi ipalara. Iwa ibalopọ tabi imọ ti ko yẹ fun ọjọ ori ọmọde Oyun tabi ikolu ti ibalopọ",
            },
            {
                question: "Awọn ami ilokulo ẹdun ati awọn aami aisan",
                answer:
                    "Ibanujẹ, Ipadanu igbẹkẹle ara ẹni tabi iyi ti ara ẹni, Idaduro tabi idagbasoke ẹdun ti ko yẹ, Yẹra fun awọn ipo kan, bii kiko lati lọ si ile - iwe tabi gigun ọkọ akero, Ti o han lati wa ifẹ ifẹ, Ipadanu awọn ọgbọn idagbasoke ti iṣaaju, A idinku ninu iṣẹ ile - iwe tabi isonu ti iwulo ni ile - iwe.",
            },
            {
                question: "Aibikita awọn ami ati awọn aami aisan",
                answer:
                    "Idagba ti ko dara, mimọ ti ara ẹni ti ko dara, gbigbe tabi jija ounjẹ, iwuwo pupọ pẹlu awọn ilolu iṣoogun ti a ko koju ni deede, Igbasilẹ ti ko dara ti wiwa ile - iwe, Aini akiyesi ti o yẹ fun iṣoogun, ehín tabi awọn iṣoro inu ọkan tabi aini itọju atẹle pataki ",
            },
        ]
    },
};

const i18n = createI18n({
    locale: "en",
    messages: messages,
});

export default i18n;