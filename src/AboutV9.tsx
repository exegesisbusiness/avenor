import VisualStoryV20 from './VisualStoryV20';
import {PortraitImage} from './PortraitV19';
import {ArrowUpRight} from 'lucide-react';
import c from './config.json';
import './about-v9.css';
const base = import.meta.env.BASE_URL;
const url = (path:string) => base+path+'/';
export default function AboutV9(){
  const leadership = c.leadership.filter(p=>/managing partner|founding partner|chief operating officer|chief financial officer/i.test(p.role));
  return <article className="a9-about">
    <section className="a9-masthead n19-about-mast"><div className="a9-mast-copy"><a className="a9-breadcrumb" href={base}>Avenor / Our firm</a><h1>Real estate investment<br/>and asset management.</h1></div><p className="n19-about-intro">{c.intro}</p></section>
    <section className="a9-thesis"><div><p className="a9-label">The firm</p><h2>The investment case.</h2></div><div><p className="a9-lead">Avenor brings together real estate investment analysis and asset management, from evaluating an acquisition to overseeing the asset over time.</p><p>Understanding an asset means looking beyond its acquisition price. Location, occupier demand, income potential, capital expenditure and the risks of ownership all inform the investment case. These considerations form the basis for assessing opportunities and evaluating the decisions that follow.</p><p>The investment horizon informs decisions about financing, leasing, capital expenditure and the management of risk.</p><a className="a9-link" href={url('investment-philosophy')}>Investment philosophy <ArrowUpRight size={17}/></a></div></section>
    <VisualStoryV20 route="about"/><section className="a9-framework"><div className="a9-framework-head"><p className="a9-label">Investment process</p><h2>From assessment to asset management.</h2></div><div className="a9-stages"><div><span>01</span><h3>Assess the opportunity</h3><p>Evaluate market conditions, asset fundamentals, cash flows and material risks.</p></div><div><span>02</span><h3>Allocate capital</h3><p>Consider the ownership structure, investment horizon, financing and downside scenarios.</p></div><div><span>03</span><h3>Manage the asset</h3><p>Review leasing, operating performance, capital requirements and the asset’s ongoing needs.</p></div></div></section>
    <section className="a9-governance"><p className="a9-label">Decision-making</p><div><h2>Investment governance and risk.</h2><p>Investment decisions benefit from documented assumptions, defined responsibilities and a consistent approach to risk. Reviewing the investment thesis over time helps connect changing market conditions with the objectives of ownership.</p><div className="a9-links">{c.services.map(s=><a href={url(s.slug)} key={s.slug}>{s.title}<ArrowUpRight size={18}/></a>)}</div></div></section>
    <section className="a9-leadership"><div><p className="a9-label">Our people</p><h2>Executive leadership.</h2><a className="a9-link" href={url('team')}>Meet the team <ArrowUpRight size={17}/></a></div><div className="a9-execs">{leadership.map(p=><a key={p.slug} className="n19-exec" href={url('team/'+p.slug)}><PortraitImage person={p}/><h3>{p.name}</h3><p>{p.role}</p><ArrowUpRight size={18}/></a>)}</div></section>
    <section className="a9-end"><h2>Connect with Avenor.</h2><a className="a9-link" href={url('contact')}>Contact the firm <ArrowUpRight size={18}/></a></section>
  </article>;
}
