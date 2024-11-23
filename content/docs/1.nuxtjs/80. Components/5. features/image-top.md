# Features Image Top Component

This component displays a feature section with an image at the top, followed by a byline and a grid of features. It's designed to showcase key features or benefits of a product or service, with support for both light and dark modes and internationalization.

![Banner Center Image](/FeaturesImageTop.png)

## Usage

To use this component in your application, simply include it in your template:

```
<FeaturesImageTop />
```

## Configuration and Internationalization

The component pulls feature data from the `config` object, specifically the `features` array. Each feature in this array should have an `id`, `icon`, `title`, and `description`.

- `features.bylineTitle`
- `features.bylineDescription`
- `feature.title`
- `feature.description`

Make sure these keys are defined in your localization files.

## Styling

The component uses Tailwind CSS classes for styling. The background and text colors for light and dark modes are as follows:

#### Light Mode:

- background: `featureLightBackground`
- text color: `featureLightText`

#### Dark Mode:
- background: `featureDarkBackground`
- text color: `featureDarkText`

You can customize the colors by updating the values in the `tailwind.config.js` file.
