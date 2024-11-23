# Footer Vertical Component

This component represents a vertical footer layout for a web application. It includes the app logo, name, social links, copyright notice, and two columns of links (general links and legal links). The footer is responsive and adapts to different screen sizes.

![Footer Vertical](/FooterVertical.png)

## Usage

To use this component in your application, simply include it in your template:

```
<FooterVertical />
```

## Configuration and Internationalization

The component uses the following configuration entries from the `config` object:

- `config.footer.links`: An array of navigation links
- `config.footer.legal`: An array of legal links

The navigation items are combined from both `links` and `legal` arrays.

The component uses the $t function for internationalization. Each navigation item's name is passed through the $t function to retrieve the localized text.

## Styling

The component uses Tailwind CSS classes for styling. The background and text colors for light and dark modes are as follows:

#### Light Mode:

- background: `footerLightBackground`
- text color: `footerLightText`

#### Dark Mode:
- background: `footerDarkBackground`
- text color: `footerDarkText`

You can customize the colors by updating the values in the `tailwind.config.js` file.
