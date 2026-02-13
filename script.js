// Datos de los cursos con sus logos e información
// Ordenados según la lista proporcionada: Álgebra, Aritmética, Biología, Economía, Física, Geografía, Geometría, Historia del Perú, Historia Universal, Inglés, Lenguaje, Literatura, Psicología, Química, Razonamiento Matemático, Razonamiento Verbal, Trigonometría
const coursesData = {
    courses: [
        {
            id: 2,
            name: "Álgebra",
            description: "Expresiones algebraicas, ecuaciones, funciones y polinomios.",
            icon: "fas fa-square-root-alt",
            color: "#e63946"
        },
        {
            id: 1,
            name: "Aritmética",
            description: "Números, operaciones básicas, fracciones, decimales y más.",
            icon: "fas fa-calculator",
            color: "#0a4d8c"
        },
        {
            id: 3,
            name: "Biología",
            description: "Células, seres vivos, ecosistemas y anatomía humana.",
            icon: "fas fa-dna",
            color: "#2a9d8f"
        },
        {
            id: 17,
            name: "Economía",
            description: "Sistemas económicos, oferta y demanda, mercado y finanzas.",
            icon: "fas fa-chart-line",
            color: "#2d6a4f"
        },
        {
            id: 4,
            name: "Física",
            description: "Movimiento, fuerzas, energía, ondas y electricidad.",
            icon: "fas fa-atom",
            color: "#9d4edd"
        },
        {
            id: 5,
            name: "Geografía",
            description: "Relieve, clima, recursos naturales y cartografía.",
            icon: "fas fa-globe-americas",
            color: "#40916c"
        },
        {
            id: 6,
            name: "Geometría",
            description: "Figuras geométricas, medición, propiedades y transformaciones.",
            icon: "fas fa-draw-polygon",
            color: "#3a86ff"
        },
        {
            id: 7,
            name: "Historia del Perú",
            description: "Culturas preincas, imperio inca, conquista y república.",
            icon: "fas fa-landmark",
            color: "#dda15e"
        },
        {
            id: 8,
            name: "Historia Universal",
            description: "Edades históricas, guerras mundiales y civilizaciones antiguas.",
            icon: "fas fa-monument",
            color: "#bc6c25"
        },
        {
            id: 9,
            name: "Inglés",
            description: "Gramática, vocabulario, comprensión auditiva y conversación.",
            icon: "fas fa-language",
            color: "#7209b7"
        },
        {
            id: 10,
            name: "Lenguaje",
            description: "Gramática, comunicación, comprensión lectora y redacción.",
            icon: "fas fa-spell-check",
            color: "#3a86ff"
        },
        {
            id: 11,
            name: "Literatura",
            description: "Géneros literarios, autores, obras y análisis textual.",
            icon: "fas fa-book-open",
            color: "#8338ec"
        },
        {
            id: 12,
            name: "Psicología",
            description: "Procesos mentales, emociones, desarrollo humano y conducta.",
            icon: "fas fa-brain",
            color: "#ff006e"
        },
        {
            id: 13,
            name: "Química",
            description: "Elementos, compuestos, reacciones y tabla periódica.",
            icon: "fas fa-flask",
            color: "#fb5607"
        },
        {
            id: 14,
            name: "Razonamiento Matemático",
            description: "Problemas lógicos, secuencias, analogías y patrones.",
            icon: "fas fa-puzzle-piece",
            color: "#3d405b"
        },
        {
            id: 15,
            name: "Razonamiento Verbal",
            description: "Sinónimos, antónimos, analogías verbales y comprensión.",
            icon: "fas fa-comment-alt",
            color: "#588157"
        },
        {
            id: 16,
            name: "Trigonometría",
            description: "Triángulos, funciones trigonométricas, identidades y aplicaciones.",
            icon: "fas fa-shapes",
            color: "#1d3557"
        }
    ],
    
    // Definición de Tomos I al VIII
    selectors: {
        tomos: [
            { id: "tomo-i", name: "Tomo I", icon: "fas fa-book", color: "#2a9d8f" },
            { id: "tomo-ii", name: "Tomo II", icon: "fas fa-book", color: "#2a9d8f" },
            { id: "tomo-iii", name: "Tomo III", icon: "fas fa-book", color: "#2a9d8f" },
            { id: "tomo-iv", name: "Tomo IV", icon: "fas fa-book", color: "#2a9d8f" },
            { id: "tomo-v", name: "Tomo V", icon: "fas fa-book", color: "#2a9d8f" },
            { id: "tomo-vi", name: "Tomo VI", icon: "fas fa-book", color: "#2a9d8f" },
            { id: "tomo-vii", name: "Tomo VII", icon: "fas fa-book", color: "#2a9d8f" },
            { id: "tomo-viii", name: "Tomo VIII", icon: "fas fa-book", color: "#2a9d8f" }
        ]
    },
    
    // Enlaces de Google Drive por tomo, año y curso (IDs originales)
    driveLinks: {
        "tomo-i": {
            2025: {
                1: "https://drive.google.com/drive/folders/1rMwH8OgIQFYI1f-EQ_RWNvVPhbS15wtt?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1KYgMXq51n-DHCRkVdk4mXldwc0exrTJP?usp=drive_link",
                3: "https://drive.google.com/drive/folders/143sDCZcrQRHUA7pW6GTKgkz8VCxuxpYe?usp=drive_link",
                4: "https://drive.google.com/drive/folders/1y94Qw6hJmCSqtszIXkQSKEDK2EllRQVt?usp=drive_link",
                5: "https://drive.google.com/drive/folders/1ZAp8aYlgRDRiCoHumaleIZQ-2D8CAWE_?usp=drive_link",
                6: "https://drive.google.com/drive/folders/1V8uWPtDnXrFpEeSDOmrsnZEnodnkN6bc?usp=drive_link",
                7: "https://drive.google.com/drive/folders/1p0Z0fzt6reCWxR9InixsOAKEcuJOe7wa?usp=drive_link",
                8: "https://drive.google.com/drive/folders/1W10TTOX026rRSszlkxyI4olLXfTvKhDY?usp=drive_link",
                9: "https://drive.google.com/drive/folders/12TT-m0MrkkWrt0Mf3RTbhu7hBV1oevgc?usp=drive_link",
                10: "https://drive.google.com/drive/folders/1yKeRaObPfzMJVUXfMPNtT7ZzcY3mNMZD?usp=drive_link",
                11: "https://drive.google.com/drive/folders/1ckcLcuh-b0CYfTHgHzJDmp359RP1Xrrx?usp=drive_link",
                12: "https://drive.google.com/drive/folders/17lgHrJ6KMK5DzHTiuFaitLBHcDLlvZIk?usp=drive_link",
                13: "https://drive.google.com/drive/folders/1rBOmslsF3EMu0F8xFD53PPUcxpAyjSU5?usp=drive_link",
                14: "https://drive.google.com/drive/folders/18VftyOCcqEtX4rjQ7KIYslMvtsrZlXVc?usp=drive_link",
                15: "https://drive.google.com/drive/folders/13chsl1MGamMiwcso8egt-SJx1s7CNMM6?usp=drive_link",
                16: "https://drive.google.com/drive/folders/1RLScIb5e2rBIKU5xJbLuKueIyMgz2Axh?usp=drive_link",
                17: "https://drive.google.com/drive/folders/11vddpQVJM50K1LipvrsuQnFJFsvmkjyg?usp=drive_link"
            },
            2026: {
                1: "https://drive.google.com/drive/folders/12b-cg1tYt0lPEeSE5G3MiBqHZVkf2Gps?usp=drive_link",
                2: "https://drive.google.com/drive/folders/16SS3BwerD_KZtl5clyoJyP2EWG8SJCYf?usp=drive_link",
                3: "https://drive.google.com/drive/folders/1qysshJIgnNeVXC305aE0rsezuZsG1orZ?usp=drive_link",
                4: "https://drive.google.com/drive/folders/186pd0A-lqNqtoxKrrrkDSf_7W_GEO9_P?usp=drive_link",
                5: "https://drive.google.com/drive/folders/1koXSGjSFx3hBhrAiSEiWgGfqMh65W5r0?usp=drive_link",
                6: "https://drive.google.com/drive/folders/1jTOh1PuQn0x2b-KndE0p5_MmRLwttrDG?usp=drive_link",
                7: "https://drive.google.com/drive/folders/1jqoJyHoHNNy_FZuDDlb33Mu6On3ciavt?usp=drive_link",
                8: "https://drive.google.com/drive/folders/1Lh6zkzmBdCX2vQ46Qe_rMMEuIdxV3gQb?usp=drive_link",
                9: "https://drive.google.com/drive/folders/1EL2Z-spM8moLkYZXxxFA6flnr007rDiP?usp=drive_link",
                10: "https://drive.google.com/drive/folders/1ZNVogZScC7_i2OHr7w8l4o50zTDgTUaJ?usp=drive_link",
                11: "https://drive.google.com/drive/folders/1Py7cqdxaraq6QfZEKpm_arWw9AaEKJoO?usp=drive_link",
                12: "https://drive.google.com/drive/folders/18cTREIO1Xke5JFn2_nXQXfi5lpPoqyr6?usp=drive_link",
                13: "https://drive.google.com/drive/folders/1lSxT9Hh3KcOPOMvTWaLSmE3KdBGQaB_C?usp=drive_link",
                14: "https://drive.google.com/drive/folders/1yeAJ_rQGO7vUlMrzX2aZ6qJeouwcJlvp?usp=drive_link",
                15: "https://drive.google.com/drive/folders/1Yy52X--pki0S-Tep-vcOi2R_EwzTaNtD?usp=drive_link",
                16: "https://drive.google.com/drive/folders/1sOPgIVjz9m5vst_A8SFG7PyMTj3TNUIz?usp=drive_link",
                17: "https://drive.google.com/drive/folders/15oiYp5YFZDfhV1l6qaBVAh2uz1jqfCMW?usp=drive_link"
            }
        },
        "tomo-ii": {
            2025: {
                1: "https://drive.google.com/drive/folders/1c7IR1-tvg36OOHMo6r8EF3zqVL2BibmO?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1g9Wec8uogFpb0TL6iQTDwNfZAq50mcVJ?usp=drive_link",
                3: "https://drive.google.com/drive/folders/1dH-9lpJWIn82er1piaTZWjlOK3EnRwrv?usp=drive_link",
                4: "https://drive.google.com/drive/folders/1dDbA6GQryWG8SupJeoxHOc_4alNuKtuM?usp=drive_link",
                5: "https://drive.google.com/drive/folders/1j-X90EVv7Rcj5b_0eMRHNGFAbCt29Bnh?usp=drive_link",
                6: "https://drive.google.com/drive/folders/12umb8ZvZOACsQRRlR64ZtMt7zPWdbWWi?usp=drive_link",
                7: "https://drive.google.com/drive/folders/1UwoRwyc4NbnIzGc0xd6BoP-Nktk2CbCM?usp=drive_link",
                8: "https://drive.google.com/drive/folders/13XacpUthIhNYjQfyO95z23WEvBRjNIlG?usp=drive_link",
                9: "https://drive.google.com/drive/folders/1sUoIRWO2QOkTnsXm--7-jUWBXztOTJBP?usp=drive_link",
                10: "https://drive.google.com/drive/folders/1ojyEblLtW1Pku8mPIqd2lsMfJf2LikMY?usp=drive_link",
                11: "https://drive.google.com/drive/folders/1olyomWeuscldynzLN2b3dwOuY5AAemq7?usp=drive_link",
                12: "https://drive.google.com/drive/folders/19nYEc8eo57lN6k7zM-xCNJ2SroO3V3pv?usp=drive_link",
                13: "https://drive.google.com/drive/folders/1W3a4j2eVYnHgOI3vZv3WFx6077P-Q9bV?usp=drive_link",
                14: "https://drive.google.com/drive/folders/14vyIxap5qyJecvdrD9PdLzfzrrGIx_Cg?usp=drive_link",
                15: "https://drive.google.com/drive/folders/1-wS1KkMxpgyENaJWrhyFbAeKBwHbgGpk?usp=drive_link",
                16: "https://drive.google.com/drive/folders/199qAOcwGmruYNKhHW8h5uc7f8DMi8tH9?usp=drive_link",
                17: "https://drive.google.com/drive/folders/1Axe_ubOUW-RT1qxKoO21OEnyWWD8Svkf?usp=drive_link"
            },
            2026: {
                1: "https://drive.google.com/drive/folders/1d5klbCTdQ05zXMYrhsZFNd0hukcSYX2J?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1QrOGGiFX1bXgH5FEd9NH9sbAedUq9xsD?usp=drive_link",
                3: "https://drive.google.com/drive/folders/1uxzvy3uI93M6sUPsHVYuEzjtMqqgzBvo?usp=drive_link",
                4: "https://drive.google.com/drive/folders/13ZQDApgJiGVY8h3NbUaqj10hdbvLPoTP?usp=drive_link",
                5: "https://drive.google.com/drive/folders/1cf5Rv6IhLit3ssIgtpXKtoVNtX9t4auh?usp=drive_link",
                6: "https://drive.google.com/drive/folders/1UfO_6d5Ia6WP7Fs2EcoD7TXOFe4ttIJU?usp=drive_link",
                7: "https://drive.google.com/drive/folders/1v7UTypiKjRnp8AH9shkursj5dxHBDLGZ?usp=drive_link",
                8: "https://drive.google.com/drive/folders/1rzsCGntsVVznckNTtraAv8dy6JBG5PE7?usp=drive_link",
                9: "https://drive.google.com/drive/folders/1zVCHF_ApbH0-pc7KOvHfvEFZo0i39pSL?usp=drive_link",
                10: "https://drive.google.com/drive/folders/1-2l9_alM2_gcZaWi_whVwcGhjlvXKgP6?usp=drive_link",
                11: "https://drive.google.com/drive/folders/1J-39O1uf69ddmcqIfYRgWeD5Qw381jBG?usp=drive_link",
                12: "https://drive.google.com/drive/folders/1L0cj3V--FOsTL6p0iDNOI063-bjoppRY?usp=drive_link",
                13: "https://drive.google.com/drive/folders/1Yn2DXmfTGzc24VaVRWU3dSC-MqQ_Xzi-?usp=drive_link",
                14: "https://drive.google.com/drive/folders/1ZnO_aTowfC6uZ_9gpYsrNbk9LBugxFhz?usp=drive_link",
                15: "https://drive.google.com/drive/folders/1InblycTQpxwLVt89o4jaF9HItvVMYPFK?usp=drive_link",
                16: "https://drive.google.com/drive/folders/1ukFy9WKF4g6nLJF4QCUUPMCOrdc-PXiy?usp=drive_link",
                17: "https://drive.google.com/drive/folders/1JX_OSpnrGaWeiWrRJxruQjipWrv2mfQh?usp=drive_link"
            }
        },
        "tomo-iii": {
            2025: {
                1: "https://drive.google.com/drive/folders/1VAuxsKtN5Q3j2bRjPLYR-dCu4bf4DNUt?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1xvPxY1IVdY3dIGs5pUZtqzJjFBpp0DiW?usp=drive_link",
                3: "https://drive.google.com/drive/folders/13BfnaAfOgmpF_6AKhU0AXgTbAuPCF9aZ?usp=drive_link",
                4: "https://drive.google.com/drive/folders/1b0lzXP8Mt7MPbkTDObCUEC-WwVl3r_cA?usp=drive_link",
                5: "https://drive.google.com/drive/folders/1Dz0z7cm7OoMlTLETtIYXLo-gnBkUjg9c?usp=drive_link",
                6: "https://drive.google.com/drive/folders/15BWT3CM-8ipYSEV47evQ_GsMUHuiQr_T?usp=drive_link",
                7: "https://drive.google.com/drive/folders/1sZpWbIHPWEC0wXajrI89M1vpyzQK3qgB?usp=drive_link",
                8: "https://drive.google.com/drive/folders/1EaKxh3aWI4l78rI9yG-C9kUD9utxvg1c?usp=drive_link",
                9: "https://drive.google.com/drive/folders/14amduWBaE0ft1iS0TayrsYt0ngciokmN?usp=drive_link",
                10: "https://drive.google.com/drive/folders/1x-_R7oTvUSEsyJB31PAYS7Xq8PUSsweO?usp=drive_link",
                11: "https://drive.google.com/drive/folders/1hwqMVm_UvdEPJ5WYJQCY8IKSRFG8U83a?usp=drive_link",
                12: "https://drive.google.com/drive/folders/1717f4tNtKN8ab4d_aSpfdv0YdJN73h_d?usp=drive_link",
                13: "https://drive.google.com/drive/folders/1gKn1GWaNYH_HWWZXSYwO3J7NpjyKPAGX?usp=drive_link",
                14: "https://drive.google.com/drive/folders/1jwhlNgF7cTJEAtLOTXuCuinsAS4q3RB1?usp=drive_link",
                15: "https://drive.google.com/drive/folders/1ycpTfHY5gsB6Pwd2qUROv0AUkxQ6jMmY?usp=drive_link",
                16: "https://drive.google.com/drive/folders/1ZgDf0lTFJi7S9gxoWCX25-OLfuHXhMwh?usp=drive_link",
                17: "https://drive.google.com/drive/folders/1UdS9Sk944Pqtntn7pzC99UeVFRVlFnBz?usp=drive_link"
            },
            2026: {
                1: "https://drive.google.com/drive/folders/1aeRjsBIqJw5bBQc-lMzDLhjd11J8LYAX?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1dMbr8gpCxsj_8tYmP2t0QCpa4yt977Nu?usp=drive_link",
                3: "https://drive.google.com/drive/folders/1-6S1rf7mKa3ZQX3iCNI1VUkkxusxEj9j?usp=drive_link",
                4: "https://drive.google.com/drive/folders/1Em_gkGowYTx96VyiC7ZohXJiOWMMEMhk?usp=drive_link",
                5: "https://drive.google.com/drive/folders/13dJ8UKdMLrAYxxwwY4aL_sfal7nb-2Bj?usp=drive_link",
                6: "https://drive.google.com/drive/folders/1k6hstVhy_WDjv1xjfnqbEHsH2LQ52kEB?usp=drive_link",
                7: "https://drive.google.com/drive/folders/1fx9igDJ1qyW4WcEQExZ05m-dImAXTDmj?usp=drive_link",
                8: "https://drive.google.com/drive/folders/16IPnJPNEQWNQ29zD-0Gaa67EUythxnlI?usp=drive_link",
                9: "https://drive.google.com/drive/folders/1AQb9kxmyTQuvGPaRvUc4ayaG5xjJiOWp?usp=drive_link",
                10: "https://drive.google.com/drive/folders/1UfG-xb5yHggLADplKjZqFe8qR67vu5OI?usp=drive_link",
                11: "https://drive.google.com/drive/folders/1mEpUIIqBEDKdd9KwjulZUmAqYfTQ_Jv7?usp=drive_link",
                12: "https://drive.google.com/drive/folders/1YHiXwPY1MawaGZSOd8nQuG5avgyJ_PfR?usp=drive_link",
                13: "https://drive.google.com/drive/folders/1cVT2PouQk6h8o2FAz26r3-TAwhgYVHrZ?usp=drive_link",
                14: "https://drive.google.com/drive/folders/1PDKTNPZPLbAqURqPw6h1K9Q0DT8YQQZn?usp=drive_link",
                15: "https://drive.google.com/drive/folders/1Y_SbwonsiLXA4_YYuQg5jQ878kQzyKup?usp=drive_link",
                16: "https://drive.google.com/drive/folders/1wuAZUMVnFamPCn01JHAEn7fdXU_uIi1F?usp=drive_link",
                17: "https://drive.google.com/drive/folders/1QSQxUYWFvhTLqBqmgEDa3EEt8iCuchep?usp=drive_link"
            }
        },
        "tomo-iv": {
            2025: {
                1: "https://drive.google.com/drive/folders/198zrMokyQD8GVo8byQQV7C2DwbpdY8ul?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1jTOBDn9qjfnfEOWwjvcteC-Gcbncj8SP?usp=drive_link",
                3: "https://drive.google.com/drive/folders/1axbdFkhMCdr3huSWxALrT6m2oV18-vv8?usp=drive_link",
                4: "https://drive.google.com/drive/folders/1sDWMSzYJPUMZx5drdKtcto0rZ2xbSIKA?usp=drive_link",
                5: "https://drive.google.com/drive/folders/1hdYeRSqESSUsjSGh9Yn0LkpnWrHfeuF9?usp=drive_link",
                6: "https://drive.google.com/drive/folders/15xom9Tb3B35rgWKYV76R6JVTjCxTgK8G?usp=drive_link",
                7: "https://drive.google.com/drive/folders/1fhfV6wlj3hceVdqu1J1lKT0YSkyv2Mw-?usp=drive_link",
                8: "https://drive.google.com/drive/folders/1c5OOtdDSCzDauBlCGjSmGowIGEO9S9pX?usp=drive_link",
                9: "https://drive.google.com/drive/folders/14QLKYuCst6DXqiz_EgWMTSI0SrGhI7Ci?usp=drive_link",
                10: "https://drive.google.com/drive/folders/1yRJybzvKRRmNxwPrUMyvViGmSzMIFIjM?usp=drive_link",
                11: "https://drive.google.com/drive/folders/1dgxNy0eGPfelCQh9INS8pyCNNAxyNBwI?usp=drive_link",
                12: "https://drive.google.com/drive/folders/1NbtHb3flKIw1Rz7LJEeJS0Nt969VokHX?usp=drive_link",
                13: "https://drive.google.com/drive/folders/1xA5dKNTSga_ElH8Ks6OTjzrG8B_gGPeF?usp=drive_link",
                14: "https://drive.google.com/drive/folders/1MQFFdTeYB_YCVlHGj56X5GHYfTLFLw2C?usp=drive_link",
                15: "https://drive.google.com/drive/folders/13unLzMm_EveALs6nEhEBvICeAcPWOhHU?usp=drive_link",
                16: "https://drive.google.com/drive/folders/1cXnYUlkxhdJcRFu6abvbjrKeoXsE35Wu?usp=drive_link",
                17: "https://drive.google.com/drive/folders/19I-VDPRP6d98TS3rH1SwuI-CGzp9Zs_S?usp=drive_link"
            },
            2026: {
                1: "https://drive.google.com/drive/folders/1HsfnzIC1hUM87AjImaNhvzuVA00nKmho?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1Hqr_g3HCIPpG6iPlaFYDxehX6rCh0G_1?usp=drive_link",
                3: "https://drive.google.com/drive/folders/1-i1GDI5HVeTUl5floK6pLOvr8KZtIXhV?usp=drive_link",
                4: "https://drive.google.com/drive/folders/1oCEcv62SiczPlxizowveKMfC5WQaJJq7?usp=drive_link",
                5: "https://drive.google.com/drive/folders/1aAtesDV2pZKWLIC0wD9UxkH9rcoEX03Q?usp=drive_link",
                6: "https://drive.google.com/drive/folders/1KtYm6HQuiQLH5ACFlbKYOCMoHRQISipW?usp=drive_link",
                7: "https://drive.google.com/drive/folders/1puWjvwznBR8lIWr_Hv3qmTdFb7H1-9k6?usp=drive_link",
                8: "https://drive.google.com/drive/folders/1Jnxp3CUvHLuBLN7apv58Cx97Iw1uBLuW?usp=drive_link",
                9: "https://drive.google.com/drive/folders/1DMr2x-aM-3UWwFdXfb86UFXeLtQRKjnD?usp=drive_link",
                10: "https://drive.google.com/drive/folders/13d0o_7CZPwSt0_yOTWN8Uqh9WrdIEK_j?usp=drive_link",
                11: "https://drive.google.com/drive/folders/12CvAUWV1RPaD3P6bOHiQYHjLahTTjy1l?usp=drive_link",
                12: "https://drive.google.com/drive/folders/1mKc_aHKA3XIb0Dvs-fLd3paPxEpKKiG-?usp=drive_link",
                13: "https://drive.google.com/drive/folders/1gSRfVF3pQnSwFXhysaH085ddNKITnKpD?usp=drive_link",
                14: "https://drive.google.com/drive/folders/1v9Rlk_nQB0MbWg3Gw5DppUn_b0cNm9Si?usp=drive_link",
                15: "https://drive.google.com/drive/folders/1893ygCREZeMun2kjJjE8XZvW50RO5QRl?usp=drive_link",
                16: "https://drive.google.com/drive/folders/1o-uBKcxsEUAWKUxPMIkIPMJ82WkkM0i_?usp=drive_link",
                17: "https://drive.google.com/drive/folders/1O3mg2cF0a5G9kAvc4XPt9-qnNrDuwLXH?usp=drive_link"
            }
        },
        "tomo-v": {
            2025: {
                1: "https://drive.google.com/drive/folders/1fMY_Rbx3DyVtneAaBTjD8B5Pl1XLUXOB?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1JNecRBd_YPKzTIfbU7teu9gjXcN7MXXy?usp=drive_link",
                3: "https://drive.google.com/drive/folders/1-JMbK-cE2fN-kxmyM0u7AxoLM-Q4rouL?usp=drive_link",
                4: "https://drive.google.com/drive/folders/1qkicuIgsH98X3EY75s7AEbXj-Hp3Cr6h?usp=drive_link",
                5: "https://drive.google.com/drive/folders/1toNmuCm6KnH19fsLa0VG6JZNznjVYb9-?usp=drive_link",
                6: "https://drive.google.com/drive/folders/19TZrVlWEHtKHL2TAtp38vFXxNBnIQ3jJ?usp=drive_link",
                7: "https://drive.google.com/drive/folders/1P4c6_lyDIGXyveEEkSVrOND2TZIoEv7h?usp=drive_link",
                8: "https://drive.google.com/drive/folders/17BD-UOkYQ0NSD3DdMHjh2zvhy3bcc1cE?usp=drive_link",
                9: "https://drive.google.com/drive/folders/18M6xhmBysIHGT2f2nOojp3MKt7B6xnKl?usp=drive_link",
                10: "https://drive.google.com/drive/folders/1pgoCirSRW4Q6e0UW6IVZmcudvTh9NbMw?usp=drive_link",
                11: "https://drive.google.com/drive/folders/1CxrvhnB_OpKmVctF_fH4MiiQ73mjSPkd?usp=drive_link",
                12: "https://drive.google.com/drive/folders/1b9zUqPIQwXQnmJVJ0sWCoNNkv4kdB1lX?usp=drive_link",
                13: "https://drive.google.com/drive/folders/1EE9lu4Aecs9IOHorgy085CYZI9oJrFqn?usp=drive_link",
                14: "https://drive.google.com/drive/folders/1BB5RGcE1-lpOYqQEVjQ4zhIrec56_A-O?usp=drive_link",
                15: "https://drive.google.com/drive/folders/10sO8nPFHRNe1Xztr10vNgVRunx_ZUQ94?usp=drive_link",
                16: "https://drive.google.com/drive/folders/1YfhInaPkh892a6JCzHApx-pnqCNbo-IL?usp=drive_link",
                17: "https://drive.google.com/drive/folders/13NDcU3rtUWjYK4jtgLt59b4Rzx4ushj7?usp=drive_link"
            },
            2026: {
                1: "https://drive.google.com/drive/folders/1m7twxsF5-uj6ROa1TRhJB_gtDvNBrSj1?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1GA3spyt6tpOpQauRK8gSZNeNzqVxPeNz?usp=drive_link",
                3: "https://drive.google.com/drive/folders/16tC6C_v36GteEBMLVM7u3oINQocKl2oy?usp=drive_link",
                4: "https://drive.google.com/drive/folders/1fCy8eX2r0GJqcBTw9WQd02mHt04mJFju?usp=drive_link",
                5: "https://drive.google.com/drive/folders/1x8rqOFiAbBVnTpmAJkBtX5hZqk31QLvt?usp=drive_link",
                6: "https://drive.google.com/drive/folders/1WhGILl-r-xW2hKgu-x99TgITPiOsHbij?usp=drive_link",
                7: "https://drive.google.com/drive/folders/1JKsTeBSLlCDaaP7E5m1geZDr26gJQWSu?usp=drive_link",
                8: "https://drive.google.com/drive/folders/1Q8nO5Nn2SGUDpb1CMwzaKeQCK6pKrLwR?usp=drive_link",
                9: "https://drive.google.com/drive/folders/1E4fsN6j-al0I9JUIBAbQ5B2MGrxIW7nz?usp=drive_link",
                10: "https://drive.google.com/drive/folders/1XWiBFAINubFwEzMymzDST9gKmRzxoDq7?usp=drive_link",
                11: "https://drive.google.com/drive/folders/1DrW42rMYA4pfI9fadj_iVWUTDlP00-Vk?usp=drive_link",
                12: "https://drive.google.com/drive/folders/1L58kdKwQUHyguaEZplFd96oVRZYx7c_4?usp=drive_link",
                13: "https://drive.google.com/drive/folders/1nbBxJgA612ksYpx6ZOhTRTTEmT1wtKM_?usp=drive_link",
                14: "https://drive.google.com/drive/folders/16_8SIk3yCAs7RLXLSs32RqKIv65WQWQW?usp=drive_link",
                15: "https://drive.google.com/drive/folders/1A1O8FxT0Gw93ysrKVy982gjzYT7_zr53?usp=drive_link",
                16: "https://drive.google.com/drive/folders/1AiAkQrY4EmMhd2a7d5aoZz9SfF7V6T90?usp=drive_link",
                17: "https://drive.google.com/drive/folders/1DdgiqcxciiX2DUQwj4LY1-tnVypAOhju?usp=drive_link"
            }
        },
        "tomo-vi": {
            2025: {
                1: "https://drive.google.com/drive/folders/1K-ci-_h0zc4s4joNACdiJc-xiW9BNWjN?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1qQ8gw9Bb3LzmbwbM1d9bqKXxCYvDUpw0?usp=drive_link",
                3: "https://drive.google.com/drive/folders/13jgfuQW_YJM7s7J1FkLCVxAJIbGsGq9f?usp=drive_link",
                4: "https://drive.google.com/drive/folders/1QlCbDqFDbB6HkC2sL7OBuPQ7eRLAPC0x?usp=drive_link",
                5: "https://drive.google.com/drive/folders/12dvOA7orX72eoaZWZLG5EA43pAippuoP?usp=drive_link",
                6: "https://drive.google.com/drive/folders/1IuvOWAjDBM5KqTJN3j6U3VZs6FKlQDQ-?usp=drive_link",
                7: "https://drive.google.com/drive/folders/1lwAPkGmSF8-Oe1FuYarz8PTnoAJJZ8e9?usp=drive_link",
                8: "https://drive.google.com/drive/folders/1TvKdyN8DiCBvKwNvHAm986AriCMpHisl?usp=drive_link",
                9: "https://drive.google.com/drive/folders/1mpN2OvnygIhG8LOTU-x7j_jAWpmAyw4s?usp=drive_link",
                10: "https://drive.google.com/drive/folders/1lkNRw3F2_sWS3BH8SgJIE9BRjQXYQHQT?usp=drive_link",
                11: "https://drive.google.com/drive/folders/11dcRbadYTUvLu6oXipGv5LDHC7UUj8SG?usp=drive_link",
                12: "https://drive.google.com/drive/folders/1VOR5j5SAoT5a1l2-o6N0JX_d3IrQnsX-?usp=drive_link",
                13: "https://drive.google.com/drive/folders/1Ea2kYIrcqj0XThWurR2kXns3Umnso6gg?usp=drive_link",
                14: "https://drive.google.com/drive/folders/1ywqRnVs03QsrQGjG_3amrt_Ok6TCSGSw?usp=drive_link",
                15: "https://drive.google.com/drive/folders/1rL599KXf8g8Ij7YapPRJzdVDnJ9IYqEw?usp=drive_link",
                16: "https://drive.google.com/drive/folders/1Q1jzCx2QSz9ZJcNX9lgUCCgPfs2N2bTN?usp=drive_link",
                17: "https://drive.google.com/drive/folders/1zEpsFqZamQZWaUbmqM2RcLUjg9j-Td2M?usp=drive_link"
            },
            2026: {
                1: "https://drive.google.com/drive/folders/1LamgjRkhEfAZHJhaUYVKd0EP1Xr584Lg?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1hX2-xFG8Kt8b2ZMU-nY5W6-PjQlrvidI?usp=drive_link",
                3: "https://drive.google.com/drive/folders/1cn8tYK73CgzUZpwFnKT7DSyjzFDDlJUe?usp=drive_link",
                4: "https://drive.google.com/drive/folders/1Rf9TdZa-5sXAejNS8AO3HAJr3stqThbY?usp=drive_link",
                5: "https://drive.google.com/drive/folders/1X5n090RxF-2gSzo5clRmhiTCI6GDdpBY?usp=drive_link",
                6: "https://drive.google.com/drive/folders/1RWXVrYnNsyNidqz2hozpSSb47eLv2Kru?usp=drive_link",
                7: "https://drive.google.com/drive/folders/1vURmI6fDCgiXYRxVD-QDenMBpeYwgQf6?usp=drive_link",
                8: "https://drive.google.com/drive/folders/1RGhsFigCUFWaMTSEW3ynQmu5lGTiSfJA?usp=drive_link",
                9: "https://drive.google.com/drive/folders/159Deecrr22RM7DXp0zTNk1VYTWmISII9?usp=drive_link",
                10: "https://drive.google.com/drive/folders/1GfmInQSEYJ6oAPtlnEwzcGE0dzElD-X1?usp=drive_link",
                11: "https://drive.google.com/drive/folders/1FMH5yeiZpCebhLy--mGatXNVhz5Y0M78?usp=drive_link",
                12: "https://drive.google.com/drive/folders/1pJMbp0kCbJJEEApM4Kbl5DtA1iqwKNEj?usp=drive_link",
                13: "https://drive.google.com/drive/folders/1Q2h85YbUwUko9tjYHfl2fULpW-m8sYgw?usp=drive_link",
                14: "https://drive.google.com/drive/folders/1JeuOPBxSQkSxoNBtJCMHscgDWxiILRC1?usp=drive_link",
                15: "https://drive.google.com/drive/folders/1xcmLwjehJm8QurJvG1gmlgCLsqKsjK6D?usp=drive_link",
                16: "https://drive.google.com/drive/folders/1P8nTmBJBYNBTYSlRyAhCvTa19gSRm_CS?usp=drive_link",
                17: "https://drive.google.com/drive/folders/1-bMRckb8mzVlDKuuEHIjDIoqTu1t2VxD?usp=drive_link"
            }
        },
        "tomo-vii": {
            2025: {
                1: "https://drive.google.com/drive/folders/17BUDxKwD_UuzKjKw3Gvfsv8tjoIdYyfN?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1hH1aqaw3OXMzEsBJufwPwSr3n5GqI0_I?usp=drive_link",
                3: "https://drive.google.com/drive/folders/1F4sGn5upjw6NHJOhgsOfsBNPbUjfXNXF?usp=drive_link",
                4: "https://drive.google.com/drive/folders/11iqpiObMNPXy37RNzmvuaLJvBZQMR409?usp=drive_link",
                5: "https://drive.google.com/drive/folders/1MV0EcHA1smDP1tMPZ2_SsH1K2OuYLnlC?usp=drive_link",
                6: "https://drive.google.com/drive/folders/12HZ-MH3Y94p47_cZJ9VH1gsUh0_QemsI?usp=drive_link",
                7: "https://drive.google.com/drive/folders/13XEwDiQl6G433ECmlgvwauNKU2yrh7oS?usp=drive_link",
                8: "https://drive.google.com/drive/folders/1UXOmzX2NtHwlNbWUjsKqrMBMXI_OeOg_?usp=drive_link",
                9: "https://drive.google.com/drive/folders/1jZbbAcKMZmBVBk7NbX73InULdZfQRww4?usp=drive_link",
                10: "https://drive.google.com/drive/folders/1FET9HLvgVNNnRbd_cNffEGZc3PEnJxml?usp=drive_link",
                11: "https://drive.google.com/drive/folders/1Bzz5IORmQQnf0rL7PubR5d4kGTGgLgoQ?usp=drive_link",
                12: "https://drive.google.com/drive/folders/17JTM1DXOsYrAcMRsfTuXn-DVLzOVsQ6j?usp=drive_link",
                13: "https://drive.google.com/drive/folders/1x-XrgwrZaZ2WXJE5i-CGuikOr_ZJB0hC?usp=drive_link",
                14: "https://drive.google.com/drive/folders/1pqRqOBgz_QQpXbxra4uiYTjmXzzFlexd?usp=drive_link",
                15: "https://drive.google.com/drive/folders/1-kOkwbsOoRbn8_CZ4FaVIHBTX1VJOE8w?usp=drive_link",
                16: "https://drive.google.com/drive/folders/1f79uDzXOd5wMBEKvwtTMFd04RwXzmjE3?usp=drive_link",
                17: "https://drive.google.com/drive/folders/18Z9d6K2SPhbnydWg6CE-VMstWs9WDUus?usp=drive_link"
            },
            2026: {
                1: "https://drive.google.com/drive/folders/10E7Yx27Q9D1R9JUw_O3A59rdG5puZuRO?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1Gzo1YRQg_Q9DwLAg4YhafMvIW3neCbUG?usp=drive_link",
                3: "https://drive.google.com/drive/folders/1MGBqCKN2V8zBnNHTWEG1Ntzxa19hQcbf?usp=drive_link",
                4: "https://drive.google.com/drive/folders/1fFXTxajHY1Cay0GhggXi8u-EPPrC5g_S?usp=drive_link",
                5: "https://drive.google.com/drive/folders/1qdb-9Mmx8lX1nhF4wft8tja9IABeGo_e?usp=drive_link",
                6: "https://drive.google.com/drive/folders/1oOdvcBEMjrZggGWpHnU9hY7AlHnczH2R?usp=drive_link",
                7: "https://drive.google.com/drive/folders/1CZR49lYLGb5Dc-9IKDJFKZpqTE_1MmmV?usp=drive_link",
                8: "https://drive.google.com/drive/folders/1T9xTvmSUs7-P_bSOJDXH47quwx68M-6Q?usp=drive_link",
                9: "https://drive.google.com/drive/folders/1pRByjQaNXRg85Hj5B9yIIxxtzEAUY2E1?usp=drive_link",
                10: "https://drive.google.com/drive/folders/1v2Llt35g3XaNxMg5SYPC0nItCAxI6OX1?usp=drive_link",
                11: "https://drive.google.com/drive/folders/1o2kvwLQI3rH53aKaxmA8m8ehTDeia-Tr?usp=drive_link",
                12: "https://drive.google.com/drive/folders/16KAM2TQNJVJ_QNfqs98afTlRqnvV25Z8?usp=drive_link",
                13: "https://drive.google.com/drive/folders/1hmxiHNLTLSt0_6ggJ08UWO9JMLQy8qnZ?usp=drive_link",
                14: "https://drive.google.com/drive/folders/1ANrTdCEJ0XoULJzpzoW5kTJjC7PvE-K1?usp=drive_link",
                15: "https://drive.google.com/drive/folders/1js4VXP4ThN7x3ucdHoZEdjRqbtEnoRVy?usp=drive_link",
                16: "https://drive.google.com/drive/folders/1Bx6jg-HvBp3tsfeSx0S8Xc2Neh_X71ZZ?usp=drive_link",
                17: "https://drive.google.com/drive/folders/16sn-pxKdY4UGB8s5wJVUZIoumMT534GM?usp=drive_link"
            }
        },
        "tomo-viii": {
            2025: {
                1: "https://drive.google.com/drive/folders/1WkA8CS51vRCxSJma6Q3OKKa-5lj3ICx8?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1ZNa1veVOv7QyKJktnPLZ59O2G9cjf0mX?usp=drive_link",
                3: "https://drive.google.com/drive/folders/1DiwVIE2rr1g6QEHhpNSDokGhdFYItBT2?usp=drive_link",
                4: "https://drive.google.com/drive/folders/1Zd32X0zYI6i4KwsuYMOk-NZ9Hi2akmwo?usp=drive_link",
                5: "https://drive.google.com/drive/folders/1xGwMHCXuVHkf-rFZnjoX2jtAFY41tkYA?usp=drive_link",
                6: "https://drive.google.com/drive/folders/1xWJs0_QdiAVNEiWmBqRk9_kp9pmGQcNk?usp=drive_link",
                7: "https://drive.google.com/drive/folders/1qXZSf4Hl3qbnw1GowZOkOcWo_YU2hWVC?usp=drive_link",
                8: "https://drive.google.com/drive/folders/1aJ7_wBZ2X29-RvQnRtNigXkWXTvwgPan?usp=drive_link",
                9: "https://drive.google.com/drive/folders/1n9VVwKvp0Vx4vF4jpliuAaD2_XMirFoU?usp=drive_link",
                10: "https://drive.google.com/drive/folders/1Eks6vnlvZKaavetx3Hvkwtdg09ZyHutM?usp=drive_link",
                11: "https://drive.google.com/drive/folders/1aG3ExTbkypR5ZIamZWozrB8BHaez8rlm?usp=drive_link",
                12: "https://drive.google.com/drive/folders/1jqTDpRXXAXFu0NYJaSHb1wn7ahjZrgae?usp=drive_link",
                13: "https://drive.google.com/drive/folders/1moDyF8a0aYvE1Y3LvG-PGCehiaAZ_B82?usp=drive_link",
                14: "https://drive.google.com/drive/folders/1-PBico_QNxiZO7UmE9cA3psew6Q3iCl2?usp=drive_link",
                15: "https://drive.google.com/drive/folders/1qB3vmUR8Z3tKi8d_XM1XbMLSsS5Z_QEh?usp=drive_link",
                16: "https://drive.google.com/drive/folders/1LvrTiPsHDDOA_Y_I9ebZmKHhjlqY8VH4?usp=drive_link",
                17: "https://drive.google.com/drive/folders/1H5KrMqtvRWxCwdQKSSG9X7un_pymRg3k?usp=drive_link"
            },
            2026: {
                1: "https://drive.google.com/drive/folders/1I1BjH3bmKf1kRASS4p3_zgpB55cwofXY?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1JIJt9sBxIQTaEnQJRkm5X_LQz-i5FovU?usp=drive_link",
                3: "https://drive.google.com/drive/folders/1sWzNY0acQJXsX9XarSbSQOy76DwKXYF7?usp=drive_link",
                4: "https://drive.google.com/drive/folders/1Un4ExLYrzWjC1IyXHJY_9-rDdrU5NCma?usp=drive_link",
                5: "https://drive.google.com/drive/folders/1wmdrlv0wI2dE41ZzsQPi7Z9RoXdjkk1N?usp=drive_link",
                6: "https://drive.google.com/drive/folders/1LSSmxPHnaqSwp5C57houBk9EmzSNCHMN?usp=drive_link",
                7: "https://drive.google.com/drive/folders/1MGHF3XjV1NuXkW-uSJO8IbqFI95S25Se?usp=drive_link",
                8: "https://drive.google.com/drive/folders/1NQ_X-L8gOJ34j2XACKzkwpOWyyNFoxDF?usp=drive_link",
                9: "https://drive.google.com/drive/folders/1Gog0gww6342zvDVTb_qYR-CO58Zga7MU?usp=drive_link",
                10: "https://drive.google.com/drive/folders/1DJYcbc73nhiVb0r8bizU_Zzz9K4d0Byu?usp=drive_link",
                11: "https://drive.google.com/drive/folders/1mj1gHP9jkaAmTYrq5l_QzoUua3CY5obv?usp=drive_link",
                12: "https://drive.google.com/drive/folders/1wI-TWRRdagKpoTE8sTEkQL0D9IkhVt7K?usp=drive_link",
                13: "hhttps://drive.google.com/drive/folders/11bV96Crfo830F1z2X6rdGHnBDfEO7pXY?usp=drive_link",
                14: "https://drive.google.com/drive/folders/1B4WKJS2CtlsGzeVJT8C2nDW3qSa4EFMY?usp=drive_link",
                15: "https://drive.google.com/drive/folders/1FDaXMbEUkhcTiNxBqoh3ls_TJpfYKpyQ?usp=drive_link",
                16: "https://drive.google.com/drive/folders/1x1nnA4FANAkEgAljc_89rtVoWd8Fu6xI?usp=drive_link",
                17: "https://drive.google.com/drive/folders/1Uyxd1W-rjjy3dmgEGujypD5RvmzeYz9c?usp=drive_link"
            }
        }
    }
};

