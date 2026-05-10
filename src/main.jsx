import React from "react";
import ReactDOM from "react-dom/client";
import { Phone, Zap, Fan, BatteryCharging, Building2, Lightbulb, Wrench, ShieldCheck, Award, HardHat, MessageCircle, Handshake, ArrowRight } from "lucide-react";

const logo = "/logo.png.png";

const services = [
  ["Electrical", Zap, "Full-service electrical solutions for commercial, churches, and high-end residential projects.", "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80"],
  ["HVAC", Fan, "Heating, cooling, and ventilation systems designed for efficiency, comfort, and reliability.", "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80"],
  ["Generators", BatteryCharging, "Standby generator systems provide power when you need it most.", "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80"],
  ["Commercial", Building2, "Electrical and mechanical solutions for commercial facilities of every size and complexity.", "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=80"],
  ["Lighting Solutions", Lightbulb, "Architectural lighting, soffit lighting, stairway lighting and more to elevate every space.", "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?auto=format&fit=crop&w=900&q=80"],
  ["Service & Maintenance", Wrench, "Planned maintenance and targeted service for optimal performance and longevity.", "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80"]
];

const trust = [
  [ShieldCheck, "Licensed & Insured", "Fully licensed and insured serving Laurel, Hattiesburg, and the Pine Belt area."],
  [Award, "Quality Workmanship", "Craftsmanship and attention to detail on every project."],
  [HardHat, "Safety First", "Committed to safety, quality, and accountability."],
  [MessageCircle, "Clear Communication", "We keep you informed from start to finish."],
  [Handshake, "Built on Integrity", "We do the right thing — every time."]
];

