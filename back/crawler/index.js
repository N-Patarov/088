import mongoose from 'mongoose';

import{ scrapeFlagman } from './sources/flagman.js';
import{ scrapeNewsBg } from './sources/newsBg.js';

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/demo");

function resolveAfter5Minutes() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 300000);
    });
  }
export async function scrape () {
    while (true) {
      scrapeFlagman();
      scrapeNewsBg();
      const wait = await resolveAfter5Minutes();
    }
}




