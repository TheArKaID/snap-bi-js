[![StandWithPalestine](https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/StandWithPalestine.svg)](#)

# SNAP BI JS (snap-bi-js)

SNAP BI JS is a JavaScript module that acts as a wrapper for Standar Nasional OpenAPI Pembayaran by Bank Indonesia (SNAP BI), designed and created by Arifia Kasastra R (Arka). This software helps streamline payment processes by providing an easy-to-use interface for interacting with SNAP BI payment systems.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This process follows the standards set out in the [Standar Teknis dan Keamanan](https://apidevportal.aspi-indonesia.or.id/docs/standar-teknis-keamanan) and [Standar Data dan Spesifikasi Teknis](https://apidevportal.aspi-indonesia.or.id/docs/standar-data-spesifikasi-teknis) as outlined by Bank Indonesia version 1.0.1 November 2021.

# Usage

## Installation
This is a Node.js module available through the npm registry. Installation is done using the npm install command:

```bash
$ npm install snap-bi-js
```

### Configuration
There are 2 ways to configure the module:
1. Create an environment variables based on the .env.example file.

In the env, private and public are base64 encoded. You have or not have to include the `enter` character after the key, based on two sides of client and server.

2. Set configuration based on the Config class.

In the Config class, you can set the configuration based on the object.

```javascript
import { SnapBI, Config } from "snap-bi";

/**
 * Example 1: Using environment variables
 * If you set the environment variables, you don't need to set the configuration.
 */
const apiSecurity = new APISecurity()
// Using function in this apiSecurity instance doesn't need to set the configuration again.

/**
 * Example 2: Using Config class on SnapBI initialization
 */
const config = {...}
const snapBI = new SnapBI(config)

/**
 * Example 3: Using Config class with setConfig method
 */
const config = {...}
const snapBI = new SnapBI()
snapBI.setConfig(config)
```
*This also works with CommonJS*

### Usage
Please refer to the [example](example) folder for more information.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.