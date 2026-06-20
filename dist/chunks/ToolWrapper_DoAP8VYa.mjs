import { c as createComponent, b as addAttribute, r as renderComponent, F as Fragment$1, a as renderTemplate, d as createAstro, e as renderSlot, f as renderHead } from './astro/server_Bokrf6dK.mjs';
import 'piccolore';
/* empty css                                */
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import React, { useState, useEffect, useCallback, useRef, useMemo, useReducer, forwardRef, useImperativeHandle, Fragment as Fragment$2 } from 'react';
import * as pkg from '@heroicons/react/outline/esm/index.js';
import { CogIcon } from '@heroicons/react/outline/esm/index.js';
import Cookies from 'js-cookie';
import { create } from 'zustand';
import st, { fetchSubscriptionStatus, canUseSiteToday, increaseDailySiteUsage, getUserSubscription } from 'fetch-subscription-status';
import { FileCheck2, FileText, Trash2, X, Info } from 'lucide-react';
import { useDispatch, useSelector, Provider } from 'react-redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import { fromEvent } from 'file-selector';
import _accepts from 'attr-accept';
import * as pdfjs from 'pdfjs-dist';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import { ExclamationCircleIcon, PlusIcon, ArrowLeftIcon, DownloadIcon } from '@heroicons/react/solid/esm/index.js';
import { Tooltip } from 'react-tooltip';
import axios from 'axios';

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Remove Pages from a PDF?",
  description: "Steps to delete unwanted pages from a PDF document.",
  step: [
    {
      "@type": "HowToStep",
      name: "Step 1",
      text: "Open the Remove Pages tool on PDFEquips."
    },
    {
      "@type": "HowToStep",
      name: "Step 2",
      text: "Drag and drop the PDF file or click the 'Select PDF File' button to upload your PDF."
    },
    {
      "@type": "HowToStep",
      name: "Step 3",
      text: "Select the pages you want to remove. You can also specify a pattern like '2, 8-32' to select page 2 and pages 8 to 32."
    },
    {
      "@type": "HowToStep",
      name: "Step 4",
      text: "Click the 'Remove Pages' button to delete the selected pages."
    },
    {
      "@type": "HowToStep",
      name: "Step 5",
      text: "Click the 'Download Modified File' button to save the new PDF to your device."
    }
  ]
};
const howToSchema_ar = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "كيفية إزالة الصفحات من ملف PDF؟",
  description: "خطوات لحذف الصفحات غير المرغوب فيها من مستند PDF.",
  step: [
    {
      "@type": "HowToStep",
      name: "الخطوة 1",
      text: "افتح أداة إزالة الصفحات على PDFEquips."
    },
    {
      "@type": "HowToStep",
      name: "الخطوة 2",
      text: "اسحب وأفلت ملف PDF أو انقر فوق زر 'اختيار ملف PDF' لتحميل ملف PDF الخاص بك."
    },
    {
      "@type": "HowToStep",
      name: "الخطوة 3",
      text: "حدد الصفحات التي تريد إزالتها. يمكنك أيضًا تحديد نمط مثل '2، 8-32' لاختيار الصفحة 2 والصفحات من 8 إلى 32."
    },
    {
      "@type": "HowToStep",
      name: "الخطوة 4",
      text: "انقر فوق زر 'إزالة الصفحات' لحذف الصفحات المحددة."
    },
    {
      "@type": "HowToStep",
      name: "الخطوة 5",
      text: "انقر فوق زر 'تحميل الملف المعدل' لحفظ ملف PDF الجديد على جهازك."
    }
  ]
};
const howToSchema_es = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "¿Cómo eliminar páginas de un PDF?",
  description: "Pasos para eliminar páginas no deseadas de un documento PDF.",
  step: [
    {
      "@type": "HowToStep",
      name: "Paso 1",
      text: "Abre la herramienta de eliminación de páginas en PDFEquips."
    },
    {
      "@type": "HowToStep",
      name: "Paso 2",
      text: "Arrastra y suelta el archivo PDF o haz clic en el botón 'Seleccionar archivo PDF' para cargar tu PDF."
    },
    {
      "@type": "HowToStep",
      name: "Paso 3",
      text: "Selecciona las páginas que deseas eliminar. También puedes especificar un patrón como '2, 8-32' para seleccionar la página 2 y las páginas del 8 al 32."
    },
    {
      "@type": "HowToStep",
      name: "Paso 4",
      text: "Haz clic en el botón 'Eliminar páginas' para eliminar las páginas seleccionadas."
    },
    {
      "@type": "HowToStep",
      name: "Paso 5",
      text: "Haz clic en el botón 'Descargar archivo modificado' para guardar el nuevo PDF en tu dispositivo."
    }
  ]
};
const howToSchema_fr = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Comment supprimer des pages d'un PDF?",
  description: "Étapes pour supprimer des pages indésirables d'un document PDF.",
  step: [
    {
      "@type": "HowToStep",
      name: "Étape 1",
      text: "Ouvrez l'outil de suppression de pages sur PDFEquips."
    },
    {
      "@type": "HowToStep",
      name: "Étape 2",
      text: "Faites glisser et déposez le fichier PDF ou cliquez sur le bouton 'Sélectionner le fichier PDF' pour télécharger votre PDF."
    },
    {
      "@type": "HowToStep",
      name: "Étape 3",
      text: "Sélectionnez les pages que vous souhaitez supprimer. Vous pouvez également spécifier un modèle tel que '2, 8-32' pour sélectionner la page 2 et les pages de 8 à 32."
    },
    {
      "@type": "HowToStep",
      name: "Étape 4",
      text: "Cliquez sur le bouton 'Supprimer les pages' pour supprimer les pages sélectionnées."
    },
    {
      "@type": "HowToStep",
      name: "Étape 5",
      text: "Cliquez sur le bouton 'Télécharger le fichier modifié' pour enregistrer le nouveau PDF sur votre appareil."
    }
  ]
};
const howToSchema_hi = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "PDF से पृष्ठ कैसे हटाएं?",
  description: "PDF दस्तावेज़ से अवांछित पृष्ठों को हटाने के चरण।",
  step: [
    {
      "@type": "HowToStep",
      name: "चरण 1",
      text: "PDFEquips पर पृष्ठ हटाने का उपकरण खोलें।"
    },
    {
      "@type": "HowToStep",
      name: "चरण 2",
      text: "PDF फ़ाइल को खींचें और छोड़ें या अपनी PDF अपलोड करने के लिए 'PDF फ़ाइल चुनें' बटन पर क्लिक करें।"
    },
    {
      "@type": "HowToStep",
      name: "चरण 3",
      text: "वह पृष्ठ चुनें जिसे आप हटाना चाहते हैं। आप '2, 8-32' जैसे पैटर्न भी निर्दिष्ट कर सकते हैं ताकि पृष्ठ 2 और पृष्ठ 8 से 32 को चुन सकें।"
    },
    {
      "@type": "HowToStep",
      name: "चरण 4",
      text: "चयनित पृष्ठों को हटाने के लिए 'पृष्ठ हटाएं' बटन पर क्लिक करें।"
    },
    {
      "@type": "HowToStep",
      name: "चरण 5",
      text: "संशोधित फ़ाइल को अपने डिवाइस में सहेजने के लिए 'संशोधित फ़ाइल डाउनलोड करें' बटन पर क्लिक करें।"
    }
  ]
};
const howToSchema_zh = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "如何从PDF中删除页面？",
  description: "从PDF文档中删除不需要的页面的步骤。",
  step: [
    {
      "@type": "HowToStep",
      name: "步骤 1",
      text: "打开PDFEquips上的删除页面工具。"
    },
    {
      "@type": "HowToStep",
      name: "步骤 2",
      text: "拖放PDF文件或点击“选择PDF文件”按钮上传你的PDF。"
    },
    {
      "@type": "HowToStep",
      name: "步骤 3",
      text: "选择你想删除的页面。你还可以指定一个模式，如'2, 8-32'，选择第2页和第8至32页。"
    },
    {
      "@type": "HowToStep",
      name: "步骤 4",
      text: "点击“删除页面”按钮删除选定的页面。"
    },
    {
      "@type": "HowToStep",
      name: "步骤 5",
      text: "点击“下载修改后的文件”按钮，将新的PDF保存到你的设备。"
    }
  ]
};

function MarkdownIcon({ className }) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      className: `${className} w-5 h-5`,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "#231F20",
          d: "M351.659 48H-31.659C-49.496 48-64 62.484-64 80.308v255.349C-64 353.493-49.496 368-31.659 368h383.318C369.496 368 384 353.493 384 335.656V80.308C384 62.484 369.496 48 351.659 48zM188.023 304h-56.048v-96l-42.04 53.878L47.913 208v96H-8.131V112h56.044l42.022 67.98 42.04-67.98h56.048v192zm83.657 0l-69.635-96h42v-96h56.043v96h42.027l-70.453 96h.018z",
          transform: "translate(96 48)"
        }
      )
    }
  );
}

const setLanguage = (language) => {
  Cookies.set("languageToken", language, { expires: 365 });
};
const getLanguage = () => {
  return Cookies.get("languageToken");
};

const usePrependLangToUrl = () => {
  const [lang, setLang] = useState("");
  useEffect(() => {
    setLang(getLanguage() ?? "");
  }, []);
  return useCallback(
    (url) => {
      if (lang && lang !== "") {
        return `/${lang}${url}`;
      }
      return url;
    },
    [lang]
  );
};

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React.createContext && /*#__PURE__*/React.createContext(DefaultContext);

var _excluded$1 = ["attr", "size", "title"];
function _objectWithoutProperties$1(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys$2(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$2(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2(Object(t), true).forEach(function (r) { _defineProperty$2(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty$2(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /*#__PURE__*/React.createElement(node.tag, _objectSpread$2({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return props => /*#__PURE__*/React.createElement(IconBase, _extends({
    attr: _objectSpread$2({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = conf => {
    var {
        attr,
        size,
        title
      } = props,
      svgProps = _objectWithoutProperties$1(props, _excluded$1);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /*#__PURE__*/React.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: _objectSpread$2(_objectSpread$2({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /*#__PURE__*/React.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? /*#__PURE__*/React.createElement(IconContext.Consumer, null, conf => elem(conf)) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function TbFileTypePng (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M14 3v4a1 1 0 0 0 1 1h4"},"child":[]},{"tag":"path","attr":{"d":"M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"},"child":[]},{"tag":"path","attr":{"d":"M20 15h-1a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h1v-3"},"child":[]},{"tag":"path","attr":{"d":"M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6"},"child":[]},{"tag":"path","attr":{"d":"M11 21v-6l3 6v-6"},"child":[]}]})(props);
}

// THIS FILE IS AUTO GENERATED
function MdOutlineGif (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0V0z"},"child":[]},{"tag":"path","attr":{"d":"M11.5 9H13v6h-1.5V9zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1h3z"},"child":[]}]})(props);
}function MdOutlineTranslate (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0V0z"},"child":[]},{"tag":"path","attr":{"d":"m12.87 15.07-2.54-2.51.03-.03A17.52 17.52 0 0 0 14.07 6H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7 1.62-4.33L19.12 17h-3.24z"},"child":[]}]})(props);
}

// THIS FILE IS AUTO GENERATED
function BsFillFileEarmarkWordFill (props) {
  return GenIcon({"attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M5.485 6.879l1.036 4.144.997-3.655a.5.5 0 0 1 .964 0l.997 3.655 1.036-4.144a.5.5 0 0 1 .97.242l-1.5 6a.5.5 0 0 1-.967.01L8 9.402l-1.018 3.73a.5.5 0 0 1-.967-.01l-1.5-6a.5.5 0 1 1 .97-.242z"},"child":[]}]})(props);
}function BsFiletypeBmp (props) {
  return GenIcon({"attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14 4.5V14a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM0 15.849h1.664q.408 0 .72-.132.315-.135.493-.386.18-.253.179-.61a1 1 0 0 0-.123-.51.85.85 0 0 0-.323-.325 1.1 1.1 0 0 0-.445-.14v-.036a1 1 0 0 0 .352-.16.8.8 0 0 0 .243-.294.9.9 0 0 0 .09-.422q0-.463-.322-.723-.322-.261-.858-.261H0zm.785-3.404h.7q.28 0 .431.14.155.138.155.384a.5.5 0 0 1-.082.296.5.5 0 0 1-.249.185 1.2 1.2 0 0 1-.433.064H.785zm0 1.62h.75q.231 0 .393.073a.5.5 0 0 1 .24.211.6.6 0 0 1 .082.325q0 .284-.205.434-.205.146-.671.146H.785zm3.474 1.784v-2.66h.038l.952 2.16h.515l.947-2.16h.038v2.66h.715V11.85h-.8l-1.14 2.596h-.026l-1.14-2.596h-.805v3.999zm3.918-3.999h1.6q.434 0 .732.179.302.176.46.477.159.302.159.677t-.162.677q-.158.299-.462.474a1.45 1.45 0 0 1-.733.173h-.803v1.342h-.79zm2.06 1.714a.8.8 0 0 0 .085-.381q0-.34-.185-.521-.185-.182-.512-.182h-.66v1.406h.66a.8.8 0 0 0 .375-.082.57.57 0 0 0 .237-.24"},"child":[]}]})(props);
}function BsFiletypeCsv (props) {
  return GenIcon({"attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.517 14.841a1.13 1.13 0 0 0 .401.823q.195.162.478.252.284.091.665.091.507 0 .859-.158.354-.158.539-.44.187-.284.187-.656 0-.336-.134-.56a1 1 0 0 0-.375-.357 2 2 0 0 0-.566-.21l-.621-.144a1 1 0 0 1-.404-.176.37.37 0 0 1-.144-.299q0-.234.185-.384.188-.152.512-.152.214 0 .37.068a.6.6 0 0 1 .246.181.56.56 0 0 1 .12.258h.75a1.1 1.1 0 0 0-.2-.566 1.2 1.2 0 0 0-.5-.41 1.8 1.8 0 0 0-.78-.152q-.439 0-.776.15-.337.149-.527.421-.19.273-.19.639 0 .302.122.524.124.223.352.367.228.143.539.213l.618.144q.31.073.463.193a.39.39 0 0 1 .152.326.5.5 0 0 1-.085.29.56.56 0 0 1-.255.193q-.167.07-.413.07-.175 0-.32-.04a.8.8 0 0 1-.248-.115.58.58 0 0 1-.255-.384zM.806 13.693q0-.373.102-.633a.87.87 0 0 1 .302-.399.8.8 0 0 1 .475-.137q.225 0 .398.097a.7.7 0 0 1 .272.26.85.85 0 0 1 .12.381h.765v-.072a1.33 1.33 0 0 0-.466-.964 1.4 1.4 0 0 0-.489-.272 1.8 1.8 0 0 0-.606-.097q-.534 0-.911.223-.375.222-.572.632-.195.41-.196.979v.498q0 .568.193.976.197.407.572.626.375.217.914.217.439 0 .785-.164t.55-.454a1.27 1.27 0 0 0 .226-.674v-.076h-.764a.8.8 0 0 1-.118.363.7.7 0 0 1-.272.25.9.9 0 0 1-.401.087.85.85 0 0 1-.478-.132.83.83 0 0 1-.299-.392 1.7 1.7 0 0 1-.102-.627zm8.239 2.238h-.953l-1.338-3.999h.917l.896 3.138h.038l.888-3.138h.879z"},"child":[]}]})(props);
}function BsFiletypeHeic (props) {
  return GenIcon({"attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zm-4.637 8.554a1.7 1.7 0 0 0-.103.633v.495q0 .369.103.627a.83.83 0 0 0 .299.393.85.85 0 0 0 .477.131.9.9 0 0 0 .401-.088.7.7 0 0 0 .273-.248.8.8 0 0 0 .117-.364h.765v.076a1.27 1.27 0 0 1-.226.674q-.205.29-.55.454a1.8 1.8 0 0 1-.786.164q-.54 0-.914-.216a1.4 1.4 0 0 1-.571-.627q-.194-.408-.194-.976v-.498q0-.568.197-.978.196-.411.571-.633.378-.223.911-.223.328 0 .607.097.28.093.489.272a1.32 1.32 0 0 1 .466.964v.073h-.765a.85.85 0 0 0-.12-.38.7.7 0 0 0-.273-.261.8.8 0 0 0-.398-.097.8.8 0 0 0-.475.138.87.87 0 0 0-.301.398m-6.1-1.128v4h-.79V14.21H.79v1.714H0v-3.999h.791v1.626h1.682v-1.626zm1.488 3.352h1.79v.647H3.966v-3.999H6.54v.648H4.75v1.025h1.684v.607H4.751zm3.163.647v-3.999h-.791v4h.79Z"},"child":[]}]})(props);
}function BsFiletypeSvg (props) {
  return GenIcon({"attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14 4.5V14a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM0 14.841a1.13 1.13 0 0 0 .401.823q.194.162.478.252.285.091.665.091.507 0 .858-.158.355-.158.54-.44a1.17 1.17 0 0 0 .187-.656q0-.336-.135-.56a1 1 0 0 0-.375-.357 2 2 0 0 0-.565-.21l-.621-.144a1 1 0 0 1-.405-.176.37.37 0 0 1-.143-.299q0-.234.184-.384.187-.152.513-.152.214 0 .37.068a.6.6 0 0 1 .245.181.56.56 0 0 1 .12.258h.75a1.1 1.1 0 0 0-.199-.566 1.2 1.2 0 0 0-.5-.41 1.8 1.8 0 0 0-.78-.152q-.44 0-.776.15-.337.149-.528.421-.19.273-.19.639 0 .302.123.524t.351.367q.229.143.54.213l.618.144q.31.073.462.193a.39.39 0 0 1 .153.326.5.5 0 0 1-.085.29.56.56 0 0 1-.256.193q-.167.07-.413.07-.176 0-.32-.04a.8.8 0 0 1-.248-.115.58.58 0 0 1-.255-.384zm4.575 1.09h.952l1.327-3.999h-.879l-.887 3.138H5.05l-.897-3.138h-.917zm5.483-3.293q.114.228.14.492h-.776a.8.8 0 0 0-.096-.249.7.7 0 0 0-.17-.19.7.7 0 0 0-.237-.126 1 1 0 0 0-.3-.044q-.427 0-.664.302-.235.3-.235.85v.497q0 .352.097.616a.9.9 0 0 0 .305.413.87.87 0 0 0 .518.146 1 1 0 0 0 .457-.097.67.67 0 0 0 .273-.263q.09-.164.09-.364v-.254h-.823v-.59h1.576v.798q0 .29-.096.55a1.3 1.3 0 0 1-.293.457 1.4 1.4 0 0 1-.495.314q-.296.111-.698.111a2 2 0 0 1-.752-.132 1.45 1.45 0 0 1-.534-.377 1.6 1.6 0 0 1-.319-.58 2.5 2.5 0 0 1-.105-.745v-.507q0-.54.199-.949.202-.406.583-.633.383-.228.926-.228.357 0 .635.1.282.1.48.275.2.176.314.407"},"child":[]}]})(props);
}function BsFiletypeTiff (props) {
  return GenIcon({"attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.928 12.512v3.337h-.794v-3.337H0v-.662h3.064v.662zm2.131-.662v3.999h-.79V11.85zm1.373 3.999v-1.59h1.606v-.64H5.432v-1.116H7.19v-.653H4.641v3.999zm2.868-1.59v1.59h-.791V11.85h2.548v.653H8.3v1.117h1.605v.638z"},"child":[]}]})(props);
}

// THIS FILE IS AUTO GENERATED
function FaFacebook (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"},"child":[]}]})(props);
}function FaInstagram (props) {
  return GenIcon({"attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},"child":[]}]})(props);
}function FaLinkedinIn (props) {
  return GenIcon({"attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},"child":[]}]})(props);
}function FaReddit (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M0 256C0 114.6 114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256L37.1 512c-13.7 0-20.5-16.5-10.9-26.2L75 437C28.7 390.7 0 326.7 0 256zM349.6 153.6c23.6 0 42.7-19.1 42.7-42.7s-19.1-42.7-42.7-42.7c-20.6 0-37.8 14.6-41.8 34c-34.5 3.7-61.4 33-61.4 68.4l0 .2c-37.5 1.6-71.8 12.3-99 29.1c-10.1-7.8-22.8-12.5-36.5-12.5c-33 0-59.8 26.8-59.8 59.8c0 24 14.1 44.6 34.4 54.1c2 69.4 77.6 125.2 170.6 125.2s168.7-55.9 170.6-125.3c20.2-9.6 34.1-30.2 34.1-54c0-33-26.8-59.8-59.8-59.8c-13.7 0-26.3 4.6-36.4 12.4c-27.4-17-62.1-27.7-100-29.1l0-.2c0-25.4 18.9-46.5 43.4-49.9l0 0c4.4 18.8 21.3 32.8 41.5 32.8zM177.1 246.9c16.7 0 29.5 17.6 28.5 39.3s-13.5 29.6-30.3 29.6s-31.4-8.8-30.4-30.5s15.4-38.3 32.1-38.3zm190.1 38.3c1 21.7-13.7 30.5-30.4 30.5s-29.3-7.9-30.3-29.6c-1-21.7 11.8-39.3 28.5-39.3s31.2 16.6 32.1 38.3zm-48.1 56.7c-10.3 24.6-34.6 41.9-63 41.9s-52.7-17.3-63-41.9c-1.2-2.9 .8-6.2 3.9-6.5c18.4-1.9 38.3-2.9 59.1-2.9s40.7 1 59.1 2.9c3.1 .3 5.1 3.6 3.9 6.5z"},"child":[]}]})(props);
}function FaTiktok (props) {
  return GenIcon({"attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"},"child":[]}]})(props);
}function FaXTwitter (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"},"child":[]}]})(props);
}function FaCamera (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M149.1 64.8L138.7 96 64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-74.7 0L362.9 64.8C356.4 45.2 338.1 32 317.4 32L194.6 32c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"},"child":[]}]})(props);
}function FaFilePdf (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z"},"child":[]}]})(props);
}function FaPhoneFlip (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z"},"child":[]}]})(props);
}

// THIS FILE IS AUTO GENERATED
function CiImageOn (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"id":"Image_On"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M18.435,3.06H5.565a2.5,2.5,0,0,0-2.5,2.5V18.44a2.507,2.507,0,0,0,2.5,2.5h12.87a2.507,2.507,0,0,0,2.5-2.5V5.56A2.5,2.5,0,0,0,18.435,3.06ZM4.065,5.56a1.5,1.5,0,0,1,1.5-1.5h12.87a1.5,1.5,0,0,1,1.5,1.5v8.66l-3.88-3.88a1.509,1.509,0,0,0-2.12,0l-4.56,4.57a.513.513,0,0,1-.71,0l-.56-.56a1.522,1.522,0,0,0-2.12,0l-1.92,1.92Zm15.87,12.88a1.5,1.5,0,0,1-1.5,1.5H5.565a1.5,1.5,0,0,1-1.5-1.5v-.75L6.7,15.06a.5.5,0,0,1,.35-.14.524.524,0,0,1,.36.14l.55.56a1.509,1.509,0,0,0,2.12,0l4.57-4.57a.5.5,0,0,1,.71,0l4.58,4.58Z"},"child":[]},{"tag":"path","attr":{"d":"M8.062,10.565a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,8.062,10.565Zm0-4a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,8.062,6.565Z"},"child":[]}]}]}]})(props);
}

// THIS FILE IS AUTO GENERATED
function IoDocumentTextOutline (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"fill":"none","strokeLinejoin":"round","strokeWidth":"32","d":"M416 221.25V416a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V96a48 48 0 0 1 48-48h98.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62z"},"child":[]},{"tag":"path","attr":{"fill":"none","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"32","d":"M256 56v120a32 32 0 0 0 32 32h120m-232 80h160m-160 80h160"},"child":[]}]})(props);
}

// THIS FILE IS AUTO GENERATED
function PiMicrosoftExcelLogo (props) {
  return GenIcon({"attr":{"viewBox":"0 0 256 256","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M200,24H72A16,16,0,0,0,56,40V64H40A16,16,0,0,0,24,80v96a16,16,0,0,0,16,16H56v24a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24Zm-40,80h40v48H160Zm40-16H160V80a16,16,0,0,0-16-16V40h56ZM72,40h56V64H72ZM40,80H144v79.83c0,.06,0,.11,0,.17s0,.11,0,.17V176H40ZM72,192h56v24H72Zm72,24V192a16,16,0,0,0,16-16v-8h40v48ZM65.85,146.88,81.59,128,65.85,109.12a8,8,0,0,1,12.3-10.24L92,115.5l13.85-16.62a8,8,0,1,1,12.3,10.24L102.41,128l15.74,18.88a8,8,0,0,1-12.3,10.24L92,140.5,78.15,157.12a8,8,0,0,1-12.3-10.24Z"},"child":[]}]})(props);
}function PiMicrosoftPowerpointLogo (props) {
  return GenIcon({"attr":{"viewBox":"0 0 256 256","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M96,96H80a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0v-8h8a24,24,0,0,0,0-48Zm0,32H88V112h8a8,8,0,0,1,0,16ZM136,24A104.33,104.33,0,0,0,54,64H40A16,16,0,0,0,24,80v96a16,16,0,0,0,16,16H54A104,104,0,1,0,136,24Zm87.63,96H160V80a16,16,0,0,0-16-16V40.37A88.13,88.13,0,0,1,223.63,120ZM128,40.37V64H75.63A88.36,88.36,0,0,1,128,40.37ZM40,80H144v47.9a.51.51,0,0,0,0,.2V176H40Zm88,112v23.63A88.36,88.36,0,0,1,75.63,192Zm16,23.63V192a16,16,0,0,0,16-16V136h63.63A88.13,88.13,0,0,1,144,215.63Z"},"child":[]}]})(props);
}

function EpubIcon(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "600",
      height: "800",
      x: "0",
      y: "0",
      version: "1.1",
      viewBox: "0 0 600 800",
      xmlSpace: "preserve",
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#86B918",
            d: "M131.969 755.898c11.244 0 19.199-4.599 25.85-11.573l7.591 6.827c-8.227 9.192-18.222 15.376-33.76 15.376-22.534 0-40.906-17.294-40.906-42.824 0-23.777 16.649-42.815 39.333-42.815 24.237 0 38.203 19.347 38.203 43.453 0 1.113 0 2.381-.15 3.803h-65.031c1.739 17.776 14.437 27.753 28.87 27.753zm23.958-36.787c-1.277-14.907-9.844-27.916-26.194-27.916-14.242 0-25.043 11.909-26.639 27.916h52.833z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#41281B",
            d: "M231.23 725.461h-26.957v39.177H191.75V653.616h41.562c25.043 0 41.542 13.331 41.542 35.373 0 24.107-19.984 36.472-43.624 36.472zm1.103-60.265h-28.062v48.839h27.447c18.386 0 30.441-9.823 30.441-24.577.004-16.014-11.879-24.262-29.826-24.262zM388.377 717.193c0 32.363-18.535 49.174-46.3 49.174-27.424 0-46.134-16.811-46.134-48.208v-64.543h12.518v63.752c0 23.939 12.693 37.425 33.954 37.425 20.453 0 33.462-12.378 33.462-36.634v-64.543h12.5v63.577zM500.202 681.379c0 14.584-8.885 22.034-17.602 25.85 13.163 3.95 23.771 11.561 23.771 26.958 0 19.172-16.014 30.451-40.269 30.451H415.99V653.616h48.048c21.882 0 36.164 10.776 36.164 27.763zm-12.692 1.743c0-11.112-8.739-18.24-24.573-18.24h-34.59v38.229h33.63c15.056-.007 25.533-6.834 25.533-19.989zm6.188 50.266c0-12.218-10.162-19.192-29.513-19.192h-35.839v39.163h38.076c16.816-.001 27.276-7.438 27.276-19.971z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#86B918",
            d: "M298.549 467.913L129.228 298.579 298.549 129.27l56.446 56.435-112.891 112.874 56.441 56.443 169.323-169.308L320.366 38.217c-12.043-12.055-31.579-12.055-43.634 0L38.169 276.781c-12.044 12.043-12.044 31.58 0 43.633l238.563 238.557c12.055 12.05 31.591 12.05 43.634 0l238.565-238.557c12.044-12.053 12.044-31.59 0-43.633L524.3 242.159 298.549 467.913z"
          }
        )
      ]
    }
  );
}

const PSDIcon = (props) => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      version: "1.1",
      id: "PSD_Icon",
      x: "0px",
      y: "0px",
      viewBox: "0 0 213.5 262.5",
      enableBackground: "new 0 0 213.5 262.5",
      xmlSpace: "preserve",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/2000/svg",
      ...props,
      children: [
        /* @__PURE__ */ jsx("defs", { id: "defs1" }),
        /* @__PURE__ */ jsx("path", { id: "_x33_1A8FF", className: "st0", d: "M27.1,0C12.2,0,0,12.2,0,27.1v208.3  c0,14.9,12.2,27.1,27.1,27.1h159.3c14.9,0,27.1-12.2,27.1-27.1V64.1c0,0,0.4-5-1.8-9.9c-2-4.6-5.4-7.8-5.4-7.8c0,0,0,0,0,0  L166.8,7.7c0,0,0,0-0.1-0.1c0,0-3.4-3.2-8.4-5.4c-5.9-2.5-12-2.3-12-2.3l0.1,0L27.1,0z" }),
        "\n",
        /* @__PURE__ */ jsx("path", { id: "_x30_01E36", className: "st1", d: "M27.1,8.9h119.4c0,0,0.1,0,0.1,0c0,0,4.8,0,8.3,1.5  c3.4,1.4,5.7,3.6,5.8,3.6c0,0,0,0,0,0l39.4,38.7c0,0,2.4,2.5,3.5,5.1c0.9,2.1,1,5.9,1,5.9c0,0.1,0,0.1,0,0.2v171.4  c0,10.2-8,18.2-18.2,18.2H27.1c-10.2,0-18.2-8-18.2-18.2V27.1C8.9,17,16.9,8.9,27.1,8.9L27.1,8.9z" }),
        "\n",
        /* @__PURE__ */ jsxs("g", { id: "PS", children: [
          "\n",
          /* @__PURE__ */ jsx("path", { id: "P_1_", className: "st0", d: "M50.1,139V55.9c0-0.6,0.2-0.9,0.8-0.9c1.4,0,2.7,0,4.5-0.1c1.9-0.1,4-0.1,6.1-0.2   c2.2-0.1,4.5-0.1,7-0.2c2.5-0.1,4.9-0.1,7.3-0.1c6.6,0,12.1,0.8,16.6,2.5c4,1.4,7.7,3.6,10.8,6.6c2.6,2.6,4.6,5.7,5.9,9.2   c1.2,3.4,1.9,6.9,1.9,10.5c0,6.9-1.6,12.7-4.8,17.2c-3.2,4.5-7.7,7.9-13,9.8c-5.5,2-11.5,2.7-18.2,2.7c-1.9,0-3.2,0-4-0.1   c-0.8-0.1-1.9-0.1-3.5-0.1v25.9c0.1,0.6-0.3,1-0.9,1.1c-0.1,0-0.2,0-0.3,0H51C50.4,140.1,50.1,139.7,50.1,139z M67.7,70.6v27.1   c1.1,0.1,2.2,0.2,3.1,0.2h4.3c3.1,0,6.3-0.5,9.3-1.5c2.6-0.7,4.8-2.3,6.6-4.3c1.7-2,2.5-4.8,2.5-8.3c0.1-2.5-0.6-5-1.9-7.2   c-1.4-2.1-3.3-3.7-5.7-4.6c-3-1.2-6.2-1.7-9.5-1.6c-2.1,0-4,0-5.5,0.1C69.4,70.5,68.2,70.6,67.7,70.6L67.7,70.6z" }),
          "\n",
          /* @__PURE__ */ jsx("path", { id: "S_1_", className: "st0", d: "M161.5,92.8c-2.4-1.3-5-2.2-7.7-2.7c-3-0.6-6-1-9-1c-1.6-0.1-3.3,0.2-4.8,0.6   c-1,0.2-1.9,0.8-2.5,1.6c-0.4,0.6-0.6,1.5-0.6,2.2s0.3,1.5,0.8,2.1c0.7,0.9,1.7,1.6,2.7,2.2c1.9,1,3.8,1.9,5.7,2.7   c4.4,1.5,8.6,3.5,12.4,5.9c2.7,1.7,4.8,4,6.4,6.7c1.3,2.6,1.9,5.4,1.9,8.3c0.1,3.8-1,7.6-3.1,10.7c-2.3,3.2-5.4,5.7-9,7.2   c-4,1.7-8.8,2.6-14.6,2.6c-3.7,0-7.3-0.3-11-1c-2.8-0.5-5.7-1.4-8.2-2.6c-0.6-0.3-1-0.9-0.9-1.5v-14c0-0.2,0.1-0.6,0.3-0.7   c0.2-0.2,0.5-0.1,0.7,0.1c3.1,1.9,6.5,3.1,10,4c3.1,0.8,6.3,1.2,9.5,1.2c3.1,0,5.2-0.4,6.7-1.1c1.3-0.6,2.2-1.9,2.2-3.4   c0-1.1-0.6-2.2-1.9-3.2c-1.3-1-4-2.3-7.9-3.8c-4.1-1.5-7.9-3.4-11.5-5.8c-2.5-1.8-4.6-4.1-6.1-6.9c-1.3-2.6-1.9-5.4-1.9-8.2   c0-3.5,1-6.8,2.7-9.8c2-3.2,5-5.8,8.5-7.4c3.8-1.9,8.6-2.8,14.3-2.8c3.3,0,6.7,0.2,10,0.7c2.4,0.3,4.8,1,6.9,1.9   c0.3,0.1,0.6,0.4,0.8,0.7c0.1,0.3,0.2,0.6,0.2,1V92c0,0.3-0.2,0.6-0.4,0.8C162.2,93,161.8,93,161.5,92.8z" }),
          "\n"
        ] }),
        "\n",
        /* @__PURE__ */ jsxs("g", { id: "PSD", children: [
          "\n",
          /* @__PURE__ */ jsx("path", { id: "P", className: "st2", d: "M72.6,208.5v13.8h-6.4v-37.6h10.6c7.5,0,11.7,4.3,11.7,11.9c0,7.6-4.3,11.9-11.7,11.9H72.6z    M72.6,190.1V203h4.6c3,0,4.9-2.4,4.9-6.5c0-4.1-1.9-6.5-5.2-6.5H72.6z" }),
          "\n",
          /* @__PURE__ */ jsx("path", { id: "S", className: "st2", d: "M94.8,220.6v-6.2c2.6,1.5,5.7,2.8,9,2.8c3.6,0,6.1-1.6,6.1-4.5c0-3-1.9-4.6-6.4-6.7   c-5.7-2.6-9-5.4-9-11.5c0-6.7,4.5-10.5,11.5-10.5c3.3,0,6.4,0.9,8.3,2v5.9c-2-1.2-5-2.2-7.8-2.2c-3.5,0-5.7,1.8-5.7,4.7   c0,2.7,1.7,4.6,6.3,6.6c5.7,2.6,9.1,5.4,9.1,11.4c0,6.7-4.3,10.5-11.7,10.5C100.6,222.9,97.1,221.9,94.8,220.6z" }),
          "\n",
          /* @__PURE__ */ jsx("path", { id: "D", className: "st2", d: "M123,222.2v-37.6h10.1c11.1,0,17.4,7.3,17.4,18.8c0,11.5-6.3,18.8-17.3,18.8H123z M129.4,190.1v26.7   h3.8c6.8,0,10.8-5.2,10.8-13.4c0-8.1-4-13.4-11-13.4H129.4z" }),
          "\n"
        ] }),
        "\n"
      ]
    }
  );
};

