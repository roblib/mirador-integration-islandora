Mirador integration for Omeka
=============================

[Mirador integration for Omeka] is an example designed to show how to integrate
the version 3 of [Mirador] and its plugins with common frontend build systems
([webpack] and [parcel]). It is based on the generic repository [Mirador integration]
and is used to integrate Mirador inside [Omeka S] through the [module Mirador].


Installation
------------

To get the final js, you have to specify dependencies, then to setup them with
webpack or parcel.

### Dependencies

You will likely need to have at least the following dependencies available in
the `package.json`:

- `mirador`
- `react`
- `react-dom`

And any other plugins, like the ones set in `package.json`: `mirador-annotations`,
`mirador-dl-plugin`, `mirador-image-tools`, `mirador-share-plugin`, or `mirador-textoverlay`.

### Webpack

See `./webpack` for a basic webpack setup for Mirador 3 and plugins.

Use this command to minify it:

```sh
npm run webpack
```

### Parcel

See `./parcel`, but essentially it is just an html file referencing the
JavaScript.

Use this command to minify it:

```sh
npm run parcel
```

Usage
-----

See the module [Mirador Viewer] for [Omeka S] for a example of integration.


Warning
-------

Use it at your own risk.

It’s always recommended to backup your files and your databases and to check
your archives regularly so you can roll back if needed.


Troubleshooting
---------------

See online issues on the [issues] page on GitLab.


License
-------

This module is published under the [CeCILL v2.1] license, compatible with
[GNU/GPL] and approved by [FSF] and [OSI].

In consideration of access to the source code and the rights to copy, modify and
redistribute granted by the license, users are provided only with a limited
warranty and the software’s author, the holder of the economic rights, and the
successive licensors only have limited liability.

In this respect, the risks associated with loading, using, modifying and/or
developing or reproducing the software by the user are brought to the user’s
attention, given its Free Software status, which may make it complicated to use,
with the result that its use is reserved for developers and experienced
professionals having in-depth computer knowledge. Users are therefore encouraged
to load and test the suitability of the software as regards their requirements
in conditions enabling the security of their systems and/or data to be ensured
and, more generally, to use and operate it in the same conditions of security.
This Agreement may be freely reproduced and published, provided it is not
altered, and that no provisions are either added or removed herefrom.

[Mirador] is published under the [Apache 2] license.
Each Mirador plugin has a license. See each repository for more information.

This repository is based on [Mirador integration].


Copyright
---------

Widget [Mirador]:

* Copyright 2018 The Board of Trustees of the Leland Stanford Junior University

Repository [Mirador integration]:

* Copyright 2020 Jack Reed (see [mejackreed] on Github)

This repository:

* Copyright Daniel Berthereau, 2021 (see [Daniel-KM] on GitLab)


[Mirador integration for Omeka]: https://gitlab.com/Daniel-KM/Mirador-integration-Omeka
[Mirador integration]: https://github.com/ProjectMirador/mirador-integration
[Mirador]: https://projectmirador.org
[Omeka S]: https://omeka.org/s
[module Mirador]: https://gitlab.com/Daniel-KM/Omeka-S-module-Mirador
[webpack]: https://webpack.js.org
[parcel]: https://parceljs.org
[Mirador Viewer]: https://gitlab.com/Daniel-KM/Omeka-S-module-Mirador
[Omeka S]: https://omeka.org/s
[issues]: https://gitlab.com/Daniel-KM/Omeka-S-module-Mirador/-/issues
[CeCILL v2.1]: https://www.cecill.info/licences/Licence_CeCILL_V2.1-en.html
[GNU/GPL]: https://www.gnu.org/licenses/gpl-3.0.html
[FSF]: https://www.fsf.org
[OSI]: http://opensource.org
[Apache 2]: http://www.apache.org/licenses/LICENSE-2.0
[mejackreed]: https://github.com/mejackreed
[Daniel-KM]: https://gitlab.com/Daniel-KM "Daniel Berthereau"
