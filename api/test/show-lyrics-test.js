const assert = require('chai').expect;

const page = require('../page/show-lyrics-page');

const testCase = {
  positive: {
    getLyrics:
      'Sebagai user, saya ingin mendapatkan lirik ketika saya menginput nama artis dan lagunya',
  },
  negative: {
    noLyrics:
      'Sebagai user, saya tidak akan mendapatkan lirik ketika menginput nama teman saya dan lagu yang dia cover',
  },
};

describe(`Show Lyrics`, () => {
  const artist = 'Justin Bieber';
  const song = 'Sorry';
  const temanSaya = 'Hanif';

  it(`@get ${testCase.positive.getLyrics}`, async () => {
    const response = await page.getLyrics(artist, song);
    assert(response.status).to.equal(200);
    //console.log(response);
  }),
    it(`@get ${testCase.negative.noLyrics}`, async () => {
      const response = await page.getLyrics(temanSaya, song);
      assert(response.status).to.equal(502);
      //assert(response.body.error).to.equal('No lyrics found');
      //console.log(response);
    });
});