function RTFIcon(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "682.667",
      height: "682.667",
      version: "1",
      viewBox: "0 0 512 512",
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M1465 4951c-109-27-212-111-266-219l-34-67-3-652-3-651-252-4-252-3-66-32c-80-39-159-120-197-200l-27-58-3-855c-2-603 0-873 8-915 29-155 146-307 290-377 101-49 154-58 340-58h158l4-202c3-201 4-204 33-263 34-70 100-144 159-179 101-59 15-56 1606-56 1309 0 1462 2 1511 16 134 40 234 140 273 273 14 49 16 236 16 1855v1801l-428 427-427 428-1205-1c-663-1-1218-4-1235-8zm2295-562v-371l29-29 29-29h742V2253c0-1220-3-1719-11-1748-15-52-82-119-134-134-57-15-2853-15-2910 0-52 15-119 82-134 134-6 22-11 111-11 197v158l1323 2 1322 3 55 28c72 37 131 96 166 165l29 57v1390l-28 55c-37 72-96 131-165 166l-57 29-1322 3-1323 2v908c0 617 4 919 11 946 14 50 73 113 124 131 34 12 220 14 1153 15h1112v-371zm430-4l225-225h-455v225c0 124 1 225 3 225 1 0 103-101 227-225zM1160 2960v-200H953c-115 0-225 5-246 11-43 11-101 59-122 98-38 75-25 160 33 223 58 61 87 67 330 68h212v-200zm1152-400c1644-5 1647-5 1674-26 15-11 37-33 48-48 21-27 21-37 21-676s0-649-21-676c-11-15-33-37-48-48l-27-21H825l-56 26c-79 37-133 90-171 167l-33 67-3 641-3 642 53-21 53-22 1647-5z",
            transform: "matrix(.1 0 0 -.1 0 512)"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M1689 4231c-23-23-29-38-29-71s6-48 29-71l29-29h884l29 29c41 41 41 101 0 142l-29 29h-884l-29-29zM1689 3831c-23-23-29-38-29-71s6-48 29-71l29-29h1684l29 29c23 23 29 38 29 71s-6 48-29 71l-29 29H1718l-29-29zM1689 3431c-23-23-29-38-29-71s6-48 29-71l29-29h1684l29 29c23 23 29 38 29 71s-6 48-29 71l-29 29H1718l-29-29zM1011 2346c-50-28-50-28-51-533 0-345 3-479 12-498 13-29 55-55 88-55 29 0 76 26 86 47 5 10 11 73 14 140l5 123 233-155c145-96 242-155 258-155 55 0 104 47 104 100 0 46-28 72-193 182l-170 113 54 8c73 10 169 58 214 108 64 71 90 140 90 239 0 71-4 94-26 141-37 79-90 133-167 171l-66 33-231 3c-179 1-235-1-254-12zm469-206c45-23 80-80 80-131 0-46-39-108-82-130-31-16-59-19-178-19h-140v300h140c121 0 146-3 180-20zM2011 2346c-47-26-63-84-37-135 22-41 55-51 176-51h110v-410c0-440 1-450 51-476 35-18 63-18 98 0 50 26 51 36 51 476v410h110c123 0 158 11 178 55 23 51 7 107-39 131-39 20-662 20-698 0zM3011 2346c-50-28-50-28-51-533 0-507 0-512 51-539 35-18 63-18 98 0 46 24 51 50 51 276v210h160c176 0 206 7 228 55 16 34 15 60-2 94-23 44-52 51-226 51h-160v200h210c229 0 255 5 278 55 23 51 7 107-39 131-39 20-562 20-598 0z",
            transform: "matrix(.1 0 0 -.1 0 512)"
          }
        )
      ]
    }
  );
}

const {
  PhotographIcon: PhotographIcon$1,
  CodeIcon: CodeIcon$1,
  GlobeIcon
} = pkg;
const ConvertTo = ({
  convert_to,
  title
}) => {
  const prependLangToUrl = usePrependLangToUrl();
  return /* @__PURE__ */ jsxs("ul", { className: "nav-list convert-tools vertical-list", children: [
    /* @__PURE__ */ jsx("li", { className: "_h6", children: /* @__PURE__ */ jsx("bdi", { children: title }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/image-to-pdf"), className: "nav-link", children: [
      /* @__PURE__ */ jsx(CiImageOn, { className: "icon inline-block mr-2 image" }),
      " ",
      /* @__PURE__ */ jsx("bdi", { children: convert_to.image_to_pdf })
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/word-to-pdf"), className: "nav-link", children: [
      /* @__PURE__ */ jsx(BsFillFileEarmarkWordFill, { className: "icon inline-block mr-2 word" }),
      " ",
      /* @__PURE__ */ jsx("bdi", { children: convert_to.word_to_pdf })
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/rtf-to-pdf"), className: "nav-link", children: [
      /* @__PURE__ */ jsx(RTFIcon, { className: "icon inline-block mr-2 rtf" }),
      " ",
      /* @__PURE__ */ jsx("bdi", { children: convert_to.rtf_to_pdf })
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/powerpoint-to-pdf"), className: "nav-link", children: [
      /* @__PURE__ */ jsx(PiMicrosoftPowerpointLogo, { className: "icon inline-block mr-2 ppt" }),
      " ",
      /* @__PURE__ */ jsx("bdi", { children: convert_to.powerpoint_to_pdf })
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/excel-to-pdf"), className: "nav-link", children: [
      /* @__PURE__ */ jsx(PiMicrosoftExcelLogo, { className: "icon inline-block mr-2 excel" }),
      " ",
      /* @__PURE__ */ jsx("bdi", { children: convert_to.excel_to_pdf })
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/html-to-pdf"), className: "nav-link", children: [
      /* @__PURE__ */ jsx(CodeIcon$1, { className: "icon inline-block mr-2 html" }),
      " ",
      /* @__PURE__ */ jsx("bdi", { children: convert_to.html_to_pdf })
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/epub-to-pdf"), className: "nav-link", children: [
      /* @__PURE__ */ jsx(EpubIcon, { className: "icon inline-block mr-2 html" }),
      " ",
      /* @__PURE__ */ jsx("bdi", { children: convert_to.epub_to_pdf })
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/web-to-pdf"), className: "nav-link", children: [
      /* @__PURE__ */ jsx(GlobeIcon, { className: "icon inline-block mr-2 web" }),
      " ",
      /* @__PURE__ */ jsx("bdi", { children: convert_to.web_to_pdf }),
      " "
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/text-to-pdf"), className: "nav-link", children: [
      /* @__PURE__ */ jsx(IoDocumentTextOutline, { className: "icon inline-block mr-2 text" }),
      " ",
      /* @__PURE__ */ jsx("bdi", { children: convert_to.text_to_pdf }),
      " "
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/markdown-to-pdf"), className: "nav-link", children: [
      /* @__PURE__ */ jsx(MarkdownIcon, { className: "icon inline-block mr-2 web" }),
      " ",
      /* @__PURE__ */ jsx("bdi", { children: convert_to.markdown_to_pdf }),
      " "
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/psd-to-pdf"), className: "nav-link", children: [
      /* @__PURE__ */ jsx(PSDIcon, { className: "icon inline-block mr-2 psd" }),
      " ",
      /* @__PURE__ */ jsx("bdi", { children: convert_to.psd_to_pdf }),
      " "
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/jpg-to-pdf"), className: "nav-link", children: [
      /* @__PURE__ */ jsx(PhotographIcon$1, { className: "icon inline-block mr-2 img" }),
      " ",
      /* @__PURE__ */ jsx("bdi", { children: convert_to.jpg_to_pdf })
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/png-to-pdf"), className: "nav-link", children: [
      /* @__PURE__ */ jsx(TbFileTypePng, { className: "icon inline-block mr-2 png" }),
      " ",
      /* @__PURE__ */ jsx("bdi", { children: convert_to.png_to_pdf }),
      " "
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/gif-to-pdf"), className: "nav-link", children: [
      /* @__PURE__ */ jsx(MdOutlineGif, { className: "icon inline-block mr-2 gif" }),
      " ",
      /* @__PURE__ */ jsx("bdi", { children: convert_to.gif_to_pdf }),
      " "
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/tiff-to-pdf"), className: "nav-link", children: [
      /* @__PURE__ */ jsx(BsFiletypeTiff, { className: "icon inline-block mr-2 tiff" }),
      " ",
      /* @__PURE__ */ jsx("bdi", { children: convert_to.tiff_to_pdf }),
      " "
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/bmp-to-pdf"), className: "nav-link", children: [
      /* @__PURE__ */ jsx(BsFiletypeBmp, { className: "icon inline-block mr-2 bmp" }),
      " ",
      /* @__PURE__ */ jsx("bdi", { children: convert_to.bmp_to_pdf }),
      " "
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/svg-to-pdf"), className: "nav-link", children: [
      /* @__PURE__ */ jsx(BsFiletypeSvg, { className: "icon inline-block mr-2 svg" }),
      " ",
      /* @__PURE__ */ jsx("bdi", { children: convert_to.svg_to_pdf }),
      " "
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/webp-to-pdf"), className: "nav-link", children: [
      /* @__PURE__ */ jsx(FaCamera, { className: "icon inline-block mr-2 webp" }),
      " ",
      /* @__PURE__ */ jsx("bdi", { children: convert_to.webp_to_pdf }),
      " "
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/heif-heic-to-pdf"), className: "nav-link", children: [
      /* @__PURE__ */ jsx(BsFiletypeHeic, { className: "icon inline-block mr-2 heif-heic" }),
      " ",
      /* @__PURE__ */ jsx("bdi", { children: convert_to.heif_heic_to_pdf }),
      " "
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/csv-to-pdf"), className: "nav-link", children: [
      /* @__PURE__ */ jsx(BsFiletypeCsv, { className: "icon inline-block mr-2 excel" }),
      " ",
      /* @__PURE__ */ jsx("bdi", { children: convert_to.csv_to_pdf }),
      " "
    ] }) })
  ] });
};

const {
  PhotographIcon,
  CodeIcon,
  DocumentTextIcon: DocumentTextIcon$1
} = pkg;
const ConvertFrom = ({
  convert_from,
  title
}) => {
  const prependLangToUrl = usePrependLangToUrl();
  return /* @__PURE__ */ jsxs("ul", { className: "nav-list convert-tools vertical-list", children: [
    /* @__PURE__ */ jsx("li", { className: "_h6", children: /* @__PURE__ */ jsx("bdi", { children: title }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/pdf-to-image"), className: "nav-link", children: [
      /* @__PURE__ */ jsx("bdi", { children: convert_from.pdf_to_image }),
      " ",
      /* @__PURE__ */ jsx(CiImageOn, { className: "icon inline-block mr-2 image" })
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/pdf-to-word"), className: "nav-link", children: [
      /* @__PURE__ */ jsx("bdi", { children: convert_from.pdf_to_word }),
      " ",
      /* @__PURE__ */ jsx(BsFillFileEarmarkWordFill, { className: "icon inline-block mr-2 word" })
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/pdf-to-rtf"), className: "nav-link", children: [
      /* @__PURE__ */ jsx("bdi", { children: convert_from.pdf_to_rtf }),
      " ",
      /* @__PURE__ */ jsx(RTFIcon, { className: "icon inline-block mr-2 rtf" })
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/pdf-to-powerpoint"), className: "nav-link", children: [
      /* @__PURE__ */ jsx("bdi", { children: convert_from.pdf_to_powerpoint }),
      " ",
      /* @__PURE__ */ jsx(PiMicrosoftPowerpointLogo, { className: "icon inline-block mr-2 ppt" })
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/pdf-to-excel"), className: "nav-link", children: [
      /* @__PURE__ */ jsx("bdi", { children: convert_from.pdf_to_excel }),
      " ",
      /* @__PURE__ */ jsx(PiMicrosoftExcelLogo, { className: "icon inline-block mr-2 excel" })
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/pdf-to-html"), className: "nav-link", children: [
      /* @__PURE__ */ jsx("bdi", { children: convert_from.pdf_to_html }),
      " ",
      /* @__PURE__ */ jsx(CodeIcon, { className: "icon inline-block mr-2 html" })
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/pdf-to-epub"), className: "nav-link", children: [
      /* @__PURE__ */ jsx("bdi", { children: convert_from.pdf_to_epub }),
      " ",
      /* @__PURE__ */ jsx(EpubIcon, { className: "icon inline-block mr-2 epub" })
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/pdf-to-pdf-a"), className: "nav-link", children: [
      /* @__PURE__ */ jsx("bdi", { children: convert_from.pdf_to_pdf_a }),
      " ",
      /* @__PURE__ */ jsx(FaFilePdf, { className: "icon inline-block mr-2" })
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/pdf-to-text"), className: "nav-link", children: [
      /* @__PURE__ */ jsx("bdi", { children: convert_from.pdf_to_text }),
      " ",
      /* @__PURE__ */ jsx(DocumentTextIcon$1, { className: "icon inline-block mr-2 text" })
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/pdf-to-markdown"), className: "nav-link", children: [
      " ",
      /* @__PURE__ */ jsx("bdi", { children: convert_from.pdf_to_markdown }),
      " ",
      /* @__PURE__ */ jsx(MarkdownIcon, { className: "icon inline-block mr-2 web" }),
      " "
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/pdf-to-psd"), className: "nav-link", children: [
      " ",
      /* @__PURE__ */ jsx("bdi", { children: convert_from.pdf_to_psd }),
      " ",
      /* @__PURE__ */ jsx(PSDIcon, { className: "icon inline-block mr-2 web" }),
      " "
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/pdf-to-jpg"), className: "nav-link", children: [
      /* @__PURE__ */ jsx("bdi", { children: convert_from.pdf_to_jpg }),
      " ",
      /* @__PURE__ */ jsx(PhotographIcon, { className: "icon inline-block mr-2 img" })
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/pdf-to-png"), className: "nav-link", children: [
      /* @__PURE__ */ jsx("bdi", { children: convert_from.pdf_to_png }),
      " ",
      /* @__PURE__ */ jsx(TbFileTypePng, { className: "icon inline-block mr-2 png" }),
      " "
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/pdf-to-gif"), className: "nav-link", children: [
      /* @__PURE__ */ jsx("bdi", { children: convert_from.pdf_to_gif }),
      " ",
      /* @__PURE__ */ jsx(MdOutlineGif, { className: "icon inline-block mr-2 gif" }),
      " "
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/pdf-to-tiff"), className: "nav-link", children: [
      /* @__PURE__ */ jsx("bdi", { children: convert_from.pdf_to_tiff }),
      " ",
      /* @__PURE__ */ jsx(BsFiletypeTiff, { className: "icon inline-block mr-2 tiff" }),
      " "
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/pdf-to-bmp"), className: "nav-link", children: [
      /* @__PURE__ */ jsx("bdi", { children: convert_from.pdf_to_bmp }),
      " ",
      /* @__PURE__ */ jsx(BsFiletypeBmp, { className: "icon inline-block mr-2 bmp" }),
      " "
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/pdf-to-svg"), className: "nav-link", children: [
      /* @__PURE__ */ jsx("bdi", { children: convert_from.pdf_to_svg }),
      " ",
      /* @__PURE__ */ jsx(BsFiletypeSvg, { className: "icon inline-block mr-2 svg" }),
      " "
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/pdf-to-webp"), className: "nav-link", children: [
      /* @__PURE__ */ jsx("bdi", { children: convert_from.pdf_to_webp }),
      " ",
      /* @__PURE__ */ jsx(FaCamera, { className: "icon inline-block mr-2 webp" }),
      " "
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/pdf-to-heif-heic"), className: "nav-link", children: [
      /* @__PURE__ */ jsx("bdi", { children: convert_from.pdf_to_heif_heic }),
      " ",
      /* @__PURE__ */ jsx(BsFiletypeHeic, { className: "icon inline-block mr-2 heif-heic" }),
      " "
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsxs("a", { href: prependLangToUrl("/pdf-to-csv"), className: "nav-link", children: [
      /* @__PURE__ */ jsx("bdi", { children: convert_from.pdf_to_csv }),
      " ",
      /* @__PURE__ */ jsx(BsFiletypeCsv, { className: "icon inline-block mr-2 excel" }),
      " "
    ] }) })
  ] });
};

const useNavState = create((set) => ({
  path: "",
  showConvertMenu: false,
  showEditMenu: false,
  expandSideNav: false,
  convertToolsRef: null,
  editMenuRef: null,
  showLangMenu: false,
  showAllTools: false,
  userToken: null,
  userInfo: null,
  setPath: (path) => set({ path }),
  setShowConvertMenu: (showConvertMenu) => set({ showConvertMenu }),
  setShowEditMenu: (showEditMenu) => set({ showEditMenu }),
  setExpandSideNav: (expandSideNav) => set({ expandSideNav }),
  setConvertToolsRef: (convertToolsRef) => set({ convertToolsRef }),
  setEditMenuRef: (editMenuRef) => set({ editMenuRef }),
  setShowLangMenu: (showLangMenu) => set({ showLangMenu }),
  setShowAllTools(showAllTools) {
    set({
      showAllTools
    });
  },
  setUserInfo(userInfo) {
    set({ userInfo });
  }
}));

const ConvertTools = ({ content }) => {
  const { showConvertMenu } = useNavState();
  const convertToolsRef = useRef(null);
  const { setConvertToolsRef } = useNavState();
  useEffect(() => {
    setConvertToolsRef(convertToolsRef);
  }, [convertToolsRef.current]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `convert-dropdown drop-down-container${showConvertMenu ? " animate show" : " animate hide"}`,
      ref: convertToolsRef,
      children: [
        /* @__PURE__ */ jsx(
          ConvertTo,
          {
            convert_to: content.convert_to,
            title: content.convert_to_pdf
          }
        ),
        /* @__PURE__ */ jsx(
          ConvertFrom,
          {
            convert_from: content.convert_from,
            title: content.convert_from_pdf
          }
        )
      ]
    }
  );
};

function StampIcon(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "682.667",
      height: "682.667",
      version: "1",
      viewBox: "0 0 512 512",
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M2384 5106c-216-41-394-131-546-274-251-237-369-586-313-927 26-160 72-273 181-447 136-216 241-461 305-712 30-118 78-359 73-367-2-4-28-21-58-37-97-55-180-173-205-290-6-29-11-95-11-147v-94l-442-4c-361-3-452-6-493-19-278-85-459-267-542-543-11-36-17-117-20-286-5-225-4-238 16-277 32-62 78-82 191-82h90v-89c0-48 5-112 10-142C654 189 799 44 979 10c74-14 3088-14 3162 0 180 34 325 179 359 359 5 30 10 94 10 142v89h90c113 0 159 20 191 82 20 39 21 52 16 277-3 167-9 251-19 286-81 273-267 459-543 543-41 13-132 16-492 19l-443 4v94c0 52-5 118-11 147-25 117-108 235-205 290-30 16-56 33-58 37-6 10 47 257 78 363 56 189 125 354 269 638 156 309 179 360 203 475 102 482-157 985-608 1176-177 76-426 107-594 75zm324-302c286-58 509-275 583-565 20-76 18-268-3-349-10-38-74-176-152-330-228-451-304-654-376-1010l-27-135h-346l-28 140c-87 442-202 753-389 1046-74 115-118 210-141 299-20 79-17 278 5 360 104 384 488 623 874 544zm222-2714c60-31 80-78 80-190v-90h-900v90c0 110 20 159 78 189 35 19 58 20 370 21 314 0 335-1 372-20zm1211-590c180-34 325-179 359-359 5-30 10-96 10-147v-94H610v94c0 118 13 184 50 264 54 116 183 216 311 241 65 13 3103 13 3170 1zm69-990c0-112-20-159-80-190-39-20-56-20-1570-20s-1531 0-1570 20c-60 31-80 78-80 190v90h3300v-90z",
          transform: "matrix(.1 0 0 -.1 0 512)"
        }
      )
    }
  );
}

function NumbersIcon(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "682.667",
      height: "682.667",
      version: "1",
      viewBox: "0 0 512 512",
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M3151 5104c-108-29-217-128-258-234-16-40-18-100-21-567-1-288-5-523-7-523-7 0-631-110-652-115l-23-5v412c0 227-5 442-10 477-40 276-349 418-583 267-63-40-107-93-145-173l-27-58-5-530-5-530-130-22c-358-63-385-72-470-157-189-190-132-500 113-614 92-43 232-39 470 13l22 5v-796l-185-32c-102-18-210-42-240-53-144-54-238-190-239-349 0-94 13-140 64-218 44-68 130-133 204-154 59-16 176-12 294 10l102 19V769c0-264 4-427 11-461 25-119 103-217 211-268 232-110 501 36 538 291 5 35 10 270 10 521 0 426 1 457 18 462s644 116 656 116c3 0 6-190 6-423 0-475 3-502 68-597 179-263 575-206 679 99 14 39 17 123 20 553l4 506 72 12c270 45 441 80 489 102 29 14 75 47 102 74 220 219 104 585-205 644-59 12-62 11-291-27-87-14-160-24-163-22-3 4-7 537-5 761 0 23 5 28 33 33 458 80 490 90 575 169 213 199 125 556-158 640-73 22-122 20-286-9-76-14-144-25-151-25-8 0-12 114-16 443-3 350-7 450-18 482-51 143-151 235-287 264-68 14-114 13-181-5zm-281-2499v-395l-22-5c-13-2-153-27-313-55-159-28-302-53-318-56l-27-6 2 399 3 398 315 56c173 31 325 57 338 58l22 1v-395z",
          transform: "matrix(.1 0 0 -.1 0 512)"
        }
      )
    }
  );
}

function RemovePagesIcon(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "85.333",
      height: "85.333",
      version: "1",
      viewBox: "0 0 64 64",
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M70 590c-19-19-20-33-20-270C50 10 40 30 200 30c91 0 110 3 110 15s-18 15-103 15c-67 0-107 4-115 12-17 17-17 479 0 496 8 8 55 12 145 12h133v-30c0-38 32-70 70-70 30 0 30-1 30-55 0-42 3-55 15-55 21 0 21 139 0 180-27 52-57 60-235 60-147 0-162-2-180-20zm388-58c13-21 13-22-10-22-13 0-29 5-36 12s-12 23-12 36c0 23 1 23 22 10 12-8 28-24 36-36z",
            transform: "matrix(.1 0 0 -.1 0 64)"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M406 281c-45-30-66-70-66-126s21-96 66-126c39-25 119-25 158 0 45 30 66 70 66 126 0 88-57 145-145 145-32 0-60-7-79-19zm160-45c29-29 34-41 34-81s-5-52-34-81-41-34-81-34-52 5-81 34-34 41-34 81 5 52 34 81 41 34 81 34 52-5 81-34z",
            transform: "matrix(.1 0 0 -.1 0 64)"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M430 155c0-12 13-15 55-15s55 3 55 15-13 15-55 15-55-3-55-15z",
            transform: "matrix(.1 0 0 -.1 0 64)"
          }
        )
      ]
    }
  );
}

const ResizeFileIcon = (props) => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "682.667",
      height: "682.667",
      version: "1",
      viewBox: "0 0 512 512",
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M1555 4895c-37-20-881-860-901-897-22-42-21-2853 1-2947 35-148 148-289 285-353 41-20 99-41 128-47 37-8 428-11 1280-11 1359 0 1292-3 1423 66 112 59 205 166 252 289l22 60 3 1690c1 1160-1 1706-8 1741-37 176-182 336-359 397l-66 22-1015 3c-903 2-1018 1-1045-13zm300-319c64-27 66-39 63-394l-3-317-28-57c-30-62-83-115-149-150-42-22-51-23-376-26l-333-3-36 36c-32 32-35 39-30 77 3 26 15 51 31 67l26 26 308 5c229 4 313 8 330 18 47 27 52 59 52 369 0 318 0 321 64 349 39 17 40 17 81 0zm1396-1072c56-28 59-50 59-409 0-349-3-375-51-409-13-9-39-16-59-16s-46 7-59 16c-44 31-51 69-51 276v193l-665-665c-366-366-665-668-665-672 0-5 93-8 206-8h206l35-35c32-32 35-40 30-77-3-26-15-51-31-67l-26-26-361-3-360-3-35 35-34 34v724l29 29c41 41 98 41 143 0l33-29 5-211 5-211 670 670 670 670h-210c-235 0-245 2-272 67-19 47-3 97 41 124 29 18 53 19 374 19 292 0 348-2 373-16z",
            transform: "matrix(.1 0 0 -.1 0 512)"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M4318 4463c-15-9-31-24-35-33-5-8-10-856-13-1885l-5-1870-26-56c-33-69-89-127-155-160l-49-24-1445-5c-1135-4-1450-8-1467-18-52-29-70-104-37-151 38-53-25-51 1476-51 854 0 1420 4 1463 10 47 7 98 24 153 51 135 66 229 174 278 319 18 53 19 125 19 1942v1888l-26 26c-34 33-94 41-131 17z",
            transform: "matrix(.1 0 0 -.1 0 512)"
          }
        )
      ]
    }
  );
};

function OrganizePDFIcon(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "682.667",
      height: "682.667",
      version: "1",
      viewBox: "0 0 512 512",
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M2390 4953c-300-23-589-100-857-228-254-121-466-270-657-459-203-202-340-393-467-651-173-354-243-658-243-1055 0-238 13-356 65-569 56-229 158-476 280-678C878 705 1517 287 2235 185c371-53 789-9 1142 120 144 53 383 173 503 253 362 242 637 555 825 937 86 175 134 301 174 458 80 310 99 628 56 932-96 688-478 1293-1060 1679-118 78-359 200-498 251-299 109-676 162-987 138zm408-134c790-85 1470-568 1814-1287 105-219 179-482 209-742 17-151 7-452-21-610-126-720-587-1338-1234-1654-222-109-419-172-664-213-169-28-544-25-717 6-965 172-1698 903-1865 1861-27 158-37 441-21 601 82 791 556 1472 1266 1819 226 111 498 191 740 218 114 13 379 14 493 1z",
            transform: "matrix(.1 0 0 -.1 0 512)"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M2067 4306c-50-19-76-42-98-91-17-37-19-80-19-670s2-633 19-670c42-92 81-104 334-105h197v-242c0-276-4-294-78-360-43-39-93-58-154-58-39 0-41 2-52 72l-7 37-153 3c-146 3-154 4-193 30-64 42-73 73-73 241 0 129-2 146-17 152-42 16-263 25-446 19-220-8-237-12-284-84l-23-34 2-660 3-661 24-34c13-18 42-42 65-52 38-17 74-19 510-19 457 0 471 1 513 21 29 14 52 35 68 63l25 43v753h43c49 0 138 24 176 48 14 8 45 34 69 56l42 40 43-41c56-55 142-94 223-101l64-5v-750l25-43c16-28 39-49 68-63 42-20 57-21 512-21s470 1 512 21c23 11 53 35 65 52l23 32v470c0 259-3 482-8 498l-7 27h-141c-153 0-186 8-231 56-42 45-48 75-48 224 0 121-2 139-17 146-10 5-158 10-328 12l-310 3-34-23c-74-50-75-55-81-301l-5-222-32-3c-81-8-177 52-214 133-16 35-19 70-19 283v242h193c206 0 250 7 296 46 62 52 64 65 58 550-3 242-9 454-12 472l-7 32h-139c-144 0-190 9-232 48-43 39-51 72-57 226l-5 150-30 9c-16 5-154 11-305 13-222 4-282 2-313-10z",
            transform: "matrix(.1 0 0 -.1 0 512)"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M2840 4132c0-142 0-142 143-142 59 0 107 3 107 8 0 4-23 37-51 74-43 58-169 168-191 168-5 0-8-49-8-108zM1900 2487c0-146 1-147 141-147 61 0 109 4 109 9 0 24-103 141-166 188-38 29-72 53-76 53-5 0-8-46-8-103zM3780 2478c0-75 4-118 12-126s50-12 125-12h112l-21 38c-26 45-152 170-196 195l-32 18v-113z",
            transform: "matrix(.1 0 0 -.1 0 512)"
          }
        )
      ]
    }
  );
}

// THIS FILE IS AUTO GENERATED
function LuLayoutDashboard (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"width":"7","height":"9","x":"3","y":"3","rx":"1"},"child":[]},{"tag":"rect","attr":{"width":"7","height":"5","x":"14","y":"3","rx":"1"},"child":[]},{"tag":"rect","attr":{"width":"7","height":"9","x":"14","y":"12","rx":"1"},"child":[]},{"tag":"rect","attr":{"width":"7","height":"5","x":"3","y":"16","rx":"1"},"child":[]}]})(props);
}

function CropIcon(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "682.667",
      height: "682.667",
      version: "1",
      viewBox: "0 0 512 512",
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M2125 4723c-60-8-141-36-206-69-57-30-125-94-489-458-243-243-437-446-456-476-18-29-43-80-56-114l-23-61-3-1480-2-1479 26-54c32-64 98-116 167-132 67-14 2887-14 2954 0 69 15 135 67 167 131l26 53v1973c0 1749-2 1978-15 2010-25 59-59 96-116 128l-54 30-945 1c-520 1-958-1-975-3zm1934-103c22-11 50-36 62-57l24-38V595l-22-35c-12-20-40-46-61-58l-40-22H1098l-40 22c-21 12-49 38-61 58l-22 35-3 1420c-3 1569-7 1468 61 1532 54 51 73 53 431 53 197 0 346 4 368 10 57 16 120 70 153 130l30 55 5 365c3 251 9 371 17 385 17 30 65 72 93 84 16 6 365 10 958 10 909 1 934 0 971-19z",
            transform: "matrix(.1 0 0 -.1 0 512)"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M2040 3202c-59-31-80-86-80-213v-107l-117-3c-133-4-171-19-207-81-27-44-26-119 0-156 46-62 76-72 205-72h119v-383c0-380 0-384 23-427 42-81 38-80 479-80h386l4-124c3-135 10-154 72-200 38-29 124-29 162 0 62 46 69 65 72 200l4 124h117c129 0 159 10 205 72 27 38 27 113-1 159-38 60-73 73-205 77l-117 4-3 392-3 391-23 33c-48 67-45 67-474 70l-388 3v107c0 92-3 114-22 152-27 51-74 80-133 80-22 0-56-8-75-18zm890-571c6-13 10-144 10-360 0-295-2-342-16-355-13-14-60-16-364-16s-351 2-364 16c-14 13-16 60-16 355 0 216 4 347 10 360 10 18 25 19 370 19s360-1 370-19zM3822 2008c-8-8-12-58-12-160 0-137 1-148 20-158 14-8 26-8 40 0 19 10 20 21 20 158 0 151-5 172-40 172-9 0-21-5-28-12zM3822 1528c-9-9-12-99-12-345V850h-383c-359 0-385-1-400-18-21-23-21-36-1-56 13-14 66-16 428-16 307 0 415 3 424 12s12 107 12 378c0 377-1 390-40 390-9 0-21-5-28-12z",
            transform: "matrix(.1 0 0 -.1 0 512)"
          }
        )
      ]
    }
  );
}

