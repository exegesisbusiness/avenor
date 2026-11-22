import './visual-story-v20.css';

type Graphic = {title:string;desc:string;file:string;alt:string};
const graphics: Record<string,Graphic> = {
  "about": {
    "title": "A real asset, examined from several angles",
    "desc": "Location, income and the responsibilities of ownership.",
    "file": "a1.jpg",
    "alt": "Editorial image accompanying About the Firm"
  },
  "investment-philosophy": {
    "title": "The investment case",
    "desc": "Connecting asset fundamentals, capital and holding period.",
    "file": "a2.jpg",
    "alt": "Editorial image accompanying Investment Philosophy"
  },
  "investment-strategies": {
    "title": "Property types have different economics",
    "desc": "The source of demand and the cost of ownership change with each property type.",
    "file": "a3.jpg",
    "alt": "Editorial image accompanying Investment Strategies"
  },
  "asset-management": {
    "title": "Beyond the purchase",
    "desc": "Leasing, operating decisions and capital works over an asset’s life.",
    "file": "a4.jpg",
    "alt": "Editorial image accompanying Asset Management"
  },
  "investment-strategies/commercial": {
    "title": "Commercial property",
    "desc": "Spaces shaped by business demand, leases and location.",
    "file": "a5.jpg",
    "alt": "Editorial image accompanying Commercial Real Estate"
  },
  "investment-strategies/office": {
    "title": "Office assets",
    "desc": "Building quality, connectivity and the evolving use of workspace.",
    "file": "a6.jpg",
    "alt": "Editorial image accompanying Office Assets"
  },
  "investment-strategies/retail": {
    "title": "Retail property",
    "desc": "Catchment, tenant mix and a location people return to.",
    "file": "a7.jpg",
    "alt": "Editorial image accompanying Retail Properties"
  },
  "investment-strategies/industrial-logistics": {
    "title": "Industrial and logistics",
    "desc": "Movement of goods depends on more than floor area.",
    "file": "a8.jpg",
    "alt": "Editorial image accompanying Industrial & Logistics"
  },
  "investment-strategies/residential": {
    "title": "Residential assets",
    "desc": "Housing, neighbourhood context and the economics of operation.",
    "file": "a9.jpg",
    "alt": "Editorial image accompanying Residential Investment Assets"
  },
  "investment-strategies/strategic-land": {
    "title": "Strategic land",
    "desc": "Rights, infrastructure and timing shape development potential.",
    "file": "a10.jpg",
    "alt": "Editorial image accompanying Strategic Land"
  },
  "portfolio": {
    "title": "A view across property sectors",
    "desc": "Investment interests are distinct from verified completed investments.",
    "file": "a11.jpg",
    "alt": "Editorial image accompanying Portfolio"
  }
};
const base=import.meta.env.BASE_URL;
export default function VisualStoryV20({route}:{route:string}){
  const g=graphics[route];
  if(!g)return null;
  return <section className="v20-story v20-a" aria-label="Visual introduction">
    <figure className="v20-artwork">
      <img src={base+'images/editorial-v20/'+g.file} alt={g.alt} loading="lazy" decoding="async"/>
    </figure>
    <div className="v20-story-copy">
      <p className="v20-kicker">THE REAL ASSET</p>
      <h2>{g.title}</h2>
      <p>{g.desc}</p>
    </div>
  </section>;
}
