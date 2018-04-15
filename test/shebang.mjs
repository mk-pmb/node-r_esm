#!/usr/bin/env node-r_esm
import util from 'util';

const report = () => console.log('util.promisify?', typeof util.promisify);
setTimeout(report, 5);
export default report;