// THIS FILE IS AUTO GENERATED
function LiaFileSignatureSolid (props) {
  return GenIcon({"attr":{"viewBox":"0 0 32 32"},"child":[{"tag":"path","attr":{"d":"M 6 3 L 6 29 L 26 29 L 26 9.5996094 L 25.699219 9.3007812 L 19.699219 3.3007812 L 19.400391 3 L 6 3 z M 8 5 L 18 5 L 18 11 L 24 11 L 24 27 L 8 27 L 8 5 z M 20 6.4003906 L 22.599609 9 L 20 9 L 20 6.4003906 z M 10 13 L 10 15 L 22 15 L 22 13 L 10 13 z M 13.5 16 C 12.6 16 11.9 16.600781 11.5 17.300781 C 11.1 18.000781 11 18.900391 11 19.900391 C 11 20.500391 11.200781 21.099219 11.300781 21.699219 C 10.900781 21.799219 10.5 22.099609 10 22.099609 L 10 24.099609 C 10.7 24.099609 11.4 24.000781 12 23.800781 C 12.1 24.000781 12.100781 24.100781 12.300781 24.300781 C 12.700781 24.700781 13.3 25 14 25 C 15.6 25 16.600781 23.899609 17.300781 23.099609 C 17.400781 22.899609 17.499609 22.799219 17.599609 22.699219 C 17.599609 22.799219 17.599219 22.9 17.699219 23 C 17.799219 23.2 17.899609 23.399609 18.099609 23.599609 C 18.299609 23.799609 18.7 24 19 24 C 19.6 24 19.999219 23.600391 20.199219 23.400391 C 20.399219 23.200391 20.600781 22.899219 20.800781 22.699219 C 21.200781 22.299219 21.500391 22 21.900391 22 L 21.900391 20 C 20.700391 20 19.800781 20.700781 19.300781 21.300781 C 19.300781 21.200781 19.299219 21.1 19.199219 21 C 19.099219 20.8 19.000781 20.600781 18.800781 20.300781 C 18.600781 20.000781 18.3 20 18 20 C 17.2 20 16.899609 20.500781 16.599609 20.800781 C 16.299609 21.100781 16.000781 21.500391 15.800781 21.900391 C 15.200781 22.600391 14.8 23 14 23 C 13.9 23 13.900781 22.900391 13.800781 22.900391 C 13.900781 22.900391 13.9 22.800781 14 22.800781 C 15.1 21.900781 16 20.699609 16 19.099609 C 16 18.299609 15.800391 17.6 15.400391 17 C 15.000391 16.4 14.3 16 13.5 16 z M 13.400391 18 C 13.700391 18 13.700781 17.999219 13.800781 18.199219 C 13.900781 18.399219 14 18.699219 14 19.199219 C 14 19.799219 13.699219 20.400391 13.199219 20.900391 C 13.199219 20.600391 13 20.2 13 20 C 13 19.2 13.100781 18.600781 13.300781 18.300781 C 13.400781 18.100781 13.400391 18 13.400391 18 z"},"child":[]}]})(props);
}

const EditPDFIcon = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "682.667",
    height: "682.667",
    version: "1",
    viewBox: "0 0 512 512",
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M36.1 1.1C18.9 4.5 4.3 19.3 1 36.9-.4 44.3-.4 467.7 1 475.1c3.4 18 17.9 32.5 35.9 35.9 7.4 1.4 308.8 1.4 316.2 0 18-3.4 32.5-17.9 35.9-35.9.6-3.3 1-31.3 1-73.5v-68l57.3-57.6c53-53.2 57.5-58 60.1-63.8 5.8-13.3 5.7-25.9-.3-38.8-8-17-28.3-27.8-46.6-24.7-14 2.4-17.4 4.9-45.2 32.6L390 206.4v-61.1c0-36.6-.4-63.2-1-66.4-2.3-12.5-5.2-16.3-33.4-44.5S323.6 3.3 311.1 1c-6.7-1.2-268.6-1.2-275 .1m233.9 68c0 38.7 0 39.2 2.2 43.1 4.4 7.8 4.5 7.8 48.8 7.8h39v116.5l-34 34-34 34-11.5 34.6c-6.3 19-11.5 35.9-11.5 37.5.1 6.9 7.6 14.4 14.5 14.4 4.8 0 71.4-22.6 74.2-25.1l2.3-2.2v53.2c0 51.3-.1 53.3-2 57.1-1.3 2.6-3.4 4.7-6 6-3.9 2-5.6 2-157 2-148.3 0-153.2-.1-156.8-1.9-2.2-1.1-4.6-3.5-6-5.9l-2.2-4V41.5l2.4-3.9c4.9-8.1-5.1-7.5 123.4-7.6H270zM307.7 31c3.7 1.4 49.1 46.6 50.9 50.7.8 1.8 1.4 4.4 1.4 5.8V90h-60V30h2.4c1.4 0 3.7.5 5.3 1M474 180c4.3 2.2 8 8 8 12.6 0 4.8-3.7 10.7-11.7 18.6l-7.8 7.8-10.8-10.8-10.7-10.7 8.2-8.2c4.6-4.5 9.7-8.9 11.3-9.7 4.1-2.2 8.8-2 13.5.4m-69 96.5-36 36-10.7-10.8-10.8-10.7 36-36 36-36 10.7 10.7 10.8 10.8zm-68 47 10.5 10.5-4 3.9c-3.4 3.3-6.2 4.6-19.4 9-8.5 2.8-15.6 4.9-15.8 4.8-.1-.2 2-7.3 4.8-15.8 4.2-12.6 5.8-16.1 8.7-19.2 2-2 3.9-3.7 4.2-3.7s5.2 4.7 11 10.5" }),
      /* @__PURE__ */ jsx("path", { d: "M68.1 151.9c-4.2 2.2-8.1 8.5-8.1 13 0 4.8 3.8 11 8.2 13.2 3.6 1.8 7.7 1.9 111.8 1.9 106.3 0 108.1 0 112-2 4.5-2.3 8-8 8-13s-3.5-10.7-8-13c-3.9-2-5.6-2-112.2-2-102.3.1-108.5.2-111.7 1.9M68.1 211.9c-4.2 2.2-8.1 8.5-8.1 13 0 4.8 3.8 11 8.2 13.2 3.6 1.8 7.1 1.9 81.8 1.9 76.3 0 78.2 0 82-2 4.5-2.3 8-8 8-13s-3.5-10.7-8-13c-3.8-2-5.7-2-82.2-2-73.5.1-78.5.2-81.7 1.9M68.1 271.9c-4.2 2.2-8.1 8.5-8.1 13 0 4.8 3.8 11 8.2 13.2 3.6 1.8 7.1 1.9 81.8 1.9 76.3 0 78.2 0 82-2 4.5-2.3 8-8 8-13s-3.5-10.7-8-13c-3.8-2-5.7-2-82.2-2-73.5.1-78.5.2-81.7 1.9M68.1 331.9c-4.2 2.2-8.1 8.5-8.1 13 0 4.8 3.8 11 8.2 13.2 3.6 1.8 7.1 1.9 81.8 1.9 76.3 0 78.2 0 82-2 4.5-2.3 8-8 8-13s-3.5-10.7-8-13c-3.8-2-5.7-2-82.2-2-73.5.1-78.5.2-81.7 1.9M188.1 423.9c-4.2 2.2-8.1 8.5-8.1 13 0 4.8 3.8 11 8.2 13.2 3.5 1.8 6.6 1.9 51.8 1.9 46.2 0 48.2-.1 52-2 4.5-2.3 8-8 8-13s-3.5-10.7-8-13c-3.8-1.9-5.7-2-52.2-2-44.6.1-48.6.2-51.7 1.9" })
    ]
  }
);

const {
  DocumentTextIcon,
  LockOpenIcon,
  RefreshIcon,
  DocumentAddIcon,
  LockClosedIcon
} = pkg;
const EditToolsList = ({ content, forAll }) => {
  const prependLangToUrl = usePrependLangToUrl();
  return /* @__PURE__ */ jsxs("ul", { className: "nav-list convert-tools vertical-list", children: [
    forAll ? /* @__PURE__ */ jsx("div", { className: "_h6", children: content.title }) : null,
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsx("a", { href: prependLangToUrl("/edit-pdf"), className: "nav-link", children: /* @__PURE__ */ jsxs("bdi", { children: [
      /* @__PURE__ */ jsx(EditPDFIcon, { className: "icon edit" }),
      " ",
      content.edit
    ] }) }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsx("a", { href: prependLangToUrl("/create-pdf"), className: "nav-link", children: /* @__PURE__ */ jsxs("bdi", { children: [
      /* @__PURE__ */ jsx(DocumentAddIcon, { className: "icon read" }),
      " ",
      content.create
    ] }) }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsx("a", { href: prependLangToUrl("/read-pdf"), className: "nav-link", children: /* @__PURE__ */ jsxs("bdi", { children: [
      /* @__PURE__ */ jsx(DocumentTextIcon, { className: "icon read" }),
      " ",
      content.read
    ] }) }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsx("a", { href: prependLangToUrl("/remove-pages"), className: "nav-link", children: /* @__PURE__ */ jsxs("bdi", { children: [
      /* @__PURE__ */ jsx(RemovePagesIcon, { className: "icon remove" }),
      " ",
      content.remove
    ] }) }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsx("a", { href: prependLangToUrl("/sign-pdf"), className: "nav-link", children: /* @__PURE__ */ jsxs("bdi", { children: [
      /* @__PURE__ */ jsx(LiaFileSignatureSolid, { className: "icon sign" }),
      " ",
      content.sign
    ] }) }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsx("a", { href: prependLangToUrl("/crop-pdf"), className: "nav-link", children: /* @__PURE__ */ jsxs("bdi", { children: [
      /* @__PURE__ */ jsx(CropIcon, { className: "icon crop" }),
      " ",
      content.crop
    ] }) }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsx("a", { href: prependLangToUrl("/resize-pdf"), className: "nav-link", children: /* @__PURE__ */ jsxs("bdi", { children: [
      /* @__PURE__ */ jsx(ResizeFileIcon, { className: "icon resize" }),
      " ",
      content.resize
    ] }) }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsx("a", { href: prependLangToUrl("/organize-pdf"), className: "nav-link", children: /* @__PURE__ */ jsxs("bdi", { children: [
      /* @__PURE__ */ jsx(OrganizePDFIcon, { className: "icon organize" }),
      " ",
      content.organize
    ] }) }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsx("a", { href: prependLangToUrl("/merge-pages"), className: "nav-link", children: /* @__PURE__ */ jsxs("bdi", { children: [
      /* @__PURE__ */ jsx(LuLayoutDashboard, { className: "icon merge" }),
      " ",
      content.merge
    ] }) }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsx("a", { href: prependLangToUrl("/add-watermark"), className: "nav-link", children: /* @__PURE__ */ jsxs("bdi", { children: [
      /* @__PURE__ */ jsx(StampIcon, { className: "icon watermark" }),
      " ",
      content.watermark
    ] }) }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsx("a", { href: prependLangToUrl("/number-pdf"), className: "nav-link", children: /* @__PURE__ */ jsxs("bdi", { children: [
      /* @__PURE__ */ jsx(NumbersIcon, { className: "icon number" }),
      " ",
      content.number
    ] }) }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsx("a", { href: prependLangToUrl("/rotate-pdf"), className: "nav-link", children: /* @__PURE__ */ jsxs("bdi", { children: [
      /* @__PURE__ */ jsx(RefreshIcon, { className: "icon rotate" }),
      " ",
      content.rotate
    ] }) }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsx("a", { href: prependLangToUrl("/lock-pdf"), className: "nav-link", children: /* @__PURE__ */ jsxs("bdi", { children: [
      /* @__PURE__ */ jsx(LockClosedIcon, { className: "icon lock" }),
      " ",
      content.lock
    ] }) }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsx("a", { href: prependLangToUrl("/unlock-pdf"), className: "nav-link", children: /* @__PURE__ */ jsxs("bdi", { children: [
      /* @__PURE__ */ jsx(LockOpenIcon, { className: "icon unlock" }),
      " ",
      content.unlock
    ] }) }) })
  ] });
};

const EditTools = ({ content }) => {
  const { showEditMenu, setEditMenuRef } = useNavState();
  const editMenuRef = useRef(null);
  useEffect(() => {
    setEditMenuRef(editMenuRef);
  }, [editMenuRef.current]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `edit-tools drop-down-container${showEditMenu ? " animate show" : " animate hide"}`,
      ref: editMenuRef,
      children: /* @__PURE__ */ jsx(EditToolsList, { content })
    }
  );
};

// THIS FILE IS AUTO GENERATED
function RiCharacterRecognitionLine (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M4.99805 15V19H8.99805V21H2.99805V15H4.99805ZM20.998 15V21H14.998V19H18.998V15H20.998ZM12.997 6L17.397 17H15.242L14.041 14H9.95105L8.75205 17H6.59805L10.997 6H12.997ZM11.997 8.88517L10.75 12H13.242L11.997 8.88517ZM8.99805 3V5H4.99805V9H2.99805V3H8.99805ZM20.998 3V9H18.998V5H14.998V3H20.998Z"},"child":[]}]})(props);
}

const AllTools = ({ content }) => {
  const { showAllTools } = useNavState();
  const prependLangToUrl = usePrependLangToUrl();
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `all-tools drop-down-container${showAllTools ? " animate show" : " animate hide"}`,
      children: [
        /* @__PURE__ */ jsx(
          ConvertTo,
          {
            convert_to: content.convert_to,
            title: content.convert_to_pdf
          }
        ),
        /* @__PURE__ */ jsx(
          ConvertFrom,
          {
            convert_from: content.convert_from,
            title: content.convert_from_pdf
          }
        ),
        /* @__PURE__ */ jsx(EditToolsList, { content: content.edit, forAll: true }),
        /* @__PURE__ */ jsxs("ul", { className: "nav-list convert-tools vertical-list", children: [
          /* @__PURE__ */ jsxs("div", { className: "_h6", children: [
            content.ai.title,
            " ",
            /* @__PURE__ */ jsx("div", { className: "ai new", children: content.ai.new })
          ] }),
          /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsx("a", { href: prependLangToUrl("/translate-pdf"), className: "nav-link", children: /* @__PURE__ */ jsxs("bdi", { children: [
            /* @__PURE__ */ jsx(MdOutlineTranslate, { className: "icon translate" }),
            " ",
            content.ai.translate
          ] }) }) }),
          /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsx("a", { href: prependLangToUrl("/ocr-pdf"), className: "nav-link", children: /* @__PURE__ */ jsxs("bdi", { children: [
            /* @__PURE__ */ jsx(RiCharacterRecognitionLine, { className: "icon ocr" }),
            " ",
            content.ai.ocr
          ] }) }) })
        ] })
      ]
    }
  );
};

const {
  ChevronUpIcon
} = pkg;
const NavList = ({
  content,
  isSideBar = false
}) => {
  const {
    showConvertMenu,
    setShowConvertMenu,
    showEditMenu,
    setShowEditMenu,
    convertToolsRef,
    editMenuRef,
    setShowLangMenu,
    showAllTools,
    setShowAllTools
  } = useNavState();
  const handleKeyUp = (e) => {
    if (e.key === "Escape") {
      setShowConvertMenu(false);
      setShowEditMenu(false);
      setShowLangMenu(false);
    }
  };
  const prependLangToUrl = usePrependLangToUrl();
  useEffect(() => {
    document.addEventListener("keyup", handleKeyUp);
    if (screen.width <= 768) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      if (screen.width <= 768) {
        document.removeEventListener("mousedown", handleClickOutside);
      }
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  const handleClickOutside = useCallback(
    (event) => {
      if (showConvertMenu && !convertToolsRef?.current?.contains(event.target)) {
        setShowConvertMenu(false);
      }
      if (showEditMenu && !editMenuRef?.current?.contains(event.target)) {
        setShowEditMenu(false);
      }
    },
    [showConvertMenu, showEditMenu]
  );
  return /* @__PURE__ */ jsxs("ul", { className: `nav-list${!isSideBar ? " hide-xs" : ""}`, children: [
    /* @__PURE__ */ jsxs("li", { className: "nav-list-item", children: [
      /* @__PURE__ */ jsxs("span", { className: "nav-link dropdown-toggler", onClick: () => {
        setShowAllTools(!showAllTools);
      }, children: [
        content.tools,
        " ",
        " ",
        /* @__PURE__ */ jsx(
          ChevronUpIcon,
          {
            className: `icon chevron ${showAllTools ? "" : "flip"}`
          }
        )
      ] }),
      /* @__PURE__ */ jsx(AllTools, { content })
    ] }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsx("a", { href: prependLangToUrl("/compress-pdf"), className: "nav-link", children: content.compress }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsx("a", { href: prependLangToUrl("/merge-pdf"), className: "nav-link", children: content.merge }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsx("a", { href: prependLangToUrl("/split-pdf"), className: "nav-link", children: content.split }) }),
    /* @__PURE__ */ jsxs("li", { className: "nav-list-item subnav-container", children: [
      /* @__PURE__ */ jsxs(
        "span",
        {
          className: "nav-link dropdown-toggler",
          onClick: (e) => {
            e.preventDefault();
            setShowConvertMenu(!showConvertMenu);
          },
          onBlur: (e) => {
            if (showConvertMenu && !convertToolsRef?.current?.contains(e.relatedTarget)) {
              if (screen.width >= 768) {
                setShowConvertMenu(false);
              }
            }
          },
          children: [
            content.convert,
            " ",
            /* @__PURE__ */ jsx(
              ChevronUpIcon,
              {
                className: `icon chevron ${showConvertMenu ? "" : "flip"}`
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx(ConvertTools, { content })
    ] }),
    /* @__PURE__ */ jsxs("li", { className: "nav-list-item subnav-container", children: [
      /* @__PURE__ */ jsxs(
        "span",
        {
          className: "nav-link dropdown-toggler",
          onClick: (e) => {
            e.preventDefault();
            setShowEditMenu(!showEditMenu);
          },
          onBlur: (e) => {
            if (showEditMenu && !editMenuRef?.current?.contains(e.relatedTarget)) {
              if (screen.width >= 768) {
                setShowEditMenu(false);
              }
            }
          },
          children: [
            content.edit.title,
            " ",
            /* @__PURE__ */ jsx(
              ChevronUpIcon,
              {
                className: `icon chevron ${showEditMenu ? "" : "flip"}`
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx(EditTools, { content: content.edit })
    ] }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link", href: "/blog/", children: content.blog }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link", href: prependLangToUrl("/pricing/"), children: content.pricing }) })
  ] });
};

function Logo({
  width = "629.333",
  height = "337.333"
}) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width,
      height,
      version: "1",
      viewBox: "0 0 472 253",
      className: "logo",
      children: /* @__PURE__ */ jsxs("g", { fill: "#fc271c", children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M361 2338c-65-14-126-79-140-150-8-38-11-313-9-938 3-883 3-885 24-925 27-49 49-70 97-90 32-13 131-15 752-15h715v439l-627 3c-701 3-662-1-720 75l-28 36-3 261c-2 143 0 271 3 283 7 30 61 90 96 109 24 12 127 14 654 14h625v455l-211-3c-149-2-215 1-225 9-11 9-14 55-14 230v219l-472-1c-266-1-492-5-517-11zm287-142c47-24 74-62 79-109 5-37 14-53 54-93l49-48 70 69c39 39 73 80 76 92 4 13 30 37 62 58l56 35 23-22c13-12 23-25 23-29 0-21-63-105-86-115-15-6-57-42-95-80l-69-68 47-48c40-40 53-48 85-48 71 0 136-86 121-161-7-37-22-37-58 1l-29 30-28-27-28-27 37-38c31-32 34-38 19-44-9-4-40-4-67-2-68 7-109 46-116 111-4 33-13 53-34 73l-29 28-113-112c-132-132-143-135-206-67-22 24-41 52-41 61 0 10 52 70 115 134l115 116-32 31c-21 19-48 33-73 36-76 12-130 78-121 150 2 21 7 41 10 45 4 3 22-10 41-28l35-34 25 24c32 30 32 35-7 71-28 25-30 31-18 39 22 14 77 12 108-4z",
            transform: "matrix(.1 0 0 -.1 0 253)"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M598 2157c30-32 28-48-11-85-39-38-53-39-84-10l-23 21v-27c0-44 58-96 107-96 32 0 46-7 78-40 22-22 44-39 50-36 5 2 17 0 26-5 11-6 24 0 44 21l28 29-54 52c-35 34-54 61-55 78-1 14-2 34-3 43-2 30-60 78-94 78h-30l21-23zM1042 2142c-46-30-60-55-42-77 23-28 56-17 84 26 47 70 26 95-42 51zM870 1955c-84-85-93-96-79-110 13-14 25-5 113 84 89 91 107 121 73 121-7 0-55-43-107-95zM847 1842c-32-33-27-73 13-117 18-20 29-45 33-74 7-54 46-98 97-107l35-7-22 25c-32 34-29 61 12 97 42 37 46 37 70 11 35-39 48-14 20 40-18 35-62 60-106 60-26 0-42 10-80 49l-47 49-25-26zM597 1742c-64-64-117-122-117-128 0-5 18-28 40-49l40-39 126 125 126 126-37 42c-21 22-42 41-49 41-6 0-64-53-129-118zm133 37c0-14-151-161-158-154-5 5 146 165 155 165 2 0 3-5 3-11zM1400 2122v-192h185c102 0 185 2 185 5s-83 89-185 192l-185 186v-191zM550 1392c-32-14-60-39-75-68-12-24-15-74-15-274 0-225 2-248 20-277 44-72-3-68 760-71 537-2 695 0 725 10 22 8 51 29 69 51l31 39v246c0 239-1 248-23 283-44 72-10 69-784 68-381 0-700-3-708-7zm454-165c15-10 35-35 43-55 13-32 14-42 2-76-21-60-54-78-149-84l-80-5v-73c0-70-1-74-24-80-14-3-30-3-35 1-13 7-16 377-3 389 4 4 55 6 113 4 80-2 112-7 133-21zm309 14c79-19 121-83 121-186 0-56-5-79-24-114-38-68-71-82-192-84l-103-2-3 198-2 197h82c46 0 100-4 121-9zm455-18l-3-28-102-3-103-3v-98l88-3c87-3 87-3 90-30l3-28h-180l-3-87c-3-86-3-88-28-88h-25l-3 198-2 197h271l-3-27z",
            transform: "matrix(.1 0 0 -.1 0 253)"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M820 1130v-60h69c77 0 101 13 101 56 0 54-14 64-95 64h-75v-60z",
            transform: "matrix(.1 0 0 -.1 0 253)"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M1170 1050V910h54c110 0 147 35 147 138 1 111-28 142-133 142h-68v-140z",
            transform: "matrix(.1 0 0 -.1 0 253)"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "black",
            d: "M3207 1264c-4-4-7-18-7-31 0-17 6-23 21-23 16 0 20 5 17 27-3 26-18 39-31 27zM2213 1128c4-66 7-154 7-195v-73h130c109 0 130 2 130 15 0 12-19 15-115 15h-115v150h95c78 0 95 3 95 15s-17 15-95 15h-95v150h110c91 0 110 3 110 15 0 13-21 15-132 15h-131l6-122zM2593 1134c-96-48-98-210-4-259 43-22 83-19 125 10l36 24v-84c0-78 2-85 20-85 19 0 20 7 20 205 0 176-2 205-15 205-9 0-15-9-15-25v-26l-37 26c-43 29-84 31-130 9zm134-46c19-18 23-32 23-84 0-56-3-65-27-83-39-31-70-36-110-17-41 20-68 74-59 121 6 31 45 76 76 88 25 10 73-2 97-25zM2870 1050c0-111 14-161 51-180 34-18 97-6 130 26 30 29 28 30 44-21 2-8 12-15 21-15 12 0 15 6 10 23-3 12-6 77-6 145 0 115-1 122-20 122s-20-7-20-93c0-102-9-126-60-152-40-21-57-19-85 10-23 23-25 31-25 130 0 98-1 105-20 105s-20-7-20-100zM3200 1005c0-138 1-145 20-145s20 7 20 145-1 145-20 145-20-7-20-145zM3320 945c0-198 1-205 20-205 18 0 20 7 20 85v84l38-25c77-53 180-4 197 94 9 54-21 124-67 152-42 26-109 22-142-9-29-27-36-27-36 4 0 16-6 25-15 25-13 0-15-29-15-205zm175 161c61-26 82-102 45-164-36-58-102-65-155-16-23 22-26 30-23 86 3 58 5 64 37 85 40 27 50 28 96 9zM3705 1138c-30-16-45-39-45-69 0-38 21-56 88-75 69-20 82-29 82-60 0-45-79-58-142-24-31 16-37 17-42 4-4-11 7-21 41-36 62-27 128-21 160 17 47 54 21 96-77 125-52 15-71 26-76 42-15 47 65 74 125 43 27-13 41-11 41 6 0 16-59 39-97 39-21 0-47-6-58-12z",
            transform: "matrix(.1 0 0 -.1 0 253)"
          }
        )
      ] })
    }
  );
}

const { MenuIcon } = pkg;
const SideBarToggler = ({
  lang,
  sidebar = { menu: "Menu", home: "Home" }
}) => {
  const { expandSideNav, setExpandSideNav } = useNavState();
  const languageToken = getLanguage();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "sidebar-toggler",
        onClick: () => {
          setExpandSideNav(!expandSideNav);
        },
        title: sidebar.menu,
        type: "button",
        children: /* @__PURE__ */ jsx(MenuIcon, { className: "icon menu" })
      }
    ),
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: `/${lang ? lang + "/" : languageToken ? languageToken + "/" : ""}`,
        className: "home",
        children: [
          /* @__PURE__ */ jsx(Logo, { width: 100, height: 80 }),
          sidebar.home
        ]
      }
    )
  ] });
};

const SideBar = ({ content }) => {
  const { expandSideNav, setExpandSideNav } = useNavState();
  const sideBarRef = useRef(null);
  const overlay = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    setIsSmallScreen(window.innerWidth < 768);
    const handleClickOutside = (event) => {
      if (expandSideNav && !sideBarRef?.current?.contains(event.target) || event.target === overlay.current) {
        setExpandSideNav(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expandSideNav, setExpandSideNav]);
  if (!isSmallScreen) {
    return null;
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `sidebar${expandSideNav ? " expanded" : ""}`,
      ref: sideBarRef,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "content", children: [
          /* @__PURE__ */ jsx("div", { className: "toggler-wrapper", children: /* @__PURE__ */ jsx(SideBarToggler, { sidebar: content.sidebar }) }),
          /* @__PURE__ */ jsx(NavList, { content, isSideBar: true })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "navbar-overlay", ref: overlay })
      ]
    }
  );
};

const nav_content$5 = {
  merge: "Merge",
  split: "Split",
  tools: "Tools",
  pricing: "Pricing",
  compress: "Compress",
  convert_pdf: "Convert PDF",
  convert: "Convert",
  convert_to_pdf: "Convert to PDF",
  blog: "Blog",
  edit: {
    title: "Edit",
    read: "Read PDF",
    edit: "Edit PDF",
    create: "Create PDF",
    number: "Number PDF",
    rotate: "Rotate PDF",
    lock: "Lock PDF",
    unlock: "Unlock PDF",
    watermark: "Watermark PDF",
    remove: "Remove Pages",
    resize: "Resize Pages",
    organize: "Organize Pages",
    merge: "Merge Pages",
    crop: "Crop Pages",
    sign: "Sign PDF"
  },
  convert_from: {
    pdf_to_jpg: "PDF to JPG",
    pdf_to_word: "PDF to WORD",
    pdf_to_powerpoint: "PDF to POWERPOINT",
    pdf_to_excel: "PDF to EXCEL",
    pdf_to_html: "PDF to HTML",
    pdf_to_epub: "PDF to EPUB",
    pdf_to_markdown: "PDF to Markdown",
    pdf_to_pdf_a: "PDF to PDF/A",
    pdf_to_psd: "PDF to PSD",
    pdf_to_png: "PDF to PNG",
    pdf_to_gif: "PDF to GIF",
    pdf_to_tiff: "PDF to TIFF",
    pdf_to_bmp: "PDF to BMP",
    pdf_to_svg: "PDF to SVG",
    pdf_to_webp: "PDF to WebP",
    pdf_to_heif_heic: "PDF to HEIF/HEIC",
    pdf_to_text: "PDF to TEXT",
    pdf_to_image: "PDF to IMAGE",
    pdf_to_csv: "PDF to CSV",
    pdf_to_rtf: "PDF to RTF"
  },
  convert_from_pdf: "Convert from PDF",
  read_edit_pdf: "Read & Edit PDF",
  convert_to: {
    jpg_to_pdf: "JPG to PDF",
    png_to_pdf: "PNG to PDF",
    gif_to_pdf: "GIF to PDF",
    tiff_to_pdf: "TIFF to PDF",
    bmp_to_pdf: "BMP to PDF",
    svg_to_pdf: "SVG to PDF",
    webp_to_pdf: "WebP to PDF",
    heif_heic_to_pdf: "HEIF/HEIC to PDF",
    epub_to_pdf: "EPUB to PDF",
    word_to_pdf: "WORD to PDF",
    powerpoint_to_pdf: "POWERPOINT to PDF",
    excel_to_pdf: "EXCEL to PDF",
    html_to_pdf: "HTML to PDF",
    web_to_pdf: "Web to PDF",
    markdown_to_pdf: "Markdown to PDF",
    image_to_pdf: "IMAGE to PDF",
    text_to_pdf: "TEXT to PDF",
    csv_to_pdf: "CSV to PDF",
    psd_to_pdf: "PSD to PDF",
    rtf_to_pdf: "RTF to PDF"
  },
  sidebar: { menu: "Menu", home: "Home" },
  language: "Language",
  ai: {
    title: "AI",
    new: "New",
    translate: "Translate PDF",
    ocr: "OCR PDF",
    assistant: "Assistant"
  },
  profile: {
    manageAccountText: "Manage account",
    manageFiles: "Manage Files",
    signOutText: "Sign out",
    translate_units: "translate units",
    aiTokens: "ai tokens",
    premiumConversions: "premium conversions",
    recharge: "recharge"
  },
  authRoutes: {
    login: "Login",
    signup: "Signup"
  },
  contact: {
    telegram: "Telegram",
    whatsapp: "WhatsApp",
    email: "Email"
  }
};

const nav_content$4 = {
  merge: "دمج",
  split: "تقسيم",
  compress: "ضغط",
  blog: "مدونة",
  tools: "الأدوات",
  pricing: "التسعير",
  edit: {
    title: "تحرير",
    read: "قراءة PDF",
    edit: "تحرير PDF",
    create: "إنشاء ملف PDF",
    number: "ترقيم PDF",
    rotate: "تدوير PDF",
    lock: "قفل PDF",
    unlock: "إلغاء قفل PDF",
    watermark: "علامة مائية للـ PDF",
    remove: "إزالة الصفحات",
    resize: "تغيير حجم الصفحات",
    organize: "ترتيب الصفحات",
    merge: "دمج الصفحات",
    crop: "اقتصاص الصفحات",
    sign: "توقيع PDF"
  },
  convert: "تحويل",
  convert_pdf: "تحويل PDF",
  read_edit_pdf: "قراءة وتحرير PDF",
  convert_to_pdf: "تحويل إلى PDF",
  convert_to: {
    jpg_to_pdf: "JPG إلى PDF",
    png_to_pdf: "PNG إلى PDF",
    gif_to_pdf: "GIF إلى PDF",
    tiff_to_pdf: "TIFF إلى PDF",
    bmp_to_pdf: "BMP إلى PDF",
    svg_to_pdf: "SVG إلى PDF",
    webp_to_pdf: "WebP إلى PDF",
    heif_heic_to_pdf: "تحويل HEIF/HEIC إلى PDF",
    word_to_pdf: "Word إلى PDF",
    powerpoint_to_pdf: "PowerPoint إلى PDF",
    excel_to_pdf: "Excel إلى PDF",
    html_to_pdf: "HTML إلى PDF",
    markdown_to_pdf: "Markdown إلى PDF",
    web_to_pdf: "من الويب إلى PDF",
    image_to_pdf: "تحويل الصورة إلى PDF",
    text_to_pdf: "تحويل النص إلى PDF",
    epub_to_pdf: "EPUB إلى PDF",
    psd_to_pdf: "PSD إلى PDF",
    csv_to_pdf: "تحويل CSV إلى PDF",
    rtf_to_pdf: "RTF إلى PDF"
  },
  convert_from_pdf: "تحويل من PDF",
  convert_from: {
    pdf_to_epub: "PDF إلى EPUB",
    pdf_to_jpg: "PDF إلى JPG",
    pdf_to_word: "PDF إلى Word",
    pdf_to_powerpoint: "PDF إلى PowerPoint",
    pdf_to_excel: "PDF إلى Excel",
    pdf_to_pdf_a: "PDF إلى PDF/A",
    pdf_to_text: "PDF إلى نص",
    pdf_to_html: "PDF إلى HTML",
    pdf_to_markdown: "PDF إلى Markdown",
    pdf_to_png: "PDF إلى PNG",
    pdf_to_gif: "PDF إلى GIF",
    pdf_to_tiff: "PDF إلى TIFF",
    pdf_to_bmp: "PDF إلى BMP",
    pdf_to_svg: "PDF إلى SVG",
    pdf_to_webp: "PDF إلى WebP",
    pdf_to_heif_heic: "PDF إلى HEIF/HEIC",
    pdf_to_image: "تحويل PDF إلى صورة",
    pdf_to_csv: "تحويل PDF إلى CSV",
    pdf_to_psd: "PDF إلى PSD",
    pdf_to_rtf: "PDF إلى RTF"
  },
  sidebar: { menu: "القائمة", home: "الصفحة الرئيسية" },
  language: "اللغة",
  ai: {
    title: "الذكاء الاصطناعي",
    translate: "ترجمة PDF",
    new: "جديد",
    ocr: "التعرف الضوئي على الحروف PDF",
    assistant: "مساعد"
  },
  profile: {
    manageAccountText: "إدارة الحساب",
    signOutText: "تسجيل الخروج",
    manageFiles: "إدارة الملفات",
    translate_units: "وحدات الترجمة",
    recharge: "إعادة الشحن",
    aiTokens: "رموز الذكاء الاصطناعي",
    premiumConversions: "تحويلات مميزة"
  },
  authRoutes: {
    login: "تسجيل الدخول",
    signup: "إنشاء حساب"
  },
  contact: {
    telegram: "تيليجرام",
    whatsapp: "واتساب",
    email: "البريد الإلكتروني"
  }
};

