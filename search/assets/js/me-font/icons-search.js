import { library } from '@fortawesome/fontawesome-svg-core';

import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText,
} from '@fortawesome/vue-fontawesome';

import {
  faCcAmex,
  faCcDiscover,
  faCcJcb,
  faCcMastercard,
  faCcPaypal,
  faCcStripe,
  faCcVisa,
  faFacebookF,
  faTwitter,
  faYoutube,
  faStripe,
} from '@fortawesome/free-brands-svg-icons';

import {
  faBan as falBan,
  faTvRetro as falTvRetro,
  faArchive as falArchive,
  faAngleDown as falAngleDown,
  faBroadcastTower as falBroadcastTower,
  faCheckCircle as falCheckCircle,
  faChevronLeft as falChevronLeft,
  faChevronRight as falChevronRight,
  faCircleNotch as falCircleNotch,
  faClock as falClock,
  faCloudDownloadAlt as falCloudDownloadAlt,
  faCommentsAlt as falCommentsAlt,
  faDesktop as falDesktop,
  faDollarSign as falDollarSign,
  faDownload as falDownload,
  faEllipsisV as falEllipsisV,
  faExpandArrows as falExpandArrows,
  faEye as falEye,
  faFileAlt as falFileAlt,
  faFileCertificate as falFileCertificate,
  faFileInvoiceDollar as falFileInvoiceDollar,
  faFolder as falFolder,
  faFolderOpen as falFolderOpen,
  faFolders as falFolders,
  faGuitar as falGuitar,
  faHeart as falHeart,
  faInfoCircle as falInfoCircle,
  faLanguage as falLanguage,
  faMusic as falMusic,
  faPaintBrush as falPaintBrush,
  faPencil as falPencil,
  faPlug as falPlug,
  faPrint as falPrint,
  faHistory as falHistory,
  faShieldCheck as falShieldCheck,
  faShoppingCart as falShoppingCart,
  faTag as falTag,
  faTags as falTags,
  faTheaterMasks as falTheaterMasks,
  faThLarge as falThLarge,
  faThList as falThList,
  faTimes as falTimes,
  faTint as falTint,
  faTrashAlt as falTrashAlt,
  faUnlockAlt as falUnlockAlt,
} from '@fortawesome/pro-light-svg-icons';

import {
  faThumbsUp as farThumbsUp,
  faTvRetro as farTvRetro,
  faArchive as farArchive,
  faArrowLeft as farArrowLeft,
  faBan as farBan,
  faCartPlus as farCartPlus,
  faCashRegister as farCashRegister,
  faChevronLeft as farChevronLeft,
  faChevronDown as farChevronDown,
  faClipboard as farClipboard,
  faClock as farClock,
  faCode as farCode,
  faDollarSign as farDollarSign,
  faEllipsisV as farEllipsisV,
  faEye as farEye,
  faEyeSlash as farEyeSlash,
  faExclamationTriangle as farExclamationTriangle,
  faExternalLink as farExternalLink,
  faFile as farFile,
  faFileAlt as farFileAlt,
  faFileAudio as farFileAudio,
  faFileImage as farFileImage,
  faFileInvoice as farFileInvoice,
  faFilter as farFilter,
  faFilePdf as farFilePdf,
  faFileVideo as farFileVideo,
  faHeart as farHeart,
  faLink as farLink,
  faInfoCircle as farInfoCircle,
  faLanguage as farLanguage,
  faNewspaper as farNewspaper,
  faMinus as farMinus,
  faPencil as farPencil,
  faPlus as farPlus,
  faSearch as farSearch,
  faSeedling as farSeedling,
  faShare as farShare,
  faShoppingCart as farShoppingCart,
  faStar as farStar,
  faTimes as farTimes,
  faTools as farTools,
  faTrophy as farTrophy,
  faSnooze as farSnooze,
  faVrCardboard as farVrCardboard,
} from '@fortawesome/pro-regular-svg-icons';

