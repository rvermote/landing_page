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
    primary: boolean
    darkText: boolean
}

export const homeObjOne:HomeObjInput = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "Premium Bank",
    headline: "Unlimited Transactions with zero fees",
    description: "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.",
    buttonLabel: "Get Started",
    imgStart: false,
    img: require('@/public/images/svg_1.svg'),
    alt: "Car",
    dark: true,
    primary: true,
    darkText: false
}