const nav_content$3 = {
  merge: "Combinar",
  split: "Dividir",
  compress: "Comprimir",
  blog: "Blog",
  tools: "Herram.",
  pricing: "Precios",
  edit: {
    title: "Editar",
    read: "Leer PDF",
    edit: "Editar PDF",
    create: "Crear PDF",
    number: "Numerar PDF",
    rotate: "Rotar PDF",
    lock: "Bloquear PDF",
    unlock: "Desbloquear PDF",
    watermark: "Marca de agua en PDF",
    remove: "Eliminar Página",
    resize: "Cambiar tamaño de páginas",
    organize: "Organizar Páginas",
    merge: "Fusionar páginas",
    crop: "Recortar Páginas",
    sign: "Firmar PDF"
  },
  convert: "Convertir",
  convert_pdf: "Convertir PDF",
  convert_from_pdf: "Convertir desde PDF",
  read_edit_pdf: "Leer y editar PDF",
  convert_to_pdf: "Convertir a PDF",
  convert_to: {
    jpg_to_pdf: "JPG a PDF",
    png_to_pdf: "PNG a PDF",
    gif_to_pdf: "GIF a PDF",
    tiff_to_pdf: "TIFF a PDF",
    bmp_to_pdf: "BMP a PDF",
    svg_to_pdf: "SVG a PDF",
    webp_to_pdf: "WebP a PDF",
    heif_heic_to_pdf: "HEIF/HEIC a PDF",
    word_to_pdf: "Word a PDF",
    powerpoint_to_pdf: "Powerpoint a PDF",
    excel_to_pdf: "Excel a PDF",
    html_to_pdf: "HTML a PDF",
    markdown_to_pdf: "Markdown a PDF",
    web_to_pdf: "Web a PDF",
    image_to_pdf: "IMAGEN a PDF",
    text_to_pdf: "TEXTO a PDF",
    csv_to_pdf: "CSV a PDF",
    epub_to_pdf: "EPUB a PDF",
    psd_to_pdf: "PSD a PDF",
    rtf_to_pdf: "RTF a PDF"
  },
  convert_from: {
    pdf_to_jpg: "PDF a JPG",
    pdf_to_word: "PDF a Word",
    pdf_to_powerpoint: "PDF a Powerpoint",
    pdf_to_excel: "PDF a Excel",
    pdf_to_pdf_a: "PDF a PDF/A",
    pdf_to_text: "PDF a texto",
    pdf_to_html: "PDF a HTML",
    pdf_to_markdown: "PDF a Markdown",
    pdf_to_png: "PDF a PNG",
    pdf_to_gif: "PDF a GIF",
    pdf_to_tiff: "PDF a TIFF",
    pdf_to_bmp: "PDF a BMP",
    pdf_to_svg: "PDF a SVG",
    pdf_to_webp: "PDF a WebP",
    pdf_to_heif_heic: "PDF a HEIF/HEIC",
    pdf_to_image: "PDF a IMAGEN",
    pdf_to_csv: "PDF a CSV",
    pdf_to_epub: "PDF a EPUB",
    pdf_to_psd: "PDF a PSD",
    pdf_to_rtf: "PDF a RTF"
  },
  sidebar: { menu: "Menú", home: "Inicio" },
  language: "Idioma",
  ai: {
    title: "IA",
    translate: "Traducir PDF",
    ocr: "OCR PDF",
    new: "Nuevo",
    assistant: "Asistente"
  },
  profile: {
    manageAccountText: "Administrar cuenta",
    signOutText: "Cerrar sesión",
    manageFiles: "Administrar archivos",
    translate_units: "unidades de traducción",
    recharge: "recargar",
    aiTokens: "tokens de IA",
    premiumConversions: "conversiones premium"
  },
  authRoutes: {
    login: "Iniciar sesión",
    signup: "Registrarse"
  },
  contact: {
    telegram: "Telegrama",
    whatsapp: "WhatsApp",
    email: "Email"
  }
};

const nav_content$2 = {
  merge: "Fusionner",
  split: "Diviser",
  compress: "Compresser",
  blog: "Blog",
  tools: "Outils",
  pricing: "Tarification",
  edit: {
    title: "Modifier",
    read: "Lire le PDF",
    edit: "Modifier le PDF",
    create: "Créer un PDF",
    number: "Numéroter le PDF",
    rotate: "Faire pivoter le PDF",
    lock: "Verrouiller le PDF",
    unlock: "Déverrouiller le PDF",
    watermark: "Filigrane PDF",
    remove: "Supprimer les pages",
    resize: "Redimensionner les pages",
    organize: "Organiser les pages",
    merge: "Fusionner les pages",
    crop: "Recadrer les Pages",
    sign: "Signer le PDF"
  },
  convert: "Convertir",
  convert_pdf: "Convertir des PDF",
  convert_to_pdf: "Convertir en PDF",
  convert_from_pdf: "Convertir à partir de PDF",
  read_edit_pdf: "Lire et modifier un PDF",
  convert_to: {
    jpg_to_pdf: "JPG en PDF",
    png_to_pdf: "PNG en PDF",
    gif_to_pdf: "GIF en PDF",
    tiff_to_pdf: "TIFF en PDF",
    epub_to_pdf: "EPUB en PDF",
    psd_to_pdf: "PSD en PDF",
    bmp_to_pdf: "BMP en PDF",
    svg_to_pdf: "SVG en PDF",
    webp_to_pdf: "WebP en PDF",
    heif_heic_to_pdf: "HEIF/HEIC vers PDF",
    word_to_pdf: "WORD en PDF",
    powerpoint_to_pdf: "POWERPOINT en PDF",
    excel_to_pdf: "EXCEL en PDF",
    html_to_pdf: "HTML en PDF",
    markdown_to_pdf: "Markdown en PDF",
    web_to_pdf: "Web vers PDF",
    image_to_pdf: "IMAGE en PDF",
    text_to_pdf: "TEXTE en PDF",
    csv_to_pdf: "CSV en PDF",
    rtf_to_pdf: "RTF en PDF"
  },
  convert_from: {
    pdf_to_jpg: "PDF en JPG",
    pdf_to_word: "PDF en WORD",
    pdf_to_powerpoint: "PDF en POWERPOINT",
    pdf_to_excel: "PDF en EXCEL",
    pdf_to_pdf_a: "PDF en PDF/A",
    pdf_to_text: "PDF en texte",
    pdf_to_html: "PDF vers HTML",
    pdf_to_markdown: "PDF à Markdown",
    pdf_to_png: "PDF vers PNG",
    pdf_to_gif: "PDF vers GIF",
    pdf_to_tiff: "PDF vers TIFF",
    pdf_to_bmp: "PDF vers BMP",
    pdf_to_svg: "PDF vers SVG",
    pdf_to_webp: "PDF vers WebP",
    pdf_to_heif_heic: "PDF vers HEIF/HEIC",
    pdf_to_image: "PDF en IMAGE",
    pdf_to_csv: "PDF en CSV",
    pdf_to_epub: "PDF en EPUB",
    pdf_to_psd: "PDF en PSD",
    pdf_to_rtf: "PDF en RTF"
  },
  sidebar: { menu: "Menu", home: "Accueil" },
  language: "Langue",
  ai: {
    title: "IA",
    translate: "Traduire PDF",
    new: "Nouv",
    ocr: "OCR PDF",
    assistant: "Assistant"
  },
  profile: {
    manageAccountText: "Gérer le compte",
    signOutText: "Se déconnecter",
    manageFiles: "Gérer les fichiers",
    translate_units: "unités de traduction",
    recharge: "recharger",
    aiTokens: "jetons IA",
    premiumConversions: "conversions premium"
  },
  authRoutes: {
    login: "Connexion",
    signup: "S'inscrire"
  },
  contact: {
    telegram: "Télégramme",
    whatsapp: "WhatsApp",
    email: "E-mail"
  }
};

const nav_content$1 = {
  merge: "मर्ज",
  split: "विभाजित",
  compress: "संपीड़ित",
  convert_pdf: "पीडीएफ परिवर्तित करें",
  blog: "ब्लॉग",
  tools: "उपकरण",
  pricing: "मूल्य निर्धारण",
  edit: {
    title: "संपादित करें",
    read: "पीडीएफ पढ़ें",
    edit: "पीडीएफ संपादित करें",
    create: "PDF बनाएँ",
    number: "पीडीएफ को नंबर करें",
    rotate: "पीडीएफ को घुमाएं",
    lock: "पीडीएफ को ताला लगाएं",
    unlock: "पीडीएफ का ताला खोलें",
    watermark: "पीडीएफ पर जलीय चिह्न",
    remove: "पृष्ठ हटाएं",
    resize: "पृष्ठों का आकार बदलें",
    organize: "पृष्ठों को व्यवस्थित करें",
    merge: "पृष्ठ जोड़ें",
    crop: "पृष्ठों को क्रॉप करें",
    sign: "पीडीएफ पर हस्ताक्षर करें"
  },
  convert: "रूपांतरित करें",
  convert_to_pdf: "पीडीएफ में परिवर्तित करें",
  convert_from_pdf: "पीडीएफ से परिवर्तित करें",
  read_edit_pdf: "पीडीएफ पढ़ें और संपादित करें",
  convert_to: {
    jpg_to_pdf: "जेपीजी से पीडीएफ",
    png_to_pdf: "पीएनजी से पीडीएफ",
    gif_to_pdf: "जीआईएफ से पीडीएफ",
    tiff_to_pdf: "टिफ से पीडीएफ",
    bmp_to_pdf: "बीएमपी से पीडीएफ",
    svg_to_pdf: "एसवीजी से पीडीएफ",
    webp_to_pdf: "वेबपी से पीडीएफ",
    heif_heic_to_pdf: "HEIF/HEIC से PDF",
    word_to_pdf: "शब्द से पीडीएफ",
    powerpoint_to_pdf: "पावरपॉइंट से पीडीएफ",
    excel_to_pdf: "एक्सेल से पीडीएफ",
    html_to_pdf: "एचटीएमएल से पीडीएफ",
    markdown_to_pdf: "पीडीएफ में मार्कडाउन करें",
    web_to_pdf: "वेब से पीडीएफ",
    image_to_pdf: "छवि को PDF में",
    text_to_pdf: "पाठ को PDF में",
    csv_to_pdf: "CSV को PDF में",
    epub_to_pdf: "EPUB से PDF",
    psd_to_pdf: "PSD से PDF",
    rtf_to_pdf: "RTF से PDF"
  },
  convert_from: {
    pdf_to_jpg: "पीडीएफ से जेपीजी",
    pdf_to_word: "पीडीएफ से शब्द",
    pdf_to_powerpoint: "पीडीएफ से पावरपॉइंट",
    pdf_to_excel: "पीडीएफ से एक्सेल",
    pdf_to_pdf_a: "पीडीएफ से पीडीएफ/ए",
    pdf_to_text: "पाठ के लिए पीडीएफ",
    pdf_to_html: "पीडीएफ से एचटीएमएल",
    pdf_to_markdown: "PDF से मार्कडाउन तक",
    pdf_to_png: "पीडीएफ से पीएनजी में",
    pdf_to_gif: "पीडीएफ से जीआईएफ में",
    pdf_to_tiff: "पीडीएफ से टिफ़ में",
    pdf_to_bmp: "पीडीएफ से बीएमपी में",
    pdf_to_svg: "पीडीएफ से एसवीजी में",
    pdf_to_webp: "पीडीएफ से वेबपी में",
    pdf_to_heif_heic: "पीडीएफ से हीइएफ/हीइक में",
    pdf_to_image: "PDF को छवि में",
    pdf_to_csv: "PDF को CSV में",
    pdf_to_epub: "PDF से EPUB",
    pdf_to_psd: "PDF से PSD",
    pdf_to_rtf: "PDF से RTF"
  },
  sidebar: { menu: "मेनू", home: "होम" },
  language: "भाषा",
  ai: {
    title: "एआई",
    translate: "PDF अनुवाद करें",
    new: "नया",
    ocr: "ओसीआर PDF",
    assistant: "सहायक"
  },
  profile: {
    manageAccountText: "खाता प्रबंधित करें",
    signOutText: "साइन आउट",
    manageFiles: "फ़ाइलें प्रबंधित करें",
    translate_units: "अनुवाद इकाइयाँ",
    recharge: "रिचार्ज करें",
    aiTokens: "एआई टोकन",
    premiumConversions: "conversions premium"
  },
  authRoutes: {
    login: "लॉगिन",
    signup: "साइन अप"
  },
  contact: {
    telegram: "टेलीग्राम",
    whatsapp: "व्हाट्सएप",
    email: "ईमेल"
  }
};

const nav_content = {
  merge: "合并",
  split: "拆分",
  compress: "压缩",
  blog: "博客",
  tools: "工具",
  pricing: "定价",
  edit: {
    title: "编辑",
    read: "阅读 PDF",
    edit: "编辑 PDF",
    create: "创建 PDF",
    number: "给 PDF 编号",
    rotate: "旋转 PDF",
    lock: "锁定 PDF",
    unlock: "解锁 PDF",
    watermark: "PDF 添加水印",
    remove: "删除页面",
    resize: "调整页面大小",
    organize: "整理页面",
    merge: "合并页面",
    crop: "裁剪页面",
    sign: "签署PDF"
  },
  convert: "转换",
  convert_pdf: "转换PDF",
  convert_to_pdf: "转换为PDF",
  convert_from_pdf: "从PDF转换",
  read_edit_pdf: "阅读和编辑 PDF",
  convert_to: {
    jpg_to_pdf: "JPG转PDF",
    png_to_pdf: "PNG转PDF",
    gif_to_pdf: "GIF转PDF",
    tiff_to_pdf: "TIFF转PDF",
    bmp_to_pdf: "BMP转PDF",
    svg_to_pdf: "SVG转PDF",
    webp_to_pdf: "WebP转PDF",
    heif_heic_to_pdf: "HEIF/HEIC 转 PDF",
    word_to_pdf: "Word转PDF",
    powerpoint_to_pdf: "PowerPoint转PDF",
    excel_to_pdf: "Excel转PDF",
    html_to_pdf: "HTML转PDF",
    markdown_to_pdf: "降价到 PDF",
    web_to_pdf: "网页转 PDF",
    image_to_pdf: "图片转为PDF",
    text_to_pdf: "文本转为PDF",
    csv_to_pdf: "CSV转为PDF",
    epub_to_pdf: "EPUB 到 PDF",
    psd_to_pdf: "PSD 到 PDF",
    rtf_to_pdf: "RTF 转 PDF"
  },
  convert_from: {
    pdf_to_jpg: "PDF转JPG",
    pdf_to_word: "PDF转Word",
    pdf_to_powerpoint: "PDF转PowerPoint",
    pdf_to_excel: "PDF转Excel",
    pdf_to_pdf_a: "PDF转PDF/A",
    pdf_to_text: "PDF 转文本",
    pdf_to_html: "PDF 到 HTML",
    pdf_to_markdown: "PDF 到 Markdown",
    pdf_to_png: "PDF转PNG",
    pdf_to_gif: "PDF转GIF",
    pdf_to_tiff: "PDF转TIFF",
    pdf_to_bmp: "PDF转BMP",
    pdf_to_svg: "PDF转SVG",
    pdf_to_webp: "PDF转WebP",
    pdf_to_heif_heic: "PDF转HEIF/HEIC",
    pdf_to_image: "PDF 转为图片",
    pdf_to_csv: "PDF 转为CSV",
    pdf_to_epub: "PDF 到 EPUB",
    pdf_to_psd: "PDF 到 PSD",
    pdf_to_rtf: "PDF 转 RTF"
  },
  sidebar: { menu: "菜单", home: "主页" },
  language: "语言",
  ai: {
    title: "人工智能",
    translate: "翻译 PDF",
    new: "新",
    ocr: "OCR PDF",
    assistant: "助手"
  },
  profile: {
    manageAccountText: "管理账户",
    signOutText: "退出登录",
    manageFiles: "管理文件",
    translate_units: "翻译单位",
    recharge: "充值",
    aiTokens: "AI 令牌",
    premiumConversions: "conversions premium"
  },
  authRoutes: {
    login: "登录",
    signup: "注册"
  },
  contact: {
    telegram: "电报",
    whatsapp: "微信",
    email: "电子邮件"
  }
};

function getNavContent(lang) {
  let navContent;
  switch (lang) {
    case "ar":
      navContent = nav_content$4;
      break;
    case "es":
      navContent = nav_content$3;
      break;
    case "fr":
      navContent = nav_content$2;
      break;
    case "hi":
      navContent = nav_content$1;
      break;
    case "zh":
      navContent = nav_content;
      break;
    default:
      navContent = nav_content$5;
      break;
  }
  return navContent;
}

const { TranslateIcon, ChipIcon } = pkg;
const { getUserInfo: getUserInfo$1, getUserBalance } = st;
const Profile = ({
  content,
  setShowAuthRoutes,
  lang,
  to
}) => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const { userInfo } = useNavState();
  function formatUnits(num) {
    if (num === 0) return "0";
    if (num < 1e3) return num.toString();
    const formatter = new Intl.NumberFormat("en-US", {
      notation: "compact",
      compactDisplay: "short",
      maximumFractionDigits: 1
    });
    return formatter.format(num);
  }
  const [ref, setRef] = useState("");
  const [translateUnits, setTranslateUnits] = useState(0);
  const [aiTokens, setAiTokens] = useState(0);
  const [premiumConversions, setPremiumConversions] = useState(0);
  useEffect(() => {
    (async () => {
      try {
        const _userInfo = userInfo || await getUserInfo$1();
        if (_userInfo) {
          if (process.env.NODE_ENV === "production") {
            const balance = await getUserBalance();
            const {
              aiTokens: _aiTokens,
              premiumConversions: _premiumConversions,
              translateUnits: _translateUnits
            } = balance;
            setShowAuthRoutes(false);
            setTranslateUnits(_translateUnits);
            setAiTokens(_aiTokens);
            setPremiumConversions(_premiumConversions);
          }
        } else {
          setShowAuthRoutes(true);
        }
      } catch (e) {
      }
    })();
    const params = new URLSearchParams(window.location.search);
    const refParam = params.get("ref") || "";
    setRef(to ? to : encodeURIComponent(refParam));
  }, [showProfileDropdown]);
  const getInitials = (name) => {
    return name.split(" ").map((n) => n[0]).join("").toUpperCase();
  };
  if (!userInfo) {
    return /* @__PURE__ */ jsx("div", { className: "profile" });
  }
  const profile_picture = userInfo.profilePicture?.startsWith("http") ? userInfo.profilePicture : "";
  return /* @__PURE__ */ jsxs("div", { className: "profile", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "avatar",
        onClick: () => setShowProfileDropdown(!showProfileDropdown),
        style: !profile_picture ? { backgroundColor: userInfo.profilePicture } : {},
        children: profile_picture ? /* @__PURE__ */ jsx("img", { src: profile_picture, alt: userInfo.username }) : getInitials(userInfo.username)
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `profile-dropdown animate${showProfileDropdown ? " show" : " hide"}`,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "profile-header", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "profile-picture",
                style: { backgroundColor: userInfo.profilePicture },
                children: profile_picture ? /* @__PURE__ */ jsx("img", { src: profile_picture, alt: userInfo.username }) : getInitials(userInfo.username)
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "profile-info", children: [
              /* @__PURE__ */ jsx("div", { className: "name", children: userInfo.username }),
              /* @__PURE__ */ jsx("div", { className: "email", children: userInfo.email }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `${(lang === "" ? "" : "/") + lang}/manage-account?ref=${ref}`,
                  className: "manage-account",
                  children: content.manageAccountText
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `${(lang === "" ? "" : "/") + lang}/file-manager?ref=${ref}`,
                  className: "manage-files",
                  children: content.manageFiles
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "credits-section", children: [
            /* @__PURE__ */ jsxs("div", { className: "credits-header", children: [
              /* @__PURE__ */ jsxs("bdi", { children: [
                /* @__PURE__ */ jsx(TranslateIcon, { className: "icon" }),
                " ",
                content.translate_units,
                " ",
                formatUnits(translateUnits)
              ] }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `${lang === "" ? "" : "/" + lang}/recharge/translate-units`,
                  target: "_blank",
                  className: "recharge-link",
                  children: content.recharge
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "credits-header", children: [
              /* @__PURE__ */ jsxs("bdi", { children: [
                /* @__PURE__ */ jsx(ChipIcon, { className: "icon" }),
                " ",
                content.aiTokens,
                " ",
                formatUnits(aiTokens)
              ] }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `${lang === "" ? "" : "/" + lang}/recharge/ai-tokens`,
                  target: "_blank",
                  className: "recharge-link",
                  children: content.recharge
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "credits-header", children: [
              /* @__PURE__ */ jsxs("bdi", { children: [
                /* @__PURE__ */ jsx(FileCheck2, { className: "icon" }),
                " ",
                content.premiumConversions,
                " ",
                formatUnits(premiumConversions)
              ] }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `${lang === "" ? "" : "/" + lang}/recharge/premium-conversions`,
                  target: "_blank",
                  className: "recharge-link",
                  children: content.recharge
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx("a", { href: "/auth/logout", className: "sign-out", children: content.signOutText })
        ]
      }
    )
  ] });
};

// THIS FILE IS AUTO GENERATED
function AiOutlineLoading3Quarters (props) {
  return GenIcon({"attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"},"child":[]}]})(props);
}

const Loading$1 = ({ color = "red" }) => {
  return /* @__PURE__ */ jsx("div", { className: "loading-container", children: React.createElement(AiOutlineLoading3Quarters, {
    className: `loading-icon ${color}`
  }) });
};

const AuthRoutes = ({ content, show }) => {
  const [isLoaded, setIsloaded] = useState(false);
  useEffect(() => {
    setIsloaded(true);
  }, []);
  if (!show && !isLoaded) {
    return /* @__PURE__ */ jsx("div", { className: "init", children: /* @__PURE__ */ jsx(Loading$1, {}) });
  }
  return /* @__PURE__ */ jsxs("div", { className: `auth-routes${show ? "" : " hidden"}`, children: [
    /* @__PURE__ */ jsx("a", { href: "/login", className: "auth-link login", children: content.login }),
    /* @__PURE__ */ jsx("a", { href: "/register", className: "auth-link sign-up", children: content.signup })
  ] });
};

const LanguageIcon = (props) => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
        }
      )
    }
  );
};

const LanguageDropdown = ({ removeTrailingSlash = false, language, ...props }) => {
  const { path, showLangMenu, setShowLangMenu } = useNavState();
  const langMenuRef = useRef(null);
  const langWrapperRef = useRef(null);
  const toggle = () => setShowLangMenu(!showLangMenu);
  useEffect(() => {
    if (typeof getLanguage() === "undefined") {
      setLanguage("");
    }
    let t = setTimeout(() => {
      if (langWrapperRef.current?.classList.contains("hide")) {
        langWrapperRef.current.classList.add("none");
      }
    }, 300);
    return () => {
      clearTimeout(t);
    };
  }, [langMenuRef.current, showLangMenu]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ...props,
      className: `language-dropdown${props.className ? " " + props.className : ""}`,
      ref: langMenuRef,
      children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "langugage-dropdown-toggler",
            onClick: toggle,
            onBlur: (e) => {
              if (!langMenuRef.current?.contains(e.relatedTarget)) {
                setShowLangMenu(false);
              }
            },
            title: language,
            type: "button",
            children: /* @__PURE__ */ jsx(LanguageIcon, { className: "icon" })
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `dropdown-wrapper drop-down-container${showLangMenu ? " animate show" : " animate hide"}`,
            ref: langWrapperRef,
            children: /* @__PURE__ */ jsxs("ul", { className: "nav-list vertical-list", children: [
              /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: `/${path}`,
                  className: "nav-link",
                  onClick: () => {
                    setLanguage("");
                  },
                  children: "English"
                }
              ) }),
              /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: `/ar${removeTrailingSlash ? "" : "/"}${path}`,
                  className: "nav-link",
                  onClick: () => {
                    setLanguage("ar");
                  },
                  children: "العربية"
                }
              ) }),
              /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: `/es${removeTrailingSlash ? "" : "/"}${path}`,
                  className: "nav-link",
                  onClick: () => {
                    setLanguage("es");
                  },
                  children: "Español"
                }
              ) }),
              /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: `/fr${removeTrailingSlash ? "" : "/"}${path}`,
                  className: "nav-link",
                  onClick: () => {
                    setLanguage("fr");
                  },
                  children: "Français"
                }
              ) }),
              /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: `/hi${removeTrailingSlash ? "" : "/"}${path}`,
                  className: "nav-link",
                  onClick: () => {
                    setLanguage("hi");
                  },
                  children: "हिन्दी"
                }
              ) }),
              /* @__PURE__ */ jsx("li", { className: "nav-list-item", children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: `/zh${removeTrailingSlash ? "" : "/"}${path}`,
                  className: "nav-link",
                  onClick: () => {
                    setLanguage("zh");
                  },
                  children: "中文"
                }
              ) })
            ] })
          }
        )
      ]
    }
  );
};

const RoutesLangWrapper = ({ showAuthRoutes, content }) => {
  return /* @__PURE__ */ jsxs("div", { className: `routes-lang-wrapper${!showAuthRoutes ? " token-is-set" : ""}`, children: [
    /* @__PURE__ */ jsx(AuthRoutes, { content: content.authRoutes, show: showAuthRoutes }),
    /* @__PURE__ */ jsx(LanguageDropdown, { language: content.language })
  ] });
};

