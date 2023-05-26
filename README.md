## Islandora Additions

This is a fork of the demonstration project at https://github.com/ProjectMirador/mirador-integration. This project adapts the 
code to work within [Drupal](https://drupal.org/) for the [Islandora](https://github.com/islandora/documentation) project.

The main differences are 

1. Adding a few more plugins, and
2. Invoking Mirador is done in the islandora_mirador Drupal module.

## Integrating Mirador

This repository is designed to show integrating Mirador 3 with modern frontend build systems.

### Dependencies

You will likely need to have at least the following dependencies available in your `package.json`.

 - `mirador`
 - `react`
 - `react-dom`
 - `mirador-image-tools` - A plugin just to test plugin integration

### Webpack

See `./webpack` for a basic webpack setup for Mirador 3 + a plugin.

```sh
npm run webpack
```

### Parcel

See `./parcel`, but essentially it is just an html file referencing the JavaScript.

```sh
npm run parcel
```
