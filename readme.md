# Styled Easy MQ

Easy media query in `backticks`


[![npm version](https://img.shields.io/npm/v/styled-easy-mq.svg)](https://www.npmjs.com/package/styled-easy-mq)

## Install

```
npm install styled-easy-mq
```
**or**

```
yarn add styled-easy-mq
```

## Usage

Create a media query function, By default the breakpoints are [576, 768, 992, 1200]

```ts
import { createMediaQuery } from 'styled-easy-mq';

const mq = createMediaQuery()
```

You can pass your own breakpoints

```ts
const br = [500, 700, 900, 1100] // or ["20em", "30em", "50em", "70em"]

const mq = createMediaQuery({ breakpoints: br })
```

### Use media query

Passing an array with values for each breakpoint (mobile first)

```tsx
mq`
	width: ${[300, 600, 900]};
	color: ${["red", "blue"]};
	background-color: white;
`
```

I'm using facepaint to generate media query for each property that have an array value,
the first value is considered a default value and is not a child of a media query,
learn more about [facepaint](https://github.com/emotion-js/facepaint)

## Example

With emotion (also work with styled-components)

```tsx
import { createMediaQuery } from 'styled-easy-mq';
import { css } from "emotion"

const mq = createMediaQuery()

const style = mq`
	display: flex;
	flex-direction: ${["column", "row"]};
	padding: ${[10, 20, 30, 40]};
`

<div className={css(style)}>Example</div>
```

## Wrapping with css function

You can pass the css function, so you don't need to wrap every style with css

```tsx
import { css as emotion } from "emotion"

const css = createMediaQuery({ css: emotion })

const className = css`
	display: flex;
	flex-direction: ${["row", "column"]};
	margin: ${[10, 30]};
`

<div className={className}>CSS</div>
```

## API

#### createMediaQuery `function`

```ts
createMediaQuery = (options: { breakpoints?: number[] | string[], css?: (...args: any[]) => string }) => string | DynamicStyleFunction
```

### You can also use it as an object

```tsx
mq({
	width: [300, 600, 900];
	color: ["red", "blue"];
	backgroundColor: "white"
})
```

it's the default way of how facepaint work, this library was intended to make the using of media query in string much easier, so if you only will use the object syntax you don't need this library, facepaint is enough

## Syntax Highlighting

If you didn't get any syntax highlighting that's because styled-components plugin support these alises (styled, css)

* One option is to change the var name from mq to styled, css or even xstyled
* Another option is to use es6-string-css it's VS Code plugin, [learn more](https://marketplace.visualstudio.com/items?itemName=bashmish.es6-string-css)

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Abdalhadi Abdallah** - *Initial work* - [hadiab](https://github.com/hadiab)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details