const Contact = ({ content, setIsempty }) => {
  const { userInfo } = useNavState();
  if (!userInfo) {
    setIsempty(true);
  } else {
    setIsempty(false);
  }
  return !userInfo ? null : /* @__PURE__ */ jsxs("div", { className: "contact-container", children: [
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: "https://wa.me/23593064452",
        className: "contact-btn contact-btn-whatsapp",
        target: "_blank",
        rel: "noopener noreferrer",
        children: [
          /* @__PURE__ */ jsx("svg", { className: "contact-icon", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63" }) }),
          /* @__PURE__ */ jsx("span", { children: content.whatsapp })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: "https://t.me/Sanusihassanumar",
        className: "contact-btn contact-btn-telegram",
        target: "_blank",
        rel: "noopener noreferrer",
        children: [
          /* @__PURE__ */ jsx("svg", { className: "contact-icon", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" }) }),
          /* @__PURE__ */ jsx("span", { children: content.telegram })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: "mailto:pdfequips@gmail.com",
        className: "contact-btn contact-btn-email",
        target: "_blank",
        rel: "noopener noreferrer",
        children: [
          /* @__PURE__ */ jsx("svg", { className: "contact-icon", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" }) }),
          /* @__PURE__ */ jsx("span", { children: content.email })
        ]
      }
    )
  ] });
};

const { getUserInfo } = st;
const Navbar = ({
  path,
  shadow = true,
  lang
}) => {
  const { setPath, setUserInfo } = useNavState();
  const content = getNavContent(lang || "");
  const [showAuthRoutes, setShowAuthRoutes] = useState(false);
  const [showContactDropdown, setShowContactDropdown] = useState(false);
  const [isEmpty, setIsempty] = useState(true);
  useEffect(() => {
    setPath(path);
    (async () => {
      const _userInfo = await getUserInfo();
      setUserInfo(_userInfo);
    })();
  }, []);
  return /* @__PURE__ */ jsxs("nav", { className: `navbar${!shadow ? " no-shadow" : ""}`, id: "navbar", children: [
    /* @__PURE__ */ jsx(SideBarToggler, { lang, sidebar: content.sidebar }),
    /* @__PURE__ */ jsx(SideBar, { content }),
    /* @__PURE__ */ jsx(NavList, { content }),
    /* @__PURE__ */ jsxs("div", { className: `mobile-only${isEmpty ? " none" : ""}`, children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "drop-down-toggler",
          onClick: () => setShowContactDropdown(!showContactDropdown),
          children: /* @__PURE__ */ jsx(FaPhoneFlip, { className: "icon" })
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: `dropdown-wrapper drop-down-container${showContactDropdown ? " animate show" : " animate hide"}`,
          id: "dropdown-container",
          children: /* @__PURE__ */ jsx(Contact, { content: content.contact, setIsempty })
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "desktop-only", children: /* @__PURE__ */ jsx(Contact, { content: content.contact, setIsempty }) }),
    /* @__PURE__ */ jsx(
      Profile,
      {
        content: content.profile,
        setShowAuthRoutes,
        lang: lang || "",
        to: path
      }
    ),
    /* @__PURE__ */ jsx(RoutesLangWrapper, { showAuthRoutes, content })
  ] });
};

const FooterLinks = ({ links }) => {
  return /* @__PURE__ */ jsx("ul", { className: "footer-links", children: links.map((link, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: `${link.URL}`, target: "_blank", rel: "noopener noreferrer", children: link.text }) }, index)) });
};

const footer$5 = {
  brand: "PDFEquips",
  conditions: "conditions",
  bottom_row: {
    pdf_tools: "PDF Tools",
    languages: "Languages",
    company: "Company",
    about: "About Us",
    contact: "Contact",
    faq: "FAQ",
    blog: "Blog",
    legal: {
      title: "Legal",
      terms: "Terms of Service",
      privacy_policy: "Privacy Policy"
    }
  }
};
const footerLinks$5 = [
  {
    "URL": "https://www.pdfequips.com/pdf-to-psd",
    "text": "Convert PDF to PSD"
  },
  {
    "URL": "https://www.pdfequips.com/pdf-to-webp",
    "text": "Convert PDF to WebP"
  },
  {
    "URL": "https://www.pdfequips.com/tiff-to-pdf",
    "text": "Convert TIFF to PDF"
  },
  {
    "URL": "https://www.pdfequips.com/pdf-to-tiff",
    "text": "Convert PDF to TIFF"
  },
  {
    "URL": "https://www.pdfequips.com/svg-to-pdf",
    "text": "Convert SVG to PDF"
  },
  {
    "URL": "https://www.pdfequips.com/png-to-pdf",
    "text": "Convert PNG to PDF"
  },
  {
    "URL": "https://www.pdfequips.com/pdf-to-png",
    "text": "Convert PDF to PNG"
  },
  {
    "URL": "https://www.pdfequips.com/pdf-to-heif-heic",
    "text": "Convert PDF to HEIF/HEIC"
  },
  {
    "URL": "https://www.pdfequips.com/remove-pages",
    "text": "Remove Pages from PDF"
  },
  {
    "URL": "https://www.pdfequips.com/read-pdf",
    "text": "Read PDF Files"
  },
  {
    "URL": "https://www.pdfequips.com/epub-to-pdf",
    "text": "Convert EPUB to PDF"
  },
  {
    "URL": "https://www.pdfequips.com/heif-heic-to-pdf",
    "text": "Convert HEIF/HEIC to PDF"
  },
  {
    "URL": "https://www.pdfequips.com/rtf-to-pdf",
    "text": "Convert RTF to PDF"
  },
  {
    "URL": "https://www.pdfequips.com/pdf-to-svg",
    "text": "Convert PDF to SVG"
  },
  {
    "URL": "https://www.pdfequips.com/pdf-to-gif",
    "text": "Convert PDF to GIF"
  },
  {
    "URL": "https://www.pdfequips.com/sign-pdf",
    "text": "Sign PDF Documents"
  },
  {
    "URL": "https://www.pdfequips.com/pdf-to-rtf",
    "text": "Convert PDF to RTF"
  },
  {
    "URL": "https://www.pdfequips.com/webp-to-pdf",
    "text": "Convert WebP to PDF"
  },
  {
    "URL": "https://www.pdfequips.com/bmp-to-pdf",
    "text": "Convert BMP to PDF"
  },
  {
    "URL": "https://www.pdfequips.com/pdf-to-bmp",
    "text": "Convert PDF to BMP"
  },
  {
    "URL": "https://www.pdfequips.com/crop-pdf",
    "text": "Crop PDF Pages"
  },
  {
    "URL": "https://www.pdfequips.com/resize-pdf",
    "text": "Resize PDF Pages"
  },
  {
    "URL": "https://www.pdfequips.com/pdf-to-image",
    "text": "Convert PDF to Image"
  },
  {
    "URL": "https://www.pdfequips.com/psd-to-pdf",
    "text": "Convert PSD to PDF"
  },
  {
    "URL": "https://www.pdfequips.com/pdf-to-csv",
    "text": "Convert PDF to CSV"
  },
  {
    "URL": "https://www.pdfequips.com/merge-pages",
    "text": "Merge PDF Pages"
  },
  {
    "URL": "https://www.pdfequips.com/image-to-pdf",
    "text": "Convert Image to PDF"
  },
  {
    "URL": "https://www.pdfequips.com/excel-to-pdf",
    "text": "Convert Excel to PDF"
  },
  {
    "URL": "https://www.pdfequips.com/html-to-pdf",
    "text": "Convert HTML to PDF"
  },
  {
    "URL": "https://www.pdfequips.com/text-to-pdf",
    "text": "Convert Text to PDF"
  },
  {
    "URL": "https://www.pdfequips.com/gif-to-pdf",
    "text": "Convert GIF to PDF"
  },
  {
    "URL": "https://www.pdfequips.com/csv-to-pdf",
    "text": "Convert CSV to PDF"
  },
  {
    "URL": "https://www.pdfequips.com/pdf-to-epub",
    "text": "Convert PDF to EPUB"
  }
];

const footer$4 = {
  brand: "PDFEquips",
  conditions: "الأحكام",
  bottom_row: {
    pdf_tools: "أدوات PDF",
    languages: "اللغات",
    company: "الشركة",
    about: "معلومات عنا",
    faq: "الأسئلة الشائعة",
    blog: "المدونة",
    legal: {
      title: "قانوني",
      terms: "شروط الخدمة",
      privacy_policy: "سياسة الخصوصية"
    },
    contact: "اتصل بنا"
  }
};
const footerLinks$4 = [
  {
    "URL": "https://www.pdfequips.com/ar/pdf-to-psd",
    "text": "تحويل PDF إلى PSD"
  },
  {
    "URL": "https://www.pdfequips.com/ar/pdf-to-webp",
    "text": "تحويل PDF إلى WebP"
  },
  {
    "URL": "https://www.pdfequips.com/ar/tiff-to-pdf",
    "text": "تحويل TIFF إلى PDF"
  },
  {
    "URL": "https://www.pdfequips.com/ar/pdf-to-tiff",
    "text": "تحويل PDF إلى TIFF"
  },
  {
    "URL": "https://www.pdfequips.com/ar/svg-to-pdf",
    "text": "تحويل SVG إلى PDF"
  },
  {
    "URL": "https://www.pdfequips.com/ar/png-to-pdf",
    "text": "تحويل PNG إلى PDF"
  },
  {
    "URL": "https://www.pdfequips.com/ar/pdf-to-png",
    "text": "تحويل PDF إلى PNG"
  },
  {
    "URL": "https://www.pdfequips.com/ar/pdf-to-heif-heic",
    "text": "تحويل PDF إلى HEIF/HEIC"
  },
  {
    "URL": "https://www.pdfequips.com/ar/remove-pages",
    "text": "إزالة الصفحات من PDF"
  },
  {
    "URL": "https://www.pdfequips.com/ar/read-pdf",
    "text": "قراءة ملفات PDF"
  },
  {
    "URL": "https://www.pdfequips.com/ar/epub-to-pdf",
    "text": "تحويل EPUB إلى PDF"
  },
  {
    "URL": "https://www.pdfequips.com/ar/heif-heic-to-pdf",
    "text": "تحويل HEIF/HEIC إلى PDF"
  },
  {
    "URL": "https://www.pdfequips.com/ar/rtf-to-pdf",
    "text": "تحويل RTF إلى PDF"
  },
  {
    "URL": "https://www.pdfequips.com/ar/pdf-to-svg",
    "text": "تحويل PDF إلى SVG"
  },
  {
    "URL": "https://www.pdfequips.com/ar/pdf-to-gif",
    "text": "تحويل PDF إلى GIF"
  },
  {
    "URL": "https://www.pdfequips.com/ar/sign-pdf",
    "text": "توقيع مستندات PDF"
  },
  {
    "URL": "https://www.pdfequips.com/ar/pdf-to-rtf",
    "text": "تحويل PDF إلى RTF"
  },
  {
    "URL": "https://www.pdfequips.com/ar/webp-to-pdf",
    "text": "تحويل WebP إلى PDF"
  },
  {
    "URL": "https://www.pdfequips.com/ar/bmp-to-pdf",
    "text": "تحويل BMP إلى PDF"
  },
  {
    "URL": "https://www.pdfequips.com/ar/pdf-to-bmp",
    "text": "تحويل PDF إلى BMP"
  },
  {
    "URL": "https://www.pdfequips.com/ar/crop-pdf",
    "text": "قص صفحات PDF"
  },
  {
    "URL": "https://www.pdfequips.com/ar/resize-pdf",
    "text": "تغيير حجم صفحات PDF"
  },
  {
    "URL": "https://www.pdfequips.com/ar/pdf-to-image",
    "text": "تحويل PDF إلى صورة"
  },
  {
    "URL": "https://www.pdfequips.com/ar/psd-to-pdf",
    "text": "تحويل PSD إلى PDF"
  },
  {
    "URL": "https://www.pdfequips.com/ar/pdf-to-csv",
    "text": "تحويل PDF إلى CSV"
  },
  {
    "URL": "https://www.pdfequips.com/ar/merge-pages",
    "text": "دمج صفحات PDF"
  },
  {
    "URL": "https://www.pdfequips.com/ar/image-to-pdf",
    "text": "تحويل صورة إلى PDF"
  },
  {
    "URL": "https://www.pdfequips.com/ar/excel-to-pdf",
    "text": "تحويل Excel إلى PDF"
  },
  {
    "URL": "https://www.pdfequips.com/ar/html-to-pdf",
    "text": "تحويل HTML إلى PDF"
  },
  {
    "URL": "https://www.pdfequips.com/ar/text-to-pdf",
    "text": "تحويل نص إلى PDF"
  },
  {
    "URL": "https://www.pdfequips.com/ar/gif-to-pdf",
    "text": "تحويل GIF إلى PDF"
  },
  {
    "URL": "https://www.pdfequips.com/ar/csv-to-pdf",
    "text": "تحويل CSV إلى PDF"
  },
  {
    "URL": "https://www.pdfequips.com/ar/pdf-to-epub",
    "text": "تحويل PDF إلى EPUB"
  }
];

const footer$3 = {
  brand: "PDFEquips",
  conditions: "condiciones",
  bottom_row: {
    pdf_tools: "Herramientas PDF",
    languages: "Idiomas",
    company: "Compañía",
    about: "Sobre Nosotros",
    faq: "Preguntas Frecuentes",
    blog: "Blog",
    legal: {
      title: "Legal",
      terms: "Términos del Servicio",
      privacy_policy: "Política de Privacidad"
    },
    contact: "Contáctanos"
  }
};
const footerLinks$3 = [
  {
    "URL": "https://www.pdfequips.com/es/pdf-to-psd",
    "text": "Convertir PDF a PSD"
  },
  {
    "URL": "https://www.pdfequips.com/es/pdf-to-webp",
    "text": "Convertir PDF a WebP"
  },
  {
    "URL": "https://www.pdfequips.com/es/tiff-to-pdf",
    "text": "Convertir TIFF a PDF"
  },
  {
    "URL": "https://www.pdfequips.com/es/pdf-to-tiff",
    "text": "Convertir PDF a TIFF"
  },
  {
    "URL": "https://www.pdfequips.com/es/svg-to-pdf",
    "text": "Convertir SVG a PDF"
  },
  {
    "URL": "https://www.pdfequips.com/es/png-to-pdf",
    "text": "Convertir PNG a PDF"
  },
  {
    "URL": "https://www.pdfequips.com/es/pdf-to-png",
    "text": "Convertir PDF a PNG"
  },
  {
    "URL": "https://www.pdfequips.com/es/pdf-to-heif-heic",
    "text": "Convertir PDF a HEIF/HEIC"
  },
  {
    "URL": "https://www.pdfequips.com/es/remove-pages",
    "text": "Eliminar páginas de PDF"
  },
  {
    "URL": "https://www.pdfequips.com/es/read-pdf",
    "text": "Leer archivos PDF"
  },
  {
    "URL": "https://www.pdfequips.com/es/epub-to-pdf",
    "text": "Convertir EPUB a PDF"
  },
  {
    "URL": "https://www.pdfequips.com/es/heif-heic-to-pdf",
    "text": "Convertir HEIF/HEIC a PDF"
  },
  {
    "URL": "https://www.pdfequips.com/es/rtf-to-pdf",
    "text": "Convertir RTF a PDF"
  },
  {
    "URL": "https://www.pdfequips.com/es/pdf-to-svg",
    "text": "Convertir PDF a SVG"
  },
  {
    "URL": "https://www.pdfequips.com/es/pdf-to-gif",
    "text": "Convertir PDF a GIF"
  },
  {
    "URL": "https://www.pdfequips.com/es/sign-pdf",
    "text": "Firmar documentos PDF"
  },
  {
    "URL": "https://www.pdfequips.com/es/pdf-to-rtf",
    "text": "Convertir PDF a RTF"
  },
  {
    "URL": "https://www.pdfequips.com/es/webp-to-pdf",
    "text": "Convertir WebP a PDF"
  },
  {
    "URL": "https://www.pdfequips.com/es/bmp-to-pdf",
    "text": "Convertir BMP a PDF"
  },
  {
    "URL": "https://www.pdfequips.com/es/pdf-to-bmp",
    "text": "Convertir PDF a BMP"
  },
  {
    "URL": "https://www.pdfequips.com/es/crop-pdf",
    "text": "Recortar páginas PDF"
  },
  {
    "URL": "https://www.pdfequips.com/es/resize-pdf",
    "text": "Redimensionar páginas PDF"
  },
  {
    "URL": "https://www.pdfequips.com/es/pdf-to-image",
    "text": "Convertir PDF a imagen"
  },
  {
    "URL": "https://www.pdfequips.com/es/psd-to-pdf",
    "text": "Convertir PSD a PDF"
  },
  {
    "URL": "https://www.pdfequips.com/es/pdf-to-csv",
    "text": "Convertir PDF a CSV"
  },
  {
    "URL": "https://www.pdfequips.com/es/merge-pages",
    "text": "Unir páginas PDF"
  },
  {
    "URL": "https://www.pdfequips.com/es/image-to-pdf",
    "text": "Convertir imagen a PDF"
  },
  {
    "URL": "https://www.pdfequips.com/es/excel-to-pdf",
    "text": "Convertir Excel a PDF"
  },
  {
    "URL": "https://www.pdfequips.com/es/html-to-pdf",
    "text": "Convertir HTML a PDF"
  },
  {
    "URL": "https://www.pdfequips.com/es/text-to-pdf",
    "text": "Convertir texto a PDF"
  },
  {
    "URL": "https://www.pdfequips.com/es/gif-to-pdf",
    "text": "Convertir GIF a PDF"
  },
  {
    "URL": "https://www.pdfequips.com/es/csv-to-pdf",
    "text": "Convertir CSV a PDF"
  },
  {
    "URL": "https://www.pdfequips.com/es/pdf-to-epub",
    "text": "Convertir PDF a EPUB"
  }
];

const footer$2 = {
  brand: "PDFEquips",
  conditions: "conditions",
  bottom_row: {
    pdf_tools: "Outils PDF",
    languages: "Langues",
    company: "Entreprise",
    about: "À Propos de Nous",
    faq: "FAQ",
    blog: "Blog",
    legal: {
      title: "Légal",
      terms: "Conditions d'Utilisation",
      privacy_policy: "Politique de Confidentialité"
    },
    contact: "Contactez-nous"
  }
};
const footerLinks$2 = [
  {
    "URL": "https://www.pdfequips.com/fr/pdf-to-psd",
    "text": "Convertir PDF en PSD"
  },
  {
    "URL": "https://www.pdfequips.com/fr/pdf-to-webp",
    "text": "Convertir PDF en WebP"
  },
  {
    "URL": "https://www.pdfequips.com/fr/tiff-to-pdf",
    "text": "Convertir TIFF en PDF"
  },
  {
    "URL": "https://www.pdfequips.com/fr/pdf-to-tiff",
    "text": "Convertir PDF en TIFF"
  },
  {
    "URL": "https://www.pdfequips.com/fr/svg-to-pdf",
    "text": "Convertir SVG en PDF"
  },
  {
    "URL": "https://www.pdfequips.com/fr/png-to-pdf",
    "text": "Convertir PNG en PDF"
  },
  {
    "URL": "https://www.pdfequips.com/fr/pdf-to-png",
    "text": "Convertir PDF en PNG"
  },
  {
    "URL": "https://www.pdfequips.com/fr/pdf-to-heif-heic",
    "text": "Convertir PDF en HEIF/HEIC"
  },
  {
    "URL": "https://www.pdfequips.com/fr/remove-pages",
    "text": "Supprimer des pages du PDF"
  },
  {
    "URL": "https://www.pdfequips.com/fr/read-pdf",
    "text": "Lire des fichiers PDF"
  },
  {
    "URL": "https://www.pdfequips.com/fr/epub-to-pdf",
    "text": "Convertir EPUB en PDF"
  },
  {
    "URL": "https://www.pdfequips.com/fr/heif-heic-to-pdf",
    "text": "Convertir HEIF/HEIC en PDF"
  },
  {
    "URL": "https://www.pdfequips.com/fr/rtf-to-pdf",
    "text": "Convertir RTF en PDF"
  },
  {
    "URL": "https://www.pdfequips.com/fr/pdf-to-svg",
    "text": "Convertir PDF en SVG"
  },
  {
    "URL": "https://www.pdfequips.com/fr/pdf-to-gif",
    "text": "Convertir PDF en GIF"
  },
  {
    "URL": "https://www.pdfequips.com/fr/sign-pdf",
    "text": "Signer des documents PDF"
  },
  {
    "URL": "https://www.pdfequips.com/fr/pdf-to-rtf",
    "text": "Convertir PDF en RTF"
  },
  {
    "URL": "https://www.pdfequips.com/fr/webp-to-pdf",
    "text": "Convertir WebP en PDF"
  },
  {
    "URL": "https://www.pdfequips.com/fr/bmp-to-pdf",
    "text": "Convertir BMP en PDF"
  },
  {
    "URL": "https://www.pdfequips.com/fr/pdf-to-bmp",
    "text": "Convertir PDF en BMP"
  },
  {
    "URL": "https://www.pdfequips.com/fr/crop-pdf",
    "text": "Rogner les pages PDF"
  },
  {
    "URL": "https://www.pdfequips.com/fr/resize-pdf",
    "text": "Redimensionner les pages PDF"
  },
  {
    "URL": "https://www.pdfequips.com/fr/pdf-to-image",
    "text": "Convertir PDF en image"
  },
  {
    "URL": "https://www.pdfequips.com/fr/psd-to-pdf",
    "text": "Convertir PSD en PDF"
  },
  {
    "URL": "https://www.pdfequips.com/fr/pdf-to-csv",
    "text": "Convertir PDF en CSV"
  },
  {
    "URL": "https://www.pdfequips.com/fr/merge-pages",
    "text": "Fusionner les pages PDF"
  },
  {
    "URL": "https://www.pdfequips.com/fr/image-to-pdf",
    "text": "Convertir image en PDF"
  },
  {
    "URL": "https://www.pdfequips.com/fr/excel-to-pdf",
    "text": "Convertir Excel en PDF"
  },
  {
    "URL": "https://www.pdfequips.com/fr/html-to-pdf",
    "text": "Convertir HTML en PDF"
  },
  {
    "URL": "https://www.pdfequips.com/fr/text-to-pdf",
    "text": "Convertir texte en PDF"
  },
  {
    "URL": "https://www.pdfequips.com/fr/gif-to-pdf",
    "text": "Convertir GIF en PDF"
  },
  {
    "URL": "https://www.pdfequips.com/fr/csv-to-pdf",
    "text": "Convertir CSV en PDF"
  },
  {
    "URL": "https://www.pdfequips.com/fr/pdf-to-epub",
    "text": "Convertir PDF en EPUB"
  }
];

const footer$1 = {
  brand: "PDFEquips",
  conditions: "शर्तें",
  bottom_row: {
    pdf_tools: "PDF उपकरण",
    languages: "भाषाएँ",
    company: "कंपनी",
    about: "हमारे बारे में",
    faq: "सामान्य प्रश्न",
    blog: "ब्लॉग",
    legal: {
      title: "कानूनी",
      terms: "सेवा की शर्तें",
      privacy_policy: "गोपनीयता नीति"
    },
    contact: "हमसे संपर्क करें"
  }
};
const footerLinks$1 = [
  {
    "URL": "https://www.pdfequips.com/hi/pdf-to-psd",
    "text": "PDF को PSD में बदलें"
  },
  {
    "URL": "https://www.pdfequips.com/hi/pdf-to-webp",
    "text": "PDF को WebP में बदलें"
  },
  {
    "URL": "https://www.pdfequips.com/hi/tiff-to-pdf",
    "text": "TIFF को PDF में बदलें"
  },
  {
    "URL": "https://www.pdfequips.com/hi/pdf-to-tiff",
    "text": "PDF को TIFF में बदलें"
  },
  {
    "URL": "https://www.pdfequips.com/hi/svg-to-pdf",
    "text": "SVG को PDF में बदलें"
  },
  {
    "URL": "https://www.pdfequips.com/hi/png-to-pdf",
    "text": "PNG को PDF में बदलें"
  },
  {
    "URL": "https://www.pdfequips.com/hi/pdf-to-png",
    "text": "PDF को PNG में बदलें"
  },
  {
    "URL": "https://www.pdfequips.com/hi/pdf-to-heif-heic",
    "text": "PDF को HEIF/HEIC में बदलें"
  },
  {
    "URL": "https://www.pdfequips.com/hi/remove-pages",
    "text": "PDF से पृष्ठ हटाएं"
  },
  {
    "URL": "https://www.pdfequips.com/hi/read-pdf",
    "text": "PDF फ़ाइलें पढ़ें"
  },
  {
    "URL": "https://www.pdfequips.com/hi/epub-to-pdf",
    "text": "EPUB को PDF में बदलें"
  },
  {
    "URL": "https://www.pdfequips.com/hi/heif-heic-to-pdf",
    "text": "HEIF/HEIC को PDF में बदलें"
  },
  {
    "URL": "https://www.pdfequips.com/hi/rtf-to-pdf",
    "text": "RTF को PDF में बदलें"
  },
  {
    "URL": "https://www.pdfequips.com/hi/pdf-to-svg",
    "text": "PDF को SVG में बदलें"
  },
  {
    "URL": "https://www.pdfequips.com/hi/pdf-to-gif",
    "text": "PDF को GIF में बदलें"
  },
  {
    "URL": "https://www.pdfequips.com/hi/sign-pdf",
    "text": "PDF दस्तावेज़ों पर हस्ताक्षर करें"
  },
  {
    "URL": "https://www.pdfequips.com/hi/pdf-to-rtf",
    "text": "PDF को RTF में बदलें"
  },
  {
    "URL": "https://www.pdfequips.com/hi/webp-to-pdf",
    "text": "WebP को PDF में बदलें"
  },
  {
    "URL": "https://www.pdfequips.com/hi/bmp-to-pdf",
    "text": "BMP को PDF में बदलें"
  },
  {
    "URL": "https://www.pdfequips.com/hi/pdf-to-bmp",
    "text": "PDF को BMP में बदलें"
  },
  {
    "URL": "https://www.pdfequips.com/hi/crop-pdf",
    "text": "PDF पृष्ठों को क्रॉप करें"
  },
  {
    "URL": "https://www.pdfequips.com/hi/resize-pdf",
    "text": "PDF पृष्ठों का आकार बदलें"
  },
  {
    "URL": "https://www.pdfequips.com/hi/pdf-to-image",
    "text": "PDF को छवि में बदलें"
  },
  {
    "URL": "https://www.pdfequips.com/hi/psd-to-pdf",
    "text": "PSD को PDF में बदलें"
  },
  {
    "URL": "https://www.pdfequips.com/hi/pdf-to-csv",
    "text": "PDF को CSV में बदलें"
  },
  {
    "URL": "https://www.pdfequips.com/hi/merge-pages",
    "text": "PDF पृष्ठों को मिलाएं"
  },
  {
    "URL": "https://www.pdfequips.com/hi/image-to-pdf",
    "text": "छवि को PDF में बदलें"
  },
  {
    "URL": "https://www.pdfequips.com/hi/excel-to-pdf",
    "text": "Excel को PDF में बदलें"
  },
  {
    "URL": "https://www.pdfequips.com/hi/html-to-pdf",
    "text": "HTML को PDF में बदलें"
  },
  {
    "URL": "https://www.pdfequips.com/hi/text-to-pdf",
    "text": "पाठ को PDF में बदलें"
  },
  {
    "URL": "https://www.pdfequips.com/hi/gif-to-pdf",
    "text": "GIF को PDF में बदलें"
  },
  {
    "URL": "https://www.pdfequips.com/hi/csv-to-pdf",
    "text": "CSV को PDF में बदलें"
  },
  {
    "URL": "https://www.pdfequips.com/hi/pdf-to-epub",
    "text": "PDF को EPUB में बदलें"
  }
];

const footer = {
  brand: "PDFEquips",
  conditions: "条款",
  bottom_row: {
    pdf_tools: "PDF 工具",
    languages: "语言",
    company: "公司",
    about: "关于我们",
    faq: "常见问题",
    blog: "博客",
    legal: {
      title: "法律",
      terms: "服务条款",
      privacy_policy: "隐私政策"
    },
    contact: "联系我们"
  }
};
const footerLinks = [
  {
    "URL": "https://www.pdfequips.com/zh/pdf-to-psd",
    "text": "将 PDF 转换为 PSD"
  },
  {
    "URL": "https://www.pdfequips.com/zh/pdf-to-webp",
    "text": "将 PDF 转换为 WebP"
  },
  {
    "URL": "https://www.pdfequips.com/zh/tiff-to-pdf",
    "text": "将 TIFF 转换为 PDF"
  },
  {
    "URL": "https://www.pdfequips.com/zh/pdf-to-tiff",
    "text": "将 PDF 转换为 TIFF"
  },
  {
    "URL": "https://www.pdfequips.com/zh/svg-to-pdf",
    "text": "将 SVG 转换为 PDF"
  },
  {
    "URL": "https://www.pdfequips.com/zh/png-to-pdf",
    "text": "将 PNG 转换为 PDF"
  },
  {
    "URL": "https://www.pdfequips.com/zh/pdf-to-png",
    "text": "将 PDF 转换为 PNG"
  },
  {
    "URL": "https://www.pdfequips.com/zh/pdf-to-heif-heic",
    "text": "将 PDF 转换为 HEIF/HEIC"
  },
  {
    "URL": "https://www.pdfequips.com/zh/remove-pages",
    "text": "从 PDF 中删除页面"
  },
  {
    "URL": "https://www.pdfequips.com/zh/read-pdf",
    "text": "阅读 PDF 文件"
  },
  {
    "URL": "https://www.pdfequips.com/zh/epub-to-pdf",
    "text": "将 EPUB 转换为 PDF"
  },
  {
    "URL": "https://www.pdfequips.com/zh/heif-heic-to-pdf",
    "text": "将 HEIF/HEIC 转换为 PDF"
  },
  {
    "URL": "https://www.pdfequips.com/zh/rtf-to-pdf",
    "text": "将 RTF 转换为 PDF"
  },
  {
    "URL": "https://www.pdfequips.com/zh/pdf-to-svg",
    "text": "将 PDF 转换为 SVG"
  },
  {
    "URL": "https://www.pdfequips.com/zh/pdf-to-gif",
    "text": "将 PDF 转换为 GIF"
  },
  {
    "URL": "https://www.pdfequips.com/zh/sign-pdf",
    "text": "签署 PDF 文档"
  },
  {
    "URL": "https://www.pdfequips.com/zh/pdf-to-rtf",
    "text": "将 PDF 转换为 RTF"
  },
  {
    "URL": "https://www.pdfequips.com/zh/webp-to-pdf",
    "text": "将 WebP 转换为 PDF"
  },
  {
    "URL": "https://www.pdfequips.com/zh/bmp-to-pdf",
    "text": "将 BMP 转换为 PDF"
  },
  {
    "URL": "https://www.pdfequips.com/zh/pdf-to-bmp",
    "text": "将 PDF 转换为 BMP"
  },
  {
    "URL": "https://www.pdfequips.com/zh/crop-pdf",
    "text": "裁剪 PDF 页面"
  },
  {
    "URL": "https://www.pdfequips.com/zh/resize-pdf",
    "text": "调整 PDF 页面大小"
  },
  {
    "URL": "https://www.pdfequips.com/zh/pdf-to-image",
    "text": "将 PDF 转换为图片"
  },
  {
    "URL": "https://www.pdfequips.com/zh/psd-to-pdf",
    "text": "将 PSD 转换为 PDF"
  },
  {
    "URL": "https://www.pdfequips.com/zh/pdf-to-csv",
    "text": "将 PDF 转换为 CSV"
  },
  {
    "URL": "https://www.pdfequips.com/zh/merge-pages",
    "text": "合并 PDF 页面"
  },
  {
    "URL": "https://www.pdfequips.com/zh/image-to-pdf",
    "text": "将图片转换为 PDF"
  },
  {
    "URL": "https://www.pdfequips.com/zh/excel-to-pdf",
    "text": "将 Excel 转换为 PDF"
  },
  {
    "URL": "https://www.pdfequips.com/zh/html-to-pdf",
    "text": "将 HTML 转换为 PDF"
  },
  {
    "URL": "https://www.pdfequips.com/zh/text-to-pdf",
    "text": "将文本转换为 PDF"
  },
  {
    "URL": "https://www.pdfequips.com/zh/gif-to-pdf",
    "text": "将 GIF 转换为 PDF"
  },
  {
    "URL": "https://www.pdfequips.com/zh/csv-to-pdf",
    "text": "将 CSV 转换为 PDF"
  },
  {
    "URL": "https://www.pdfequips.com/zh/pdf-to-epub",
    "text": "将 PDF 转换为 EPUB"
  }
];

function getFooterContent(lang) {
  let footerContent;
  switch (lang) {
    case "ar":
      footerContent = footer$4;
      break;
    case "es":
      footerContent = footer$3;
      break;
    case "fr":
      footerContent = footer$2;
      break;
    case "hi":
      footerContent = footer$1;
      break;
    case "zh":
      footerContent = footer;
      break;
    default:
      footerContent = footer$5;
      break;
  }
  return footerContent;
}

function getFooterLinks(lang) {
  let linksContent;
  switch (lang) {
    case "ar":
      linksContent = footerLinks$4;
      break;
    case "es":
      linksContent = footerLinks$3;
      break;
    case "fr":
      linksContent = footerLinks$2;
      break;
    case "hi":
      linksContent = footerLinks$1;
      break;
    case "zh":
      linksContent = footerLinks;
      break;
    default:
      linksContent = footerLinks$5;
      break;
  }
  return linksContent;
}

const Footer = ({
  includeTools = true,
  title,
  lang
}) => {
  const footer = getFooterContent(lang);
  const footerLinks = includeTools ? getFooterLinks(lang) : [];
  return /* @__PURE__ */ jsx("footer", { id: "footer", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "footer-wrapper", children: [
    /* @__PURE__ */ jsxs("div", { className: "copyright-row", children: [
      /* @__PURE__ */ jsxs("p", { className: "copyright-text col text-muted mb-0 py-0", children: [
        footer.brand,
        " © ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ® - ",
        title
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "socials", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://www.facebook.com/pdfequips4real",
            target: "_blank",
            className: "facebook",
            children: /* @__PURE__ */ jsx(FaFacebook, { size: "25" })
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://twitter.com/PDFEquips",
            target: "_blank",
            className: "twitter",
            children: /* @__PURE__ */ jsx(FaXTwitter, { size: "25" })
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://www.instagram.com/sanusihassan122/",
            target: "_blank",
            children: [
              /* @__PURE__ */ jsx("svg", { width: "0", height: "0", children: /* @__PURE__ */ jsxs("radialGradient", { id: "rg", r: "150%", cx: "30%", cy: "107%", children: [
                /* @__PURE__ */ jsx("stop", { stopColor: "#fdf497", offset: "0" }),
                /* @__PURE__ */ jsx("stop", { stopColor: "#fdf497", offset: "0.05" }),
                /* @__PURE__ */ jsx("stop", { stopColor: "#fd5949", offset: "0.45" }),
                /* @__PURE__ */ jsx("stop", { stopColor: "#d6249f", offset: "0.6" }),
                /* @__PURE__ */ jsx("stop", { stopColor: "#285AEB", offset: "0.9" })
              ] }) }),
              /* @__PURE__ */ jsx(FaInstagram, { size: "25", className: "instagram" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://www.linkedin.com/in/sanusi-hassan-umar-343a6011a/",
            target: "_blank",
            className: "linkedin",
            children: /* @__PURE__ */ jsx(FaLinkedinIn, { size: "25" })
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://www.reddit.com/r/pdfequips/",
            target: "_blank",
            className: "reddit",
            children: /* @__PURE__ */ jsx(FaReddit, { size: "25" })
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://www.tiktok.com/@pdfequips",
            target: "_blank",
            className: "tiktok",
            children: /* @__PURE__ */ jsx(FaTiktok, { size: "25" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bottom-row", children: [
      !includeTools ? null : /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("strong", { children: footer.bottom_row.pdf_tools }),
        /* @__PURE__ */ jsx(FooterLinks, { links: footerLinks })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("strong", { children: footer.bottom_row.languages }),
        /* @__PURE__ */ jsxs("ul", { className: "footer-links", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/", className: "text-muted", children: "English" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/ar/", className: "text-muted", children: "العربية" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/es/", className: "text-muted", children: "Español" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/fr/", className: "text-muted", children: "Français" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/hi/", className: "text-muted", children: "हिन्दी" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/zh/", className: "text-muted", children: "中文" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("strong", { children: footer.bottom_row.company }),
        /* @__PURE__ */ jsxs("ul", { className: "footer-links", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/about", className: "text-muted", children: footer.bottom_row.about }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/faq", className: "text-muted", children: footer.bottom_row.faq }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/blog/", className: "text-muted", children: footer.bottom_row.blog }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/contact", className: "text-muted", children: footer.bottom_row.contact }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("strong", { children: footer.bottom_row.legal.title }),
        /* @__PURE__ */ jsxs("ul", { className: "footer-links", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/privacy-policy", className: "text-muted", children: footer.bottom_row.legal.privacy_policy }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/terms", className: "text-muted", children: footer.bottom_row.legal.terms }) })
        ] })
      ] })
    ] })
  ] }) }) });
};

const $$Astro$1 = createAstro();
const $$AstroSeo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AstroSeo;
  const { title, description, openGraph, twitter } = Astro2.props;
  return renderTemplate`<title>${title}</title><meta name="description"${addAttribute(description, "content")}>${openGraph && renderTemplate`${renderComponent($$result, "Fragment", Fragment$1, {}, { "default": ($$result2) => renderTemplate`<meta property="og:type"${addAttribute(openGraph.type || "website", "content")}>${openGraph.url && renderTemplate`<meta property="og:url"${addAttribute(openGraph.url, "content")}>`}<meta property="og:title"${addAttribute(openGraph.title || title, "content")}><meta property="og:description"${addAttribute(openGraph.description || description, "content")}>${openGraph.site_name && renderTemplate`<meta property="og:site_name"${addAttribute(openGraph.site_name, "content")}>`}${openGraph.locale && renderTemplate`<meta property="og:locale"${addAttribute(openGraph.locale, "content")}>`}${openGraph.images?.map((image) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment$1, {}, { "default": ($$result3) => renderTemplate`<meta property="og:image"${addAttribute(image.url, "content")}>${image.width && renderTemplate`<meta property="og:image:width"${addAttribute(image.width.toString(), "content")}>`}${image.height && renderTemplate`<meta property="og:image:height"${addAttribute(image.height.toString(), "content")}>`}${image.alt && renderTemplate`<meta property="og:image:alt"${addAttribute(image.alt, "content")}>`}${image.type && renderTemplate`<meta property="og:image:type"${addAttribute(image.type, "content")}>`}` })}`)}` })}`}${twitter && renderTemplate`${renderComponent($$result, "Fragment", Fragment$1, {}, { "default": ($$result2) => renderTemplate`<meta name="twitter:card"${addAttribute(twitter.cardType || "summary_large_image", "content")}>${twitter.site && renderTemplate`<meta name="twitter:site"${addAttribute(twitter.site, "content")}>`}${twitter.handle && renderTemplate`<meta name="twitter:creator"${addAttribute(twitter.handle, "content")}>`}<meta name="twitter:title"${addAttribute(openGraph?.title || title, "content")}><meta name="twitter:description"${addAttribute(openGraph?.description || description, "content")}>${openGraph?.images?.[0] && renderTemplate`<meta name="twitter:image"${addAttribute(openGraph.images[0].url, "content")}>`}` })}`}`;
}, "/home/pdfequips.com/remove-pages/src/partials/AstroSeo.astro", void 0);

const $$Astro = createAstro();
const localeMap = {
  en: "en_US",
  fr: "fr_FR",
  es: "es_ES",
  ar: "ar_AR",
  hi: "hi_IN",
  zh: "zh_CN"
};
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { seoConfig, lang } = Astro2.props;
  let dir = "ltr";
  if (lang === "ar") {
    dir = "rtl";
  }
  const locale = localeMap[lang || "en"] || "en_US";
  return renderTemplate`<html${addAttribute(lang, "lang")}${addAttribute(dir, "dir")}> <head>${renderComponent($$result, "AstroSeo", $$AstroSeo, { ...seoConfig, "openGraph": {
    ...seoConfig.openGraph,
    locale
  } })}<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#FC271C"><link rel="icon" type="image/svg+xml" href="/images/icons/logo.svg">${renderSlot($$result, $$slots["head"])}${renderHead()}</head> <body> <main> ${renderComponent($$result, "Navbar", Navbar, { "client:load": true, "lang": lang === "en" ? "" : lang, "path": seoConfig.to.replace("/", ""), "client:component-hydration": "load", "client:component-path": "pdfequips-navbar/NavBar", "client:component-export": "default" })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", Footer, { "client:load": true, "title": seoConfig.title, "lang": lang, "client:component-hydration": "load", "client:component-path": "pdfequips-footer/components/Footer.tsx", "client:component-export": "Footer" })} </main> </body></html>`;
}, "/home/pdfequips.com/remove-pages/src/partials/BaseLayout.astro", void 0);

