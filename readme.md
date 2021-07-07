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

create a media query, by default the breakpoints are [576, 768, 992, 1200]

```ts
import { createMediaQuery } from 'styled-easy-mq';

const mq = createMediaQuery()
```

You can pass your own breakpoints

```ts
import { createMediaQuery } from 'styled-easy-mq';

const br = [500, 700, 900, 1100]

const mq = createMediaQuery(br)
```

Passing an array with value for each breakpoint
I'm using facepaint to generate media query over properties that has an array for thier value
Note that the first value is considered a default value and is not a child of a media query
Learn more about (facepaint)[https://github.com/emotion-js/facepaint]

```ts
mq`
	width: ${[300, 600, 900]};
	color: ${["red", "blue"]};
	background-color: white;
`
```

### You can also use it as an object

```ts
mq({
	width: [300, 600, 900];
	color: ["red", "blue"];
	backgroundColor: "white"
})
```

## Example

With emotion, also work with styled-components

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

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Abdalhadi Abdallah** - *Initial work* - [hadiab](https://github.com/hadiab)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details