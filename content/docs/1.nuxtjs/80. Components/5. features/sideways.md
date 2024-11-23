# FAQ Basic Component

This component displays a list of features in a sideways layout. It consists of a title section on the left and a list of features on the right. The component is responsive, adjusting its layout for different screen sizes, and supports both light and dark modes.

![Banner Center Image](/FeatureSideways.png)


## Usage

To use this component in your application, simply include it in your template:

```
<FeaturesSideways />
```


## Configuration and Internationalization

The component pulls feature data from the `config.features` array. Each feature should have an `id`, `title`, and `description`.

Internationalization is implemented using the $t function, which retrieves translated text for the feature titles and descriptions.

## Styling

The component uses Tailwind CSS classes for styling. The background and text colors for light and dark modes are as follows:

#### Light Mode:

- background: `featuresLightBackground`
- text color: `featuresLightText`

#### Dark Mode:
- background: `featuresDarkBackground`
- text color: `featuresDarkText`

You can customize the colors by updating the values in the `tailwind.config.js` file.
