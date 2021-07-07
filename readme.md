# Styled Easy MQ

React easy state managment with hooks

[![npm version](https://img.shields.io/npm/v/reaxy.svg)](https://www.npmjs.com/package/reaxy)

### Installing

Install with npm

```
npm install styled-easy-mq
```

Install with yarn

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
const br = [500, 700, 900, 1100]

const mq = createMediaQuery(br)
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

I'm using facepaint to generate media query each over properties that has an array value,
the first value is considered a default value and is not a child of a media query,
learn more about [facepaint](https://github.com/emotion-js/facepaint)

### You can also use it as an object

```tsx
mq({
	width: [300, 600, 900];
	color: ["red", "blue"];
	backgroundColor: "white"
})
```

## Example

With emotion (also work with styled-components)

```tsx
import { createMediaQuery } from 'styled-easy-mq';
import { css } from "emotion"

const mq = createMediaQuery(br)

const className = mq`
	display: flex;
	flex-direction: ${["column", "row"]};
	padding: ${[10, 30]};
`

<div className={css(className)}>Example</div>
```

## Syntax Highlighting

If you didn't get any syntax highlighting that's because styled-components plugin support these alises (styled, css)

* One option is to change the var name from mq to styled, css or even xstyled
* Another option is to use es6-string-css it's VS Code plugin By Mikhail Bashkirov to [learn more](https://marketplace.visualstudio.com/items?itemName=bashmish.es6-string-css)

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Abdalhadi Abdallah** - *Initial work* - [hadiab](https://github.com/hadiab)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details