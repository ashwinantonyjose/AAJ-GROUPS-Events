import fs from 'fs';
import path from 'path';
import https from 'https';

const assets = [
  // Hero slides (6)
  {
    dir: 'public/images/hero',
    name: 'hero-kerala-wedding.jpg',
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85',
    alt: 'Luxury Kerala Indian Wedding Floral Stage and Mandap Decor',
    author: 'Photos by Lanty / Unsplash'
  },
  {
    dir: 'public/images/hero',
    name: 'hero-beach-wedding.jpg',
    url: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=2000&q=85',
    alt: 'Romantic Coastal Beach Wedding Mandap at Sunset in Kerala',
    author: 'Asad Photo Maldives / Unsplash'
  },
  {
    dir: 'public/images/hero',
    name: 'hero-grand-reception.jpg',
    url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=2000&q=85',
    alt: 'Grand Luxury Wedding Reception Ballroom with Crystal Chandeliers',
    author: 'Al Elmes / Unsplash'
  },
  {
    dir: 'public/images/hero',
    name: 'hero-floral-stage.jpg',
    url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=2000&q=85',
    alt: 'Lavish Floral Stage Decoration with Warm Ambient Illumination',
    author: 'Jeremy Wong / Unsplash'
  },
  {
    dir: 'public/images/hero',
    name: 'hero-corporate-event.jpg',
    url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=2000&q=85',
    alt: 'Premium Corporate Conference and Keynote Stage Lighting',
    author: 'Alexandre Pellaes / Unsplash'
  },
  {
    dir: 'public/images/hero',
    name: 'hero-birthday-party.jpg',
    url: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=2000&q=85',
    alt: 'Bespoke Evening Celebration with Champagne and Golden Lights',
    author: 'Chuttersnap / Unsplash'
  },

  // 14 Services
  {
    dir: 'public/images/services',
    name: 'wedding-planning.jpg',
    url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
    alt: 'Complete Traditional Indian and Modern Wedding Planning',
    author: 'Unsplash'
  },
  {
    dir: 'public/images/services',
    name: 'destination-weddings.jpg',
    url: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1200&q=80',
    alt: 'Kerala Backwaters & Luxury Resort Destination Weddings',
    author: 'Unsplash'
  },
  {
    dir: 'public/images/services',
    name: 'beach-weddings.jpg',
    url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=80',
    alt: 'Oceanfront Beach Weddings in Kovalam and Varkala',
    author: 'Unsplash'
  },
  {
    dir: 'public/images/services',
    name: 'corporate-events.jpg',
    url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    alt: 'High-Impact Corporate Galas, Annual Meets & Summits',
    author: 'Unsplash'
  },
  {
    dir: 'public/images/services',
    name: 'birthday-parties.jpg',
    url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Milestone Birthday Celebrations & Curated Themes',
    author: 'Unsplash'
  },
  {
    dir: 'public/images/services',
    name: 'engagement-reception.jpg',
    url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80',
    alt: 'Engagement Ceremonies and Grand Receptions',
    author: 'Unsplash'
  },
  {
    dir: 'public/images/services',
    name: 'music-entertainment.jpg',
    url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
    alt: 'Live Bands, Celebrity Artists & DJ Entertainment',
    author: 'Unsplash'
  },
  {
    dir: 'public/images/services',
    name: 'stage-shows.jpg',
    url: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80',
    alt: 'Spectacular Stage Shows & Live Cultural Performances',
    author: 'Unsplash'
  },
  {
    dir: 'public/images/services',
    name: 'photography-videography.jpg',
    url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Cinematic Wedding Films & Editorial Photography',
    author: 'Unsplash'
  },
  {
    dir: 'public/images/services',
    name: 'catering-services.jpg',
    url: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
    alt: 'Authentic Kerala Sadya & Multi-Cuisine Gourmet Buffets',
    author: 'Unsplash'
  },
  {
    dir: 'public/images/services',
    name: 'private-parties.jpg',
    url: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80',
    alt: 'Intimate Family Gatherings, Anniversaries & Cocktail Soirées',
    author: 'Unsplash'
  },
  {
    dir: 'public/images/services',
    name: 'inaugurations-launches.jpg',
    url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80',
    alt: 'Grand Commercial Inaugurations & Brand Launches',
    author: 'Unsplash'
  },
  {
    dir: 'public/images/services',
    name: 'conferences-exhibitions.jpg',
    url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    alt: 'Industry Trade Expos, Seminars & Business Conclaves',
    author: 'Unsplash'
  },
  {
    dir: 'public/images/services',
    name: 'college-cultural.jpg',
    url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    alt: 'Youth Festivals, Inter-College Cultural Fests & Pro-Nites',
    author: 'Unsplash'
  },

  // Venues (6 Kerala signature venue styles)
  {
    dir: 'public/images/venues',
    name: 'venue-kumarakom-backwaters.jpg',
    url: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    alt: 'Luxury Backwater Lake Resort in Kumarakom / Alleppey',
    author: 'Unsplash'
  },
  {
    dir: 'public/images/venues',
    name: 'venue-bolgatty-palace.jpg',
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    alt: 'Historic Waterfront Island Palace Resort in Kochi',
    author: 'Unsplash'
  },
  {
    dir: 'public/images/venues',
    name: 'venue-kovalam-cliff.jpg',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Dramatic Sea Cliff Wedding Lawn in Kovalam',
    author: 'Unsplash'
  },
  {
    dir: 'public/images/venues',
    name: 'venue-munnar-hills.jpg',
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    alt: 'Misty Tea Plantation Valley Venue in Munnar',
    author: 'Unsplash'
  },
  {
    dir: 'public/images/venues',
    name: 'venue-kochi-grand-convention.jpg',
    url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
    alt: 'Ultra-Modern Pillarless Grand Ballroom in Ernakulam',
    author: 'Unsplash'
  },
  {
    dir: 'public/images/venues',
    name: 'venue-wayanad-rainforest.jpg',
    url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Serene Forest Eco-Luxury Haven in Wayanad',
    author: 'Unsplash'
  },

  // Gallery items (12)
  {
    dir: 'public/images/gallery',
    name: 'gallery-01.jpg',
    url: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1000&q=80',
    alt: 'Beach Mandap Floral Canopy',
    author: 'Unsplash'
  },
  {
    dir: 'public/images/gallery',
    name: 'gallery-02.jpg',
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
    alt: 'Traditional Brass Lamps & Floral Aisle',
    author: 'Unsplash'
  },
  {
    dir: 'public/images/gallery',
    name: 'gallery-03.jpg',
    url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80',
    alt: 'Grand Reception Table Decor',
    author: 'Unsplash'
  },
  {
    dir: 'public/images/gallery',
    name: 'gallery-04.jpg',
    url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=80',
    alt: 'Live Concert Stage Lighting',
    author: 'Unsplash'
  },
  {
    dir: 'public/images/gallery',
    name: 'gallery-05.jpg',
    url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=80',
    alt: 'Corporate Summit Production',
    author: 'Unsplash'
  },
  {
    dir: 'public/images/gallery',
    name: 'gallery-06.jpg',
    url: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=1000&q=80',
    alt: 'Festive Outdoor Celebration',
    author: 'Unsplash'
  },
  {
    dir: 'public/images/gallery',
    name: 'gallery-07.jpg',
    url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=80',
    alt: 'Floral Archway & Seating Design',
    author: 'Unsplash'
  },
  {
    dir: 'public/images/gallery',
    name: 'gallery-08.jpg',
    url: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80',
    alt: 'Artisanal Catering & Gourmet Setup',
    author: 'Unsplash'
  },
  {
    dir: 'public/images/gallery',
    name: 'gallery-09.jpg',
    url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80',
    alt: 'Intimate Ceremony Moments',
    author: 'Unsplash'
  },
  {
    dir: 'public/images/gallery',
    name: 'gallery-10.jpg',
    url: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=80',
    alt: 'Theatrical Stage Lighting & Visuals',
    author: 'Unsplash'
  },
  {
    dir: 'public/images/gallery',
    name: 'gallery-11.jpg',
    url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1000&q=80',
    alt: 'Party Ambience & Balloon Artistry',
    author: 'Unsplash'
  },
  {
    dir: 'public/images/gallery',
    name: 'gallery-12.jpg',
    url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1000&q=80',
    alt: 'Couple Portrait under Fairy Lights',
    author: 'Unsplash'
  },

  // About & Brand photos
  {
    dir: 'public/images/about',
    name: 'about-craft.jpg',
    url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    alt: 'AAJ GROUPS Event Design Excellence',
    author: 'Unsplash'
  },
  {
    dir: 'public/images/about',
    name: 'about-founder.jpg',
    url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    alt: 'Ashwin Antony Jose - AAJ GROUPS Leadership',
    author: 'Unsplash'
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        // handle redirect
        https.get(response.headers.location, (redirectResponse) => {
          redirectResponse.pipe(file);
          file.on('finish', () => {
            file.close(resolve);
          });
        }).on('error', (err) => {
          fs.unlink(dest, () => {});
          reject(err);
        });
      } else if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else {
        file.close();
        fs.unlink(dest, () => {});
        reject(new Error(`Failed with status code: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log(`Starting asset curation and download of ${assets.length} images...`);
  
  for (const item of assets) {
    if (!fs.existsSync(item.dir)) {
      fs.mkdirSync(item.dir, { recursive: true });
    }
    const targetPath = path.join(item.dir, item.name);
    try {
      console.log(`Downloading: ${item.name}...`);
      await downloadFile(item.url, targetPath);
      console.log(`✓ Saved ${item.name} (${fs.statSync(targetPath).size} bytes)`);
    } catch (err) {
      console.error(`✗ Error downloading ${item.name}: ${err.message}`);
    }
  }

  // Save license registry
  const licenseFile = 'public/images/ASSET_LICENSES.json';
  fs.writeFileSync(licenseFile, JSON.stringify({
    source: "Unsplash Royalty-Free License (Commercial and non-commercial usage permitted)",
    license_url: "https://unsplash.com/license",
    last_updated: new Date().toISOString(),
    assets: assets.map(a => ({
      file: `${a.dir}/${a.name}`,
      alt: a.alt,
      author: a.author,
      source_url: a.url
    }))
  }, null, 2));

  console.log(`Asset curation complete! License registry saved to ${licenseFile}`);
}

run();