import {
  faBan as fasBan,
  faArrowAltRight as fasArrowAltRight,
  faAngleDoubleUp as fasAngleDoubleUp,
  faBars as fasBars,
  faCamera as fasCamera,
  faCaretDown as fasCaretDown,
  faChevronCircleDown as fasChevronCircleDown,
  faChevronDown as fasChevronDown,
  faChevronLeft as fasChevronLeft,
  faChevronRight as fasChevronRight,
  faChevronUp as fasChevronUp,
  faCheck as fasCheck,
  faCheckCircle as fasCheckCircle,
  faCircle as fasCircle,
  faCircleNotch as fasCircleNotch,
  faCloud as fasCloud,
  faCog as fasCog,
  faCoins as fasCoins,
  faCommentCheck as fasCommentCheck,
  faDollarSign as fasDollarSign,
  faExclamationCircle as fasExclamationCircle,
  faExclamationTriangle as fasExclamationTriangle,
  faExternalLinkAlt as fasExternalLinkAlt,
  faFileAlt as fasFileAlt,
  faFileAudio as fasFileAudio,
  faFileImage as fasFileImage,
  faFileInvoice as fasFileInvoice,
  faFileUpload as fasFileUpload,
  faFilter as fasFilter,
  faFolder as fasFolder,
  faFolders as fasFolders,
  faFolderOpen as fasFolderOpen,
  faGem as fasGem,
  faHeart as fasHeart,
  faInbox as fasInbox,
  faInfo as fasInfo,
  faInfoCircle as fasInfoCircle,
  faMinus as fasMinus,
  faMinusCircle as fasMinusCircle,
  faMoon as fasMoon,
  faPause as fasPause,
  faPencil as fasPencil,
  faPlay as fasPlay,
  faPlug as fasPlug,
  faPlus as fasPlus,
  faPlusCircle as fasPlusCircle,
  faQuestion as fasQuestion,
  faQuestionCircle as fasQuestionCircle,
  faShare as fasShare,
  faSearch as fasSearch,
  faSignOutAlt as fasSignOutAlt,
  faSquare as fasSquare,
  faStar as fasStar,
  faStars as fasStars,
  faTachometerAlt as fasTachometerAlt,
  faTag as fasTag,
  faThumbsUp as fasThumbsUp,
  faTicketAlt as fasTicketAlt,
  faTimes as fasTimes,
  faTimesCircle as fasTimesCircle,
  faUndo as fasUndo,
  faUser as fasUser,
  faYenSign as fasYenSign,
} from '@fortawesome/pro-solid-svg-icons';

import {
  faCheckCircle as fadCheckCircle,
  faCreditCard as fadCreditCard,
  faExclamationCircle as fadExclamationCircle,
  faFolders as fadFolders,
  faPlug as fadPlug,
  faStore as fadStore,
  faUniversity as fadUniversity,
  faVrCardboard as fadVrCardboard,
} from '@fortawesome/pro-duotone-svg-icons';

import {
  faMeUnlimited as falMeUnlimited,
  faMeGlobeAsia as falMeGlobeAsia,
  faMeAspectRatio as falMeAspectRatio,
  faMeCreditsCircle as falMeCreditsCircle,
  faMeDownload as falMeDownload,
  faMeEasy as falMeEasy,
  faMeFileConvert as falMeFileConvert,
  faMeFiles as falMeFiles,
  faMeFolderMove as falMeFolderMove,
  faMeFormat as falMeFormat,
  faMeFrameRate as falMeFrameRate,
  faMeFraming as falMeFraming,
  faMeLightning as falMeLightning,
  faMeMetronome as falMeMetronome,
  faMePolygon as falMePolygon,
  faMeResolution as falMeResolution,
  faMeVrMono as falMeVrMono,
  faMeVrStereo as falMeVrStereo,
  faMeUserArtist as falMeUserArtist,
} from '@motionelements/assets/src/js/me-font/icons/me-font-icons-light.js';

import {
  faMeAnimated as farMeAnimated,
  faMeCc14 as farMeCc14,
  faMeCc15 as farMeCc15,
  faMeCc17 as farMeCc17,
  faMeCc18 as farMeCc18,
  faMeCc19 as farMeCc19,
  faMeCc20 as farMeCc20,
  faMeCreditsCircle as farMeCreditsCircle,
  faMeCs3 as farMeCs3,
  faMeCs4 as farMeCs4,
  faMeCs5 as farMeCs5,
  faMeCs55 as farMeCs55,
  faMeCs6 as farMeCs6,
  faMeDownload as farMeDownload,
  faMeEasy as farMeEasy,
  faMeFiles as farMeFiles,
  faMeFormat as farMeFormat,
  faMePolygon as farMePolygon,
  faMeRigged as farMeRigged,
  faMeSearch as farMeSearch,
  faMeMtn3 as farMeMtn3,
  faMeMtn4 as farMeMtn4,
  faMeMtn5 as farMeMtn5,
  faMeMtn6 as farMeMtn6,
  faMeNonProRectangle as farMeNonProRectangle,
  faMeProRectangle as farMeProRectangle,
  faMeSearchAi as farMeSearchAi,
  faMeTutorial as farMeTutorial,
  faMeVertices as farMeVertices,
  faMeVrMono as farMeVrMono,
  faMeVrPhoto as farMeVrPhoto,
  faMeVrStereo as farMeVrStereo,
  faMeVrVideo as farMeVrVideo,
} from '@motionelements/assets/src/js/me-font/icons/me-font-icons-regular.js';

