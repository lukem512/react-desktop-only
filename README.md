# react-desktop-only
A react component that will only display its children on desktop resolutions.

## Installation
The `react-desktop-only` package is not yet available from NPM.

## Usage
The component can be used by wrapping child components to restrict their display to desktop devices.

```js
import DesktopOnly from 'react-desktop-only'

const HeaderBar = (props) => (
  <div>
    <a href='/'>
      <img src='/img/logo.png' />
    </a>
    <DesktopOnly>
      <Menu />
    </DesktopOnly>
  </div>
)
```

By default, the component will display for screen resolutions above 768px. By passing a `desktopSize` prop to the component, or by setting `theme.desktopSize` in the [styled-components](https://www.styled-components.com/docs/advanced#theming) theme.

## Related

See [react-mobile-only](https://github.com/lukem512/react-mobile-only)

## License

MIT
