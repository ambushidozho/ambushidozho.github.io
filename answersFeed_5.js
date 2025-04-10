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
        url: "https://r0.mail.ru/pixel/AAD6-QEAN3i22bhXvsLgISHxpPQG3yRF0k6dN2VaNaLutOKXYScD7CP9QrsaGHzqbBZ1roZO7uja3hBRBzxQpj274TCbYEf3hprDoBegs69LolOrxvcCJWeOo3NAUMZdUJZhdXWqSEAvO7dtOXYSMzu4JhY0uCWUlIyTLSzPbUg-fmGN8nU7g2xNAQAAqesW3cIJ8_Z9iAkwd_8pwOrMUV9CLEdPNFaiOo_XK042sLDG1uq1HUGIzTmHpwQG5rjkW_BuFEKNGJgGDxL4hwhHAWd9WIsHqGkSG263FB6scriKFDJ8SHXusOAUSS4YCqy3MeNN3G01QHvEWyOrX-pt8w27g8yNCC86wIe8H4UkJRgzwCLqWb0KdmiPUE8adHBWhm1U_34B37yKie5B4jIpvZqlQFwyYVgoipgQHaGQKwR4IXE9E5GzuuE2jTzvt-RBYgjT-lG2SQ-zX4MxysskthuLa1nrUotCJxRdDsVqEeJsagXfLsjoHLCxB4MAEhhoDQubhOXkulXHs_P_ZhDt2BOow5MhEHE9ImNiGd-HneMz_2bQEpM0W3-TCBTXP9lfyEasVvCuyHY1vS53PMh7w78D1L8nnGvYFFCzBJvUTrRNQ7KVQKWSVBtppl6F.gif",
        type: "render",
    },
    {
        url: "https://CLICK.gif",
        type: "click",
    },
    {
        url: "https://ctaClick.gif",
        type: "ctaClick",
        sign: true,
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
        url: "https://video-ERROR.gif",
        type: "error",
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
        url: "https://checkPixel",
        type: "check",
    },
    {
        target: "banner",
        type: "playheadViewabilityValue",
        url: "https://ad.adriver.ru/cgi-bin/event.cgi?sid=1&bt=101&tuid=1&ad=787019&pid=4065646&bid=10698574&bn=10698574&type=0&custom=Impression&exss=281f46fb715ee4f9&exs0=VK&exs2=161897&exs3=&exs4=101693243&exs5=170536764&rnd=21033832",
        duration: 0,
        viewablePercent: 50,
        check: "t=1",
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
const banner5 = {
    id: 165419702,
    placeholderID: "b165419702_926581192",
    type: "motion-ads",
    creativeType: "answers_feed",
    disclaimer_id: 11,
    // disclaimer: "Изучите все условия кредита (займа) на сайте. Оценивайте свои финансовые возможности и риски",

    // promoteCfg,

    // jsonFormat: "unified",
    pattern: {
        name: "video_custom_240x400",
        group: "video",
        subgroup: "portrait",
    },

    adLabel: {
        show: !0,
        text: "Baraban",
    },

    image: {
        url: "https://r0.mradx.net/imgs/cc/45/1a5c3e709992eced.jpg",
        type: "img",
    },

    title: "Септики Евролос",
    linkTitle: "Отличное предложение!",
    description:
        'Полёт на самолёте над Тюменью - отличный подарок для Вашей семьи или для Вашей второй половинки!\n\nНажимайте кнопку "узнать цену" и получите прайс уже сейчас.\n\n- Более 3000 довольных клиентов\n- Доступные цены\n- Фото и видео на память!\n\nВолшебное и незабываемое свидание в небе над Тюменью ещё никого не оставляло равнодушным.\n\nУзнайте стоимость за одну минуту, нажимайте "узнать цену"',
    trackingLink:
        "https://t.mail.ru/redir/AAC_-QFe6C1IYWTgNelRvlWPk1M7eAbRVx8xhWqmquTWYDX1MfWLOp-1isl68XI6-wpfEnWeYJxAi0FhBJirnJwfld5GU_4Erx_ePvJRPproMcxEX0kvh9Cus0enPcuG3skPygxTif-vFkffU4jctWZIdOn0dfAhXLB9SyFcHNhwCFhkK2YNjUt7BAAAP-rUDRp36f1UmiDyZ8aDY63A6f4o6PsnNAg1hn8CSwMpevFka8BTftWNLeNHv-fRHPMF4PAJLCJT-Hex0Y_6u6MFsl67FYv-m6vylrvpGjakIba1yEX62TTTkQg3iKR5eq809-EB4Xbv-9GGgaoAfoEor1IIutMhJLZULrw49hxOXYRmA7vWrNrLlLsKLgjQXsqOBiSrfbUmeXjAY8EIYm7cj2TWjid9uRDiqWpHtQoehQoEUanq6eFpRlegWa2USEH6JzxBkNtwQxqB09UXlE3rWERif_omXm1vxSOPRCy5FKBrtNcpb_bklzI9k784-vWcMYiYgM8bL9NkMWAmDtsMAxKYodrnof7fYwJYlEDb8YGu_BImMPG6HTn0UCurPdUou9neYPwbZoAy7vkEpctXDDoZeYSIwsuGfPQUOG0-cra8u-SDIgAkfTqzgGm8-yCngo3z_6NXjS4rf8nBUX7fyOLjLfUDdgpNfU_fZ8ln7UIsw29neIX_4UYyxuCbjNaMuemoSUV0SGFn3PomrvV5dAd76EuU2ShRHIFDh6ZP7Flt9Alw6ZAIuupL0UAXaLgFX8-QzKpZCNFfylfx0oYeN0E2T5gSud64y62-71ccXlfObYBgtYmZFBeFURNpy2DleZwSra3KLP-F1C29dzSxVMxLhy-xQez3qIVXZ9NajGtEZgPx9DjTuDtfOVnoqky8BkM-wZ_z-rVrgZofZH9JTShalufUiZ9mxxQ5a7jsLxIvQW5Nrum7JY6QhG4tMydSoddKopX25WRUmCL53xxHuDaJaGUHgS5NV_UKEJSzAGVKGaQJxFCR72ktFt51sQKeb0VwP0QYbfIXeLuqz3jVsS3jkGhsMWHw0Pyg12s5hjZvqJteoyE3cPqKfqJvGZerzbRrUXtvMd1SarPi4mpDdVaBxhHIWPukzWakB25QGCX8C7Vil2zkwQTGdAf7Ym4d8CtwmHcp8MrIvSIqyxc_KOVzA2nF_YgmlFzRHwqZgc7Z6B9gu3Fo1_2c_4oLTU51i0DhY-6OT207dXfKCX_NjwwlWrXp-ixB41j_xg7IPV6gIX7AUu4qcULDo-UnWvleHMQg8pp8E5YYJqrIgQkvssk3fbrU0PRS5tNWOBwg9IBZ6Kk-na0o87_LuEO-jLf9flCqo1RO-qG_tLBQQ3UyycbTI_t_CCfrUv0Mt0dFiVPuKHbZ1QuMmeSV2cyi_-Uqfolb99h53u78BJR_BtFMPn1xB5xz90PK6pPEDhuY3pLF53buF_qIlRw4_SGMnyu9OzAsqQzEkhI3A6kRu-X4q69cByUsSwZ1DMzLQ88h3cWBKfkHhnsn2YTTjdR1973qctwF-jXUkg7sjxVCvnt3rpdmLbrF4D_pCPR3tGDj76ydvAYrrGpsdyIbIOzvLOcaCW5sBPRjxaY9AoR2ZS0rOjFj9b-MmzhJstZFjobMFsKnrVsB-8bdPfT3VG1q0oZz39OxL26nWD0cZMoxs8H-HQGGGFTR4S9nPvVR-5Og3Vbdyd5mavxkQb1WqU1Y:2VtzqvR4hTQ",
    ctaLink:
        "https://ctaLink.ru/redir/AAC_-QFe6C1IYWTgNelRvlWPk1M7eAbRVx8xhWqmquTWYDX1MfWLOp-1isl68XI6-wpfEnWeYJxAi0FhBJirnJwfld5GU_4Erx_ePvJRPproMcxEX0kvh9Cus0enPcuG3skPygxTif-vFkffU4jctWZIdOn0dfAhXLB9SyFcHNhwCFhkK2YNjUt7BAAAP-rUDRp36f1UmiDyZ8aDY63A6f4o6PsnNAg1hn8CSwMpevFka8BTftWNLeNHv-fRHPMF4PAJLCJT-Hex0Y_6u6MFsl67FYv-m6vylrvpGjakIba1yEX62TTTkQg3iKR5eq809-EB4Xbv-9GGgaoAfoEor1IIutMhJLZULrw49hxOXYRmA7vWrNrLlLsKLgjQXsqOBiSrfbUmeXjAY8EIYm7cj2TWjid9uRDiqWpHtQoehQoEUanq6eFpRlegWa2USEH6JzxBkNtwQxqB09UXlE3rWERif_omXm1vxSOPRCy5FKBrtNcpb_bklzI9k784-vWcMYiYgM8bL9NkMWAmDtsMAxKYodrnof7fYwJYlEDb8YGu_BImMPG6HTn0UCurPdUou9neYPwbZoAy7vkEpctXDDoZeYSIwsuGfPQUOG0-cra8u-SDIgAkfTqzgGm8-yCngo3z_6NXjS4rf8nBUX7fyOLjLfUDdgpNfU_fZ8ln7UIsw29neIX_4UYyxuCbjNaMuemoSUV0SGFn3PomrvV5dAd76EuU2ShRHIFDh6ZP7Flt9Alw6ZAIuupL0UAXaLgFX8-QzKpZCNFfylfx0oYeN0E2T5gSud64y62-71ccXlfObYBgtYmZFBeFURNpy2DleZwSra3KLP-F1C29dzSxVMxLhy-xQez3qIVXZ9NajGtEZgPx9DjTuDtfOVnoqky8BkM-wZ_z-rVrgZofZH9JTShalufUiZ9mxxQ5a7jsLxIvQW5Nrum7JY6QhG4tMydSoddKopX25WRUmCL53xxHuDaJaGUHgS5NV_UKEJSzAGVKGaQJxFCR72ktFt51sQKeb0VwP0QYbfIXeLuqz3jVsS3jkGhsMWHw0Pyg12s5hjZvqJteoyE3cPqKfqJvGZerzbRrUXtvMd1SarPi4mpDdVaBxhHIWPukzWakB25QGCX8C7Vil2zkwQTGdAf7Ym4d8CtwmHcp8MrIvSIqyxc_KOVzA2nF_YgmlFzRHwqZgc7Z6B9gu3Fo1_2c_4oLTU51i0DhY-6OT207dXfKCX_NjwwlWrXp-ixB41j_xg7IPV6gIX7AUu4qcULDo-UnWvleHMQg8pp8E5YYJqrIgQkvssk3fbrU0PRS5tNWOBwg9IBZ6Kk-na0o87_LuEO-jLf9flCqo1RO-qG_tLBQQ3UyycbTI_t_CCfrUv0Mt0dFiVPuKHbZ1QuMmeSV2cyi_-Uqfolb99h53u78BJR_BtFMPn1xB5xz90PK6pPEDhuY3pLF53buF_qIlRw4_SGMnyu9OzAsqQzEkhI3A6kRu-X4q69cByUsSwZ1DMzLQ88h3cWBKfkHhnsn2YTTjdR1973qctwF-jXUkg7sjxVCvnt3rpdmLbrF4D_pCPR3tGDj76ydvAYrrGpsdyIbIOzvLOcaCW5sBPRjxaY9AoR2ZS0rOjFj9b-MmzhJstZFjobMFsKnrVsB-8bdPfT3VG1q0oZz39OxL26nWD0cZMoxs8H-HQGGGFTR4S9nPvVR-5Og3Vbdyd5mavxkQb1WqU1Y:2VtzqvR4hTQ",

    isDarkTheme: true,
    rounded: "0",
    theme: "dark",
    ageRestrictions: "18+",
    domain: "eurolosdv1.ru",
    icon: {
        url: "https://r0.mradx.net/imgs/69/9e/504ebc4e9c34a8bb.jpg",
    },

    duration: 15,
    ctaText: "Перейти1",
    trackingLinkUrlTypes: "external,external_new",
    trackingLinkTrackerTypes: "0",

    viewability: {
        isHbid: false,
        hbidID: "",
        percent: 50,
        duration: false,
        referer: "",
    },
    audits: [],
    pad: {
        openInBrowser: false,
        styles: {},
    },
    adChoices: {
        iconLink: "https://r.mradx.net/img/DE/30EB91.svg",
        closeUrl:
            "https://rs.mail.ru/pixel/AAC_-QFe6C1IYWTgNelRvlWPk1M7eAbRVx8xhWqmquTWYDX1MfWLOp-1isl68XI6-wpfEnWeYJxAi0FhBJirnJwfld5GU_4Erx_ePvJRPproMcxEX0kvh9Cus0enPcuG3skPygxTif-vFkffU4jctWZIdOn0dfAhXLB9SyFcHNhwCFhkK6jtUmgSBAAAZphC6Dktfm1CRsLxskyi4oh8sV3K-p96gCAzT_BpXB_HAKUppufobK9Kir3VhK3dXmtPvuTqLy78dMGkyWLqdDFYggtrPT-jcPXhtmlOsFFgzzOCLbP-rI4BF0sz0NVSlJ7JQOYgfFv-GLfRAnedax1x2lp7nln6-HzZ-NFUp9FOqLkm3urtZFNlmhS0vITZr6D2tXPQV5oQxZp1r4u6s17LDzpH-2Cl_O6hVrLUp3omDxYpxos1GHv6A_BpLcGSzQuOSQKGTBk5F1Mq7IS1Zd7haolCj_kUNs0XyiVxBXK9Wu3ZoF82CvnBFJrqgRLT285cqKErc8a7Rh_OPU9RoyY2p1yWGGGIWZspqGmsqV6bmipfKrQ8gFmSTVGnGKLw_QoQW3GWT-69KV2z5VaQAvzufWCZ83k8O_27_a75QYWClsU1OYc47HwOEChzGBgovX9-7p9ye1wN4PdSt9g5Tl75p2v_Yi5TqIhhd3iexFOcPWoo1YPw10S6b10f8ok3IFoUCG7emi4lmz_mwA-5ll2Z2GjY5Dpl3HK4TmLF8g-epQ5sEWoOApIXBrmkzxgf8u1JXCKyELODfbF90qj00Q84rXx8TvrAlNypsNgTeyYqzRpIb4wDq6KXPk5ZE4V2IXyxnoSjCMYNvLWxjOt1OC_2HAJCRnwRTLFtCTeHs4IUGsWWdgflk3ELPlAYcavJFmaJv6yZApCs4JCdKiIw_fqi1QWfAFLpAxtJ1ocihDZbN2vaEkh0opkTXQlamdq5r0lq-YcHwqdlnI5q1nzRo3Wh5AZ-fRptdmx8v9e8xp8PpXABQ2J0LhDiRArXrYmwfKg1p7KIRuAWj9U7X1aQ9Uk38LWu0b6atSuTik5xX93hNTKb-c2mhSCfxa7yCHPNhkKi1DMqoNPksrJnmM9fHTO9OrEyJLQYSX_Ze05_KfXoD4-GhxBaIG14VD4cuTcGcvW5Fiz6PSCfUs93YQLSL7D6gqMHw_ETDQZXxWNCdnzY7GNpnJVhMMNFWQ1uMVCERdsNorfm3kM91SLZPV-yDUpbktke2F0yBRjDuoqfbD6PzXiStEZZsft_t5j7sTtiUeHoNccBh-3qxUc4GSvyxXE1hVEY3lUNb1d11FnLvJwxz_b0BGuDX41TQX9JPBRtwoza758VGAJCfQ_HlRR--lePfTIr63uxH92IIZDx2OA-W5hNdR8Ikkf1LU5JxEjzM6gadTpY-eQ6txMhNmJzFaoKzcv0xBR_XjF-MLICc8d435Zig92XQgioPAVPWSE6AxsX303AT7GfdbwsLipC3-a7WVoGYacZbr2_LiEzu2rAFalIejErNSCtaWpQmBWa7c9RNUNytjQSsk661qN5diY1ATRogRi52fRo3r9-8g4WfMGwF5AC21OoaQ5sg7YU.gif?reason=",
        closeActionText: "Закрыть",
        iconOpen: "choicesIcon_0",
        iconClose: "choicesIcon_1",
        iconHide: "choicesIcon_2",
        iconComplain: "choicesIcon_3",
        iconInfo: "choicesIcon_7",
        aboutCompanyLink:
            "https://ads.vk.com/adv_info?id=AAC_-QFe6C1IYWTgNelRvlWPk1M7eAbRVx8xhWqmquTWYDX1MfWLOp-1isl68XI6-wpfEnWeYJxAi0FhBJirnJwfld5GU_4Erx_ePvJRPproMcxEX0kvh9Cus0enPcuG3skPygxTif-vFkffU4jctWZIdOn0dfAhXLB9SyFcHNhwCFhkKwGZNzkJAAAAbDAysAgOcqARAnYVHT5biw",
        marker: "2VtzqvR4hTQ",
        options: [
            {
                name: "О рекламодателе",
                clickLink:
                    "https://ads.vk.com/adv_info?id=AAC_-QFe6C1IYWTgNelRvlWPk1M7eAbRVx8xhWqmquTWYDX1MfWLOp-1isl68XI6-wpfEnWeYJxAi0FhBJirnJwfld5GU_4Erx_ePvJRPproMcxEX0kvh9Cus0enPcuG3skPygxTif-vFkffU4jctWZIdOn0dfAhXLB9SyFcHNhwCFhkK-fYb1YJAAAA6f5MAq7acZYHsPWQ6Z2FZw",
                shouldCloseAd: false,
                type: "default",
                iconId: "choicesIcon_4",
            },
            {
                name: "Скопировать ERID (2VtzqvR4hTQ)",
                copyText: "2VtzqvR4hTQ",
                shouldCloseAd: false,
                type: "copy",
                iconId: "choicesIcon_6",
            },
            {
                name: "Скопировать ссылку",
                copyText:
                    "https://t.mail.ru/redir/AAC_-QFe6C1IYWTgNelRvlWPk1M7eAbRVx8xhWqmquTWYDX1MfWLOp-1isl68XI6-wpfEnWeYJxAi0FhBJirnJwfld5GU_4Erx_ePvJRPproMcxEX0kvh9Cus0enPcuG3skPygxTif-vFkffU4jctWZIdOn0dfAhXLB9SyFcHNhwCFhkK2YNjUt7BAAAP-rUDRp36f1UmiDyZ8aDY63A6f4o6PsnNAg1hn8CSwMpevFka8BTftWNLeNHv-fRHPMF4PAJLCJT-Hex0Y_6u6MFsl67FYv-m6vylrvpGjakIba1yEX62TTTkQg3iKR5eq809-EB4Xbv-9GGgaoAfoEor1IIutMhJLZULrw49hxOXYRmA7vWrNrLlLsKLgjQXsqOBiSrfbUmeXjAY8EIYm7cj2TWjid9uRDiqWpHtQoehQoEUanq6eFpRlegWa2USEH6JzxBkNtwQxqB09UXlE3rWERif_omXm1vxSOPRCy5FKBrtNcpb_bklzI9k784-vWcMYiYgM8bL9NkMWAmDtsMAxKYodrnof7fYwJYlEDb8YGu_BImMPG6HTn0UCurPdUou9neYPwbZoAy7vkEpctXDDoZeYSIwsuGfPQUOG0-cra8u-SDIgAkfTqzgGm8-yCngo3z_6NXjS4rf8nBUX7fyOLjLfUDdgpNfU_fZ8ln7UIsw29neIX_4UYyxuCbjNaMuemoSUV0SGFn3PomrvV5dAd76EuU2ShRHIFDh6ZP7Flt9Alw6ZAIuupL0UAXaLgFX8-QzKpZCNFfylfx0oYeN0E2T5gSud64y62-71ccXlfObYBgtYmZFBeFURNpy2DleZwSra3KLP-F1C29dzSxVMxLhy-xQez3qIVXZ9NajGtEZgPx9DjTuDtfOVnoqky8BkM-wZ_z-rVrgZofZH9JTShalufUiZ9mxxQ5a7jsLxIvQW5Nrum7JY6QhG4tMydSoddKopX25WRUmCL53xxHuDaJaGUHgS5NV_UKEJSzAGVKGaQJxFCR72ktFt51sQKeb0VwP0QYbfIXeLuqz3jVsS3jkGhsMWHw0Pyg12s5hjZvqJteoyE3cPqKfqJvGZerzbRrUXtvMd1SarPi4mpDdVaBxhHIWPukzWakB25QGCX8C7Vil2zkwQTGdAf7Ym4d8CtwmHcp8MrIvSIqyxc_KOVzA2nF_YgmlFzRHwqZgc7Z6B9gu3Fo1_2c_4oLTU51i0DhY-6OT207dXfKCX_NjwwlWrXp-ixB41j_xg7IPV6gIX7AUu4qcULDo-UnWvleHMQg8pp8E5YYJqrIgQkvssk3fbrU0PRS5tNWOBwg9IBZ6Kk-na0o87_LuEO-jLf9flCqo1RO-qG_tLBQQ3UyycbTI_t_CCfrUv0Mt0dFiVPuKHbZ1QuMmeSV2cyi_-Uqfolb99h53u78BJR_BtFMPn1xB5xz90PK6pPEDhuY3pLF53buF_qIlRw4_SGMnyu9OzAsqQzEkhI3A6kRu-X4q69cByUsSwZ1DMzLQ88h3cWBKfkHhnsn2YTTjdR1973qctwF-jXUkg7sjxVCvnt3rpdmLbrF4D_pCPR3tGDj76ydvAYrrGpsdyIbIOzvLOcaCW5sBPRjxaY9AoR2ZS0rOjFj9b-MmzhJstZFjobMFsKnrVsB-8bdPfT3VG1q0oZz39OxL26nWD0cZMoxs8H-HQGGGFTR4S9nPvVR-5Og3Vbdyd5mavxkQb1WqU1Y:2VtzqvR4hTQ",
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
    statistics: fullStats,
};
