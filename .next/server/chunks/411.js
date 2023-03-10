"use strict";
exports.id = 411;
exports.ids = [411];
exports.modules = {

/***/ 9433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Property)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
// EXTERNAL MODULE: external "react-icons/go"
var go_ = __webpack_require__(5856);
// EXTERNAL MODULE: external "millify"
var external_millify_ = __webpack_require__(9542);
var external_millify_default = /*#__PURE__*/__webpack_require__.n(external_millify_);
;// CONCATENATED MODULE: ./assets/images/defaultImage.jpg
/* harmony default export */ const defaultImage = ({"src":"/_next/static/media/defaultImage.d74ff05a.jpg","height":6381,"width":5105,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAtAL/xAAaEAEAAgMBAAAAAAAAAAAAAAACAQMABhES/9oACAEBAAE/AI3bwm7KqZE8gA2npz//xAAXEQADAQAAAAAAAAAAAAAAAAAAASFS/9oACAECAQE/ALpn/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8Ar//Z"});
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Property.jsx










const Property = ({ property: { coverPhoto , price , rentFrequency , rooms , title , baths , area , agency , isVerified , externalID ,  } ,  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: `/property/${externalID}`,
        passHref: true,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
            flexWrap: "wrap",
            w: "420px",
            p: "5",
            paddingTop: "0",
            justifyContent: "flex-start",
            cursor: "pointer",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: coverPhoto ? coverPhoto.url : defaultImage,
                        alt: "property",
                        width: 400,
                        height: 260
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                    w: "full",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                            paddingTop: "2",
                            alignItems: "center",
                            justifyContent: "space-between",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                            color: "green.400",
                                            paddingRight: "3",
                                            children: isVerified && /*#__PURE__*/ jsx_runtime_.jsx(go_.GoVerified, {})
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                            fontWeight: "bold",
                                            fontSize: "lg",
                                            children: [
                                                "AED ",
                                                external_millify_default()(price),
                                                rentFrequency && `/${rentFrequency}`
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Avatar, {
                                        size: "sm",
                                        src: agency?.logo?.url
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                            alignItems: "center",
                            p: "1",
                            justifyContent: "space-between",
                            w: "250px",
                            color: "blue.400",
                            children: [
                                " ",
                                rooms,
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaBed, {}),
                                " | ",
                                baths,
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaBath, {}),
                                " ",
                                external_millify_default()(area),
                                " sqft",
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsGridFill, {}),
                                " "
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            size: "lg",
                            children: title.length > 30 ? `${title.substring(0, 30)}...` : title
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_Property = (Property);


/***/ }),

/***/ 7355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ baseUrl),
/* harmony export */   "a": () => (/* binding */ fetchApi)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const baseUrl = "https://bayut.p.rapidapi.com";
const fetchApi = async (url)=>{
    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
        headers: {
            "X-RapidAPI-Host": "bayut.p.rapidapi.com",
            "X-RapidAPI-Key": "iFUdxubHsQmshe51vbzzowIsXzBrp1zQDPGjsnlyuFeYlDeBLs"
        }
    });
    return data;
};


/***/ })

};
;