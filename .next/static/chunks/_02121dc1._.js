(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_02121dc1._.js", {

"[project]/sanity/lib/api.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * As this file is reused in several other files, try to keep it lean and small.
 * Importing other npm packages here could lead to needlessly increasing the client bundle size, or end up in a server-only function that don't need it.
 */ __turbopack_context__.s({
    "apiVersion": (()=>apiVersion),
    "dataset": (()=>dataset),
    "projectId": (()=>projectId),
    "studioUrl": (()=>studioUrl)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function assertValue(v, errorMessage) {
    if (v === undefined) {
        throw new Error(errorMessage);
    }
    return v;
}
const dataset = assertValue(("TURBOPACK compile-time value", "production"), "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET");
const projectId = assertValue(("TURBOPACK compile-time value", "4a7aaltu"), "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID");
const apiVersion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-02-28";
const studioUrl = "/studio";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity/plugins/settings.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * This plugin contains all the logic for setting up the singletons
 */ __turbopack_context__.s({
    "pageStructure": (()=>pageStructure),
    "singletonPlugin": (()=>singletonPlugin)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/index.mjs [app-client] (ecmascript) <locals>");
;
const singletonPlugin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["definePlugin"])((types)=>{
    return {
        name: "singletonPlugin",
        document: {
            // Hide 'Singletons (such as Settings)' from new document options
            // https://user-images.githubusercontent.com/81981/195728798-e0c6cf7e-d442-4e58-af3a-8cd99d7fcc28.png
            newDocumentOptions: (prev, { creationContext, ...rest })=>{
                if (creationContext.type === "global") {
                    return prev.filter((templateItem)=>!types.includes(templateItem.templateId));
                }
                return prev;
            },
            // Removes the "duplicate" action on the Singletons (such as Home)
            actions: (prev, { schemaType })=>{
                if (types.includes(schemaType)) {
                    return prev.filter(({ action })=>action !== "duplicate");
                }
                return prev;
            }
        }
    };
});
const pageStructure = (typeDefArray)=>{
    return (S)=>{
        // Goes through all of the singletons that were provided and translates them into something the
        // Structure tool can understand
        const singletonItems = typeDefArray.map((typeDef)=>{
            return S.listItem().title(typeDef.title).icon(typeDef.icon).child(S.editor().id(typeDef.name).schemaType(typeDef.name).documentId(typeDef.name));
        });
        // The default root list items (except custom ones)
        const defaultListItems = S.documentTypeListItems().filter((listItem)=>!typeDefArray.find((singleton)=>singleton.name === listItem.getId()));
        return S.list().title("Content").items([
            ...singletonItems,
            S.divider(),
            ...defaultListItems
        ]);
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity/schemas/documents/author.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.mjs [app-client] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineType"])({
    name: "author",
    title: "Author",
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserIcon"],
    type: "document",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: "name",
            title: "Name",
            type: "string",
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: "picture",
            title: "Picture",
            type: "image",
            fields: [
                {
                    name: "alt",
                    type: "string",
                    title: "Alternative text",
                    description: "Important for SEO and accessiblity.",
                    validation: (rule)=>{
                        return rule.custom((alt, context)=>{
                            if (context.document?.picture?.asset?._ref && !alt) {
                                return "Required";
                            }
                            return true;
                        });
                    }
                }
            ],
            options: {
                hotspot: true,
                aiAssist: {
                    imageDescriptionField: "alt"
                }
            },
            validation: (rule)=>rule.required()
        })
    ]
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity/schemas/documents/post.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/parseISO.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$documents$2f$author$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemas/documents/author.ts [app-client] (ecmascript)");
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'post',
    title: 'Post',
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DocumentTextIcon"],
    type: 'document',
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'A slug is required for the post to show up in the preview',
            options: {
                source: 'title',
                maxLength: 96,
                isUnique: (value, context)=>{
                    const { document } = context;
                    const language = document?.language;
                    const id = document?._id?.replace(/^drafts\./, '');
                    return context.getClient({
                        apiVersion: '2023-01-01'
                    }).fetch(`count(*[_type == "post" && slug.current == $slug && language == $language && _id != $id])`, {
                        slug: value,
                        language,
                        id
                    }).then((count)=>count === 0);
                }
            },
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'language',
            title: 'Language',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Croatian',
                        value: 'hr'
                    },
                    {
                        title: 'English',
                        value: 'en'
                    },
                    {
                        title: 'French',
                        value: 'fr'
                    },
                    {
                        title: 'German',
                        value: 'de'
                    }
                ],
                layout: 'radio'
            },
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'translations',
            title: 'Translations',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {
                            type: 'post'
                        }
                    ]
                }
            ],
            description: 'Link to other language versions of this post.'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {
                    type: 'block'
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            options: {
                hotspot: true,
                aiAssist: {
                    imageDescriptionField: 'alt'
                }
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                    description: 'Important for SEO and accessiblity.',
                    validation: (rule)=>{
                        return rule.custom((alt, context)=>{
                            if (context.document?.coverImage?.asset?._ref && !alt) {
                                return 'Required';
                            }
                            return true;
                        });
                    }
                }
            ],
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'date',
            title: 'Date',
            type: 'datetime',
            initialValue: ()=>new Date().toISOString()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [
                {
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$documents$2f$author$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].name
                }
            ]
        })
    ],
    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            date: 'date',
            media: 'coverImage'
        },
        prepare ({ title, media, author, date }) {
            const subtitles = [
                author && `by ${author}`,
                date && `on ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(date), 'LLL d, yyyy')}`
            ].filter(Boolean);
            return {
                title,
                media,
                subtitle: subtitles.join(' ')
            };
        }
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity/plugins/assist.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * Sets up the AI Assist plugin with preset prompts for content creation
 */ __turbopack_context__.s({
    "assistWithPresets": (()=>assistWithPresets)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$assist$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/assist/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$documents$2f$post$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemas/documents/post.ts [app-client] (ecmascript)");
;
;
const assistWithPresets = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$assist$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assist"])({
        __presets: {
            [__TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$documents$2f$post$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].name]: {
                fields: [
                    {
                        /**
             * Creates Portable Text `content` blocks from the `title` field
             */ path: "content",
                        instructions: [
                            {
                                _key: "preset-instruction-1",
                                title: "Generate sample content",
                                icon: "block-content",
                                prompt: [
                                    {
                                        _key: "86e70087d4d5",
                                        markDefs: [],
                                        children: [
                                            {
                                                _type: "span",
                                                marks: [],
                                                text: "Given the draft title ",
                                                _key: "6b5d5d6a63cf0"
                                            },
                                            {
                                                path: "title",
                                                _type: "sanity.assist.instruction.fieldRef",
                                                _key: "0132742d463b"
                                            },
                                            {
                                                _type: "span",
                                                marks: [],
                                                text: " of a blog post, generate a comprehensive and engaging sample content that spans the length of one to two A4 pages. The content should be structured, informative, and tailored to the subject matter implied by the title, whether it be travel, software engineering, fashion, politics, or any other theme. The text will be displayed below the ",
                                                _key: "a02c9ab4eb2d"
                                            },
                                            {
                                                _type: "sanity.assist.instruction.fieldRef",
                                                _key: "f208ef240062",
                                                path: "title"
                                            },
                                            {
                                                text: " and doesn't need to repeat it in the text. The generated text should include the following elements:",
                                                _key: "8ecfa74a8487",
                                                _type: "span",
                                                marks: []
                                            }
                                        ],
                                        _type: "block",
                                        style: "normal"
                                    },
                                    {
                                        style: "normal",
                                        _key: "e4dded41ea89",
                                        markDefs: [],
                                        children: [
                                            {
                                                _type: "span",
                                                marks: [],
                                                text: "1. Introduction: A brief paragraph that captures the essence of the blog post, hooks the reader with intriguing insights, and outlines the purpose of the post.",
                                                _key: "cc5ef44a2fb5"
                                            }
                                        ],
                                        _type: "block"
                                    },
                                    {
                                        style: "normal",
                                        _key: "585e8de2fe35",
                                        markDefs: [],
                                        children: [
                                            {
                                                _type: "span",
                                                marks: [],
                                                text: "2. Main Body:",
                                                _key: "fab36eb7c541"
                                            }
                                        ],
                                        _type: "block"
                                    },
                                    {
                                        _type: "block",
                                        style: "normal",
                                        _key: "e96b89ef6357",
                                        markDefs: [],
                                        children: [
                                            {
                                                _type: "span",
                                                marks: [],
                                                text: "- For thematic consistency, divide the body into several sections with subheadings that explore different facets of the topic.",
                                                _key: "b685a310a0ff"
                                            }
                                        ]
                                    },
                                    {
                                        children: [
                                            {
                                                marks: [],
                                                text: "- Include engaging and informative content such as personal anecdotes (for travel or fashion blogs), technical explanations or tutorials (for software engineering blogs), satirical or humorous observations (for shitposting), or well-argued positions (for political blogs).",
                                                _key: "c7468d106c91",
                                                _type: "span"
                                            }
                                        ],
                                        _type: "block",
                                        style: "normal",
                                        _key: "ce4acdb00da9",
                                        markDefs: []
                                    },
                                    {
                                        _type: "block",
                                        style: "normal",
                                        _key: "fb4572e65833",
                                        markDefs: [],
                                        children: [
                                            {
                                                _type: "span",
                                                marks: [],
                                                text: "- ",
                                                _key: "5358f261dce4"
                                            },
                                            {
                                                _type: "span",
                                                marks: [],
                                                text: " observations (for shitposting), or well-argued positions (for political blogs).",
                                                _key: "50792c6d0f77"
                                            }
                                        ]
                                    },
                                    {
                                        children: [
                                            {
                                                marks: [],
                                                text: "Where applicable, incorporate bullet points or numbered lists to break down complex information, steps in a process, or key highlights.",
                                                _key: "3b891d8c1dde0",
                                                _type: "span"
                                            }
                                        ],
                                        _type: "block",
                                        style: "normal",
                                        _key: "9364b67074ce",
                                        markDefs: []
                                    },
                                    {
                                        _key: "a6ba7579cd66",
                                        markDefs: [],
                                        children: [
                                            {
                                                _type: "span",
                                                marks: [],
                                                text: "3. Conclusion: Summarize the main points discussed in the post, offer final thoughts or calls to action, and invite readers to engage with the content through comments or social media sharing.",
                                                _key: "1280f11d499d"
                                            }
                                        ],
                                        _type: "block",
                                        style: "normal"
                                    },
                                    {
                                        style: "normal",
                                        _key: "719a79eb4c1c",
                                        markDefs: [],
                                        children: [
                                            {
                                                marks: [],
                                                text: "4. Engagement Prompts: Conclude with questions or prompts that encourage readers to share their experiences, opinions, or questions related to the blog post's topic, but keep in mind there is no Comments field below the blog post.",
                                                _key: "f1512086bab6",
                                                _type: "span"
                                            }
                                        ],
                                        _type: "block"
                                    },
                                    {
                                        _type: "block",
                                        style: "normal",
                                        _key: "4a1c586fd44a",
                                        markDefs: [],
                                        children: [
                                            {
                                                marks: [],
                                                text: "Ensure the generated content maintains a balance between being informative and entertaining, to capture the interest of a wide audience. The sample content should serve as a solid foundation that can be further customized or expanded upon by the blog author to finalize the post.",
                                                _key: "697bbd03cb110",
                                                _type: "span"
                                            }
                                        ]
                                    },
                                    {
                                        children: [
                                            {
                                                marks: [],
                                                text: 'Don\'t prefix each section with "Introduction", "Main Body", "Conclusion" or "Engagement Prompts"',
                                                _key: "d20bb9a03b0d",
                                                _type: "span"
                                            }
                                        ],
                                        _type: "block",
                                        style: "normal",
                                        _key: "b072b3c62c3c",
                                        markDefs: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        /**
             * Summarize content into the `excerpt` field
             */ path: "excerpt",
                        instructions: [
                            {
                                _key: "preset-instruction-2",
                                title: "Summarize content",
                                icon: "blockquote",
                                prompt: [
                                    {
                                        markDefs: [],
                                        children: [
                                            {
                                                _key: "650a0dcc327d",
                                                _type: "span",
                                                marks: [],
                                                text: "Create a short excerpt based on "
                                            },
                                            {
                                                path: "content",
                                                _type: "sanity.assist.instruction.fieldRef",
                                                _key: "c62d14c73496"
                                            },
                                            {
                                                _key: "38e043efa606",
                                                _type: "span",
                                                marks: [],
                                                text: " that doesn't repeat what's already in the "
                                            },
                                            {
                                                path: "title",
                                                _type: "sanity.assist.instruction.fieldRef",
                                                _key: "445e62dda246"
                                            },
                                            {
                                                _key: "98cce773915e",
                                                _type: "span",
                                                marks: [],
                                                text: " . Consider the UI has limited horizontal space and try to avoid too many line breaks and make it as short, terse and brief as possible. At best a single sentence, at most two sentences."
                                            }
                                        ],
                                        _type: "block",
                                        style: "normal",
                                        _key: "392c618784b0"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    });
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity/lib/demo.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * Demo data used as placeholders and initial values for the blog
 */ __turbopack_context__.s({
    "description": (()=>description),
    "ogImageTitle": (()=>ogImageTitle),
    "title": (()=>title)
});
const title = "Blog.";
const description = [
    {
        _key: "9f1a629887fd",
        _type: "block",
        children: [
            {
                _key: "4a58edd077880",
                _type: "span",
                marks: [],
                text: "A statically generated blog example using "
            },
            {
                _key: "4a58edd077881",
                _type: "span",
                marks: [
                    "ec5b66c9b1e0"
                ],
                text: "Next.js"
            },
            {
                _key: "4a58edd077882",
                _type: "span",
                marks: [],
                text: " and "
            },
            {
                _key: "4a58edd077883",
                _type: "span",
                marks: [
                    "1f8991913ea8"
                ],
                text: "Sanity"
            },
            {
                _key: "4a58edd077884",
                _type: "span",
                marks: [],
                text: "."
            }
        ],
        markDefs: [
            {
                _key: "ec5b66c9b1e0",
                _type: "link",
                href: "https://nextjs.org/"
            },
            {
                _key: "1f8991913ea8",
                _type: "link",
                href: "https://sanity.io/"
            }
        ],
        style: "normal"
    }
];
const ogImageTitle = "A Next.js Blog with a Native Authoring Experience";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity/schemas/singletons/settings.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$demo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/lib/demo.ts [app-client] (ecmascript)");
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineType"])({
    name: "settings",
    title: "Settings",
    type: "document",
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CogIcon"],
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: "title",
            description: "This field is the title of your blog.",
            title: "Title",
            type: "string",
            initialValue: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$demo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["title"],
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: "description",
            description: "Used both for the <meta> description tag for SEO, and the blog subheader.",
            title: "Description",
            type: "array",
            initialValue: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$demo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["description"],
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "block",
                    options: {},
                    styles: [],
                    lists: [],
                    marks: {
                        decorators: [],
                        annotations: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
                                type: "object",
                                name: "link",
                                fields: [
                                    {
                                        type: "string",
                                        name: "href",
                                        title: "URL",
                                        validation: (rule)=>rule.required()
                                    }
                                ]
                            })
                        ]
                    }
                })
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: "footer",
            description: "This is a block of text that will be displayed at the bottom of the page.",
            title: "Footer Info",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "block",
                    marks: {
                        annotations: [
                            {
                                name: "link",
                                type: "object",
                                title: "Link",
                                fields: [
                                    {
                                        name: "href",
                                        type: "url",
                                        title: "Url"
                                    }
                                ]
                            }
                        ]
                    }
                })
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: "ogImage",
            title: "Open Graph Image",
            type: "image",
            description: "Displayed on social cards and search engine results.",
            options: {
                hotspot: true,
                aiAssist: {
                    imageDescriptionField: "alt"
                }
            },
            fields: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
                    name: "alt",
                    description: "Important for accessibility and SEO.",
                    title: "Alternative text",
                    type: "string",
                    validation: (rule)=>{
                        return rule.custom((alt, context)=>{
                            if (context.document?.ogImage?.asset?._ref && !alt) {
                                return "Required";
                            }
                            return true;
                        });
                    }
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
                    name: "metadataBase",
                    type: "url",
                    description: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase",
                        rel: "noreferrer noopener",
                        children: "More information"
                    }, void 0, false, {
                        fileName: "[project]/sanity/schemas/singletons/settings.tsx",
                        lineNumber: 111,
                        columnNumber: 13
                    }, this)
                })
            ]
        })
    ],
    preview: {
        prepare () {
            return {
                title: "Settings"
            };
        }
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "resolveHref": (()=>resolveHref),
    "resolveOpenGraphImage": (()=>resolveOpenGraphImage),
    "urlForImage": (()=>urlForImage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$image$2d$url$2f$lib$2f$browser$2f$image$2d$url$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/image-url/lib/browser/image-url.umd.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/lib/api.ts [app-client] (ecmascript)");
;
;
const imageBuilder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$image$2d$url$2f$lib$2f$browser$2f$image$2d$url$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
    projectId: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectId"] || '',
    dataset: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataset"] || ''
});
const urlForImage = (source)=>{
    // Ensure that source image contains a valid reference
    if (!source?.asset?._ref) {
        return undefined;
    }
    return imageBuilder?.image(source).auto('format').fit('max');
};
function resolveOpenGraphImage(image, width = 1200, height = 627) {
    if (!image) return;
    const url = urlForImage(image)?.width(1200).height(627).fit('crop').url();
    if (!url) return;
    return {
        url,
        alt: image?.alt,
        width,
        height
    };
}
function resolveHref(type, slug, language = 'hr') {
    if (!slug) return undefined;
    switch(type){
        case 'post':
            return `/${language}/posts/${slug}`;
        case 'about':
            return `/${language}/about`;
        case 'contact':
            return `/${language}/contact`;
        default:
            return undefined;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity.config.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
// Vision lets you query your content with GROQ in the studio
// https://www.sanity.io/docs/the-vision-plugin
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * This config is used to set up Sanity Studio that's mounted on the `app/(sanity)/studio/[[...tool]]/page.tsx` route
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$lib$2f$_chunks$2d$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/lib/_chunks-es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2d$plugin$2d$asset$2d$source$2d$unsplash$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanity-plugin-asset-source-unsplash/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$presentation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/_chunks-es/presentation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$pane$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/_chunks-es/pane.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$plugins$2f$settings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/plugins/settings.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$plugins$2f$assist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/plugins/assist.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$documents$2f$author$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemas/documents/author.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$documents$2f$post$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemas/documents/post.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$singletons$2f$settings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemas/singletons/settings.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
const homeLocation = {
    title: 'Home',
    href: '/'
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defineConfig"])({
    basePath: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studioUrl"],
    projectId: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectId"],
    dataset: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataset"],
    schema: {
        types: [
            // Singletons
            __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$singletons$2f$settings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            // Documents
            __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$documents$2f$post$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$documents$2f$author$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        ]
    },
    plugins: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$presentation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["presentationTool"])({
            resolve: {
                mainDocuments: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$presentation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineDocuments"])([
                    {
                        route: '/:lang/posts/:slug',
                        filter: `_type == "post" && slug.current == $slug && language == $lang`,
                        params: {
                            slug: 'string',
                            lang: 'string'
                        }
                    },
                    {
                        route: '/:lang/about',
                        filter: `_type == "aboutPage" && language == $lang`,
                        params: {
                            lang: 'string'
                        }
                    },
                    {
                        route: '/:lang/contact',
                        filter: `_type == "contactPage" && language == $lang`,
                        params: {
                            lang: 'string'
                        }
                    }
                ]),
                locations: {
                    settings: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$presentation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLocations"])({
                        locations: [
                            homeLocation
                        ],
                        message: 'This document is used on all pages',
                        tone: 'caution'
                    }),
                    post: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$presentation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLocations"])({
                        select: {
                            title: 'title',
                            slug: 'slug.current',
                            language: 'language'
                        },
                        resolve: (doc)=>({
                                locations: [
                                    {
                                        title: doc?.title || 'Untitled',
                                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveHref"])('post', doc?.slug, doc?.language)
                                    },
                                    homeLocation
                                ]
                            })
                    })
                }
            },
            previewUrl: {
                previewMode: {
                    enable: '/api/draft-mode/enable'
                }
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$pane$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["structureTool"])({
            structure: (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$plugins$2f$settings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pageStructure"])([
                __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$singletons$2f$settings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            ])
        }),
        // Configures the global "new document" button, and document actions, to suit the Settings document singleton
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$plugins$2f$settings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["singletonPlugin"])([
            __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$singletons$2f$settings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].name
        ]),
        // Add an image asset source for Unsplash
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2d$plugin$2d$asset$2d$source$2d$unsplash$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unsplashImageAsset"])(),
        // Sets up AI Assist with preset prompts
        // https://www.sanity.io/docs/ai-assist
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$plugins$2f$assist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assistWithPresets"])(),
        ("TURBOPACK compile-time value", "development") === 'development' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$lib$2f$_chunks$2d$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visionTool"])({
            defaultApiVersion: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiVersion"]
        })
    ].filter(Boolean)
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_02121dc1._.js.map