// Variables globales
let currentYear = 2025;
let currentSelector = "tomo-i";
let currentSelectorType = "tomo";

// Función para generar los botones de selectores (solo Tomos)
function generateSelectorButtons() {
    const tomoContainer = document.getElementById('tomo-buttons');
    
    // Limpiar contenedor
    tomoContainer.innerHTML = '';
    
    // Generar botones de Tomos I al VIII
    coursesData.selectors.tomos.forEach(tomo => {
        const button = document.createElement('button');
        button.className = `selector-btn tomo-btn ${tomo.id === currentSelector ? 'active' : ''}`;
        button.dataset.id = tomo.id;
        button.dataset.type = "tomo";
        button.innerHTML = `
            <i class="${tomo.icon}"></i>
            <span>${tomo.name}</span>
        `;
        tomoContainer.appendChild(button);
    });
}

// Función para actualizar el selector actual
function updateCurrentSelector() {
    const selectorElement = document.getElementById('current-selector');
    const tomo = coursesData.selectors.tomos.find(t => t.id === currentSelector);
    const selectorName = tomo ? tomo.name : "Tomo I";
    
    selectorElement.innerHTML = `
        <i class="fas fa-book"></i>
        <span>${selectorName} - Año ${currentYear}</span>
    `;
}

// Función para generar las tarjetas de cursos
function generateCourseCards() {
    const container = document.getElementById('courses-container');
    container.innerHTML = '';
    
    // Actualizar contador de cursos
    document.getElementById('courses-count').textContent = coursesData.courses.length;
    
    // Obtener los enlaces para el selector y año actual
    const driveLinksForSelector = coursesData.driveLinks[currentSelector];
    const driveLinksForYear = driveLinksForSelector ? driveLinksForSelector[currentYear] : null;
    
    coursesData.courses.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card';
        
        // Obtener el enlace para el curso actual
        const driveLink = driveLinksForYear ? driveLinksForYear[course.id] : "#";
        
        // Asignar un color único al icono de cada curso
        const iconStyle = `color: ${course.color}`;
        
        card.innerHTML = `
            <div class="selector-tag">${currentSelector}</div>
            <div class="year-tag">${currentYear}</div>
            <div class="course-logo">
                <i class="${course.icon}" style="${iconStyle}"></i>
            </div>
            <div class="course-content">
                <h3>${course.name}</h3>
                <p>${course.description}</p>
                <a href="${driveLink}" target="_blank" class="drive-link" data-course-id="${course.id}">
                    <i class="fab fa-google-drive"></i> Acceder al Material
                </a>
            </div>
        `;
        
        container.appendChild(card);
    });
    
    // Actualizar el indicador de año
    document.getElementById('current-year').textContent = currentYear;
    
    // Actualizar el selector actual
    updateCurrentSelector();
}

