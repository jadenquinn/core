# @stefanwimmer128/core

stefanwimmer128 core

## Installation

``` bash
yarn add @stefanwimmer128/core
# or:
npm install @stefanwimmer128/core
```

## Usage

[Try @stefanwimmer128/core](https://npm.runkit.com/@stefanwimmer128/core)

@stefanwimmer128/core can be used with ES6-style import, CommonJS, AMD and in the Browser.

``` javascript
/* ES6-style import */
import core from "@stefanwimmer128/core";
```

``` javascript
/* CommonJS */
var core = require("@stefanwimmer128/core").default;
```

``` javascript
/* AMD */
require([ "node_modules/@stefanwimmer128/core/dist/core.js" ], function (core)
{
    # use core here
});
```

``` html
<!-- Browser -->
<script src="node_modules/@stefanwimmer128/core/dist/core.js"></script>
```

The builds in the `dist/` folder are bundled with all required dependencies.

It is possible to import single functions by importing the required file from the `js/` folder. This is only possible in ES6-style import and CommonJS.

``` javascript
/* ES6-style import */
import chain from "@stefanwimmer128/core/js/utils/chain";
```

``` javascript
/* CommonJS */
var chain = require("@stefanwimmer128/core/js/utils/chain").default;
```

## API documentation

@stefanwimmer128/core exports the following functions:

- Array operations
    - [`#concat`](array/concat.md) -  Add value(s) to array
    - [`#each`](array/each.md) - Cycle through each element in an array
    - [`#filter`](array/filter.md) - Filter elements in array
    - [`#find`](array/find.md) - Find element in array
    - [`#flatten`](array/flatten.md) - Flatten array
    - [`#map`](array/map.md) - Map through elements in array
    - [`#mapKey`](array/mapKey.md) - Map elements to key
    - [`#reduce`](array/reduce.md) - Process array
    - [`#reverse`](array/reverse.md) - Reverse array
    - [`#shift`](array/shift.md) - Remove elements from head of array
- Boolean operations
    - [`#invert`](boolean/invert.md) - Invert boolean value or wrap function to return inverted boolea value
- Function operations
    - [`#processors`](function/processors.md) - Wrap function to preprocess arguments and postprocess return value
- Math operations
    - [`#sum`](math/sum.md) - Sum up numbers
- Object operations
    - [`#extend`](object/extend.md) - Extend object
    - [`#withProperty`](object/withProperty.md) - Returns object with given key changed to given value
- Utils
    - [`#chain`](utils/chain.md) - Allows to use above functions in a chained structure

These functions are curried, so usage looks like this:

``` javascript
const map = core.map(t => t + 1);
map([ 0, 1, 2, 3 ]); /* [ 1, 2, 3, 4 ] */
```