# 3DA
An application used for examination of 3D graphics in combination with bundlers

Project requires:
- Node.js v16.20
- NPM v8.9.14
- Yarn v1.22.11

As the project ustilises different bundlers, there are different ways to start the program. No matter which version, user must always use `yarn` command in the root folder of application to fetch required packages. Afterwards, different commands are required depending on the bundler:

Webpack: `yarn start`
Esbuild: `yarn esbuild-build`
Parcel: `yarn start-parcel`