// Función para cambiar de año
function changeYear(year) {
    // Actualizar año actual
    currentYear = year;
    
    // Actualizar pestañas activas
    document.querySelectorAll('.tab').forEach(tab => {
        if (parseInt(tab.dataset.year) === year) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
    
    // Regenerar las tarjetas
    generateCourseCards();
}

// Función para cambiar de selector
function changeSelector(selectorId, selectorType) {
    // Actualizar selector actual
    currentSelector = selectorId;
    currentSelectorType = selectorType;
    
    // Actualizar botones activos
    document.querySelectorAll('.selector-btn').forEach(btn => {
        if (btn.dataset.id === selectorId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Regenerar las tarjetas
    generateCourseCards();
}

// Inicializar la página
document.addEventListener('DOMContentLoaded', function() {
    // Generar los botones de selectores
    generateSelectorButtons();
    
    // Generar las tarjetas iniciales
    generateCourseCards();
    
    // Configurar eventos para los botones de selectores
    document.querySelectorAll('.selector-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const selectorId = this.dataset.id;
            const selectorType = this.dataset.type;
            changeSelector(selectorId, selectorType);
        });
    });
    
    // Configurar eventos para las pestañas de año
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const year = parseInt(this.dataset.year);
            changeYear(year);
        });
    });
    
    // Efecto de carga inicial
    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 100);
});