import {
  faMe3DModel as fasMe3DModel,
  faMeAfterEffects as fasMeAfterEffects,
  faMeAfterEffectsSquare as fasMeAfterEffectsSquare,
  faMeAnimation as fasMeAnimation,
  faMeAppleMotion as fasMeAppleMotion,
  faMeCollection as fasMeCollection,
  faMeCreditsCircle as fasMeCreditsCircle,
  faMeDavinciResolve as fasMeDavinciResolve,
  faMeDiamond as fasMeDiamond,
  faMeDownload as fasMeDownload,
  faMeFcpEdit as fasMeFcpEdit,
  faMeImage as fasMeImage,
  faMeImages as fasMeImages,
  faMeLightning as fasMeLightning,
  faMeLottie as fasMeLottie,
  faMeMogrt as fasMeMogrt,
  faMeMotionelements as fasMeMotionelements,
  faMeMusic as fasMeMusic,
  faMePremierePro as fasMePremierePro,
  faMeSearchAi as fasMeSearchAi,
  faMeSearch as fasMeSearch,
  faMeSfx as fasMeSfx,
  faMeUserArtist as fasMeUserArtist,
  faMeUserBuyer as fasMeUserBuyer,
  faMeVideo as fasMeVideo,
  faMeFcp as fasMeFcp,
  faMeAdobePremierePro as fasMeAdobePremierePro,
  faMeAdobePremiereRush as fasMeAdobePremiereRush,
} from '@motionelements/assets/src/js/me-font/icons/me-font-icons-solid.js';

import {
  faMeCc14 as fadMeCc14,
  faMeCc15 as fadMeCc15,
  faMeCc17 as fadMeCc17,
  faMeCc18 as fadMeCc18,
  faMeCc19 as fadMeCc19,
  faMeCc20 as fadMeCc20,
  faMeCs3 as fadMeCs3,
  faMeCs4 as fadMeCs4,
  faMeCs5 as fadMeCs5,
  faMeCs55 as fadMeCs55,
  faMeCs6 as fadMeCs6,
  faMeDr15 as fadMeDr15,
  faMeDr16 as fadMeDr16,
  faMeDr17 as fadMeDr17,
  faMeDr18 as fadMeDr18,
  faMeMtn3 as fadMeMth3,
  faMeMtn4 as fadMeMth4,
  faMeMtn5 as fadMeMth5,
  faMeMtn6 as fadMeMth6,
} from '@motionelements/assets/src/js/me-font/icons/me-font-icons-duotone.js';

