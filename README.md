> Simple function timing

# API

```js

  import time from 'time-it'
  import work from './stuff/work'
  import moreWork from './stuff/more'

  await time('Do the work', work)
  // Do the work: 12.735s

  const { returnVal, ms } = await time('More work', moreWork)
  console.log({returnVal, ms})
  // { "returnVal": "yes", "ms": 55468 }

```

# Types
```typescript

  function timeIt(
    label: string,        // label used for console.log
    fn: () => any,        // function to time
    log?: boolean         // log to console
  ): Promise<{
    returnVal: any;       // return value of fn
    ms: number;           // raw milliseconds
    asString: string;     // time formated to seconds
  }>

```
