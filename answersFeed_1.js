const bannerStats = [
    {
        url: "https://banner-ERROR.gif",
        type: "error",
    },
    {
        url: "https://isBot.gif",
        type: "isBot",
    },
    {
        url: "https://VIEWIN.gif",
        type: "viewin",
        sign: true,
        check: "t=viewin",
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
        url: "https://weborama.com/WSVBtppl6F.gif",
        type: "render",
    },
    {
        url: "https://CLICK.gif",
        type: "click",
    },
    {
        url: "https://www.lol.ru/ctaClick.gif",
        type: "ctaClick",
        sign: true,
        check: "t=1",
    },
    {
        url: "https://checkPixel",
        type: "check",
    },
    {
        url: "https://isCold",
        type: "isCold",
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
        url: "https://BANNER-SHOW.gif",
        type: "playheadViewabilityValue",
        target: "banner",
        duration: 0,
        viewablePercent: "50",
        // sign: true,
    },
    {
        target: "banner",
        type: "playheadViewabilityValue",
        url: "MRC-0s-eventUrl(2205)",
        duration: 0,
        viewablePercent: 50,
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
        target: "video",
        type: "playheadViewabilityValue",
        url: "https://SHOW-video.gif",
        duration: 0,
        viewablePercent: 50,
        sign: true,
    },
    {
        url: "https://playVideoVolumeOn.gif",
        type: "playVideoVolumeOn",
    },
    {
        url: "https://playVideoVolumeOff.gif",
        type: "playVideoVolumeOff",
    },
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
        url: "https://PAUSE.gif",
        type: "playbackPaused",
    },
    {
        url: "https://RESUME.gif",
        type: "playbackResumed",
    },
    {
        url: "https://COMPLETED.gif",
        type: "playbackCompleted",
        sign: true,
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
        sign: true,
    },
    {
        url: "https://PRV-QUARTILE-2.gif",
        type: "playheadReachedValue",
        pvalue: 50,
        sign: true,
    },
    {
        url: "https://PRV-QUARTILE-3.gif",
        type: "playheadReachedValue",
        pvalue: 75,
        sign: true,
    },
    {
        url: "https://PRV-QUARTILE-4.gif",
        type: "playheadReachedValue",
        pvalue: 100,
        sign: true,
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

const banner = {
    id: 165419702,
    placeholderID: "b165419702_926581192",
    type: "motion-ads",
    // creativeType: "okFeed_site",
    creativeType: "answers_feed",
    // creativeType: "okFeed_miniapp",
    // disclaimer: "Заболел? Надо подлечиться нашими таблеточками!",

    pattern: {
        name: "video_custom_240x400",
        group: "video",
        subgroup: "portrait",
    },

    disclaimer_id: 11,
    adLabel: {
        show: !0,
        text: "Murena",
    },
    // url: "/assets/img_800x1200.jpg",
    // url: "https://sun1-26.userapi.com/impf/XMGUGc-WIQRrralvj024sWYFH9AnG3Fg60u_mA/y-gXm6kBKPw.jpg?size=1080x607&quality=95&keep_aspect_ratio=1&sign=d32b71c26c5677c731d687bf6119dfcf",

    image3: {
        // url: "https://d.mradx.net/600x600/ecomimg/ce5/e3/9f655e3639a0.png",
        url: "https://r.mradx.net/imgs/b7/54/68c094b09d4bacf1.png",
        type: "img",
        width: 1080,
        height: 607,
    },

    title: ["Кухонный Двор. Cамый большой салон!"],
    linkTitle: ["Жми на кнопку! Забирай бонусы"],

    description:
        "Три причины учить Golang \n1) Деньги – получишь от 150 - 300 тыс. руб\n2) Крутые проекты – поработаешь над тем и другим, потом за новым оферов\n3) Простота: Go считают самым простым типизированным языком за счёт объёма — в нём меньше 50 ключевых слов.",
    //"Три причины учить Golang\n1) Деньги\nНа Хабр Карьере зарплаты Go-разработчиков уровня middle+ начинаются от 150 000 ₽ и доходят до 300 000 ₽. Среднее значение ближе всего к реальной зарплате.\n\n2) Крутые проекты\nНа Go пишут нагруженные сервисы с десятками тысяч RPS — Uber, «Авито», «Озон». В финтех-стартапах его тоже используют: например, в электронных кошельках.\n\n3) Простота\nGo считают самым простым типизированным языком за счёт объёма — в нём меньше 50 ключевых слов. Разработчики следят, чтобы в языке без надобности не появлялись новые непонятные конструкции.",
    trackingLink:
        "https://t.mail.ru/redir/AAC_-QFe6C1IYWTgNelRvlWPk1M7eAbRVx8xhWqmquTWYDX1MfWLOp-1isl68XI6-wpfEnWeYJxAi0FhBJirnJwfld5GU_4Erx_ePvJRPproMcxEX0kvh9Cus0enPcuG3skPygxTif-vFkffU4jctWZIdOn0dfAhXLB9SyFcHNhwCFhkK2YNjUt7BAAAP-rUDRp36f1UmiDyZ8aDY63A6f4o6PsnNAg1hn8CSwMpevFka8BTftWNLeNHv-fRHPMF4PAJLCJT-Hex0Y_6u6MFsl67FYv-m6vylrvpGjakIba1yEX62TTTkQg3iKR5eq809-EB4Xbv-9GGgaoAfoEor1IIutMhJLZULrw49hxOXYRmA7vWrNrLlLsKLgjQXsqOBiSrfbUmeXjAY8EIYm7cj2TWjid9uRDiqWpHtQoehQoEUanq6eFpRlegWa2USEH6JzxBkNtwQxqB09UXlE3rWERif_omXm1vxSOPRCy5FKBrtNcpb_bklzI9k784-vWcMYiYgM8bL9NkMWAmDtsMAxKYodrnof7fYwJYlEDb8YGu_BImMPG6HTn0UCurPdUou9neYPwbZoAy7vkEpctXDDoZeYSIwsuGfPQUOG0-cra8u-SDIgAkfTqzgGm8-yCngo3z_6NXjS4rf8nBUX7fyOLjLfUDdgpNfU_fZ8ln7UIsw29neIX_4UYyxuCbjNaMuemoSUV0SGFn3PomrvV5dAd76EuU2ShRHIFDh6ZP7Flt9Alw6ZAIuupL0UAXaLgFX8-QzKpZCNFfylfx0oYeN0E2T5gSud64y62-71ccXlfObYBgtYmZFBeFURNpy2DleZwSra3KLP-F1C29dzSxVMxLhy-xQez3qIVXZ9NajGtEZgPx9DjTuDtfOVnoqky8BkM-wZ_z-rVrgZofZH9JTShalufUiZ9mxxQ5a7jsLxIvQW5Nrum7JY6QhG4tMydSoddKopX25WRUmCL53xxHuDaJaGUHgS5NV_UKEJSzAGVKGaQJxFCR72ktFt51sQKeb0VwP0QYbfIXeLuqz3jVsS3jkGhsMWHw0Pyg12s5hjZvqJteoyE3cPqKfqJvGZerzbRrUXtvMd1SarPi4mpDdVaBxhHIWPukzWakB25QGCX8C7Vil2zkwQTGdAf7Ym4d8CtwmHcp8MrIvSIqyxc_KOVzA2nF_YgmlFzRHwqZgc7Z6B9gu3Fo1_2c_4oLTU51i0DhY-6OT207dXfKCX_NjwwlWrXp-ixB41j_xg7IPV6gIX7AUu4qcULDo-UnWvleHMQg8pp8E5YYJqrIgQkvssk3fbrU0PRS5tNWOBwg9IBZ6Kk-na0o87_LuEO-jLf9flCqo1RO-qG_tLBQQ3UyycbTI_t_CCfrUv0Mt0dFiVPuKHbZ1QuMmeSV2cyi_-Uqfolb99h53u78BJR_BtFMPn1xB5xz90PK6pPEDhuY3pLF53buF_qIlRw4_SGMnyu9OzAsqQzEkhI3A6kRu-X4q69cByUsSwZ1DMzLQ88h3cWBKfkHhnsn2YTTjdR1973qctwF-jXUkg7sjxVCvnt3rpdmLbrF4D_pCPR3tGDj76ydvAYrrGpsdyIbIOzvLOcaCW5sBPRjxaY9AoR2ZS0rOjFj9b-MmzhJstZFjobMFsKnrVsB-8bdPfT3VG1q0oZz39OxL26nWD0cZMoxs8H-HQGGGFTR4S9nPvVR-5Og3Vbdyd5mavxkQb1WqU1Y:2VtzqvR4hTQ",
    ctaLink:
        "https://ctaLink.ru/redir/AAC_-QFe6C1IYWTgNelRvlWPk1M7eAbRVx8xhWqmquTWYDX1MfWLOp-1isl68XI6-wpfEnWeYJxAi0FhBJirnJwfld5GU_4Erx_ePvJRPproMcxEX0kvh9Cus0enPcuG3skPygxTif-vFkffU4jctWZIdOn0dfAhXLB9SyFcHNhwCFhkK2YNjUt7BAAAP-rUDRp36f1UmiDyZ8aDY63A6f4o6PsnNAg1hn8CSwMpevFka8BTftWNLeNHv-fRHPMF4PAJLCJT-Hex0Y_6u6MFsl67FYv-m6vylrvpGjakIba1yEX62TTTkQg3iKR5eq809-EB4Xbv-9GGgaoAfoEor1IIutMhJLZULrw49hxOXYRmA7vWrNrLlLsKLgjQXsqOBiSrfbUmeXjAY8EIYm7cj2TWjid9uRDiqWpHtQoehQoEUanq6eFpRlegWa2USEH6JzxBkNtwQxqB09UXlE3rWERif_omXm1vxSOPRCy5FKBrtNcpb_bklzI9k784-vWcMYiYgM8bL9NkMWAmDtsMAxKYodrnof7fYwJYlEDb8YGu_BImMPG6HTn0UCurPdUou9neYPwbZoAy7vkEpctXDDoZeYSIwsuGfPQUOG0-cra8u-SDIgAkfTqzgGm8-yCngo3z_6NXjS4rf8nBUX7fyOLjLfUDdgpNfU_fZ8ln7UIsw29neIX_4UYyxuCbjNaMuemoSUV0SGFn3PomrvV5dAd76EuU2ShRHIFDh6ZP7Flt9Alw6ZAIuupL0UAXaLgFX8-QzKpZCNFfylfx0oYeN0E2T5gSud64y62-71ccXlfObYBgtYmZFBeFURNpy2DleZwSra3KLP-F1C29dzSxVMxLhy-xQez3qIVXZ9NajGtEZgPx9DjTuDtfOVnoqky8BkM-wZ_z-rVrgZofZH9JTShalufUiZ9mxxQ5a7jsLxIvQW5Nrum7JY6QhG4tMydSoddKopX25WRUmCL53xxHuDaJaGUHgS5NV_UKEJSzAGVKGaQJxFCR72ktFt51sQKeb0VwP0QYbfIXeLuqz3jVsS3jkGhsMWHw0Pyg12s5hjZvqJteoyE3cPqKfqJvGZerzbRrUXtvMd1SarPi4mpDdVaBxhHIWPukzWakB25QGCX8C7Vil2zkwQTGdAf7Ym4d8CtwmHcp8MrIvSIqyxc_KOVzA2nF_YgmlFzRHwqZgc7Z6B9gu3Fo1_2c_4oLTU51i0DhY-6OT207dXfKCX_NjwwlWrXp-ixB41j_xg7IPV6gIX7AUu4qcULDo-UnWvleHMQg8pp8E5YYJqrIgQkvssk3fbrU0PRS5tNWOBwg9IBZ6Kk-na0o87_LuEO-jLf9flCqo1RO-qG_tLBQQ3UyycbTI_t_CCfrUv0Mt0dFiVPuKHbZ1QuMmeSV2cyi_-Uqfolb99h53u78BJR_BtFMPn1xB5xz90PK6pPEDhuY3pLF53buF_qIlRw4_SGMnyu9OzAsqQzEkhI3A6kRu-X4q69cByUsSwZ1DMzLQ88h3cWBKfkHhnsn2YTTjdR1973qctwF-jXUkg7sjxVCvnt3rpdmLbrF4D_pCPR3tGDj76ydvAYrrGpsdyIbIOzvLOcaCW5sBPRjxaY9AoR2ZS0rOjFj9b-MmzhJstZFjobMFsKnrVsB-8bdPfT3VG1q0oZz39OxL26nWD0cZMoxs8H-HQGGGFTR4S9nPvVR-5Og3Vbdyd5mavxkQb1WqU1Y:2VtzqvR4hTQ",

    isDarkTheme: true,
    rounded: "0",
    theme: "dark",
    ageRestrictions: "18+",
    domain: "www.kuxni.net",
    icon: {
        url: "https://sun1-96.userapi.com/s/v1/ig2/-Mr3iw70NNon6n4QvdXK9Oepq-q8V3nIM6PWsd_jiHvYIxP_ZLQHLmJ840ToEDj9ncANAm1wTxot-Dpp7qCBRQ24.jpg?quality=96&crop=0,0,1418,1418&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280&ava=1&cs=200x200",
    },

    // src: "https://r.mradx.net/img/DE/7DB090.mp4",
    mediafiles: [
        {
            // src: "https://r.mradx.net/img/20/7A0078.mp4", // pepsi
            src: "https://r.mradx.net/img/DE/7DB090.mp4", // pilesos

            type: "video",
            // duration: 21,
            // width: 900,
            // height: 1800,
        },
    ],
    duration: 15,
    // overlay: {
    //   url: "https://r.mradx.net//imgs/86/e3/94587c068e5be69--1.jpg",
    // },
    ctaText: "Подробнее",
    trackingLinkUrlTypes: "external,external_new",
    trackingLinkTrackerTypes: "0",

    viewability: {
        isHbid: false,
        hbidID: "",
        percent: 50,
        duration: false,
        referer: "",
    },
    pad: {
        openInBrowser: false,
        styles: {},
    },

    statistics: fullStats,
    adChoices: {
        iconLink: "https://r.mradx.net/img/DE/30EB91.svg",
        closeUrl:
            "https://r0.mail.ru/pixel/AACM-gEi_mQWY9Fsd2WuCyMswNXefyEAzQde7Lu3N5haK4MMN2wXaMz5lFz2JKLHYGCJgfwkPW3G9A1Dx1lQsn-SbpzILmr9CtTfo7IPL0lxzzkz1nY827Q1Iy437fly44fLjNVRCyki6jblIi-kDMoa3p841NzYkJBcg6FKPw5-7A_hUoEQMU4MAgAAeg5rQUmS5oAqXGTv5RZgflpdYK-H_uemUwIC6y5GrKrNxfzjI76ZtSfHahOUe6HRyBJX8VvtCgnlHHww-0ZPMap7PZcjQagx8Yr_O4Ux2q9H-J0Twvr7DYNLUTxJPdR7Mj_IYCwjJFRE7nqBVwts2jQZ_w-q_D_VL-Xpi2bt2jljRbG6FH0aAqcQB8gYojrBL5hqBIYFE3v3kaj9sMluemc2UaVTsIKk_J-wlgPgmGBd8HM3XpPhm96MSgHIF930CC3shRL_Fwf4kyqpZhNxhVM09Q9ffFtuES_WIQpf3Q8sXf206HS1dcTKuC3sVCJPc0VVniPEBIIt-DUCaSFHg7V-ATotX-TmOFuUn5HRjK-rmAS0a9wCYjKywj0Ll5y_yLwEk2G-brRA-y8j1x0RAx9BruXD4Lneox9X3bOgTL8RMeoyq9vMHAcW_MhCiwT_i7brYH2xKMTHvSS6QOMI3W16KllnHmPvXXQOiemLMk0iGdnZC2emMCMpGaBrqvnqijSJcvWHhlWKsCGy1BQVAILvnvO5FsU1BPIuuM3D7DTPUkedYbqL5URah_g4WZr1CWPTcwyRIx1BJShhPP8qz5RxjHr_5aHtunCZPTY-0jJK2-97MSZKAlcye_rQLXDoy7HtKOI-pGZ0kJjbJ1ylLxlfFpNW5Mi8lVvJiqBP1Y5fA47GBAnqQhsAKJz2jFgh.gif?reason=",
        closeActionText: "Закрыть",
        iconOpen: "choicesIcon_0",
        iconClose: "choicesIcon_1",
        iconHide: "choicesIcon_2",
        iconComplain: "choicesIcon_3",
        iconInfo: "choicesIcon_7",
        aboutCompanyLink:
            "https://ads.vk.com/adv_info?id=AACM-gEi_mQWY9Fsd2WuCyMswNXefyEAzQde7Lu3N5haK4MMN2wXaMz5lFz2JKLHYGCJgfwkPW3G9A1Dx1lQsn-SbpzILmr9CtTfo7IPL0lxzzkz1nY827Q1Iy437fly44fLjNVRCyki6jblIi-kDMoa3p841NzYkJBcg6FKPw5-7A_hUmbrxBQJAAAA_T57E1Zc9ETBCQmrQ0BR3g",
        marker: "2Vtzqwy9Zjx",
        options: [
            {
                name: "О рекламодателе",
                clickLink:
                    "https://ads.vk.com/adv_info?id=AACM-gEi_mQWY9Fsd2WuCyMswNXefyEAzQde7Lu3N5haK4MMN2wXaMz5lFz2JKLHYGCJgfwkPW3G9A1Dx1lQsn-SbpzILmr9CtTfo7IPL0lxzzkz1nY827Q1Iy437fly44fLjNVRCyki6jblIi-kDMoa3p841NzYkJBcg6FKPw5-7A_hUpg6QHcJAAAACwTPWccZA3yQp3FlBxvfZQ",
                shouldCloseAd: false,
                type: "default",
                iconId: "choicesIcon_4",
            },
            {
                show: true,
                name: "Скопировать ERID (2Vtzqwy9Zjx)",
                copyText: "2Vtzqwy9Zjx",
                shouldCloseAd: false,
                type: "copy",
                iconId: "choicesIcon_6",
            },
            {
                name: "Скопировать ссылку",
                copyText:
                    "https://ads.vk.com/public/leadform?type=leadform&d=6Ry7SRcBETdBFpT6Dnnz2GCHEFlkZNfH69N3cR%2FeK4Q74sCvtFCbW5tRo6qpH7wUgUcW9bP2dgG4mmv34eCsBrnJp9bYkr63UypPGrJMgU6xjSmt2jc3LBVKS4jmy1F2",
                shouldCloseAd: false,
                type: "copy",
                iconId: "choicesIcon_5",
            },
            {
                id: 1,
                name: "Не интересно",
                shouldCloseAd: true,
                type: "hide",
            },
            {
                id: 2,
                name: "Уже приобретено",
                shouldCloseAd: true,
                type: "hide",
            },
            {
                id: 3,
                name: "Вижу слишком часто",
                shouldCloseAd: true,
                type: "hide",
            },
            {
                id: 4,
                name: "Оскорбительное содержание",
                shouldCloseAd: true,
                type: "complain",
            },
            {
                id: 5,
                name: "Сексуальный подтекст",
                shouldCloseAd: true,
                type: "complain",
            },
            {
                id: 6,
                name: "Нарушение закона",
                shouldCloseAd: true,
                type: "complain",
            },
            {
                id: 7,
                name: "Мошеннический сайт",
                shouldCloseAd: true,
                type: "complain",
            },
        ],
    },
};

export { banner };
