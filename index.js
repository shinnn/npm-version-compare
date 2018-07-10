'use strict';

const {inspect} = require('util');

const inspectWithKind = require('inspect-with-kind');
const parseNpmVersion = require('parse-npm-version');

const ERROR = 'Expected a semver-valid version (<string>)';

module.exports = async function npmVersionCompare(...args) {
	const argLen = args.length;

	if (argLen !== 1) {
		throw new RangeError(`Expected 1 argument (<string>), but got ${argLen || 'no'} arguments.`);
	}

	const [anotherVersion] = args;

	if (typeof anotherVersion !== 'string') {
		throw new TypeError(`${ERROR}, but got a non-string value ${inspectWithKind(anotherVersion)}.`);
	}

	if (anotherVersion.length === 0) {
		throw new RangeError(`${ERROR}, but got '' (empty string).`);
	}

	if (anotherVersion.trim().length === 0) {
		throw new RangeError(`${ERROR}, but got a whitespace-only string ${inspect(anotherVersion)}.`);
	}

	return (await parseNpmVersion()).compare(anotherVersion);
};
