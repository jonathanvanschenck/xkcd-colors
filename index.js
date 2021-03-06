/**
 * This library implements the xkcd colors in an easily usable format for node
 *
 * Creator: Jonathan D. B. Van Schenck
 * With Thanks To: Randell Monroe
 */

const colors = [
    {
        "name": "cloudy blue",
        "clean_name": "cloudyblue",
        "hex": "#acc2d9",
        "rgb": [
            172,
            194,
            217
        ],
        "rgbf": [
            0.6745,
            0.7608,
            0.851
        ]
    },
    {
        "name": "dark pastel green",
        "clean_name": "darkpastelgreen",
        "hex": "#56ae57",
        "rgb": [
            86,
            174,
            87
        ],
        "rgbf": [
            0.3373,
            0.6824,
            0.3412
        ]
    },
    {
        "name": "dust",
        "clean_name": "dust",
        "hex": "#b2996e",
        "rgb": [
            178,
            153,
            110
        ],
        "rgbf": [
            0.698,
            0.6,
            0.4314
        ]
    },
    {
        "name": "electric lime",
        "clean_name": "electriclime",
        "hex": "#a8ff04",
        "rgb": [
            168,
            255,
            4
        ],
        "rgbf": [
            0.6588,
            1.0,
            0.0157
        ]
    },
    {
        "name": "fresh green",
        "clean_name": "freshgreen",
        "hex": "#69d84f",
        "rgb": [
            105,
            216,
            79
        ],
        "rgbf": [
            0.4118,
            0.8471,
            0.3098
        ]
    },
    {
        "name": "light eggplant",
        "clean_name": "lighteggplant",
        "hex": "#894585",
        "rgb": [
            137,
            69,
            133
        ],
        "rgbf": [
            0.5373,
            0.2706,
            0.5216
        ]
    },
    {
        "name": "nasty green",
        "clean_name": "nastygreen",
        "hex": "#70b23f",
        "rgb": [
            112,
            178,
            63
        ],
        "rgbf": [
            0.4392,
            0.698,
            0.2471
        ]
    },
    {
        "name": "really light blue",
        "clean_name": "reallylightblue",
        "hex": "#d4ffff",
        "rgb": [
            212,
            255,
            255
        ],
        "rgbf": [
            0.8314,
            1.0,
            1.0
        ]
    },
    {
        "name": "tea",
        "clean_name": "tea",
        "hex": "#65ab7c",
        "rgb": [
            101,
            171,
            124
        ],
        "rgbf": [
            0.3961,
            0.6706,
            0.4863
        ]
    },
    {
        "name": "warm purple",
        "clean_name": "warmpurple",
        "hex": "#952e8f",
        "rgb": [
            149,
            46,
            143
        ],
        "rgbf": [
            0.5843,
            0.1804,
            0.5608
        ]
    },
    {
        "name": "yellowish tan",
        "clean_name": "yellowishtan",
        "hex": "#fcfc81",
        "rgb": [
            252,
            252,
            129
        ],
        "rgbf": [
            0.9882,
            0.9882,
            0.5059
        ]
    },
    {
        "name": "cement",
        "clean_name": "cement",
        "hex": "#a5a391",
        "rgb": [
            165,
            163,
            145
        ],
        "rgbf": [
            0.6471,
            0.6392,
            0.5686
        ]
    },
    {
        "name": "dark grass green",
        "clean_name": "darkgrassgreen",
        "hex": "#388004",
        "rgb": [
            56,
            128,
            4
        ],
        "rgbf": [
            0.2196,
            0.502,
            0.0157
        ]
    },
    {
        "name": "dusty teal",
        "clean_name": "dustyteal",
        "hex": "#4c9085",
        "rgb": [
            76,
            144,
            133
        ],
        "rgbf": [
            0.298,
            0.5647,
            0.5216
        ]
    },
    {
        "name": "grey teal",
        "clean_name": "greyteal",
        "hex": "#5e9b8a",
        "rgb": [
            94,
            155,
            138
        ],
        "rgbf": [
            0.3686,
            0.6078,
            0.5412
        ]
    },
    {
        "name": "macaroni and cheese",
        "clean_name": "macaroniandcheese",
        "hex": "#efb435",
        "rgb": [
            239,
            180,
            53
        ],
        "rgbf": [
            0.9373,
            0.7059,
            0.2078
        ]
    },
    {
        "name": "pinkish tan",
        "clean_name": "pinkishtan",
        "hex": "#d99b82",
        "rgb": [
            217,
            155,
            130
        ],
        "rgbf": [
            0.851,
            0.6078,
            0.5098
        ]
    },
    {
        "name": "spruce",
        "clean_name": "spruce",
        "hex": "#0a5f38",
        "rgb": [
            10,
            95,
            56
        ],
        "rgbf": [
            0.0392,
            0.3725,
            0.2196
        ]
    },
    {
        "name": "strong blue",
        "clean_name": "strongblue",
        "hex": "#0c06f7",
        "rgb": [
            12,
            6,
            247
        ],
        "rgbf": [
            0.0471,
            0.0235,
            0.9686
        ]
    },
    {
        "name": "toxic green",
        "clean_name": "toxicgreen",
        "hex": "#61de2a",
        "rgb": [
            97,
            222,
            42
        ],
        "rgbf": [
            0.3804,
            0.8706,
            0.1647
        ]
    },
    {
        "name": "windows blue",
        "clean_name": "windowsblue",
        "hex": "#3778bf",
        "rgb": [
            55,
            120,
            191
        ],
        "rgbf": [
            0.2157,
            0.4706,
            0.749
        ]
    },
    {
        "name": "blue blue",
        "clean_name": "blueblue",
        "hex": "#2242c7",
        "rgb": [
            34,
            66,
            199
        ],
        "rgbf": [
            0.1333,
            0.2588,
            0.7804
        ]
    },
    {
        "name": "blue with a hint of purple",
        "clean_name": "bluewithahintofpurple",
        "hex": "#533cc6",
        "rgb": [
            83,
            60,
            198
        ],
        "rgbf": [
            0.3255,
            0.2353,
            0.7765
        ]
    },
    {
        "name": "booger",
        "clean_name": "booger",
        "hex": "#9bb53c",
        "rgb": [
            155,
            181,
            60
        ],
        "rgbf": [
            0.6078,
            0.7098,
            0.2353
        ]
    },
    {
        "name": "bright sea green",
        "clean_name": "brightseagreen",
        "hex": "#05ffa6",
        "rgb": [
            5,
            255,
            166
        ],
        "rgbf": [
            0.0196,
            1.0,
            0.651
        ]
    },
    {
        "name": "dark green blue",
        "clean_name": "darkgreenblue",
        "hex": "#1f6357",
        "rgb": [
            31,
            99,
            87
        ],
        "rgbf": [
            0.1216,
            0.3882,
            0.3412
        ]
    },
    {
        "name": "deep turquoise",
        "clean_name": "deepturquoise",
        "hex": "#017374",
        "rgb": [
            1,
            115,
            116
        ],
        "rgbf": [
            0.0039,
            0.451,
            0.4549
        ]
    },
    {
        "name": "green teal",
        "clean_name": "greenteal",
        "hex": "#0cb577",
        "rgb": [
            12,
            181,
            119
        ],
        "rgbf": [
            0.0471,
            0.7098,
            0.4667
        ]
    },
    {
        "name": "strong pink",
        "clean_name": "strongpink",
        "hex": "#ff0789",
        "rgb": [
            255,
            7,
            137
        ],
        "rgbf": [
            1.0,
            0.0275,
            0.5373
        ]
    },
    {
        "name": "bland",
        "clean_name": "bland",
        "hex": "#afa88b",
        "rgb": [
            175,
            168,
            139
        ],
        "rgbf": [
            0.6863,
            0.6588,
            0.5451
        ]
    },
    {
        "name": "deep aqua",
        "clean_name": "deepaqua",
        "hex": "#08787f",
        "rgb": [
            8,
            120,
            127
        ],
        "rgbf": [
            0.0314,
            0.4706,
            0.498
        ]
    },
    {
        "name": "lavender pink",
        "clean_name": "lavenderpink",
        "hex": "#dd85d7",
        "rgb": [
            221,
            133,
            215
        ],
        "rgbf": [
            0.8667,
            0.5216,
            0.8431
        ]
    },
    {
        "name": "light moss green",
        "clean_name": "lightmossgreen",
        "hex": "#a6c875",
        "rgb": [
            166,
            200,
            117
        ],
        "rgbf": [
            0.651,
            0.7843,
            0.4588
        ]
    },
    {
        "name": "light seafoam green",
        "clean_name": "lightseafoamgreen",
        "hex": "#a7ffb5",
        "rgb": [
            167,
            255,
            181
        ],
        "rgbf": [
            0.6549,
            1.0,
            0.7098
        ]
    },
    {
        "name": "olive yellow",
        "clean_name": "oliveyellow",
        "hex": "#c2b709",
        "rgb": [
            194,
            183,
            9
        ],
        "rgbf": [
            0.7608,
            0.7176,
            0.0353
        ]
    },
    {
        "name": "pig pink",
        "clean_name": "pigpink",
        "hex": "#e78ea5",
        "rgb": [
            231,
            142,
            165
        ],
        "rgbf": [
            0.9059,
            0.5569,
            0.6471
        ]
    },
    {
        "name": "deep lilac",
        "clean_name": "deeplilac",
        "hex": "#966ebd",
        "rgb": [
            150,
            110,
            189
        ],
        "rgbf": [
            0.5882,
            0.4314,
            0.7412
        ]
    },
    {
        "name": "desert",
        "clean_name": "desert",
        "hex": "#ccad60",
        "rgb": [
            204,
            173,
            96
        ],
        "rgbf": [
            0.8,
            0.6784,
            0.3765
        ]
    },
    {
        "name": "dusty lavender",
        "clean_name": "dustylavender",
        "hex": "#ac86a8",
        "rgb": [
            172,
            134,
            168
        ],
        "rgbf": [
            0.6745,
            0.5255,
            0.6588
        ]
    },
    {
        "name": "purpley grey",
        "clean_name": "purpleygrey",
        "hex": "#947e94",
        "rgb": [
            148,
            126,
            148
        ],
        "rgbf": [
            0.5804,
            0.4941,
            0.5804
        ]
    },
    {
        "name": "purply",
        "clean_name": "purply",
        "hex": "#983fb2",
        "rgb": [
            152,
            63,
            178
        ],
        "rgbf": [
            0.5961,
            0.2471,
            0.698
        ]
    },
    {
        "name": "candy pink",
        "clean_name": "candypink",
        "hex": "#ff63e9",
        "rgb": [
            255,
            99,
            233
        ],
        "rgbf": [
            1.0,
            0.3882,
            0.9137
        ]
    },
    {
        "name": "light pastel green",
        "clean_name": "lightpastelgreen",
        "hex": "#b2fba5",
        "rgb": [
            178,
            251,
            165
        ],
        "rgbf": [
            0.698,
            0.9843,
            0.6471
        ]
    },
    {
        "name": "boring green",
        "clean_name": "boringgreen",
        "hex": "#63b365",
        "rgb": [
            99,
            179,
            101
        ],
        "rgbf": [
            0.3882,
            0.702,
            0.3961
        ]
    },
    {
        "name": "kiwi green",
        "clean_name": "kiwigreen",
        "hex": "#8ee53f",
        "rgb": [
            142,
            229,
            63
        ],
        "rgbf": [
            0.5569,
            0.898,
            0.2471
        ]
    },
    {
        "name": "light grey green",
        "clean_name": "lightgreygreen",
        "hex": "#b7e1a1",
        "rgb": [
            183,
            225,
            161
        ],
        "rgbf": [
            0.7176,
            0.8824,
            0.6314
        ]
    },
    {
        "name": "orange pink",
        "clean_name": "orangepink",
        "hex": "#ff6f52",
        "rgb": [
            255,
            111,
            82
        ],
        "rgbf": [
            1.0,
            0.4353,
            0.3216
        ]
    },
    {
        "name": "tea green",
        "clean_name": "teagreen",
        "hex": "#bdf8a3",
        "rgb": [
            189,
            248,
            163
        ],
        "rgbf": [
            0.7412,
            0.9725,
            0.6392
        ]
    },
    {
        "name": "very light brown",
        "clean_name": "verylightbrown",
        "hex": "#d3b683",
        "rgb": [
            211,
            182,
            131
        ],
        "rgbf": [
            0.8275,
            0.7137,
            0.5137
        ]
    },
    {
        "name": "egg shell",
        "clean_name": "eggshell",
        "hex": "#fffcc4",
        "rgb": [
            255,
            252,
            196
        ],
        "rgbf": [
            1.0,
            0.9882,
            0.7686
        ]
    },
    {
        "name": "eggplant purple",
        "clean_name": "eggplantpurple",
        "hex": "#430541",
        "rgb": [
            67,
            5,
            65
        ],
        "rgbf": [
            0.2627,
            0.0196,
            0.2549
        ]
    },
    {
        "name": "powder pink",
        "clean_name": "powderpink",
        "hex": "#ffb2d0",
        "rgb": [
            255,
            178,
            208
        ],
        "rgbf": [
            1.0,
            0.698,
            0.8157
        ]
    },
    {
        "name": "reddish grey",
        "clean_name": "reddishgrey",
        "hex": "#997570",
        "rgb": [
            153,
            117,
            112
        ],
        "rgbf": [
            0.6,
            0.4588,
            0.4392
        ]
    },
    {
        "name": "baby shit brown",
        "clean_name": "babyshitbrown",
        "hex": "#ad900d",
        "rgb": [
            173,
            144,
            13
        ],
        "rgbf": [
            0.6784,
            0.5647,
            0.051
        ]
    },
    {
        "name": "liliac",
        "clean_name": "liliac",
        "hex": "#c48efd",
        "rgb": [
            196,
            142,
            253
        ],
        "rgbf": [
            0.7686,
            0.5569,
            0.9922
        ]
    },
    {
        "name": "stormy blue",
        "clean_name": "stormyblue",
        "hex": "#507b9c",
        "rgb": [
            80,
            123,
            156
        ],
        "rgbf": [
            0.3137,
            0.4824,
            0.6118
        ]
    },
    {
        "name": "ugly brown",
        "clean_name": "uglybrown",
        "hex": "#7d7103",
        "rgb": [
            125,
            113,
            3
        ],
        "rgbf": [
            0.4902,
            0.4431,
            0.0118
        ]
    },
    {
        "name": "custard",
        "clean_name": "custard",
        "hex": "#fffd78",
        "rgb": [
            255,
            253,
            120
        ],
        "rgbf": [
            1.0,
            0.9922,
            0.4706
        ]
    },
    {
        "name": "darkish pink",
        "clean_name": "darkishpink",
        "hex": "#da467d",
        "rgb": [
            218,
            70,
            125
        ],
        "rgbf": [
            0.8549,
            0.2745,
            0.4902
        ]
    },
    {
        "name": "deep brown",
        "clean_name": "deepbrown",
        "hex": "#410200",
        "rgb": [
            65,
            2,
            0
        ],
        "rgbf": [
            0.2549,
            0.0078,
            0.0
        ]
    },
    {
        "name": "greenish beige",
        "clean_name": "greenishbeige",
        "hex": "#c9d179",
        "rgb": [
            201,
            209,
            121
        ],
        "rgbf": [
            0.7882,
            0.8196,
            0.4745
        ]
    },
    {
        "name": "manilla",
        "clean_name": "manilla",
        "hex": "#fffa86",
        "rgb": [
            255,
            250,
            134
        ],
        "rgbf": [
            1.0,
            0.9804,
            0.5255
        ]
    },
    {
        "name": "off blue",
        "clean_name": "offblue",
        "hex": "#5684ae",
        "rgb": [
            86,
            132,
            174
        ],
        "rgbf": [
            0.3373,
            0.5176,
            0.6824
        ]
    },
    {
        "name": "battleship grey",
        "clean_name": "battleshipgrey",
        "hex": "#6b7c85",
        "rgb": [
            107,
            124,
            133
        ],
        "rgbf": [
            0.4196,
            0.4863,
            0.5216
        ]
    },
    {
        "name": "browny green",
        "clean_name": "brownygreen",
        "hex": "#6f6c0a",
        "rgb": [
            111,
            108,
            10
        ],
        "rgbf": [
            0.4353,
            0.4235,
            0.0392
        ]
    },
    {
        "name": "bruise",
        "clean_name": "bruise",
        "hex": "#7e4071",
        "rgb": [
            126,
            64,
            113
        ],
        "rgbf": [
            0.4941,
            0.251,
            0.4431
        ]
    },
    {
        "name": "kelley green",
        "clean_name": "kelleygreen",
        "hex": "#009337",
        "rgb": [
            0,
            147,
            55
        ],
        "rgbf": [
            0.0,
            0.5765,
            0.2157
        ]
    },
    {
        "name": "sickly yellow",
        "clean_name": "sicklyyellow",
        "hex": "#d0e429",
        "rgb": [
            208,
            228,
            41
        ],
        "rgbf": [
            0.8157,
            0.8941,
            0.1608
        ]
    },
    {
        "name": "sunny yellow",
        "clean_name": "sunnyyellow",
        "hex": "#fff917",
        "rgb": [
            255,
            249,
            23
        ],
        "rgbf": [
            1.0,
            0.9765,
            0.0902
        ]
    },
    {
        "name": "azul",
        "clean_name": "azul",
        "hex": "#1d5dec",
        "rgb": [
            29,
            93,
            236
        ],
        "rgbf": [
            0.1137,
            0.3647,
            0.9255
        ]
    },
    {
        "name": "darkgreen",
        "clean_name": "darkgreen",
        "hex": "#054907",
        "rgb": [
            5,
            73,
            7
        ],
        "rgbf": [
            0.0196,
            0.2863,
            0.0275
        ]
    },
    {
        "name": "green/yellow",
        "clean_name": "greenyellow",
        "hex": "#b5ce08",
        "rgb": [
            181,
            206,
            8
        ],
        "rgbf": [
            0.7098,
            0.8078,
            0.0314
        ]
    },
    {
        "name": "lichen",
        "clean_name": "lichen",
        "hex": "#8fb67b",
        "rgb": [
            143,
            182,
            123
        ],
        "rgbf": [
            0.5608,
            0.7137,
            0.4824
        ]
    },
    {
        "name": "light light green",
        "clean_name": "lightlightgreen",
        "hex": "#c8ffb0",
        "rgb": [
            200,
            255,
            176
        ],
        "rgbf": [
            0.7843,
            1.0,
            0.6902
        ]
    },
    {
        "name": "pale gold",
        "clean_name": "palegold",
        "hex": "#fdde6c",
        "rgb": [
            253,
            222,
            108
        ],
        "rgbf": [
            0.9922,
            0.8706,
            0.4235
        ]
    },
    {
        "name": "sun yellow",
        "clean_name": "sunyellow",
        "hex": "#ffdf22",
        "rgb": [
            255,
            223,
            34
        ],
        "rgbf": [
            1.0,
            0.8745,
            0.1333
        ]
    },
    {
        "name": "tan green",
        "clean_name": "tangreen",
        "hex": "#a9be70",
        "rgb": [
            169,
            190,
            112
        ],
        "rgbf": [
            0.6627,
            0.7451,
            0.4392
        ]
    },
    {
        "name": "burple",
        "clean_name": "burple",
        "hex": "#6832e3",
        "rgb": [
            104,
            50,
            227
        ],
        "rgbf": [
            0.4078,
            0.1961,
            0.8902
        ]
    },
    {
        "name": "butterscotch",
        "clean_name": "butterscotch",
        "hex": "#fdb147",
        "rgb": [
            253,
            177,
            71
        ],
        "rgbf": [
            0.9922,
            0.6941,
            0.2784
        ]
    },
    {
        "name": "toupe",
        "clean_name": "toupe",
        "hex": "#c7ac7d",
        "rgb": [
            199,
            172,
            125
        ],
        "rgbf": [
            0.7804,
            0.6745,
            0.4902
        ]
    },
    {
        "name": "dark cream",
        "clean_name": "darkcream",
        "hex": "#fff39a",
        "rgb": [
            255,
            243,
            154
        ],
        "rgbf": [
            1.0,
            0.9529,
            0.6039
        ]
    },
    {
        "name": "indian red",
        "clean_name": "indianred",
        "hex": "#850e04",
        "rgb": [
            133,
            14,
            4
        ],
        "rgbf": [
            0.5216,
            0.0549,
            0.0157
        ]
    },
    {
        "name": "light lavendar",
        "clean_name": "lightlavendar",
        "hex": "#efc0fe",
        "rgb": [
            239,
            192,
            254
        ],
        "rgbf": [
            0.9373,
            0.7529,
            0.9961
        ]
    },
    {
        "name": "poison green",
        "clean_name": "poisongreen",
        "hex": "#40fd14",
        "rgb": [
            64,
            253,
            20
        ],
        "rgbf": [
            0.251,
            0.9922,
            0.0784
        ]
    },
    {
        "name": "baby puke green",
        "clean_name": "babypukegreen",
        "hex": "#b6c406",
        "rgb": [
            182,
            196,
            6
        ],
        "rgbf": [
            0.7137,
            0.7686,
            0.0235
        ]
    },
    {
        "name": "bright yellow green",
        "clean_name": "brightyellowgreen",
        "hex": "#9dff00",
        "rgb": [
            157,
            255,
            0
        ],
        "rgbf": [
            0.6157,
            1.0,
            0.0
        ]
    },
    {
        "name": "charcoal grey",
        "clean_name": "charcoalgrey",
        "hex": "#3c4142",
        "rgb": [
            60,
            65,
            66
        ],
        "rgbf": [
            0.2353,
            0.2549,
            0.2588
        ]
    },
    {
        "name": "squash",
        "clean_name": "squash",
        "hex": "#f2ab15",
        "rgb": [
            242,
            171,
            21
        ],
        "rgbf": [
            0.949,
            0.6706,
            0.0824
        ]
    },
    {
        "name": "cinnamon",
        "clean_name": "cinnamon",
        "hex": "#ac4f06",
        "rgb": [
            172,
            79,
            6
        ],
        "rgbf": [
            0.6745,
            0.3098,
            0.0235
        ]
    },
    {
        "name": "light pea green",
        "clean_name": "lightpeagreen",
        "hex": "#c4fe82",
        "rgb": [
            196,
            254,
            130
        ],
        "rgbf": [
            0.7686,
            0.9961,
            0.5098
        ]
    },
    {
        "name": "radioactive green",
        "clean_name": "radioactivegreen",
        "hex": "#2cfa1f",
        "rgb": [
            44,
            250,
            31
        ],
        "rgbf": [
            0.1725,
            0.9804,
            0.1216
        ]
    },
    {
        "name": "raw sienna",
        "clean_name": "rawsienna",
        "hex": "#9a6200",
        "rgb": [
            154,
            98,
            0
        ],
        "rgbf": [
            0.6039,
            0.3843,
            0.0
        ]
    },
    {
        "name": "baby purple",
        "clean_name": "babypurple",
        "hex": "#ca9bf7",
        "rgb": [
            202,
            155,
            247
        ],
        "rgbf": [
            0.7922,
            0.6078,
            0.9686
        ]
    },
    {
        "name": "cocoa",
        "clean_name": "cocoa",
        "hex": "#875f42",
        "rgb": [
            135,
            95,
            66
        ],
        "rgbf": [
            0.5294,
            0.3725,
            0.2588
        ]
    },
    {
        "name": "light royal blue",
        "clean_name": "lightroyalblue",
        "hex": "#3a2efe",
        "rgb": [
            58,
            46,
            254
        ],
        "rgbf": [
            0.2275,
            0.1804,
            0.9961
        ]
    },
    {
        "name": "orangeish",
        "clean_name": "orangeish",
        "hex": "#fd8d49",
        "rgb": [
            253,
            141,
            73
        ],
        "rgbf": [
            0.9922,
            0.5529,
            0.2863
        ]
    },
    {
        "name": "rust brown",
        "clean_name": "rustbrown",
        "hex": "#8b3103",
        "rgb": [
            139,
            49,
            3
        ],
        "rgbf": [
            0.5451,
            0.1922,
            0.0118
        ]
    },
    {
        "name": "sand brown",
        "clean_name": "sandbrown",
        "hex": "#cba560",
        "rgb": [
            203,
            165,
            96
        ],
        "rgbf": [
            0.7961,
            0.6471,
            0.3765
        ]
    },
    {
        "name": "swamp",
        "clean_name": "swamp",
        "hex": "#698339",
        "rgb": [
            105,
            131,
            57
        ],
        "rgbf": [
            0.4118,
            0.5137,
            0.2235
        ]
    },
    {
        "name": "tealish green",
        "clean_name": "tealishgreen",
        "hex": "#0cdc73",
        "rgb": [
            12,
            220,
            115
        ],
        "rgbf": [
            0.0471,
            0.8627,
            0.451
        ]
    },
    {
        "name": "burnt siena",
        "clean_name": "burntsiena",
        "hex": "#b75203",
        "rgb": [
            183,
            82,
            3
        ],
        "rgbf": [
            0.7176,
            0.3216,
            0.0118
        ]
    },
    {
        "name": "camo",
        "clean_name": "camo",
        "hex": "#7f8f4e",
        "rgb": [
            127,
            143,
            78
        ],
        "rgbf": [
            0.498,
            0.5608,
            0.3059
        ]
    },
    {
        "name": "dusk blue",
        "clean_name": "duskblue",
        "hex": "#26538d",
        "rgb": [
            38,
            83,
            141
        ],
        "rgbf": [
            0.149,
            0.3255,
            0.5529
        ]
    },
    {
        "name": "fern",
        "clean_name": "fern",
        "hex": "#63a950",
        "rgb": [
            99,
            169,
            80
        ],
        "rgbf": [
            0.3882,
            0.6627,
            0.3137
        ]
    },
    {
        "name": "old rose",
        "clean_name": "oldrose",
        "hex": "#c87f89",
        "rgb": [
            200,
            127,
            137
        ],
        "rgbf": [
            0.7843,
            0.498,
            0.5373
        ]
    },
    {
        "name": "pale light green",
        "clean_name": "palelightgreen",
        "hex": "#b1fc99",
        "rgb": [
            177,
            252,
            153
        ],
        "rgbf": [
            0.6941,
            0.9882,
            0.6
        ]
    },
    {
        "name": "peachy pink",
        "clean_name": "peachypink",
        "hex": "#ff9a8a",
        "rgb": [
            255,
            154,
            138
        ],
        "rgbf": [
            1.0,
            0.6039,
            0.5412
        ]
    },
    {
        "name": "rosy pink",
        "clean_name": "rosypink",
        "hex": "#f6688e",
        "rgb": [
            246,
            104,
            142
        ],
        "rgbf": [
            0.9647,
            0.4078,
            0.5569
        ]
    },
    {
        "name": "light bluish green",
        "clean_name": "lightbluishgreen",
        "hex": "#76fda8",
        "rgb": [
            118,
            253,
            168
        ],
        "rgbf": [
            0.4627,
            0.9922,
            0.6588
        ]
    },
    {
        "name": "light bright green",
        "clean_name": "lightbrightgreen",
        "hex": "#53fe5c",
        "rgb": [
            83,
            254,
            92
        ],
        "rgbf": [
            0.3255,
            0.9961,
            0.3608
        ]
    },
    {
        "name": "light neon green",
        "clean_name": "lightneongreen",
        "hex": "#4efd54",
        "rgb": [
            78,
            253,
            84
        ],
        "rgbf": [
            0.3059,
            0.9922,
            0.3294
        ]
    },
    {
        "name": "light seafoam",
        "clean_name": "lightseafoam",
        "hex": "#a0febf",
        "rgb": [
            160,
            254,
            191
        ],
        "rgbf": [
            0.6275,
            0.9961,
            0.749
        ]
    },
    {
        "name": "tiffany blue",
        "clean_name": "tiffanyblue",
        "hex": "#7bf2da",
        "rgb": [
            123,
            242,
            218
        ],
        "rgbf": [
            0.4824,
            0.949,
            0.8549
        ]
    },
    {
        "name": "washed out green",
        "clean_name": "washedoutgreen",
        "hex": "#bcf5a6",
        "rgb": [
            188,
            245,
            166
        ],
        "rgbf": [
            0.7373,
            0.9608,
            0.651
        ]
    },
    {
        "name": "browny orange",
        "clean_name": "brownyorange",
        "hex": "#ca6b02",
        "rgb": [
            202,
            107,
            2
        ],
        "rgbf": [
            0.7922,
            0.4196,
            0.0078
        ]
    },
    {
        "name": "nice blue",
        "clean_name": "niceblue",
        "hex": "#107ab0",
        "rgb": [
            16,
            122,
            176
        ],
        "rgbf": [
            0.0627,
            0.4784,
            0.6902
        ]
    },
    {
        "name": "sapphire",
        "clean_name": "sapphire",
        "hex": "#2138ab",
        "rgb": [
            33,
            56,
            171
        ],
        "rgbf": [
            0.1294,
            0.2196,
            0.6706
        ]
    },
    {
        "name": "greyish teal",
        "clean_name": "greyishteal",
        "hex": "#719f91",
        "rgb": [
            113,
            159,
            145
        ],
        "rgbf": [
            0.4431,
            0.6235,
            0.5686
        ]
    },
    {
        "name": "orangey yellow",
        "clean_name": "orangeyyellow",
        "hex": "#fdb915",
        "rgb": [
            253,
            185,
            21
        ],
        "rgbf": [
            0.9922,
            0.7255,
            0.0824
        ]
    },
    {
        "name": "parchment",
        "clean_name": "parchment",
        "hex": "#fefcaf",
        "rgb": [
            254,
            252,
            175
        ],
        "rgbf": [
            0.9961,
            0.9882,
            0.6863
        ]
    },
    {
        "name": "straw",
        "clean_name": "straw",
        "hex": "#fcf679",
        "rgb": [
            252,
            246,
            121
        ],
        "rgbf": [
            0.9882,
            0.9647,
            0.4745
        ]
    },
    {
        "name": "very dark brown",
        "clean_name": "verydarkbrown",
        "hex": "#1d0200",
        "rgb": [
            29,
            2,
            0
        ],
        "rgbf": [
            0.1137,
            0.0078,
            0.0
        ]
    },
    {
        "name": "terracota",
        "clean_name": "terracota",
        "hex": "#cb6843",
        "rgb": [
            203,
            104,
            67
        ],
        "rgbf": [
            0.7961,
            0.4078,
            0.2627
        ]
    },
    {
        "name": "ugly blue",
        "clean_name": "uglyblue",
        "hex": "#31668a",
        "rgb": [
            49,
            102,
            138
        ],
        "rgbf": [
            0.1922,
            0.4,
            0.5412
        ]
    },
    {
        "name": "clear blue",
        "clean_name": "clearblue",
        "hex": "#247afd",
        "rgb": [
            36,
            122,
            253
        ],
        "rgbf": [
            0.1412,
            0.4784,
            0.9922
        ]
    },
    {
        "name": "creme",
        "clean_name": "creme",
        "hex": "#ffffb6",
        "rgb": [
            255,
            255,
            182
        ],
        "rgbf": [
            1.0,
            1.0,
            0.7137
        ]
    },
    {
        "name": "foam green",
        "clean_name": "foamgreen",
        "hex": "#90fda9",
        "rgb": [
            144,
            253,
            169
        ],
        "rgbf": [
            0.5647,
            0.9922,
            0.6627
        ]
    },
    {
        "name": "grey/green",
        "clean_name": "greygreen",
        "hex": "#86a17d",
        "rgb": [
            134,
            161,
            125
        ],
        "rgbf": [
            0.5255,
            0.6314,
            0.4902
        ]
    },
    {
        "name": "light gold",
        "clean_name": "lightgold",
        "hex": "#fddc5c",
        "rgb": [
            253,
            220,
            92
        ],
        "rgbf": [
            0.9922,
            0.8627,
            0.3608
        ]
    },
    {
        "name": "seafoam blue",
        "clean_name": "seafoamblue",
        "hex": "#78d1b6",
        "rgb": [
            120,
            209,
            182
        ],
        "rgbf": [
            0.4706,
            0.8196,
            0.7137
        ]
    },
    {
        "name": "topaz",
        "clean_name": "topaz",
        "hex": "#13bbaf",
        "rgb": [
            19,
            187,
            175
        ],
        "rgbf": [
            0.0745,
            0.7333,
            0.6863
        ]
    },
    {
        "name": "violet pink",
        "clean_name": "violetpink",
        "hex": "#fb5ffc",
        "rgb": [
            251,
            95,
            252
        ],
        "rgbf": [
            0.9843,
            0.3725,
            0.9882
        ]
    },
    {
        "name": "wintergreen",
        "clean_name": "wintergreen",
        "hex": "#20f986",
        "rgb": [
            32,
            249,
            134
        ],
        "rgbf": [
            0.1255,
            0.9765,
            0.5255
        ]
    },
    {
        "name": "yellow tan",
        "clean_name": "yellowtan",
        "hex": "#ffe36e",
        "rgb": [
            255,
            227,
            110
        ],
        "rgbf": [
            1.0,
            0.8902,
            0.4314
        ]
    },
    {
        "name": "dark fuchsia",
        "clean_name": "darkfuchsia",
        "hex": "#9d0759",
        "rgb": [
            157,
            7,
            89
        ],
        "rgbf": [
            0.6157,
            0.0275,
            0.349
        ]
    },
    {
        "name": "indigo blue",
        "clean_name": "indigoblue",
        "hex": "#3a18b1",
        "rgb": [
            58,
            24,
            177
        ],
        "rgbf": [
            0.2275,
            0.0941,
            0.6941
        ]
    },
    {
        "name": "light yellowish green",
        "clean_name": "lightyellowishgreen",
        "hex": "#c2ff89",
        "rgb": [
            194,
            255,
            137
        ],
        "rgbf": [
            0.7608,
            1.0,
            0.5373
        ]
    },
    {
        "name": "pale magenta",
        "clean_name": "palemagenta",
        "hex": "#d767ad",
        "rgb": [
            215,
            103,
            173
        ],
        "rgbf": [
            0.8431,
            0.4039,
            0.6784
        ]
    },
    {
        "name": "rich purple",
        "clean_name": "richpurple",
        "hex": "#720058",
        "rgb": [
            114,
            0,
            88
        ],
        "rgbf": [
            0.4471,
            0.0,
            0.3451
        ]
    },
    {
        "name": "sunflower yellow",
        "clean_name": "sunfloweryellow",
        "hex": "#ffda03",
        "rgb": [
            255,
            218,
            3
        ],
        "rgbf": [
            1.0,
            0.8549,
            0.0118
        ]
    },
    {
        "name": "green/blue",
        "clean_name": "greenblue",
        "hex": "#01c08d",
        "rgb": [
            1,
            192,
            141
        ],
        "rgbf": [
            0.0039,
            0.7529,
            0.5529
        ]
    },
    {
        "name": "leather",
        "clean_name": "leather",
        "hex": "#ac7434",
        "rgb": [
            172,
            116,
            52
        ],
        "rgbf": [
            0.6745,
            0.4549,
            0.2039
        ]
    },
    {
        "name": "racing green",
        "clean_name": "racinggreen",
        "hex": "#014600",
        "rgb": [
            1,
            70,
            0
        ],
        "rgbf": [
            0.0039,
            0.2745,
            0.0
        ]
    },
    {
        "name": "vivid purple",
        "clean_name": "vividpurple",
        "hex": "#9900fa",
        "rgb": [
            153,
            0,
            250
        ],
        "rgbf": [
            0.6,
            0.0,
            0.9804
        ]
    },
    {
        "name": "dark royal blue",
        "clean_name": "darkroyalblue",
        "hex": "#02066f",
        "rgb": [
            2,
            6,
            111
        ],
        "rgbf": [
            0.0078,
            0.0235,
            0.4353
        ]
    },
    {
        "name": "hazel",
        "clean_name": "hazel",
        "hex": "#8e7618",
        "rgb": [
            142,
            118,
            24
        ],
        "rgbf": [
            0.5569,
            0.4627,
            0.0941
        ]
    },
    {
        "name": "muted pink",
        "clean_name": "mutedpink",
        "hex": "#d1768f",
        "rgb": [
            209,
            118,
            143
        ],
        "rgbf": [
            0.8196,
            0.4627,
            0.5608
        ]
    },
    {
        "name": "booger green",
        "clean_name": "boogergreen",
        "hex": "#96b403",
        "rgb": [
            150,
            180,
            3
        ],
        "rgbf": [
            0.5882,
            0.7059,
            0.0118
        ]
    },
    {
        "name": "canary",
        "clean_name": "canary",
        "hex": "#fdff63",
        "rgb": [
            253,
            255,
            99
        ],
        "rgbf": [
            0.9922,
            1.0,
            0.3882
        ]
    },
    {
        "name": "cool grey",
        "clean_name": "coolgrey",
        "hex": "#95a3a6",
        "rgb": [
            149,
            163,
            166
        ],
        "rgbf": [
            0.5843,
            0.6392,
            0.651
        ]
    },
    {
        "name": "dark taupe",
        "clean_name": "darktaupe",
        "hex": "#7f684e",
        "rgb": [
            127,
            104,
            78
        ],
        "rgbf": [
            0.498,
            0.4078,
            0.3059
        ]
    },
    {
        "name": "darkish purple",
        "clean_name": "darkishpurple",
        "hex": "#751973",
        "rgb": [
            117,
            25,
            115
        ],
        "rgbf": [
            0.4588,
            0.098,
            0.451
        ]
    },
    {
        "name": "true green",
        "clean_name": "truegreen",
        "hex": "#089404",
        "rgb": [
            8,
            148,
            4
        ],
        "rgbf": [
            0.0314,
            0.5804,
            0.0157
        ]
    },
    {
        "name": "coral pink",
        "clean_name": "coralpink",
        "hex": "#ff6163",
        "rgb": [
            255,
            97,
            99
        ],
        "rgbf": [
            1.0,
            0.3804,
            0.3882
        ]
    },
    {
        "name": "dark sage",
        "clean_name": "darksage",
        "hex": "#598556",
        "rgb": [
            89,
            133,
            86
        ],
        "rgbf": [
            0.349,
            0.5216,
            0.3373
        ]
    },
    {
        "name": "dark slate blue",
        "clean_name": "darkslateblue",
        "hex": "#214761",
        "rgb": [
            33,
            71,
            97
        ],
        "rgbf": [
            0.1294,
            0.2784,
            0.3804
        ]
    },
    {
        "name": "flat blue",
        "clean_name": "flatblue",
        "hex": "#3c73a8",
        "rgb": [
            60,
            115,
            168
        ],
        "rgbf": [
            0.2353,
            0.451,
            0.6588
        ]
    },
    {
        "name": "mushroom",
        "clean_name": "mushroom",
        "hex": "#ba9e88",
        "rgb": [
            186,
            158,
            136
        ],
        "rgbf": [
            0.7294,
            0.6196,
            0.5333
        ]
    },
    {
        "name": "rich blue",
        "clean_name": "richblue",
        "hex": "#021bf9",
        "rgb": [
            2,
            27,
            249
        ],
        "rgbf": [
            0.0078,
            0.1059,
            0.9765
        ]
    },
    {
        "name": "dirty purple",
        "clean_name": "dirtypurple",
        "hex": "#734a65",
        "rgb": [
            115,
            74,
            101
        ],
        "rgbf": [
            0.451,
            0.2902,
            0.3961
        ]
    },
    {
        "name": "greenblue",
        "clean_name": "greenblue",
        "hex": "#23c48b",
        "rgb": [
            35,
            196,
            139
        ],
        "rgbf": [
            0.1373,
            0.7686,
            0.5451
        ]
    },
    {
        "name": "icky green",
        "clean_name": "ickygreen",
        "hex": "#8fae22",
        "rgb": [
            143,
            174,
            34
        ],
        "rgbf": [
            0.5608,
            0.6824,
            0.1333
        ]
    },
    {
        "name": "light khaki",
        "clean_name": "lightkhaki",
        "hex": "#e6f2a2",
        "rgb": [
            230,
            242,
            162
        ],
        "rgbf": [
            0.902,
            0.949,
            0.6353
        ]
    },
    {
        "name": "warm blue",
        "clean_name": "warmblue",
        "hex": "#4b57db",
        "rgb": [
            75,
            87,
            219
        ],
        "rgbf": [
            0.2941,
            0.3412,
            0.8588
        ]
    },
    {
        "name": "dark hot pink",
        "clean_name": "darkhotpink",
        "hex": "#d90166",
        "rgb": [
            217,
            1,
            102
        ],
        "rgbf": [
            0.851,
            0.0039,
            0.4
        ]
    },
    {
        "name": "deep sea blue",
        "clean_name": "deepseablue",
        "hex": "#015482",
        "rgb": [
            1,
            84,
            130
        ],
        "rgbf": [
            0.0039,
            0.3294,
            0.5098
        ]
    },
    {
        "name": "carmine",
        "clean_name": "carmine",
        "hex": "#9d0216",
        "rgb": [
            157,
            2,
            22
        ],
        "rgbf": [
            0.6157,
            0.0078,
            0.0863
        ]
    },
    {
        "name": "dark yellow green",
        "clean_name": "darkyellowgreen",
        "hex": "#728f02",
        "rgb": [
            114,
            143,
            2
        ],
        "rgbf": [
            0.4471,
            0.5608,
            0.0078
        ]
    },
    {
        "name": "pale peach",
        "clean_name": "palepeach",
        "hex": "#ffe5ad",
        "rgb": [
            255,
            229,
            173
        ],
        "rgbf": [
            1.0,
            0.898,
            0.6784
        ]
    },
    {
        "name": "plum purple",
        "clean_name": "plumpurple",
        "hex": "#4e0550",
        "rgb": [
            78,
            5,
            80
        ],
        "rgbf": [
            0.3059,
            0.0196,
            0.3137
        ]
    },
    {
        "name": "golden rod",
        "clean_name": "goldenrod",
        "hex": "#f9bc08",
        "rgb": [
            249,
            188,
            8
        ],
        "rgbf": [
            0.9765,
            0.7373,
            0.0314
        ]
    },
    {
        "name": "neon red",
        "clean_name": "neonred",
        "hex": "#ff073a",
        "rgb": [
            255,
            7,
            58
        ],
        "rgbf": [
            1.0,
            0.0275,
            0.2275
        ]
    },
    {
        "name": "old pink",
        "clean_name": "oldpink",
        "hex": "#c77986",
        "rgb": [
            199,
            121,
            134
        ],
        "rgbf": [
            0.7804,
            0.4745,
            0.5255
        ]
    },
    {
        "name": "very pale blue",
        "clean_name": "verypaleblue",
        "hex": "#d6fffe",
        "rgb": [
            214,
            255,
            254
        ],
        "rgbf": [
            0.8392,
            1.0,
            0.9961
        ]
    },
    {
        "name": "blood orange",
        "clean_name": "bloodorange",
        "hex": "#fe4b03",
        "rgb": [
            254,
            75,
            3
        ],
        "rgbf": [
            0.9961,
            0.2941,
            0.0118
        ]
    },
    {
        "name": "grapefruit",
        "clean_name": "grapefruit",
        "hex": "#fd5956",
        "rgb": [
            253,
            89,
            86
        ],
        "rgbf": [
            0.9922,
            0.349,
            0.3373
        ]
    },
    {
        "name": "sand yellow",
        "clean_name": "sandyellow",
        "hex": "#fce166",
        "rgb": [
            252,
            225,
            102
        ],
        "rgbf": [
            0.9882,
            0.8824,
            0.4
        ]
    },
    {
        "name": "clay brown",
        "clean_name": "claybrown",
        "hex": "#b2713d",
        "rgb": [
            178,
            113,
            61
        ],
        "rgbf": [
            0.698,
            0.4431,
            0.2392
        ]
    },
    {
        "name": "dark blue grey",
        "clean_name": "darkbluegrey",
        "hex": "#1f3b4d",
        "rgb": [
            31,
            59,
            77
        ],
        "rgbf": [
            0.1216,
            0.2314,
            0.302
        ]
    },
    {
        "name": "flat green",
        "clean_name": "flatgreen",
        "hex": "#699d4c",
        "rgb": [
            105,
            157,
            76
        ],
        "rgbf": [
            0.4118,
            0.6157,
            0.298
        ]
    },
    {
        "name": "light green blue",
        "clean_name": "lightgreenblue",
        "hex": "#56fca2",
        "rgb": [
            86,
            252,
            162
        ],
        "rgbf": [
            0.3373,
            0.9882,
            0.6353
        ]
    },
    {
        "name": "warm pink",
        "clean_name": "warmpink",
        "hex": "#fb5581",
        "rgb": [
            251,
            85,
            129
        ],
        "rgbf": [
            0.9843,
            0.3333,
            0.5059
        ]
    },
    {
        "name": "dodger blue",
        "clean_name": "dodgerblue",
        "hex": "#3e82fc",
        "rgb": [
            62,
            130,
            252
        ],
        "rgbf": [
            0.2431,
            0.5098,
            0.9882
        ]
    },
    {
        "name": "gross green",
        "clean_name": "grossgreen",
        "hex": "#a0bf16",
        "rgb": [
            160,
            191,
            22
        ],
        "rgbf": [
            0.6275,
            0.749,
            0.0863
        ]
    },
    {
        "name": "ice",
        "clean_name": "ice",
        "hex": "#d6fffa",
        "rgb": [
            214,
            255,
            250
        ],
        "rgbf": [
            0.8392,
            1.0,
            0.9804
        ]
    },
    {
        "name": "metallic blue",
        "clean_name": "metallicblue",
        "hex": "#4f738e",
        "rgb": [
            79,
            115,
            142
        ],
        "rgbf": [
            0.3098,
            0.451,
            0.5569
        ]
    },
    {
        "name": "pale salmon",
        "clean_name": "palesalmon",
        "hex": "#ffb19a",
        "rgb": [
            255,
            177,
            154
        ],
        "rgbf": [
            1.0,
            0.6941,
            0.6039
        ]
    },
    {
        "name": "sap green",
        "clean_name": "sapgreen",
        "hex": "#5c8b15",
        "rgb": [
            92,
            139,
            21
        ],
        "rgbf": [
            0.3608,
            0.5451,
            0.0824
        ]
    },
    {
        "name": "algae",
        "clean_name": "algae",
        "hex": "#54ac68",
        "rgb": [
            84,
            172,
            104
        ],
        "rgbf": [
            0.3294,
            0.6745,
            0.4078
        ]
    },
    {
        "name": "bluey grey",
        "clean_name": "blueygrey",
        "hex": "#89a0b0",
        "rgb": [
            137,
            160,
            176
        ],
        "rgbf": [
            0.5373,
            0.6275,
            0.6902
        ]
    },
    {
        "name": "greeny grey",
        "clean_name": "greenygrey",
        "hex": "#7ea07a",
        "rgb": [
            126,
            160,
            122
        ],
        "rgbf": [
            0.4941,
            0.6275,
            0.4784
        ]
    },
    {
        "name": "highlighter green",
        "clean_name": "highlightergreen",
        "hex": "#1bfc06",
        "rgb": [
            27,
            252,
            6
        ],
        "rgbf": [
            0.1059,
            0.9882,
            0.0235
        ]
    },
    {
        "name": "light light blue",
        "clean_name": "lightlightblue",
        "hex": "#cafffb",
        "rgb": [
            202,
            255,
            251
        ],
        "rgbf": [
            0.7922,
            1.0,
            0.9843
        ]
    },
    {
        "name": "light mint",
        "clean_name": "lightmint",
        "hex": "#b6ffbb",
        "rgb": [
            182,
            255,
            187
        ],
        "rgbf": [
            0.7137,
            1.0,
            0.7333
        ]
    },
    {
        "name": "raw umber",
        "clean_name": "rawumber",
        "hex": "#a75e09",
        "rgb": [
            167,
            94,
            9
        ],
        "rgbf": [
            0.6549,
            0.3686,
            0.0353
        ]
    },
    {
        "name": "vivid blue",
        "clean_name": "vividblue",
        "hex": "#152eff",
        "rgb": [
            21,
            46,
            255
        ],
        "rgbf": [
            0.0824,
            0.1804,
            1.0
        ]
    },
    {
        "name": "deep lavender",
        "clean_name": "deeplavender",
        "hex": "#8d5eb7",
        "rgb": [
            141,
            94,
            183
        ],
        "rgbf": [
            0.5529,
            0.3686,
            0.7176
        ]
    },
    {
        "name": "dull teal",
        "clean_name": "dullteal",
        "hex": "#5f9e8f",
        "rgb": [
            95,
            158,
            143
        ],
        "rgbf": [
            0.3725,
            0.6196,
            0.5608
        ]
    },
    {
        "name": "light greenish blue",
        "clean_name": "lightgreenishblue",
        "hex": "#63f7b4",
        "rgb": [
            99,
            247,
            180
        ],
        "rgbf": [
            0.3882,
            0.9686,
            0.7059
        ]
    },
    {
        "name": "mud green",
        "clean_name": "mudgreen",
        "hex": "#606602",
        "rgb": [
            96,
            102,
            2
        ],
        "rgbf": [
            0.3765,
            0.4,
            0.0078
        ]
    },
    {
        "name": "pinky",
        "clean_name": "pinky",
        "hex": "#fc86aa",
        "rgb": [
            252,
            134,
            170
        ],
        "rgbf": [
            0.9882,
            0.5255,
            0.6667
        ]
    },
    {
        "name": "red wine",
        "clean_name": "redwine",
        "hex": "#8c0034",
        "rgb": [
            140,
            0,
            52
        ],
        "rgbf": [
            0.549,
            0.0,
            0.2039
        ]
    },
    {
        "name": "shit green",
        "clean_name": "shitgreen",
        "hex": "#758000",
        "rgb": [
            117,
            128,
            0
        ],
        "rgbf": [
            0.4588,
            0.502,
            0.0
        ]
    },
    {
        "name": "tan brown",
        "clean_name": "tanbrown",
        "hex": "#ab7e4c",
        "rgb": [
            171,
            126,
            76
        ],
        "rgbf": [
            0.6706,
            0.4941,
            0.298
        ]
    },
    {
        "name": "darkblue",
        "clean_name": "darkblue",
        "hex": "#030764",
        "rgb": [
            3,
            7,
            100
        ],
        "rgbf": [
            0.0118,
            0.0275,
            0.3922
        ]
    },
    {
        "name": "rosa",
        "clean_name": "rosa",
        "hex": "#fe86a4",
        "rgb": [
            254,
            134,
            164
        ],
        "rgbf": [
            0.9961,
            0.5255,
            0.6431
        ]
    },
    {
        "name": "lipstick",
        "clean_name": "lipstick",
        "hex": "#d5174e",
        "rgb": [
            213,
            23,
            78
        ],
        "rgbf": [
            0.8353,
            0.0902,
            0.3059
        ]
    },
    {
        "name": "pale mauve",
        "clean_name": "palemauve",
        "hex": "#fed0fc",
        "rgb": [
            254,
            208,
            252
        ],
        "rgbf": [
            0.9961,
            0.8157,
            0.9882
        ]
    },
    {
        "name": "claret",
        "clean_name": "claret",
        "hex": "#680018",
        "rgb": [
            104,
            0,
            24
        ],
        "rgbf": [
            0.4078,
            0.0,
            0.0941
        ]
    },
    {
        "name": "dandelion",
        "clean_name": "dandelion",
        "hex": "#fedf08",
        "rgb": [
            254,
            223,
            8
        ],
        "rgbf": [
            0.9961,
            0.8745,
            0.0314
        ]
    },
    {
        "name": "orangered",
        "clean_name": "orangered",
        "hex": "#fe420f",
        "rgb": [
            254,
            66,
            15
        ],
        "rgbf": [
            0.9961,
            0.2588,
            0.0588
        ]
    },
    {
        "name": "poop green",
        "clean_name": "poopgreen",
        "hex": "#6f7c00",
        "rgb": [
            111,
            124,
            0
        ],
        "rgbf": [
            0.4353,
            0.4863,
            0.0
        ]
    },
    {
        "name": "ruby",
        "clean_name": "ruby",
        "hex": "#ca0147",
        "rgb": [
            202,
            1,
            71
        ],
        "rgbf": [
            0.7922,
            0.0039,
            0.2784
        ]
    },
    {
        "name": "dark",
        "clean_name": "dark",
        "hex": "#1b2431",
        "rgb": [
            27,
            36,
            49
        ],
        "rgbf": [
            0.1059,
            0.1412,
            0.1922
        ]
    },
    {
        "name": "greenish turquoise",
        "clean_name": "greenishturquoise",
        "hex": "#00fbb0",
        "rgb": [
            0,
            251,
            176
        ],
        "rgbf": [
            0.0,
            0.9843,
            0.6902
        ]
    },
    {
        "name": "pastel red",
        "clean_name": "pastelred",
        "hex": "#db5856",
        "rgb": [
            219,
            88,
            86
        ],
        "rgbf": [
            0.8588,
            0.3451,
            0.3373
        ]
    },
    {
        "name": "piss yellow",
        "clean_name": "pissyellow",
        "hex": "#ddd618",
        "rgb": [
            221,
            214,
            24
        ],
        "rgbf": [
            0.8667,
            0.8392,
            0.0941
        ]
    },
    {
        "name": "bright cyan",
        "clean_name": "brightcyan",
        "hex": "#41fdfe",
        "rgb": [
            65,
            253,
            254
        ],
        "rgbf": [
            0.2549,
            0.9922,
            0.9961
        ]
    },
    {
        "name": "dark coral",
        "clean_name": "darkcoral",
        "hex": "#cf524e",
        "rgb": [
            207,
            82,
            78
        ],
        "rgbf": [
            0.8118,
            0.3216,
            0.3059
        ]
    },
    {
        "name": "algae green",
        "clean_name": "algaegreen",
        "hex": "#21c36f",
        "rgb": [
            33,
            195,
            111
        ],
        "rgbf": [
            0.1294,
            0.7647,
            0.4353
        ]
    },
    {
        "name": "darkish red",
        "clean_name": "darkishred",
        "hex": "#a90308",
        "rgb": [
            169,
            3,
            8
        ],
        "rgbf": [
            0.6627,
            0.0118,
            0.0314
        ]
    },
    {
        "name": "reddy brown",
        "clean_name": "reddybrown",
        "hex": "#6e1005",
        "rgb": [
            110,
            16,
            5
        ],
        "rgbf": [
            0.4314,
            0.0627,
            0.0196
        ]
    },
    {
        "name": "blush pink",
        "clean_name": "blushpink",
        "hex": "#fe828c",
        "rgb": [
            254,
            130,
            140
        ],
        "rgbf": [
            0.9961,
            0.5098,
            0.549
        ]
    },
    {
        "name": "camouflage green",
        "clean_name": "camouflagegreen",
        "hex": "#4b6113",
        "rgb": [
            75,
            97,
            19
        ],
        "rgbf": [
            0.2941,
            0.3804,
            0.0745
        ]
    },
    {
        "name": "lawn green",
        "clean_name": "lawngreen",
        "hex": "#4da409",
        "rgb": [
            77,
            164,
            9
        ],
        "rgbf": [
            0.302,
            0.6431,
            0.0353
        ]
    },
    {
        "name": "putty",
        "clean_name": "putty",
        "hex": "#beae8a",
        "rgb": [
            190,
            174,
            138
        ],
        "rgbf": [
            0.7451,
            0.6824,
            0.5412
        ]
    },
    {
        "name": "vibrant blue",
        "clean_name": "vibrantblue",
        "hex": "#0339f8",
        "rgb": [
            3,
            57,
            248
        ],
        "rgbf": [
            0.0118,
            0.2235,
            0.9725
        ]
    },
    {
        "name": "dark sand",
        "clean_name": "darksand",
        "hex": "#a88f59",
        "rgb": [
            168,
            143,
            89
        ],
        "rgbf": [
            0.6588,
            0.5608,
            0.349
        ]
    },
    {
        "name": "purple/blue",
        "clean_name": "purpleblue",
        "hex": "#5d21d0",
        "rgb": [
            93,
            33,
            208
        ],
        "rgbf": [
            0.3647,
            0.1294,
            0.8157
        ]
    },
    {
        "name": "saffron",
        "clean_name": "saffron",
        "hex": "#feb209",
        "rgb": [
            254,
            178,
            9
        ],
        "rgbf": [
            0.9961,
            0.698,
            0.0353
        ]
    },
    {
        "name": "twilight",
        "clean_name": "twilight",
        "hex": "#4e518b",
        "rgb": [
            78,
            81,
            139
        ],
        "rgbf": [
            0.3059,
            0.3176,
            0.5451
        ]
    },
    {
        "name": "warm brown",
        "clean_name": "warmbrown",
        "hex": "#964e02",
        "rgb": [
            150,
            78,
            2
        ],
        "rgbf": [
            0.5882,
            0.3059,
            0.0078
        ]
    },
    {
        "name": "bluegrey",
        "clean_name": "bluegrey",
        "hex": "#85a3b2",
        "rgb": [
            133,
            163,
            178
        ],
        "rgbf": [
            0.5216,
            0.6392,
            0.698
        ]
    },
    {
        "name": "bubble gum pink",
        "clean_name": "bubblegumpink",
        "hex": "#ff69af",
        "rgb": [
            255,
            105,
            175
        ],
        "rgbf": [
            1.0,
            0.4118,
            0.6863
        ]
    },
    {
        "name": "duck egg blue",
        "clean_name": "duckeggblue",
        "hex": "#c3fbf4",
        "rgb": [
            195,
            251,
            244
        ],
        "rgbf": [
            0.7647,
            0.9843,
            0.9569
        ]
    },
    {
        "name": "greenish cyan",
        "clean_name": "greenishcyan",
        "hex": "#2afeb7",
        "rgb": [
            42,
            254,
            183
        ],
        "rgbf": [
            0.1647,
            0.9961,
            0.7176
        ]
    },
    {
        "name": "petrol",
        "clean_name": "petrol",
        "hex": "#005f6a",
        "rgb": [
            0,
            95,
            106
        ],
        "rgbf": [
            0.0,
            0.3725,
            0.4157
        ]
    },
    {
        "name": "royal",
        "clean_name": "royal",
        "hex": "#0c1793",
        "rgb": [
            12,
            23,
            147
        ],
        "rgbf": [
            0.0471,
            0.0902,
            0.5765
        ]
    },
    {
        "name": "butter",
        "clean_name": "butter",
        "hex": "#ffff81",
        "rgb": [
            255,
            255,
            129
        ],
        "rgbf": [
            1.0,
            1.0,
            0.5059
        ]
    },
    {
        "name": "dusty orange",
        "clean_name": "dustyorange",
        "hex": "#f0833a",
        "rgb": [
            240,
            131,
            58
        ],
        "rgbf": [
            0.9412,
            0.5137,
            0.2275
        ]
    },
    {
        "name": "off yellow",
        "clean_name": "offyellow",
        "hex": "#f1f33f",
        "rgb": [
            241,
            243,
            63
        ],
        "rgbf": [
            0.9451,
            0.9529,
            0.2471
        ]
    },
    {
        "name": "pale olive green",
        "clean_name": "paleolivegreen",
        "hex": "#b1d27b",
        "rgb": [
            177,
            210,
            123
        ],
        "rgbf": [
            0.6941,
            0.8235,
            0.4824
        ]
    },
    {
        "name": "orangish",
        "clean_name": "orangish",
        "hex": "#fc824a",
        "rgb": [
            252,
            130,
            74
        ],
        "rgbf": [
            0.9882,
            0.5098,
            0.2902
        ]
    },
    {
        "name": "leaf",
        "clean_name": "leaf",
        "hex": "#71aa34",
        "rgb": [
            113,
            170,
            52
        ],
        "rgbf": [
            0.4431,
            0.6667,
            0.2039
        ]
    },
    {
        "name": "light blue grey",
        "clean_name": "lightbluegrey",
        "hex": "#b7c9e2",
        "rgb": [
            183,
            201,
            226
        ],
        "rgbf": [
            0.7176,
            0.7882,
            0.8863
        ]
    },
    {
        "name": "dried blood",
        "clean_name": "driedblood",
        "hex": "#4b0101",
        "rgb": [
            75,
            1,
            1
        ],
        "rgbf": [
            0.2941,
            0.0039,
            0.0039
        ]
    },
    {
        "name": "lightish purple",
        "clean_name": "lightishpurple",
        "hex": "#a552e6",
        "rgb": [
            165,
            82,
            230
        ],
        "rgbf": [
            0.6471,
            0.3216,
            0.902
        ]
    },
    {
        "name": "rusty red",
        "clean_name": "rustyred",
        "hex": "#af2f0d",
        "rgb": [
            175,
            47,
            13
        ],
        "rgbf": [
            0.6863,
            0.1843,
            0.051
        ]
    },
    {
        "name": "lavender blue",
        "clean_name": "lavenderblue",
        "hex": "#8b88f8",
        "rgb": [
            139,
            136,
            248
        ],
        "rgbf": [
            0.5451,
            0.5333,
            0.9725
        ]
    },
    {
        "name": "light grass green",
        "clean_name": "lightgrassgreen",
        "hex": "#9af764",
        "rgb": [
            154,
            247,
            100
        ],
        "rgbf": [
            0.6039,
            0.9686,
            0.3922
        ]
    },
    {
        "name": "light mint green",
        "clean_name": "lightmintgreen",
        "hex": "#a6fbb2",
        "rgb": [
            166,
            251,
            178
        ],
        "rgbf": [
            0.651,
            0.9843,
            0.698
        ]
    },
    {
        "name": "sunflower",
        "clean_name": "sunflower",
        "hex": "#ffc512",
        "rgb": [
            255,
            197,
            18
        ],
        "rgbf": [
            1.0,
            0.7725,
            0.0706
        ]
    },
    {
        "name": "velvet",
        "clean_name": "velvet",
        "hex": "#750851",
        "rgb": [
            117,
            8,
            81
        ],
        "rgbf": [
            0.4588,
            0.0314,
            0.3176
        ]
    },
    {
        "name": "brick orange",
        "clean_name": "brickorange",
        "hex": "#c14a09",
        "rgb": [
            193,
            74,
            9
        ],
        "rgbf": [
            0.7569,
            0.2902,
            0.0353
        ]
    },
    {
        "name": "lightish red",
        "clean_name": "lightishred",
        "hex": "#fe2f4a",
        "rgb": [
            254,
            47,
            74
        ],
        "rgbf": [
            0.9961,
            0.1843,
            0.2902
        ]
    },
    {
        "name": "pure blue",
        "clean_name": "pureblue",
        "hex": "#0203e2",
        "rgb": [
            2,
            3,
            226
        ],
        "rgbf": [
            0.0078,
            0.0118,
            0.8863
        ]
    },
    {
        "name": "twilight blue",
        "clean_name": "twilightblue",
        "hex": "#0a437a",
        "rgb": [
            10,
            67,
            122
        ],
        "rgbf": [
            0.0392,
            0.2627,
            0.4784
        ]
    },
    {
        "name": "violet red",
        "clean_name": "violetred",
        "hex": "#a50055",
        "rgb": [
            165,
            0,
            85
        ],
        "rgbf": [
            0.6471,
            0.0,
            0.3333
        ]
    },
    {
        "name": "yellowy brown",
        "clean_name": "yellowybrown",
        "hex": "#ae8b0c",
        "rgb": [
            174,
            139,
            12
        ],
        "rgbf": [
            0.6824,
            0.5451,
            0.0471
        ]
    },
    {
        "name": "carnation",
        "clean_name": "carnation",
        "hex": "#fd798f",
        "rgb": [
            253,
            121,
            143
        ],
        "rgbf": [
            0.9922,
            0.4745,
            0.5608
        ]
    },
    {
        "name": "muddy yellow",
        "clean_name": "muddyyellow",
        "hex": "#bfac05",
        "rgb": [
            191,
            172,
            5
        ],
        "rgbf": [
            0.749,
            0.6745,
            0.0196
        ]
    },
    {
        "name": "dark seafoam green",
        "clean_name": "darkseafoamgreen",
        "hex": "#3eaf76",
        "rgb": [
            62,
            175,
            118
        ],
        "rgbf": [
            0.2431,
            0.6863,
            0.4627
        ]
    },
    {
        "name": "deep rose",
        "clean_name": "deeprose",
        "hex": "#c74767",
        "rgb": [
            199,
            71,
            103
        ],
        "rgbf": [
            0.7804,
            0.2784,
            0.4039
        ]
    },
    {
        "name": "dusty red",
        "clean_name": "dustyred",
        "hex": "#b9484e",
        "rgb": [
            185,
            72,
            78
        ],
        "rgbf": [
            0.7255,
            0.2824,
            0.3059
        ]
    },
    {
        "name": "grey/blue",
        "clean_name": "greyblue",
        "hex": "#647d8e",
        "rgb": [
            100,
            125,
            142
        ],
        "rgbf": [
            0.3922,
            0.4902,
            0.5569
        ]
    },
    {
        "name": "lemon lime",
        "clean_name": "lemonlime",
        "hex": "#bffe28",
        "rgb": [
            191,
            254,
            40
        ],
        "rgbf": [
            0.749,
            0.9961,
            0.1569
        ]
    },
    {
        "name": "purple/pink",
        "clean_name": "purplepink",
        "hex": "#d725de",
        "rgb": [
            215,
            37,
            222
        ],
        "rgbf": [
            0.8431,
            0.1451,
            0.8706
        ]
    },
    {
        "name": "brown yellow",
        "clean_name": "brownyellow",
        "hex": "#b29705",
        "rgb": [
            178,
            151,
            5
        ],
        "rgbf": [
            0.698,
            0.5922,
            0.0196
        ]
    },
    {
        "name": "purple brown",
        "clean_name": "purplebrown",
        "hex": "#673a3f",
        "rgb": [
            103,
            58,
            63
        ],
        "rgbf": [
            0.4039,
            0.2275,
            0.2471
        ]
    },
    {
        "name": "wisteria",
        "clean_name": "wisteria",
        "hex": "#a87dc2",
        "rgb": [
            168,
            125,
            194
        ],
        "rgbf": [
            0.6588,
            0.4902,
            0.7608
        ]
    },
    {
        "name": "banana yellow",
        "clean_name": "bananayellow",
        "hex": "#fafe4b",
        "rgb": [
            250,
            254,
            75
        ],
        "rgbf": [
            0.9804,
            0.9961,
            0.2941
        ]
    },
    {
        "name": "lipstick red",
        "clean_name": "lipstickred",
        "hex": "#c0022f",
        "rgb": [
            192,
            2,
            47
        ],
        "rgbf": [
            0.7529,
            0.0078,
            0.1843
        ]
    },
    {
        "name": "water blue",
        "clean_name": "waterblue",
        "hex": "#0e87cc",
        "rgb": [
            14,
            135,
            204
        ],
        "rgbf": [
            0.0549,
            0.5294,
            0.8
        ]
    },
    {
        "name": "brown grey",
        "clean_name": "browngrey",
        "hex": "#8d8468",
        "rgb": [
            141,
            132,
            104
        ],
        "rgbf": [
            0.5529,
            0.5176,
            0.4078
        ]
    },
    {
        "name": "vibrant purple",
        "clean_name": "vibrantpurple",
        "hex": "#ad03de",
        "rgb": [
            173,
            3,
            222
        ],
        "rgbf": [
            0.6784,
            0.0118,
            0.8706
        ]
    },
    {
        "name": "baby green",
        "clean_name": "babygreen",
        "hex": "#8cff9e",
        "rgb": [
            140,
            255,
            158
        ],
        "rgbf": [
            0.549,
            1.0,
            0.6196
        ]
    },
    {
        "name": "barf green",
        "clean_name": "barfgreen",
        "hex": "#94ac02",
        "rgb": [
            148,
            172,
            2
        ],
        "rgbf": [
            0.5804,
            0.6745,
            0.0078
        ]
    },
    {
        "name": "eggshell blue",
        "clean_name": "eggshellblue",
        "hex": "#c4fff7",
        "rgb": [
            196,
            255,
            247
        ],
        "rgbf": [
            0.7686,
            1.0,
            0.9686
        ]
    },
    {
        "name": "sandy yellow",
        "clean_name": "sandyyellow",
        "hex": "#fdee73",
        "rgb": [
            253,
            238,
            115
        ],
        "rgbf": [
            0.9922,
            0.9333,
            0.451
        ]
    },
    {
        "name": "cool green",
        "clean_name": "coolgreen",
        "hex": "#33b864",
        "rgb": [
            51,
            184,
            100
        ],
        "rgbf": [
            0.2,
            0.7216,
            0.3922
        ]
    },
    {
        "name": "pale",
        "clean_name": "pale",
        "hex": "#fff9d0",
        "rgb": [
            255,
            249,
            208
        ],
        "rgbf": [
            1.0,
            0.9765,
            0.8157
        ]
    },
    {
        "name": "blue/grey",
        "clean_name": "bluegrey",
        "hex": "#758da3",
        "rgb": [
            117,
            141,
            163
        ],
        "rgbf": [
            0.4588,
            0.5529,
            0.6392
        ]
    },
    {
        "name": "hot magenta",
        "clean_name": "hotmagenta",
        "hex": "#f504c9",
        "rgb": [
            245,
            4,
            201
        ],
        "rgbf": [
            0.9608,
            0.0157,
            0.7882
        ]
    },
    {
        "name": "greyblue",
        "clean_name": "greyblue",
        "hex": "#77a1b5",
        "rgb": [
            119,
            161,
            181
        ],
        "rgbf": [
            0.4667,
            0.6314,
            0.7098
        ]
    },
    {
        "name": "purpley",
        "clean_name": "purpley",
        "hex": "#8756e4",
        "rgb": [
            135,
            86,
            228
        ],
        "rgbf": [
            0.5294,
            0.3373,
            0.8941
        ]
    },
    {
        "name": "baby shit green",
        "clean_name": "babyshitgreen",
        "hex": "#889717",
        "rgb": [
            136,
            151,
            23
        ],
        "rgbf": [
            0.5333,
            0.5922,
            0.0902
        ]
    },
    {
        "name": "brownish pink",
        "clean_name": "brownishpink",
        "hex": "#c27e79",
        "rgb": [
            194,
            126,
            121
        ],
        "rgbf": [
            0.7608,
            0.4941,
            0.4745
        ]
    },
    {
        "name": "dark aquamarine",
        "clean_name": "darkaquamarine",
        "hex": "#017371",
        "rgb": [
            1,
            115,
            113
        ],
        "rgbf": [
            0.0039,
            0.451,
            0.4431
        ]
    },
    {
        "name": "diarrhea",
        "clean_name": "diarrhea",
        "hex": "#9f8303",
        "rgb": [
            159,
            131,
            3
        ],
        "rgbf": [
            0.6235,
            0.5137,
            0.0118
        ]
    },
    {
        "name": "light mustard",
        "clean_name": "lightmustard",
        "hex": "#f7d560",
        "rgb": [
            247,
            213,
            96
        ],
        "rgbf": [
            0.9686,
            0.8353,
            0.3765
        ]
    },
    {
        "name": "pale sky blue",
        "clean_name": "paleskyblue",
        "hex": "#bdf6fe",
        "rgb": [
            189,
            246,
            254
        ],
        "rgbf": [
            0.7412,
            0.9647,
            0.9961
        ]
    },
    {
        "name": "turtle green",
        "clean_name": "turtlegreen",
        "hex": "#75b84f",
        "rgb": [
            117,
            184,
            79
        ],
        "rgbf": [
            0.4588,
            0.7216,
            0.3098
        ]
    },
    {
        "name": "bright olive",
        "clean_name": "brightolive",
        "hex": "#9cbb04",
        "rgb": [
            156,
            187,
            4
        ],
        "rgbf": [
            0.6118,
            0.7333,
            0.0157
        ]
    },
    {
        "name": "dark grey blue",
        "clean_name": "darkgreyblue",
        "hex": "#29465b",
        "rgb": [
            41,
            70,
            91
        ],
        "rgbf": [
            0.1608,
            0.2745,
            0.3569
        ]
    },
    {
        "name": "greeny brown",
        "clean_name": "greenybrown",
        "hex": "#696006",
        "rgb": [
            105,
            96,
            6
        ],
        "rgbf": [
            0.4118,
            0.3765,
            0.0235
        ]
    },
    {
        "name": "lemon green",
        "clean_name": "lemongreen",
        "hex": "#adf802",
        "rgb": [
            173,
            248,
            2
        ],
        "rgbf": [
            0.6784,
            0.9725,
            0.0078
        ]
    },
    {
        "name": "light periwinkle",
        "clean_name": "lightperiwinkle",
        "hex": "#c1c6fc",
        "rgb": [
            193,
            198,
            252
        ],
        "rgbf": [
            0.7569,
            0.7765,
            0.9882
        ]
    },
    {
        "name": "seaweed green",
        "clean_name": "seaweedgreen",
        "hex": "#35ad6b",
        "rgb": [
            53,
            173,
            107
        ],
        "rgbf": [
            0.2078,
            0.6784,
            0.4196
        ]
    },
    {
        "name": "sunshine yellow",
        "clean_name": "sunshineyellow",
        "hex": "#fffd37",
        "rgb": [
            255,
            253,
            55
        ],
        "rgbf": [
            1.0,
            0.9922,
            0.2157
        ]
    },
    {
        "name": "ugly purple",
        "clean_name": "uglypurple",
        "hex": "#a442a0",
        "rgb": [
            164,
            66,
            160
        ],
        "rgbf": [
            0.6431,
            0.2588,
            0.6275
        ]
    },
    {
        "name": "medium pink",
        "clean_name": "mediumpink",
        "hex": "#f36196",
        "rgb": [
            243,
            97,
            150
        ],
        "rgbf": [
            0.9529,
            0.3804,
            0.5882
        ]
    },
    {
        "name": "puke brown",
        "clean_name": "pukebrown",
        "hex": "#947706",
        "rgb": [
            148,
            119,
            6
        ],
        "rgbf": [
            0.5804,
            0.4667,
            0.0235
        ]
    },
    {
        "name": "very light pink",
        "clean_name": "verylightpink",
        "hex": "#fff4f2",
        "rgb": [
            255,
            244,
            242
        ],
        "rgbf": [
            1.0,
            0.9569,
            0.949
        ]
    },
    {
        "name": "viridian",
        "clean_name": "viridian",
        "hex": "#1e9167",
        "rgb": [
            30,
            145,
            103
        ],
        "rgbf": [
            0.1176,
            0.5686,
            0.4039
        ]
    },
    {
        "name": "bile",
        "clean_name": "bile",
        "hex": "#b5c306",
        "rgb": [
            181,
            195,
            6
        ],
        "rgbf": [
            0.7098,
            0.7647,
            0.0235
        ]
    },
    {
        "name": "faded yellow",
        "clean_name": "fadedyellow",
        "hex": "#feff7f",
        "rgb": [
            254,
            255,
            127
        ],
        "rgbf": [
            0.9961,
            1.0,
            0.498
        ]
    },
    {
        "name": "very pale green",
        "clean_name": "verypalegreen",
        "hex": "#cffdbc",
        "rgb": [
            207,
            253,
            188
        ],
        "rgbf": [
            0.8118,
            0.9922,
            0.7373
        ]
    },
    {
        "name": "vibrant green",
        "clean_name": "vibrantgreen",
        "hex": "#0add08",
        "rgb": [
            10,
            221,
            8
        ],
        "rgbf": [
            0.0392,
            0.8667,
            0.0314
        ]
    },
    {
        "name": "bright lime",
        "clean_name": "brightlime",
        "hex": "#87fd05",
        "rgb": [
            135,
            253,
            5
        ],
        "rgbf": [
            0.5294,
            0.9922,
            0.0196
        ]
    },
    {
        "name": "spearmint",
        "clean_name": "spearmint",
        "hex": "#1ef876",
        "rgb": [
            30,
            248,
            118
        ],
        "rgbf": [
            0.1176,
            0.9725,
            0.4627
        ]
    },
    {
        "name": "light aquamarine",
        "clean_name": "lightaquamarine",
        "hex": "#7bfdc7",
        "rgb": [
            123,
            253,
            199
        ],
        "rgbf": [
            0.4824,
            0.9922,
            0.7804
        ]
    },
    {
        "name": "light sage",
        "clean_name": "lightsage",
        "hex": "#bcecac",
        "rgb": [
            188,
            236,
            172
        ],
        "rgbf": [
            0.7373,
            0.9255,
            0.6745
        ]
    },
    {
        "name": "yellowgreen",
        "clean_name": "yellowgreen",
        "hex": "#bbf90f",
        "rgb": [
            187,
            249,
            15
        ],
        "rgbf": [
            0.7333,
            0.9765,
            0.0588
        ]
    },
    {
        "name": "baby poo",
        "clean_name": "babypoo",
        "hex": "#ab9004",
        "rgb": [
            171,
            144,
            4
        ],
        "rgbf": [
            0.6706,
            0.5647,
            0.0157
        ]
    },
    {
        "name": "dark seafoam",
        "clean_name": "darkseafoam",
        "hex": "#1fb57a",
        "rgb": [
            31,
            181,
            122
        ],
        "rgbf": [
            0.1216,
            0.7098,
            0.4784
        ]
    },
    {
        "name": "deep teal",
        "clean_name": "deepteal",
        "hex": "#00555a",
        "rgb": [
            0,
            85,
            90
        ],
        "rgbf": [
            0.0,
            0.3333,
            0.3529
        ]
    },
    {
        "name": "heather",
        "clean_name": "heather",
        "hex": "#a484ac",
        "rgb": [
            164,
            132,
            172
        ],
        "rgbf": [
            0.6431,
            0.5176,
            0.6745
        ]
    },
    {
        "name": "rust orange",
        "clean_name": "rustorange",
        "hex": "#c45508",
        "rgb": [
            196,
            85,
            8
        ],
        "rgbf": [
            0.7686,
            0.3333,
            0.0314
        ]
    },
    {
        "name": "dirty blue",
        "clean_name": "dirtyblue",
        "hex": "#3f829d",
        "rgb": [
            63,
            130,
            157
        ],
        "rgbf": [
            0.2471,
            0.5098,
            0.6157
        ]
    },
    {
        "name": "fern green",
        "clean_name": "ferngreen",
        "hex": "#548d44",
        "rgb": [
            84,
            141,
            68
        ],
        "rgbf": [
            0.3294,
            0.5529,
            0.2667
        ]
    },
    {
        "name": "bright lilac",
        "clean_name": "brightlilac",
        "hex": "#c95efb",
        "rgb": [
            201,
            94,
            251
        ],
        "rgbf": [
            0.7882,
            0.3686,
            0.9843
        ]
    },
    {
        "name": "weird green",
        "clean_name": "weirdgreen",
        "hex": "#3ae57f",
        "rgb": [
            58,
            229,
            127
        ],
        "rgbf": [
            0.2275,
            0.898,
            0.498
        ]
    },
    {
        "name": "peacock blue",
        "clean_name": "peacockblue",
        "hex": "#016795",
        "rgb": [
            1,
            103,
            149
        ],
        "rgbf": [
            0.0039,
            0.4039,
            0.5843
        ]
    },
    {
        "name": "avocado green",
        "clean_name": "avocadogreen",
        "hex": "#87a922",
        "rgb": [
            135,
            169,
            34
        ],
        "rgbf": [
            0.5294,
            0.6627,
            0.1333
        ]
    },
    {
        "name": "faded orange",
        "clean_name": "fadedorange",
        "hex": "#f0944d",
        "rgb": [
            240,
            148,
            77
        ],
        "rgbf": [
            0.9412,
            0.5804,
            0.302
        ]
    },
    {
        "name": "grape purple",
        "clean_name": "grapepurple",
        "hex": "#5d1451",
        "rgb": [
            93,
            20,
            81
        ],
        "rgbf": [
            0.3647,
            0.0784,
            0.3176
        ]
    },
    {
        "name": "hot green",
        "clean_name": "hotgreen",
        "hex": "#25ff29",
        "rgb": [
            37,
            255,
            41
        ],
        "rgbf": [
            0.1451,
            1.0,
            0.1608
        ]
    },
    {
        "name": "lime yellow",
        "clean_name": "limeyellow",
        "hex": "#d0fe1d",
        "rgb": [
            208,
            254,
            29
        ],
        "rgbf": [
            0.8157,
            0.9961,
            0.1137
        ]
    },
    {
        "name": "mango",
        "clean_name": "mango",
        "hex": "#ffa62b",
        "rgb": [
            255,
            166,
            43
        ],
        "rgbf": [
            1.0,
            0.651,
            0.1686
        ]
    },
    {
        "name": "shamrock",
        "clean_name": "shamrock",
        "hex": "#01b44c",
        "rgb": [
            1,
            180,
            76
        ],
        "rgbf": [
            0.0039,
            0.7059,
            0.298
        ]
    },
    {
        "name": "bubblegum",
        "clean_name": "bubblegum",
        "hex": "#ff6cb5",
        "rgb": [
            255,
            108,
            181
        ],
        "rgbf": [
            1.0,
            0.4235,
            0.7098
        ]
    },
    {
        "name": "purplish brown",
        "clean_name": "purplishbrown",
        "hex": "#6b4247",
        "rgb": [
            107,
            66,
            71
        ],
        "rgbf": [
            0.4196,
            0.2588,
            0.2784
        ]
    },
    {
        "name": "vomit yellow",
        "clean_name": "vomityellow",
        "hex": "#c7c10c",
        "rgb": [
            199,
            193,
            12
        ],
        "rgbf": [
            0.7804,
            0.7569,
            0.0471
        ]
    },
    {
        "name": "pale cyan",
        "clean_name": "palecyan",
        "hex": "#b7fffa",
        "rgb": [
            183,
            255,
            250
        ],
        "rgbf": [
            0.7176,
            1.0,
            0.9804
        ]
    },
    {
        "name": "key lime",
        "clean_name": "keylime",
        "hex": "#aeff6e",
        "rgb": [
            174,
            255,
            110
        ],
        "rgbf": [
            0.6824,
            1.0,
            0.4314
        ]
    },
    {
        "name": "tomato red",
        "clean_name": "tomatored",
        "hex": "#ec2d01",
        "rgb": [
            236,
            45,
            1
        ],
        "rgbf": [
            0.9255,
            0.1765,
            0.0039
        ]
    },
    {
        "name": "lightgreen",
        "clean_name": "lightgreen",
        "hex": "#76ff7b",
        "rgb": [
            118,
            255,
            123
        ],
        "rgbf": [
            0.4627,
            1.0,
            0.4824
        ]
    },
    {
        "name": "merlot",
        "clean_name": "merlot",
        "hex": "#730039",
        "rgb": [
            115,
            0,
            57
        ],
        "rgbf": [
            0.451,
            0.0,
            0.2235
        ]
    },
    {
        "name": "night blue",
        "clean_name": "nightblue",
        "hex": "#040348",
        "rgb": [
            4,
            3,
            72
        ],
        "rgbf": [
            0.0157,
            0.0118,
            0.2824
        ]
    },
    {
        "name": "purpleish pink",
        "clean_name": "purpleishpink",
        "hex": "#df4ec8",
        "rgb": [
            223,
            78,
            200
        ],
        "rgbf": [
            0.8745,
            0.3059,
            0.7843
        ]
    },
    {
        "name": "apple",
        "clean_name": "apple",
        "hex": "#6ecb3c",
        "rgb": [
            110,
            203,
            60
        ],
        "rgbf": [
            0.4314,
            0.7961,
            0.2353
        ]
    },
    {
        "name": "baby poop green",
        "clean_name": "babypoopgreen",
        "hex": "#8f9805",
        "rgb": [
            143,
            152,
            5
        ],
        "rgbf": [
            0.5608,
            0.5961,
            0.0196
        ]
    },
    {
        "name": "green apple",
        "clean_name": "greenapple",
        "hex": "#5edc1f",
        "rgb": [
            94,
            220,
            31
        ],
        "rgbf": [
            0.3686,
            0.8627,
            0.1216
        ]
    },
    {
        "name": "heliotrope",
        "clean_name": "heliotrope",
        "hex": "#d94ff5",
        "rgb": [
            217,
            79,
            245
        ],
        "rgbf": [
            0.851,
            0.3098,
            0.9608
        ]
    },
    {
        "name": "yellow/green",
        "clean_name": "yellowgreen",
        "hex": "#c8fd3d",
        "rgb": [
            200,
            253,
            61
        ],
        "rgbf": [
            0.7843,
            0.9922,
            0.2392
        ]
    },
    {
        "name": "almost black",
        "clean_name": "almostblack",
        "hex": "#070d0d",
        "rgb": [
            7,
            13,
            13
        ],
        "rgbf": [
            0.0275,
            0.051,
            0.051
        ]
    },
    {
        "name": "cool blue",
        "clean_name": "coolblue",
        "hex": "#4984b8",
        "rgb": [
            73,
            132,
            184
        ],
        "rgbf": [
            0.2863,
            0.5176,
            0.7216
        ]
    },
    {
        "name": "leafy green",
        "clean_name": "leafygreen",
        "hex": "#51b73b",
        "rgb": [
            81,
            183,
            59
        ],
        "rgbf": [
            0.3176,
            0.7176,
            0.2314
        ]
    },
    {
        "name": "mustard brown",
        "clean_name": "mustardbrown",
        "hex": "#ac7e04",
        "rgb": [
            172,
            126,
            4
        ],
        "rgbf": [
            0.6745,
            0.4941,
            0.0157
        ]
    },
    {
        "name": "dusk",
        "clean_name": "dusk",
        "hex": "#4e5481",
        "rgb": [
            78,
            84,
            129
        ],
        "rgbf": [
            0.3059,
            0.3294,
            0.5059
        ]
    },
    {
        "name": "dull brown",
        "clean_name": "dullbrown",
        "hex": "#876e4b",
        "rgb": [
            135,
            110,
            75
        ],
        "rgbf": [
            0.5294,
            0.4314,
            0.2941
        ]
    },
    {
        "name": "frog green",
        "clean_name": "froggreen",
        "hex": "#58bc08",
        "rgb": [
            88,
            188,
            8
        ],
        "rgbf": [
            0.3451,
            0.7373,
            0.0314
        ]
    },
    {
        "name": "vivid green",
        "clean_name": "vividgreen",
        "hex": "#2fef10",
        "rgb": [
            47,
            239,
            16
        ],
        "rgbf": [
            0.1843,
            0.9373,
            0.0627
        ]
    },
    {
        "name": "bright light green",
        "clean_name": "brightlightgreen",
        "hex": "#2dfe54",
        "rgb": [
            45,
            254,
            84
        ],
        "rgbf": [
            0.1765,
            0.9961,
            0.3294
        ]
    },
    {
        "name": "fluro green",
        "clean_name": "flurogreen",
        "hex": "#0aff02",
        "rgb": [
            10,
            255,
            2
        ],
        "rgbf": [
            0.0392,
            1.0,
            0.0078
        ]
    },
    {
        "name": "kiwi",
        "clean_name": "kiwi",
        "hex": "#9cef43",
        "rgb": [
            156,
            239,
            67
        ],
        "rgbf": [
            0.6118,
            0.9373,
            0.2627
        ]
    },
    {
        "name": "seaweed",
        "clean_name": "seaweed",
        "hex": "#18d17b",
        "rgb": [
            24,
            209,
            123
        ],
        "rgbf": [
            0.0941,
            0.8196,
            0.4824
        ]
    },
    {
        "name": "navy green",
        "clean_name": "navygreen",
        "hex": "#35530a",
        "rgb": [
            53,
            83,
            10
        ],
        "rgbf": [
            0.2078,
            0.3255,
            0.0392
        ]
    },
    {
        "name": "ultramarine blue",
        "clean_name": "ultramarineblue",
        "hex": "#1805db",
        "rgb": [
            24,
            5,
            219
        ],
        "rgbf": [
            0.0941,
            0.0196,
            0.8588
        ]
    },
    {
        "name": "iris",
        "clean_name": "iris",
        "hex": "#6258c4",
        "rgb": [
            98,
            88,
            196
        ],
        "rgbf": [
            0.3843,
            0.3451,
            0.7686
        ]
    },
    {
        "name": "pastel orange",
        "clean_name": "pastelorange",
        "hex": "#ff964f",
        "rgb": [
            255,
            150,
            79
        ],
        "rgbf": [
            1.0,
            0.5882,
            0.3098
        ]
    },
    {
        "name": "yellowish orange",
        "clean_name": "yellowishorange",
        "hex": "#ffab0f",
        "rgb": [
            255,
            171,
            15
        ],
        "rgbf": [
            1.0,
            0.6706,
            0.0588
        ]
    },
    {
        "name": "perrywinkle",
        "clean_name": "perrywinkle",
        "hex": "#8f8ce7",
        "rgb": [
            143,
            140,
            231
        ],
        "rgbf": [
            0.5608,
            0.549,
            0.9059
        ]
    },
    {
        "name": "tealish",
        "clean_name": "tealish",
        "hex": "#24bca8",
        "rgb": [
            36,
            188,
            168
        ],
        "rgbf": [
            0.1412,
            0.7373,
            0.6588
        ]
    },
    {
        "name": "dark plum",
        "clean_name": "darkplum",
        "hex": "#3f012c",
        "rgb": [
            63,
            1,
            44
        ],
        "rgbf": [
            0.2471,
            0.0039,
            0.1725
        ]
    },
    {
        "name": "pear",
        "clean_name": "pear",
        "hex": "#cbf85f",
        "rgb": [
            203,
            248,
            95
        ],
        "rgbf": [
            0.7961,
            0.9725,
            0.3725
        ]
    },
    {
        "name": "pinkish orange",
        "clean_name": "pinkishorange",
        "hex": "#ff724c",
        "rgb": [
            255,
            114,
            76
        ],
        "rgbf": [
            1.0,
            0.4471,
            0.298
        ]
    },
    {
        "name": "midnight purple",
        "clean_name": "midnightpurple",
        "hex": "#280137",
        "rgb": [
            40,
            1,
            55
        ],
        "rgbf": [
            0.1569,
            0.0039,
            0.2157
        ]
    },
    {
        "name": "light urple",
        "clean_name": "lighturple",
        "hex": "#b36ff6",
        "rgb": [
            179,
            111,
            246
        ],
        "rgbf": [
            0.702,
            0.4353,
            0.9647
        ]
    },
    {
        "name": "dark mint",
        "clean_name": "darkmint",
        "hex": "#48c072",
        "rgb": [
            72,
            192,
            114
        ],
        "rgbf": [
            0.2824,
            0.7529,
            0.4471
        ]
    },
    {
        "name": "greenish tan",
        "clean_name": "greenishtan",
        "hex": "#bccb7a",
        "rgb": [
            188,
            203,
            122
        ],
        "rgbf": [
            0.7373,
            0.7961,
            0.4784
        ]
    },
    {
        "name": "light burgundy",
        "clean_name": "lightburgundy",
        "hex": "#a8415b",
        "rgb": [
            168,
            65,
            91
        ],
        "rgbf": [
            0.6588,
            0.2549,
            0.3569
        ]
    },
    {
        "name": "turquoise blue",
        "clean_name": "turquoiseblue",
        "hex": "#06b1c4",
        "rgb": [
            6,
            177,
            196
        ],
        "rgbf": [
            0.0235,
            0.6941,
            0.7686
        ]
    },
    {
        "name": "ugly pink",
        "clean_name": "uglypink",
        "hex": "#cd7584",
        "rgb": [
            205,
            117,
            132
        ],
        "rgbf": [
            0.8039,
            0.4588,
            0.5176
        ]
    },
    {
        "name": "sandy",
        "clean_name": "sandy",
        "hex": "#f1da7a",
        "rgb": [
            241,
            218,
            122
        ],
        "rgbf": [
            0.9451,
            0.8549,
            0.4784
        ]
    },
    {
        "name": "electric pink",
        "clean_name": "electricpink",
        "hex": "#ff0490",
        "rgb": [
            255,
            4,
            144
        ],
        "rgbf": [
            1.0,
            0.0157,
            0.5647
        ]
    },
    {
        "name": "muted purple",
        "clean_name": "mutedpurple",
        "hex": "#805b87",
        "rgb": [
            128,
            91,
            135
        ],
        "rgbf": [
            0.502,
            0.3569,
            0.5294
        ]
    },
    {
        "name": "mid green",
        "clean_name": "midgreen",
        "hex": "#50a747",
        "rgb": [
            80,
            167,
            71
        ],
        "rgbf": [
            0.3137,
            0.6549,
            0.2784
        ]
    },
    {
        "name": "greyish",
        "clean_name": "greyish",
        "hex": "#a8a495",
        "rgb": [
            168,
            164,
            149
        ],
        "rgbf": [
            0.6588,
            0.6431,
            0.5843
        ]
    },
    {
        "name": "neon yellow",
        "clean_name": "neonyellow",
        "hex": "#cfff04",
        "rgb": [
            207,
            255,
            4
        ],
        "rgbf": [
            0.8118,
            1.0,
            0.0157
        ]
    },
    {
        "name": "banana",
        "clean_name": "banana",
        "hex": "#ffff7e",
        "rgb": [
            255,
            255,
            126
        ],
        "rgbf": [
            1.0,
            1.0,
            0.4941
        ]
    },
    {
        "name": "carnation pink",
        "clean_name": "carnationpink",
        "hex": "#ff7fa7",
        "rgb": [
            255,
            127,
            167
        ],
        "rgbf": [
            1.0,
            0.498,
            0.6549
        ]
    },
    {
        "name": "tomato",
        "clean_name": "tomato",
        "hex": "#ef4026",
        "rgb": [
            239,
            64,
            38
        ],
        "rgbf": [
            0.9373,
            0.251,
            0.149
        ]
    },
    {
        "name": "sea",
        "clean_name": "sea",
        "hex": "#3c9992",
        "rgb": [
            60,
            153,
            146
        ],
        "rgbf": [
            0.2353,
            0.6,
            0.5725
        ]
    },
    {
        "name": "muddy brown",
        "clean_name": "muddybrown",
        "hex": "#886806",
        "rgb": [
            136,
            104,
            6
        ],
        "rgbf": [
            0.5333,
            0.4078,
            0.0235
        ]
    },
    {
        "name": "turquoise green",
        "clean_name": "turquoisegreen",
        "hex": "#04f489",
        "rgb": [
            4,
            244,
            137
        ],
        "rgbf": [
            0.0157,
            0.9569,
            0.5373
        ]
    },
    {
        "name": "buff",
        "clean_name": "buff",
        "hex": "#fef69e",
        "rgb": [
            254,
            246,
            158
        ],
        "rgbf": [
            0.9961,
            0.9647,
            0.6196
        ]
    },
    {
        "name": "fawn",
        "clean_name": "fawn",
        "hex": "#cfaf7b",
        "rgb": [
            207,
            175,
            123
        ],
        "rgbf": [
            0.8118,
            0.6863,
            0.4824
        ]
    },
    {
        "name": "muted blue",
        "clean_name": "mutedblue",
        "hex": "#3b719f",
        "rgb": [
            59,
            113,
            159
        ],
        "rgbf": [
            0.2314,
            0.4431,
            0.6235
        ]
    },
    {
        "name": "pale rose",
        "clean_name": "palerose",
        "hex": "#fdc1c5",
        "rgb": [
            253,
            193,
            197
        ],
        "rgbf": [
            0.9922,
            0.7569,
            0.7725
        ]
    },
    {
        "name": "dark mint green",
        "clean_name": "darkmintgreen",
        "hex": "#20c073",
        "rgb": [
            32,
            192,
            115
        ],
        "rgbf": [
            0.1255,
            0.7529,
            0.451
        ]
    },
    {
        "name": "amethyst",
        "clean_name": "amethyst",
        "hex": "#9b5fc0",
        "rgb": [
            155,
            95,
            192
        ],
        "rgbf": [
            0.6078,
            0.3725,
            0.7529
        ]
    },
    {
        "name": "blue/green",
        "clean_name": "bluegreen",
        "hex": "#0f9b8e",
        "rgb": [
            15,
            155,
            142
        ],
        "rgbf": [
            0.0588,
            0.6078,
            0.5569
        ]
    },
    {
        "name": "chestnut",
        "clean_name": "chestnut",
        "hex": "#742802",
        "rgb": [
            116,
            40,
            2
        ],
        "rgbf": [
            0.4549,
            0.1569,
            0.0078
        ]
    },
    {
        "name": "sick green",
        "clean_name": "sickgreen",
        "hex": "#9db92c",
        "rgb": [
            157,
            185,
            44
        ],
        "rgbf": [
            0.6157,
            0.7255,
            0.1725
        ]
    },
    {
        "name": "pea",
        "clean_name": "pea",
        "hex": "#a4bf20",
        "rgb": [
            164,
            191,
            32
        ],
        "rgbf": [
            0.6431,
            0.749,
            0.1255
        ]
    },
    {
        "name": "rusty orange",
        "clean_name": "rustyorange",
        "hex": "#cd5909",
        "rgb": [
            205,
            89,
            9
        ],
        "rgbf": [
            0.8039,
            0.349,
            0.0353
        ]
    },
    {
        "name": "stone",
        "clean_name": "stone",
        "hex": "#ada587",
        "rgb": [
            173,
            165,
            135
        ],
        "rgbf": [
            0.6784,
            0.6471,
            0.5294
        ]
    },
    {
        "name": "rose red",
        "clean_name": "rosered",
        "hex": "#be013c",
        "rgb": [
            190,
            1,
            60
        ],
        "rgbf": [
            0.7451,
            0.0039,
            0.2353
        ]
    },
    {
        "name": "pale aqua",
        "clean_name": "paleaqua",
        "hex": "#b8ffeb",
        "rgb": [
            184,
            255,
            235
        ],
        "rgbf": [
            0.7216,
            1.0,
            0.9216
        ]
    },
    {
        "name": "deep orange",
        "clean_name": "deeporange",
        "hex": "#dc4d01",
        "rgb": [
            220,
            77,
            1
        ],
        "rgbf": [
            0.8627,
            0.302,
            0.0039
        ]
    },
    {
        "name": "earth",
        "clean_name": "earth",
        "hex": "#a2653e",
        "rgb": [
            162,
            101,
            62
        ],
        "rgbf": [
            0.6353,
            0.3961,
            0.2431
        ]
    },
    {
        "name": "mossy green",
        "clean_name": "mossygreen",
        "hex": "#638b27",
        "rgb": [
            99,
            139,
            39
        ],
        "rgbf": [
            0.3882,
            0.5451,
            0.1529
        ]
    },
    {
        "name": "grassy green",
        "clean_name": "grassygreen",
        "hex": "#419c03",
        "rgb": [
            65,
            156,
            3
        ],
        "rgbf": [
            0.2549,
            0.6118,
            0.0118
        ]
    },
    {
        "name": "pale lime green",
        "clean_name": "palelimegreen",
        "hex": "#b1ff65",
        "rgb": [
            177,
            255,
            101
        ],
        "rgbf": [
            0.6941,
            1.0,
            0.3961
        ]
    },
    {
        "name": "light grey blue",
        "clean_name": "lightgreyblue",
        "hex": "#9dbcd4",
        "rgb": [
            157,
            188,
            212
        ],
        "rgbf": [
            0.6157,
            0.7373,
            0.8314
        ]
    },
    {
        "name": "pale grey",
        "clean_name": "palegrey",
        "hex": "#fdfdfe",
        "rgb": [
            253,
            253,
            254
        ],
        "rgbf": [
            0.9922,
            0.9922,
            0.9961
        ]
    },
    {
        "name": "asparagus",
        "clean_name": "asparagus",
        "hex": "#77ab56",
        "rgb": [
            119,
            171,
            86
        ],
        "rgbf": [
            0.4667,
            0.6706,
            0.3373
        ]
    },
    {
        "name": "blueberry",
        "clean_name": "blueberry",
        "hex": "#464196",
        "rgb": [
            70,
            65,
            150
        ],
        "rgbf": [
            0.2745,
            0.2549,
            0.5882
        ]
    },
    {
        "name": "purple red",
        "clean_name": "purplered",
        "hex": "#990147",
        "rgb": [
            153,
            1,
            71
        ],
        "rgbf": [
            0.6,
            0.0039,
            0.2784
        ]
    },
    {
        "name": "pale lime",
        "clean_name": "palelime",
        "hex": "#befd73",
        "rgb": [
            190,
            253,
            115
        ],
        "rgbf": [
            0.7451,
            0.9922,
            0.451
        ]
    },
    {
        "name": "greenish teal",
        "clean_name": "greenishteal",
        "hex": "#32bf84",
        "rgb": [
            50,
            191,
            132
        ],
        "rgbf": [
            0.1961,
            0.749,
            0.5176
        ]
    },
    {
        "name": "caramel",
        "clean_name": "caramel",
        "hex": "#af6f09",
        "rgb": [
            175,
            111,
            9
        ],
        "rgbf": [
            0.6863,
            0.4353,
            0.0353
        ]
    },
    {
        "name": "deep magenta",
        "clean_name": "deepmagenta",
        "hex": "#a0025c",
        "rgb": [
            160,
            2,
            92
        ],
        "rgbf": [
            0.6275,
            0.0078,
            0.3608
        ]
    },
    {
        "name": "light peach",
        "clean_name": "lightpeach",
        "hex": "#ffd8b1",
        "rgb": [
            255,
            216,
            177
        ],
        "rgbf": [
            1.0,
            0.8471,
            0.6941
        ]
    },
    {
        "name": "milk chocolate",
        "clean_name": "milkchocolate",
        "hex": "#7f4e1e",
        "rgb": [
            127,
            78,
            30
        ],
        "rgbf": [
            0.498,
            0.3059,
            0.1176
        ]
    },
    {
        "name": "ocher",
        "clean_name": "ocher",
        "hex": "#bf9b0c",
        "rgb": [
            191,
            155,
            12
        ],
        "rgbf": [
            0.749,
            0.6078,
            0.0471
        ]
    },
    {
        "name": "off green",
        "clean_name": "offgreen",
        "hex": "#6ba353",
        "rgb": [
            107,
            163,
            83
        ],
        "rgbf": [
            0.4196,
            0.6392,
            0.3255
        ]
    },
    {
        "name": "purply pink",
        "clean_name": "purplypink",
        "hex": "#f075e6",
        "rgb": [
            240,
            117,
            230
        ],
        "rgbf": [
            0.9412,
            0.4588,
            0.902
        ]
    },
    {
        "name": "lightblue",
        "clean_name": "lightblue",
        "hex": "#7bc8f6",
        "rgb": [
            123,
            200,
            246
        ],
        "rgbf": [
            0.4824,
            0.7843,
            0.9647
        ]
    },
    {
        "name": "dusky blue",
        "clean_name": "duskyblue",
        "hex": "#475f94",
        "rgb": [
            71,
            95,
            148
        ],
        "rgbf": [
            0.2784,
            0.3725,
            0.5804
        ]
    },
    {
        "name": "golden",
        "clean_name": "golden",
        "hex": "#f5bf03",
        "rgb": [
            245,
            191,
            3
        ],
        "rgbf": [
            0.9608,
            0.749,
            0.0118
        ]
    },
    {
        "name": "light beige",
        "clean_name": "lightbeige",
        "hex": "#fffeb6",
        "rgb": [
            255,
            254,
            182
        ],
        "rgbf": [
            1.0,
            0.9961,
            0.7137
        ]
    },
    {
        "name": "butter yellow",
        "clean_name": "butteryellow",
        "hex": "#fffd74",
        "rgb": [
            255,
            253,
            116
        ],
        "rgbf": [
            1.0,
            0.9922,
            0.4549
        ]
    },
    {
        "name": "dusky purple",
        "clean_name": "duskypurple",
        "hex": "#895b7b",
        "rgb": [
            137,
            91,
            123
        ],
        "rgbf": [
            0.5373,
            0.3569,
            0.4824
        ]
    },
    {
        "name": "french blue",
        "clean_name": "frenchblue",
        "hex": "#436bad",
        "rgb": [
            67,
            107,
            173
        ],
        "rgbf": [
            0.2627,
            0.4196,
            0.6784
        ]
    },
    {
        "name": "ugly yellow",
        "clean_name": "uglyyellow",
        "hex": "#d0c101",
        "rgb": [
            208,
            193,
            1
        ],
        "rgbf": [
            0.8157,
            0.7569,
            0.0039
        ]
    },
    {
        "name": "greeny yellow",
        "clean_name": "greenyyellow",
        "hex": "#c6f808",
        "rgb": [
            198,
            248,
            8
        ],
        "rgbf": [
            0.7765,
            0.9725,
            0.0314
        ]
    },
    {
        "name": "orangish red",
        "clean_name": "orangishred",
        "hex": "#f43605",
        "rgb": [
            244,
            54,
            5
        ],
        "rgbf": [
            0.9569,
            0.2118,
            0.0196
        ]
    },
    {
        "name": "shamrock green",
        "clean_name": "shamrockgreen",
        "hex": "#02c14d",
        "rgb": [
            2,
            193,
            77
        ],
        "rgbf": [
            0.0078,
            0.7569,
            0.302
        ]
    },
    {
        "name": "orangish brown",
        "clean_name": "orangishbrown",
        "hex": "#b25f03",
        "rgb": [
            178,
            95,
            3
        ],
        "rgbf": [
            0.698,
            0.3725,
            0.0118
        ]
    },
    {
        "name": "tree green",
        "clean_name": "treegreen",
        "hex": "#2a7e19",
        "rgb": [
            42,
            126,
            25
        ],
        "rgbf": [
            0.1647,
            0.4941,
            0.098
        ]
    },
    {
        "name": "deep violet",
        "clean_name": "deepviolet",
        "hex": "#490648",
        "rgb": [
            73,
            6,
            72
        ],
        "rgbf": [
            0.2863,
            0.0235,
            0.2824
        ]
    },
    {
        "name": "gunmetal",
        "clean_name": "gunmetal",
        "hex": "#536267",
        "rgb": [
            83,
            98,
            103
        ],
        "rgbf": [
            0.3255,
            0.3843,
            0.4039
        ]
    },
    {
        "name": "blue/purple",
        "clean_name": "bluepurple",
        "hex": "#5a06ef",
        "rgb": [
            90,
            6,
            239
        ],
        "rgbf": [
            0.3529,
            0.0235,
            0.9373
        ]
    },
    {
        "name": "cherry",
        "clean_name": "cherry",
        "hex": "#cf0234",
        "rgb": [
            207,
            2,
            52
        ],
        "rgbf": [
            0.8118,
            0.0078,
            0.2039
        ]
    },
    {
        "name": "sandy brown",
        "clean_name": "sandybrown",
        "hex": "#c4a661",
        "rgb": [
            196,
            166,
            97
        ],
        "rgbf": [
            0.7686,
            0.651,
            0.3804
        ]
    },
    {
        "name": "warm grey",
        "clean_name": "warmgrey",
        "hex": "#978a84",
        "rgb": [
            151,
            138,
            132
        ],
        "rgbf": [
            0.5922,
            0.5412,
            0.5176
        ]
    },
    {
        "name": "dark indigo",
        "clean_name": "darkindigo",
        "hex": "#1f0954",
        "rgb": [
            31,
            9,
            84
        ],
        "rgbf": [
            0.1216,
            0.0353,
            0.3294
        ]
    },
    {
        "name": "midnight",
        "clean_name": "midnight",
        "hex": "#03012d",
        "rgb": [
            3,
            1,
            45
        ],
        "rgbf": [
            0.0118,
            0.0039,
            0.1765
        ]
    },
    {
        "name": "bluey green",
        "clean_name": "blueygreen",
        "hex": "#2bb179",
        "rgb": [
            43,
            177,
            121
        ],
        "rgbf": [
            0.1686,
            0.6941,
            0.4745
        ]
    },
    {
        "name": "grey pink",
        "clean_name": "greypink",
        "hex": "#c3909b",
        "rgb": [
            195,
            144,
            155
        ],
        "rgbf": [
            0.7647,
            0.5647,
            0.6078
        ]
    },
    {
        "name": "soft purple",
        "clean_name": "softpurple",
        "hex": "#a66fb5",
        "rgb": [
            166,
            111,
            181
        ],
        "rgbf": [
            0.651,
            0.4353,
            0.7098
        ]
    },
    {
        "name": "blood",
        "clean_name": "blood",
        "hex": "#770001",
        "rgb": [
            119,
            0,
            1
        ],
        "rgbf": [
            0.4667,
            0.0,
            0.0039
        ]
    },
    {
        "name": "brown red",
        "clean_name": "brownred",
        "hex": "#922b05",
        "rgb": [
            146,
            43,
            5
        ],
        "rgbf": [
            0.5725,
            0.1686,
            0.0196
        ]
    },
    {
        "name": "medium grey",
        "clean_name": "mediumgrey",
        "hex": "#7d7f7c",
        "rgb": [
            125,
            127,
            124
        ],
        "rgbf": [
            0.4902,
            0.498,
            0.4863
        ]
    },
    {
        "name": "berry",
        "clean_name": "berry",
        "hex": "#990f4b",
        "rgb": [
            153,
            15,
            75
        ],
        "rgbf": [
            0.6,
            0.0588,
            0.2941
        ]
    },
    {
        "name": "poo",
        "clean_name": "poo",
        "hex": "#8f7303",
        "rgb": [
            143,
            115,
            3
        ],
        "rgbf": [
            0.5608,
            0.451,
            0.0118
        ]
    },
    {
        "name": "purpley pink",
        "clean_name": "purpleypink",
        "hex": "#c83cb9",
        "rgb": [
            200,
            60,
            185
        ],
        "rgbf": [
            0.7843,
            0.2353,
            0.7255
        ]
    },
    {
        "name": "light salmon",
        "clean_name": "lightsalmon",
        "hex": "#fea993",
        "rgb": [
            254,
            169,
            147
        ],
        "rgbf": [
            0.9961,
            0.6627,
            0.5765
        ]
    },
    {
        "name": "snot",
        "clean_name": "snot",
        "hex": "#acbb0d",
        "rgb": [
            172,
            187,
            13
        ],
        "rgbf": [
            0.6745,
            0.7333,
            0.051
        ]
    },
    {
        "name": "easter purple",
        "clean_name": "easterpurple",
        "hex": "#c071fe",
        "rgb": [
            192,
            113,
            254
        ],
        "rgbf": [
            0.7529,
            0.4431,
            0.9961
        ]
    },
    {
        "name": "light yellow green",
        "clean_name": "lightyellowgreen",
        "hex": "#ccfd7f",
        "rgb": [
            204,
            253,
            127
        ],
        "rgbf": [
            0.8,
            0.9922,
            0.498
        ]
    },
    {
        "name": "dark navy blue",
        "clean_name": "darknavyblue",
        "hex": "#00022e",
        "rgb": [
            0,
            2,
            46
        ],
        "rgbf": [
            0.0,
            0.0078,
            0.1804
        ]
    },
    {
        "name": "drab",
        "clean_name": "drab",
        "hex": "#828344",
        "rgb": [
            130,
            131,
            68
        ],
        "rgbf": [
            0.5098,
            0.5137,
            0.2667
        ]
    },
    {
        "name": "light rose",
        "clean_name": "lightrose",
        "hex": "#ffc5cb",
        "rgb": [
            255,
            197,
            203
        ],
        "rgbf": [
            1.0,
            0.7725,
            0.7961
        ]
    },
    {
        "name": "rouge",
        "clean_name": "rouge",
        "hex": "#ab1239",
        "rgb": [
            171,
            18,
            57
        ],
        "rgbf": [
            0.6706,
            0.0706,
            0.2235
        ]
    },
    {
        "name": "purplish red",
        "clean_name": "purplishred",
        "hex": "#b0054b",
        "rgb": [
            176,
            5,
            75
        ],
        "rgbf": [
            0.6902,
            0.0196,
            0.2941
        ]
    },
    {
        "name": "slime green",
        "clean_name": "slimegreen",
        "hex": "#99cc04",
        "rgb": [
            153,
            204,
            4
        ],
        "rgbf": [
            0.6,
            0.8,
            0.0157
        ]
    },
    {
        "name": "baby poop",
        "clean_name": "babypoop",
        "hex": "#937c00",
        "rgb": [
            147,
            124,
            0
        ],
        "rgbf": [
            0.5765,
            0.4863,
            0.0
        ]
    },
    {
        "name": "irish green",
        "clean_name": "irishgreen",
        "hex": "#019529",
        "rgb": [
            1,
            149,
            41
        ],
        "rgbf": [
            0.0039,
            0.5843,
            0.1608
        ]
    },
    {
        "name": "pink/purple",
        "clean_name": "pinkpurple",
        "hex": "#ef1de7",
        "rgb": [
            239,
            29,
            231
        ],
        "rgbf": [
            0.9373,
            0.1137,
            0.9059
        ]
    },
    {
        "name": "dark navy",
        "clean_name": "darknavy",
        "hex": "#000435",
        "rgb": [
            0,
            4,
            53
        ],
        "rgbf": [
            0.0,
            0.0157,
            0.2078
        ]
    },
    {
        "name": "greeny blue",
        "clean_name": "greenyblue",
        "hex": "#42b395",
        "rgb": [
            66,
            179,
            149
        ],
        "rgbf": [
            0.2588,
            0.702,
            0.5843
        ]
    },
    {
        "name": "light plum",
        "clean_name": "lightplum",
        "hex": "#9d5783",
        "rgb": [
            157,
            87,
            131
        ],
        "rgbf": [
            0.6157,
            0.3412,
            0.5137
        ]
    },
    {
        "name": "pinkish grey",
        "clean_name": "pinkishgrey",
        "hex": "#c8aca9",
        "rgb": [
            200,
            172,
            169
        ],
        "rgbf": [
            0.7843,
            0.6745,
            0.6627
        ]
    },
    {
        "name": "dirty orange",
        "clean_name": "dirtyorange",
        "hex": "#c87606",
        "rgb": [
            200,
            118,
            6
        ],
        "rgbf": [
            0.7843,
            0.4627,
            0.0235
        ]
    },
    {
        "name": "rust red",
        "clean_name": "rustred",
        "hex": "#aa2704",
        "rgb": [
            170,
            39,
            4
        ],
        "rgbf": [
            0.6667,
            0.1529,
            0.0157
        ]
    },
    {
        "name": "pale lilac",
        "clean_name": "palelilac",
        "hex": "#e4cbff",
        "rgb": [
            228,
            203,
            255
        ],
        "rgbf": [
            0.8941,
            0.7961,
            1.0
        ]
    },
    {
        "name": "orangey red",
        "clean_name": "orangeyred",
        "hex": "#fa4224",
        "rgb": [
            250,
            66,
            36
        ],
        "rgbf": [
            0.9804,
            0.2588,
            0.1412
        ]
    },
    {
        "name": "primary blue",
        "clean_name": "primaryblue",
        "hex": "#0804f9",
        "rgb": [
            8,
            4,
            249
        ],
        "rgbf": [
            0.0314,
            0.0157,
            0.9765
        ]
    },
    {
        "name": "kermit green",
        "clean_name": "kermitgreen",
        "hex": "#5cb200",
        "rgb": [
            92,
            178,
            0
        ],
        "rgbf": [
            0.3608,
            0.698,
            0.0
        ]
    },
    {
        "name": "brownish purple",
        "clean_name": "brownishpurple",
        "hex": "#76424e",
        "rgb": [
            118,
            66,
            78
        ],
        "rgbf": [
            0.4627,
            0.2588,
            0.3059
        ]
    },
    {
        "name": "murky green",
        "clean_name": "murkygreen",
        "hex": "#6c7a0e",
        "rgb": [
            108,
            122,
            14
        ],
        "rgbf": [
            0.4235,
            0.4784,
            0.0549
        ]
    },
    {
        "name": "wheat",
        "clean_name": "wheat",
        "hex": "#fbdd7e",
        "rgb": [
            251,
            221,
            126
        ],
        "rgbf": [
            0.9843,
            0.8667,
            0.4941
        ]
    },
    {
        "name": "very dark purple",
        "clean_name": "verydarkpurple",
        "hex": "#2a0134",
        "rgb": [
            42,
            1,
            52
        ],
        "rgbf": [
            0.1647,
            0.0039,
            0.2039
        ]
    },
    {
        "name": "bottle green",
        "clean_name": "bottlegreen",
        "hex": "#044a05",
        "rgb": [
            4,
            74,
            5
        ],
        "rgbf": [
            0.0157,
            0.2902,
            0.0196
        ]
    },
    {
        "name": "watermelon",
        "clean_name": "watermelon",
        "hex": "#fd4659",
        "rgb": [
            253,
            70,
            89
        ],
        "rgbf": [
            0.9922,
            0.2745,
            0.349
        ]
    },
    {
        "name": "deep sky blue",
        "clean_name": "deepskyblue",
        "hex": "#0d75f8",
        "rgb": [
            13,
            117,
            248
        ],
        "rgbf": [
            0.051,
            0.4588,
            0.9725
        ]
    },
    {
        "name": "fire engine red",
        "clean_name": "fireenginered",
        "hex": "#fe0002",
        "rgb": [
            254,
            0,
            2
        ],
        "rgbf": [
            0.9961,
            0.0,
            0.0078
        ]
    },
    {
        "name": "yellow ochre",
        "clean_name": "yellowochre",
        "hex": "#cb9d06",
        "rgb": [
            203,
            157,
            6
        ],
        "rgbf": [
            0.7961,
            0.6157,
            0.0235
        ]
    },
    {
        "name": "pumpkin orange",
        "clean_name": "pumpkinorange",
        "hex": "#fb7d07",
        "rgb": [
            251,
            125,
            7
        ],
        "rgbf": [
            0.9843,
            0.4902,
            0.0275
        ]
    },
    {
        "name": "pale olive",
        "clean_name": "paleolive",
        "hex": "#b9cc81",
        "rgb": [
            185,
            204,
            129
        ],
        "rgbf": [
            0.7255,
            0.8,
            0.5059
        ]
    },
    {
        "name": "light lilac",
        "clean_name": "lightlilac",
        "hex": "#edc8ff",
        "rgb": [
            237,
            200,
            255
        ],
        "rgbf": [
            0.9294,
            0.7843,
            1.0
        ]
    },
    {
        "name": "lightish green",
        "clean_name": "lightishgreen",
        "hex": "#61e160",
        "rgb": [
            97,
            225,
            96
        ],
        "rgbf": [
            0.3804,
            0.8824,
            0.3765
        ]
    },
    {
        "name": "carolina blue",
        "clean_name": "carolinablue",
        "hex": "#8ab8fe",
        "rgb": [
            138,
            184,
            254
        ],
        "rgbf": [
            0.5412,
            0.7216,
            0.9961
        ]
    },
    {
        "name": "mulberry",
        "clean_name": "mulberry",
        "hex": "#920a4e",
        "rgb": [
            146,
            10,
            78
        ],
        "rgbf": [
            0.5725,
            0.0392,
            0.3059
        ]
    },
    {
        "name": "shocking pink",
        "clean_name": "shockingpink",
        "hex": "#fe02a2",
        "rgb": [
            254,
            2,
            162
        ],
        "rgbf": [
            0.9961,
            0.0078,
            0.6353
        ]
    },
    {
        "name": "auburn",
        "clean_name": "auburn",
        "hex": "#9a3001",
        "rgb": [
            154,
            48,
            1
        ],
        "rgbf": [
            0.6039,
            0.1882,
            0.0039
        ]
    },
    {
        "name": "bright lime green",
        "clean_name": "brightlimegreen",
        "hex": "#65fe08",
        "rgb": [
            101,
            254,
            8
        ],
        "rgbf": [
            0.3961,
            0.9961,
            0.0314
        ]
    },
    {
        "name": "celadon",
        "clean_name": "celadon",
        "hex": "#befdb7",
        "rgb": [
            190,
            253,
            183
        ],
        "rgbf": [
            0.7451,
            0.9922,
            0.7176
        ]
    },
    {
        "name": "pinkish brown",
        "clean_name": "pinkishbrown",
        "hex": "#b17261",
        "rgb": [
            177,
            114,
            97
        ],
        "rgbf": [
            0.6941,
            0.4471,
            0.3804
        ]
    },
    {
        "name": "poo brown",
        "clean_name": "poobrown",
        "hex": "#885f01",
        "rgb": [
            136,
            95,
            1
        ],
        "rgbf": [
            0.5333,
            0.3725,
            0.0039
        ]
    },
    {
        "name": "bright sky blue",
        "clean_name": "brightskyblue",
        "hex": "#02ccfe",
        "rgb": [
            2,
            204,
            254
        ],
        "rgbf": [
            0.0078,
            0.8,
            0.9961
        ]
    },
    {
        "name": "celery",
        "clean_name": "celery",
        "hex": "#c1fd95",
        "rgb": [
            193,
            253,
            149
        ],
        "rgbf": [
            0.7569,
            0.9922,
            0.5843
        ]
    },
    {
        "name": "dirt brown",
        "clean_name": "dirtbrown",
        "hex": "#836539",
        "rgb": [
            131,
            101,
            57
        ],
        "rgbf": [
            0.5137,
            0.3961,
            0.2235
        ]
    },
    {
        "name": "strawberry",
        "clean_name": "strawberry",
        "hex": "#fb2943",
        "rgb": [
            251,
            41,
            67
        ],
        "rgbf": [
            0.9843,
            0.1608,
            0.2627
        ]
    },
    {
        "name": "dark lime",
        "clean_name": "darklime",
        "hex": "#84b701",
        "rgb": [
            132,
            183,
            1
        ],
        "rgbf": [
            0.5176,
            0.7176,
            0.0039
        ]
    },
    {
        "name": "copper",
        "clean_name": "copper",
        "hex": "#b66325",
        "rgb": [
            182,
            99,
            37
        ],
        "rgbf": [
            0.7137,
            0.3882,
            0.1451
        ]
    },
    {
        "name": "medium brown",
        "clean_name": "mediumbrown",
        "hex": "#7f5112",
        "rgb": [
            127,
            81,
            18
        ],
        "rgbf": [
            0.498,
            0.3176,
            0.0706
        ]
    },
    {
        "name": "muted green",
        "clean_name": "mutedgreen",
        "hex": "#5fa052",
        "rgb": [
            95,
            160,
            82
        ],
        "rgbf": [
            0.3725,
            0.6275,
            0.3216
        ]
    },
    {
        "name": "robin's egg",
        "clean_name": "robinsegg",
        "hex": "#6dedfd",
        "rgb": [
            109,
            237,
            253
        ],
        "rgbf": [
            0.4275,
            0.9294,
            0.9922
        ]
    },
    {
        "name": "bright aqua",
        "clean_name": "brightaqua",
        "hex": "#0bf9ea",
        "rgb": [
            11,
            249,
            234
        ],
        "rgbf": [
            0.0431,
            0.9765,
            0.9176
        ]
    },
    {
        "name": "bright lavender",
        "clean_name": "brightlavender",
        "hex": "#c760ff",
        "rgb": [
            199,
            96,
            255
        ],
        "rgbf": [
            0.7804,
            0.3765,
            1.0
        ]
    },
    {
        "name": "ivory",
        "clean_name": "ivory",
        "hex": "#ffffcb",
        "rgb": [
            255,
            255,
            203
        ],
        "rgbf": [
            1.0,
            1.0,
            0.7961
        ]
    },
    {
        "name": "very light purple",
        "clean_name": "verylightpurple",
        "hex": "#f6cefc",
        "rgb": [
            246,
            206,
            252
        ],
        "rgbf": [
            0.9647,
            0.8078,
            0.9882
        ]
    },
    {
        "name": "light navy",
        "clean_name": "lightnavy",
        "hex": "#155084",
        "rgb": [
            21,
            80,
            132
        ],
        "rgbf": [
            0.0824,
            0.3137,
            0.5176
        ]
    },
    {
        "name": "pink red",
        "clean_name": "pinkred",
        "hex": "#f5054f",
        "rgb": [
            245,
            5,
            79
        ],
        "rgbf": [
            0.9608,
            0.0196,
            0.3098
        ]
    },
    {
        "name": "olive brown",
        "clean_name": "olivebrown",
        "hex": "#645403",
        "rgb": [
            100,
            84,
            3
        ],
        "rgbf": [
            0.3922,
            0.3294,
            0.0118
        ]
    },
    {
        "name": "poop brown",
        "clean_name": "poopbrown",
        "hex": "#7a5901",
        "rgb": [
            122,
            89,
            1
        ],
        "rgbf": [
            0.4784,
            0.349,
            0.0039
        ]
    },
    {
        "name": "mustard green",
        "clean_name": "mustardgreen",
        "hex": "#a8b504",
        "rgb": [
            168,
            181,
            4
        ],
        "rgbf": [
            0.6588,
            0.7098,
            0.0157
        ]
    },
    {
        "name": "ocean green",
        "clean_name": "oceangreen",
        "hex": "#3d9973",
        "rgb": [
            61,
            153,
            115
        ],
        "rgbf": [
            0.2392,
            0.6,
            0.451
        ]
    },
    {
        "name": "very dark blue",
        "clean_name": "verydarkblue",
        "hex": "#000133",
        "rgb": [
            0,
            1,
            51
        ],
        "rgbf": [
            0.0,
            0.0039,
            0.2
        ]
    },
    {
        "name": "dusty green",
        "clean_name": "dustygreen",
        "hex": "#76a973",
        "rgb": [
            118,
            169,
            115
        ],
        "rgbf": [
            0.4627,
            0.6627,
            0.451
        ]
    },
    {
        "name": "light navy blue",
        "clean_name": "lightnavyblue",
        "hex": "#2e5a88",
        "rgb": [
            46,
            90,
            136
        ],
        "rgbf": [
            0.1804,
            0.3529,
            0.5333
        ]
    },
    {
        "name": "minty green",
        "clean_name": "mintygreen",
        "hex": "#0bf77d",
        "rgb": [
            11,
            247,
            125
        ],
        "rgbf": [
            0.0431,
            0.9686,
            0.4902
        ]
    },
    {
        "name": "adobe",
        "clean_name": "adobe",
        "hex": "#bd6c48",
        "rgb": [
            189,
            108,
            72
        ],
        "rgbf": [
            0.7412,
            0.4235,
            0.2824
        ]
    },
    {
        "name": "barney",
        "clean_name": "barney",
        "hex": "#ac1db8",
        "rgb": [
            172,
            29,
            184
        ],
        "rgbf": [
            0.6745,
            0.1137,
            0.7216
        ]
    },
    {
        "name": "jade green",
        "clean_name": "jadegreen",
        "hex": "#2baf6a",
        "rgb": [
            43,
            175,
            106
        ],
        "rgbf": [
            0.1686,
            0.6863,
            0.4157
        ]
    },
    {
        "name": "bright light blue",
        "clean_name": "brightlightblue",
        "hex": "#26f7fd",
        "rgb": [
            38,
            247,
            253
        ],
        "rgbf": [
            0.149,
            0.9686,
            0.9922
        ]
    },
    {
        "name": "light lime",
        "clean_name": "lightlime",
        "hex": "#aefd6c",
        "rgb": [
            174,
            253,
            108
        ],
        "rgbf": [
            0.6824,
            0.9922,
            0.4235
        ]
    },
    {
        "name": "dark khaki",
        "clean_name": "darkkhaki",
        "hex": "#9b8f55",
        "rgb": [
            155,
            143,
            85
        ],
        "rgbf": [
            0.6078,
            0.5608,
            0.3333
        ]
    },
    {
        "name": "orange yellow",
        "clean_name": "orangeyellow",
        "hex": "#ffad01",
        "rgb": [
            255,
            173,
            1
        ],
        "rgbf": [
            1.0,
            0.6784,
            0.0039
        ]
    },
    {
        "name": "ocre",
        "clean_name": "ocre",
        "hex": "#c69c04",
        "rgb": [
            198,
            156,
            4
        ],
        "rgbf": [
            0.7765,
            0.6118,
            0.0157
        ]
    },
    {
        "name": "maize",
        "clean_name": "maize",
        "hex": "#f4d054",
        "rgb": [
            244,
            208,
            84
        ],
        "rgbf": [
            0.9569,
            0.8157,
            0.3294
        ]
    },
    {
        "name": "faded pink",
        "clean_name": "fadedpink",
        "hex": "#de9dac",
        "rgb": [
            222,
            157,
            172
        ],
        "rgbf": [
            0.8706,
            0.6157,
            0.6745
        ]
    },
    {
        "name": "british racing green",
        "clean_name": "britishracinggreen",
        "hex": "#05480d",
        "rgb": [
            5,
            72,
            13
        ],
        "rgbf": [
            0.0196,
            0.2824,
            0.051
        ]
    },
    {
        "name": "sandstone",
        "clean_name": "sandstone",
        "hex": "#c9ae74",
        "rgb": [
            201,
            174,
            116
        ],
        "rgbf": [
            0.7882,
            0.6824,
            0.4549
        ]
    },
    {
        "name": "mud brown",
        "clean_name": "mudbrown",
        "hex": "#60460f",
        "rgb": [
            96,
            70,
            15
        ],
        "rgbf": [
            0.3765,
            0.2745,
            0.0588
        ]
    },
    {
        "name": "light sea green",
        "clean_name": "lightseagreen",
        "hex": "#98f6b0",
        "rgb": [
            152,
            246,
            176
        ],
        "rgbf": [
            0.5961,
            0.9647,
            0.6902
        ]
    },
    {
        "name": "robin egg blue",
        "clean_name": "robineggblue",
        "hex": "#8af1fe",
        "rgb": [
            138,
            241,
            254
        ],
        "rgbf": [
            0.5412,
            0.9451,
            0.9961
        ]
    },
    {
        "name": "aqua marine",
        "clean_name": "aquamarine",
        "hex": "#2ee8bb",
        "rgb": [
            46,
            232,
            187
        ],
        "rgbf": [
            0.1804,
            0.9098,
            0.7333
        ]
    },
    {
        "name": "dark sea green",
        "clean_name": "darkseagreen",
        "hex": "#11875d",
        "rgb": [
            17,
            135,
            93
        ],
        "rgbf": [
            0.0667,
            0.5294,
            0.3647
        ]
    },
    {
        "name": "soft pink",
        "clean_name": "softpink",
        "hex": "#fdb0c0",
        "rgb": [
            253,
            176,
            192
        ],
        "rgbf": [
            0.9922,
            0.6902,
            0.7529
        ]
    },
    {
        "name": "orangey brown",
        "clean_name": "orangeybrown",
        "hex": "#b16002",
        "rgb": [
            177,
            96,
            2
        ],
        "rgbf": [
            0.6941,
            0.3765,
            0.0078
        ]
    },
    {
        "name": "cherry red",
        "clean_name": "cherryred",
        "hex": "#f7022a",
        "rgb": [
            247,
            2,
            42
        ],
        "rgbf": [
            0.9686,
            0.0078,
            0.1647
        ]
    },
    {
        "name": "burnt yellow",
        "clean_name": "burntyellow",
        "hex": "#d5ab09",
        "rgb": [
            213,
            171,
            9
        ],
        "rgbf": [
            0.8353,
            0.6706,
            0.0353
        ]
    },
    {
        "name": "brownish grey",
        "clean_name": "brownishgrey",
        "hex": "#86775f",
        "rgb": [
            134,
            119,
            95
        ],
        "rgbf": [
            0.5255,
            0.4667,
            0.3725
        ]
    },
    {
        "name": "camel",
        "clean_name": "camel",
        "hex": "#c69f59",
        "rgb": [
            198,
            159,
            89
        ],
        "rgbf": [
            0.7765,
            0.6235,
            0.349
        ]
    },
    {
        "name": "purplish grey",
        "clean_name": "purplishgrey",
        "hex": "#7a687f",
        "rgb": [
            122,
            104,
            127
        ],
        "rgbf": [
            0.4784,
            0.4078,
            0.498
        ]
    },
    {
        "name": "marine",
        "clean_name": "marine",
        "hex": "#042e60",
        "rgb": [
            4,
            46,
            96
        ],
        "rgbf": [
            0.0157,
            0.1804,
            0.3765
        ]
    },
    {
        "name": "greyish pink",
        "clean_name": "greyishpink",
        "hex": "#c88d94",
        "rgb": [
            200,
            141,
            148
        ],
        "rgbf": [
            0.7843,
            0.5529,
            0.5804
        ]
    },
    {
        "name": "pale turquoise",
        "clean_name": "paleturquoise",
        "hex": "#a5fbd5",
        "rgb": [
            165,
            251,
            213
        ],
        "rgbf": [
            0.6471,
            0.9843,
            0.8353
        ]
    },
    {
        "name": "pastel yellow",
        "clean_name": "pastelyellow",
        "hex": "#fffe71",
        "rgb": [
            255,
            254,
            113
        ],
        "rgbf": [
            1.0,
            0.9961,
            0.4431
        ]
    },
    {
        "name": "bluey purple",
        "clean_name": "blueypurple",
        "hex": "#6241c7",
        "rgb": [
            98,
            65,
            199
        ],
        "rgbf": [
            0.3843,
            0.2549,
            0.7804
        ]
    },
    {
        "name": "canary yellow",
        "clean_name": "canaryyellow",
        "hex": "#fffe40",
        "rgb": [
            255,
            254,
            64
        ],
        "rgbf": [
            1.0,
            0.9961,
            0.251
        ]
    },
    {
        "name": "faded red",
        "clean_name": "fadedred",
        "hex": "#d3494e",
        "rgb": [
            211,
            73,
            78
        ],
        "rgbf": [
            0.8275,
            0.2863,
            0.3059
        ]
    },
    {
        "name": "sepia",
        "clean_name": "sepia",
        "hex": "#985e2b",
        "rgb": [
            152,
            94,
            43
        ],
        "rgbf": [
            0.5961,
            0.3686,
            0.1686
        ]
    },
    {
        "name": "coffee",
        "clean_name": "coffee",
        "hex": "#a6814c",
        "rgb": [
            166,
            129,
            76
        ],
        "rgbf": [
            0.651,
            0.5059,
            0.298
        ]
    },
    {
        "name": "bright magenta",
        "clean_name": "brightmagenta",
        "hex": "#ff08e8",
        "rgb": [
            255,
            8,
            232
        ],
        "rgbf": [
            1.0,
            0.0314,
            0.9098
        ]
    },
    {
        "name": "mocha",
        "clean_name": "mocha",
        "hex": "#9d7651",
        "rgb": [
            157,
            118,
            81
        ],
        "rgbf": [
            0.6157,
            0.4627,
            0.3176
        ]
    },
    {
        "name": "ecru",
        "clean_name": "ecru",
        "hex": "#feffca",
        "rgb": [
            254,
            255,
            202
        ],
        "rgbf": [
            0.9961,
            1.0,
            0.7922
        ]
    },
    {
        "name": "purpleish",
        "clean_name": "purpleish",
        "hex": "#98568d",
        "rgb": [
            152,
            86,
            141
        ],
        "rgbf": [
            0.5961,
            0.3373,
            0.5529
        ]
    },
    {
        "name": "cranberry",
        "clean_name": "cranberry",
        "hex": "#9e003a",
        "rgb": [
            158,
            0,
            58
        ],
        "rgbf": [
            0.6196,
            0.0,
            0.2275
        ]
    },
    {
        "name": "darkish green",
        "clean_name": "darkishgreen",
        "hex": "#287c37",
        "rgb": [
            40,
            124,
            55
        ],
        "rgbf": [
            0.1569,
            0.4863,
            0.2157
        ]
    },
    {
        "name": "brown orange",
        "clean_name": "brownorange",
        "hex": "#b96902",
        "rgb": [
            185,
            105,
            2
        ],
        "rgbf": [
            0.7255,
            0.4118,
            0.0078
        ]
    },
    {
        "name": "dusky rose",
        "clean_name": "duskyrose",
        "hex": "#ba6873",
        "rgb": [
            186,
            104,
            115
        ],
        "rgbf": [
            0.7294,
            0.4078,
            0.451
        ]
    },
    {
        "name": "melon",
        "clean_name": "melon",
        "hex": "#ff7855",
        "rgb": [
            255,
            120,
            85
        ],
        "rgbf": [
            1.0,
            0.4706,
            0.3333
        ]
    },
    {
        "name": "sickly green",
        "clean_name": "sicklygreen",
        "hex": "#94b21c",
        "rgb": [
            148,
            178,
            28
        ],
        "rgbf": [
            0.5804,
            0.698,
            0.1098
        ]
    },
    {
        "name": "silver",
        "clean_name": "silver",
        "hex": "#c5c9c7",
        "rgb": [
            197,
            201,
            199
        ],
        "rgbf": [
            0.7725,
            0.7882,
            0.7804
        ]
    },
    {
        "name": "purply blue",
        "clean_name": "purplyblue",
        "hex": "#661aee",
        "rgb": [
            102,
            26,
            238
        ],
        "rgbf": [
            0.4,
            0.102,
            0.9333
        ]
    },
    {
        "name": "purpleish blue",
        "clean_name": "purpleishblue",
        "hex": "#6140ef",
        "rgb": [
            97,
            64,
            239
        ],
        "rgbf": [
            0.3804,
            0.251,
            0.9373
        ]
    },
    {
        "name": "hospital green",
        "clean_name": "hospitalgreen",
        "hex": "#9be5aa",
        "rgb": [
            155,
            229,
            170
        ],
        "rgbf": [
            0.6078,
            0.898,
            0.6667
        ]
    },
    {
        "name": "shit brown",
        "clean_name": "shitbrown",
        "hex": "#7b5804",
        "rgb": [
            123,
            88,
            4
        ],
        "rgbf": [
            0.4824,
            0.3451,
            0.0157
        ]
    },
    {
        "name": "mid blue",
        "clean_name": "midblue",
        "hex": "#276ab3",
        "rgb": [
            39,
            106,
            179
        ],
        "rgbf": [
            0.1529,
            0.4157,
            0.702
        ]
    },
    {
        "name": "amber",
        "clean_name": "amber",
        "hex": "#feb308",
        "rgb": [
            254,
            179,
            8
        ],
        "rgbf": [
            0.9961,
            0.702,
            0.0314
        ]
    },
    {
        "name": "easter green",
        "clean_name": "eastergreen",
        "hex": "#8cfd7e",
        "rgb": [
            140,
            253,
            126
        ],
        "rgbf": [
            0.549,
            0.9922,
            0.4941
        ]
    },
    {
        "name": "soft blue",
        "clean_name": "softblue",
        "hex": "#6488ea",
        "rgb": [
            100,
            136,
            234
        ],
        "rgbf": [
            0.3922,
            0.5333,
            0.9176
        ]
    },
    {
        "name": "cerulean blue",
        "clean_name": "ceruleanblue",
        "hex": "#056eee",
        "rgb": [
            5,
            110,
            238
        ],
        "rgbf": [
            0.0196,
            0.4314,
            0.9333
        ]
    },
    {
        "name": "golden brown",
        "clean_name": "goldenbrown",
        "hex": "#b27a01",
        "rgb": [
            178,
            122,
            1
        ],
        "rgbf": [
            0.698,
            0.4784,
            0.0039
        ]
    },
    {
        "name": "bright turquoise",
        "clean_name": "brightturquoise",
        "hex": "#0ffef9",
        "rgb": [
            15,
            254,
            249
        ],
        "rgbf": [
            0.0588,
            0.9961,
            0.9765
        ]
    },
    {
        "name": "red pink",
        "clean_name": "redpink",
        "hex": "#fa2a55",
        "rgb": [
            250,
            42,
            85
        ],
        "rgbf": [
            0.9804,
            0.1647,
            0.3333
        ]
    },
    {
        "name": "red purple",
        "clean_name": "redpurple",
        "hex": "#820747",
        "rgb": [
            130,
            7,
            71
        ],
        "rgbf": [
            0.5098,
            0.0275,
            0.2784
        ]
    },
    {
        "name": "greyish brown",
        "clean_name": "greyishbrown",
        "hex": "#7a6a4f",
        "rgb": [
            122,
            106,
            79
        ],
        "rgbf": [
            0.4784,
            0.4157,
            0.3098
        ]
    },
    {
        "name": "vermillion",
        "clean_name": "vermillion",
        "hex": "#f4320c",
        "rgb": [
            244,
            50,
            12
        ],
        "rgbf": [
            0.9569,
            0.1961,
            0.0471
        ]
    },
    {
        "name": "russet",
        "clean_name": "russet",
        "hex": "#a13905",
        "rgb": [
            161,
            57,
            5
        ],
        "rgbf": [
            0.6314,
            0.2235,
            0.0196
        ]
    },
    {
        "name": "steel grey",
        "clean_name": "steelgrey",
        "hex": "#6f828a",
        "rgb": [
            111,
            130,
            138
        ],
        "rgbf": [
            0.4353,
            0.5098,
            0.5412
        ]
    },
    {
        "name": "lighter purple",
        "clean_name": "lighterpurple",
        "hex": "#a55af4",
        "rgb": [
            165,
            90,
            244
        ],
        "rgbf": [
            0.6471,
            0.3529,
            0.9569
        ]
    },
    {
        "name": "bright violet",
        "clean_name": "brightviolet",
        "hex": "#ad0afd",
        "rgb": [
            173,
            10,
            253
        ],
        "rgbf": [
            0.6784,
            0.0392,
            0.9922
        ]
    },
    {
        "name": "prussian blue",
        "clean_name": "prussianblue",
        "hex": "#004577",
        "rgb": [
            0,
            69,
            119
        ],
        "rgbf": [
            0.0,
            0.2706,
            0.4667
        ]
    },
    {
        "name": "slate green",
        "clean_name": "slategreen",
        "hex": "#658d6d",
        "rgb": [
            101,
            141,
            109
        ],
        "rgbf": [
            0.3961,
            0.5529,
            0.4275
        ]
    },
    {
        "name": "dirty pink",
        "clean_name": "dirtypink",
        "hex": "#ca7b80",
        "rgb": [
            202,
            123,
            128
        ],
        "rgbf": [
            0.7922,
            0.4824,
            0.502
        ]
    },
    {
        "name": "dark blue green",
        "clean_name": "darkbluegreen",
        "hex": "#005249",
        "rgb": [
            0,
            82,
            73
        ],
        "rgbf": [
            0.0,
            0.3216,
            0.2863
        ]
    },
    {
        "name": "pine",
        "clean_name": "pine",
        "hex": "#2b5d34",
        "rgb": [
            43,
            93,
            52
        ],
        "rgbf": [
            0.1686,
            0.3647,
            0.2039
        ]
    },
    {
        "name": "yellowy green",
        "clean_name": "yellowygreen",
        "hex": "#bff128",
        "rgb": [
            191,
            241,
            40
        ],
        "rgbf": [
            0.749,
            0.9451,
            0.1569
        ]
    },
    {
        "name": "dark gold",
        "clean_name": "darkgold",
        "hex": "#b59410",
        "rgb": [
            181,
            148,
            16
        ],
        "rgbf": [
            0.7098,
            0.5804,
            0.0627
        ]
    },
    {
        "name": "bluish",
        "clean_name": "bluish",
        "hex": "#2976bb",
        "rgb": [
            41,
            118,
            187
        ],
        "rgbf": [
            0.1608,
            0.4627,
            0.7333
        ]
    },
    {
        "name": "darkish blue",
        "clean_name": "darkishblue",
        "hex": "#014182",
        "rgb": [
            1,
            65,
            130
        ],
        "rgbf": [
            0.0039,
            0.2549,
            0.5098
        ]
    },
    {
        "name": "dull red",
        "clean_name": "dullred",
        "hex": "#bb3f3f",
        "rgb": [
            187,
            63,
            63
        ],
        "rgbf": [
            0.7333,
            0.2471,
            0.2471
        ]
    },
    {
        "name": "pinky red",
        "clean_name": "pinkyred",
        "hex": "#fc2647",
        "rgb": [
            252,
            38,
            71
        ],
        "rgbf": [
            0.9882,
            0.149,
            0.2784
        ]
    },
    {
        "name": "bronze",
        "clean_name": "bronze",
        "hex": "#a87900",
        "rgb": [
            168,
            121,
            0
        ],
        "rgbf": [
            0.6588,
            0.4745,
            0.0
        ]
    },
    {
        "name": "pale teal",
        "clean_name": "paleteal",
        "hex": "#82cbb2",
        "rgb": [
            130,
            203,
            178
        ],
        "rgbf": [
            0.5098,
            0.7961,
            0.698
        ]
    },
    {
        "name": "military green",
        "clean_name": "militarygreen",
        "hex": "#667c3e",
        "rgb": [
            102,
            124,
            62
        ],
        "rgbf": [
            0.4,
            0.4863,
            0.2431
        ]
    },
    {
        "name": "barbie pink",
        "clean_name": "barbiepink",
        "hex": "#fe46a5",
        "rgb": [
            254,
            70,
            165
        ],
        "rgbf": [
            0.9961,
            0.2745,
            0.6471
        ]
    },
    {
        "name": "bubblegum pink",
        "clean_name": "bubblegumpink",
        "hex": "#fe83cc",
        "rgb": [
            254,
            131,
            204
        ],
        "rgbf": [
            0.9961,
            0.5137,
            0.8
        ]
    },
    {
        "name": "pea soup green",
        "clean_name": "peasoupgreen",
        "hex": "#94a617",
        "rgb": [
            148,
            166,
            23
        ],
        "rgbf": [
            0.5804,
            0.651,
            0.0902
        ]
    },
    {
        "name": "dark mustard",
        "clean_name": "darkmustard",
        "hex": "#a88905",
        "rgb": [
            168,
            137,
            5
        ],
        "rgbf": [
            0.6588,
            0.5373,
            0.0196
        ]
    },
    {
        "name": "shit",
        "clean_name": "shit",
        "hex": "#7f5f00",
        "rgb": [
            127,
            95,
            0
        ],
        "rgbf": [
            0.498,
            0.3725,
            0.0
        ]
    },
    {
        "name": "medium purple",
        "clean_name": "mediumpurple",
        "hex": "#9e43a2",
        "rgb": [
            158,
            67,
            162
        ],
        "rgbf": [
            0.6196,
            0.2627,
            0.6353
        ]
    },
    {
        "name": "very dark green",
        "clean_name": "verydarkgreen",
        "hex": "#062e03",
        "rgb": [
            6,
            46,
            3
        ],
        "rgbf": [
            0.0235,
            0.1804,
            0.0118
        ]
    },
    {
        "name": "dirt",
        "clean_name": "dirt",
        "hex": "#8a6e45",
        "rgb": [
            138,
            110,
            69
        ],
        "rgbf": [
            0.5412,
            0.4314,
            0.2706
        ]
    },
    {
        "name": "dusky pink",
        "clean_name": "duskypink",
        "hex": "#cc7a8b",
        "rgb": [
            204,
            122,
            139
        ],
        "rgbf": [
            0.8,
            0.4784,
            0.5451
        ]
    },
    {
        "name": "red violet",
        "clean_name": "redviolet",
        "hex": "#9e0168",
        "rgb": [
            158,
            1,
            104
        ],
        "rgbf": [
            0.6196,
            0.0039,
            0.4078
        ]
    },
    {
        "name": "lemon yellow",
        "clean_name": "lemonyellow",
        "hex": "#fdff38",
        "rgb": [
            253,
            255,
            56
        ],
        "rgbf": [
            0.9922,
            1.0,
            0.2196
        ]
    },
    {
        "name": "pistachio",
        "clean_name": "pistachio",
        "hex": "#c0fa8b",
        "rgb": [
            192,
            250,
            139
        ],
        "rgbf": [
            0.7529,
            0.9804,
            0.5451
        ]
    },
    {
        "name": "dull yellow",
        "clean_name": "dullyellow",
        "hex": "#eedc5b",
        "rgb": [
            238,
            220,
            91
        ],
        "rgbf": [
            0.9333,
            0.8627,
            0.3569
        ]
    },
    {
        "name": "dark lime green",
        "clean_name": "darklimegreen",
        "hex": "#7ebd01",
        "rgb": [
            126,
            189,
            1
        ],
        "rgbf": [
            0.4941,
            0.7412,
            0.0039
        ]
    },
    {
        "name": "denim blue",
        "clean_name": "denimblue",
        "hex": "#3b5b92",
        "rgb": [
            59,
            91,
            146
        ],
        "rgbf": [
            0.2314,
            0.3569,
            0.5725
        ]
    },
    {
        "name": "teal blue",
        "clean_name": "tealblue",
        "hex": "#01889f",
        "rgb": [
            1,
            136,
            159
        ],
        "rgbf": [
            0.0039,
            0.5333,
            0.6235
        ]
    },
    {
        "name": "lightish blue",
        "clean_name": "lightishblue",
        "hex": "#3d7afd",
        "rgb": [
            61,
            122,
            253
        ],
        "rgbf": [
            0.2392,
            0.4784,
            0.9922
        ]
    },
    {
        "name": "purpley blue",
        "clean_name": "purpleyblue",
        "hex": "#5f34e7",
        "rgb": [
            95,
            52,
            231
        ],
        "rgbf": [
            0.3725,
            0.2039,
            0.9059
        ]
    },
    {
        "name": "light indigo",
        "clean_name": "lightindigo",
        "hex": "#6d5acf",
        "rgb": [
            109,
            90,
            207
        ],
        "rgbf": [
            0.4275,
            0.3529,
            0.8118
        ]
    },
    {
        "name": "swamp green",
        "clean_name": "swampgreen",
        "hex": "#748500",
        "rgb": [
            116,
            133,
            0
        ],
        "rgbf": [
            0.4549,
            0.5216,
            0.0
        ]
    },
    {
        "name": "brown green",
        "clean_name": "browngreen",
        "hex": "#706c11",
        "rgb": [
            112,
            108,
            17
        ],
        "rgbf": [
            0.4392,
            0.4235,
            0.0667
        ]
    },
    {
        "name": "dark maroon",
        "clean_name": "darkmaroon",
        "hex": "#3c0008",
        "rgb": [
            60,
            0,
            8
        ],
        "rgbf": [
            0.2353,
            0.0,
            0.0314
        ]
    },
    {
        "name": "hot purple",
        "clean_name": "hotpurple",
        "hex": "#cb00f5",
        "rgb": [
            203,
            0,
            245
        ],
        "rgbf": [
            0.7961,
            0.0,
            0.9608
        ]
    },
    {
        "name": "dark forest green",
        "clean_name": "darkforestgreen",
        "hex": "#002d04",
        "rgb": [
            0,
            45,
            4
        ],
        "rgbf": [
            0.0,
            0.1765,
            0.0157
        ]
    },
    {
        "name": "faded blue",
        "clean_name": "fadedblue",
        "hex": "#658cbb",
        "rgb": [
            101,
            140,
            187
        ],
        "rgbf": [
            0.3961,
            0.549,
            0.7333
        ]
    },
    {
        "name": "drab green",
        "clean_name": "drabgreen",
        "hex": "#749551",
        "rgb": [
            116,
            149,
            81
        ],
        "rgbf": [
            0.4549,
            0.5843,
            0.3176
        ]
    },
    {
        "name": "light lime green",
        "clean_name": "lightlimegreen",
        "hex": "#b9ff66",
        "rgb": [
            185,
            255,
            102
        ],
        "rgbf": [
            0.7255,
            1.0,
            0.4
        ]
    },
    {
        "name": "snot green",
        "clean_name": "snotgreen",
        "hex": "#9dc100",
        "rgb": [
            157,
            193,
            0
        ],
        "rgbf": [
            0.6157,
            0.7569,
            0.0
        ]
    },
    {
        "name": "yellowish",
        "clean_name": "yellowish",
        "hex": "#faee66",
        "rgb": [
            250,
            238,
            102
        ],
        "rgbf": [
            0.9804,
            0.9333,
            0.4
        ]
    },
    {
        "name": "light blue green",
        "clean_name": "lightbluegreen",
        "hex": "#7efbb3",
        "rgb": [
            126,
            251,
            179
        ],
        "rgbf": [
            0.4941,
            0.9843,
            0.702
        ]
    },
    {
        "name": "bordeaux",
        "clean_name": "bordeaux",
        "hex": "#7b002c",
        "rgb": [
            123,
            0,
            44
        ],
        "rgbf": [
            0.4824,
            0.0,
            0.1725
        ]
    },
    {
        "name": "light mauve",
        "clean_name": "lightmauve",
        "hex": "#c292a1",
        "rgb": [
            194,
            146,
            161
        ],
        "rgbf": [
            0.7608,
            0.5725,
            0.6314
        ]
    },
    {
        "name": "ocean",
        "clean_name": "ocean",
        "hex": "#017b92",
        "rgb": [
            1,
            123,
            146
        ],
        "rgbf": [
            0.0039,
            0.4824,
            0.5725
        ]
    },
    {
        "name": "marigold",
        "clean_name": "marigold",
        "hex": "#fcc006",
        "rgb": [
            252,
            192,
            6
        ],
        "rgbf": [
            0.9882,
            0.7529,
            0.0235
        ]
    },
    {
        "name": "muddy green",
        "clean_name": "muddygreen",
        "hex": "#657432",
        "rgb": [
            101,
            116,
            50
        ],
        "rgbf": [
            0.3961,
            0.4549,
            0.1961
        ]
    },
    {
        "name": "dull orange",
        "clean_name": "dullorange",
        "hex": "#d8863b",
        "rgb": [
            216,
            134,
            59
        ],
        "rgbf": [
            0.8471,
            0.5255,
            0.2314
        ]
    },
    {
        "name": "steel",
        "clean_name": "steel",
        "hex": "#738595",
        "rgb": [
            115,
            133,
            149
        ],
        "rgbf": [
            0.451,
            0.5216,
            0.5843
        ]
    },
    {
        "name": "electric purple",
        "clean_name": "electricpurple",
        "hex": "#aa23ff",
        "rgb": [
            170,
            35,
            255
        ],
        "rgbf": [
            0.6667,
            0.1373,
            1.0
        ]
    },
    {
        "name": "fluorescent green",
        "clean_name": "fluorescentgreen",
        "hex": "#08ff08",
        "rgb": [
            8,
            255,
            8
        ],
        "rgbf": [
            0.0314,
            1.0,
            0.0314
        ]
    },
    {
        "name": "yellowish brown",
        "clean_name": "yellowishbrown",
        "hex": "#9b7a01",
        "rgb": [
            155,
            122,
            1
        ],
        "rgbf": [
            0.6078,
            0.4784,
            0.0039
        ]
    },
    {
        "name": "blush",
        "clean_name": "blush",
        "hex": "#f29e8e",
        "rgb": [
            242,
            158,
            142
        ],
        "rgbf": [
            0.949,
            0.6196,
            0.5569
        ]
    },
    {
        "name": "soft green",
        "clean_name": "softgreen",
        "hex": "#6fc276",
        "rgb": [
            111,
            194,
            118
        ],
        "rgbf": [
            0.4353,
            0.7608,
            0.4627
        ]
    },
    {
        "name": "bright orange",
        "clean_name": "brightorange",
        "hex": "#ff5b00",
        "rgb": [
            255,
            91,
            0
        ],
        "rgbf": [
            1.0,
            0.3569,
            0.0
        ]
    },
    {
        "name": "lemon",
        "clean_name": "lemon",
        "hex": "#fdff52",
        "rgb": [
            253,
            255,
            82
        ],
        "rgbf": [
            0.9922,
            1.0,
            0.3216
        ]
    },
    {
        "name": "purple grey",
        "clean_name": "purplegrey",
        "hex": "#866f85",
        "rgb": [
            134,
            111,
            133
        ],
        "rgbf": [
            0.5255,
            0.4353,
            0.5216
        ]
    },
    {
        "name": "acid green",
        "clean_name": "acidgreen",
        "hex": "#8ffe09",
        "rgb": [
            143,
            254,
            9
        ],
        "rgbf": [
            0.5608,
            0.9961,
            0.0353
        ]
    },
    {
        "name": "pale lavender",
        "clean_name": "palelavender",
        "hex": "#eecffe",
        "rgb": [
            238,
            207,
            254
        ],
        "rgbf": [
            0.9333,
            0.8118,
            0.9961
        ]
    },
    {
        "name": "violet blue",
        "clean_name": "violetblue",
        "hex": "#510ac9",
        "rgb": [
            81,
            10,
            201
        ],
        "rgbf": [
            0.3176,
            0.0392,
            0.7882
        ]
    },
    {
        "name": "light forest green",
        "clean_name": "lightforestgreen",
        "hex": "#4f9153",
        "rgb": [
            79,
            145,
            83
        ],
        "rgbf": [
            0.3098,
            0.5686,
            0.3255
        ]
    },
    {
        "name": "burnt red",
        "clean_name": "burntred",
        "hex": "#9f2305",
        "rgb": [
            159,
            35,
            5
        ],
        "rgbf": [
            0.6235,
            0.1373,
            0.0196
        ]
    },
    {
        "name": "khaki green",
        "clean_name": "khakigreen",
        "hex": "#728639",
        "rgb": [
            114,
            134,
            57
        ],
        "rgbf": [
            0.4471,
            0.5255,
            0.2235
        ]
    },
    {
        "name": "cerise",
        "clean_name": "cerise",
        "hex": "#de0c62",
        "rgb": [
            222,
            12,
            98
        ],
        "rgbf": [
            0.8706,
            0.0471,
            0.3843
        ]
    },
    {
        "name": "faded purple",
        "clean_name": "fadedpurple",
        "hex": "#916e99",
        "rgb": [
            145,
            110,
            153
        ],
        "rgbf": [
            0.5686,
            0.4314,
            0.6
        ]
    },
    {
        "name": "apricot",
        "clean_name": "apricot",
        "hex": "#ffb16d",
        "rgb": [
            255,
            177,
            109
        ],
        "rgbf": [
            1.0,
            0.6941,
            0.4275
        ]
    },
    {
        "name": "dark olive green",
        "clean_name": "darkolivegreen",
        "hex": "#3c4d03",
        "rgb": [
            60,
            77,
            3
        ],
        "rgbf": [
            0.2353,
            0.302,
            0.0118
        ]
    },
    {
        "name": "grey brown",
        "clean_name": "greybrown",
        "hex": "#7f7053",
        "rgb": [
            127,
            112,
            83
        ],
        "rgbf": [
            0.498,
            0.4392,
            0.3255
        ]
    },
    {
        "name": "green grey",
        "clean_name": "greengrey",
        "hex": "#77926f",
        "rgb": [
            119,
            146,
            111
        ],
        "rgbf": [
            0.4667,
            0.5725,
            0.4353
        ]
    },
    {
        "name": "true blue",
        "clean_name": "trueblue",
        "hex": "#010fcc",
        "rgb": [
            1,
            15,
            204
        ],
        "rgbf": [
            0.0039,
            0.0588,
            0.8
        ]
    },
    {
        "name": "pale violet",
        "clean_name": "paleviolet",
        "hex": "#ceaefa",
        "rgb": [
            206,
            174,
            250
        ],
        "rgbf": [
            0.8078,
            0.6824,
            0.9804
        ]
    },
    {
        "name": "periwinkle blue",
        "clean_name": "periwinkleblue",
        "hex": "#8f99fb",
        "rgb": [
            143,
            153,
            251
        ],
        "rgbf": [
            0.5608,
            0.6,
            0.9843
        ]
    },
    {
        "name": "light sky blue",
        "clean_name": "lightskyblue",
        "hex": "#c6fcff",
        "rgb": [
            198,
            252,
            255
        ],
        "rgbf": [
            0.7765,
            0.9882,
            1.0
        ]
    },
    {
        "name": "blurple",
        "clean_name": "blurple",
        "hex": "#5539cc",
        "rgb": [
            85,
            57,
            204
        ],
        "rgbf": [
            0.3333,
            0.2235,
            0.8
        ]
    },
    {
        "name": "green brown",
        "clean_name": "greenbrown",
        "hex": "#544e03",
        "rgb": [
            84,
            78,
            3
        ],
        "rgbf": [
            0.3294,
            0.3059,
            0.0118
        ]
    },
    {
        "name": "bluegreen",
        "clean_name": "bluegreen",
        "hex": "#017a79",
        "rgb": [
            1,
            122,
            121
        ],
        "rgbf": [
            0.0039,
            0.4784,
            0.4745
        ]
    },
    {
        "name": "bright teal",
        "clean_name": "brightteal",
        "hex": "#01f9c6",
        "rgb": [
            1,
            249,
            198
        ],
        "rgbf": [
            0.0039,
            0.9765,
            0.7765
        ]
    },
    {
        "name": "brownish yellow",
        "clean_name": "brownishyellow",
        "hex": "#c9b003",
        "rgb": [
            201,
            176,
            3
        ],
        "rgbf": [
            0.7882,
            0.6902,
            0.0118
        ]
    },
    {
        "name": "pea soup",
        "clean_name": "peasoup",
        "hex": "#929901",
        "rgb": [
            146,
            153,
            1
        ],
        "rgbf": [
            0.5725,
            0.6,
            0.0039
        ]
    },
    {
        "name": "forest",
        "clean_name": "forest",
        "hex": "#0b5509",
        "rgb": [
            11,
            85,
            9
        ],
        "rgbf": [
            0.0431,
            0.3333,
            0.0353
        ]
    },
    {
        "name": "barney purple",
        "clean_name": "barneypurple",
        "hex": "#a00498",
        "rgb": [
            160,
            4,
            152
        ],
        "rgbf": [
            0.6275,
            0.0157,
            0.5961
        ]
    },
    {
        "name": "ultramarine",
        "clean_name": "ultramarine",
        "hex": "#2000b1",
        "rgb": [
            32,
            0,
            177
        ],
        "rgbf": [
            0.1255,
            0.0,
            0.6941
        ]
    },
    {
        "name": "purplish",
        "clean_name": "purplish",
        "hex": "#94568c",
        "rgb": [
            148,
            86,
            140
        ],
        "rgbf": [
            0.5804,
            0.3373,
            0.549
        ]
    },
    {
        "name": "puke yellow",
        "clean_name": "pukeyellow",
        "hex": "#c2be0e",
        "rgb": [
            194,
            190,
            14
        ],
        "rgbf": [
            0.7608,
            0.7451,
            0.0549
        ]
    },
    {
        "name": "bluish grey",
        "clean_name": "bluishgrey",
        "hex": "#748b97",
        "rgb": [
            116,
            139,
            151
        ],
        "rgbf": [
            0.4549,
            0.5451,
            0.5922
        ]
    },
    {
        "name": "dark periwinkle",
        "clean_name": "darkperiwinkle",
        "hex": "#665fd1",
        "rgb": [
            102,
            95,
            209
        ],
        "rgbf": [
            0.4,
            0.3725,
            0.8196
        ]
    },
    {
        "name": "dark lilac",
        "clean_name": "darklilac",
        "hex": "#9c6da5",
        "rgb": [
            156,
            109,
            165
        ],
        "rgbf": [
            0.6118,
            0.4275,
            0.6471
        ]
    },
    {
        "name": "reddish",
        "clean_name": "reddish",
        "hex": "#c44240",
        "rgb": [
            196,
            66,
            64
        ],
        "rgbf": [
            0.7686,
            0.2588,
            0.251
        ]
    },
    {
        "name": "light maroon",
        "clean_name": "lightmaroon",
        "hex": "#a24857",
        "rgb": [
            162,
            72,
            87
        ],
        "rgbf": [
            0.6353,
            0.2824,
            0.3412
        ]
    },
    {
        "name": "dusty purple",
        "clean_name": "dustypurple",
        "hex": "#825f87",
        "rgb": [
            130,
            95,
            135
        ],
        "rgbf": [
            0.5098,
            0.3725,
            0.5294
        ]
    },
    {
        "name": "terra cotta",
        "clean_name": "terracotta",
        "hex": "#c9643b",
        "rgb": [
            201,
            100,
            59
        ],
        "rgbf": [
            0.7882,
            0.3922,
            0.2314
        ]
    },
    {
        "name": "avocado",
        "clean_name": "avocado",
        "hex": "#90b134",
        "rgb": [
            144,
            177,
            52
        ],
        "rgbf": [
            0.5647,
            0.6941,
            0.2039
        ]
    },
    {
        "name": "marine blue",
        "clean_name": "marineblue",
        "hex": "#01386a",
        "rgb": [
            1,
            56,
            106
        ],
        "rgbf": [
            0.0039,
            0.2196,
            0.4157
        ]
    },
    {
        "name": "teal green",
        "clean_name": "tealgreen",
        "hex": "#25a36f",
        "rgb": [
            37,
            163,
            111
        ],
        "rgbf": [
            0.1451,
            0.6392,
            0.4353
        ]
    },
    {
        "name": "slate grey",
        "clean_name": "slategrey",
        "hex": "#59656d",
        "rgb": [
            89,
            101,
            109
        ],
        "rgbf": [
            0.349,
            0.3961,
            0.4275
        ]
    },
    {
        "name": "lighter green",
        "clean_name": "lightergreen",
        "hex": "#75fd63",
        "rgb": [
            117,
            253,
            99
        ],
        "rgbf": [
            0.4588,
            0.9922,
            0.3882
        ]
    },
    {
        "name": "electric green",
        "clean_name": "electricgreen",
        "hex": "#21fc0d",
        "rgb": [
            33,
            252,
            13
        ],
        "rgbf": [
            0.1294,
            0.9882,
            0.051
        ]
    },
    {
        "name": "dusty blue",
        "clean_name": "dustyblue",
        "hex": "#5a86ad",
        "rgb": [
            90,
            134,
            173
        ],
        "rgbf": [
            0.3529,
            0.5255,
            0.6784
        ]
    },
    {
        "name": "golden yellow",
        "clean_name": "goldenyellow",
        "hex": "#fec615",
        "rgb": [
            254,
            198,
            21
        ],
        "rgbf": [
            0.9961,
            0.7765,
            0.0824
        ]
    },
    {
        "name": "bright yellow",
        "clean_name": "brightyellow",
        "hex": "#fffd01",
        "rgb": [
            255,
            253,
            1
        ],
        "rgbf": [
            1.0,
            0.9922,
            0.0039
        ]
    },
    {
        "name": "light lavender",
        "clean_name": "lightlavender",
        "hex": "#dfc5fe",
        "rgb": [
            223,
            197,
            254
        ],
        "rgbf": [
            0.8745,
            0.7725,
            0.9961
        ]
    },
    {
        "name": "umber",
        "clean_name": "umber",
        "hex": "#b26400",
        "rgb": [
            178,
            100,
            0
        ],
        "rgbf": [
            0.698,
            0.3922,
            0.0
        ]
    },
    {
        "name": "poop",
        "clean_name": "poop",
        "hex": "#7f5e00",
        "rgb": [
            127,
            94,
            0
        ],
        "rgbf": [
            0.498,
            0.3686,
            0.0
        ]
    },
    {
        "name": "dark peach",
        "clean_name": "darkpeach",
        "hex": "#de7e5d",
        "rgb": [
            222,
            126,
            93
        ],
        "rgbf": [
            0.8706,
            0.4941,
            0.3647
        ]
    },
    {
        "name": "jungle green",
        "clean_name": "junglegreen",
        "hex": "#048243",
        "rgb": [
            4,
            130,
            67
        ],
        "rgbf": [
            0.0157,
            0.5098,
            0.2627
        ]
    },
    {
        "name": "eggshell",
        "clean_name": "eggshell",
        "hex": "#ffffd4",
        "rgb": [
            255,
            255,
            212
        ],
        "rgbf": [
            1.0,
            1.0,
            0.8314
        ]
    },
    {
        "name": "denim",
        "clean_name": "denim",
        "hex": "#3b638c",
        "rgb": [
            59,
            99,
            140
        ],
        "rgbf": [
            0.2314,
            0.3882,
            0.549
        ]
    },
    {
        "name": "yellow brown",
        "clean_name": "yellowbrown",
        "hex": "#b79400",
        "rgb": [
            183,
            148,
            0
        ],
        "rgbf": [
            0.7176,
            0.5804,
            0.0
        ]
    },
    {
        "name": "dull purple",
        "clean_name": "dullpurple",
        "hex": "#84597e",
        "rgb": [
            132,
            89,
            126
        ],
        "rgbf": [
            0.5176,
            0.349,
            0.4941
        ]
    },
    {
        "name": "chocolate brown",
        "clean_name": "chocolatebrown",
        "hex": "#411900",
        "rgb": [
            65,
            25,
            0
        ],
        "rgbf": [
            0.2549,
            0.098,
            0.0
        ]
    },
    {
        "name": "wine red",
        "clean_name": "winered",
        "hex": "#7b0323",
        "rgb": [
            123,
            3,
            35
        ],
        "rgbf": [
            0.4824,
            0.0118,
            0.1373
        ]
    },
    {
        "name": "neon blue",
        "clean_name": "neonblue",
        "hex": "#04d9ff",
        "rgb": [
            4,
            217,
            255
        ],
        "rgbf": [
            0.0157,
            0.851,
            1.0
        ]
    },
    {
        "name": "dirty green",
        "clean_name": "dirtygreen",
        "hex": "#667e2c",
        "rgb": [
            102,
            126,
            44
        ],
        "rgbf": [
            0.4,
            0.4941,
            0.1725
        ]
    },
    {
        "name": "light tan",
        "clean_name": "lighttan",
        "hex": "#fbeeac",
        "rgb": [
            251,
            238,
            172
        ],
        "rgbf": [
            0.9843,
            0.9333,
            0.6745
        ]
    },
    {
        "name": "ice blue",
        "clean_name": "iceblue",
        "hex": "#d7fffe",
        "rgb": [
            215,
            255,
            254
        ],
        "rgbf": [
            0.8431,
            1.0,
            0.9961
        ]
    },
    {
        "name": "cadet blue",
        "clean_name": "cadetblue",
        "hex": "#4e7496",
        "rgb": [
            78,
            116,
            150
        ],
        "rgbf": [
            0.3059,
            0.4549,
            0.5882
        ]
    },
    {
        "name": "dark mauve",
        "clean_name": "darkmauve",
        "hex": "#874c62",
        "rgb": [
            135,
            76,
            98
        ],
        "rgbf": [
            0.5294,
            0.298,
            0.3843
        ]
    },
    {
        "name": "very light blue",
        "clean_name": "verylightblue",
        "hex": "#d5ffff",
        "rgb": [
            213,
            255,
            255
        ],
        "rgbf": [
            0.8353,
            1.0,
            1.0
        ]
    },
    {
        "name": "grey purple",
        "clean_name": "greypurple",
        "hex": "#826d8c",
        "rgb": [
            130,
            109,
            140
        ],
        "rgbf": [
            0.5098,
            0.4275,
            0.549
        ]
    },
    {
        "name": "pastel pink",
        "clean_name": "pastelpink",
        "hex": "#ffbacd",
        "rgb": [
            255,
            186,
            205
        ],
        "rgbf": [
            1.0,
            0.7294,
            0.8039
        ]
    },
    {
        "name": "very light green",
        "clean_name": "verylightgreen",
        "hex": "#d1ffbd",
        "rgb": [
            209,
            255,
            189
        ],
        "rgbf": [
            0.8196,
            1.0,
            0.7412
        ]
    },
    {
        "name": "dark sky blue",
        "clean_name": "darkskyblue",
        "hex": "#448ee4",
        "rgb": [
            68,
            142,
            228
        ],
        "rgbf": [
            0.2667,
            0.5569,
            0.8941
        ]
    },
    {
        "name": "evergreen",
        "clean_name": "evergreen",
        "hex": "#05472a",
        "rgb": [
            5,
            71,
            42
        ],
        "rgbf": [
            0.0196,
            0.2784,
            0.1647
        ]
    },
    {
        "name": "dull pink",
        "clean_name": "dullpink",
        "hex": "#d5869d",
        "rgb": [
            213,
            134,
            157
        ],
        "rgbf": [
            0.8353,
            0.5255,
            0.6157
        ]
    },
    {
        "name": "aubergine",
        "clean_name": "aubergine",
        "hex": "#3d0734",
        "rgb": [
            61,
            7,
            52
        ],
        "rgbf": [
            0.2392,
            0.0275,
            0.2039
        ]
    },
    {
        "name": "mahogany",
        "clean_name": "mahogany",
        "hex": "#4a0100",
        "rgb": [
            74,
            1,
            0
        ],
        "rgbf": [
            0.2902,
            0.0039,
            0.0
        ]
    },
    {
        "name": "reddish orange",
        "clean_name": "reddishorange",
        "hex": "#f8481c",
        "rgb": [
            248,
            72,
            28
        ],
        "rgbf": [
            0.9725,
            0.2824,
            0.1098
        ]
    },
    {
        "name": "deep green",
        "clean_name": "deepgreen",
        "hex": "#02590f",
        "rgb": [
            2,
            89,
            15
        ],
        "rgbf": [
            0.0078,
            0.349,
            0.0588
        ]
    },
    {
        "name": "vomit green",
        "clean_name": "vomitgreen",
        "hex": "#89a203",
        "rgb": [
            137,
            162,
            3
        ],
        "rgbf": [
            0.5373,
            0.6353,
            0.0118
        ]
    },
    {
        "name": "purple pink",
        "clean_name": "purplepink",
        "hex": "#e03fd8",
        "rgb": [
            224,
            63,
            216
        ],
        "rgbf": [
            0.8784,
            0.2471,
            0.8471
        ]
    },
    {
        "name": "dusty pink",
        "clean_name": "dustypink",
        "hex": "#d58a94",
        "rgb": [
            213,
            138,
            148
        ],
        "rgbf": [
            0.8353,
            0.5412,
            0.5804
        ]
    },
    {
        "name": "faded green",
        "clean_name": "fadedgreen",
        "hex": "#7bb274",
        "rgb": [
            123,
            178,
            116
        ],
        "rgbf": [
            0.4824,
            0.698,
            0.4549
        ]
    },
    {
        "name": "camo green",
        "clean_name": "camogreen",
        "hex": "#526525",
        "rgb": [
            82,
            101,
            37
        ],
        "rgbf": [
            0.3216,
            0.3961,
            0.1451
        ]
    },
    {
        "name": "pinky purple",
        "clean_name": "pinkypurple",
        "hex": "#c94cbe",
        "rgb": [
            201,
            76,
            190
        ],
        "rgbf": [
            0.7882,
            0.298,
            0.7451
        ]
    },
    {
        "name": "pink purple",
        "clean_name": "pinkpurple",
        "hex": "#db4bda",
        "rgb": [
            219,
            75,
            218
        ],
        "rgbf": [
            0.8588,
            0.2941,
            0.8549
        ]
    },
    {
        "name": "brownish red",
        "clean_name": "brownishred",
        "hex": "#9e3623",
        "rgb": [
            158,
            54,
            35
        ],
        "rgbf": [
            0.6196,
            0.2118,
            0.1373
        ]
    },
    {
        "name": "dark rose",
        "clean_name": "darkrose",
        "hex": "#b5485d",
        "rgb": [
            181,
            72,
            93
        ],
        "rgbf": [
            0.7098,
            0.2824,
            0.3647
        ]
    },
    {
        "name": "mud",
        "clean_name": "mud",
        "hex": "#735c12",
        "rgb": [
            115,
            92,
            18
        ],
        "rgbf": [
            0.451,
            0.3608,
            0.0706
        ]
    },
    {
        "name": "brownish",
        "clean_name": "brownish",
        "hex": "#9c6d57",
        "rgb": [
            156,
            109,
            87
        ],
        "rgbf": [
            0.6118,
            0.4275,
            0.3412
        ]
    },
    {
        "name": "emerald green",
        "clean_name": "emeraldgreen",
        "hex": "#028f1e",
        "rgb": [
            2,
            143,
            30
        ],
        "rgbf": [
            0.0078,
            0.5608,
            0.1176
        ]
    },
    {
        "name": "pale brown",
        "clean_name": "palebrown",
        "hex": "#b1916e",
        "rgb": [
            177,
            145,
            110
        ],
        "rgbf": [
            0.6941,
            0.5686,
            0.4314
        ]
    },
    {
        "name": "dull blue",
        "clean_name": "dullblue",
        "hex": "#49759c",
        "rgb": [
            73,
            117,
            156
        ],
        "rgbf": [
            0.2863,
            0.4588,
            0.6118
        ]
    },
    {
        "name": "burnt umber",
        "clean_name": "burntumber",
        "hex": "#a0450e",
        "rgb": [
            160,
            69,
            14
        ],
        "rgbf": [
            0.6275,
            0.2706,
            0.0549
        ]
    },
    {
        "name": "medium green",
        "clean_name": "mediumgreen",
        "hex": "#39ad48",
        "rgb": [
            57,
            173,
            72
        ],
        "rgbf": [
            0.2235,
            0.6784,
            0.2824
        ]
    },
    {
        "name": "clay",
        "clean_name": "clay",
        "hex": "#b66a50",
        "rgb": [
            182,
            106,
            80
        ],
        "rgbf": [
            0.7137,
            0.4157,
            0.3137
        ]
    },
    {
        "name": "light aqua",
        "clean_name": "lightaqua",
        "hex": "#8cffdb",
        "rgb": [
            140,
            255,
            219
        ],
        "rgbf": [
            0.549,
            1.0,
            0.8588
        ]
    },
    {
        "name": "light olive green",
        "clean_name": "lightolivegreen",
        "hex": "#a4be5c",
        "rgb": [
            164,
            190,
            92
        ],
        "rgbf": [
            0.6431,
            0.7451,
            0.3608
        ]
    },
    {
        "name": "brownish orange",
        "clean_name": "brownishorange",
        "hex": "#cb7723",
        "rgb": [
            203,
            119,
            35
        ],
        "rgbf": [
            0.7961,
            0.4667,
            0.1373
        ]
    },
    {
        "name": "dark aqua",
        "clean_name": "darkaqua",
        "hex": "#05696b",
        "rgb": [
            5,
            105,
            107
        ],
        "rgbf": [
            0.0196,
            0.4118,
            0.4196
        ]
    },
    {
        "name": "purplish pink",
        "clean_name": "purplishpink",
        "hex": "#ce5dae",
        "rgb": [
            206,
            93,
            174
        ],
        "rgbf": [
            0.8078,
            0.3647,
            0.6824
        ]
    },
    {
        "name": "dark salmon",
        "clean_name": "darksalmon",
        "hex": "#c85a53",
        "rgb": [
            200,
            90,
            83
        ],
        "rgbf": [
            0.7843,
            0.3529,
            0.3255
        ]
    },
    {
        "name": "greenish grey",
        "clean_name": "greenishgrey",
        "hex": "#96ae8d",
        "rgb": [
            150,
            174,
            141
        ],
        "rgbf": [
            0.5882,
            0.6824,
            0.5529
        ]
    },
    {
        "name": "jade",
        "clean_name": "jade",
        "hex": "#1fa774",
        "rgb": [
            31,
            167,
            116
        ],
        "rgbf": [
            0.1216,
            0.6549,
            0.4549
        ]
    },
    {
        "name": "ugly green",
        "clean_name": "uglygreen",
        "hex": "#7a9703",
        "rgb": [
            122,
            151,
            3
        ],
        "rgbf": [
            0.4784,
            0.5922,
            0.0118
        ]
    },
    {
        "name": "dark beige",
        "clean_name": "darkbeige",
        "hex": "#ac9362",
        "rgb": [
            172,
            147,
            98
        ],
        "rgbf": [
            0.6745,
            0.5765,
            0.3843
        ]
    },
    {
        "name": "emerald",
        "clean_name": "emerald",
        "hex": "#01a049",
        "rgb": [
            1,
            160,
            73
        ],
        "rgbf": [
            0.0039,
            0.6275,
            0.2863
        ]
    },
    {
        "name": "pale red",
        "clean_name": "palered",
        "hex": "#d9544d",
        "rgb": [
            217,
            84,
            77
        ],
        "rgbf": [
            0.851,
            0.3294,
            0.302
        ]
    },
    {
        "name": "light magenta",
        "clean_name": "lightmagenta",
        "hex": "#fa5ff7",
        "rgb": [
            250,
            95,
            247
        ],
        "rgbf": [
            0.9804,
            0.3725,
            0.9686
        ]
    },
    {
        "name": "sky",
        "clean_name": "sky",
        "hex": "#82cafc",
        "rgb": [
            130,
            202,
            252
        ],
        "rgbf": [
            0.5098,
            0.7922,
            0.9882
        ]
    },
    {
        "name": "light cyan",
        "clean_name": "lightcyan",
        "hex": "#acfffc",
        "rgb": [
            172,
            255,
            252
        ],
        "rgbf": [
            0.6745,
            1.0,
            0.9882
        ]
    },
    {
        "name": "yellow orange",
        "clean_name": "yelloworange",
        "hex": "#fcb001",
        "rgb": [
            252,
            176,
            1
        ],
        "rgbf": [
            0.9882,
            0.6902,
            0.0039
        ]
    },
    {
        "name": "reddish purple",
        "clean_name": "reddishpurple",
        "hex": "#910951",
        "rgb": [
            145,
            9,
            81
        ],
        "rgbf": [
            0.5686,
            0.0353,
            0.3176
        ]
    },
    {
        "name": "reddish pink",
        "clean_name": "reddishpink",
        "hex": "#fe2c54",
        "rgb": [
            254,
            44,
            84
        ],
        "rgbf": [
            0.9961,
            0.1725,
            0.3294
        ]
    },
    {
        "name": "orchid",
        "clean_name": "orchid",
        "hex": "#c875c4",
        "rgb": [
            200,
            117,
            196
        ],
        "rgbf": [
            0.7843,
            0.4588,
            0.7686
        ]
    },
    {
        "name": "dirty yellow",
        "clean_name": "dirtyyellow",
        "hex": "#cdc50a",
        "rgb": [
            205,
            197,
            10
        ],
        "rgbf": [
            0.8039,
            0.7725,
            0.0392
        ]
    },
    {
        "name": "orange red",
        "clean_name": "orangered",
        "hex": "#fd411e",
        "rgb": [
            253,
            65,
            30
        ],
        "rgbf": [
            0.9922,
            0.2549,
            0.1176
        ]
    },
    {
        "name": "deep red",
        "clean_name": "deepred",
        "hex": "#9a0200",
        "rgb": [
            154,
            2,
            0
        ],
        "rgbf": [
            0.6039,
            0.0078,
            0.0
        ]
    },
    {
        "name": "orange brown",
        "clean_name": "orangebrown",
        "hex": "#be6400",
        "rgb": [
            190,
            100,
            0
        ],
        "rgbf": [
            0.7451,
            0.3922,
            0.0
        ]
    },
    {
        "name": "cobalt blue",
        "clean_name": "cobaltblue",
        "hex": "#030aa7",
        "rgb": [
            3,
            10,
            167
        ],
        "rgbf": [
            0.0118,
            0.0392,
            0.6549
        ]
    },
    {
        "name": "neon pink",
        "clean_name": "neonpink",
        "hex": "#fe019a",
        "rgb": [
            254,
            1,
            154
        ],
        "rgbf": [
            0.9961,
            0.0039,
            0.6039
        ]
    },
    {
        "name": "rose pink",
        "clean_name": "rosepink",
        "hex": "#f7879a",
        "rgb": [
            247,
            135,
            154
        ],
        "rgbf": [
            0.9686,
            0.5294,
            0.6039
        ]
    },
    {
        "name": "greyish purple",
        "clean_name": "greyishpurple",
        "hex": "#887191",
        "rgb": [
            136,
            113,
            145
        ],
        "rgbf": [
            0.5333,
            0.4431,
            0.5686
        ]
    },
    {
        "name": "raspberry",
        "clean_name": "raspberry",
        "hex": "#b00149",
        "rgb": [
            176,
            1,
            73
        ],
        "rgbf": [
            0.6902,
            0.0039,
            0.2863
        ]
    },
    {
        "name": "aqua green",
        "clean_name": "aquagreen",
        "hex": "#12e193",
        "rgb": [
            18,
            225,
            147
        ],
        "rgbf": [
            0.0706,
            0.8824,
            0.5765
        ]
    },
    {
        "name": "salmon pink",
        "clean_name": "salmonpink",
        "hex": "#fe7b7c",
        "rgb": [
            254,
            123,
            124
        ],
        "rgbf": [
            0.9961,
            0.4824,
            0.4863
        ]
    },
    {
        "name": "tangerine",
        "clean_name": "tangerine",
        "hex": "#ff9408",
        "rgb": [
            255,
            148,
            8
        ],
        "rgbf": [
            1.0,
            0.5804,
            0.0314
        ]
    },
    {
        "name": "brownish green",
        "clean_name": "brownishgreen",
        "hex": "#6a6e09",
        "rgb": [
            106,
            110,
            9
        ],
        "rgbf": [
            0.4157,
            0.4314,
            0.0353
        ]
    },
    {
        "name": "red brown",
        "clean_name": "redbrown",
        "hex": "#8b2e16",
        "rgb": [
            139,
            46,
            22
        ],
        "rgbf": [
            0.5451,
            0.1804,
            0.0863
        ]
    },
    {
        "name": "greenish brown",
        "clean_name": "greenishbrown",
        "hex": "#696112",
        "rgb": [
            105,
            97,
            18
        ],
        "rgbf": [
            0.4118,
            0.3804,
            0.0706
        ]
    },
    {
        "name": "pumpkin",
        "clean_name": "pumpkin",
        "hex": "#e17701",
        "rgb": [
            225,
            119,
            1
        ],
        "rgbf": [
            0.8824,
            0.4667,
            0.0039
        ]
    },
    {
        "name": "pine green",
        "clean_name": "pinegreen",
        "hex": "#0a481e",
        "rgb": [
            10,
            72,
            30
        ],
        "rgbf": [
            0.0392,
            0.2824,
            0.1176
        ]
    },
    {
        "name": "charcoal",
        "clean_name": "charcoal",
        "hex": "#343837",
        "rgb": [
            52,
            56,
            55
        ],
        "rgbf": [
            0.2039,
            0.2196,
            0.2157
        ]
    },
    {
        "name": "baby pink",
        "clean_name": "babypink",
        "hex": "#ffb7ce",
        "rgb": [
            255,
            183,
            206
        ],
        "rgbf": [
            1.0,
            0.7176,
            0.8078
        ]
    },
    {
        "name": "cornflower",
        "clean_name": "cornflower",
        "hex": "#6a79f7",
        "rgb": [
            106,
            121,
            247
        ],
        "rgbf": [
            0.4157,
            0.4745,
            0.9686
        ]
    },
    {
        "name": "blue violet",
        "clean_name": "blueviolet",
        "hex": "#5d06e9",
        "rgb": [
            93,
            6,
            233
        ],
        "rgbf": [
            0.3647,
            0.0235,
            0.9137
        ]
    },
    {
        "name": "chocolate",
        "clean_name": "chocolate",
        "hex": "#3d1c02",
        "rgb": [
            61,
            28,
            2
        ],
        "rgbf": [
            0.2392,
            0.1098,
            0.0078
        ]
    },
    {
        "name": "greyish green",
        "clean_name": "greyishgreen",
        "hex": "#82a67d",
        "rgb": [
            130,
            166,
            125
        ],
        "rgbf": [
            0.5098,
            0.651,
            0.4902
        ]
    },
    {
        "name": "scarlet",
        "clean_name": "scarlet",
        "hex": "#be0119",
        "rgb": [
            190,
            1,
            25
        ],
        "rgbf": [
            0.7451,
            0.0039,
            0.098
        ]
    },
    {
        "name": "green yellow",
        "clean_name": "greenyellow",
        "hex": "#c9ff27",
        "rgb": [
            201,
            255,
            39
        ],
        "rgbf": [
            0.7882,
            1.0,
            0.1529
        ]
    },
    {
        "name": "dark olive",
        "clean_name": "darkolive",
        "hex": "#373e02",
        "rgb": [
            55,
            62,
            2
        ],
        "rgbf": [
            0.2157,
            0.2431,
            0.0078
        ]
    },
    {
        "name": "sienna",
        "clean_name": "sienna",
        "hex": "#a9561e",
        "rgb": [
            169,
            86,
            30
        ],
        "rgbf": [
            0.6627,
            0.3373,
            0.1176
        ]
    },
    {
        "name": "pastel purple",
        "clean_name": "pastelpurple",
        "hex": "#caa0ff",
        "rgb": [
            202,
            160,
            255
        ],
        "rgbf": [
            0.7922,
            0.6275,
            1.0
        ]
    },
    {
        "name": "terracotta",
        "clean_name": "terracotta",
        "hex": "#ca6641",
        "rgb": [
            202,
            102,
            65
        ],
        "rgbf": [
            0.7922,
            0.4,
            0.2549
        ]
    },
    {
        "name": "aqua blue",
        "clean_name": "aquablue",
        "hex": "#02d8e9",
        "rgb": [
            2,
            216,
            233
        ],
        "rgbf": [
            0.0078,
            0.8471,
            0.9137
        ]
    },
    {
        "name": "sage green",
        "clean_name": "sagegreen",
        "hex": "#88b378",
        "rgb": [
            136,
            179,
            120
        ],
        "rgbf": [
            0.5333,
            0.702,
            0.4706
        ]
    },
    {
        "name": "blood red",
        "clean_name": "bloodred",
        "hex": "#980002",
        "rgb": [
            152,
            0,
            2
        ],
        "rgbf": [
            0.5961,
            0.0,
            0.0078
        ]
    },
    {
        "name": "deep pink",
        "clean_name": "deeppink",
        "hex": "#cb0162",
        "rgb": [
            203,
            1,
            98
        ],
        "rgbf": [
            0.7961,
            0.0039,
            0.3843
        ]
    },
    {
        "name": "grass",
        "clean_name": "grass",
        "hex": "#5cac2d",
        "rgb": [
            92,
            172,
            45
        ],
        "rgbf": [
            0.3608,
            0.6745,
            0.1765
        ]
    },
    {
        "name": "moss",
        "clean_name": "moss",
        "hex": "#769958",
        "rgb": [
            118,
            153,
            88
        ],
        "rgbf": [
            0.4627,
            0.6,
            0.3451
        ]
    },
    {
        "name": "pastel blue",
        "clean_name": "pastelblue",
        "hex": "#a2bffe",
        "rgb": [
            162,
            191,
            254
        ],
        "rgbf": [
            0.6353,
            0.749,
            0.9961
        ]
    },
    {
        "name": "bluish green",
        "clean_name": "bluishgreen",
        "hex": "#10a674",
        "rgb": [
            16,
            166,
            116
        ],
        "rgbf": [
            0.0627,
            0.651,
            0.4549
        ]
    },
    {
        "name": "green blue",
        "clean_name": "greenblue",
        "hex": "#06b48b",
        "rgb": [
            6,
            180,
            139
        ],
        "rgbf": [
            0.0235,
            0.7059,
            0.5451
        ]
    },
    {
        "name": "dark tan",
        "clean_name": "darktan",
        "hex": "#af884a",
        "rgb": [
            175,
            136,
            74
        ],
        "rgbf": [
            0.6863,
            0.5333,
            0.2902
        ]
    },
    {
        "name": "greenish blue",
        "clean_name": "greenishblue",
        "hex": "#0b8b87",
        "rgb": [
            11,
            139,
            135
        ],
        "rgbf": [
            0.0431,
            0.5451,
            0.5294
        ]
    },
    {
        "name": "pale orange",
        "clean_name": "paleorange",
        "hex": "#ffa756",
        "rgb": [
            255,
            167,
            86
        ],
        "rgbf": [
            1.0,
            0.6549,
            0.3373
        ]
    },
    {
        "name": "vomit",
        "clean_name": "vomit",
        "hex": "#a2a415",
        "rgb": [
            162,
            164,
            21
        ],
        "rgbf": [
            0.6353,
            0.6431,
            0.0824
        ]
    },
    {
        "name": "forrest green",
        "clean_name": "forrestgreen",
        "hex": "#154406",
        "rgb": [
            21,
            68,
            6
        ],
        "rgbf": [
            0.0824,
            0.2667,
            0.0235
        ]
    },
    {
        "name": "dark lavender",
        "clean_name": "darklavender",
        "hex": "#856798",
        "rgb": [
            133,
            103,
            152
        ],
        "rgbf": [
            0.5216,
            0.4039,
            0.5961
        ]
    },
    {
        "name": "dark violet",
        "clean_name": "darkviolet",
        "hex": "#34013f",
        "rgb": [
            52,
            1,
            63
        ],
        "rgbf": [
            0.2039,
            0.0039,
            0.2471
        ]
    },
    {
        "name": "purple blue",
        "clean_name": "purpleblue",
        "hex": "#632de9",
        "rgb": [
            99,
            45,
            233
        ],
        "rgbf": [
            0.3882,
            0.1765,
            0.9137
        ]
    },
    {
        "name": "dark cyan",
        "clean_name": "darkcyan",
        "hex": "#0a888a",
        "rgb": [
            10,
            136,
            138
        ],
        "rgbf": [
            0.0392,
            0.5333,
            0.5412
        ]
    },
    {
        "name": "olive drab",
        "clean_name": "olivedrab",
        "hex": "#6f7632",
        "rgb": [
            111,
            118,
            50
        ],
        "rgbf": [
            0.4353,
            0.4627,
            0.1961
        ]
    },
    {
        "name": "pinkish",
        "clean_name": "pinkish",
        "hex": "#d46a7e",
        "rgb": [
            212,
            106,
            126
        ],
        "rgbf": [
            0.8314,
            0.4157,
            0.4941
        ]
    },
    {
        "name": "cobalt",
        "clean_name": "cobalt",
        "hex": "#1e488f",
        "rgb": [
            30,
            72,
            143
        ],
        "rgbf": [
            0.1176,
            0.2824,
            0.5608
        ]
    },
    {
        "name": "neon purple",
        "clean_name": "neonpurple",
        "hex": "#bc13fe",
        "rgb": [
            188,
            19,
            254
        ],
        "rgbf": [
            0.7373,
            0.0745,
            0.9961
        ]
    },
    {
        "name": "light turquoise",
        "clean_name": "lightturquoise",
        "hex": "#7ef4cc",
        "rgb": [
            126,
            244,
            204
        ],
        "rgbf": [
            0.4941,
            0.9569,
            0.8
        ]
    },
    {
        "name": "apple green",
        "clean_name": "applegreen",
        "hex": "#76cd26",
        "rgb": [
            118,
            205,
            38
        ],
        "rgbf": [
            0.4627,
            0.8039,
            0.149
        ]
    },
    {
        "name": "dull green",
        "clean_name": "dullgreen",
        "hex": "#74a662",
        "rgb": [
            116,
            166,
            98
        ],
        "rgbf": [
            0.4549,
            0.651,
            0.3843
        ]
    },
    {
        "name": "wine",
        "clean_name": "wine",
        "hex": "#80013f",
        "rgb": [
            128,
            1,
            63
        ],
        "rgbf": [
            0.502,
            0.0039,
            0.2471
        ]
    },
    {
        "name": "powder blue",
        "clean_name": "powderblue",
        "hex": "#b1d1fc",
        "rgb": [
            177,
            209,
            252
        ],
        "rgbf": [
            0.6941,
            0.8196,
            0.9882
        ]
    },
    {
        "name": "off white",
        "clean_name": "offwhite",
        "hex": "#ffffe4",
        "rgb": [
            255,
            255,
            228
        ],
        "rgbf": [
            1.0,
            1.0,
            0.8941
        ]
    },
    {
        "name": "electric blue",
        "clean_name": "electricblue",
        "hex": "#0652ff",
        "rgb": [
            6,
            82,
            255
        ],
        "rgbf": [
            0.0235,
            0.3216,
            1.0
        ]
    },
    {
        "name": "dark turquoise",
        "clean_name": "darkturquoise",
        "hex": "#045c5a",
        "rgb": [
            4,
            92,
            90
        ],
        "rgbf": [
            0.0157,
            0.3608,
            0.3529
        ]
    },
    {
        "name": "blue purple",
        "clean_name": "bluepurple",
        "hex": "#5729ce",
        "rgb": [
            87,
            41,
            206
        ],
        "rgbf": [
            0.3412,
            0.1608,
            0.8078
        ]
    },
    {
        "name": "azure",
        "clean_name": "azure",
        "hex": "#069af3",
        "rgb": [
            6,
            154,
            243
        ],
        "rgbf": [
            0.0235,
            0.6039,
            0.9529
        ]
    },
    {
        "name": "bright red",
        "clean_name": "brightred",
        "hex": "#ff000d",
        "rgb": [
            255,
            0,
            13
        ],
        "rgbf": [
            1.0,
            0.0,
            0.051
        ]
    },
    {
        "name": "pinkish red",
        "clean_name": "pinkishred",
        "hex": "#f10c45",
        "rgb": [
            241,
            12,
            69
        ],
        "rgbf": [
            0.9451,
            0.0471,
            0.2706
        ]
    },
    {
        "name": "cornflower blue",
        "clean_name": "cornflowerblue",
        "hex": "#5170d7",
        "rgb": [
            81,
            112,
            215
        ],
        "rgbf": [
            0.3176,
            0.4392,
            0.8431
        ]
    },
    {
        "name": "light olive",
        "clean_name": "lightolive",
        "hex": "#acbf69",
        "rgb": [
            172,
            191,
            105
        ],
        "rgbf": [
            0.6745,
            0.749,
            0.4118
        ]
    },
    {
        "name": "grape",
        "clean_name": "grape",
        "hex": "#6c3461",
        "rgb": [
            108,
            52,
            97
        ],
        "rgbf": [
            0.4235,
            0.2039,
            0.3804
        ]
    },
    {
        "name": "greyish blue",
        "clean_name": "greyishblue",
        "hex": "#5e819d",
        "rgb": [
            94,
            129,
            157
        ],
        "rgbf": [
            0.3686,
            0.5059,
            0.6157
        ]
    },
    {
        "name": "purplish blue",
        "clean_name": "purplishblue",
        "hex": "#601ef9",
        "rgb": [
            96,
            30,
            249
        ],
        "rgbf": [
            0.3765,
            0.1176,
            0.9765
        ]
    },
    {
        "name": "yellowish green",
        "clean_name": "yellowishgreen",
        "hex": "#b0dd16",
        "rgb": [
            176,
            221,
            22
        ],
        "rgbf": [
            0.6902,
            0.8667,
            0.0863
        ]
    },
    {
        "name": "greenish yellow",
        "clean_name": "greenishyellow",
        "hex": "#cdfd02",
        "rgb": [
            205,
            253,
            2
        ],
        "rgbf": [
            0.8039,
            0.9922,
            0.0078
        ]
    },
    {
        "name": "medium blue",
        "clean_name": "mediumblue",
        "hex": "#2c6fbb",
        "rgb": [
            44,
            111,
            187
        ],
        "rgbf": [
            0.1725,
            0.4353,
            0.7333
        ]
    },
    {
        "name": "dusty rose",
        "clean_name": "dustyrose",
        "hex": "#c0737a",
        "rgb": [
            192,
            115,
            122
        ],
        "rgbf": [
            0.7529,
            0.451,
            0.4784
        ]
    },
    {
        "name": "light violet",
        "clean_name": "lightviolet",
        "hex": "#d6b4fc",
        "rgb": [
            214,
            180,
            252
        ],
        "rgbf": [
            0.8392,
            0.7059,
            0.9882
        ]
    },
    {
        "name": "midnight blue",
        "clean_name": "midnightblue",
        "hex": "#020035",
        "rgb": [
            2,
            0,
            53
        ],
        "rgbf": [
            0.0078,
            0.0,
            0.2078
        ]
    },
    {
        "name": "bluish purple",
        "clean_name": "bluishpurple",
        "hex": "#703be7",
        "rgb": [
            112,
            59,
            231
        ],
        "rgbf": [
            0.4392,
            0.2314,
            0.9059
        ]
    },
    {
        "name": "red orange",
        "clean_name": "redorange",
        "hex": "#fd3c06",
        "rgb": [
            253,
            60,
            6
        ],
        "rgbf": [
            0.9922,
            0.2353,
            0.0235
        ]
    },
    {
        "name": "dark magenta",
        "clean_name": "darkmagenta",
        "hex": "#960056",
        "rgb": [
            150,
            0,
            86
        ],
        "rgbf": [
            0.5882,
            0.0,
            0.3373
        ]
    },
    {
        "name": "greenish",
        "clean_name": "greenish",
        "hex": "#40a368",
        "rgb": [
            64,
            163,
            104
        ],
        "rgbf": [
            0.251,
            0.6392,
            0.4078
        ]
    },
    {
        "name": "ocean blue",
        "clean_name": "oceanblue",
        "hex": "#03719c",
        "rgb": [
            3,
            113,
            156
        ],
        "rgbf": [
            0.0118,
            0.4431,
            0.6118
        ]
    },
    {
        "name": "coral",
        "clean_name": "coral",
        "hex": "#fc5a50",
        "rgb": [
            252,
            90,
            80
        ],
        "rgbf": [
            0.9882,
            0.3529,
            0.3137
        ]
    },
    {
        "name": "cream",
        "clean_name": "cream",
        "hex": "#ffffc2",
        "rgb": [
            255,
            255,
            194
        ],
        "rgbf": [
            1.0,
            1.0,
            0.7608
        ]
    },
    {
        "name": "reddish brown",
        "clean_name": "reddishbrown",
        "hex": "#7f2b0a",
        "rgb": [
            127,
            43,
            10
        ],
        "rgbf": [
            0.498,
            0.1686,
            0.0392
        ]
    },
    {
        "name": "burnt sienna",
        "clean_name": "burntsienna",
        "hex": "#b04e0f",
        "rgb": [
            176,
            78,
            15
        ],
        "rgbf": [
            0.6902,
            0.3059,
            0.0588
        ]
    },
    {
        "name": "brick",
        "clean_name": "brick",
        "hex": "#a03623",
        "rgb": [
            160,
            54,
            35
        ],
        "rgbf": [
            0.6275,
            0.2118,
            0.1373
        ]
    },
    {
        "name": "sage",
        "clean_name": "sage",
        "hex": "#87ae73",
        "rgb": [
            135,
            174,
            115
        ],
        "rgbf": [
            0.5294,
            0.6824,
            0.451
        ]
    },
    {
        "name": "grey green",
        "clean_name": "greygreen",
        "hex": "#789b73",
        "rgb": [
            120,
            155,
            115
        ],
        "rgbf": [
            0.4706,
            0.6078,
            0.451
        ]
    },
    {
        "name": "white",
        "clean_name": "white",
        "hex": "#ffffff",
        "rgb": [
            255,
            255,
            255
        ],
        "rgbf": [
            1.0,
            1.0,
            1.0
        ]
    },
    {
        "name": "robin's egg blue",
        "clean_name": "robinseggblue",
        "hex": "#98eff9",
        "rgb": [
            152,
            239,
            249
        ],
        "rgbf": [
            0.5961,
            0.9373,
            0.9765
        ]
    },
    {
        "name": "moss green",
        "clean_name": "mossgreen",
        "hex": "#658b38",
        "rgb": [
            101,
            139,
            56
        ],
        "rgbf": [
            0.3961,
            0.5451,
            0.2196
        ]
    },
    {
        "name": "steel blue",
        "clean_name": "steelblue",
        "hex": "#5a7d9a",
        "rgb": [
            90,
            125,
            154
        ],
        "rgbf": [
            0.3529,
            0.4902,
            0.6039
        ]
    },
    {
        "name": "eggplant",
        "clean_name": "eggplant",
        "hex": "#380835",
        "rgb": [
            56,
            8,
            53
        ],
        "rgbf": [
            0.2196,
            0.0314,
            0.2078
        ]
    },
    {
        "name": "light yellow",
        "clean_name": "lightyellow",
        "hex": "#fffe7a",
        "rgb": [
            255,
            254,
            122
        ],
        "rgbf": [
            1.0,
            0.9961,
            0.4784
        ]
    },
    {
        "name": "leaf green",
        "clean_name": "leafgreen",
        "hex": "#5ca904",
        "rgb": [
            92,
            169,
            4
        ],
        "rgbf": [
            0.3608,
            0.6627,
            0.0157
        ]
    },
    {
        "name": "light grey",
        "clean_name": "lightgrey",
        "hex": "#d8dcd6",
        "rgb": [
            216,
            220,
            214
        ],
        "rgbf": [
            0.8471,
            0.8627,
            0.8392
        ]
    },
    {
        "name": "puke",
        "clean_name": "puke",
        "hex": "#a5a502",
        "rgb": [
            165,
            165,
            2
        ],
        "rgbf": [
            0.6471,
            0.6471,
            0.0078
        ]
    },
    {
        "name": "pinkish purple",
        "clean_name": "pinkishpurple",
        "hex": "#d648d7",
        "rgb": [
            214,
            72,
            215
        ],
        "rgbf": [
            0.8392,
            0.2824,
            0.8431
        ]
    },
    {
        "name": "sea blue",
        "clean_name": "seablue",
        "hex": "#047495",
        "rgb": [
            4,
            116,
            149
        ],
        "rgbf": [
            0.0157,
            0.4549,
            0.5843
        ]
    },
    {
        "name": "pale purple",
        "clean_name": "palepurple",
        "hex": "#b790d4",
        "rgb": [
            183,
            144,
            212
        ],
        "rgbf": [
            0.7176,
            0.5647,
            0.8314
        ]
    },
    {
        "name": "slate blue",
        "clean_name": "slateblue",
        "hex": "#5b7c99",
        "rgb": [
            91,
            124,
            153
        ],
        "rgbf": [
            0.3569,
            0.4863,
            0.6
        ]
    },
    {
        "name": "blue grey",
        "clean_name": "bluegrey",
        "hex": "#607c8e",
        "rgb": [
            96,
            124,
            142
        ],
        "rgbf": [
            0.3765,
            0.4863,
            0.5569
        ]
    },
    {
        "name": "hunter green",
        "clean_name": "huntergreen",
        "hex": "#0b4008",
        "rgb": [
            11,
            64,
            8
        ],
        "rgbf": [
            0.0431,
            0.251,
            0.0314
        ]
    },
    {
        "name": "fuchsia",
        "clean_name": "fuchsia",
        "hex": "#ed0dd9",
        "rgb": [
            237,
            13,
            217
        ],
        "rgbf": [
            0.9294,
            0.051,
            0.851
        ]
    },
    {
        "name": "crimson",
        "clean_name": "crimson",
        "hex": "#8c000f",
        "rgb": [
            140,
            0,
            15
        ],
        "rgbf": [
            0.549,
            0.0,
            0.0588
        ]
    },
    {
        "name": "pale yellow",
        "clean_name": "paleyellow",
        "hex": "#ffff84",
        "rgb": [
            255,
            255,
            132
        ],
        "rgbf": [
            1.0,
            1.0,
            0.5176
        ]
    },
    {
        "name": "ochre",
        "clean_name": "ochre",
        "hex": "#bf9005",
        "rgb": [
            191,
            144,
            5
        ],
        "rgbf": [
            0.749,
            0.5647,
            0.0196
        ]
    },
    {
        "name": "mustard yellow",
        "clean_name": "mustardyellow",
        "hex": "#d2bd0a",
        "rgb": [
            210,
            189,
            10
        ],
        "rgbf": [
            0.8235,
            0.7412,
            0.0392
        ]
    },
    {
        "name": "light red",
        "clean_name": "lightred",
        "hex": "#ff474c",
        "rgb": [
            255,
            71,
            76
        ],
        "rgbf": [
            1.0,
            0.2784,
            0.298
        ]
    },
    {
        "name": "cerulean",
        "clean_name": "cerulean",
        "hex": "#0485d1",
        "rgb": [
            4,
            133,
            209
        ],
        "rgbf": [
            0.0157,
            0.5216,
            0.8196
        ]
    },
    {
        "name": "pale pink",
        "clean_name": "palepink",
        "hex": "#ffcfdc",
        "rgb": [
            255,
            207,
            220
        ],
        "rgbf": [
            1.0,
            0.8118,
            0.8627
        ]
    },
    {
        "name": "deep blue",
        "clean_name": "deepblue",
        "hex": "#040273",
        "rgb": [
            4,
            2,
            115
        ],
        "rgbf": [
            0.0157,
            0.0078,
            0.451
        ]
    },
    {
        "name": "rust",
        "clean_name": "rust",
        "hex": "#a83c09",
        "rgb": [
            168,
            60,
            9
        ],
        "rgbf": [
            0.6588,
            0.2353,
            0.0353
        ]
    },
    {
        "name": "light teal",
        "clean_name": "lightteal",
        "hex": "#90e4c1",
        "rgb": [
            144,
            228,
            193
        ],
        "rgbf": [
            0.5647,
            0.8941,
            0.7569
        ]
    },
    {
        "name": "slate",
        "clean_name": "slate",
        "hex": "#516572",
        "rgb": [
            81,
            101,
            114
        ],
        "rgbf": [
            0.3176,
            0.3961,
            0.4471
        ]
    },
    {
        "name": "goldenrod",
        "clean_name": "goldenrod",
        "hex": "#fac205",
        "rgb": [
            250,
            194,
            5
        ],
        "rgbf": [
            0.9804,
            0.7608,
            0.0196
        ]
    },
    {
        "name": "dark yellow",
        "clean_name": "darkyellow",
        "hex": "#d5b60a",
        "rgb": [
            213,
            182,
            10
        ],
        "rgbf": [
            0.8353,
            0.7137,
            0.0392
        ]
    },
    {
        "name": "dark grey",
        "clean_name": "darkgrey",
        "hex": "#363737",
        "rgb": [
            54,
            55,
            55
        ],
        "rgbf": [
            0.2118,
            0.2157,
            0.2157
        ]
    },
    {
        "name": "army green",
        "clean_name": "armygreen",
        "hex": "#4b5d16",
        "rgb": [
            75,
            93,
            22
        ],
        "rgbf": [
            0.2941,
            0.3647,
            0.0863
        ]
    },
    {
        "name": "grey blue",
        "clean_name": "greyblue",
        "hex": "#6b8ba4",
        "rgb": [
            107,
            139,
            164
        ],
        "rgbf": [
            0.4196,
            0.5451,
            0.6431
        ]
    },
    {
        "name": "seafoam",
        "clean_name": "seafoam",
        "hex": "#80f9ad",
        "rgb": [
            128,
            249,
            173
        ],
        "rgbf": [
            0.502,
            0.9765,
            0.6784
        ]
    },
    {
        "name": "puce",
        "clean_name": "puce",
        "hex": "#a57e52",
        "rgb": [
            165,
            126,
            82
        ],
        "rgbf": [
            0.6471,
            0.4941,
            0.3216
        ]
    },
    {
        "name": "spring green",
        "clean_name": "springgreen",
        "hex": "#a9f971",
        "rgb": [
            169,
            249,
            113
        ],
        "rgbf": [
            0.6627,
            0.9765,
            0.4431
        ]
    },
    {
        "name": "dark orange",
        "clean_name": "darkorange",
        "hex": "#c65102",
        "rgb": [
            198,
            81,
            2
        ],
        "rgbf": [
            0.7765,
            0.3176,
            0.0078
        ]
    },
    {
        "name": "sand",
        "clean_name": "sand",
        "hex": "#e2ca76",
        "rgb": [
            226,
            202,
            118
        ],
        "rgbf": [
            0.8863,
            0.7922,
            0.4627
        ]
    },
    {
        "name": "pastel green",
        "clean_name": "pastelgreen",
        "hex": "#b0ff9d",
        "rgb": [
            176,
            255,
            157
        ],
        "rgbf": [
            0.6902,
            1.0,
            0.6157
        ]
    },
    {
        "name": "mint",
        "clean_name": "mint",
        "hex": "#9ffeb0",
        "rgb": [
            159,
            254,
            176
        ],
        "rgbf": [
            0.6235,
            0.9961,
            0.6902
        ]
    },
    {
        "name": "light orange",
        "clean_name": "lightorange",
        "hex": "#fdaa48",
        "rgb": [
            253,
            170,
            72
        ],
        "rgbf": [
            0.9922,
            0.6667,
            0.2824
        ]
    },
    {
        "name": "bright pink",
        "clean_name": "brightpink",
        "hex": "#fe01b1",
        "rgb": [
            254,
            1,
            177
        ],
        "rgbf": [
            0.9961,
            0.0039,
            0.6941
        ]
    },
    {
        "name": "chartreuse",
        "clean_name": "chartreuse",
        "hex": "#c1f80a",
        "rgb": [
            193,
            248,
            10
        ],
        "rgbf": [
            0.7569,
            0.9725,
            0.0392
        ]
    },
    {
        "name": "deep purple",
        "clean_name": "deeppurple",
        "hex": "#36013f",
        "rgb": [
            54,
            1,
            63
        ],
        "rgbf": [
            0.2118,
            0.0039,
            0.2471
        ]
    },
    {
        "name": "dark brown",
        "clean_name": "darkbrown",
        "hex": "#341c02",
        "rgb": [
            52,
            28,
            2
        ],
        "rgbf": [
            0.2039,
            0.1098,
            0.0078
        ]
    },
    {
        "name": "taupe",
        "clean_name": "taupe",
        "hex": "#b9a281",
        "rgb": [
            185,
            162,
            129
        ],
        "rgbf": [
            0.7255,
            0.6353,
            0.5059
        ]
    },
    {
        "name": "pea green",
        "clean_name": "peagreen",
        "hex": "#8eab12",
        "rgb": [
            142,
            171,
            18
        ],
        "rgbf": [
            0.5569,
            0.6706,
            0.0706
        ]
    },
    {
        "name": "puke green",
        "clean_name": "pukegreen",
        "hex": "#9aae07",
        "rgb": [
            154,
            174,
            7
        ],
        "rgbf": [
            0.6039,
            0.6824,
            0.0275
        ]
    },
    {
        "name": "kelly green",
        "clean_name": "kellygreen",
        "hex": "#02ab2e",
        "rgb": [
            2,
            171,
            46
        ],
        "rgbf": [
            0.0078,
            0.6706,
            0.1804
        ]
    },
    {
        "name": "seafoam green",
        "clean_name": "seafoamgreen",
        "hex": "#7af9ab",
        "rgb": [
            122,
            249,
            171
        ],
        "rgbf": [
            0.4784,
            0.9765,
            0.6706
        ]
    },
    {
        "name": "blue green",
        "clean_name": "bluegreen",
        "hex": "#137e6d",
        "rgb": [
            19,
            126,
            109
        ],
        "rgbf": [
            0.0745,
            0.4941,
            0.4275
        ]
    },
    {
        "name": "khaki",
        "clean_name": "khaki",
        "hex": "#aaa662",
        "rgb": [
            170,
            166,
            98
        ],
        "rgbf": [
            0.6667,
            0.651,
            0.3843
        ]
    },
    {
        "name": "burgundy",
        "clean_name": "burgundy",
        "hex": "#610023",
        "rgb": [
            97,
            0,
            35
        ],
        "rgbf": [
            0.3804,
            0.0,
            0.1373
        ]
    },
    {
        "name": "dark teal",
        "clean_name": "darkteal",
        "hex": "#014d4e",
        "rgb": [
            1,
            77,
            78
        ],
        "rgbf": [
            0.0039,
            0.302,
            0.3059
        ]
    },
    {
        "name": "brick red",
        "clean_name": "brickred",
        "hex": "#8f1402",
        "rgb": [
            143,
            20,
            2
        ],
        "rgbf": [
            0.5608,
            0.0784,
            0.0078
        ]
    },
    {
        "name": "royal purple",
        "clean_name": "royalpurple",
        "hex": "#4b006e",
        "rgb": [
            75,
            0,
            110
        ],
        "rgbf": [
            0.2941,
            0.0,
            0.4314
        ]
    },
    {
        "name": "plum",
        "clean_name": "plum",
        "hex": "#580f41",
        "rgb": [
            88,
            15,
            65
        ],
        "rgbf": [
            0.3451,
            0.0588,
            0.2549
        ]
    },
    {
        "name": "mint green",
        "clean_name": "mintgreen",
        "hex": "#8fff9f",
        "rgb": [
            143,
            255,
            159
        ],
        "rgbf": [
            0.5608,
            1.0,
            0.6235
        ]
    },
    {
        "name": "gold",
        "clean_name": "gold",
        "hex": "#dbb40c",
        "rgb": [
            219,
            180,
            12
        ],
        "rgbf": [
            0.8588,
            0.7059,
            0.0471
        ]
    },
    {
        "name": "baby blue",
        "clean_name": "babyblue",
        "hex": "#a2cffe",
        "rgb": [
            162,
            207,
            254
        ],
        "rgbf": [
            0.6353,
            0.8118,
            0.9961
        ]
    },
    {
        "name": "yellow green",
        "clean_name": "yellowgreen",
        "hex": "#c0fb2d",
        "rgb": [
            192,
            251,
            45
        ],
        "rgbf": [
            0.7529,
            0.9843,
            0.1765
        ]
    },
    {
        "name": "bright purple",
        "clean_name": "brightpurple",
        "hex": "#be03fd",
        "rgb": [
            190,
            3,
            253
        ],
        "rgbf": [
            0.7451,
            0.0118,
            0.9922
        ]
    },
    {
        "name": "dark red",
        "clean_name": "darkred",
        "hex": "#840000",
        "rgb": [
            132,
            0,
            0
        ],
        "rgbf": [
            0.5176,
            0.0,
            0.0
        ]
    },
    {
        "name": "pale blue",
        "clean_name": "paleblue",
        "hex": "#d0fefe",
        "rgb": [
            208,
            254,
            254
        ],
        "rgbf": [
            0.8157,
            0.9961,
            0.9961
        ]
    },
    {
        "name": "grass green",
        "clean_name": "grassgreen",
        "hex": "#3f9b0b",
        "rgb": [
            63,
            155,
            11
        ],
        "rgbf": [
            0.2471,
            0.6078,
            0.0431
        ]
    },
    {
        "name": "navy",
        "clean_name": "navy",
        "hex": "#01153e",
        "rgb": [
            1,
            21,
            62
        ],
        "rgbf": [
            0.0039,
            0.0824,
            0.2431
        ]
    },
    {
        "name": "aquamarine",
        "clean_name": "aquamarine",
        "hex": "#04d8b2",
        "rgb": [
            4,
            216,
            178
        ],
        "rgbf": [
            0.0157,
            0.8471,
            0.698
        ]
    },
    {
        "name": "burnt orange",
        "clean_name": "burntorange",
        "hex": "#c04e01",
        "rgb": [
            192,
            78,
            1
        ],
        "rgbf": [
            0.7529,
            0.3059,
            0.0039
        ]
    },
    {
        "name": "neon green",
        "clean_name": "neongreen",
        "hex": "#0cff0c",
        "rgb": [
            12,
            255,
            12
        ],
        "rgbf": [
            0.0471,
            1.0,
            0.0471
        ]
    },
    {
        "name": "bright blue",
        "clean_name": "brightblue",
        "hex": "#0165fc",
        "rgb": [
            1,
            101,
            252
        ],
        "rgbf": [
            0.0039,
            0.3961,
            0.9882
        ]
    },
    {
        "name": "rose",
        "clean_name": "rose",
        "hex": "#cf6275",
        "rgb": [
            207,
            98,
            117
        ],
        "rgbf": [
            0.8118,
            0.3843,
            0.4588
        ]
    },
    {
        "name": "light pink",
        "clean_name": "lightpink",
        "hex": "#ffd1df",
        "rgb": [
            255,
            209,
            223
        ],
        "rgbf": [
            1.0,
            0.8196,
            0.8745
        ]
    },
    {
        "name": "mustard",
        "clean_name": "mustard",
        "hex": "#ceb301",
        "rgb": [
            206,
            179,
            1
        ],
        "rgbf": [
            0.8078,
            0.702,
            0.0039
        ]
    },
    {
        "name": "indigo",
        "clean_name": "indigo",
        "hex": "#380282",
        "rgb": [
            56,
            2,
            130
        ],
        "rgbf": [
            0.2196,
            0.0078,
            0.5098
        ]
    },
    {
        "name": "lime",
        "clean_name": "lime",
        "hex": "#aaff32",
        "rgb": [
            170,
            255,
            50
        ],
        "rgbf": [
            0.6667,
            1.0,
            0.1961
        ]
    },
    {
        "name": "sea green",
        "clean_name": "seagreen",
        "hex": "#53fca1",
        "rgb": [
            83,
            252,
            161
        ],
        "rgbf": [
            0.3255,
            0.9882,
            0.6314
        ]
    },
    {
        "name": "periwinkle",
        "clean_name": "periwinkle",
        "hex": "#8e82fe",
        "rgb": [
            142,
            130,
            254
        ],
        "rgbf": [
            0.5569,
            0.5098,
            0.9961
        ]
    },
    {
        "name": "dark pink",
        "clean_name": "darkpink",
        "hex": "#cb416b",
        "rgb": [
            203,
            65,
            107
        ],
        "rgbf": [
            0.7961,
            0.2549,
            0.4196
        ]
    },
    {
        "name": "olive green",
        "clean_name": "olivegreen",
        "hex": "#677a04",
        "rgb": [
            103,
            122,
            4
        ],
        "rgbf": [
            0.4039,
            0.4784,
            0.0157
        ]
    },
    {
        "name": "peach",
        "clean_name": "peach",
        "hex": "#ffb07c",
        "rgb": [
            255,
            176,
            124
        ],
        "rgbf": [
            1.0,
            0.6902,
            0.4863
        ]
    },
    {
        "name": "pale green",
        "clean_name": "palegreen",
        "hex": "#c7fdb5",
        "rgb": [
            199,
            253,
            181
        ],
        "rgbf": [
            0.7804,
            0.9922,
            0.7098
        ]
    },
    {
        "name": "light brown",
        "clean_name": "lightbrown",
        "hex": "#ad8150",
        "rgb": [
            173,
            129,
            80
        ],
        "rgbf": [
            0.6784,
            0.5059,
            0.3137
        ]
    },
    {
        "name": "hot pink",
        "clean_name": "hotpink",
        "hex": "#ff028d",
        "rgb": [
            255,
            2,
            141
        ],
        "rgbf": [
            1.0,
            0.0078,
            0.5529
        ]
    },
    {
        "name": "black",
        "clean_name": "black",
        "hex": "#000000",
        "rgb": [
            0,
            0,
            0
        ],
        "rgbf": [
            0.0,
            0.0,
            0.0
        ]
    },
    {
        "name": "lilac",
        "clean_name": "lilac",
        "hex": "#cea2fd",
        "rgb": [
            206,
            162,
            253
        ],
        "rgbf": [
            0.8078,
            0.6353,
            0.9922
        ]
    },
    {
        "name": "navy blue",
        "clean_name": "navyblue",
        "hex": "#001146",
        "rgb": [
            0,
            17,
            70
        ],
        "rgbf": [
            0.0,
            0.0667,
            0.2745
        ]
    },
    {
        "name": "royal blue",
        "clean_name": "royalblue",
        "hex": "#0504aa",
        "rgb": [
            5,
            4,
            170
        ],
        "rgbf": [
            0.0196,
            0.0157,
            0.6667
        ]
    },
    {
        "name": "beige",
        "clean_name": "beige",
        "hex": "#e6daa6",
        "rgb": [
            230,
            218,
            166
        ],
        "rgbf": [
            0.902,
            0.8549,
            0.651
        ]
    },
    {
        "name": "salmon",
        "clean_name": "salmon",
        "hex": "#ff796c",
        "rgb": [
            255,
            121,
            108
        ],
        "rgbf": [
            1.0,
            0.4745,
            0.4235
        ]
    },
    {
        "name": "olive",
        "clean_name": "olive",
        "hex": "#6e750e",
        "rgb": [
            110,
            117,
            14
        ],
        "rgbf": [
            0.4314,
            0.4588,
            0.0549
        ]
    },
    {
        "name": "maroon",
        "clean_name": "maroon",
        "hex": "#650021",
        "rgb": [
            101,
            0,
            33
        ],
        "rgbf": [
            0.3961,
            0.0,
            0.1294
        ]
    },
    {
        "name": "bright green",
        "clean_name": "brightgreen",
        "hex": "#01ff07",
        "rgb": [
            1,
            255,
            7
        ],
        "rgbf": [
            0.0039,
            1.0,
            0.0275
        ]
    },
    {
        "name": "dark purple",
        "clean_name": "darkpurple",
        "hex": "#35063e",
        "rgb": [
            53,
            6,
            62
        ],
        "rgbf": [
            0.2078,
            0.0235,
            0.2431
        ]
    },
    {
        "name": "mauve",
        "clean_name": "mauve",
        "hex": "#ae7181",
        "rgb": [
            174,
            113,
            129
        ],
        "rgbf": [
            0.6824,
            0.4431,
            0.5059
        ]
    },
    {
        "name": "forest green",
        "clean_name": "forestgreen",
        "hex": "#06470c",
        "rgb": [
            6,
            71,
            12
        ],
        "rgbf": [
            0.0235,
            0.2784,
            0.0471
        ]
    },
    {
        "name": "aqua",
        "clean_name": "aqua",
        "hex": "#13eac9",
        "rgb": [
            19,
            234,
            201
        ],
        "rgbf": [
            0.0745,
            0.9176,
            0.7882
        ]
    },
    {
        "name": "cyan",
        "clean_name": "cyan",
        "hex": "#00ffff",
        "rgb": [
            0,
            255,
            255
        ],
        "rgbf": [
            0.0,
            1.0,
            1.0
        ]
    },
    {
        "name": "tan",
        "clean_name": "tan",
        "hex": "#d1b26f",
        "rgb": [
            209,
            178,
            111
        ],
        "rgbf": [
            0.8196,
            0.698,
            0.4353
        ]
    },
    {
        "name": "dark blue",
        "clean_name": "darkblue",
        "hex": "#00035b",
        "rgb": [
            0,
            3,
            91
        ],
        "rgbf": [
            0.0,
            0.0118,
            0.3569
        ]
    },
    {
        "name": "lavender",
        "clean_name": "lavender",
        "hex": "#c79fef",
        "rgb": [
            199,
            159,
            239
        ],
        "rgbf": [
            0.7804,
            0.6235,
            0.9373
        ]
    },
    {
        "name": "turquoise",
        "clean_name": "turquoise",
        "hex": "#06c2ac",
        "rgb": [
            6,
            194,
            172
        ],
        "rgbf": [
            0.0235,
            0.7608,
            0.6745
        ]
    },
    {
        "name": "dark green",
        "clean_name": "darkgreen",
        "hex": "#033500",
        "rgb": [
            3,
            53,
            0
        ],
        "rgbf": [
            0.0118,
            0.2078,
            0.0
        ]
    },
    {
        "name": "violet",
        "clean_name": "violet",
        "hex": "#9a0eea",
        "rgb": [
            154,
            14,
            234
        ],
        "rgbf": [
            0.6039,
            0.0549,
            0.9176
        ]
    },
    {
        "name": "light purple",
        "clean_name": "lightpurple",
        "hex": "#bf77f6",
        "rgb": [
            191,
            119,
            246
        ],
        "rgbf": [
            0.749,
            0.4667,
            0.9647
        ]
    },
    {
        "name": "lime green",
        "clean_name": "limegreen",
        "hex": "#89fe05",
        "rgb": [
            137,
            254,
            5
        ],
        "rgbf": [
            0.5373,
            0.9961,
            0.0196
        ]
    },
    {
        "name": "grey",
        "clean_name": "grey",
        "hex": "#929591",
        "rgb": [
            146,
            149,
            145
        ],
        "rgbf": [
            0.5725,
            0.5843,
            0.5686
        ]
    },
    {
        "name": "sky blue",
        "clean_name": "skyblue",
        "hex": "#75bbfd",
        "rgb": [
            117,
            187,
            253
        ],
        "rgbf": [
            0.4588,
            0.7333,
            0.9922
        ]
    },
    {
        "name": "yellow",
        "clean_name": "yellow",
        "hex": "#ffff14",
        "rgb": [
            255,
            255,
            20
        ],
        "rgbf": [
            1.0,
            1.0,
            0.0784
        ]
    },
    {
        "name": "magenta",
        "clean_name": "magenta",
        "hex": "#c20078",
        "rgb": [
            194,
            0,
            120
        ],
        "rgbf": [
            0.7608,
            0.0,
            0.4706
        ]
    },
    {
        "name": "light green",
        "clean_name": "lightgreen",
        "hex": "#96f97b",
        "rgb": [
            150,
            249,
            123
        ],
        "rgbf": [
            0.5882,
            0.9765,
            0.4824
        ]
    },
    {
        "name": "orange",
        "clean_name": "orange",
        "hex": "#f97306",
        "rgb": [
            249,
            115,
            6
        ],
        "rgbf": [
            0.9765,
            0.451,
            0.0235
        ]
    },
    {
        "name": "teal",
        "clean_name": "teal",
        "hex": "#029386",
        "rgb": [
            2,
            147,
            134
        ],
        "rgbf": [
            0.0078,
            0.5765,
            0.5255
        ]
    },
    {
        "name": "light blue",
        "clean_name": "lightblue",
        "hex": "#95d0fc",
        "rgb": [
            149,
            208,
            252
        ],
        "rgbf": [
            0.5843,
            0.8157,
            0.9882
        ]
    },
    {
        "name": "red",
        "clean_name": "red",
        "hex": "#e50000",
        "rgb": [
            229,
            0,
            0
        ],
        "rgbf": [
            0.898,
            0.0,
            0.0
        ]
    },
    {
        "name": "brown",
        "clean_name": "brown",
        "hex": "#653700",
        "rgb": [
            101,
            55,
            0
        ],
        "rgbf": [
            0.3961,
            0.2157,
            0.0
        ]
    },
    {
        "name": "pink",
        "clean_name": "pink",
        "hex": "#ff81c0",
        "rgb": [
            255,
            129,
            192
        ],
        "rgbf": [
            1.0,
            0.5059,
            0.7529
        ]
    },
    {
        "name": "blue",
        "clean_name": "blue",
        "hex": "#0343df",
        "rgb": [
            3,
            67,
            223
        ],
        "rgbf": [
            0.0118,
            0.2627,
            0.8745
        ]
    },
    {
        "name": "green",
        "clean_name": "green",
        "hex": "#15b01a",
        "rgb": [
            21,
            176,
            26
        ],
        "rgbf": [
            0.0824,
            0.6902,
            0.102
        ]
    },
    {
        "name": "purple",
        "clean_name": "purple",
        "hex": "#7e1e9c",
        "rgb": [
            126,
            30,
            156
        ],
        "rgbf": [
            0.4941,
            0.1176,
            0.6118
        ]
    }
]

const formats = [
    "hex",
    "rgb",
    "rgbf"
]

const get_color = function(name,format="hex") {
    if (!formats.includes(format)) {
        throw new Error(`Invalid color format ${format}`);
    }

    let col = colors.find(c => c.name === name)
    if (col === undefined) {
        col = colors.find(c => c.clean_name === name)
        if (col === undefined) {
	    throw new Error(`Cannot find name ${name}`)
	}
    }

    return col[format];

}

// TODO
const get_nearest = function(color) {}


module.exports = exports = {
    colors : colors,
    get_color : get_color//,
    //get_nearest : get_nearest
}
