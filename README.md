# @deanacus/env

Just a little safety wrapper around
[`dotenv`](https://github.com/motdotla/dotenv).

Takes a key, and an optional path, loads `.env` if it hasn't already, then
checks for the existance of `key` on process.env, and throws if it doesn't
exist.

## Install

```bash
npm install @deanacus/env
```

## Usage

```js
import { getEnv } from '@deanacus/env';

// ...

const envValue = getEnv('key', 'optional/path/to/.env');
```
