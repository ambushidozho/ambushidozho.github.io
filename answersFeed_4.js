// Test banner of Design System
const bannerStats = [
    {
        url: "https://banner-ERROR.gif",
        type: "error",
    },
    {
        url: "https://VIEWIN.gif",
        type: "viewin",
    },
    {
        url: "https://viewabilityDuration.gif",
        type: "viewabilityDuration",
    },
    {
        url: "https://RENDER.gif",
        type: "render",
    },
    {
        url: "https://CLICK.gif",
        type: "click",
    },
    {
        url: "https://ctaClick.gif",
        type: "ctaClick",
    },
    {
        url: "https://closedByUser.gif",
        type: "closedByUser",
    },
    {
        url: "https://Measurable-01.gif",
        type: "viewabilityMeasurable",
    },
    {
        url: "https://Measurable-02.gif",
        type: "viewabilityMeasurable",
    },
    {
        url: "https://NOT_Measurable-01.gif",
        type: "viewabilityUnmeasurable",
    },
    {
        url: "https://NOT_Measurable-02.gif",
        type: "viewabilityUnmeasurable",
    },
    {
        url: "https://banner-PVV-MRC-0s.gif",
        type: "playheadViewabilityValue",
        target: "banner",
        duration: 0,
        viewablePercent: "50",
    },
    {
        url: "https://banner-PVV-MRC-1s.gif",
        type: "playheadViewabilityValue",
        target: "banner",
        duration: 1,
        viewablePercent: "50",
    },
];
const videoStats = [
    {
        url: "https://video-ERROR.gif",
        type: "error",
    },
    {
        url: "https://playbackStarted-01.gif",
        type: "playbackStarted",
    },
    {
        url: "https:///playbackStarted-02.gif",
        type: "playbackStarted",
    },
    {
        url: "https://playbackStarted-03.gif",
        type: "playbackStarted",
    },
    {
        url: "https://rs.mail101.ru/pixel/PAUSE.gif",
        type: "playbackPaused",
    },
    {
        url: "https://rs.mail101.ru/pixel/RESUME.gif",
        type: "playbackResumed",
    },
    {
        url: "https://COMPLETED.gif",
        type: "playbackCompleted",
    },
    {
        url: "https://Volume-Off.gif",
        type: "volumeOff",
    },
    {
        url: "https://Volume-On.gif",
        type: "volumeOn",
    },
    {
        url: "https://PRV-SECOND-3.gif",
        type: "playheadReachedValue",
        value: "3",
    },
    {
        url: "https://PRV-SECOND-10.gif",
        type: "playheadReachedValue",
        value: "10",
    },
    {
        url: "https://PRV-QUARTILE-1.gif",
        type: "playheadReachedValue",
        pvalue: 25,
    },
    {
        url: "https://PRV-QUARTILE-2.gif",
        type: "playheadReachedValue",
        pvalue: 50,
    },
    {
        url: "https://PRV-QUARTILE-3.gif",
        type: "playheadReachedValue",
        pvalue: 75,
    },
    {
        url: "https://PRV-QUARTILE-4.gif",
        type: "playheadReachedValue",
        pvalue: 100,
    },

    {
        url: "https://video-PVV-OVV-01s.gif",
        type: "playheadViewabilityValue",
        value: "1",
        viewablePercent: "50",
        ovv: true,
    },
    {
        url: "https://--video-PVV-NOT-OVV-01s.gif",
        type: "playheadViewabilityValue",
        value: "1",
        viewablePercent: "50",
        ovv: false,
    },

    {
        url: "https://video-PVV-OVV-25p.gif",
        type: "playheadViewabilityValue",
        pvalue: "25",
        viewablePercent: "50",
        ovv: true,
    },
    {
        url: "https://--video-PVV-NOT-OVV-25p.gif",
        type: "playheadViewabilityValue",
        pvalue: "25",
        viewablePercent: "50",
        ovv: false,
    },

    {
        url: "https://video-PVV-OVV-50p.gif",
        type: "playheadViewabilityValue",
        pvalue: "50",
        viewablePercent: "50",
        ovv: true,
    },
    {
        url: "https://--video-PVV-NOT-OVV-50p.gif",
        type: "playheadViewabilityValue",
        pvalue: "50",
        viewablePercent: "50",
        ovv: false,
    },
    {
        url: "https://video-PVV-OVV-75p.gif",
        type: "playheadViewabilityValue",
        pvalue: "75",
        viewablePercent: "50",
        ovv: true,
    },
    {
        url: "https://--video-PVV-NOT-OVV-75p.gif",
        type: "playheadViewabilityValue",
        pvalue: "75",
        viewablePercent: "50",
        ovv: false,
    },
    {
        url: "https://video-PVV-OVV-100p.gif",
        type: "playheadViewabilityValue",
        pvalue: "100",
        viewablePercent: "50",
        ovv: true,
    },
    {
        url: "https://--video-PVV-NOT-OVV-100p.gif",
        type: "playheadViewabilityValue",
        pvalue: "100",
        viewablePercent: "50",
        ovv: false,
    },

    {
        url: "https://--video-PVV-MRC-2s.gif",
        type: "playheadViewabilityValue",
        target: "video",
        duration: 2,
        viewablePercent: "50",
    },
    {
        url: "https://--video-PVV-mrc-35p-3s.gif",
        type: "playheadViewabilityValue",
        duration: "3",
        viewablePercent: "35",
    },
    {
        url: "https://--video-PVV-mrc-vp75-2s.gif",
        type: "playheadViewabilityValue",
        duration: "2",
        viewablePercent: "75",
    },
    {
        url: "https://--video-PVV-mrc-vp80-5s-1.gif",
        type: "playheadViewabilityValue",
        duration: "5",
        viewablePercent: "80",
    },
    {
        url: "https://--video-PVV-mrc-vp80-5s-2.gif",
        type: "playheadViewabilityValue",
        duration: "5",
        viewablePercent: "80",
    },
    {
        url: "https://--video-PVV-mrc-vp30p-4s.gif",
        type: "playheadViewabilityValue",
        duration: "4",
        viewablePercent: "30",
    },

    {
        url: "https://--video-PVV-OVV-vp30-3s.gif",
        type: "playheadViewabilityValue",
        value: "3",
        viewablePercent: "30",
        ovv: true,
    },
    {
        url: "----video-PVV-NOT-OVV-vp30-3s.gif",
        type: "playheadViewabilityValue",
        value: "3",
        viewablePercent: "30",
        ovv: false,
    },
    {
        url: "https://NOT-OVV-05s-vp80.gif",
        type: "playheadViewabilityValue",
        value: "5",
        viewablePercent: "80",
        ovv: false,
    },
    {
        url: "https://--video-PVV-OVV-25p.gif",
        type: "playheadViewabilityValue",
        pvalue: "25",
        viewablePercent: "50",
        ovv: true,
    },
    {
        url: "https://----video-PVV-NOT-OVV-25p-1.gif",
        type: "playheadViewabilityValue",
        pvalue: "25",
        viewablePercent: "50",
        ovv: false,
    },
    {
        url: "https://----video-PVV-NOT-OVV-25p-2.gif",
        type: "playheadViewabilityValue",
        pvalue: "25",
        viewablePercent: "50",
        ovv: false,
    },

    {
        url: "https://----video-PVV-NOT-OVV-vp33-50p.gif",
        type: "playheadViewabilityValue",
        pvalue: "50",
        viewablePercent: "33",
        ovv: false,
    },

    {
        url: "https://--video-PVV-OVV-vp70-100p.gif",
        type: "playheadViewabilityValue",
        pvalue: "100",
        viewablePercent: "70",
        ovv: true,
    },
];
const fullStats = [...bannerStats, ...videoStats];
const banner4 = {
    id: "banner3",
    type: "motion-ads",
    creativeType: "answers_feed",
    ctaLink: "https://skysmart.ru/articles/physics/zakon-oma",
    urlToNavigateOnClick: "https://gramota.ru/meta/parallelogramm",
    openLinkInPopup: true,
    autoReplay: true,
    autoPause: false,
    pad: {
        clickArea: 4096,
        mail_subscribe: true,
    },
    title:
        "Робот - пылесос Xiaomi. Покупай новинку в М.Видео! Обусловлен этот феномен привыканием к определенному формату",
    description:
        "Покупай новинку в М.Видео! Обусловлен этот феномен привыканием к определенному формату и типу рекламы, устареванием рекламных носителей. Один из наиболее заметных эффектов - вынос рекламного блока из основного контента в нижний угол экрана при скроллинге страницы, в результате которого реклама уходит из области видимости более чем на 50%. Хотя изначально плеер AdMan 3 создавался для размещения рекламы в режиме inpage, к настоящему времени возможности плеера существенно расширены, обеспечена работа и в других режимах. Это позволяет использовать один продукт для решения множества разноплановых задач.",
    domain: "",

    mediafiles: [
        {
            src: "https://videolink.okcdn.ru/?pct=0&sig=25ntGANogDs&ct=0&clientType=28&mid=7388776708010&type=3",
            type: "video",
            format: "mp4",
        },
    ],

    ctaText: "Перейти",
    ageRestrictions: "0+",
    icon: { url: "https://r.mradx.net/imgs/ab/5a/86d3bae4a190.jpg" },
    aboutCompany: 'Общество с ограниченной ответственностью "МВМ", ИНН 7707548740',

    adLabel: {
        text: "Baraban",
    },

    statistics: fullStats,

    adChoices: {
        iconLink: "https://##hostImagePrefix##.mradx.net/img/DE/30EB91.svg",
        closeUrl: "https://##hostPrefix##.mail.ru/pixel/##closeEventUrl(1)##.gif?reason=",
        closeActionText: "Закрыть",
        iconOpen: "choicesIcon_0",
        iconClose: "choicesIcon_1",
        iconHide: "choicesIcon_2",
        iconComplain: "choicesIcon_3",
        iconInfo: "choicesIcon_7",
        aboutCompanyLink: "https://ads.vk.com/adv_info?id=##cipher(##banner.id##)##",
        marker: "asdasdasdasd",
        options: [
            {
                name: "О рекламодателе",
                clickLink: "https://ads.vk.com/adv_info?id=##cipher(##banner.id##)##",
                shouldCloseAd: false,
                type: "about",
                iconId: "choicesIcon_4",
            },
            {
                name: "Скопировать ERID (asdasdasdasd)",
                copyText: "asdasdasdasd",
                shouldCloseAd: false,
                type: "copyErid",
                iconId: "choicesIcon_6",
            },
            {
                name: "Скопировать ссылку",
                copyText: "##click##",
                shouldCloseAd: false,
                type: "copyUrl",
                iconId: "choicesIcon_5",
            },
            {
                name: "Отключить рекламу",
                clickLink: "https://cloud.mail.ru/promo/quota/?utm_source=mail_web&utm_campaign=disable_ads_three_dots",
                shouldCloseAd: false,
                type: "turnOffAds",
                iconId: "choicesIcon_8",
            },
            {
                id: 1,
                name: "Не интересно",
                shouldCloseAd: true,
                type: "select",
            },
            {
                id: 2,
                name: "Уже приобретено",
                shouldCloseAd: true,
                type: "select",
            },
            {
                id: 3,
                name: "Вижу слишком часто",
                shouldCloseAd: true,
                type: "select",
            },
            {
                id: 4,
                name: "Оскорбительное содержание",
                shouldCloseAd: true,
                type: "select",
            },
            {
                id: 5,
                name: "Сексуальный подтекст",
                shouldCloseAd: true,
                type: "select",
            },
            {
                id: 6,
                name: "Нарушение закона",
                shouldCloseAd: true,
                type: "select",
            },
            {
                id: 7,
                name: "Мошеннический сайт",
                shouldCloseAd: true,
                type: "select",
            },
        ],
    },
};
