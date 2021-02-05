<p align="center">
    <img width="200" src="https://altv.mp/img/v_logo.b048d1c4.svg" alt="TfL Logo">
    <h1 align="center">alt:V API Wrapper</h1>
    <p align="center">A NodeJS wrapper for the alt:V API, made with TypeScript.</p>
    <p align="center">Read the <a href="https://zackaryh8.github.io/altv-api-wrapper/">Documentation</a></p>
</p>

[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/ZackaryH8/altv-api-wrapper.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/ZackaryH8/altv-api-wrapper/context:javascript)
![NPM Version](https://img.shields.io/npm/v/altv-api-wrapper)
![Issues](https://img.shields.io/github/issues/ZackaryH8/altv-api-wrapper)

## Installation
```
npm install altv-api-wrapper
yarn add altv-api-wrapper
```

## Contribute

There are many ways to contribute to this repo.
* [Submit bugs](https://github.com/ZackaryH8/altv-api-wrapper/issues) and help us verify fixes as they are checked in.
* Review the [source code changes](https://github.com/ZackaryH8/altv-api-wrapper/pulls).

## Example Usage

### Get Server By ID

```js
import { Masterlist } from 'altv-api-wrapper';

const masterlist = new Masterlist()

masterlist.getServerByID('xxxx').then((result) => {
    console.log(result)
})
```

## Disclaimer
This repository is not affiliated, associated, authorized, endorsed by, or in any way officially connected with alt:V, or the alt:MP team.
