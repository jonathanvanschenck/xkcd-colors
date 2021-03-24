# XKCD-Colors
This light-weight app exposes the [xkcd colors](https://xkcd.com/color/rgb/) via a few helpful utility functions.

## Basic Usage
Colors can be referenced from their names:
```js
const { get_color } = require("xkcd-colors");

get_color("robin's egg") // '#6dedfd'
get_color("green blue") // '#06b48b'
```

Colors can also be gotten in rgb and rgb-float formats:
```js

get_color("robin's egg","rgb") // [ 109, 237, 253 ]
get_color("robin's egg","rgbf") // [ 0.4275, 0.9294, 0.9922 ]
```

Names can also be given as just alphabetical characters (no spaces or slashes or apostrophies)
```js

get_color("robinsegg") // '#6dedfd'
```


The full json objection of the xkcd colors is also exposed:
```js
const { colors } = require("xkcd-colors");
```
in the format:
```json
[
    "..." : " Many others",
    {
        "name" : "str : color name"
        "clean_name" : "str : name without non-alphabetical characters",
        "hex" : "str : the 32-bit color hex code color: `#aaaaaa`",
        "rgb" : "int[] : list of the 0-255 ints for red green and blue",
        "rgbf" : "float[] : list of 0.0-1.0 floats for red green and blue"
    },
    "..." : "Many others"
]
```


# TODO
 - Add `get_nearest` color function
 - Add API documentation
