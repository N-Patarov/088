import mongoose from 'mongoose';

import{ scrapeFlagman } from './sources/flagman.js';
import{ scrapeNewsBg } from './sources/newsBg.js';

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/demo");

function resolveAfter1Minute() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 60000);
    });
  }
export async function scrape () {
    while (true) {
      scrapeFlagman();
      scrapeNewsBg();
      const wait = await resolveAfter1Minute();
    }
}




