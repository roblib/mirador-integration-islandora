import Mirador from 'mirador/dist/es/src/index';
import { miradorImageToolsPlugin } from 'mirador-image-tools';
import textOverlayPlugin from 'mirador-textoverlay/es';
import miradorDownloadPlugin from 'mirador-dl-plugin';

window.Mirador = Mirador;

window.miradorPlugins = [
  ...miradorImageToolsPlugin,...textOverlayPlugin, ...miradorDownloadPlugin,
];