library.add(
  faCcAmex,
  faCcDiscover,
  faCcJcb,
  faCcMastercard,
  faCcPaypal,
  faCcStripe,
  faCcVisa,
  faFacebookF,
  faTwitter,
  faYoutube,
  faStripe,

  falBan,
  falTvRetro,
  falArchive,
  falAngleDown,
  falBroadcastTower,
  falCheckCircle,
  falChevronLeft,
  falChevronRight,
  falCircleNotch,
  falClock,
  falCloudDownloadAlt,
  falCommentsAlt,
  falDesktop,
  falDollarSign,
  falDownload,
  falEllipsisV,
  falExpandArrows,
  falEye,
  falFileAlt,
  falFileCertificate,
  falFileInvoiceDollar,
  falFolder,
  falFolderOpen,
  falFolders,
  falGuitar,
  falHeart,
  falHistory,
  falInfoCircle,
  falLanguage,
  falMusic,
  falPaintBrush,
  falPencil,
  falPlug,
  falPrint,
  falShieldCheck,
  falShoppingCart,
  falTag,
  falTags,
  falTheaterMasks,
  falThLarge,
  falThList,
  falTimes,
  falTrashAlt,
  falTint,
  falUnlockAlt,

  farThumbsUp,
  farTvRetro,
  farArchive,
  farArrowLeft,
  farBan,
  farCartPlus,
  farCashRegister,
  farChevronLeft,
  farChevronDown,
  farClipboard,
  farClock,
  farCode,
  farDollarSign,
  farEllipsisV,
  farEye,
  farEyeSlash,
  farExclamationTriangle,
  farExternalLink,
  farFile,
  farFileAlt,
  farFileAudio,
  farFileImage,
  farFileInvoice,
  farFilePdf,
  farFileVideo,
  farFilter,
  farHeart,
  farLink,
  farInfoCircle,
  farLanguage,
  farMinus,
  farNewspaper,
  farPencil,
  farPlus,
  farSearch,
  farSeedling,
  farShare,
  farShoppingCart,
  farSnooze,
  farStar,
  farTimes,
  farTools,
  farTrophy,
  farVrCardboard,

  fasArrowAltRight,
  fasAngleDoubleUp,
  fasBan,
  fasBars,
  fasCamera,
  fasCaretDown,
  fasCheck,
  fasCheckCircle,
  fasChevronCircleDown,
  fasChevronDown,
  fasChevronLeft,
  fasChevronRight,
  fasChevronUp,
  fasCircle,
  fasCircleNotch,
  fasCloud,
  fasCog,
  fasCoins,
  fasCommentCheck,
  fasDollarSign,
  fasExclamationCircle,
  fasExclamationTriangle,
  fasExternalLinkAlt,
  fasFileAlt,
  fasFileAudio,
  fasFileImage,
  fasFileInvoice,
  fasFileUpload,
  fasFilter,
  fasFolder,
  fasFolderOpen,
  fasFolders,
  fasGem,
  fasHeart,
  fasInbox,
  fasInfo,
  fasInfoCircle,
  fasMinus,
  fasMinusCircle,
  fasMoon,
  fasPause,
  fasPencil,
  fasPlay,
  fasPlug,
  fasPlus,
  fasPlusCircle,
  fasQuestion,
  fasQuestionCircle,
  fasShare,
  fasSearch,
  fasSignOutAlt,
  fasSquare,
  fasStar,
  fasStars,
  fasTachometerAlt,
  fasTag,
  fasThumbsUp,
  fasTicketAlt,
  fasTimes,
  fasTimesCircle,
  fasUndo,
  fasUser,
  fasYenSign,

  fadCheckCircle,
  fadCreditCard,
  fadExclamationCircle,
  fadFolders,
  fadPlug,
  fadStore,
  fadUniversity,
  fadVrCardboard,

  falMeUnlimited,
  falMeGlobeAsia,
  falMeFolderMove,
  falMeAspectRatio,
  falMeCreditsCircle,
  falMeDownload,
  falMeEasy,
  falMeFileConvert,
  falMeFiles,
  falMeFormat,
  falMeFrameRate,
  falMeFraming,
  falMeLightning,
  falMeMetronome,
  falMePolygon,
  falMeResolution,
  falMeVrMono,
  falMeVrStereo,
  falMeUserArtist,

  farMeAnimated,
  farMeCc14,
  farMeCc15,
  farMeCc17,
  farMeCc18,
  farMeCc19,
  farMeCc20,
  farMeCreditsCircle,
  farMeCs3,
  farMeCs4,
  farMeCs5,
  farMeCs55,
  farMeCs6,
  farMeDownload,
  farMeEasy,
  farMeFiles,
  farMeFormat,
  farMeRigged,
  farMeSearch,
  farMeMtn3,
  farMeMtn4,
  farMeMtn5,
  farMeMtn6,
  farMeNonProRectangle,
  farMePolygon,
  farMeProRectangle,
  farMeSearchAi,
  farMeTutorial,
  farMeVertices,
  farMeVrMono,
  farMeVrPhoto,
  farMeVrStereo,
  farMeVrVideo,

  fasMe3DModel,
  fasMeAfterEffects,
  fasMeAfterEffectsSquare,
  fasMeAnimation,
  fasMeAppleMotion,
  fasMeCollection,
  fasMeCreditsCircle,
  fasMeDavinciResolve,
  fasMeDiamond,
  fasMeDownload,
  fasMeFcpEdit,
  fasMeImage,
  fasMeImages,
  fasMeLightning,
  fasMeLottie,
  fasMeMogrt,
  fasMeMotionelements,
  fasMeMusic,
  fasMePremierePro,
  fasMeSearchAi,
  fasMeSearch,
  fasMeSfx,
  fasMeUserArtist,
  fasMeUserBuyer,
  fasMeVideo,
  fasMeFcp,
  fasMeAdobePremierePro,
  fasMeAdobePremiereRush,

  fadMeCc14,
  fadMeCc15,
  fadMeCc17,
  fadMeCc18,
  fadMeCc19,
  fadMeCc20,
  fadMeCs3,
  fadMeCs4,
  fadMeCs5,
  fadMeCs55,
  fadMeCs6,
  fadMeDr15,
  fadMeDr16,
  fadMeDr17,
  fadMeDr18,
  fadMeMth3,
  fadMeMth4,
  fadMeMth5,
  fadMeMth6,
);


export default function install(Vue) {
  Vue.component('font-awesome-icon', FontAwesomeIcon);
  Vue.component('font-awesome-layers', FontAwesomeLayers);
  Vue.component('font-awesome-layers-text', FontAwesomeLayersText);
}
