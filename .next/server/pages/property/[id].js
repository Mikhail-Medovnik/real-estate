"use strict";
(() => {
var exports = {};
exports.id = 547;
exports.ids = [547];
exports.modules = {

/***/ 3218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
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
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: external "react-horizontal-scrolling-menu"
const external_react_horizontal_scrolling_menu_namespaceObject = require("react-horizontal-scrolling-menu");
;// CONCATENATED MODULE: ./components/ImageScrollbar.jsx







const LeftArrow = ()=>{
    const { scrollPrev  } = (0,external_react_.useContext)(external_react_horizontal_scrolling_menu_namespaceObject.VisibilityContext);
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
        justifyContent: "center",
        alignItems: "center",
        marginRight: "1",
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
            as: fa_.FaArrowAltCircleLeft,
            onClick: ()=>scrollPrev()
            ,
            fontSize: "2xl",
            cursor: "pointer"
        })
    });
};
const RightArrow = ()=>{
    const { scrollNext  } = (0,external_react_.useContext)(external_react_horizontal_scrolling_menu_namespaceObject.VisibilityContext);
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "1",
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
            as: fa_.FaArrowAltCircleRight,
            onClick: ()=>scrollNext()
            ,
            fontSize: "2xl",
            cursor: "pointer"
        })
    });
};
// const LeftArrow = () => {
//   const { scrollPrev } = useContext(VisibilityContext);
//   return (
//     <Flex justifyContent="center" alignItems="center" marginRight="1">
//       <Icon
//         as={FaArrowAltCircleLeft}
//         onClick={() => scrollPrev()}
//         fontSize="2xl"
//         cursor="pointer"
//       />
//     </Flex>
//   );
// };
// const RightArrow = () => {
//   const { scrollNext } = useContext(VisibilityContext);
//   return (
//     <Flex justifyContent="center" alignItems="center" marginRight="1">
//       <Icon
//         as={FaArrowAltCircleRight}
//         onClick={() => scrollNext()}
//         fontSize="2xl"
//         cursor="pointer"
//       />
//     </Flex>
//   );
// };
const ImageScrollbar = ({ data  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_horizontal_scrolling_menu_namespaceObject.ScrollMenu, {
        LeftArrow: LeftArrow,
        RightArrow: RightArrow,
        style: {
            overflow: "hidden"
        },
        children: data.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                width: "910px",
                itemId: item.id,
                overflow: "hidden",
                p: "1",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    alt: "property",
                    placeholder: "blur",
                    blurDataURL: item.url,
                    src: item.url,
                    width: 1000,
                    height: 500,
                    sizes: "(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
                })
            }, item.id)
        )
    });
};
/* harmony default export */ const components_ImageScrollbar = (ImageScrollbar);

// EXTERNAL MODULE: ./utils/fetchApi.js
var fetchApi = __webpack_require__(7355);
;// CONCATENATED MODULE: ./pages/property/[id].js









const PropertyDetails = ({ propertyDetails: { price , rentFrequency , rooms , title , baths , area , agency , isVerified , description , type , purpose , furnishingStatus , amenities , photos ,  } ,  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        maxWidth: "1000px",
        margin: "auto",
        p: "4",
        children: [
            photos && /*#__PURE__*/ jsx_runtime_.jsx(components_ImageScrollbar, {
                data: photos
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                w: "full",
                p: "6",
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
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                        marginTop: "2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                fontSize: "lg",
                                marginBottom: "2",
                                fontWeight: "bold",
                                children: title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                lineHeight: "2",
                                color: "gray.600",
                                children: description
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                flexWrap: "wrap",
                                justifyContent: "space-between",
                                textTransform: "uppercase",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                        justifyContent: "space-between",
                                        w: "400px",
                                        p: "3",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                children: "Type"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                fontWeight: "bold",
                                                children: type
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                        justifyContent: "space-between",
                                        w: "400px",
                                        p: "3",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                children: "Purpose"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                fontWeight: "bold",
                                                children: purpose
                                            })
                                        ]
                                    }),
                                    furnishingStatus && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                        justifyContent: "space-between",
                                        w: "400px",
                                        p: "3",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                children: "Furnishing status"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                fontWeight: "bold",
                                                children: furnishingStatus
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                                children: [
                                    amenities.length && /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                        fontSize: "2xl",
                                        fontWeight: "black",
                                        marginTop: "5",
                                        children: "Amenities"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                                        flexWrap: "wrap",
                                        children: amenities.map((item)=>item.amenities.map((amenity)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                    fontWeight: "bold",
                                                    color: "blue.400",
                                                    fontSize: "l",
                                                    p: "2",
                                                    bg: "gray.200",
                                                    m: "1",
                                                    borderRadius: "5",
                                                    children: amenity.text
                                                }, amenity.text)
                                            )
                                        )
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const _id_ = (PropertyDetails);
async function getServerSideProps({ params: { id  }  }) {
    const data = await (0,fetchApi/* fetchApi */.a)(`${fetchApi/* baseUrl */.F}/properties/detail?externalID=${id}`);
    return {
        props: {
            propertyDetails: data
        }
    };
}


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


/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 9542:
/***/ ((module) => {

module.exports = require("millify");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 5856:
/***/ ((module) => {

module.exports = require("react-icons/go");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,397,675], () => (__webpack_exec__(3218)));
module.exports = __webpack_exports__;

})();