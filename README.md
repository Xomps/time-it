Simple function timing, by default logs to the console (e.g. `Generate API: 5.877s`)

## Install

```bash

npm install github:xomps/time-it

```

## API / Examples

```js

  import time from 'time-it'
  import { generateKey, encrypt } from './lib'

  const { returnVal: key } = await time('Generate key', generateKey) // -> Generate key: 12.735s

  const { returnVal: encryptedData, ms } = await time('Encrypt', () => encrypt(key), false)
  console.log(ms) // -> 55468

```

## Types
```typescript

  function timeIt(
    label: string,        // label used for console.log
    fn: () => any,        // function to time
    log?: boolean = true  // log to console
  ): Promise<{
    returnVal: any;       // return value of fn
    ms: number;           // raw milliseconds
    asString: string;     // time formated to seconds
  }>

```
