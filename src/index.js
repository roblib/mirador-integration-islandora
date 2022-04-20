import Mirador from "mirador";

// For annotations and storage adapters. Only one is useful.
// see https://github.com/ProjectMirador/mirador-annotations/blob/master/demo/src/index.js
import miradorAnnotationPlugins from 'mirador-annotations';
import miradorSimpleAnnotationServerV2Adapter from "mirador-annotations/lib/SimpleAnnotationServerV2Adapter";

// Usual or light plugins.
import { miradorImageToolsPlugin } from 'mirador-image-tools';
import miradorImageDl from 'mirador-dl-plugin';
// import miradorRuler from 'mirador-ruler-plugin';
import miradorShare from 'mirador-share-plugin';
import miradorTextOverlay from 'mirador-textoverlay';

window.Mirador = Mirador;

// The used plugins is specified in the main js.
window.miradorPlugins = [
  {name: "annotations", plugin: miradorAnnotationPlugins},
  {name: "image-tools", plugin: miradorImageToolsPlugin},
  {name: "dl", plugin: miradorImageDl},
  // {name: "ruler" , plugin: miradorRuler},
  {name: "share" , plugin: miradorShare},
  {name: "textoverlay", plugin: miradorTextOverlay},
];

// The endpoint of the external annotation server is set in the main js.

// Bridge to store annotations.
window.miradorAnnotationServerAdapter = function (
    canvasId,
    annotationEndpoint
){
    return new miradorSimpleAnnotationServerV2Adapter(
      canvasId,
      annotationEndpoint
    );
};
