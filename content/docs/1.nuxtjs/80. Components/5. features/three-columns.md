# Features Three Columns Component

This component renders a section displaying a grid of features. It uses the `SectionWrapper` component to create a container and displays a title using the `FeaturesTitle` component. The features are dynamically rendered based on the configuration provided in the `config` object.

![Banner Center Image](/BannerCenter.png)

## Usage

To use this component in your application, simply include it in your template:

```
<FeaturesColumnThree />
```

## Configuration and Internationalization

The component uses the `config.features` array to populate the feature cards. Each feature object in the array should have the following properties:

- **id**: A unique identifier for the feature
- **icon**: The name of the icon to display
- **title**: The title of the feature
- **description**: A brief description of the feature

The component uses the $t function for internationalization. The title and description of each feature are translated using their respective keys from the translation files.

## Styling

The component uses Tailwind CSS classes for styling. The background and text colors for light and dark modes are as follows:

#### Light Mode:

- background: `featureLightBackground`
- text color: `featureLightText`

#### Dark Mode:
- background: `featureDarkBackground`
- text color: `featureDarkText`

You can customize the colors by updating the values in the `tailwind.config.js` file.
