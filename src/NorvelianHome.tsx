import {PortraitLink} from './PortraitV19';
import {ArrowUpRight, ArrowRight} from 'lucide-react';
import c from './config.json';
import './home-v8.css';
const base = import.meta.env.BASE_URL;
const link = (s:string) => base+s+'/';
const descriptions: Record<string,string> = {
  'investment-philosophy':'Asset fundamentals, resilient cash flows and a clear ownership thesis.',
  'investment-strategies':'A considered approach to commercial, industrial, residential and strategic land opportunities.',
  'asset-management':'Acquisition diligence, portfolio oversight, leasing and lifecycle planning.'
};
export default function NorvelianHome(){
  return <div className="v8-norvelian">
    <section className="av8-opening" aria-labelledby="av8-title">
      <div className="av8-opening-text">
        <div><p className="av8-label">Real estate investment &amp; asset management</p><h1 id="av8-title">Capital. Assets.<br/>Enduring value.</h1></div>
        <div className="av8-opening-intro"><p>{c.intro}</p><a className="av8-link" href={link('investment-philosophy')}>Our investment philosophy <ArrowUpRight size={19}/></a></div>
      </div>
    </section>
    <section className="av8-mandate" aria-labelledby="av8-mandate-title">
      <div className="av8-mandate-intro"><p className="av8-label">Our approach</p><h2 id="av8-mandate-title">From acquisition to asset management.</h2><p>Our work considers acquisition terms, financing, leasing, operating costs and the long-term requirements of each asset.</p><a className="av8-link" href={link('about')}>About Norvelian <ArrowRight size={17}/></a></div>
      <div className="av8-mandate-list">{c.services.map(s=><a href={link(s.slug)} key={s.slug}><div><h3>{s.title}</h3><p>{descriptions[s.slug] || s.description}</p></div><ArrowUpRight size={22}/></a>)}</div>
    </section>
    <section className="av8-sectors" aria-labelledby="av8-sectors-title">
      <div className="av8-sectors-intro"><p className="av8-label">Investment focus</p><h2 id="av8-sectors-title">Property sectors and investment strategies.</h2><a className="av8-link" href={link('investment-strategies')}>Explore our strategies <ArrowUpRight size={18}/></a></div>
      <div className="av8-sector-list">{(c.services.find(s=>s.slug==='investment-strategies')?.items || []).map(s=><div key={s}>{s}</div>)}</div>
    </section>
    <section className="av8-people" aria-labelledby="av8-people-title"><p className="av8-label">Our people</p><div><h2 id="av8-people-title">Investment and operating expertise.</h2><p>Our team brings together investment strategy, finance, operations, asset management and research.</p><div className="n19-home-portraits">{c.leadership.filter(p=>/managing partner|founding partner|chief operating officer|chief financial officer/i.test(p.role)).map(p=><PortraitLink key={p.slug} person={p}/>)}</div><a className="av8-link" href={link('team')}>Meet our people <ArrowUpRight size={19}/></a></div></section>
    <section className="av8-contact"><h2>Contact Norvelian.</h2><a className="av8-button" href={link('contact')}>Connect with Norvelian <ArrowUpRight size={19}/></a></section>
  </div>;
}