const initialState$1 = {
  showTool: true,
  errorMessage: "",
  isSubmitted: false,
  errorCode: null,
  showDownloadBtn: false,
  showOptions: false,
  fileName: "",
  limitationMsg: "",
  subscriptionStatus: null,
  isAdBlocked: false,
  ocr_warning: "",
  selectedPages: "",
  pageCount: 0
};
const toolSlice = createSlice({
  name: "tool",
  initialState: initialState$1,
  reducers: {
    resetErrorMessage(state) {
      state.errorMessage = "";
      state.errorCode = null;
      state.isSubmitted = false;
    },
    setField(state, action) {
      Object.keys(action.payload).forEach((key) => {
        const typedKey = key;
        const value = action.payload[typedKey];
        if (value !== void 0) {
          state[typedKey] = value;
        }
      });
    }
  }
});
const { resetErrorMessage, setField } = toolSlice.actions;
const selectToolState = (state) => state.tool;
const toolReducer = toolSlice.reducer;

function _toConsumableArray$1(arr) { return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1(); }

function _nonIterableSpread$1() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray$1(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles$1(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$1(arr); }

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray$1(arr, i) { return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1(); }

function _nonIterableRest$1() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$1(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$1(arr) { if (Array.isArray(arr)) return arr; }
var accepts = typeof _accepts === "function" ? _accepts : _accepts.default; // Error codes

var FILE_INVALID_TYPE = "file-invalid-type";
var FILE_TOO_LARGE = "file-too-large";
var FILE_TOO_SMALL = "file-too-small";
var TOO_MANY_FILES = "too-many-files";
/**
 *
 * @param {string} accept
 */

var getInvalidTypeRejectionErr = function getInvalidTypeRejectionErr() {
  var accept = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var acceptArr = accept.split(",");
  var msg = acceptArr.length > 1 ? "one of ".concat(acceptArr.join(", ")) : acceptArr[0];
  return {
    code: FILE_INVALID_TYPE,
    message: "File type must be ".concat(msg)
  };
};
var getTooLargeRejectionErr = function getTooLargeRejectionErr(maxSize) {
  return {
    code: FILE_TOO_LARGE,
    message: "File is larger than ".concat(maxSize, " ").concat(maxSize === 1 ? "byte" : "bytes")
  };
};
var getTooSmallRejectionErr = function getTooSmallRejectionErr(minSize) {
  return {
    code: FILE_TOO_SMALL,
    message: "File is smaller than ".concat(minSize, " ").concat(minSize === 1 ? "byte" : "bytes")
  };
};
var TOO_MANY_FILES_REJECTION = {
  code: TOO_MANY_FILES,
  message: "Too many files"
};
/**
 * Check if the given file is a DataTransferItem with an empty type.
 *
 * During drag events, browsers may return DataTransferItem objects instead of File objects.
 * Some browsers (e.g., Chrome) return an empty MIME type for certain file types (like .md files)
 * on DataTransferItem during drag events, even though the type is correctly set during drop.
 *
 * This function detects such cases by checking for:
 * 1. Empty type string
 * 2. Presence of getAsFile method (indicates it's a DataTransferItem, not a File)
 *
 * We accept these during drag to provide proper UI feedback, while maintaining
 * strict validation during drop when real File objects are available.
 *
 * @param {File | DataTransferItem} file
 * @returns {boolean}
 */

function isDataTransferItemWithEmptyType(file) {
  return file.type === "" && typeof file.getAsFile === "function";
}
/**
 * Check if file is accepted.
 *
 * Firefox versions prior to 53 return a bogus MIME type for every file drag,
 * so dragovers with that MIME type will always be accepted.
 *
 * Chrome/other browsers may return an empty MIME type for files during drag events,
 * so we accept those as well (we'll validate properly on drop).
 *
 * @param {File} file
 * @param {string} accept
 * @returns
 */

function fileAccepted(file, accept) {
  var isAcceptable = file.type === "application/x-moz-file" || accepts(file, accept) || isDataTransferItemWithEmptyType(file);
  return [isAcceptable, isAcceptable ? null : getInvalidTypeRejectionErr(accept)];
}
function fileMatchSize(file, minSize, maxSize) {
  if (isDefined(file.size)) {
    if (isDefined(minSize) && isDefined(maxSize)) {
      if (file.size > maxSize) return [false, getTooLargeRejectionErr(maxSize)];
      if (file.size < minSize) return [false, getTooSmallRejectionErr(minSize)];
    } else if (isDefined(minSize) && file.size < minSize) return [false, getTooSmallRejectionErr(minSize)];else if (isDefined(maxSize) && file.size > maxSize) return [false, getTooLargeRejectionErr(maxSize)];
  }

  return [true, null];
}

function isDefined(value) {
  return value !== undefined && value !== null;
}
/**
 *
 * @param {object} options
 * @param {File[]} options.files
 * @param {string} [options.accept]
 * @param {number} [options.minSize]
 * @param {number} [options.maxSize]
 * @param {boolean} [options.multiple]
 * @param {number} [options.maxFiles]
 * @param {(f: File) => FileError|FileError[]|null} [options.validator]
 * @returns
 */


function allFilesAccepted(_ref) {
  var files = _ref.files,
      accept = _ref.accept,
      minSize = _ref.minSize,
      maxSize = _ref.maxSize,
      multiple = _ref.multiple,
      maxFiles = _ref.maxFiles,
      validator = _ref.validator;

  if (!multiple && files.length > 1 || multiple && maxFiles >= 1 && files.length > maxFiles) {
    return false;
  }

  return files.every(function (file) {
    var _fileAccepted = fileAccepted(file, accept),
        _fileAccepted2 = _slicedToArray$1(_fileAccepted, 1),
        accepted = _fileAccepted2[0];

    var _fileMatchSize = fileMatchSize(file, minSize, maxSize),
        _fileMatchSize2 = _slicedToArray$1(_fileMatchSize, 1),
        sizeMatch = _fileMatchSize2[0];

    var customErrors = validator ? validator(file) : null;
    return accepted && sizeMatch && !customErrors;
  });
} // React's synthetic events has event.isPropagationStopped,
// but to remain compatibility with other libs (Preact) fall back
// to check event.cancelBubble

function isPropagationStopped(event) {
  if (typeof event.isPropagationStopped === "function") {
    return event.isPropagationStopped();
  } else if (typeof event.cancelBubble !== "undefined") {
    return event.cancelBubble;
  }

  return false;
}
function isEvtWithFiles(event) {
  if (!event.dataTransfer) {
    return !!event.target && !!event.target.files;
  } // https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/types
  // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#file


  return Array.prototype.some.call(event.dataTransfer.types, function (type) {
    return type === "Files" || type === "application/x-moz-file";
  });
}

function onDocumentDragOver(event) {
  event.preventDefault();
}

function isIe(userAgent) {
  return userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident/") !== -1;
}

function isEdge(userAgent) {
  return userAgent.indexOf("Edge/") !== -1;
}

function isIeOrEdge() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.navigator.userAgent;
  return isIe(userAgent) || isEdge(userAgent);
}
/**
 * This is intended to be used to compose event handlers
 * They are executed in order until one of them calls `event.isPropagationStopped()`.
 * Note that the check is done on the first invoke too,
 * meaning that if propagation was stopped before invoking the fns,
 * no handlers will be executed.
 *
 * @param {Function} fns the event hanlder functions
 * @return {Function} the event handler to add to an element
 */

function composeEventHandlers() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (event) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return fns.some(function (fn) {
      if (!isPropagationStopped(event) && fn) {
        fn.apply(void 0, [event].concat(args));
      }

      return isPropagationStopped(event);
    });
  };
}
/**
 * canUseFileSystemAccessAPI checks if the [File System Access API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API)
 * is supported by the browser.
 * @returns {boolean}
 */

function canUseFileSystemAccessAPI() {
  return "showOpenFilePicker" in window;
}
/**
 * Convert the `{accept}` dropzone prop to the
 * `{types}` option for https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker
 *
 * @param {AcceptProp} accept
 * @returns {{accept: string[]}[]}
 */

function pickerOptionsFromAccept(accept) {
  if (isDefined(accept)) {
    var acceptForPicker = Object.entries(accept).filter(function (_ref2) {
      var _ref3 = _slicedToArray$1(_ref2, 2),
          mimeType = _ref3[0],
          ext = _ref3[1];

      var ok = true;

      if (!isMIMEType(mimeType)) {
        console.warn("Skipped \"".concat(mimeType, "\" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types."));
        ok = false;
      }

      if (!Array.isArray(ext) || !ext.every(isExt)) {
        console.warn("Skipped \"".concat(mimeType, "\" because an invalid file extension was provided."));
        ok = false;
      }

      return ok;
    }).reduce(function (agg, _ref4) {
      var _ref5 = _slicedToArray$1(_ref4, 2),
          mimeType = _ref5[0],
          ext = _ref5[1];

      return _objectSpread$1(_objectSpread$1({}, agg), {}, _defineProperty$1({}, mimeType, ext));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: acceptForPicker
    }];
  }

  return accept;
}
/**
 * Convert the `{accept}` dropzone prop to an array of MIME types/extensions.
 * @param {AcceptProp} accept
 * @returns {string}
 */

function acceptPropAsAcceptAttr(accept) {
  if (isDefined(accept)) {
    return Object.entries(accept).reduce(function (a, _ref6) {
      var _ref7 = _slicedToArray$1(_ref6, 2),
          mimeType = _ref7[0],
          ext = _ref7[1];

      return [].concat(_toConsumableArray$1(a), [mimeType], _toConsumableArray$1(ext));
    }, []) // Silently discard invalid entries as pickerOptionsFromAccept warns about these
    .filter(function (v) {
      return isMIMEType(v) || isExt(v);
    }).join(",");
  }

  return undefined;
}
/**
 * Check if v is an exception caused by aborting a request (e.g window.showOpenFilePicker()).
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/DOMException.
 * @param {any} v
 * @returns {boolean} True if v is an abort exception.
 */

function isAbort(v) {
  return v instanceof DOMException && (v.name === "AbortError" || v.code === v.ABORT_ERR);
}
/**
 * Check if v is a security error.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/DOMException.
 * @param {any} v
 * @returns {boolean} True if v is a security error.
 */

function isSecurityError(v) {
  return v instanceof DOMException && (v.name === "SecurityError" || v.code === v.SECURITY_ERR);
}
/**
 * Check if v is a MIME type string.
 *
 * See accepted format: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers.
 *
 * @param {string} v
 */

function isMIMEType(v) {
  return v === "audio/*" || v === "video/*" || v === "image/*" || v === "text/*" || v === "application/*" || /\w+\/[-+.\w]+/g.test(v);
}
/**
 * Check if v is a file extension.
 * @param {string} v
 */

function isExt(v) {
  return /^.*\.[\w]+$/.test(v);
}
/**
 * @typedef {Object.<string, string[]>} AcceptProp
 */

/**
 * @typedef {object} FileError
 * @property {string} message
 * @property {ErrorCode|string} code
 */

/**
 * @typedef {"file-invalid-type"|"file-too-large"|"file-too-small"|"too-many-files"} ErrorCode
 */

var _excluded = ["children"],
    _excluded2 = ["open"],
    _excluded3 = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
    _excluded4 = ["refKey", "onChange", "onClick"];

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * Convenience wrapper component for the `useDropzone` hook
 *
 * ```jsx
 * <Dropzone>
 *   {({getRootProps, getInputProps}) => (
 *     <div {...getRootProps()}>
 *       <input {...getInputProps()} />
 *       <p>Drag 'n' drop some files here, or click to select files</p>
 *     </div>
 *   )}
 * </Dropzone>
 * ```
 */

var Dropzone = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var children = _ref.children,
      params = _objectWithoutProperties(_ref, _excluded);

  var _useDropzone = useDropzone(params),
      open = _useDropzone.open,
      props = _objectWithoutProperties(_useDropzone, _excluded2);

  useImperativeHandle(ref, function () {
    return {
      open: open
    };
  }, [open]); // TODO: Figure out why react-styleguidist cannot create docs if we don't return a jsx element

  return /*#__PURE__*/React.createElement(Fragment$2, null, children(_objectSpread(_objectSpread({}, props), {}, {
    open: open
  })));
});
Dropzone.displayName = "Dropzone"; // Add default props for react-docgen

var defaultProps = {
  disabled: false,
  getFilesFromEvent: fromEvent,
  maxSize: Infinity,
  minSize: 0,
  multiple: true,
  maxFiles: 0,
  preventDropOnDocument: true,
  noClick: false,
  noKeyboard: false,
  noDrag: false,
  noDragEventsBubbling: false,
  validator: null,
  useFsAccessApi: false,
  autoFocus: false
};
Dropzone.defaultProps = defaultProps;
Dropzone.propTypes = {
  /**
   * Render function that exposes the dropzone state and prop getter fns
   *
   * @param {object} params
   * @param {Function} params.getRootProps Returns the props you should apply to the root drop container you render
   * @param {Function} params.getInputProps Returns the props you should apply to hidden file input you render
   * @param {Function} params.open Open the native file selection dialog
   * @param {boolean} params.isFocused Dropzone area is in focus
   * @param {boolean} params.isFileDialogActive File dialog is opened
   * @param {boolean} params.isDragActive Active drag is in progress
   * @param {boolean} params.isDragAccept Dragged files are accepted
   * @param {boolean} params.isDragReject Some dragged files are rejected
   * @param {boolean} params.isDragGlobal Files are being dragged anywhere on the document
   * @param {File[]} params.acceptedFiles Accepted files
   * @param {FileRejection[]} params.fileRejections Rejected files and why they were rejected
   */
  children: PropTypes.func,

  /**
   * Set accepted file types.
   * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
   */
  accept: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),

  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: PropTypes.bool,

  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: PropTypes.bool,

  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: PropTypes.bool,

  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: PropTypes.bool,

  /**
   * If true, disables drag 'n' drop
   */
  noDrag: PropTypes.bool,

  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: PropTypes.bool,

  /**
   * Minimum file size (in bytes)
   */
  minSize: PropTypes.number,

  /**
   * Maximum file size (in bytes)
   */
  maxSize: PropTypes.number,

  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: PropTypes.number,

  /**
   * Enable/disable the dropzone
   */
  disabled: PropTypes.bool,

  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event|Array<FileSystemFileHandle>)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: PropTypes.func,

  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: PropTypes.func,

  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: PropTypes.func,

  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: PropTypes.bool,

  /**
   * Set to true to focus the root element on render
   */
  autoFocus: PropTypes.bool,

  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: PropTypes.func,

  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: PropTypes.func,

  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: PropTypes.func,

  /**
   * Cb for when the `drop` event occurs.
   * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
   *
   * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
   * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
   * If `multiple` is set to false and additional files are dropped,
   * all files besides the first will be rejected.
   * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
   *
   * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
   * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
   *
   * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
   * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
   *
   * ```js
   * function onDrop(acceptedFiles) {
   *   const req = request.post('/upload')
   *   acceptedFiles.forEach(file => {
   *     req.attach(file.name, file)
   *   })
   *   req.end(callback)
   * }
   * ```
   *
   * @param {File[]} acceptedFiles
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  onDrop: PropTypes.func,

  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: PropTypes.func,

  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: PropTypes.func,

  /**
   * Cb for when there's some error from any of the promises.
   *
   * @param {Error} error
   */
  onError: PropTypes.func,

  /**
   * Custom validation function. It must return null if there's no errors.
   * @param {File} file
   * @returns {FileError|FileError[]|null}
   */
  validator: PropTypes.func
};
/**
 * A function that is invoked for the `dragenter`,
 * `dragover` and `dragleave` events.
 * It is not invoked if the items are not files (such as link, text, etc.).
 *
 * @callback dragCb
 * @param {DragEvent} event
 */

/**
 * A function that is invoked for the `drop` or input change event.
 * It is not invoked if the items are not files (such as link, text, etc.).
 *
 * @callback dropCb
 * @param {File[]} acceptedFiles List of accepted files
 * @param {FileRejection[]} fileRejections List of rejected files and why they were rejected
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */

/**
 * A function that is invoked for the `drop` or input change event.
 * It is not invoked if the items are files (such as link, text, etc.).
 *
 * @callback dropAcceptedCb
 * @param {File[]} files List of accepted files that meet the given criteria
 * (`accept`, `multiple`, `minSize`, `maxSize`)
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */

/**
 * A function that is invoked for the `drop` or input change event.
 *
 * @callback dropRejectedCb
 * @param {File[]} files List of rejected files that do not meet the given criteria
 * (`accept`, `multiple`, `minSize`, `maxSize`)
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */

/**
 * A function that is used aggregate files,
 * in a asynchronous fashion, from drag or input change events.
 *
 * @callback getFilesFromEvent
 * @param {(DragEvent|Event|Array<FileSystemFileHandle>)} event A drag event or input change event (if files were selected via the file dialog)
 * @returns {(File[]|Promise<File[]>)}
 */

/**
 * An object with the current dropzone state.
 *
 * @typedef {object} DropzoneState
 * @property {boolean} isFocused Dropzone area is in focus
 * @property {boolean} isFileDialogActive File dialog is opened
 * @property {boolean} isDragActive Active drag is in progress
 * @property {boolean} isDragAccept Dragged files are accepted
 * @property {boolean} isDragReject Some dragged files are rejected
 * @property {boolean} isDragGlobal Files are being dragged anywhere on the document
 * @property {File[]} acceptedFiles Accepted files
 * @property {FileRejection[]} fileRejections Rejected files and why they were rejected
 */

/**
 * An object with the dropzone methods.
 *
 * @typedef {object} DropzoneMethods
 * @property {Function} getRootProps Returns the props you should apply to the root drop container you render
 * @property {Function} getInputProps Returns the props you should apply to hidden file input you render
 * @property {Function} open Open the native file selection dialog
 */

var initialState = {
  isFocused: false,
  isFileDialogActive: false,
  isDragActive: false,
  isDragAccept: false,
  isDragReject: false,
  isDragGlobal: false,
  acceptedFiles: [],
  fileRejections: []
};
/**
 * A React hook that creates a drag 'n' drop area.
 *
 * ```jsx
 * function MyDropzone(props) {
 *   const {getRootProps, getInputProps} = useDropzone({
 *     onDrop: acceptedFiles => {
 *       // do something with the File objects, e.g. upload to some server
 *     }
 *   });
 *   return (
 *     <div {...getRootProps()}>
 *       <input {...getInputProps()} />
 *       <p>Drag and drop some files here, or click to select files</p>
 *     </div>
 *   )
 * }
 * ```
 *
 * @function useDropzone
 *
 * @param {object} props
 * @param {import("./utils").AcceptProp} [props.accept] Set accepted file types.
 * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
 * Keep in mind that mime type determination is not reliable across platforms. CSV files,
 * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
 * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
 * @param {boolean} [props.multiple=true] Allow drag 'n' drop (or selection from the file dialog) of multiple files
 * @param {boolean} [props.preventDropOnDocument=true] If false, allow dropped items to take over the current browser window
 * @param {boolean} [props.noClick=false] If true, disables click to open the native file selection dialog
 * @param {boolean} [props.noKeyboard=false] If true, disables SPACE/ENTER to open the native file selection dialog.
 * Note that it also stops tracking the focus state.
 * @param {boolean} [props.noDrag=false] If true, disables drag 'n' drop
 * @param {boolean} [props.noDragEventsBubbling=false] If true, stops drag event propagation to parents
 * @param {number} [props.minSize=0] Minimum file size (in bytes)
 * @param {number} [props.maxSize=Infinity] Maximum file size (in bytes)
 * @param {boolean} [props.disabled=false] Enable/disable the dropzone
 * @param {getFilesFromEvent} [props.getFilesFromEvent] Use this to provide a custom file aggregator
 * @param {Function} [props.onFileDialogCancel] Cb for when closing the file dialog with no selection
 * @param {boolean} [props.useFsAccessApi] Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
 * to open the file picker instead of using an `<input type="file">` click event.
 * @param {boolean} autoFocus Set to true to auto focus the root element.
 * @param {Function} [props.onFileDialogOpen] Cb for when opening the file dialog
 * @param {dragCb} [props.onDragEnter] Cb for when the `dragenter` event occurs.
 * @param {dragCb} [props.onDragLeave] Cb for when the `dragleave` event occurs
 * @param {dragCb} [props.onDragOver] Cb for when the `dragover` event occurs
 * @param {dropCb} [props.onDrop] Cb for when the `drop` event occurs.
 * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
 *
 * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
 * `accept` must be an object with keys as a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) and the value an array of file extensions (optional).
 * If `multiple` is set to false and additional files are dropped,
 * all files besides the first will be rejected.
 * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
 *
 * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
 * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
 *
 * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
 * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
 *
 * ```js
 * function onDrop(acceptedFiles) {
 *   const req = request.post('/upload')
 *   acceptedFiles.forEach(file => {
 *     req.attach(file.name, file)
 *   })
 *   req.end(callback)
 * }
 * ```
 * @param {dropAcceptedCb} [props.onDropAccepted]
 * @param {dropRejectedCb} [props.onDropRejected]
 * @param {(error: Error) => void} [props.onError]
 *
 * @returns {DropzoneState & DropzoneMethods}
 */

function useDropzone() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props),
      accept = _defaultProps$props.accept,
      disabled = _defaultProps$props.disabled,
      getFilesFromEvent = _defaultProps$props.getFilesFromEvent,
      maxSize = _defaultProps$props.maxSize,
      minSize = _defaultProps$props.minSize,
      multiple = _defaultProps$props.multiple,
      maxFiles = _defaultProps$props.maxFiles,
      onDragEnter = _defaultProps$props.onDragEnter,
      onDragLeave = _defaultProps$props.onDragLeave,
      onDragOver = _defaultProps$props.onDragOver,
      onDrop = _defaultProps$props.onDrop,
      onDropAccepted = _defaultProps$props.onDropAccepted,
      onDropRejected = _defaultProps$props.onDropRejected,
      onFileDialogCancel = _defaultProps$props.onFileDialogCancel,
      onFileDialogOpen = _defaultProps$props.onFileDialogOpen,
      useFsAccessApi = _defaultProps$props.useFsAccessApi,
      autoFocus = _defaultProps$props.autoFocus,
      preventDropOnDocument = _defaultProps$props.preventDropOnDocument,
      noClick = _defaultProps$props.noClick,
      noKeyboard = _defaultProps$props.noKeyboard,
      noDrag = _defaultProps$props.noDrag,
      noDragEventsBubbling = _defaultProps$props.noDragEventsBubbling,
      onError = _defaultProps$props.onError,
      validator = _defaultProps$props.validator;

  var acceptAttr = useMemo(function () {
    return acceptPropAsAcceptAttr(accept);
  }, [accept]);
  var pickerTypes = useMemo(function () {
    return pickerOptionsFromAccept(accept);
  }, [accept]);
  var onFileDialogOpenCb = useMemo(function () {
    return typeof onFileDialogOpen === "function" ? onFileDialogOpen : noop;
  }, [onFileDialogOpen]);
  var onFileDialogCancelCb = useMemo(function () {
    return typeof onFileDialogCancel === "function" ? onFileDialogCancel : noop;
  }, [onFileDialogCancel]);
  /**
   * @constant
   * @type {React.MutableRefObject<HTMLElement>}
   */

  var rootRef = useRef(null);
  var inputRef = useRef(null);

  var _useReducer = useReducer(reducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var isFocused = state.isFocused,
      isFileDialogActive = state.isFileDialogActive;
  var fsAccessApiWorksRef = useRef(typeof window !== "undefined" && window.isSecureContext && useFsAccessApi && canUseFileSystemAccessAPI()); // Update file dialog active state when the window is focused on

  var onWindowFocus = function onWindowFocus() {
    // Execute the timeout only if the file dialog is opened in the browser
    if (!fsAccessApiWorksRef.current && isFileDialogActive) {
      setTimeout(function () {
        if (inputRef.current) {
          var files = inputRef.current.files;

          if (!files.length) {
            dispatch({
              type: "closeDialog"
            });
            onFileDialogCancelCb();
          }
        }
      }, 300);
    }
  };

  useEffect(function () {
    window.addEventListener("focus", onWindowFocus, false);
    return function () {
      window.removeEventListener("focus", onWindowFocus, false);
    };
  }, [inputRef, isFileDialogActive, onFileDialogCancelCb, fsAccessApiWorksRef]);
  var dragTargetsRef = useRef([]);
  var globalDragTargetsRef = useRef([]);

  var onDocumentDrop = function onDocumentDrop(event) {
    if (rootRef.current && rootRef.current.contains(event.target)) {
      // If we intercepted an event for our instance, let it propagate down to the instance's onDrop handler
      return;
    }

    event.preventDefault();
    dragTargetsRef.current = [];
  };

  useEffect(function () {
    if (preventDropOnDocument) {
      document.addEventListener("dragover", onDocumentDragOver, false);
      document.addEventListener("drop", onDocumentDrop, false);
    }

    return function () {
      if (preventDropOnDocument) {
        document.removeEventListener("dragover", onDocumentDragOver);
        document.removeEventListener("drop", onDocumentDrop);
      }
    };
  }, [rootRef, preventDropOnDocument]); // Track global drag state for document-level drag events

  useEffect(function () {
    var onDocumentDragEnter = function onDocumentDragEnter(event) {
      globalDragTargetsRef.current = [].concat(_toConsumableArray(globalDragTargetsRef.current), [event.target]);

      if (isEvtWithFiles(event)) {
        dispatch({
          isDragGlobal: true,
          type: "setDragGlobal"
        });
      }
    };

    var onDocumentDragLeave = function onDocumentDragLeave(event) {
      // Only deactivate once we've left all children
      globalDragTargetsRef.current = globalDragTargetsRef.current.filter(function (el) {
        return el !== event.target && el !== null;
      });

      if (globalDragTargetsRef.current.length > 0) {
        return;
      }

      dispatch({
        isDragGlobal: false,
        type: "setDragGlobal"
      });
    };

    var onDocumentDragEnd = function onDocumentDragEnd() {
      globalDragTargetsRef.current = [];
      dispatch({
        isDragGlobal: false,
        type: "setDragGlobal"
      });
    };

    var onDocumentDropGlobal = function onDocumentDropGlobal() {
      globalDragTargetsRef.current = [];
      dispatch({
        isDragGlobal: false,
        type: "setDragGlobal"
      });
    };

    document.addEventListener("dragenter", onDocumentDragEnter, false);
    document.addEventListener("dragleave", onDocumentDragLeave, false);
    document.addEventListener("dragend", onDocumentDragEnd, false);
    document.addEventListener("drop", onDocumentDropGlobal, false);
    return function () {
      document.removeEventListener("dragenter", onDocumentDragEnter);
      document.removeEventListener("dragleave", onDocumentDragLeave);
      document.removeEventListener("dragend", onDocumentDragEnd);
      document.removeEventListener("drop", onDocumentDropGlobal);
    };
  }, [rootRef]); // Auto focus the root when autoFocus is true

  useEffect(function () {
    if (!disabled && autoFocus && rootRef.current) {
      rootRef.current.focus();
    }

    return function () {};
  }, [rootRef, autoFocus, disabled]);
  var onErrCb = useCallback(function (e) {
    if (onError) {
      onError(e);
    } else {
      // Let the user know something's gone wrong if they haven't provided the onError cb.
      console.error(e);
    }
  }, [onError]);
  var onDragEnterCb = useCallback(function (event) {
    event.preventDefault(); // Persist here because we need the event later after getFilesFromEvent() is done

    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [].concat(_toConsumableArray(dragTargetsRef.current), [event.target]);

    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function (files) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }

        var fileCount = files.length;
        var isDragAccept = fileCount > 0 && allFilesAccepted({
          files: files,
          accept: acceptAttr,
          minSize: minSize,
          maxSize: maxSize,
          multiple: multiple,
          maxFiles: maxFiles,
          validator: validator
        });
        var isDragReject = fileCount > 0 && !isDragAccept;
        dispatch({
          isDragAccept: isDragAccept,
          isDragReject: isDragReject,
          isDragActive: true,
          type: "setDraggedFiles"
        });

        if (onDragEnter) {
          onDragEnter(event);
        }
      }).catch(function (e) {
        return onErrCb(e);
      });
    }
  }, [getFilesFromEvent, onDragEnter, onErrCb, noDragEventsBubbling, acceptAttr, minSize, maxSize, multiple, maxFiles, validator]);
  var onDragOverCb = useCallback(function (event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    var hasFiles = isEvtWithFiles(event);

    if (hasFiles && event.dataTransfer) {
      try {
        event.dataTransfer.dropEffect = "copy";
      } catch (_unused) {}
      /* eslint-disable-line no-empty */

    }

    if (hasFiles && onDragOver) {
      onDragOver(event);
    }

    return false;
  }, [onDragOver, noDragEventsBubbling]);
  var onDragLeaveCb = useCallback(function (event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event); // Only deactivate once the dropzone and all children have been left

    var targets = dragTargetsRef.current.filter(function (target) {
      return rootRef.current && rootRef.current.contains(target);
    }); // Make sure to remove a target present multiple times only once
    // (Firefox may fire dragenter/dragleave multiple times on the same element)

    var targetIdx = targets.indexOf(event.target);

    if (targetIdx !== -1) {
      targets.splice(targetIdx, 1);
    }

    dragTargetsRef.current = targets;

    if (targets.length > 0) {
      return;
    }

    dispatch({
      type: "setDraggedFiles",
      isDragActive: false,
      isDragAccept: false,
      isDragReject: false
    });

    if (isEvtWithFiles(event) && onDragLeave) {
      onDragLeave(event);
    }
  }, [rootRef, onDragLeave, noDragEventsBubbling]);
  var setFiles = useCallback(function (files, event) {
    var acceptedFiles = [];
    var fileRejections = [];
    files.forEach(function (file) {
      var _fileAccepted = fileAccepted(file, acceptAttr),
          _fileAccepted2 = _slicedToArray(_fileAccepted, 2),
          accepted = _fileAccepted2[0],
          acceptError = _fileAccepted2[1];

      var _fileMatchSize = fileMatchSize(file, minSize, maxSize),
          _fileMatchSize2 = _slicedToArray(_fileMatchSize, 2),
          sizeMatch = _fileMatchSize2[0],
          sizeError = _fileMatchSize2[1];

      var customErrors = validator ? validator(file) : null;

      if (accepted && sizeMatch && !customErrors) {
        acceptedFiles.push(file);
      } else {
        var errors = [acceptError, sizeError];

        if (customErrors) {
          errors = errors.concat(customErrors);
        }

        fileRejections.push({
          file: file,
          errors: errors.filter(function (e) {
            return e;
          })
        });
      }
    });

    if (!multiple && acceptedFiles.length > 1 || multiple && maxFiles >= 1 && acceptedFiles.length > maxFiles) {
      // Reject everything and empty accepted files
      acceptedFiles.forEach(function (file) {
        fileRejections.push({
          file: file,
          errors: [TOO_MANY_FILES_REJECTION]
        });
      });
      acceptedFiles.splice(0);
    }

    dispatch({
      acceptedFiles: acceptedFiles,
      fileRejections: fileRejections,
      isDragReject: fileRejections.length > 0,
      type: "setFiles"
    });

    if (onDrop) {
      onDrop(acceptedFiles, fileRejections, event);
    }

    if (fileRejections.length > 0 && onDropRejected) {
      onDropRejected(fileRejections, event);
    }

    if (acceptedFiles.length > 0 && onDropAccepted) {
      onDropAccepted(acceptedFiles, event);
    }
  }, [dispatch, multiple, acceptAttr, minSize, maxSize, maxFiles, onDrop, onDropAccepted, onDropRejected, validator]);
  var onDropCb = useCallback(function (event) {
    event.preventDefault(); // Persist here because we need the event later after getFilesFromEvent() is done

    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [];

    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function (files) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }

        setFiles(files, event);
      }).catch(function (e) {
        return onErrCb(e);
      });
    }

    dispatch({
      type: "reset"
    });
  }, [getFilesFromEvent, setFiles, onErrCb, noDragEventsBubbling]); // Fn for opening the file dialog programmatically

  var openFileDialog = useCallback(function () {
    // No point to use FS access APIs if context is not secure
    // https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts#feature_detection
    if (fsAccessApiWorksRef.current) {
      dispatch({
        type: "openDialog"
      });
      onFileDialogOpenCb(); // https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker

      var opts = {
        multiple: multiple,
        types: pickerTypes
      };
      window.showOpenFilePicker(opts).then(function (handles) {
        return getFilesFromEvent(handles);
      }).then(function (files) {
        setFiles(files, null);
        dispatch({
          type: "closeDialog"
        });
      }).catch(function (e) {
        // AbortError means the user canceled
        if (isAbort(e)) {
          onFileDialogCancelCb(e);
          dispatch({
            type: "closeDialog"
          });
        } else if (isSecurityError(e)) {
          fsAccessApiWorksRef.current = false; // CORS, so cannot use this API
          // Try using the input

          if (inputRef.current) {
            inputRef.current.value = null;
            inputRef.current.click();
          } else {
            onErrCb(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."));
          }
        } else {
          onErrCb(e);
        }
      });
      return;
    }

    if (inputRef.current) {
      dispatch({
        type: "openDialog"
      });
      onFileDialogOpenCb();
      inputRef.current.value = null;
      inputRef.current.click();
    }
  }, [dispatch, onFileDialogOpenCb, onFileDialogCancelCb, useFsAccessApi, setFiles, onErrCb, pickerTypes, multiple]); // Cb to open the file dialog when SPACE/ENTER occurs on the dropzone

  var onKeyDownCb = useCallback(function (event) {
    // Ignore keyboard events bubbling up the DOM tree
    if (!rootRef.current || !rootRef.current.isEqualNode(event.target)) {
      return;
    }

    if (event.key === " " || event.key === "Enter" || event.keyCode === 32 || event.keyCode === 13) {
      event.preventDefault();
      openFileDialog();
    }
  }, [rootRef, openFileDialog]); // Update focus state for the dropzone

  var onFocusCb = useCallback(function () {
    dispatch({
      type: "focus"
    });
  }, []);
  var onBlurCb = useCallback(function () {
    dispatch({
      type: "blur"
    });
  }, []); // Cb to open the file dialog when click occurs on the dropzone

  var onClickCb = useCallback(function () {
    if (noClick) {
      return;
    } // In IE11/Edge the file-browser dialog is blocking, therefore, use setTimeout()
    // to ensure React can handle state changes
    // See: https://github.com/react-dropzone/react-dropzone/issues/450


    if (isIeOrEdge()) {
      setTimeout(openFileDialog, 0);
    } else {
      openFileDialog();
    }
  }, [noClick, openFileDialog]);

  var composeHandler = function composeHandler(fn) {
    return disabled ? null : fn;
  };

  var composeKeyboardHandler = function composeKeyboardHandler(fn) {
    return noKeyboard ? null : composeHandler(fn);
  };

  var composeDragHandler = function composeDragHandler(fn) {
    return noDrag ? null : composeHandler(fn);
  };

  var stopPropagation = function stopPropagation(event) {
    if (noDragEventsBubbling) {
      event.stopPropagation();
    }
  };

  var getRootProps = useMemo(function () {
    return function () {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$refKey = _ref2.refKey,
          refKey = _ref2$refKey === void 0 ? "ref" : _ref2$refKey,
          role = _ref2.role,
          onKeyDown = _ref2.onKeyDown,
          onFocus = _ref2.onFocus,
          onBlur = _ref2.onBlur,
          onClick = _ref2.onClick,
          onDragEnter = _ref2.onDragEnter,
          onDragOver = _ref2.onDragOver,
          onDragLeave = _ref2.onDragLeave,
          onDrop = _ref2.onDrop,
          rest = _objectWithoutProperties(_ref2, _excluded3);

      return _objectSpread(_objectSpread(_defineProperty({
        onKeyDown: composeKeyboardHandler(composeEventHandlers(onKeyDown, onKeyDownCb)),
        onFocus: composeKeyboardHandler(composeEventHandlers(onFocus, onFocusCb)),
        onBlur: composeKeyboardHandler(composeEventHandlers(onBlur, onBlurCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onClickCb)),
        onDragEnter: composeDragHandler(composeEventHandlers(onDragEnter, onDragEnterCb)),
        onDragOver: composeDragHandler(composeEventHandlers(onDragOver, onDragOverCb)),
        onDragLeave: composeDragHandler(composeEventHandlers(onDragLeave, onDragLeaveCb)),
        onDrop: composeDragHandler(composeEventHandlers(onDrop, onDropCb)),
        role: typeof role === "string" && role !== "" ? role : "presentation"
      }, refKey, rootRef), !disabled && !noKeyboard ? {
        tabIndex: 0
      } : {}), rest);
    };
  }, [rootRef, onKeyDownCb, onFocusCb, onBlurCb, onClickCb, onDragEnterCb, onDragOverCb, onDragLeaveCb, onDropCb, noKeyboard, noDrag, disabled]);
  var onInputElementClick = useCallback(function (event) {
    event.stopPropagation();
  }, []);
  var getInputProps = useMemo(function () {
    return function () {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$refKey = _ref3.refKey,
          refKey = _ref3$refKey === void 0 ? "ref" : _ref3$refKey,
          onChange = _ref3.onChange,
          onClick = _ref3.onClick,
          rest = _objectWithoutProperties(_ref3, _excluded4);

      var inputProps = _defineProperty({
        accept: acceptAttr,
        multiple: multiple,
        type: "file",
        style: {
          border: 0,
          clip: "rect(0, 0, 0, 0)",
          clipPath: "inset(50%)",
          height: "1px",
          margin: "0 -1px -1px 0",
          overflow: "hidden",
          padding: 0,
          position: "absolute",
          width: "1px",
          whiteSpace: "nowrap"
        },
        onChange: composeHandler(composeEventHandlers(onChange, onDropCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onInputElementClick)),
        tabIndex: -1
      }, refKey, inputRef);

      return _objectSpread(_objectSpread({}, inputProps), rest);
    };
  }, [inputRef, accept, multiple, onDropCb, disabled]);
  return _objectSpread(_objectSpread({}, state), {}, {
    isFocused: isFocused && !disabled,
    getRootProps: getRootProps,
    getInputProps: getInputProps,
    rootRef: rootRef,
    inputRef: inputRef,
    open: composeHandler(openFileDialog)
  });
}
/**
 * @param {DropzoneState} state
 * @param {{type: string} & DropzoneState} action
 * @returns {DropzoneState}
 */

