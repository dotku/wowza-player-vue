# wowza-player-vue

## Get Started

```bash
npm install
npm run serve
```

## Bugs

Prepare:

1. click togglego to file `src/components/WowzaPlayerBug1.vue`
2. update the license key (you could use .env.local file)

### Bug1

> wowzaplayer.js:46 Uncaught TypeError: Cannot read property 'getBoundingClientRect' of null
    at n.handleContainerResize (wowzaplayer.js:46)
    at r (wowzaplayer.js:47)

If you click `Toggle` button, you will get the bug.

### Bug2

> [Vue warn]: Error in mounted hook: "NotFoundError: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node."

Update any content, eg, string in the console.log, vue will hotload page, and
you will see the bug with the error.

> Hint: I found the function uiGetNode always return a node. For null value, it
> will return `<div></div>` node
