import Mirador from 'mirador/dist/es/src/index';
import { miradorImageToolsPlugin } from 'mirador-image-tools';
import textOverlayPlugin from 'mirador-textoverlay/es';

window.miradorPlugins = [
  ...miradorImageToolsPlugin,
  ...textOverlayPlugin,
];

// Monkey-patch our plugins in, by default.
Mirador.original_viewer = Mirador.viewer;
Mirador.islandora_viewer = function (config, pluginsOrStruct) {
  if (typeof pluginOrStruct !== 'undefined') {
    return Mirador.original_viewer(config, pluginsOrStruct);
  }
  else {
    return Mirador.original_viewer(config, {
      plugins: window.miradorPlugins
    });
  }
};
Mirador.viewer = Mirador.islandora_viewer;

window.Mirador = Mirador;
