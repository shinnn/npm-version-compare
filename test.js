'use strict';

const npmVersionCompare = require('.');
const test = require('tape');

test('npmVersionCompare()', async t => {
	t.equal(
		await npmVersionCompare('6.0.0'),
		1,
		'should compare the current npm version with another version.'
	);

	const fail = t.fail.bind(t, 'Unexpectedly succeeded.');

	try {
		await npmVersionCompare([-0]);
		fail();
	} catch ({message}) {
		t.equal(
			message,
			'Expected a semver-valid version (<string>), but got a non-string value [ -0 ] (array).',
			'should fail when it takes a non-string argument.'
		);
	}

	try {
		await npmVersionCompare('');
		fail();
	} catch ({message}) {
		t.equal(
			message,
			'Expected a semver-valid version (<string>), but got \'\' (empty string).',
			'should fail when it takes an empty string.'
		);
	}

	try {
		await npmVersionCompare('\n\t');
		fail();
	} catch ({message}) {
		t.equal(
			message,
			'Expected a semver-valid version (<string>), but got a whitespace-only string \'\\n\\t\'.',
			'should fail when it takes an whitespace-only string.'
		);
	}

	try {
		await npmVersionCompare('1.');
		fail();
	} catch (err) {
		t.equal(
			err.toString(),
			'TypeError: Invalid Version: 1.',
			'should fail when it takes an invalid version.'
		);
	}

	try {
		await npmVersionCompare();
		fail();
	} catch (err) {
		t.equal(
			err.toString(),
			'RangeError: Expected 1 argument (<string>), but got no arguments.',
			'should fail when it takes no arguments.'
		);
	}

	try {
		await npmVersionCompare('0.0.0', '0.0.0');
		fail();
	} catch (err) {
		t.equal(
			err.toString(),
			'RangeError: Expected 1 argument (<string>), but got 2 arguments.',
			'should fail when it takes too many arguments.'
		);
	}

	t.end();
});
