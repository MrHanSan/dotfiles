module.exports=function(C){var n,e="";return e+='<div class="top-bar flex align-middle align-justify">\n\t<div class="dropdown-pane flex vertical" id="header-dropdown" data-dropdown data-close-on-click="true">\n\t\t<div class="menu-option menu-settings flex align-middle">\n\t\t\t<svg width="18px" height="18px" viewBox="0 0 18 18">\n\t\t\t\t<g>\n\t\t\t\t\t<path class="menu-icon" d="M17.9063611,7.4473434 C17.8436479,7.36521204 17.7618042,7.31630721 17.6602547,7.30077273 L15.5157778,6.97267882 C15.39855,6.5976938 15.2383148,6.21494155 15.0352159,5.82427821 C15.1757453,5.62894655 15.3866115,5.35364109 15.6678143,4.99807417 C15.9490171,4.64250725 16.1482323,4.38288011 16.2654601,4.21876124 C16.3280295,4.13274626 16.3590985,4.04299151 16.3590985,3.94920929 C16.3590985,3.8398926 16.3319132,3.75402146 16.277111,3.69145204 C15.9959082,3.29287763 15.3513712,2.62892258 14.3435001,1.69915535 C14.2500056,1.62105145 14.1521959,1.58207142 14.0507903,1.58207142 C13.9335626,1.58207142 13.8397803,1.61716783 13.7694437,1.68736066 L12.1055286,2.94133817 C11.7850581,2.7772193 11.4335187,2.63266236 11.0507664,2.50766735 L10.7226725,0.351539463 C10.7149053,0.249990011 10.6698841,0.165988765 10.5878966,0.0995357237 C10.5057652,0.0330826827 10.4102569,-1.77635684e-15 10.3006526,-1.77635684e-15 L7.69920309,-1.77635684e-15 C7.47265863,-1.77635684e-15 7.33198532,0.109316691 7.27732697,0.32809391 C7.17577752,0.718613404 7.06243338,1.44513788 6.93743838,2.50766735 C6.57022061,2.62503896 6.21479754,2.77347952 5.87102532,2.95313287 L4.25385753,1.69915535 C4.15230808,1.62105145 4.05075863,1.58207142 3.94920918,1.58207142 C3.77732308,1.58207142 3.40823542,1.8612605 2.84180237,2.41992632 C2.27536932,2.97859215 1.89074718,3.39845454 1.68750445,3.67965735 C1.61716779,3.7812068 1.58207138,3.87110539 1.58207138,3.94920929 C1.58207138,4.04299151 1.62105141,4.13677372 1.69915531,4.2304121 C2.22258087,4.8632982 2.64057336,5.40225825 2.95313278,5.84772377 C2.75780112,6.20703047 2.60547695,6.56648101 2.49616026,6.92578771 L0.316443043,7.25388162 C0.230571909,7.26955994 0.156351631,7.32033466 0.0937822111,7.40634964 C0.0312127911,7.49222077 1.77635684e-15,7.58211937 1.77635684e-15,7.67575775 L1.77635684e-15,10.2773511 C1.77635684e-15,10.3790444 0.0312127911,10.4706691 0.0937822111,10.5526566 C0.156351631,10.634788 0.238339147,10.6838366 0.339888596,10.6993711 L2.4845094,11.0158142 C2.59382609,11.3985664 2.7539175,11.7852023 2.96492748,12.1757218 C2.824398,12.3710535 2.61338803,12.6463589 2.33218523,13.0019258 C2.05098244,13.3574927 1.85162332,13.6171199 1.73453939,13.7812388 C1.67196997,13.8673976 1.64075718,13.9570085 1.64075718,14.0507907 C1.64075718,14.1523402 1.66808635,14.2420949 1.7227447,14.3201988 C2.02739304,14.7422188 2.67192999,15.3985504 3.65635553,16.28905 C3.7423705,16.3750649 3.84003633,16.4179286 3.94935302,16.4179286 C4.06658078,16.4179286 4.16424661,16.3828322 4.24235051,16.3126393 L5.89475855,15.058518 C6.21522905,15.2226369 6.5667685,15.3671938 6.94952075,15.4923326 L7.27761465,17.6484605 C7.28552573,17.75001 7.3304031,17.8340112 7.41239062,17.9004643 C7.49437813,17.9670612 7.59017407,18 7.69949076,18 L10.3010841,18 C10.5279162,18 10.6684457,17.8906833 10.7232479,17.6719061 C10.8246535,17.2812428 10.9378538,16.5548621 11.0628488,15.4923326 C11.4300666,15.3751049 11.7856335,15.2265205 12.1292619,15.0468671 L13.7465735,16.3126393 C13.8558902,16.3828322 13.9575835,16.4179286 14.0512218,16.4179286 C14.2229641,16.4179286 14.5901819,16.1407532 15.1525875,15.585971 C15.7152807,15.0313327 16.1019166,14.6093127 16.3126389,14.3201988 C16.3829756,14.2420949 16.4182158,14.1523402 16.4182158,14.0507907 C16.4182158,13.9492413 16.3792358,13.8512877 16.300988,13.7577932 C15.7385824,13.0702488 15.32059,12.5312887 15.0470106,12.1406254 C15.2032183,11.8515115 15.3556864,11.4960884 15.5041269,11.0742123 L17.6720494,10.7462622 C17.7656878,10.7305839 17.8440794,10.6796653 17.906505,10.5936504 C17.9689305,10.5076354 17.9999995,10.4177368 17.9999995,10.3240984 L17.9999995,7.72264885 C18.0001433,7.6210994 17.9690744,7.52947475 17.9063611,7.4473434 L17.9063611,7.4473434 Z M11.1213908,11.1211034 C10.5355396,11.7070984 9.82843326,12.0000959 9.00021551,12.0000959 C8.17199776,12.0000959 7.46503523,11.7070984 6.87904025,11.1211034 C6.29318911,10.5352522 6.00019162,9.82828969 6.00019162,9.00007192 C6.00019162,8.17185415 6.29304527,7.4648916 6.87904025,6.8788966 C7.46503523,6.29304544 8.1721416,6.00004795 9.00021551,6.00004795 C9.82843326,6.00004795 10.5355396,6.29304544 11.1213908,6.8788966 C11.7072419,7.4648916 12.0002394,8.17185415 12.0002394,9.00007192 C12.0002394,9.82828969 11.7072419,10.5352522 11.1213908,11.1211034 L11.1213908,11.1211034 Z"></path>\n\t\t\t\t</g>\n\t\t\t</svg>\n\t\t\t<span>'+(null==(n=t("panel_menu_settings"))?"":n)+'</span>\n\t\t</div>\n\t\t<div class="menu-option menu-advanced-settings flex align-middle">\n\t\t\t<svg width="20px" height="18px" viewBox="0 0 20 18">\n\t\t\t\t<g>\n\t\t\t\t\t<path class="menu-icon" d="M12.1348101,12.650875 C12.1348101,12.583 12.1107595,12.515125 12.0626582,12.44725 C11.6775949,11.992125 11.3682278,11.60175 11.1344304,11.276 C11.2787342,10.99775 11.3887342,10.73975 11.4643038,10.50225 L13.0629114,10.257875 C13.1249367,10.251 13.1798734,10.215375 13.2279747,10.151 C13.2760759,10.08625 13.3,10.02025 13.3,9.952375 L13.3,8.068125 C13.3,7.9935 13.2760759,7.92725 13.2279747,7.869625 C13.1798734,7.812 13.1213924,7.77625 13.0526582,7.762875 L11.4850633,7.528625 C11.4092405,7.29775 11.2924051,7.01925 11.1343038,6.6935 C11.2373418,6.544 11.3921519,6.34025 11.598481,6.082375 C11.8046835,5.824375 11.9492405,5.641125 12.0316456,5.5325 C12.0797468,5.464625 12.1037975,5.4 12.1037975,5.339 C12.1037975,5.155625 11.6087342,4.6125 10.6188608,3.7095 C10.5501266,3.65525 10.4779747,3.628125 10.4021519,3.628125 C10.3197468,3.628125 10.2510127,3.651625 10.1958228,3.699375 L8.97886076,4.60575 C8.69708861,4.46325 8.43924051,4.358 8.20544304,4.29 L7.96822785,2.731875 C7.96151899,2.664 7.92708861,2.6045 7.86518987,2.553625 C7.80329114,2.50275 7.73455696,2.47725 7.65886076,2.47725 L5.74075949,2.47725 C5.58265823,2.47725 5.47949367,2.55875 5.43139241,2.721625 C5.34886076,3.034 5.26987342,3.556875 5.19417722,4.29 C4.89860759,4.385 4.63392405,4.493625 4.40012658,4.615875 L3.21417722,3.699375 C3.14544304,3.65175 3.07329114,3.628125 2.99759494,3.628125 C2.86683544,3.628125 2.59531646,3.828375 2.18278481,4.229 C1.77025316,4.6295 1.48822785,4.931625 1.33708861,5.135375 C1.28886076,5.18975 1.26493671,5.257625 1.26493671,5.339125 C1.26493671,5.400125 1.28886076,5.468 1.33708861,5.54275 C1.72202532,5.99775 2.03139241,6.388125 2.26518987,6.713875 C2.12088608,6.992375 2.01088608,7.25025 1.93531646,7.487875 L0.336708861,7.732125 C0.274810127,7.738875 0.219873418,7.7745 0.17164557,7.838875 C0.123544304,7.9035 0.0994936709,7.969625 0.0994936709,8.0375 L0.0994936709,9.9215 C0.0994936709,9.99625 0.123544304,10.0625 0.17164557,10.120125 C0.219873418,10.177875 0.278227848,10.210125 0.347088608,10.216875 L1.91468354,10.46125 C1.99721519,10.71925 2.11759494,10.997625 2.2756962,11.296375 C2.1656962,11.445875 2.00417722,11.653 1.79101266,11.917625 C1.57772152,12.1825 1.43683544,12.3625 1.36810127,12.457375 C1.32,12.52525 1.29594937,12.59 1.29594937,12.650875 C1.29594937,12.834375 1.79101266,13.377375 2.78101266,14.280375 C2.84974684,14.334625 2.92189873,14.361625 2.99759494,14.361625 C3.08696203,14.361625 3.1556962,14.338125 3.20379747,14.2905 L4.42075949,13.384125 C4.70253165,13.52675 4.96037975,13.631875 5.19417722,13.69975 L5.43139241,15.258 C5.43822785,15.325875 5.47265823,15.385375 5.53443038,15.43625 C5.59632911,15.487125 5.66506329,15.5125 5.74075949,15.5125 L7.65886076,15.5125 C7.81708861,15.5125 7.92012658,15.431125 7.96822785,15.268125 C8.05075949,14.948875 8.12974684,14.42275 8.20544304,13.6895 C8.48037975,13.60825 8.74506329,13.50275 8.99949367,13.374 L10.1855696,14.2905 C10.2543038,14.338125 10.3264557,14.361625 10.4021519,14.361625 C10.5327848,14.361625 10.8027848,14.15975 11.2117722,13.755625 C11.6207595,13.351875 11.9044304,13.047875 12.0626582,12.844125 C12.1107595,12.796875 12.1348101,12.732375 12.1348101,12.650875 L12.1348101,12.650875 Z M8.5664557,10.83825 C8.05088608,11.347375 7.42860759,11.602 6.69987342,11.602 C5.97101266,11.602 5.34873418,11.347375 4.83316456,10.83825 C4.31759494,10.329125 4.05974684,9.714625 4.05974684,8.994875 C4.05974684,8.27525 4.31759494,7.66075 4.83316456,7.151625 C5.34873418,6.642375 5.97101266,6.387875 6.69987342,6.387875 C7.42860759,6.387875 8.05088608,6.642375 8.5664557,7.151625 C9.0821519,7.66075 9.33987342,8.27525 9.33987342,8.994875 C9.33987342,9.714625 9.0821519,10.329125 8.5664557,10.83825 L8.5664557,10.83825 Z"></path>\n\t\t\t\t\t<path class="menu-icon" d="M18.3637975,13.180625 C18.274557,12.98375 18.1713924,12.80725 18.054557,12.651 C18.4051899,11.88375 18.5803797,11.41525 18.5803797,11.245625 C18.5803797,11.218625 18.5668354,11.19475 18.5392405,11.174375 C17.7140506,10.699125 17.2878481,10.4615 17.2603797,10.4615 L17.198481,10.482 C16.9167089,10.760375 16.6002532,11.140625 16.2497468,11.622625 C16.1122785,11.609125 16.0092405,11.602125 15.9405063,11.602125 C15.871519,11.602125 15.7686076,11.609125 15.6310127,11.622625 C15.5350633,11.479875 15.3560759,11.25075 15.0949367,10.935125 C14.8337975,10.6195 14.6755696,10.4615 14.6205063,10.4615 C14.6068354,10.4615 14.5036709,10.515875 14.3111392,10.624625 C14.1186076,10.73325 13.9158228,10.848625 13.7026582,10.971 C13.4892405,11.093375 13.3692405,11.161125 13.3416456,11.17475 C13.3139241,11.195 13.3003797,11.218875 13.3003797,11.245875 C13.3003797,11.415625 13.4756962,11.883875 13.8262025,12.65125 C13.7094937,12.8075 13.6063291,12.984 13.516962,13.18075 C12.4924051,13.2825 11.9801266,13.38775 11.9801266,13.496375 L11.9801266,14.922125 C11.9801266,15.03075 12.4924051,15.136 13.516962,15.23775 C13.5992405,15.421 13.7025316,15.597625 13.8262025,15.767125 C13.4756962,16.534375 13.3003797,17.002875 13.3003797,17.172625 C13.3003797,17.199625 13.3139241,17.2235 13.3416456,17.243875 C14.1802532,17.725875 14.6067089,17.966875 14.6205063,17.966875 C14.6755696,17.966875 14.8337975,17.807375 15.0949367,17.48825 C15.3560759,17.169 15.5349367,16.938375 15.6310127,16.79575 C15.768481,16.809125 15.871519,16.816 15.9405063,16.816 C16.0092405,16.816 16.1122785,16.809125 16.2497468,16.79575 C16.3458228,16.938375 16.5246835,17.169 16.7859494,17.48825 C17.0470886,17.807375 17.2051899,17.966875 17.2603797,17.966875 C17.2740506,17.966875 17.7005063,17.72575 18.5392405,17.243875 C18.5668354,17.2235 18.5803797,17.19975 18.5803797,17.172625 C18.5803797,17.002875 18.4050633,16.534375 18.054557,15.767125 C18.1782278,15.597625 18.2813924,15.421 18.3637975,15.23775 C19.3883544,15.136 19.9006329,15.03075 19.9006329,14.922125 L19.9006329,13.496375 C19.9006329,13.38775 19.3883544,13.2825 18.3637975,13.180625 L18.3637975,13.180625 Z M16.8735443,15.130875 C16.6159494,15.3855 16.3046835,15.513 15.9402532,15.513 C15.5758228,15.513 15.2646835,15.3855 15.006962,15.130875 C14.7491139,14.87625 14.6201266,14.569125 14.6201266,14.20925 C14.6201266,13.85625 14.7508861,13.5505 15.0121519,13.292625 C15.2734177,13.03475 15.5827848,12.905625 15.9402532,12.905625 C16.2977215,12.905625 16.6073418,13.034625 16.8686076,13.292625 C17.1297468,13.5505 17.2605063,13.85625 17.2605063,14.20925 C17.2603797,14.569125 17.131519,14.87625 16.8735443,15.130875 L16.8735443,15.130875 Z"></path>\n\t\t\t\t\t<path class="menu-icon" d="M18.3637975,2.752 C18.274557,2.555125 18.1713924,2.378625 18.054557,2.222375 C18.4051899,1.45525 18.5803797,0.98675 18.5803797,0.817 C18.5803797,0.79 18.5668354,0.766125 18.5392405,0.74575 C17.7140506,0.2705 17.2878481,0.032875 17.2603797,0.032875 L17.198481,0.05325 C16.9167089,0.33175 16.6002532,0.711875 16.2497468,1.193875 C16.1122785,1.180375 16.0092405,1.1735 15.9405063,1.1735 C15.871519,1.1735 15.7686076,1.180375 15.6310127,1.193875 C15.5350633,1.05125 15.3560759,0.822125 15.0949367,0.5065 C14.8337975,0.19075 14.6755696,0.032875 14.6205063,0.032875 C14.6068354,0.032875 14.5036709,0.087125 14.3111392,0.195875 C14.1186076,0.304625 13.9158228,0.42 13.7026582,0.54225 C13.4892405,0.6645 13.3692405,0.732375 13.3416456,0.745875 C13.3139241,0.76625 13.3003797,0.79 13.3003797,0.817125 C13.3003797,0.986875 13.4756962,1.455375 13.8262025,2.2225 C13.7094937,2.37875 13.6063291,2.55525 13.516962,2.752125 C12.4924051,2.853875 11.9801266,2.959125 11.9801266,3.06775 L11.9801266,4.4935 C11.9801266,4.602125 12.4924051,4.707375 13.516962,4.809125 C13.5992405,4.992375 13.7025316,5.169 13.8262025,5.33875 C13.4756962,6.106 13.3003797,6.574375 13.3003797,6.744125 C13.3003797,6.771125 13.3139241,6.795 13.3416456,6.815375 C14.1802532,7.297375 14.6067089,7.538375 14.6205063,7.538375 C14.6755696,7.538375 14.8337975,7.378875 15.0949367,7.05975 C15.3560759,6.740625 15.5349367,6.509875 15.6310127,6.36725 C15.768481,6.38075 15.871519,6.387625 15.9405063,6.387625 C16.0092405,6.387625 16.1122785,6.38075 16.2497468,6.36725 C16.3458228,6.509875 16.5246835,6.740625 16.7859494,7.05975 C17.0470886,7.378875 17.2051899,7.538375 17.2603797,7.538375 C17.2740506,7.538375 17.7005063,7.297375 18.5392405,6.815375 C18.5668354,6.795 18.5803797,6.77125 18.5803797,6.744125 C18.5803797,6.574375 18.4050633,6.106 18.054557,5.33875 C18.1782278,5.169 18.2813924,4.9925 18.3637975,4.809125 C19.3883544,4.707375 19.9006329,4.602125 19.9006329,4.4935 L19.9006329,3.06775 C19.9006329,2.959125 19.3883544,2.853875 18.3637975,2.752 L18.3637975,2.752 Z M16.8735443,4.70225 C16.6159494,4.956875 16.3046835,5.08425 15.9402532,5.08425 C15.5758228,5.08425 15.2646835,4.956875 15.006962,4.70225 C14.7491139,4.44775 14.6201266,4.1405 14.6201266,3.780625 C14.6201266,3.427625 14.7508861,3.122 15.0121519,2.864 C15.2734177,2.606 15.5827848,2.477 15.9402532,2.477 C16.2977215,2.477 16.6073418,2.606125 16.8686076,2.864 C17.1297468,3.122 17.2605063,3.427625 17.2605063,3.780625 C17.2603797,4.1405 17.131519,4.44775 16.8735443,4.70225 L16.8735443,4.70225 Z"></path>\n\t\t\t\t</g>\n\t\t\t</svg>\n\t\t\t<span>'+(null==(n=t("panel_menu_advanced_settings"))?"":n)+'</span>\n\t\t</div>\n\t\t<div class="menu-option menu-broken-page flex align-middle">\n\t\t\t<svg width="19px" height="18px" viewBox="0 0 19 18">\n\t\t\t\t<g>\n\t\t\t\t\t<path class="menu-icon" d="M17.6593575,9.31215301 C18.9509219,8.56554918 19.3820842,6.92109579 18.6312577,5.63083237 L16.138206,1.34260393 C15.3882033,0.0526155015 13.7448434,-0.382422166 12.455476,0.366381607 L8.42616837,2.71014017 L7.90163337,3.89178167 L9.636169,4.80255585 L13.8994577,2.30947652 L16.6594455,7.08224123 L12.7515224,9.37017637 C12.7515224,9.37017637 11.7560044,9.87286212 11.3761971,10.2347519 C10.9963899,10.5969166 10.4729534,11.5398649 10.4729534,11.5398649 L8.113919,15.6820724 L3.34119975,12.9310504 L5.98886568,8.26058282 L4.08790691,8.34748036 L3.92065988,7.03686751 L1.36087416,11.5024659 C0.615265506,12.7957543 1.0626307,14.4349828 2.35639215,15.1760868 L6.6581284,17.6413919 C7.95188986,18.3835959 9.5922289,17.9367335 10.334542,16.6423452 L12.5433562,12.7850296 C12.5433562,12.7850296 12.8704353,12.2177206 13.1129298,11.993327 C13.3543257,11.7686584 13.9390038,11.4744167 13.9390038,11.4744167 L17.6593575,9.31215301 Z"></path>\n\t\t\t\t\t<polygon class="menu-icon" points="4.80242321 2 4 2.28676089 5.13611903 4.2454109 4.80242321 2.00100883"></polygon>\n\t\t\t\t\t<polygon class="menu-icon" points="0.729020149 2 0 3.64717271 3.61403597 4.34957295 0.729020149 2.00100883"></polygon>\n\t\t\t\t</g>\n\t\t\t</svg>\n\t\t\t<span>'+(null==(n=t("panel_menu_report_broken_site"))?"":n)+'</span>\n\t\t</div>\n\t\t<div class="menu-option menu-submit-tracker flex align-middle">\n\t\t\t<svg width="16px" height="16px" viewBox="0 0 16 16">\n\t\t\t\t<g>\n\t\t\t\t\t<path class="menu-icon" d="M15.6817156,6.13639018 C15.4695724,5.92424705 15.2119601,5.81824522 14.9088785,5.81824522 L10.1816153,5.81824522 L10.1816153,1.09084252 C10.1816153,0.787900449 10.075474,0.530288105 9.86347034,0.318144968 C9.6513272,0.106141307 9.39385433,0 9.09063331,0 L6.90894826,0 C6.60600619,0 6.34839385,0.106001831 6.13625071,0.318144968 C5.92410757,0.530288105 5.81810574,0.787900449 5.81810574,1.09084252 L5.81810574,5.81824522 L1.09084252,5.81824522 C0.787900449,5.81824522 0.530288105,5.92424705 0.318144968,6.13639018 C0.106001831,6.34853332 0,6.60600619 0,6.90908774 L0,9.09105174 C0,9.39413329 0.106001831,9.65160615 0.318144968,9.86360982 C0.530288105,10.075753 0.787900449,10.1817548 1.09084252,10.1817548 L5.81810574,10.1817548 L5.81810574,14.909297 C5.81810574,15.212239 5.92410757,15.4699908 6.13625071,15.6819945 C6.34839385,15.8939982 6.60600619,16 6.90894826,16 L9.09077278,16 C9.39399381,16 9.65146668,15.8939982 9.86360982,15.6819945 C10.075753,15.4698514 10.1817548,15.212239 10.1817548,14.909297 L10.1817548,10.1817548 L14.909018,10.1817548 C15.2120996,10.1817548 15.4697119,10.075753 15.681855,9.86360982 C15.8938587,9.65160615 16,9.39413329 16,9.09105174 L16,6.90908774 C15.9998605,6.60600619 15.8939982,6.34839385 15.6817156,6.13639018 L15.6817156,6.13639018 Z"></path>\n\t\t\t\t</g>\n\t\t\t</svg>\n\t\t\t<span>'+(null==(n=t("panel_menu_submit_tracker"))?"":n)+'</span>\n\t\t</div>\n\t\t<div class="menu-option menu-help flex align-middle">\n\t\t\t<svg width="18px" height="18px" viewBox="0 0 18 18">\n\t\t\t\t<g>\n\t\t\t\t\t<path class="menu-icon" d="M16.7932109,4.48238002 C15.9884451,3.10356235 14.8967253,2.01184255 13.5179077,1.20707676 C12.1388023,0.402310975 10.6332646,0 9.00028767,0 C7.36745457,0 5.86148535,0.402310975 4.48266769,1.20707676 C3.10370619,2.01169871 2.01198638,3.10341852 1.2072206,4.48238002 C0.402310975,5.86134152 0,7.36731074 0,9 C0,10.6328331 0.402454811,12.1385146 1.20707676,13.51762 C2.01184255,14.8962938 3.10356235,15.9881575 4.48252385,16.7929232 C5.86148535,17.597689 7.36731074,18 9.00014384,18 C10.6329769,18 12.1389462,17.597689 13.5177638,16.7929232 C14.8965815,15.9883013 15.9883013,14.8964376 16.7930671,13.51762 C17.597689,12.1386585 18,10.6326893 18,9 C18,7.3671669 17.597689,5.86119768 16.7932109,4.48238002 L16.7932109,4.48238002 Z M10.5003596,14.625018 C10.5003596,14.7343338 10.4649758,14.8242317 10.3947835,14.8944239 C10.3247351,14.9646162 10.2348372,14.9997123 10.1255214,14.9997123 L7.87534161,14.9997123 C7.76602579,14.9997123 7.67612792,14.9646162 7.60579182,14.8944239 C7.53545572,14.8242317 7.50035959,14.7343338 7.50035959,14.625018 L7.50035959,12.3748382 C7.50035959,12.2655224 7.53545572,12.1756245 7.60579182,12.1052884 C7.67612792,12.03524 7.76602579,12.0001438 7.87534161,12.0001438 L10.1255214,12.0001438 C10.2348372,12.0001438 10.3247351,12.03524 10.3947835,12.1052884 C10.4649758,12.1756245 10.5003596,12.2655224 10.5003596,12.3748382 L10.5003596,14.625018 L10.5003596,14.625018 Z M13.3537901,7.69914177 C13.256125,7.98825334 13.1468092,8.22472072 13.0256988,8.40825622 C12.9045884,8.59179172 12.7306899,8.77935465 12.5040035,8.97065733 C12.2777485,9.16210385 12.0979527,9.29889246 11.9649039,9.38102316 C11.8322865,9.46286618 11.6406962,9.57433955 11.390852,9.71486791 C11.1330968,9.86330728 10.9203625,10.0566237 10.7525052,10.2949609 C10.584504,10.5331543 10.5005034,10.7266146 10.5005034,10.8749101 C10.5005034,10.9843698 10.4651196,11.0742676 10.3949274,11.1444599 C10.3248789,11.214796 10.2349811,11.2498921 10.1256652,11.2498921 L7.87548545,11.2498921 C7.76616963,11.2498921 7.67627176,11.214796 7.60593566,11.1444599 C7.53559956,11.0742676 7.50050343,10.9843698 7.50050343,10.8749101 L7.50050343,10.4528935 C7.50050343,9.92947212 7.70547059,9.43913314 8.11569257,8.98216426 C8.52591456,8.52505154 8.97712998,8.18717936 9.46933883,7.96840389 C9.84417701,7.79666299 10.1098432,7.62075083 10.2660498,7.44109891 C10.422544,7.261447 10.5006473,7.02296591 10.5006473,6.726231 C10.5006473,6.46833197 10.3539339,6.23790574 10.0609388,6.03466462 C9.76794362,5.83156734 9.4342427,5.7300187 9.05911684,5.7300187 C8.65277844,5.7300187 8.31691998,5.82380016 8.05125378,6.01136309 C7.79335475,6.19878218 7.45749628,6.55822985 7.04339071,7.08941842 C6.97305461,7.18319988 6.87538956,7.23023445 6.75039555,7.23023445 C6.65661409,7.23023445 6.5823944,7.20678909 6.52773649,7.16004219 L4.98091768,5.9882054 C4.80126576,5.8475332 4.77005322,5.68355948 4.88713621,5.49599655 C5.8872321,3.8319509 7.33638587,2.99985616 9.23474133,2.99985616 C9.91465695,2.99985616 10.5787505,3.16009014 11.2271659,3.48041425 C11.8755813,3.80059452 12.4165508,4.25382366 12.850362,4.83981397 C13.2835978,5.42566045 13.5006473,6.06242509 13.5006473,6.74996404 C13.5002158,7.09373352 13.4511675,7.41003021 13.3537901,7.69914177 L13.3537901,7.69914177 Z"></path>\n\t\t\t\t</g>\n\t\t\t</svg>\n\t\t\t<span>'+(null==(n=t("panel_menu_help"))?"":n)+'</span>\n\t\t</div>\n\t\t<div class="flex-fill"></div>\n\t\t<div class="menu-option signed-in-as flex align-middle">\n\t\t\t<svg width="17px" height="18px" viewBox="0 0 17 18">\n\t\t\t\t<g>\n\t\t\t\t\t<path class="menu-icon" d="M11.7415776,7.69057143 C12.6371552,6.81771429 13.0848707,5.76442857 13.0848707,4.53057143 C13.0848707,3.29685714 12.6371552,2.24357143 11.7415776,1.37057143 C10.8461466,0.497714286 9.76547414,0.0612857143 8.49985345,0.0612857143 C7.23423276,0.0612857143 6.15356034,0.497714286 5.25812931,1.37057143 C4.36255172,2.24357143 3.91483621,3.29685714 3.91483621,4.53057143 C3.91483621,5.76442857 4.36255172,6.81771429 5.25812931,7.69057143 C6.1537069,8.56342857 7.23423276,9 8.49985345,9 C9.76576724,9 10.8462931,8.56342857 11.7415776,7.69057143 Z"></path>\n\t\t\t\t\t<path class="menu-icon" d="M16.8637069,13.7195714 C16.8357155,13.3277143 16.7800259,12.9048571 16.6964914,12.4508571 C16.6129569,11.9968571 16.5072931,11.576 16.3799397,11.188 C16.2525862,10.8001429 16.0814138,10.4218571 15.8664224,10.0532857 C15.6515776,9.68471429 15.4047845,9.37042857 15.1260431,9.11042857 C14.8473017,8.85042857 14.5071552,8.643 14.1053103,8.48785714 C13.7031724,8.33271429 13.2594138,8.255 12.7738879,8.255 C12.7022241,8.255 12.5350086,8.33842857 12.2723879,8.50528571 C12.0097672,8.67214286 11.7132931,8.85842857 11.3829655,9.064 C11.0526379,9.26942857 10.6226552,9.45585714 10.0934569,9.62242857 C9.56411207,9.78928571 9.03286207,9.87271429 8.49941379,9.87271429 C7.96611207,9.87271429 7.43486207,9.78928571 6.90551724,9.62242857 C6.37631897,9.45585714 5.94633621,9.26942857 5.61600862,9.064 C5.28568103,8.85842857 4.9892069,8.67214286 4.72658621,8.50528571 C4.46381897,8.33842857 4.29675,8.255 4.22508621,8.255 C3.73956034,8.255 3.29580172,8.33271429 2.89381034,8.48785714 C2.49181897,8.643 2.15152586,8.85057143 1.87293103,9.11042857 C1.59433621,9.37042857 1.3475431,9.68471429 1.13269828,10.0532857 C0.917853448,10.4218571 0.746681034,10.8002857 0.619327586,11.188 C0.491974138,11.576 0.386456897,11.9968571 0.302922414,12.4508571 C0.219241379,12.9048571 0.163551724,13.3275714 0.135706897,13.7195714 C0.107862069,14.1115714 0.0939396552,14.513 0.0939396552,14.9242857 C0.0939396552,15.8552857 0.384551724,16.5905714 0.96562931,17.1298571 C1.5467069,17.669 2.31888793,17.9385714 3.28202586,17.9385714 L13.717681,17.9385714 C14.680819,17.9385714 15.4528534,17.669 16.0340776,17.1298571 C16.6153017,16.5905714 16.9057672,15.8554286 16.9057672,14.9242857 C16.9057672,14.513 16.8918448,14.1114286 16.8637069,13.7195714 L16.8637069,13.7195714 Z"></path>\n\t\t\t\t</g>\n\t\t\t</svg>\n\t\t\t<span></span>\n\t\t</div>\n\t\t<div class="menu-signin">\n\t\t\t'+(null==(n=t("panel_menu_signin"))?"":n)+'\n\t\t</div>\n\t\t<div class="menu-signout" style="display: none;">\n\t\t\t'+(null==(n=t("panel_menu_signout"))?"":n)+"\n\t\t</div>\n\t</div>\n</div>\n"};