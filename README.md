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

## CSS
Provided also is a css file which will expose the xkcd-colors in css. If you
load this [css file](css/xkcd-colors.css) in your html header like:
```html
<link rel="stylesheet" type="text/css" href="path/to/xkcd-colors.css"/>
```
Then you can access the colors inside of other css files like:
```css
.my-html-class {
  background-color: var(--xkcd_darkblue);
}
```
See [this example](tests/test_css.html).



## JSON
The full json object of the xkcd colors is also exposed:
```js
const { colors } = require("xkcd-colors");
```
and can also be found in file form: [here](assets/colors.json). The format for
each color is:
```json
{
    "name"        :  "str      : color name",
    "clean_name"  :  "str      : name without non-alphabetical characters",
    "hex"         :  "str      : the 32-bit color hex code color: `#aaaaaa`",
    "rgb"         :  "int[3]   : list of the 0-255 ints for red green and blue",
    "rgbf"        :  "float[3] : list of 0.0-1.0 floats for red green and blue"
}
```


# TODO
 - Add unit tests with mocha
 - Add `get_nearest` color function
 - Add API documentation

# Development
Check this package out on [github](https://github.com/jonathanvanschenck/xkcd-colors)! Feel free to submit feature requests and PRs.
