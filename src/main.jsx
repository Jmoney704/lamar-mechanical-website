import React from "react";
import ReactDOM from "react-dom/client";
import {
  Phone, ShieldCheck, Award, HardHat, MessageCircle, Handshake,
  Zap, Fan, BatteryCharging, Building2, Lightbulb, Wrench,
  UserCheck, Clock, Settings, Mail, MapPin, ArrowRight
} from "lucide-react";

const logo = "/logo.png.png";

const gold = "#d6a640";

const services = [
  ["Electrical", Zap, "Full-service electrical solutions for commercial, churches, and high-end residential projects.", "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=90"],
  ["HVAC", Fan, "Heating, cooling, and ventilation systems designed for efficiency, comfort, and reliability.", "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=90"],
  ["Generators", BatteryCharging, "Standby generator systems provide power when you need it most.", "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=90"],
  ["Commercial", Building2, "Electrical and mechanical solutions for commercial facilities, churches, and business spaces.", "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=90"],
  ["Lighting Solutions", Lightbulb, "Architectural lighting, soffit lighting, stairway lighting and more to elevate every space.", "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?auto=format&fit=crop&w=900&q=90"],
  ["Service & Maintenance", Wrench, "Planned maintenance and targeted service for optimal performance and longevity.", "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=90"]
];

const trust = [
  [ShieldCheck, "Licensed & Insured", "Fully licensed and insured serving Laurel, Hattiesburg, and the Pine Belt area."],
  [Award, "Quality Workmanship", "Craftsmanship and attention to detail on every project."],
  [HardHat, "Safety First", "Committed to safety, quality, and accountability."],
  [MessageCircle, "Clear Communication", "We keep you informed from start to finish."],
  [Handshake, "Built on Integrity", "We do the right thing — every time."]
];

const why = [
  [UserCheck, "Locally Owned & Operated", "We know the area, we value our clients, and we stand behind our work."],
  [Settings, "Technically Driven", "Efficient, code-compliant solutions built to last."],
  [ShieldCheck, "Premium Materials", "Quality products from trusted manufacturers you can rely on."],
  [MessageCircle, "Clear Communication", "Straight answers from start to finish."],
  [Clock, "On Time. Every Time.", "We respect your time and your schedule."],
  [HardHat, "Emergency Response Available", "Responsive service for urgent electrical and HVAC issues."]
];

