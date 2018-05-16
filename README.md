# id-pl

> Provides utility methods to validate and generate various identification numbers used in Poland such as
> [NIP](https://pl.wikipedia.org/wiki/NIP), [REGON](https://pl.wikipedia.org/wiki/REGON),
> [PESEL](https://pl.wikipedia.org/wiki/PESEL), etc.

[![Build Status](https://travis-ci.org/SOFTWARE-CLINIC/id-pl.svg?branch=master)](https://travis-ci.org/SOFTWARE-CLINIC/id-pl)
[![npm version](https://badge.fury.io/js/id-pl.svg)](http://badge.fury.io/js/id-pl)
[![Dependency Status](https://david-dm.org/SOFTWARE-CLINIC/id-pl.svg)](https://david-dm.org/SOFTWARE-CLINIC/id-pl)
[![Code Climate](https://codeclimate.com/github/SOFTWARE-CLINIC/id-pl/badges/gpa.svg)](https://codeclimate.com/github/SOFTWARE-CLINIC/id-pl)
[![Test Coverage](https://codeclimate.com/github/SOFTWARE-CLINIC/id-pl/badges/coverage.svg)](https://codeclimate.com/github/SOFTWARE-CLINIC/id-pl/coverage)

> **Note** that this project is still in its **incubating phase**.

## Installation

```bash
$ npm install id-pl --save --save-exact
```

## Quick Start

```js
const PESEL = require('id-pl').PESEL;
const REGON = require('id-pl').REGON;
const IdentityCard = require('id-pl').IdentityCard;

expect(PESEL.isValid('83071503434')).to.be.true;
expect(REGON.isValid('975124224')).to.be.true;
expect(IdentityCard.isValid('ABA300000')).to.be.true;
```