function reducer(state, action) {
  /* istanbul ignore next */
  switch (action.type) {
    case "focus":
      return _objectSpread(_objectSpread({}, state), {}, {
        isFocused: true
      });

    case "blur":
      return _objectSpread(_objectSpread({}, state), {}, {
        isFocused: false
      });

    case "openDialog":
      return _objectSpread(_objectSpread({}, initialState), {}, {
        isFileDialogActive: true
      });

    case "closeDialog":
      return _objectSpread(_objectSpread({}, state), {}, {
        isFileDialogActive: false
      });

    case "setDraggedFiles":
      return _objectSpread(_objectSpread({}, state), {}, {
        isDragActive: action.isDragActive,
        isDragAccept: action.isDragAccept,
        isDragReject: action.isDragReject
      });

    case "setFiles":
      return _objectSpread(_objectSpread({}, state), {}, {
        acceptedFiles: action.acceptedFiles,
        fileRejections: action.fileRejections,
        isDragReject: action.isDragReject
      });

    case "setDragGlobal":
      return _objectSpread(_objectSpread({}, state), {}, {
        isDragGlobal: action.isDragGlobal
      });

    case "reset":
      return _objectSpread({}, initialState);

    default:
      return state;
  }
}

function noop() {}

const useFileStore = create((set) => ({
  files: [],
  fileInput: null,
  downloadBtn: null,
  submitBtn: null,
  imageUrls: [],
  filesOnSubmit: [],
  downloadBlob: null,
  setFiles: (files) => {
    const uniqueFiles = /* @__PURE__ */ new Set();
    if (files instanceof FileList) {
      Array.from(files).forEach((file) => uniqueFiles.add(file));
    } else {
      files.forEach((file) => uniqueFiles.add(file));
    }
    set({ files: Array.from(uniqueFiles) });
  },
  setFileInput(refEl) {
    set({ fileInput: refEl });
  },
  setSubmitBtn(refEl) {
    set({ submitBtn: refEl });
  },
  setImageUrls(value) {
    set((prevState) => ({
      imageUrls: typeof value === "function" ? value(prevState.imageUrls) : value
    }));
  },
  setDownloadBlob: (blob) => set({ downloadBlob: blob }),
  clearDownloadBlob: () => set({ downloadBlob: null })
}));

const THEME_COLOR_DEFAULT$1 = "#d63031";
const PageSkeleton = () => {
  return /* @__PURE__ */ jsx("div", { className: "aspect-3/4 bg-gray-200 rounded animate-pulse" });
};
async function renderPDFPage(file, pageNum, dispatch, errors, password) {
  const fileUrl = URL.createObjectURL(file);
  try {
    const loadingTask = pdfjs.getDocument({
      url: fileUrl,
      password: password || void 0
    });
    const pdf = await loadingTask.promise;
    const page = await pdf.getPage(pageNum);
    const scale = 1.5;
    const viewport = page.getViewport({ scale });
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) {
      throw new Error("Canvas context not available.");
    }
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    const renderTask = page.render({
      canvasContext: context,
      viewport
    });
    await renderTask.promise;
    const imageUrl = canvas.toDataURL();
    URL.revokeObjectURL(fileUrl);
    return imageUrl;
  } catch (error) {
    URL.revokeObjectURL(fileUrl);
    if (error?.name === "PasswordException") {
      dispatch(setField({ errorCode: "PASSWORD_REQUIRED" }));
      return "";
    }
    dispatch(
      setField({
        errorMessage: errors.FILE_CORRUPT?.message || "File is corrupt"
      })
    );
    return "";
  }
}
async function getPDFPageCount(file, dispatch, errors, password) {
  const fileUrl = URL.createObjectURL(file);
  try {
    const loadingTask = pdfjs.getDocument({
      url: fileUrl,
      password: password || void 0
    });
    const pdf = await loadingTask.promise;
    const pageCount = pdf.numPages;
    URL.revokeObjectURL(fileUrl);
    return pageCount;
  } catch (error) {
    URL.revokeObjectURL(fileUrl);
    if (error?.name === "PasswordException") {
      dispatch(setField({ errorCode: "PASSWORD_REQUIRED" }));
      return 0;
    }
    dispatch(
      setField({
        errorMessage: errors.FILE_CORRUPT?.message || "File is corrupt"
      })
    );
    return 0;
  }
}
function parseSelectedPages(selectedPages, maxPages) {
  if (!selectedPages) return [];
  const pages = /* @__PURE__ */ new Set();
  const parts = selectedPages.split(",").map((p) => p.trim()).filter((p) => p);
  for (const part of parts) {
    if (part.includes("-")) {
      const [start, end] = part.split("-").map((n) => parseInt(n.trim(), 10));
      if (!isNaN(start) && !isNaN(end) && start <= end) {
        for (let i = Math.max(1, start); i <= Math.min(maxPages, end); i++) {
          pages.add(i);
        }
      }
    } else {
      const page = parseInt(part, 10);
      if (!isNaN(page) && page >= 1 && page <= maxPages) {
        pages.add(page);
      }
    }
  }
  return Array.from(pages).sort((a, b) => a - b);
}
function formatSelectedPages(pages) {
  if (pages.length === 0) return "";
  const sorted = [...pages].sort((a, b) => a - b);
  const ranges = [];
  let start = sorted[0];
  let end = sorted[0];
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === end + 1) {
      end = sorted[i];
    } else {
      ranges.push(start === end ? `${start}` : `${start}-${end}`);
      start = sorted[i];
      end = sorted[i];
    }
  }
  ranges.push(start === end ? `${start}` : `${start}-${end}`);
  return ranges.join(",");
}
const PageItem = ({
  pageNum,
  imageUrl,
  isMarkedForRemoval,
  onToggleRemove,
  themeColor
}) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `relative aspect-3/4 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${isMarkedForRemoval ? "opacity-50" : ""}`,
      style: {
        borderColor: isMarkedForRemoval ? themeColor : "#e5e7eb"
      },
      onClick: () => onToggleRemove(pageNum),
      children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: imageUrl,
            alt: `Page ${pageNum}`,
            className: "w-full h-full object-contain bg-white",
            draggable: false
          }
        ),
        isMarkedForRemoval && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/40 flex items-center justify-center", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "w-16 h-16 rounded-full flex items-center justify-center",
            style: { backgroundColor: themeColor },
            children: /* @__PURE__ */ jsx(X, { size: 40, className: "text-white", strokeWidth: 3 })
          }
        ) }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `absolute bottom-2 left-2 px-2 py-1 text-white text-xs rounded ${isMarkedForRemoval ? "line-through" : ""}`,
            style: {
              backgroundColor: isMarkedForRemoval ? themeColor : "rgba(0,0,0,0.6)"
            },
            children: pageNum
          }
        )
      ]
    }
  );
};
const RemovePagesFileCard = ({
  file,
  errors,
  content,
  themeColor = THEME_COLOR_DEFAULT$1
}) => {
  const dispatch = useDispatch();
  const { files, setFiles } = useFileStore();
  const [isLoading, setIsLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);
  const [pageImages, setPageImages] = useState([]);
  const isSubscribedRef = useRef(true);
  const { selectedPages } = useSelector(selectToolState);
  const pagesToRemove = parseSelectedPages(selectedPages, pageCount);
  useEffect(() => {
    isSubscribedRef.current = true;
    const loadPDF = async () => {
      setIsLoading(true);
      const count = await getPDFPageCount(file, dispatch, errors);
      if (isSubscribedRef.current && count > 0) {
        setPageCount(count);
        dispatch(setField({ pageCount: count, selectedFile: file.name }));
        const images = [];
        for (let i = 1; i <= count; i++) {
          const imageUrl = await renderPDFPage(file, i, dispatch, errors);
          if (isSubscribedRef.current && imageUrl) {
            images.push({ pageNum: i, imageUrl });
            setPageImages([...images]);
          }
        }
        setIsLoading(false);
      }
    };
    loadPDF();
    return () => {
      isSubscribedRef.current = false;
    };
  }, [file, dispatch, errors]);
  const handleToggleRemove = useCallback(
    (pageNum) => {
      const currentRemoved = parseSelectedPages(selectedPages, pageCount);
      const newRemoved = currentRemoved.includes(pageNum) ? currentRemoved.filter((p) => p !== pageNum) : [...currentRemoved, pageNum];
      const newSelectedString = formatSelectedPages(newRemoved);
      dispatch(setField({ selectedPages: newSelectedString }));
    },
    [selectedPages, pageCount, dispatch]
  );
  const handleRemoveFile = () => {
    const newFiles = files.filter((f) => f.name !== file.name);
    setFiles(newFiles);
    dispatch(setField({ pageCount: 0, selectedFile: "", selectedPages: "" }));
  };
  const remainingPages = pageCount - pagesToRemove.length;
  if (isLoading || pageImages.length === 0) {
    return /* @__PURE__ */ jsxs("div", { className: "w-full max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 flex-1", children: [
          /* @__PURE__ */ jsx(FileText, { size: 24, style: { color: themeColor } }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-800 truncate", children: file.name }),
          /* @__PURE__ */ jsx("span", { className: "px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-400 animate-pulse", children: content.loading })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: handleRemoveFile,
            className: "p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors",
            children: /* @__PURE__ */ jsx(Trash2, { size: 20 })
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: Array.from({ length: Math.min(pageCount || 8, 8) }).map((_, i) => /* @__PURE__ */ jsx(PageSkeleton, {}, i)) })
    ] });
  }
  return /* @__PURE__ */ jsx("div", { className: "w-full max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 flex-1", children: [
        /* @__PURE__ */ jsx(FileText, { size: 24, style: { color: themeColor } }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-800 truncate", children: file.name.length > 40 ? file.name.slice(0, 20) + "..." + file.name.slice(-17) : file.name }),
        /* @__PURE__ */ jsxs(
          "span",
          {
            className: "px-2 py-1 text-xs font-medium rounded-full whitespace-nowrap",
            style: {
              backgroundColor: `${themeColor}15`,
              color: themeColor
            },
            children: [
              pageCount,
              " ",
              pageCount === 1 ? content.page : content.pages
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: handleRemoveFile,
          className: "p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors",
          title: content.remove_file,
          children: /* @__PURE__ */ jsx(Trash2, { size: 20 })
        }
      )
    ] }),
    pagesToRemove.length > 0 && /* @__PURE__ */ jsx(
      "div",
      {
        className: "mb-4 p-3 rounded-lg border",
        style: {
          backgroundColor: `${themeColor}10`,
          borderColor: `${themeColor}40`
        },
        children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm", children: [
          /* @__PURE__ */ jsxs("span", { className: "font-medium", style: { color: themeColor }, children: [
            content.pages_to_remove,
            " ",
            pagesToRemove.length
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "text-gray-600", children: [
            content.remaining,
            " ",
            /* @__PURE__ */ jsx("strong", { children: remainingPages }),
            " ",
            remainingPages === 1 ? content.page : content.pages
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: pageImages.map((pageImage) => /* @__PURE__ */ jsx(
      PageItem,
      {
        pageNum: pageImage.pageNum,
        imageUrl: pageImage.imageUrl,
        isMarkedForRemoval: pagesToRemove.includes(pageImage.pageNum),
        onToggleRemove: handleToggleRemove,
        themeColor
      },
      pageImage.pageNum
    )) }),
    pagesToRemove.length === pageCount && pageCount > 0 && /* @__PURE__ */ jsx("div", { className: "mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-amber-700 mb-0", children: content.warning_cannot_remove_all }) })
  ] }) });
};

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();
let pdfWorker = null;
async function calculatePages(file) {
  if (!pdfWorker) {
    pdfWorker = new Worker(new URL("./pdfWorker.ts", import.meta.url), {
      type: "module"
    });
  }
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async (event) => {
      const arrayBuffer = event.target?.result;
      pdfWorker.postMessage({
        type: "calculatePages",
        data: { fileData: arrayBuffer }
      });
      const handleMessage = (e) => {
        if (e.data.type === "success") {
          pdfWorker.removeEventListener("message", handleMessage);
          resolve(e.data.pageCount);
        } else if (e.data.type === "error") {
          pdfWorker.removeEventListener("message", handleMessage);
          reject(new Error(e.data.error));
        }
      };
      pdfWorker.addEventListener("message", handleMessage);
    };
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsArrayBuffer(file);
  });
}
const PATH_ACCEPTED_FILES = {
  // PDF to other formats - accept PDF only
  "remove-pages": { "application/pdf": [".pdf"] }
};
const getAllMimeTypes = (path) => {
  const accepted = PATH_ACCEPTED_FILES[path];
  return accepted ? Object.keys(accepted) : [];
};
const ACCEPTED = [
  ".pdf"
];
const filterNewFiles = (acceptedFiles, existingFiles, allowedExtensions) => {
  return acceptedFiles.filter((newFile) => {
    const isDuplicate = existingFiles.some(
      (existingFile) => existingFile.name === newFile.name && existingFile.size === newFile.size
    );
    const extensionsToCheck = Array.isArray(allowedExtensions) ? allowedExtensions : [allowedExtensions];
    const hasCorrectExtension = extensionsToCheck.some(
      (ext) => newFile.name.toLowerCase().endsWith(ext.toLowerCase())
    );
    return !isDuplicate && hasCorrectExtension;
  });
};
function genericFileValidation(file, contentType) {
  if (file === null) {
    return "NO_FILES_SELECTED";
  }
  try {
    if (!file.name) {
      return "FILE_CORRUPT";
    }
    if (file.size === 0) {
      return "EMPTY_FILE";
    }
    const allowedTypes = typeof contentType === "string" ? [contentType] : contentType;
    if (!file.type || !allowedTypes.includes(file.type)) {
      return "NOT_SUPPORTED_TYPE";
    }
  } catch {
    return "UNKNOWN_ERROR";
  }
  return null;
}
const validateFiles = (filesToValidate, dispatch, errors, mimetype) => {
  const errorCode = filesToValidate.map((file) => genericFileValidation(file, mimetype)).find((result) => result !== null) || null;
  let tid = null;
  if (errorCode) {
    dispatch(setField({ errorCode }));
    let errMsg = "";
    if (errorCode === "EMPTY_FILE") {
      errMsg = errors.EMPTY_FILE.message;
    } else if (errorCode === "FILE_CORRUPT") {
      errMsg = errors.FILE_CORRUPT.message;
    } else if (errorCode === "NO_FILES_SELECTED") {
      errMsg = errors.NO_FILES_SELECTED.message;
    } else if (errorCode === "NOT_SUPPORTED_TYPE") {
      errMsg = errors.NOT_SUPPORTED_TYPE.message;
    } else if (errorCode === "UNKNOWN_ERROR") {
      errMsg = errors.UNKNOWN_ERROR.message;
    }
    tid = toast(errMsg);
    return { isValid: false };
  }
  if (filesToValidate.length) {
    dispatch(setField({ showTool: false }));
    dispatch(resetErrorMessage());
    if (tid) {
      toast.dismiss(tid);
    }
    return { isValid: true };
  }
  return { isValid: false };
};

const Files = ({ errors, drop_files, path, fileCard }) => {
  const { files, setFiles } = useFileStore();
  const dispatch = useDispatch();
  const subscriptionStatus = useSelector(
    (state) => state.tool.subscriptionStatus
  );
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      let limitationMsg = "";
      (async () => {
        const isSubscribed = subscriptionStatus === null ? await fetchSubscriptionStatus() : subscriptionStatus;
        if (isSubscribed) {
          return;
        }
        if (files.length === 1 && files[0].size >= 100 * 1024 * 1024) {
          limitationMsg = errors.alerts.singleFileSize;
          dispatch(setField({ limitationMsg }));
          return;
        }
        if (files.length >= 15) {
          limitationMsg = errors.alerts.maxFiles;
          dispatch(setField({ limitationMsg }));
          return;
        }
        if (files.some((file) => file.size > 50 * 1024 * 1024)) {
          limitationMsg = errors.alerts.fileSize;
          dispatch(setField({ limitationMsg }));
          return;
        }
        for (const file of files) {
          try {
            const pageCount = await calculatePages(file);
            if (pageCount >= 50) {
              limitationMsg = errors.MAX_PAGES_EXCEEDED.message;
              dispatch(setField({ limitationMsg }));
              return;
            }
          } catch (error) {
            console.error("Error calculating pages:", error);
          }
        }
        dispatch(setField({ limitationMsg: "" }));
      })();
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [files, subscriptionStatus, path]);
  const onDrop = (acceptedFiles) => {
    const { isValid } = validateFiles(
      acceptedFiles,
      dispatch,
      errors,
      getAllMimeTypes(path)
    );
    const newFiles = filterNewFiles(acceptedFiles, files, ACCEPTED);
    if (isValid) {
      setFiles([...files, ...newFiles]);
    }
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: PATH_ACCEPTED_FILES[path],
    noClick: files.length > 0,
    noKeyboard: files.length > 0
  });
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ...getRootProps(),
      className: `position-relative ${isDragActive ? "dragging-over" : ""}`,
      children: [
        /* @__PURE__ */ jsx("input", { ...getInputProps() }),
        isDragActive && /* @__PURE__ */ jsx("div", { className: "overlay display-4", children: drop_files }),
        files.map((file, index) => (
          // <div key={file.name} className="drag-element">
          /* @__PURE__ */ jsx(
            RemovePagesFileCard,
            {
              file,
              errors,
              content: fileCard
            },
            file.name
          )
        ))
      ]
    }
  );
};

const DisplayFile = ({
  extension,
  pages,
  page,
  lang,
  errors,
  edit_page,
  drop_files,
  path
}) => {
  const [toolTipSizes, setToolTipSizes] = useState([]);
  useEffect(() => {
  }, [extension]);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Files,
    {
      errors,
      setToolTipSizes,
      toolTipSizes,
      drop_files,
      path,
      fileCard: edit_page.fileCard
    }
  ) });
};

const CTABtn = ({
  cta,
  centerItem,
  lang
}) => {
  const errorCode = useSelector(
    (state) => state.tool.errorCode
  );
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: centerItem ? "center-item" : errorCode === "INSUFFICIENT_CONVERSION_UNITS" ? "flex justify-between" : void 0,
      children: /* @__PURE__ */ jsx(
        "a",
        {
          href: `${lang !== "en" ? "/" + lang : ""}/pricing`,
          className: "cta-btn",
          target: "_blank",
          onClick: (e) => e.stopPropagation(),
          children: cta
        }
      )
    }
  );
};

const ErrorElement = ({ cta, lang }) => {
  const errorMessage = useSelector(
    (state) => state.tool.errorMessage
  );
  const errorCode = useSelector(
    (state) => state.tool.errorCode
  );
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        style: {
          display: errorMessage.length ? "block" : "none"
        },
        className: "error-element",
        role: "alert",
        children: [
          /* @__PURE__ */ jsx(
            ExclamationCircleIcon,
            {
              className: "w-5 h-5 hide-on-rtl",
              viewBox: "0 0 22 22"
            }
          ),
          " ",
          /* @__PURE__ */ jsx("bdi", { className: "d-inline-flex", children: errorMessage }),
          " ",
          /* @__PURE__ */ jsx(
            ExclamationCircleIcon,
            {
              className: "w-5 h-5 hide-on-ltr",
              viewBox: "0 0 22 22"
            }
          )
        ]
      }
    ),
    errorCode === "MAX_DAILY_USAGE" ? /* @__PURE__ */ jsx(CTABtn, { cta, centerItem: true, lang }) : null
  ] });
};

const AddMoreButton = ({
  path,
  lang,
  text,
  onClick
}) => {
  return /* @__PURE__ */ jsxs(
    "button",
    {
      className: `btn text-white add-more-files ${path}`,
      "data-tooltip-content": text,
      "data-tooltip-id": "add-more-tooltip",
      "data-tooltip-place": lang == "ar" ? "right" : "left",
      onClick,
      style: lang == "ar" ? { order: 1 } : {},
      children: [
        /* @__PURE__ */ jsx("div", { className: "icon-container", children: /* @__PURE__ */ jsx(PlusIcon, { className: "icon" }) }),
        /* @__PURE__ */ jsx(Tooltip, { id: "add-more-tooltip" })
      ]
    }
  );
};

function SubmitBtn({
  k,
  edit_page,
  errors
}) {
  const dispatch = useDispatch();
  const { submitBtn } = useFileStore();
  const errorMessage = useSelector(
    (state) => state.tool.errorMessage
  );
  const isSubmitted = useSelector(
    (state) => state.tool.isSubmitted
  );
  const limitationMsg = useSelector(
    (state) => state.tool.limitationMsg
  );
  const subscriptionStatus = useSelector(
    (state) => state.tool.subscriptionStatus
  );
  const isAdBlockedState = useSelector(
    (state) => state.tool.isAdBlocked
  );
  const isAdBlocked = process.env.NODE_ENV === "development" ? false : isAdBlockedState;
  useEffect(() => {
  }, []);
  return /* @__PURE__ */ jsxs(
    "button",
    {
      className: `submit-btn ${k}`,
      onClick: () => {
        dispatch(setField({ isSubmitted: true }));
        dispatch(setField({ showOptions: false }));
        if (subscriptionStatus) {
          submitBtn?.current?.click();
        } else if (!subscriptionStatus && canUseSiteToday(10)) {
          submitBtn?.current?.click();
        } else {
          dispatch(
            setField({
              errorCode: "MAX_DAILY_USAGE"
            })
          );
          dispatch(setField({ errorMessage: errors.MAX_DAILY_USAGE.message }));
          toast(errors.MAX_DAILY_USAGE.message);
          dispatch(
            setField({
              isSubmitted: false
            })
          );
        }
      },
      disabled: errorMessage.length > 0 || limitationMsg.length > 0 || isAdBlocked,
      children: [
        /* @__PURE__ */ jsx("bdi", { children: edit_page.action_buttons[k.replace(/-/g, "_")] }),
        " ",
        isSubmitted ? /* @__PURE__ */ jsx("span", { className: "spinner-grow", role: "status", "aria-hidden": "true" }) : null
      ]
    }
  );
}

const THEME_COLOR_DEFAULT = "#d63031";
const RemovePagesOptions = ({
  content,
  themeColor = THEME_COLOR_DEFAULT
}) => {
  const dispatch = useDispatch();
  const { selectedPages, pageCount } = useSelector(selectToolState);
  const [inputVal, setInputVal] = useState("");
  const timeoutRef = useRef(null);
  useEffect(() => {
    if (selectedPages !== "") {
      setInputVal(selectedPages);
    } else {
      setInputVal("");
    }
    if (pagesToRemoveCount === pageCount && pageCount > 0) {
      dispatch(setField({ limitationMsg: content.warning_cannot_remove_all }));
    } else {
      dispatch(setField({ limitationMsg: "" }));
    }
  }, [selectedPages]);
  const handleInputChange = (value) => {
    setInputVal(value);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      const pattern = /^(\d+(?:-\d+)?,)*(\d+(?:-\d+)?)$/;
      const cleanValue = value.replace(/\s/g, "");
      if (pattern.test(cleanValue) && cleanValue) {
        dispatch(setField({ selectedPages: value }));
      } else if (!cleanValue) {
        dispatch(setField({ selectedPages: "" }));
      }
    }, 2e3);
  };
  const pagesToRemoveCount = selectedPages ? selectedPages.split(",").reduce((count, part) => {
    if (part.includes("-")) {
      const [start, end] = part.split("-").map(Number);
      return count + (end - start + 1);
    }
    return count + 1;
  }, 0) : 0;
  return /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-6", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex items-start gap-3 p-4 rounded-lg mb-6",
        style: {
          backgroundColor: `${themeColor}10`,
          borderLeft: `3px solid ${themeColor}`
        },
        children: [
          /* @__PURE__ */ jsx(
            Info,
            {
              size: 20,
              style: { color: themeColor, marginTop: 2 },
              className: "shrink-0"
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700", children: content.info })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mb-4 pb-4 border-b border-gray-200", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("span", { className: "text-sm text-gray-600", children: [
        content.total_pages,
        ":"
      ] }),
      /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold", style: { color: themeColor }, children: pageCount })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700", children: content.pages_to_remove }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          value: inputVal,
          onChange: (e) => handleInputChange(e.target.value),
          placeholder: content.placeholder,
          className: "w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all",
          style: {
            borderColor: themeColor
          },
          onFocus: (e) => {
            e.target.style.borderColor = themeColor;
            e.target.style.boxShadow = `0 0 0 2px ${themeColor}40`;
          },
          onBlur: (e) => {
            e.target.style.borderColor = "#d1d5db";
            e.target.style.boxShadow = "none";
          }
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500", children: content.helper_text })
    ] }),
    pagesToRemoveCount > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-6 p-4 bg-gray-50 rounded-lg", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm", children: [
        /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: content.summary_pages_to_remove }),
        /* @__PURE__ */ jsx("span", { className: "font-semibold", style: { color: themeColor }, children: pagesToRemoveCount })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm mt-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: content.summary_remaining_pages }),
        /* @__PURE__ */ jsx("span", { className: "font-semibold text-gray-800", children: pageCount - pagesToRemoveCount })
      ] })
    ] }),
    pagesToRemoveCount === pageCount && pageCount > 0 ? /* @__PURE__ */ jsx("div", { className: "mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-amber-700 mb-0", children: content.warning_cannot_remove_all }) }) : null
  ] });
};

