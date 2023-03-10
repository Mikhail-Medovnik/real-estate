"use strict";
(() => {
var exports = {};
exports.id = 603;
exports.ids = [603];
exports.modules = {

/***/ 2132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ search),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
// EXTERNAL MODULE: ./utils/fetchApi.js
var fetchApi = __webpack_require__(7355);
;// CONCATENATED MODULE: external "react-icons/md"
const md_namespaceObject = require("react-icons/md");
;// CONCATENATED MODULE: ./utils/filterData.js
const filterData = [
    {
        items: [
            {
                name: "Buy",
                value: "for-sale"
            },
            {
                name: "Rent",
                value: "for-rent"
            }, 
        ],
        placeholder: "Purpose",
        queryName: "purpose"
    },
    {
        items: [
            {
                name: "Daily",
                value: "daily"
            },
            {
                name: "Weekly",
                value: "weekly"
            },
            {
                name: "Monthly",
                value: "monthly"
            },
            {
                name: "Yearly",
                value: "yearly"
            }, 
        ],
        placeholder: "Rent Frequency",
        queryName: "rentFrequency"
    },
    {
        items: [
            {
                name: "10,000",
                value: "10000"
            },
            {
                name: "20,000",
                value: "20000"
            },
            {
                name: "30,000",
                value: "30000"
            },
            {
                name: "40,000",
                value: "40000"
            },
            {
                name: "50,000",
                value: "50000"
            },
            {
                name: "60,000",
                value: "60000"
            },
            {
                name: "85,000",
                value: "85000"
            }, 
        ],
        placeholder: "Min Price(AED)",
        queryName: "minPrice"
    },
    {
        items: [
            {
                name: "50,000",
                value: "50000"
            },
            {
                name: "60,000",
                value: "60000"
            },
            {
                name: "85,000",
                value: "85000"
            },
            {
                name: "110,000",
                value: "110000"
            },
            {
                name: "135,000",
                value: "135000"
            },
            {
                name: "160,000",
                value: "160000"
            },
            {
                name: "185,000",
                value: "185000"
            },
            {
                name: "200,000",
                value: "200000"
            },
            {
                name: "300,000",
                value: "300000"
            },
            {
                name: "400,000",
                value: "400000"
            },
            {
                name: "500,000",
                value: "500000"
            },
            {
                name: "600,000",
                value: "600000"
            },
            {
                name: "700,000",
                value: "700000"
            },
            {
                name: "800,000",
                value: "800000"
            },
            {
                name: "900,000",
                value: "900000"
            },
            {
                name: "1000,000",
                value: "1000000"
            }, 
        ],
        placeholder: "Max Price(AED)",
        queryName: "maxPrice"
    },
    {
        items: [
            {
                name: "Lowest Price",
                value: "price-asc"
            },
            {
                name: "Highest Price",
                value: "price-des"
            },
            {
                name: "Newest",
                value: "date-asc"
            },
            {
                name: "Oldest",
                value: "date-desc"
            },
            {
                name: "Verified",
                value: "verified-score"
            },
            {
                name: "City Level Score",
                value: "city-level-score"
            }, 
        ],
        placeholder: "Sort",
        queryName: "sort"
    },
    {
        items: [
            {
                name: "1000",
                value: "1000"
            },
            {
                name: "2000",
                value: "2000"
            },
            {
                name: "3000",
                value: "3000"
            },
            {
                name: "4000",
                value: "4000"
            },
            {
                name: "5000",
                value: "5000"
            },
            {
                name: "10000",
                value: "10000"
            },
            {
                name: "20000",
                value: "20000"
            }, 
        ],
        placeholder: "Max Area(sqft)",
        queryName: "areaMax"
    },
    {
        items: [
            {
                name: "1",
                value: "1"
            },
            {
                name: "2",
                value: "2"
            },
            {
                name: "3",
                value: "3"
            },
            {
                name: "4",
                value: "4"
            },
            {
                name: "5",
                value: "5"
            },
            {
                name: "6",
                value: "6"
            },
            {
                name: "7",
                value: "7"
            },
            {
                name: "8",
                value: "8"
            },
            {
                name: "9",
                value: "9"
            },
            {
                name: "10",
                value: "10"
            }, 
        ],
        placeholder: "Rooms",
        queryName: "roomsMin"
    },
    {
        items: [
            {
                name: "1",
                value: "1"
            },
            {
                name: "2",
                value: "2"
            },
            {
                name: "3",
                value: "3"
            },
            {
                name: "4",
                value: "4"
            },
            {
                name: "5",
                value: "5"
            },
            {
                name: "6",
                value: "6"
            },
            {
                name: "7",
                value: "7"
            },
            {
                name: "8",
                value: "8"
            },
            {
                name: "9",
                value: "9"
            },
            {
                name: "10",
                value: "10"
            }, 
        ],
        placeholder: "Baths",
        queryName: "bathsMin"
    },
    {
        items: [
            {
                name: "Furnished",
                value: "furnished"
            },
            {
                name: "Unfurnished",
                value: "unfurnished"
            }, 
        ],
        placeholder: "Furnish Type",
        queryName: "furnishingStatus"
    },
    {
        items: [
            {
                name: "Apartment",
                value: "4"
            },
            {
                name: "Townhouses",
                value: "16"
            },
            {
                name: "Villas",
                value: "3"
            },
            {
                name: "Penthouses",
                value: "18"
            },
            {
                name: "Hotel Apartments",
                value: "21"
            },
            {
                name: "Villa Compound",
                value: "19"
            },
            {
                name: "Residential Plot",
                value: "14"
            },
            {
                name: "Residential Floor",
                value: "12"
            },
            {
                name: "Residential Building",
                value: "17"
            }, 
        ],
        placeholder: "Property Type",
        queryName: "categoryExternalID"
    }, 
];
const getFilterValues = (filterValues)=>{
    const { purpose , rentFrequency , categoryExternalID , minPrice , maxPrice , areaMax , roomsMin , bathsMin , sort , locationExternalIDs ,  } = filterValues;
    const values = [
        {
            name: "purpose",
            value: purpose
        },
        {
            name: "rentFrequency",
            value: rentFrequency
        },
        {
            name: "minPrice",
            value: minPrice
        },
        {
            name: "maxPrice",
            value: maxPrice
        },
        {
            name: "areaMax",
            value: areaMax
        },
        {
            name: "roomsMin",
            value: roomsMin
        },
        {
            name: "bathsMin",
            value: bathsMin
        },
        {
            name: "sort",
            value: sort
        },
        {
            name: "locationExternalIDs",
            value: locationExternalIDs
        },
        {
            name: "categoryExternalID",
            value: categoryExternalID
        }, 
    ];
    return values;
};

;// CONCATENATED MODULE: ./components/SearchFilters.jsx








const SearchFilters = ()=>{
    const { 0: filters , 1: setFilters  } = (0,external_react_.useState)(filterData);
    const router = (0,router_.useRouter)();
    const searchProperties = (filterValues)=>{
        const path = router.pathname;
        const { query  } = router;
        const values = getFilterValues(filterValues);
        values.forEach((item)=>{
            if (item.value && filterValues?.[item.name]) {
                query[item.name] = item.value;
            }
        });
        router.push({
            pathname: path,
            query
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
        bg: "gray.100",
        p: "4",
        justifyContent: "center",
        flexWrap: "wrap",
        children: filters.map((filter)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Select, {
                    placeholder: filter.placeholder,
                    w: "fit-content",
                    p: "2",
                    onChange: (e)=>searchProperties({
                            [filter.queryName]: e.target.value
                        })
                    ,
                    children: filter?.items.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: item.value,
                            children: item.name
                        }, item.value)
                    )
                })
            }, filter.queryName)
        )
    });
};
/* harmony default export */ const components_SearchFilters = (SearchFilters);

