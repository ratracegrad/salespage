# Banner Social Component

The Social Banner component is a simple Vue component that displays social media links in a banner format. It's designed to be responsive and supports both light and dark modes. The component uses the ButtonsSocialLinks component to render the actual social media links.

![Banner Social Image](/BannerSocial.png)


## Usage

To use this component in your application, simply include it in your template:

```
<BannerSocial />
```

## Styling

The component uses Tailwind CSS classes for styling. The background and text colors for light and dark modes are as follows:

#### Light Mode:

- background: `bannerLightBackground`
- text color: `bannerLightText`

#### Dark Mode:
- background: `bannerDarkBackground`
- text color: `bannerDarkText`

You can customize the colors by updating the values in the `tailwind.config.js` file.