function App() {
  return (
    <>
      <style>{`
        *{box-sizing:border-box}
        html,body,#root{margin:0;background:#000;color:white;font-family:Arial,Helvetica,sans-serif}
        a{text-decoration:none;color:inherit}
        .site{max-width:1320px;margin:0 auto;background:#000;box-shadow:0 0 50px rgba(0,0,0,.7)}
        .top{position:relative;min-height:560px;background:#000;overflow:hidden}
        .top::before{content:"";position:absolute;inset:70px 0 0 355px;background:url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=90") center/cover no-repeat;border-radius:0 0 0 0;opacity:.95}
        .top::after{content:"";position:absolute;inset:70px 0 0 0;background:linear-gradient(90deg,#000 0%,#000 28%,rgba(0,0,0,.74) 45%,rgba(0,0,0,.08) 100%)}
        .nav{height:70px;display:flex;align-items:center;justify-content:space-between;padding:0 34px;border-bottom:1px solid rgba(255,255,255,.10);position:relative;z-index:3;background:#020202}
        .brand{display:flex;align-items:center}
        .logo{height:62px;max-width:230px;object-fit:contain}
        .links{display:flex;gap:21px;align-items:center;font-size:12px;text-transform:uppercase;font-weight:900;letter-spacing:.04em}
        .links a:first-child{color:${gold};border-bottom:2px solid ${gold};padding-bottom:8px}
        .navBtn{border:1px solid ${gold};color:${gold};padding:11px 16px}
        .navPhone{color:${gold};display:flex;gap:7px;align-items:center}
        .heroText{position:relative;z-index:3;width:420px;padding:80px 0 0 34px}
        .eyebrow{text-transform:uppercase;color:${gold};font-weight:950;letter-spacing:.10em;font-size:15px;margin:0 0 14px}
        h1{font-size:54px;line-height:.98;text-transform:uppercase;margin:0 0 18px;letter-spacing:-.035em;font-weight:950}
        h1 span{color:${gold}}
        .copy{font-size:16px;line-height:1.55;color:rgba(255,255,255,.88);margin:0 0 28px}
        .heroActions{display:flex;gap:14px}
        .btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;text-transform:uppercase;font-weight:950;font-size:13px;padding:15px 25px}
        .fill{background:${gold};color:#000}.outline{border:1px solid ${gold};color:${gold};background:rgba(0,0,0,.25)}
        .trust{display:grid;grid-template-columns:repeat(5,1fr);border-top:1px solid rgba(255,255,255,.10);border-bottom:1px solid rgba(255,255,255,.10);padding:22px 28px;background:#050505}
        .trustItem{display:flex;gap:14px;padding:0 18px;border-right:1px solid rgba(255,255,255,.12)}
        .trustItem:last-child{border-right:0}
        .trustItem svg{color:${gold};width:34px;height:34px;min-width:34px}
        .trustItem h3{margin:0 0 5px;text-transform:uppercase;font-size:12px}
        .trustItem p{margin:0;color:rgba(255,255,255,.70);font-size:11px;line-height:1.45}

        .services{background:#f5f4f1;color:#111;padding:34px 36px 42px}
        .title{text-align:center;text-transform:uppercase}
        .title small{color:#b8862d;font-weight:950}
        .title h2{margin:7px 0 8px;font-size:26px;font-weight:950;letter-spacing:.02em}
        .rule{width:70px;height:3px;background:${gold};margin:0 auto 28px}
        .serviceGrid{display:grid;grid-template-columns:repeat(6,1fr);gap:15px}
        .card{background:#fff;box-shadow:0 8px 20px rgba(0,0,0,.09);overflow:hidden}
        .pic{height:150px;position:relative}
        .pic img{width:100%;height:100%;object-fit:cover;display:block}
        .badge{position:absolute;left:13px;bottom:-19px;background:#050505;padding:10px;border:1px solid rgba(214,166,64,.45)}
        .badge svg{width:25px;height:25px;color:${gold}}
        .cardBody{padding:34px 18px 22px}
        .cardBody h3{text-transform:uppercase;font-size:15px;margin:0 0 11px}
        .cardBody p{font-size:12.5px;line-height:1.55;color:#333;min-height:96px;margin:0 0 18px}
        .cardBody a{color:#b8862d;text-transform:uppercase;font-weight:950;font-size:11px}

        .about{display:grid;grid-template-columns:1.05fr 1fr 1fr 1fr;background:#000}
        .aboutText{padding:38px 34px;display:flex;flex-direction:column;justify-content:center}
        .aboutText small{text-transform:uppercase;color:${gold};font-weight:950;font-size:12px}
        .aboutText h2{text-transform:uppercase;font-size:29px;line-height:1.08;margin:9px 0 0}
        .goldLine{width:54px;height:3px;background:${gold};margin:16px 0}
        .aboutText p{font-size:13px;line-height:1.7;color:rgba(255,255,255,.76);margin:0 0 22px}
        .about img,.stack img{width:100%;height:100%;min-height:310px;object-fit:cover;display:block}
        .stack{display:grid;grid-template-rows:1fr 1fr}.stack img{min-height:155px}

        .lower{background:#fff;color:#111;display:grid;grid-template-columns:1fr 1.5fr;gap:28px;padding:32px 36px}
        .why h2,.market h2{text-transform:uppercase;font-weight:950;letter-spacing:.02em}
        .why h2{font-size:15px;color:#b8862d;margin:0 0 20px}
        .whyGrid{display:grid;grid-template-columns:1fr 1fr;gap:20px 24px}
        .whyItem{display:flex;gap:11px}
        .whyItem svg{width:26px;height:26px;min-width:26px}
        .whyItem h3{font-size:12px;text-transform:uppercase;margin:0 0 5px}
        .whyItem p{font-size:11.2px;line-height:1.45;color:#333;margin:0}
        .market h2{font-size:23px;margin:0 0 18px}
        .marketGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:15px}
        .marketGrid img{width:100%;height:120px;object-fit:cover;display:block}
        .marketGrid p{text-align:center;text-transform:uppercase;font-weight:950;font-size:11px;margin:9px 0 0}

        .cta{display:flex;align-items:center;justify-content:center;gap:28px;background:#050505;border-top:1px solid rgba(255,255,255,.12);border-bottom:1px solid rgba(255,255,255,.12);padding:21px 34px}
        .cta h3{color:${gold};text-transform:uppercase;margin:0;font-size:18px}.cta p{color:rgba(255,255,255,.72);margin:2px 0}.cta strong{color:${gold};font-size:23px}
        footer{background:#050505;padding:30px 36px 14px}
        .footGrid{display:grid;grid-template-columns:1.3fr .8fr 1fr 1fr;gap:30px}
        .footLogo{height:58px}
        footer h4{text-transform:uppercase;color:${gold};font-size:13px;margin:0 0 12px}
        footer p{color:rgba(255,255,255,.68);font-size:12px;line-height:1.65;margin:0 0 7px}
        .copyright{text-align:center;color:rgba(255,255,255,.36);font-size:11px;margin-top:24px;border-top:1px solid rgba(255,255,255,.1);padding-top:14px}

        @media(max-width:1000px){
          .site{max-width:none}.links{display:none}.top::before{left:0;opacity:.33}.top::after{background:linear-gradient(90deg,#000 0%,rgba(0,0,0,.86) 100%)}
          .heroText{width:auto;padding:120px 24px 40px}.logo{height:54px}h1{font-size:44px}
          .trust,.serviceGrid,.about,.lower,.footGrid{grid-template-columns:1fr}
          .trustItem{border-right:0;border-bottom:1px solid rgba(255,255,255,.1);padding:14px 0}
          .marketGrid,.whyGrid{grid-template-columns:1fr 1fr}.cardBody p{min-height:auto}.cta{flex-direction:column;align-items:flex-start}
        }
      `}</style>

      <main className="site">
        <section className="top">
          <header className="nav">
            <div className="brand"><img className="logo" src={logo} alt="Lamar Mechanical Services" /></div>
            <div className="links">
              {["Home","Electrical","HVAC","Generators","Commercial","Residential","About","Contact"].map(x => <a key={x}>{x}</a>)}
              <a className="navBtn">Request Service</a>
              <a className="navPhone"><Phone size={15}/>601-498-4871</a>
            </div>
          </header>
          <div className="heroText">
            <p className="eyebrow">Precision. Integrity. Power.</p>
            <h1><span>Systems That</span><br/>Perform.</h1>
            <p className="copy">Commercial, churches, and high-end residential electrical, HVAC, and generator solutions built with craftsmanship and engineered for reliability.</p>
            <div className="heroActions">
              <a className="btn fill">Request Service <ArrowRight size={16}/></a>
              <a className="btn outline"><Phone size={16}/>601-498-4871</a>
            </div>
          </div>
        </section>

        <section className="trust">
          {trust.map(([Icon,title,text]) => (
            <div className="trustItem" key={title}><Icon/><div><h3>{title}</h3><p>{text}</p></div></div>
          ))}
        </section>

        <section className="services">
          <div className="title"><small>Our Services</small><h2>Complete Solutions. Built Around Your Needs.</h2><div className="rule"/></div>
          <div className="serviceGrid">
            {services.map(([title,Icon,text,img]) => (
              <article className="card" key={title}>
                <div className="pic"><img src={img} alt="" /><span className="badge"><Icon/></span></div>
                <div className="cardBody"><h3>{title}</h3><p>{text}</p><a>Learn More →</a></div>
              </article>
            ))}
          </div>
        </section>

        <section className="about">
          <div className="aboutText">
            <small>About Lamar Mechanical Services</small>
            <h2>Built on Integrity.<br/>Focused on Results.</h2>
            <div className="goldLine" />
            <p>We are a locally owned and operated company delivering professional electrical, HVAC, and generator solutions across South Mississippi. Our commitment to quality, communication, and craftsmanship sets us apart on every project.</p>
            <a className="btn outline">Learn More About Us <ArrowRight size={15}/></a>
          </div>
          <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=90" />
          <div className="stack">
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=90" />
            <img src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=90" />
          </div>
          <img src="https://images.unsplash.com/photo-1529429617124-95b109e86bb8?auto=format&fit=crop&w=1200&q=90" />
        </section>

        <section className="lower">
          <div className="why">
            <h2>Why Clients Choose Us</h2>
            <div className="whyGrid">
              {why.map(([Icon,title,text]) => <div className="whyItem" key={title}><Icon/><div><h3>{title}</h3><p>{text}</p></div></div>)}
            </div>
          </div>
          <div className="market">
            <h2>Trusted for Commercial, Churches, and High-End Residential.</h2>
            <div className="marketGrid">
              {[
                ["Commercial","https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=90"],
                ["Churches","https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=800&q=90"],
                ["Commercial Interiors","https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=90"],
                ["High-End Residential","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=90"]
              ].map(([label,img]) => <div key={label}><img src={img}/><p>{label}</p></div>)}
            </div>
          </div>
        </section>

        <section className="cta">
          <div><h3>Ready to Start Your Project?</h3><p>Let’s build something exceptional together.</p></div>
          <a className="btn fill">Request Service <ArrowRight size={15}/></a>
          <p>or call <strong>601-498-4871</strong></p>
        </section>

        <footer>
          <div className="footGrid">
            <div><img className="footLogo" src={logo} /><p>Electrical • HVAC • Generators</p><p>Commercial • Churches • Residential</p></div>
            <div><h4>Quick Links</h4><p>Electrical<br/>HVAC<br/>Generators<br/>Commercial<br/>Residential<br/>About<br/>Contact</p></div>
            <div><h4>Service Area</h4><p>Proudly serving Laurel, Hattiesburg, and the Pine Belt area.</p></div>
            <div><h4>Contact Us</h4><p><Phone size={13}/> 601-498-4871</p><p><Mail size={13}/> info@lamarmechanical.com</p><p><MapPin size={13}/> Laurel, Mississippi</p></div>
          </div>
          <div className="copyright">© 2026 Lamar Mechanical Services, LLC. All rights reserved.</div>
        </footer>
      </main>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
