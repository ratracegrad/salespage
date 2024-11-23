# Banner Center Component

The Banner Center component displays a centered banner message with a link. It's designed to be responsive and supports both light and dark modes. The component uses configuration from a central config file and supports internationalization for the banner message.

![Banner Center Image](/BannerCenter.png)


## Usage

To use this component in your application, simply include it in your template:

```
<BannerCenter />
```


## Configuration and Internationalization

The component uses the following configuration entries from the `config` file:

- `config.banner.url`: The URL for the banner link
- `config.banner.message`: The key for the internationalized banner message

The banner message is internationalized using the `$t` function, which retrieves the localized text based on the `config.banner.message` key.

## Styling

The component uses Tailwind CSS classes for styling. The background and text colors for light and dark modes are as follows:

#### Light Mode:

- background: `bannerLightBackground`
- text color: `bannerLightText`

#### Dark Mode:
- background: `bannerDarkBackground`
- text color: `bannerDarkText`

You can customize the colors by updating the values in the `tailwind.config.js` file.