const EditPage = ({
  extension,
  edit_page,
  pages,
  page,
  lang,
  errors,
  path,
  drop_files
}) => {
  const errorCode = useSelector(
    (state) => state.tool.errorCode
  );
  const showTool = useSelector(
    (state) => state.tool.showTool
  );
  const showDownloadBtn = useSelector(
    (state) => state.tool.showDownloadBtn
  );
  const showOptions = useSelector(
    (state) => state.tool.showOptions
  );
  const dispatch = useDispatch();
  const { files, fileInput } = useFileStore();
  useEffect(() => {
    if (errorCode == "ERR_NO_FILES_SELECTED" && files.length > 0) {
      dispatch(resetErrorMessage());
    }
  }, []);
  return /* @__PURE__ */ jsxs(
    "aside",
    {
      className: `edit-page ${showTool || showDownloadBtn ? "d-none" : ""}`,
      children: [
        /* @__PURE__ */ jsxs("section", { className: "edit-area position-relative", children: [
          /* @__PURE__ */ jsx(
            DisplayFile,
            {
              extension,
              pages,
              page,
              lang,
              errors,
              edit_page,
              drop_files,
              path
            }
          ),
          /* @__PURE__ */ jsx(ErrorElement, { cta: edit_page.filenameOptions.cta, lang }),
          /* @__PURE__ */ jsx(
            AddMoreButton,
            {
              onClick: () => {
                if (fileInput) {
                  fileInput?.current?.click();
                }
              },
              lang,
              path,
              text: edit_page.add_more_button
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: `gear-button btn btn-light${showOptions ? " active" : ""}`,
              onClick: () => {
                dispatch(setField({ showOptions: !showOptions }));
              },
              children: /* @__PURE__ */ jsx(CogIcon, { className: "w-6 h-6 gear-icon" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("section", { className: `options bg-white ${showOptions ? " expanded" : ""}`, children: [
          /* @__PURE__ */ jsx("h5", { className: "text-uppercase grid-header", children: /* @__PURE__ */ jsx("bdi", { children: edit_page.edit_page_titles[path.replace(
            /-/g,
            "_"
          )] }) }),
          /* @__PURE__ */ jsx(RemovePagesOptions, { content: edit_page.options }),
          /* @__PURE__ */ jsx("div", { className: "hide-onsmall", children: /* @__PURE__ */ jsx(SubmitBtn, { errors, k: path, edit_page }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "show-onsmall", children: /* @__PURE__ */ jsx(SubmitBtn, { errors, k: path, edit_page }) })
      ]
    }
  );
};

let filesOnSubmit = [];
let prevState = null;
async function sendRequest(url, formData) {
  try {
    const response = await axios.post(url, formData, {
      responseType: "blob",
      withCredentials: true,
      headers: { "Content-Type": "multipart/form-data" }
    });
    const blob = new Blob([response.data], {
      type: response.headers["content-type"] || "application/octet-stream"
    });
    return {
      blob,
      mimeType: response.headers["content-type"] || "application/octet-stream"
    };
  } catch (err) {
    if (err.response?.data instanceof Blob) {
      try {
        const text = await err.response.data.text();
        err.response.data = JSON.parse(text);
      } catch (parseError) {
        console.error("Failed to parse error response:", parseError);
        err.response.data = { errcode: "UNKNOWN_ERROR" };
      }
    }
    throw err;
  }
}
async function parseErrorBlob(blob) {
  try {
    const text = await blob.text();
    return JSON.parse(text);
  } catch {
    return null;
  }
}
const mimeTypeLookupTable = {
  "application/zip": {
    outputFileMimeType: "application/zip",
    outputFileName: "merged.zip"
  },
  "application/pdf": {
    outputFileMimeType: "application/pdf",
    outputFileName: "merged.pdf"
  },
  "application/msword": {
    outputFileMimeType: "application/msword",
    outputFileName: "merged.docx"
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
    outputFileMimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    outputFileName: "merged.docx"
  },
  "application/vnd.ms-excel": {
    outputFileMimeType: "application/vnd.ms-excel",
    outputFileName: "merged.xlsx"
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
    outputFileMimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    outputFileName: "merged.xlsx"
  },
  "application/vnd.ms-powerpoint": {
    outputFileMimeType: "application/vnd.ms-powerpoint",
    outputFileName: "merged.pptx"
  },
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
    outputFileMimeType: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    outputFileName: "merged.pptx"
  },
  "text/plain": {
    outputFileMimeType: "text/plain",
    outputFileName: "merged.txt"
  }
};
const handleUpload = async (e, dispatch, state, files, errors, setDownloadBlob) => {
  e.preventDefault();
  dispatch(setField({ isSubmitted: true }));
  if (!files) {
    dispatch(setField({ isSubmitted: false }));
    return;
  }
  const fileNames = files.map((file) => file.name);
  const allFilesPresent = fileNames.every(
    (fileName) => filesOnSubmit.includes(fileName)
  );
  const strState = JSON.stringify(state);
  if (allFilesPresent && files.length === filesOnSubmit.length && prevState === strState) {
    dispatch(setField({ showDownloadBtn: true }));
    dispatch(resetErrorMessage());
    return;
  }
  prevState = strState;
  const formData = new FormData();
  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
  }
  formData.append("selectedPages", state.selectedPages);
  let url = "";
  if (process.env.NODE_ENV === "development") {
    url = `http://localhost:8000/api/${state.path}`;
  } else {
    url = `/api/${state.path}`;
  }
  if (state.errorMessage) {
    dispatch(setField({ isSubmitted: false }));
    return;
  }
  files[0]?.name?.split(".").slice(0, -1).join(".");
  try {
    const { blob, mimeType } = await sendRequest(url, formData);
    const mimeTypeData = mimeTypeLookupTable[mimeType] || {
      outputFileMimeType: mimeType,
      outputFileName: ""
    };
    const { outputFileMimeType, outputFileName } = mimeTypeData;
    const typedBlob = new Blob([blob], {
      type: outputFileMimeType || "application/octet-stream"
    });
    setDownloadBlob(typedBlob, state.fileName || outputFileName);
    dispatch(setField({ showDownloadBtn: true }));
    dispatch(resetErrorMessage());
    dispatch(setField({ isSubmitted: false }));
    filesOnSubmit = files.map((f) => f.name);
  } catch (error) {
    if (error.code === "ERR_NETWORK") {
      dispatch(setField({ errorMessage: errors.ERR_NETWORK.message }));
      dispatch(setField({ isSubmitted: false }));
      return;
    }
    if (axios.isAxiosError(error) && error.response?.data) {
      const errorData = await parseErrorBlob(error.response.data);
      if (errorData) {
        let limitationMsg = "";
        let errMsg = "";
        switch (errorData.errcode) {
          case "MAX_FILES_EXCEEDED":
            limitationMsg = errors.alerts.maxFiles;
            break;
          case "PER_FILE_PAGES":
            limitationMsg = errors.alerts.perFilePages;
            break;
          case "FILE_TOO_LARGE":
            limitationMsg = errors.alerts.fileSize;
            break;
          case "FILE_CORRUPT":
            limitationMsg = errMsg = errors["FILE_CORRUPT"]?.message || "File is corrupt";
            break;
          case "NOT_SUPPORTED_TYPE":
            errMsg = errors["NOT_SUPPORTED_TYPE"]?.message || "File type not supported";
            break;
          case "NO_FILES_SELECTED":
            errMsg = errors["NO_FILES_SELECTED"]?.message || "No files selected";
            break;
          case "EMPTY_FILE":
            errMsg = errors["EMPTY_FILE"]?.message || "File is empty";
            break;
          default:
            errMsg = errors["UNKNOWN_ERROR"]?.message || "An error occurred";
        }
        if (errMsg) {
          dispatch(setField({ errorMessage: errMsg }));
        }
        if (limitationMsg) {
          dispatch(setField({ limitationMsg }));
        }
      }
    }
    dispatch(setField({ isSubmitted: false }));
  }
};

const handleChange = (e, dispatch, setFiles, errors, files, path) => {
  const _files = e.target?.files || null;
  const finalFiles = [...files, ...Array.from(!_files ? [] : _files)];
  const { isValid } = validateFiles(
    finalFiles,
    dispatch,
    errors,
    getAllMimeTypes(path)
  );
  if (isValid) {
    setFiles(finalFiles);
    const originalFileSize = finalFiles.reduce(
      (total, file) => total + file.size,
      0
    );
    dispatch(
      setField({
        originalFileSize
      })
    );
  }
};

const Loading = ({ theme, show }) => {
  return /* @__PURE__ */ jsx("div", { className: `app-loading-container${show ? " show" : ""}`, children: /* @__PURE__ */ jsx(AiOutlineLoading3Quarters, { className: `loading-icon ${theme}` }) });
};

const FileInputForm = ({
  data,
  acceptedFileTypes,
  errors,
  lang,
  tools
}) => {
  const path = data.to.replace("/", "");
  const errorMessage = useSelector(
    (state) => state.tool.errorMessage
  );
  const fileName = useSelector(
    (state) => state.tool.fileName
  );
  const selectedPages = useSelector(
    (state) => state.tool.selectedPages
  );
  const dispatch = useDispatch();
  const { files, setFiles, setFileInput, setDownloadBlob, setSubmitBtn } = useFileStore();
  const fileInput = useRef(null);
  const submitBtn = useRef(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const setupRefs = () => {
      setLoaded(true);
      setFileInput(fileInput);
      setSubmitBtn(submitBtn);
    };
    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(setupRefs, { timeout: 3e3 });
      return () => cancelIdleCallback(id);
    } else {
      if (document.readyState === "complete") {
        setupRefs();
      } else {
        document.addEventListener("DOMContentLoaded", setupRefs, {
          once: true
        });
        return () => document.removeEventListener("DOMContentLoaded", setupRefs);
      }
    }
  }, [setFileInput, setSubmitBtn]);
  return /* @__PURE__ */ jsxs(
    "form",
    {
      onClick: (e) => {
        e.stopPropagation();
      },
      onSubmit: (e) => handleUpload(
        e,
        dispatch,
        {
          errorMessage,
          fileName,
          path,
          selectedPages
        },
        files,
        errors,
        setDownloadBlob
        // ← ADD
      ),
      method: "POST",
      encType: "multipart/form-data",
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `upload-btn ${path}${!loaded ? " border-0" : ""}`,
            onClick: (e) => {
              e.stopPropagation();
            },
            role: "button",
            children: [
              lang == "ar" ? /* @__PURE__ */ jsxs("bdi", { children: [
                tools.select,
                " ",
                tools.files,
                /* @__PURE__ */ jsx("span", { className: "text-uppercase", children: data.type.replace(".", "") }),
                " "
              ] }) : /* @__PURE__ */ jsxs("bdi", { children: [
                tools.select,
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-uppercase", children: data.type.replace(".", "") }),
                " ",
                tools.files
              ] }),
              /* @__PURE__ */ jsx(Loading, { theme: data.to.replace("/", ""), show: !loaded }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "file",
                  name: "files",
                  accept: acceptedFileTypes[data.type],
                  multiple: true,
                  ref: fileInput,
                  className: `position-absolute file-input${!loaded ? "border-0 opacity-0" : ""}`,
                  onClick: (e) => {
                    e.stopPropagation();
                  },
                  onChange: (e) => {
                    handleChange(e, dispatch, setFiles, errors, files, path);
                  },
                  disabled: !loaded
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx("button", { type: "submit", ref: submitBtn, className: "d-none", children: "submit" })
      ]
    }
  );
};

function saveBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.rel = "noopener";
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 100);
}
const DownloadFile = ({
  lang,
  downloadFile,
  path
}) => {
  const { files, downloadBlob, clearDownloadBlob } = useFileStore();
  const dispatch = useDispatch();
  const showDownloadBtn = useSelector(
    (state) => state.tool.showDownloadBtn
  );
  const subscriptionStatus = useSelector(
    (state) => state.tool.subscriptionStatus
  );
  const fileName = useSelector(
    (state) => state.tool.fileName || files[0].name
  );
  const titles = downloadFile.titles[path];
  const title = titles[files && files.length > 1 ? 0 : 1] || titles[0];
  const handleDownload = () => {
    if (!downloadBlob) return;
    saveBlob(downloadBlob, fileName || "PDFEquips");
    if (!subscriptionStatus) {
      increaseDailySiteUsage();
    }
  };
  const handleBack = () => {
    clearDownloadBlob?.();
    dispatch(setField({ showDownloadBtn: false }));
  };
  useEffect(() => {
  }, [downloadFile, showDownloadBtn]);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: `download-page${showDownloadBtn ? " d-flex" : " d-none"}`,
      children: [
        /* @__PURE__ */ jsx("h3", { className: "text-center mb-4", children: /* @__PURE__ */ jsx("bdi", { children: title }) }),
        /* @__PURE__ */ jsxs("div", { className: "download-btn-container", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              className: "back-btn",
              style: lang == "ar" ? { order: 1 } : {},
              "data-tooltip-content": downloadFile.backto[path],
              "data-tooltip-id": "download-btn-tooltip",
              "data-tooltip-place": "left",
              onClick: handleBack,
              children: [
                /* @__PURE__ */ jsx(ArrowLeftIcon, { className: "icon" }),
                /* @__PURE__ */ jsx(Tooltip, { id: "download-btn-tooltip" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs("button", { className: `download-btn ${path}`, onClick: handleDownload, children: [
            /* @__PURE__ */ jsx(DownloadIcon, { className: "icon text-white mr-2" }),
            /* @__PURE__ */ jsx("bdi", { children: downloadFile.btnText && downloadFile.btnText[path] && downloadFile.btnText[path][files && files.length > 1 ? 0 : 1] })
          ] })
        ] })
      ]
    }
  ) });
};

const Tool = ({
  data,
  tools,
  lang,
  errors,
  edit_page,
  pages,
  page,
  downloadFile
}) => {
  const path = data.to.replace("/", "");
  const stateShowTool = useSelector(
    (state) => state.tool.showTool
  );
  const errorMessage = useSelector(
    (state) => state.tool.errorMessage
  );
  const { setFiles, files } = useFileStore();
  const dispatch = useDispatch();
  const handleHideTool = () => {
    dispatch(setField({ showTool: false }));
  };
  useEffect(() => {
    dispatch(setField({ showDownloadBtn: false }));
  }, [stateShowTool]);
  const onDrop = useCallback((acceptedFiles) => {
    const { isValid } = validateFiles(
      acceptedFiles,
      dispatch,
      errors,
      getAllMimeTypes(path)
    );
    const newFiles = filterNewFiles(acceptedFiles, files, ACCEPTED);
    if (isValid) {
      setFiles(newFiles);
      handleHideTool();
    }
  }, []);
  const handlePaste = useCallback(
    (event) => {
      const items = event.clipboardData?.items;
      if (items) {
        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          if (item.kind === "file") {
            const blob = item.getAsFile();
            if (blob) {
              setFiles([blob]);
              handleHideTool();
              return;
            }
          }
        }
      }
    },
    []
  );
  const { getRootProps, isDragActive } = useDropzone({ onDrop });
  const acceptedFileTypes = {
    ".pdf": ".pdf, .PDF",
    ".pptx": ".pptx, .ppt",
    ".docx": ".docx, .doc",
    ".xlsx": ".xlsx, .xls",
    ".jpg": ".jpg, .jpeg",
    ".html": ".html, .htm"
  };
  useEffect(() => {
    (async () => {
      const subscription = await getUserSubscription();
      const status = subscription.isActive;
      dispatch(setField({ subscriptionStatus: status }));
      if (typeof window !== "undefined") {
        Cookies.set("subscription", JSON.stringify(subscription.subscription));
      }
      if (!status) {
        const head = document.head;
        if (!head.querySelector('meta[name="google-adsense-account"]')) {
          const metaTag = document.createElement("meta");
          metaTag.name = "google-adsense-account";
          metaTag.content = "ca-pub-7801483217621867";
          head.appendChild(metaTag);
        }
        if (!head.querySelector(
          'script[src*="adsbygoogle.js?client=ca-pub-7801483217621867"]'
        )) {
          const scriptTag = document.createElement("script");
          scriptTag.async = true;
          scriptTag.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7801483217621867";
          scriptTag.crossOrigin = "anonymous";
          head.appendChild(scriptTag);
        }
      }
    })();
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "tools-page",
        ...stateShowTool && { ...getRootProps(), onPaste: handlePaste },
        onClick: (e) => {
          e.preventDefault();
        },
        children: [
          isDragActive && /* @__PURE__ */ jsx("div", { className: "overlay display-4", children: tools.drop_files }),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: `text-center${!(stateShowTool && errorMessage?.length > 0) ? "" : " d-flex"} flex-column tools ${stateShowTool ? "" : "d-none"}`,
              children: [
                /* @__PURE__ */ jsx("h1", { className: "title", children: data.title }),
                /* @__PURE__ */ jsx("p", { className: "description", children: data.description }),
                /* @__PURE__ */ jsx(
                  FileInputForm,
                  {
                    lang,
                    data,
                    errors,
                    tools,
                    acceptedFileTypes
                  }
                ),
                /* @__PURE__ */ jsx("p", { children: tools.or_drop }),
                /* @__PURE__ */ jsx(ErrorElement, { cta: edit_page.filenameOptions.cta, lang })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            EditPage,
            {
              extension: data.type,
              edit_page,
              pages,
              page,
              lang,
              errors,
              path,
              drop_files: tools.drop_files
            }
          ),
          /* @__PURE__ */ jsx(DownloadFile, { lang, downloadFile, path })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      ToastContainer,
      {
        position: "top-center",
        autoClose: 5e3,
        hideProgressBar: false,
        newestOnTop: false,
        closeOnClick: false,
        rtl: false,
        pauseOnFocusLoss: true,
        draggable: true,
        pauseOnHover: true,
        theme: "light",
        transition: Bounce
      }
    )
  ] });
};

// THIS FILE IS AUTO GENERATED
function GrSecure (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","strokeWidth":"2","d":"M7,11 L7,6 C7,3 9,1 12,1 C15,1 17,3 17,6 L17,11 M12,23 C15.8659932,23 19,19.8659932 19,16 C19,12.1340068 15.8659932,9 12,9 C8.13400675,9 5,12.1340068 5,16 C5,19.8659932 8.13400675,23 12,23 Z M12,15 L12,19 M12,16 C12.5522847,16 13,15.5522847 13,15 C13,14.4477153 12.5522847,14 12,14 C11.4477153,14 11,14.4477153 11,15 C11,15.5522847 11.4477153,16 12,16 Z"},"child":[]}]})(props);
}

function EasyIcon(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "682.667",
      height: "682.667",
      version: "1",
      viewBox: "0 0 512 512",
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M2241 5106c-49-27-50-37-51-409 0-282 3-353 14-376 35-66 137-66 172 0 19 37 21 703 2 744-22 48-88 68-137 41zM1441 5006c-29-16-50-52-51-86 0-13 73-159 163-323 165-304 181-327 236-327 53 0 101 49 101 102 0 12-73 157-162 321-168 308-182 328-240 327-13-1-34-7-47-14zM3040 5006c-29-17-350-597-350-634 0-53 48-102 101-102 55 0 71 23 237 327 89 164 162 308 162 320 0 78-82 126-150 89z",
            transform: "matrix(.1 0 0 -.1 0 512)"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M3967 4639c-107-25-101-20-1069-992l-928-932-48 52c-73 76-172 281-242 498-55 170-172 356-286 451-158 131-334 212-485 221-103 7-146-5-202-56-51-46-67-85-67-163 0-57 6-76 82-233 247-518 358-879 358-1172 0-107 10-136 57-158 42-20 82-13 114 21 77 82-6 597-153 959-23 55-88 201-145 325-57 123-107 236-110 251-7 34 14 42 75 29 141-31 286-114 388-221 99-105 140-184 229-439 104-298 234-489 382-562 62-30 67-31 103-17 29 11 260 238 975 959 515 520 952 953 972 964 82 45 183 27 247-44 58-64 69-147 29-225-9-16-308-325-665-687-615-622-648-658-648-692 0-54 45-101 98-101 37 0 48 7 120 78 89 86 133 110 209 110 120 0 202-114 173-241-10-46-23-65-90-136-43-46-81-93-85-105-19-61 27-131 87-131 41 0 76 21 133 80 65 67 129 100 196 100 104 0 169-63 177-169 5-75-15-115-102-201-78-76-94-112-72-163 27-65 102-78 165-28 58 45 96 61 151 61 115 0 190-78 190-197 0-33-8-74-18-95-10-23-249-271-616-643-639-646-675-679-829-739-252-100-547-60-766 103-36 27-188 173-337 323-334 336-381 402-439 622-19 71-31 96-52 113-50 40-129 22-152-36-29-70 57-315 172-486 22-33 175-196 341-363 377-380 458-438 696-499 293-75 612-11 847 170 32 24 333 321 668 659 717 722 680 675 680 868 0 104-3 121-27 172-50 107-150 191-261 219l-48 12 7 41c4 22 7 70 6 105-4 171-151 324-339 353l-69 11-11 68c-6 38-23 95-39 126-34 72-123 160-192 192l-53 25 313 315c683 688 674 678 699 819 27 151-57 326-196 407-80 48-205 66-298 44z",
            transform: "matrix(.1 0 0 -.1 0 512)"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M1078 1867c-35-32-44-77-23-116 49-96 185-63 185 44 0 81-103 126-162 72z",
            transform: "matrix(.1 0 0 -.1 0 512)"
          }
        )
      ]
    }
  );
}

function QuickIcon(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "682.667",
      height: "682.667",
      version: "1",
      viewBox: "0 0 512 512",
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M3375 5056c-62-27-91-76-145-244-57-181-61-226-25-287 29-50 51-66 125-90 30-9 58-20 62-24 5-4-17-82-48-173l-55-166-117 5c-120 6-341-10-372-27-9-5-23-22-29-39-10-24-10-34 3-59 9-17 25-33 35-37 11-3 65-1 121 5 130 13 235 13 358-1 658-71 1219-466 1497-1052 253-534 246-1116-22-1647-88-175-175-299-306-437-162-169-316-283-525-388-397-198-863-247-1295-135-797 205-1362 905-1394 1726-7 190 7 337 47 504 66 267 171 490 330 700 210 275 499 492 825 617 49 19 98 42 108 51 40 36 6 122-49 122-36 0-159-47-289-111l-121-59h-623l-20-26c-27-35-26-57 3-91l24-28 196-5 196-5-55-44c-92-74-267-261-342-366-91-128-152-234-212-371l-49-109-279-2c-269-3-279-4-295-24-25-29-23-81 3-105 19-17 42-19 270-22 137-2 249-6 249-10s-11-55-24-114c-38-167-50-309-43-502 4-94 11-191 16-216s7-48 5-52c-3-5-191-8-419-8H281l-20-26c-27-35-26-57 3-91l24-28 432-5 432-5 39-120c75-230 215-482 372-670l75-90-345-5-345-5-24-28c-29-34-30-56-3-91l20-26h866l59-46c185-145 405-260 635-333 635-201 1348-65 1869 356 103 83 273 260 349 363 216 291 353 645 390 1009 74 723-268 1450-876 1863-32 22-64 43-71 47-11 6-3 42 38 172 29 90 54 167 56 171 3 4 30-2 61-13 101-35 185-20 237 42 28 32 136 348 136 394-1 45-34 109-71 138-20 14-121 54-237 92-181 59-206 66-232 55-39-16-56-59-38-97 12-25 33-35 215-96 141-48 204-74 208-86 3-9-17-82-43-161-44-131-51-145-73-147-37-4-1070 340-1083 360-14 22 78 305 101 314 9 4 107-24 219-60 202-67 221-70 257-39 23 20 22 77-2 101s-417 151-467 151c-21-1-53-7-69-14zm454-787c152-50 278-93 281-95 7-7-93-304-103-304-5 0-40 14-79 31-144 63-292 111-429 139l-57 11 51 154c29 85 54 155 56 155s128-41 280-91zM20 3788c-42-45-15-111 52-123 18-3 244-5 501-3l469 3 19 24c25 30 24 76-1 101-19 19-33 20-520 20H41l-21-22z",
            transform: "matrix(.1 0 0 -.1 0 512)"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M2905 3639c-177-23-401-96-557-182-201-109-411-294-535-470-120-170-219-398-264-605-26-127-36-374-19-508 75-606 495-1122 1068-1314 186-62 265-74 502-75 170 0 232 4 297 18 201 43 358 103 518 198 587 346 888 1050 735 1714-168 727-815 1240-1555 1234-66-1-151-6-190-10zm466-164c47-9 90-20 97-24 8-5-39-162-161-531l-173-525-57-7c-32-4-85-19-117-34l-59-26-250 228c-138 126-262 233-275 238-51 19-106-33-92-87 3-15 105-115 266-262 180-164 259-242 255-253-47-123-23-250 65-346 44-48 128-96 167-96 30 0 30-2 47-140 12-96 18-117 36-132 30-24 71-23 99 4 22 20 23 26 17 102-3 45-9 102-12 127-6 46-6 46 38 72 25 14 62 45 83 68l38 42 56-17c238-73 1001-331 1001-339 0-5-20-50-44-100-112-232-279-424-494-568-41-27-77-49-81-49s-27 41-51 91c-25 50-53 95-62 100-27 15-74 10-90-8-32-36-29-57 17-152 25-51 45-96 45-101 0-14-243-88-348-106-130-21-395-15-517 11-44 9-81 19-83 20-2 2 10 46 27 99 37 114 37 116 10 150s-77 36-106 4c-11-13-33-62-49-110-15-49-33-88-39-88-24 0-185 85-275 145-126 84-243 194-335 316-71 94-111 157-103 164 2 1 44 23 94 48s94 53 98 62c11 31 6 72-11 87-38 33-59 30-154-18-88-44-93-45-106-28-18 25-68 181-90 284-26 121-25 418 1 548 10 51 22 94 26 97 3 2 49-9 101-25 52-17 100-30 107-30 24 0 62 48 62 78 0 42-33 66-132 98-49 15-88 33-88 39 0 20 94 198 142 270 104 155 248 298 406 400 40 26 75 45 77 43 1-1 23-45 49-95 37-74 51-94 72-99 39-10 77 7 93 40 13 28 11 35-33 124-26 52-44 98-39 102 27 26 294 99 413 114 75 9 338-3 421-19zm400-142c376-194 648-556 741-986 30-138 32-405 5-549-11-54-22-100-26-102-4-3-243 73-532 167l-524 173-7 57c-10 82-41 144-100 204l-51 52 173 525c162 490 175 526 194 520 12-3 69-31 127-61zm-573-1120c93-69 106-191 28-269-84-84-219-62-273 46-46 91-14 183 82 235 40 21 126 15 163-12zM325 3265c-14-13-25-36-25-50s11-37 25-50l24-25h379c367 0 379 1 400 20 32 30 30 82-4 109-26 20-37 21-401 21H349l-24-25zM25 2215c-14-13-25-36-25-50s11-37 25-50l24-25h289c268 0 292 1 313 19 32 26 32 86 0 112-21 18-45 19-313 19H49l-24-25zM485 1165c-14-13-25-36-25-50s11-37 25-50c24-25 25-25 233-25 190 0 212 2 233 19 17 13 23 29 23 56s-6 43-23 56c-21 17-43 19-233 19-208 0-209 0-233-25z",
            transform: "matrix(.1 0 0 -.1 0 512)"
          }
        )
      ]
    }
  );
}

const Features = ({
  features
}) => {
  const stateShowTool = useSelector(
    (state) => state.tool.showTool
  );
  const icons = [QuickIcon, GrSecure, EasyIcon];
  return /* @__PURE__ */ jsx("div", { className: `features${stateShowTool ? "" : " d-none"}`, children: features.map(({ title, description }, i) => {
    const Icon = icons[i];
    return /* @__PURE__ */ jsxs("div", { className: "feature", children: [
      /* @__PURE__ */ jsx(Icon, { className: "feature-icon" }),
      /* @__PURE__ */ jsx("div", { className: "title", children: title }),
      /* @__PURE__ */ jsx("p", { className: "description", children: description })
    ] }, i);
  }) });
};

const HowTo = ({
  howTo,
  alt,
  imgSrc
}) => {
  const stateShowTool = useSelector(
    (state) => state.tool.showTool
  );
  useEffect(() => {
  }, [stateShowTool]);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: `how-to${stateShowTool ? "" : " d-none"}`, children: [
    /* @__PURE__ */ jsx("div", { className: "image", children: /* @__PURE__ */ jsxs("picture", { children: [
      /* @__PURE__ */ jsx(
        "source",
        {
          srcSet: `/images/${imgSrc}-ad-xs.png`,
          media: "(max-width: 575px)"
        }
      ),
      /* @__PURE__ */ jsx(
        "source",
        {
          srcSet: `/images/${imgSrc}-ad-md.png`,
          media: "(min-width: 575px) and (max-width: 1200px)"
        }
      ),
      /* @__PURE__ */ jsx(
        "source",
        {
          srcSet: `/images/${imgSrc}-ad-xl.png`,
          media: "(min-width: 1200px)"
        }
      ),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: `/pdfequips.png`,
          className: "img-fluid m-auto",
          alt,
          title: alt
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "how-to-steps", children: /* @__PURE__ */ jsxs("div", { itemScope: true, itemType: "https://schema.org/HowTo", children: [
      /* @__PURE__ */ jsx("h2", { itemProp: "name", children: howTo.name }),
      /* @__PURE__ */ jsx("p", { itemProp: "description", children: howTo.description }),
      /* @__PURE__ */ jsx("ol", { itemScope: true, itemType: "https://schema.org/HowToStep", children: howTo.step.map((step, index) => /* @__PURE__ */ jsxs("li", { children: [
        index === 0 ? /* @__PURE__ */ jsx("h3", { itemProp: "name", children: step.name }) : index === 1 ? /* @__PURE__ */ jsx("h4", { className: "h3", itemProp: "name", children: step.name }) : index == 2 ? /* @__PURE__ */ jsx("h6", { className: "h3", itemProp: "name", children: step.name }) : /* @__PURE__ */ jsx("div", { className: "h3", itemProp: "name", children: step.name }),
        /* @__PURE__ */ jsx("p", { itemProp: "text", children: step.text })
      ] }, index)) })
    ] }) })
  ] }) });
};

const checkAdBlocker = async (subscriptionStatus, setIsAdBlocked, dispatch) => {
  if (subscriptionStatus) {
    return;
  }
  await new Promise((resolve) => setTimeout(resolve, 2e3));
  const adSenseBlocked = typeof window.adsbygoogle === "undefined";
  let fetchBlocked = false;
  try {
    await fetch(
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
      { method: "HEAD", mode: "no-cors", cache: "no-store" }
    );
  } catch (error) {
    fetchBlocked = true;
  }
  let baitBlocked = false;
  try {
    const bait = document.createElement("div");
    bait.className = "ad ads adsbox doubleclick ad-placement carbon-ads";
    bait.style.cssText = "position: absolute !important; left: -999px !important; width: 1px !important; height: 1px !important;";
    document.body.appendChild(bait);
    await new Promise((resolve) => setTimeout(resolve, 100));
    baitBlocked = bait.offsetHeight === 0 || bait.offsetWidth === 0 || !bait.offsetParent || window.getComputedStyle(bait).display === "none";
    document.body.removeChild(bait);
  } catch (e) {
    baitBlocked = true;
  }
  const detected = adSenseBlocked || fetchBlocked || baitBlocked;
  setIsAdBlocked(detected);
  if (detected) {
    dispatch(setField({ isAdBlocked: detected }));
  }
};
function AdBlockDetector({
  content,
  lang
}) {
  const [isAdBlocked, setIsAdBlocked] = useState(null);
  const dispatch = useDispatch();
  const subscriptionStatus = useSelector(
    (state) => state.tool.subscriptionStatus
  );
  useEffect(() => {
    if (subscriptionStatus === null) {
      return;
    }
    checkAdBlocker(subscriptionStatus, setIsAdBlocked, dispatch);
  }, [dispatch, subscriptionStatus]);
  const handleReload = () => {
    window.location.reload();
  };
  const pricingUrl = lang ? `/${lang}/pricing` : "/pricing";
  if (isAdBlocked === null) {
    return null;
  }
  return isAdBlocked ? /* @__PURE__ */ jsx("div", { className: "fixed bottom-4 right-4 bg-yellow-50 border-2 border-yellow-400 rounded-lg shadow-lg max-w-sm z-9999 p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
    /* @__PURE__ */ jsx("div", { className: "shrink-0 text-2xl", children: "⚠️" }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-bold text-gray-900 mb-2 text-base", children: content.title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700 mb-3 leading-relaxed", children: content.description }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: pricingUrl,
            className: "w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200 text-center no-underline",
            children: content.upgradeToPremium
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleReload,
            className: "w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded transition-colors duration-200",
            children: content.reloadPage
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setIsAdBlocked(false),
        className: "shrink-0 text-gray-400 hover:text-gray-600 transition-colors",
        "aria-label": "Close",
        children: /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-5 h-5",
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /* @__PURE__ */ jsx("path", { d: "M6 18L18 6M6 6l12 12" })
          }
        )
      }
    )
  ] }) }) : null;
}

let store = null;
function getStore() {
  if (!store) {
    store = configureStore({
      reducer: {
        tool: toolReducer
      }
    });
  }
  return store;
}
function ToolWrapper(props) {
  const { features, seoTitle, to, howTo, adBlockerContent, lang } = props;
  const reduxStore = getStore();
  return /* @__PURE__ */ jsxs(Provider, { store: reduxStore, children: [
    /* @__PURE__ */ jsx(Tool, { ...props }),
    /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx(HowTo, { howTo, alt: seoTitle, imgSrc: to.replace("/", "") }) }),
    /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx(
      Features,
      {
        features
      }
    ) }),
    /* @__PURE__ */ jsx(AdBlockDetector, { content: adBlockerContent, lang })
  ] });
}

export { $$BaseLayout as $, ToolWrapper as T, howToSchema_ar as a, howToSchema_es as b, howToSchema_fr as c, howToSchema_hi as d, howToSchema_zh as e, howToSchema as h };
