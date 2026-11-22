import VisualStoryV20 from './VisualStoryV20';
import {ArrowUpRight} from 'lucide-react';
import c from './config.json';
import raw from './expertise-v13.json';
import approved from './approved-experience.json';
import './expertise-v13.css';
type Topic={title:string;body:string};
type Detail={title:string;headline:string;intro:string;topics:Topic[];people:string[]};
type Person=typeof c.leadership[number];
type Entry={title:string;context:string;scope:string;outcome?:string};
const pages:Record<string,Detail>=raw.pages;
const sectors:string[]=raw.sectors;
const base=import.meta.env.BASE_URL;
const href=(p:string)=>base+p+(p?'/':'');
const canonical=(slug:string)=>({'kavya-rao':'kavya-rotta','armaan-shah':'armaan-sharoon'} as Record<string,string>)[slug]||slug;
const members=(d:Detail)=>c.leadership.filter(p=>d.people.includes(canonical(p.slug)));
const servicePaths=c.services.map(s=>s.slug);
export const hasExpertise=(route:string)=>Object.prototype.hasOwnProperty.call(pages,route)||route==='services'&&c.key==='civantis';
function TextLink({to,label}:{to:string;label:string}){return <a className="ex-link" href={href(to)}>{label}<ArrowUpRight size={17}/></a>}
function People({detail}:{detail:Detail}){const people=members(detail);return people.length>0?<section className="ex-people"><h2>Related professionals</h2><div>{people.map(p=><a key={p.slug} href={href('team/'+p.slug)}><span><strong>{p.name}</strong><small>{p.role}</small></span><ArrowUpRight size={19}/></a>)}</div></section>:null}
function Topics({detail}:{detail:Detail}){return detail.topics.length>0?<section className="ex-topics">{detail.topics.map(t=><section key={t.title}><h2>{t.title}</h2><p>{t.body}</p></section>)}</section>:null}
function Index({paths,title}:{paths:string[];title:string}){return <section className="ex-index"><h2>{title}</h2><div>{paths.map((k,i)=>pages[k]&&<a key={k} href={href(k)}><div><span className="n19-sector-number" aria-hidden="true">{String(i+1).padStart(2,'0')}</span><h3>{pages[k].title}</h3><p>{pages[k].intro}</p></div><ArrowUpRight size={21}/></a>)}</div></section>}
function Experience(){const entries=approved.entries as Entry[];return entries.length>0?<section className="ex-approved"><h2>{c.key==='avenor'?'Selected assets and transactions':'Selected representative matters'}</h2>{entries.map((e,i)=><article key={i}><h3>{e.title}</h3><p>{e.context}</p><p>{e.scope}</p>{e.outcome&&<p>{e.outcome}</p>}</article>)}</section>:null}
export function ProfileExpertise({person}:{person:Person}){const related=servicePaths.filter(k=>pages[k]?.people.includes(canonical(person.slug)));return related.length>0?<section className="ex-profile-links"><h2>{c.key==='avenor'?'Investment expertise':'Related practice areas'}</h2><div>{related.map(k=><TextLink key={k} to={k} label={pages[k].title}/>)}</div></section>:null}
export default function Expertise({route}:{route:string}){const d=pages[route];if(!d)return null;const portfolio=route==='portfolio';const strategy=route==='investment-strategies';const sector=route.startsWith('investment-strategies/');return <article className={'ex-a'+(strategy?' n19-strategy':'')+(sector?' n19-sector n19-sector-'+route.split('/').pop():'')}><section className="ex-hero"><div><a href={href(sector?'investment-strategies':'')}>{sector?'Investment strategies':'Avenor'} / {d.title}</a><h1>{d.headline}</h1></div><p>{d.intro}</p></section><VisualStoryV20 route={route}/>{portfolio&&<Experience/>}{strategy&&<Index paths={sectors} title="Property sectors"/>}{portfolio&&<section className="n19-portfolio-focus"><h2>Investment focus</h2><div><p>Explore the property sectors and the considerations relevant to each investment strategy.</p><TextLink to="investment-strategies" label="View investment strategies"/></div></section>}<Topics detail={d}/>{sector&&<TextLink to="investment-strategies" label="All investment strategies"/>}<People detail={d}/><section className="ex-footer"><TextLink to={portfolio?'asset-management':'portfolio'} label={portfolio?'Asset management':'Portfolio'}/><TextLink to="contact" label="Contact Avenor"/></section></article>}