// EXTERNAL MODULE: ./components/Property.jsx + 1 modules
var Property = __webpack_require__(9433);
;// CONCATENATED MODULE: ./assets/images/noresult.svg
/* harmony default export */ const noresult = ({"src":"/_next/static/media/noresult.f6477e22.svg","height":129,"width":127});
;// CONCATENATED MODULE: ./pages/search.js











const Search = ({ properties  })=>{
    const { 0: searchFilters , 1: setSearchFilters  } = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    const searchFiltersHandler = ()=>{
        setSearchFilters((prevFilters)=>!prevFilters
        );
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                cursor: "pointer",
                bg: "gray.100",
                borderBottom: "1px",
                borderColor: "gray.200",
                p: "2",
                fontWeight: "black",
                fontSize: "lg",
                justifyContent: "center",
                alignItems: "center",
                onClick: searchFiltersHandler,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        children: "Filter Properties By Category"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
                        paddingLeft: "2",
                        w: "7",
                        as: bs_.BsFilter
                    })
                ]
            }),
            searchFilters && /*#__PURE__*/ jsx_runtime_.jsx(components_SearchFilters, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                fontSize: "2xl",
                p: "4",
                fontWeight: "bold",
                children: [
                    "Properties ",
                    router.query.purpose
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                flexWrap: "wrap",
                children: properties.map((property)=>/*#__PURE__*/ jsx_runtime_.jsx(Property/* default */.Z, {
                        property: property
                    }, property.id)
                )
            }),
            properties.length === 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                marginTop: "5",
                marginBottom: "5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        alt: "no result",
                        src: noresult,
                        width: 200,
                        height: 200
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        fontSize: "2xl",
                        marginTop: "3",
                        children: "No Results Found"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const search = (Search);
async function getServerSideProps({ query  }) {
    const purpose = query.purpose || "for-rent";
    const rentFrequency = query.rentFrequency || "yearly";
    const minPrice = query.minPrice || "0";
    const maxPrice = query.maxPrice || "1000000";
    const roomsMin = query.roomsMin || "0";
    const bathsMin = query.bathsMin || "0";
    const sort = query.sort || "price-desc";
    const areaMax = query.areaMax || "35000";
    const locationExternalIDs = query.locationExternalIDs || "5002";
    const categoryExternalID = query.categoryExternalID || "4";
    const data = await (0,fetchApi/* fetchApi */.a)(`${fetchApi/* baseUrl */.F}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);
    return {
        props: {
            properties: data?.hits
        }
    };
}


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

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,505,397,664,675,411], () => (__webpack_exec__(2132)));
module.exports = __webpack_exports__;

})();