function App() {
  return (
    <>
      <style>{`
        *{box-sizing:border-box} body{margin:0;background:#000;color:#fff;font-family:Arial,Helvetica,sans-serif} a{text-decoration:none;color:inherit}
        .gold{color:#d8a640}.btn{display:inline-flex;align-items:center;gap:10px;padding:15px 26px;text-transform:uppercase;font-weight:900;font-size:13px}
        .btn-fill{background:#d8a640;color:#000}.btn-outline{border:1px solid #d8a640;color:#d8a640}
        .header{position:absolute;top:0;left:0;right:0;z-index:5;background:rgba(0,0,0,.65);border-bottom:1px solid rgba(255,255,255,.1)}
        .header-inner{max-width:1280px;margin:0 auto;padding:18px 30px;display:flex;align-items:center;justify-content:space-between}.logo{height:80px;width:auto;object-fit:contain}
        nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:900;text-transform:uppercase;letter-spacing:.04em}.nav-btn{border:1px solid #d8a640;padding:11px 15px;color:#d8a640}.phone{display:flex;align-items:center;gap:6px;color:#d8a640}
        .hero{position:relative;min-height:700px;background:url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=85') center/cover no-repeat}
        .hero:before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,#000 0%,rgba(0,0,0,.84) 40%,rgba(0,0,0,.20) 100%)}
        .hero-content{position:relative;z-index:2;max-width:1280px;margin:auto;padding:190px 30px 80px}.eyebrow{font-size:17px;text-transform:uppercase;letter-spacing:.11em;font-weight:900;color:#d8a640}
        h1{font-size:76px;line-height:.95;margin:18px 0 25px;text-transform:uppercase;font-weight:950;letter-spacing:-.04em}h1 span{color:#d8a640}.hero-copy{max-width:620px;color:rgba(255,255,255,.84);font-size:19px;line-height:1.65}.actions{display:flex;gap:16px;margin-top:34px}
        .trust{max-width:1280px;margin:auto;padding:28px 30px;background:#000;display:grid;grid-template-columns:repeat(5,1fr)}.trust-card{display:flex;gap:14px;padding:0 17px;border-right:1px solid rgba(255,255,255,.12)}.trust-card:last-child{border-right:0}.trust-card svg{color:#d8a640;min-width:35px;width:35px;height:35px}.trust-card h3{margin:0 0 6px;text-transform:uppercase;font-size:13px}.trust-card p{margin:0;font-size:12px;line-height:1.45;color:rgba(255,255,255,.66)}
        .services{background:#f7f7f7;color:#111;padding:48px 30px 60px}.title{text-align:center;text-transform:uppercase}.title small{color:#b57916;font-weight:900}.title h2{font-size:30px;margin:8px 0 10px;font-weight:950}.bar{width:70px;height:3px;background:#d8a640;margin:0 auto 34px}
        .grid{max-width:1280px;margin:auto;display:grid;grid-template-columns:repeat(6,1fr);gap:16px}.card{background:#fff;box-shadow:0 8px 22px rgba(0,0,0,.08);overflow:hidden}.pic{height:170px;position:relative}.pic img{width:100%;height:100%;object-fit:cover}.badge{position:absolute;left:17px;bottom:-20px;background:#050505;padding:12px;border:1px solid rgba(216,166,64,.4)}.badge svg{width:27px;height:27px;color:#d8a640}.body{padding:38px 20px 25px}.body h3{text-transform:uppercase;font-size:17px;margin:0 0 14px}.body p{font-size:14px;line-height:1.6;color:#333;min-height:110px}.body a{color:#b57916;text-transform:uppercase;font-weight:900;font-size:12px}
        .about{display:grid;grid-template-columns:1.1fr 1fr 1fr;background:#000}.about-text{padding:55px 34px;display:flex;flex-direction:column;justify-content:center}.about-text small{color:#d8a640;text-transform:uppercase;font-weight:900}.about-text h2{text-transform:uppercase;font-size:34px;line-height:1.1;margin:14px 0}.about-text p{color:rgba(255,255,255,.74);font-size:14px;line-height:1.8}.about img{width:100%;height:100%;min-height:430px;object-fit:cover}.stack{display:grid;grid-template-rows:1fr 1fr}.stack img{min-height:215px}
        .why{background:#fff;color:#111;max-width:1280px;margin:auto;padding:44px 30px;display:grid;grid-template-columns:.9fr 1.4fr;gap:34px}.why h2{text-transform:uppercase}.why-list{display:grid;grid-template-columns:1fr 1fr;gap:22px}.why-item h3{font-size:14px;text-transform:uppercase;margin:0 0 6px}.why-item p{font-size:12px;line-height:1.45;color:#333;margin:0}.market-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}.market-grid img{width:100%;height:145px;object-fit:cover}.market-grid p{text-align:center;text-transform:uppercase;font-weight:900;font-size:12px}
        footer{background:#000}.cta{border-top:1px solid rgba(255,255,255,.1);border-bottom:1px solid rgba(255,255,255,.1);background:#080808;display:flex;align-items:center;justify-content:center;gap:30px;padding:26px}.cta h3{color:#d8a640;text-transform:uppercase;margin:0}.cta p{color:rgba(255,255,255,.68);margin:3px 0}.cta strong{font-size:24px;color:#d8a640}.footer-grid{max-width:1280px;margin:auto;display:grid;grid-template-columns:1.2fr .8fr 1fr 1fr;padding:36px 30px;gap:30px}.footer-logo{height:70px}.footer-grid h4{color:#d8a640;text-transform:uppercase}.footer-grid p{font-size:13px;line-height:1.8;color:rgba(255,255,255,.68)}.copy{text-align:center;color:rgba(255,255,255,.4);border-top:1px solid rgba(255,255,255,.1);padding:17px;font-size:12px}
        @media(max-width:1000px){nav{display:none}.logo{height:60px}h1{font-size:52px}.trust,.grid,.about,.why,.footer-grid{grid-template-columns:1fr}.trust-card{border-right:0;border-bottom:1px solid rgba(255,255,255,.1);padding:15px 0}.market-grid,.why-list{grid-template-columns:1fr 1fr}.body p{min-height:auto}.cta{flex-direction:column;align-items:flex-start}}
      `}</style>

      <main>
        <section className="hero">
          <header className="header"><div className="header-inner"><img className="logo" src={logo}/><nav>{["Home","Electrical","HVAC","Generators","Commercial","Residential","About","Contact"].map(x=><a key={x}>{x}</a>)}<a className="nav-btn">Request Service</a><a className="phone"><Phone size={15}/>601-498-4871</a></nav></div></header>
          <div className="hero-content"><p className="eyebrow">Precision. Integrity. Power.</p><h1><span>Systems That</span><br/>Perform.</h1><p className="hero-copy">Commercial, churches, and high-end residential electrical, HVAC, and generator solutions built with craftsmanship and engineered for reliability.</p><div className="actions"><a className="btn btn-fill">Request Service <ArrowRight size={18}/></a><a className="btn btn-outline"><Phone size={18}/>601-498-4871</a></div></div>
        </section>

        <section className="trust">{trust.map(([Icon,title,text])=><div className="trust-card" key={title}><Icon/><div><h3>{title}</h3><p>{text}</p></div></div>)}</section>

        <section className="services"><div className="title"><small>Our Services</small><h2>Complete Solutions. Built Around Your Needs.</h2><div className="bar"/></div><div className="grid">{services.map(([title,Icon,text,image])=><article className="card" key={title}><div className="pic"><img src={image}/><span className="badge"><Icon/></span></div><div className="body"><h3>{title}</h3><p>{text}</p><a>Learn More →</a></div></article>)}</div></section>

        <section className="about"><div className="about-text"><small>About Lamar Mechanical Services</small><h2>Built on Integrity.<br/>Focused on Results.</h2><p>We are a locally owned and operated company delivering professional electrical, HVAC, and generator solutions across South Mississippi. Our commitment to quality, communication, and craftsmanship sets us apart on every project.</p><a className="btn btn-outline">Learn More About Us <ArrowRight size={15}/></a></div><img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=85"/><div className="stack"><img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"/><img src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=85"/></div></section>

        <section className="why"><div><h2 className="gold">Why Clients Choose Us</h2><div className="why-list">{["Locally Owned & Operated","Technically Driven","Premium Materials","Clear Communication","On Time. Every Time.","Emergency Response Available"].map((x,i)=><div className="why-item" key={x}><h3>{x}</h3><p>{i===5?"Responsive service for urgent electrical and HVAC issues.":"We deliver clean, professional work with clear communication and dependable results."}</p></div>)}</div></div><div><h2>Trusted for Commercial, Churches, and High-End Residential.</h2><div className="market-grid">{[["Commercial","https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80"],["Churches","https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=800&q=80"],["Commercial Interiors","https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"],["High-End Residential","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"]].map(([l,img])=><div key={l}><img src={img}/><p>{l}</p></div>)}</div></div></section>

        <footer><div className="cta"><div><h3>Ready to Start Your Project?</h3><p>Let’s build something exceptional together.</p></div><a className="btn btn-fill">Request Service <ArrowRight size={16}/></a><p>or call <strong>601-498-4871</strong></p></div><div className="footer-grid"><div><img className="footer-logo" src={logo}/><p>Electrical • HVAC • Generators</p><p>Commercial • Churches • Residential</p></div><div><h4>Quick Links</h4><p>Electrical<br/>HVAC<br/>Generators<br/>Commercial<br/>Residential<br/>About<br/>Contact</p></div><div><h4>Service Area</h4><p>Proudly serving Laurel, Hattiesburg, and the Pine Belt area.</p></div><div><h4>Contact Us</h4><p>601-498-4871</p><p>info@lamarmechanical.com</p><p>Laurel, Mississippi</p></div></div><div className="copy">© 2026 Lamar Mechanical Services, LLC. All rights reserved.</div></footer>
      </main>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
