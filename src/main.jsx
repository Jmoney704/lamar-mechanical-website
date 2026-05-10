import React from "react";
import ReactDOM from "react-dom/client";
import {
  Phone, ShieldCheck, Award, HardHat, MessageCircle, Handshake,
  Zap, Fan, BatteryCharging, Building2, Lightbulb, Wrench,
  UserCheck, Clock, Settings, Mail, MapPin, ArrowRight
} from "lucide-react";

// This imports your logo from the repo root.
// Your GitHub currently has this file at the root: logo.png.png
// This avoids the broken public-folder/static-path issue.
import logo from "../logo.png.png";

const services = [
  ["Electrical", Zap, "Full-service electrical solutions for commercial, churches, and high-end residential projects.", "panel"],
  ["HVAC", Fan, "Heating, cooling, and ventilation systems designed for efficiency, comfort, and reliability.", "hvac"],
  ["Generators", BatteryCharging, "Standby generator systems provide power when you need it most.", "generator"],
  ["Commercial", Building2, "Electrical and mechanical solutions for commercial facilities of every size and complexity.", "commercial"],
  ["Lighting Solutions", Lightbulb, "Architectural lighting, soffit lighting, stairway lighting and more to elevate every space.", "lighting"],
  ["Service & Maintenance", Wrench, "Planned maintenance and targeted service for optimal performance and longevity.", "service"]
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

function GraphicPanel({ type }) {
  return <div className={`graphicPanel ${type}`} />;
}

function App() {
  return (
    <>
      <style>{`
        *{box-sizing:border-box}
        html,body,#root{margin:0;background:#000;color:#fff;font-family:Arial,Helvetica,sans-serif}
        body{overflow-x:hidden}
        a{text-decoration:none;color:inherit}
        .site{max-width:1320px;margin:0 auto;background:#000;box-shadow:0 0 60px rgba(0,0,0,.8)}
        .top{position:relative;min-height:560px;background:#000;overflow:hidden}
        .top::after{content:"";position:absolute;inset:70px 0 0 0;background:linear-gradient(90deg,#000 0%,#000 29%,rgba(0,0,0,.76) 47%,rgba(0,0,0,.08) 100%);z-index:1}
        .heroBuilding{position:absolute;right:0;top:70px;width:74%;height:490px;background:
          linear-gradient(180deg,rgba(7,12,18,.06),rgba(7,12,18,.28)),
          linear-gradient(135deg,#0f1924 0%,#172536 38%,#3a2b19 38%,#20160b 42%,#080808 42% 100%);
          overflow:hidden}
        .heroBuilding::before{content:"";position:absolute;right:62px;top:54px;width:650px;height:330px;background:
          linear-gradient(90deg,rgba(255,255,255,.22) 0 2px,transparent 2px 62px),
          linear-gradient(0deg,rgba(255,255,255,.18) 0 2px,transparent 2px 72px),
          linear-gradient(135deg,rgba(214,166,64,.22),transparent 35%),
          linear-gradient(135deg,#1a2630,#080c11);
          border:1px solid rgba(214,166,64,.38);
          box-shadow:0 26px 65px rgba(0,0,0,.55)}
        .heroBuilding::after{content:"";position:absolute;right:20px;top:20px;width:720px;height:170px;background:linear-gradient(135deg,#111 0%,#d6a640 17%,#191109 20%,#050505 64%);clip-path:polygon(0 55%,76% 0,100% 17%,25% 70%);opacity:.90}
        .groundGlow{position:absolute;right:0;bottom:0;width:74%;height:180px;background:radial-gradient(circle at 55% 20%,rgba(214,166,64,.28),transparent 35%),linear-gradient(0deg,rgba(0,0,0,.85),transparent)}
        .nav{height:70px;position:relative;z-index:4;display:flex;align-items:center;justify-content:space-between;background:#020202;border-bottom:1px solid rgba(255,255,255,.11);padding:0 34px}
        .logo{height:78px;width:auto;max-width:320px;object-fit:contain;display:block}
        .links{display:flex;gap:20px;align-items:center;font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:.045em;white-space:nowrap}
        .links a:first-child{color:#d6a640;border-bottom:2px solid #d6a640;padding-bottom:8px}
        .navBtn{border:1px solid #d6a640;color:#d6a640;padding:11px 15px}
        .navPhone{color:#d6a640;display:flex;align-items:center;gap:7px}
        .heroText{position:relative;z-index:3;width:440px;padding:80px 0 0 34px}
        .eyebrow{margin:0 0 14px;color:#d6a640;text-transform:uppercase;font-weight:950;letter-spacing:.10em;font-size:15px}
        h1{margin:0 0 18px;text-transform:uppercase;font-size:54px;line-height:.98;font-weight:950;letter-spacing:-.035em}
        h1 span{color:#d6a640}
        .heroCopy{font-size:16px;line-height:1.55;color:rgba(255,255,255,.88);margin:0 0 28px}
        .heroActions{display:flex;gap:14px}
        .btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;text-transform:uppercase;font-weight:950;font-size:13px;padding:15px 24px;letter-spacing:.02em}
        .fill{background:#d6a640;color:#000}.outline{border:1px solid #d6a640;color:#d6a640;background:rgba(0,0,0,.30)}
        .trust{display:grid;grid-template-columns:repeat(5,1fr);padding:22px 28px;background:#050505;border-top:1px solid rgba(255,255,255,.12);border-bottom:1px solid rgba(255,255,255,.12)}
        .trustItem{display:flex;gap:14px;padding:0 18px;border-right:1px solid rgba(255,255,255,.13)}
        .trustItem:last-child{border-right:0}
        .trustItem svg{color:#d6a640;width:34px;height:34px;min-width:34px}
        .trustItem h3{margin:0 0 5px;text-transform:uppercase;font-size:12px;font-weight:950}
        .trustItem p{margin:0;color:rgba(255,255,255,.70);font-size:11px;line-height:1.45}
        .services{background:#f4f2ee;color:#111;padding:34px 36px 42px}
        .title{text-align:center;text-transform:uppercase}
        .title small{color:#b8862d;font-weight:950}
        .title h2{margin:7px 0 8px;font-size:26px;font-weight:950;letter-spacing:.02em}
        .rule{width:70px;height:3px;background:#d6a640;margin:0 auto 28px}
        .serviceGrid{display:grid;grid-template-columns:repeat(6,1fr);gap:15px}
        .card{background:#fff;box-shadow:0 8px 18px rgba(0,0,0,.09);overflow:hidden}
        .pic{height:150px;position:relative;background:#111;overflow:hidden}
        .graphicPanel{width:100%;height:100%;position:relative;background:#151515;overflow:hidden}
        .graphicPanel::before{content:"";position:absolute;inset:0;background:
          linear-gradient(135deg,rgba(214,166,64,.24),transparent 25%),
          repeating-linear-gradient(90deg,rgba(255,255,255,.08) 0 1px,transparent 1px 28px),
          repeating-linear-gradient(0deg,rgba(255,255,255,.08) 0 1px,transparent 1px 28px),
          linear-gradient(135deg,#080808,#222832)}
        .graphicPanel::after{position:absolute;left:14px;bottom:14px;color:rgba(255,255,255,.60);font-weight:950;text-transform:uppercase;letter-spacing:.08em;font-size:10px}
        .panel::after{content:"Panel / Service Work"}.hvac::after{content:"HVAC Systems"}.generator::after{content:"Generator Install"}.commercial::after{content:"Commercial Space"}.lighting::after{content:"Lighting Finish"}.service::after{content:"Maintenance"}
        .badge{position:absolute;left:13px;bottom:-19px;background:#050505;padding:10px;border:1px solid rgba(214,166,64,.45)}
        .badge svg{width:25px;height:25px;color:#d6a640}
        .cardBody{padding:34px 18px 22px}
        .cardBody h3{margin:0 0 11px;text-transform:uppercase;font-size:15px;font-weight:950}
        .cardBody p{margin:0 0 18px;color:#333;font-size:12.5px;line-height:1.55;min-height:96px}
        .cardBody a{color:#b8862d;text-transform:uppercase;font-weight:950;font-size:11px}
        .about{display:grid;grid-template-columns:1.05fr 1fr 1fr 1fr;background:#000}
        .aboutText{padding:38px 34px;display:flex;flex-direction:column;justify-content:center}
        .aboutText small{color:#d6a640;text-transform:uppercase;font-weight:950;font-size:12px}
        .aboutText h2{margin:9px 0 0;text-transform:uppercase;font-size:29px;line-height:1.08;font-weight:950}
        .goldLine{width:54px;height:3px;background:#d6a640;margin:16px 0}
        .aboutText p{margin:0 0 22px;color:rgba(255,255,255,.76);font-size:13px;line-height:1.7}
        .about .graphicPanel{min-height:310px}.stack{display:grid;grid-template-rows:1fr 1fr}.stack .graphicPanel{min-height:155px}
        .panelroom::after{content:"Electrical Room"}.home::after{content:"High-End Residential"}.porch::after{content:"Exterior Lighting"}.stair::after{content:"Stair Lighting"}
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
        .marketBlock{height:120px;background:#111;position:relative;overflow:hidden}
        .marketBlock::before{content:"";position:absolute;inset:0;background:linear-gradient(135deg,rgba(214,166,64,.22),transparent 28%),linear-gradient(135deg,#0c1117,#242424)}
        .marketBlock::after{content:"";position:absolute;inset:18px;border:1px solid rgba(255,255,255,.18)}
        .marketGrid p{text-align:center;text-transform:uppercase;font-weight:950;font-size:11px;margin:9px 0 0}
        .cta{display:flex;align-items:center;justify-content:center;gap:28px;background:#050505;border-top:1px solid rgba(255,255,255,.12);border-bottom:1px solid rgba(255,255,255,.12);padding:21px 34px}
        .cta h3{color:#d6a640;text-transform:uppercase;margin:0;font-size:18px}.cta p{color:rgba(255,255,255,.72);margin:2px 0}.cta strong{color:#d6a640;font-size:23px}
        footer{background:#050505;padding:30px 36px 14px}
        .footGrid{display:grid;grid-template-columns:1.3fr .8fr 1fr 1fr;gap:30px}
        .footLogo{height:58px}
        footer h4{text-transform:uppercase;color:#d6a640;font-size:13px;margin:0 0 12px}
        footer p{color:rgba(255,255,255,.68);font-size:12px;line-height:1.65;margin:0 0 7px}
        .copyright{text-align:center;color:rgba(255,255,255,.36);font-size:11px;margin-top:24px;border-top:1px solid rgba(255,255,255,.1);padding-top:14px}
        @media(max-width:1000px){
          .site{max-width:none}.links{display:none}.heroBuilding{width:100%;opacity:.28}.top::after{background:linear-gradient(90deg,#000,rgba(0,0,0,.82))}
          .heroText{width:auto;padding:120px 24px 40px}.logo{height:54px}h1{font-size:44px}
          .trust,.serviceGrid,.about,.lower,.footGrid{grid-template-columns:1fr}.trustItem{border-right:0;border-bottom:1px solid rgba(255,255,255,.1);padding:14px 0}
          .marketGrid,.whyGrid{grid-template-columns:1fr 1fr}.cardBody p{min-height:auto}.cta{flex-direction:column;align-items:flex-start}
        }
      `}</style>

      <main className="site">
        <section className="top">
          <div className="heroBuilding"><div className="groundGlow" /></div>
          <header className="nav">
            <img className="logo" src={logo} alt="Lamar Mechanical Services" />
            <div className="links">
              {["Home","Electrical","HVAC","Generators","Commercial","Residential","About","Contact"].map(x => <a key={x}>{x}</a>)}
              <a className="navBtn">Request Service</a>
              <a className="navPhone"><Phone size={15}/>601-498-4871</a>
            </div>
          </header>
          <div className="heroText">
            <p className="eyebrow">Precision. Integrity. Power.</p>
            <h1><span>Systems That</span><br/>Perform.</h1>
            <p className="heroCopy">Commercial, churches, and high-end residential electrical, HVAC, and generator solutions built with craftsmanship and engineered for reliability.</p>
            <div className="heroActions">
              <a className="btn fill">Request Service <ArrowRight size={16}/></a>
              <a className="btn outline"><Phone size={16}/>601-498-4871</a>
            </div>
          </div>
        </section>

        <section className="trust">
          {trust.map(([Icon,title,text]) => <div className="trustItem" key={title}><Icon/><div><h3>{title}</h3><p>{text}</p></div></div>)}
        </section>

        <section className="services">
          <div className="title"><small>Our Services</small><h2>Complete Solutions. Built Around Your Needs.</h2><div className="rule"/></div>
          <div className="serviceGrid">
            {services.map(([title,Icon,text,type]) => (
              <article className="card" key={title}>
                <div className="pic"><GraphicPanel type={type} /><span className="badge"><Icon/></span></div>
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
          <GraphicPanel type="panelroom" />
          <div className="stack"><GraphicPanel type="home" /><GraphicPanel type="porch" /></div>
          <GraphicPanel type="stair" />
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
              {["Commercial","Churches","Commercial Interiors","High-End Residential"].map(label => <div key={label}><div className="marketBlock"></div><p>{label}</p></div>)}
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
            <div><img className="footLogo" src={logo} alt="" /><p>Electrical • HVAC • Generators</p><p>Commercial • Churches • Residential</p></div>
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
