export interface HomeObjInput{
    id: string
    lightBg: boolean
    lightText: boolean
    lightTextDesc: boolean
    topLine: string
    headline: string
    description: string
    buttonLabel: string
    imgStart: boolean
    img: string
    alt: string
    dark: boolean
    dark2: boolean
    primary: boolean
    darkText: boolean
}

export const homeObjOne:HomeObjInput = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "Premium Service",
    headline: "Unlimited Transactions with zero fees",
    description: "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.",
    buttonLabel: "Get Started",
    imgStart: false,
    img: "/images/svg_1.svg",
    alt: "Car",
    dark: true,
    dark2: true,
    primary: true,
    darkText: false
}

export const homeObjTwo:HomeObjInput = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: "Premium Service",
    headline: "Unlimited Transactions with zero fees",
    description: "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.",
    buttonLabel: "Get Started",
    imgStart: true,
    img: "/images/svg_2.svg",
    alt: "Car",
    dark: false,
    dark2: false,
    primary: false,
    darkText: true
}