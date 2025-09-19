let currentSlide = 1;
const totalSlides = document.querySelectorAll('.slide').length;
let notesWindow = null;

document.getElementById('totalSlides').textContent = totalSlides;

// Speaker notes for each slide
const speakerNotes = {
    1: {
        title: "The Publisher's Protocol - Title Slide",
        content: `
            <h3>Opening (2-3 minutes)</h3>
            <p><strong>Welcome the audience and introduce yourself.</strong></p>
            <ul>
                <li>Today we're discussing a critical challenge facing digital publishers</li>
                <li>This research represents collaboration between industry experts from different domains</li>
                <li>We'll explore how the AI revolution is creating both unprecedented opportunities and existential threats</li>
            </ul>
            
            <h3>Key Message</h3>
            <p>Publishers need a new strategic framework to navigate the age of agentic AI - one that transforms defense into offense.</p>
            
            <h3>Transition</h3>
            <p>"Let's start by understanding the scale of the challenge publishers face today..."</p>
        `
    },
    2: {
        title: "The Digital Publishing Inflection Point",
        content: `
            <h3>Key Talking Points (3-4 minutes)</h3>
            <p><strong>Emphasize this is NOT a future scenario - it's happening NOW.</strong></p>
            
            <h3>The Numbers Tell the Story</h3>
            <ul>
                <li><strong>$52.6 billion market:</strong> This isn't venture capital hype - it's based on actual enterprise adoption</li>
                <li><strong>78% deployment plans:</strong> Nearly 4 out of 5 organizations are already planning AI agent deployment</li>
                <li><strong>46.3% CAGR:</strong> One of the fastest-growing tech markets in history</li>
            </ul>
            
            <h3>The Duality</h3>
            <p>The same technology creating this opportunity is also being weaponized against publishers. This isn't just a technical problem - it's an existential business challenge.</p>
            
            <h3>Transition</h3>
            <p>"But how significant is the threat side of this equation? Let's look at the data..."</p>
        `
    },
    3: {
        title: "The Pervasive Threat of Malicious Bots",
        content: `
            <h3>Key Talking Points (3-4 minutes)</h3>
            <p><strong>This slide shows we've crossed a historic threshold.</strong></p>
            
            <h3>Historic Milestone</h3>
            <ul>
                <li><strong>51% automated traffic:</strong> For the first time in internet history, non-human traffic dominates</li>
                <li><strong>37% bad bots:</strong> More than 1 in 3 requests to your servers are malicious</li>
                <li><strong>7.9% revenue impact:</strong> This isn't operational cost - it's direct bottom-line damage</li>
            </ul>
            
            <h3>The Evolution of Threats</h3>
            <p>Traditional bot defenses were built for simple scrapers. Today's threats use AI, residential proxies, and professional services. It's an arms race publishers are losing.</p>
            
            <h3>Personal Impact</h3>
            <p>Ask the audience: "How many of you have noticed unusual traffic patterns or seen your content republished without permission?" This makes it real.</p>
            
            <h3>Transition</h3>
            <p>"This creates a fascinating paradox that gets to the heart of our challenge..."</p>
        `
    },
    4: {
        title: "The Duality of Automated Agents",
        content: `
            <h3>Key Talking Points (2-3 minutes)</h3>
            <p><strong>This is the central insight of our paper.</strong></p>
            
            <h3>The Paradox</h3>
            <ul>
                <li>The technical act of crawling and extracting data is identical</li>
                <li>A "good bot" vs "bad bot" isn't about behavior - it's about permission and payment</li>
                <li>This means traditional technical defenses are fundamentally inadequate</li>
            </ul>
            
            <h3>Strategic Implications</h3>
            <p>The goal isn't to "block bad bots" - it's to force ALL automated traffic into a managed, permissioned framework. This reframes the problem from security to revenue optimization.</p>
            
            <h3>Visual Impact</h3>
            <p>Point to the stark contrast in the table - same growth rates, but completely different outcomes for publishers.</p>
            
            <h3>Transition</h3>
            <p>"Fortunately, the legal and commercial environment is shifting to support exactly this approach..."</p>
        `
    },
    5: {
        title: "Shifting Legal & Commercial Landscape",
        content: `
            <h3>Key Talking Points (4-5 minutes)</h3>
            <p><strong>This slide shows the timing is perfect for publishers to act.</strong></p>
            
            <h3>Legal Momentum</h3>
            <ul>
                <li><strong>Thomson Reuters case:</strong> Court explicitly recognized a licensing market exists - this undermines fair use</li>
                <li><strong>NYT v. OpenAI:</strong> When AI output competes with original content, it's not transformative</li>
                <li><strong>Copyright Office:</strong> Federal agencies are rejecting broad fair use interpretations</li>
            </ul>
            
            <h3>Commercial Reality</h3>
            <ul>
                <li><strong>Real deals happening:</strong> These aren't pilot programs - TIME, Wiley, AP are getting paid substantial amounts</li>
                <li><strong>$44M for Wiley:</strong> This proves high-quality content has real market value</li>
                <li><strong>Pricing models emerging:</strong> $1-6+ per minute shows premium content commands premium prices</li>
            </ul>
            
            <h3>The Window of Opportunity</h3>
            <p>Early movers are setting market standards. Publishers who wait will have less negotiating power.</p>
            
            <h3>Transition</h3>
            <p>"So why haven't more publishers capitalized on this? Because they're still using defenses designed for a different era..."</p>
        `
    },
    6: {
        title: "Why Legacy Defenses Are Inadequate",
        content: `
            <h3>Key Talking Points (3-4 minutes)</h3>
            <p><strong>Destroy the myth that current defenses work.</strong></p>
            
            <h3>robots.txt - The Gentleman's Agreement</h3>
            <ul>
                <li>It's literally asking nicely - no enforcement mechanism</li>
                <li>Worse - it's a roadmap for attackers showing what you want to protect</li>
                <li>Like putting up a "Please Don't Rob This House" sign instead of locks</li>
            </ul>
            
            <h3>CAPTCHA - The Defeated Guardian</h3>
            <ul>
                <li><strong>96% AI accuracy:</strong> Better than humans!</li>
                <li>When AI fails, human CAPTCHA farms solve them for pennies</li>
                <li>Creates friction for legitimate users while failing to stop bots</li>
            </ul>
            
            <h3>The Fundamental Problem</h3>
            <p>These tools were designed for a world where bots were dumb scripts. Today's threats use AI that's more sophisticated than human behavior.</p>
            
            <h3>Transition</h3>
            <p>"We need a completely new approach. Let me introduce the Machine-Consumable Content Protocol..."</p>
        `
    },
    7: {
        title: "Introducing the Machine-Consumable Content Protocol (MCP)",
        content: `
            <h3>Key Talking Points (3-4 minutes)</h3>
            <p><strong>This is where you present the solution - make it feel inevitable and necessary.</strong></p>
            
            <h3>The Strategic Shift</h3>
            <ul>
                <li><strong>From Defense to Offense:</strong> Stop just trying to keep people out - start charging admission</li>
                <li><strong>Four Core Goals:</strong> Protect, Monetize, Control, Innovate - all interconnected</li>
                <li><strong>Philosophical Change:</strong> Content becomes a managed asset, not just website filler</li>
            </ul>
            
            <h3>The Tollbooth Analogy</h3>
            <p>Instead of building higher walls, we're building a sophisticated tollbooth system. Good actors get fast lanes, bad actors get blocked, and everyone pays their fair share.</p>
            
            <h3>Why "Machine-Consumable"?</h3>
            <p>The name emphasizes that this is designed for the AI era - content formatted and delivered for both human and machine consumption.</p>
            
            <h3>Transition</h3>
            <p>"The MCP is built on three foundational pillars that work together to create this managed access system..."</p>
        `
    },
    8: {
        title: "MCP Architecture: Three Foundational Pillars",
        content: `
            <h3>Key Talking Points (2-3 minutes)</h3>
            <p><strong>Give the architectural overview before diving into details.</strong></p>
            
            <h3>The Three Pillars Work Together</h3>
            <ul>
                <li><strong>API-First:</strong> Creates the technical foundation for control</li>
                <li><strong>API Gateway:</strong> Provides the enforcement mechanism</li>
                <li><strong>Tiered Authentication:</strong> Implements the business logic</li>
            </ul>
            
            <h3>Why This Order Matters</h3>
            <p>You can't have granular control without APIs. You can't enforce policies without a gateway. You can't monetize without authentication. Each pillar enables the next.</p>
            
            <h3>Visual Guide</h3>
            <p>Use the boxes to guide attention - this is a system, not just individual components.</p>
            
            <h3>Transition</h3>
            <p>"Let's dive deeper into each pillar, starting with the foundational architectural transformation..."</p>
        `
    },
    9: {
        title: "Pillar I: API-First Transformation",
        content: `
            <h3>Key Talking Points (3-4 minutes)</h3>
            <p><strong>This is often the biggest technical hurdle - make it feel achievable.</strong></p>
            
            <h3>The Fundamental Problem with Monoliths</h3>
            <ul>
                <li>Traditional websites deliver "all or nothing" - whole pages</li>
                <li>No way to give different users different access to the same content</li>
                <li>Content, presentation, and business logic are tangled together</li>
            </ul>
            
            <h3>Headless Architecture Benefits</h3>
            <ul>
                <li><strong>Single Source of Truth:</strong> All content comes through the same APIs</li>
                <li><strong>Flexible Presentation:</strong> Website, mobile app, AI partner - same data, different formats</li>
                <li><strong>Granular Control:</strong> Can control access per endpoint, per user, per data type</li>
                <li><strong>Future-Proof:</strong> When the next platform emerges, you're ready</li>
            </ul>
            
            <h3>The Investment Mindset</h3>
            <p>This is infrastructure investment that pays dividends for years. Many publishers are already moving this direction for other reasons.</p>
            
            <h3>Transition</h3>
            <p>"Once you have APIs, you need a way to control and monitor access. That's where the API Gateway becomes critical..."</p>
        `
    },
    10: {
        title: "Pillar II: API Gateway as Control Tower",
        content: `
            <h3>Key Talking Points (3-4 minutes)</h3>
            <p><strong>Position the gateway as the "brain" of the operation.</strong></p>
            
            <h3>Single Point of Control</h3>
            <ul>
                <li><strong>Everything flows through here:</strong> No backdoors or side channels</li>
                <li><strong>Real-time decisions:</strong> Authentication, authorization, rate limiting happen instantly</li>
                <li><strong>Complete visibility:</strong> Every request is logged and auditable</li>
            </ul>
            
            <h3>The Four Core Functions</h3>
            <ul>
                <li><strong>Authentication:</strong> Who are you?</li>
                <li><strong>Authorization:</strong> What can you access?</li>
                <li><strong>Rate Limiting:</strong> How much can you take?</li>
                <li><strong>Logging:</strong> What did you actually do?</li>
            </ul>
            
            <h3>The Business Value</h3>
            <p>The logging function creates perfect audit trails for billing. No more guessing about usage - you have exact records for every API call.</p>
            
            <h3>Technical Reality</h3>
            <p>These systems are mature and proven. AWS, Google, Azure all offer enterprise-grade API gateways. This isn't experimental technology.</p>
            
            <h3>Transition</h3>
            <p>"Now we get to the heart of the system - how we actually differentiate between different types of users and bots..."</p>
        `
    },
    11: {
        title: "Pillar III: Tiered Access Control System",
        content: `
            <h3>Key Talking Points (4-5 minutes)</h3>
            <p><strong>This table is the core of your value proposition - spend time here.</strong></p>
            
            <h3>Walk Through Each Tier</h3>
            <ul>
                <li><strong>Tier 0 (Red):</strong> The traditional "blocked" category - but now intelligently detected</li>
                <li><strong>Tier 1 (Green):</strong> Normal website visitors - the current experience</li>
                <li><strong>Tier 2 (Orange):</strong> Registered developers - new revenue opportunity</li>
                <li><strong>Tier 3 (Blue):</strong> Licensed AI companies - the big revenue opportunity</li>
            </ul>
            
            <h3>The Authentication Progression</h3>
            <p>Notice how authentication becomes more sophisticated as value increases - from behavioral analysis to cryptographic proofs.</p>
            
            <h3>Zero Trust Architecture</h3>
            <p>Never assume anything - every request must prove its identity and intent. This creates the audit trail that enables new business models.</p>
            
            <h3>The Revenue Model</h3>
            <p>Tier 2 creates a funnel for Tier 3. Developers test with limited access, then upgrade to full licensing when they scale.</p>
            
            <h3>Transition</h3>
            <p>"This sounds complex, but implementation can be broken into manageable phases..."</p>
        `
    },
    12: {
        title: "Implementation Roadmap",
        content: `
            <h3>Key Talking Points (4-5 minutes)</h3>
            <p><strong>Make implementation feel achievable by breaking it down.</strong></p>
            
            <h3>Phase 1: Foundation First</h3>
            <ul>
                <li><strong>Legal Framework:</strong> You need the legal right to enforce these policies</li>
                <li><strong>Team Structure:</strong> This crosses departments - need coordination</li>
                <li><strong>Why Start Here:</strong> Technical implementation without legal foundation is useless</li>
            </ul>
            
            <h3>Phase 2: Technical Transformation</h3>
            <ul>
                <li><strong>Architecture Migration:</strong> Can be done incrementally</li>
                <li><strong>Component Selection:</strong> Proven vendors and solutions available</li>
                <li><strong>Configuration:</strong> Implementing the business logic in technical systems</li>
            </ul>
            
            <h3>Phase 3: Go to Market</h3>
            <ul>
                <li><strong>Monitoring Mode First:</strong> Reduce risk of blocking legitimate users</li>
                <li><strong>Partner Portal:</strong> Make it easy for legitimate partners to onboard</li>
                <li><strong>Commercial Pipeline:</strong> Turn the system into active revenue generation</li>
            </ul>
            
            <h3>Timeline Reality</h3>
            <p>This is a 6-18 month project depending on current technical state. But the commercial benefits start accruing in Phase 3.</p>
            
            <h3>Transition</h3>
            <p>"What does success look like? Let's talk about the benefits this system delivers..."</p>
        `
    },
    13: {
        title: "MCP Benefits: From Defense to Revenue",
        content: `
            <h3>Key Talking Points (3-4 minutes)</h3>
            <p><strong>Connect each benefit back to real business value.</strong></p>
            
            <h3>The Four Outcomes</h3>
            <ul>
                <li><strong>🛡️ Protect:</strong> Stop the 7.9% revenue bleeding from unauthorized scraping</li>
                <li><strong>💰 Monetize:</strong> Create new revenue streams from a $52B market</li>
                <li><strong>⚖️ Control:</strong> Set the terms instead of being victimized</li>
                <li><strong>🚀 Innovate:</strong> Modern architecture enables faster innovation</li>
            </ul>
            
            <h3>The Transformation</h3>
            <p>This isn't just about technology - it's about business model transformation. Publishers become active participants in the AI economy instead of passive victims.</p>
            
            <h3>Competitive Advantage</h3>
            <p>Early adopters will set market standards and build relationships while competitors are still dealing with scraping problems.</p>
            
            <h3>Long-term Positioning</h3>
            <p>AI is just the beginning. This architecture positions publishers for whatever comes next in automated content consumption.</p>
            
            <h3>Transition</h3>
            <p>"The window for action is open now, but it won't stay open forever..."</p>
        `
    },
    14: {
        title: "The Path Forward - Call to Action",
        content: `
            <h3>Key Talking Points (3-4 minutes)</h3>
            <p><strong>Create urgency and momentum for action.</strong></p>
            
            <h3>Why Now Is Critical</h3>
            <ul>
                <li><strong>Legal Environment:</strong> Courts are increasingly supporting licensing requirements</li>
                <li><strong>Market Timing:</strong> AI companies are actively seeking legal data sources</li>
                <li><strong>Competitive Position:</strong> Early movers will set standards and pricing</li>
                <li><strong>Technical Maturity:</strong> The tools and platforms are ready</li>
            </ul>
            
            <h3>The Risk of Waiting</h3>
            <ul>
                <li>Continued revenue loss to unauthorized scraping</li>
                <li>Missing the AI licensing boom</li>
                <li>Being forced to accept market standards set by others</li>
                <li>Technical debt accumulation making future changes harder</li>
            </ul>
            
            <h3>The Choice is Clear</h3>
            <p>Publishers can either continue to be victims of the AI revolution or become essential enablers of it. The MCP makes this transformation possible.</p>
            
            <h3>Next Steps</h3>
            <p>Start with Phase 1 - legal and organizational readiness. Begin the conversation internally about AI strategy and content monetization.</p>
            
            <h3>Transition</h3>
            <p>"I'd love to hear your thoughts and answer any questions about implementing this framework..."</p>
        `
    },
    15: {
        title: "Questions & Thank You",
        content: `
            <h3>Q&A Session Management (10-15 minutes)</h3>
            
            <h3>Anticipated Questions & Responses</h3>
            
            <h3>Q: "How much does this cost to implement?"</h3>
            <p><strong>A:</strong> Costs vary by current technical state, but consider the alternative - 7.9% revenue loss continuing indefinitely. Most cloud API gateways cost pennies per thousand requests. The ROI calculation is compelling when you include both cost savings and new revenue.</p>
            
            <h3>Q: "Won't this hurt our SEO if we block crawlers?"</h3>
            <p><strong>A:</strong> Not at all. Tier 1 access still allows legitimate search engines like Google to crawl and index content. We're only blocking unauthorized commercial scrapers, not search engines.</p>
            
            <h3>Q: "What if AI companies refuse to pay?"</h3>
            <p><strong>A:</strong> The legal environment is shifting to support licensing requirements. Companies like OpenAI are already signing deals. Those that refuse will face increasing legal risk and competitive disadvantage from lower-quality training data.</p>
            
            <h3>Q: "How do we price our content for AI licensing?"</h3>
            <p><strong>A:</strong> Start with industry benchmarks ($1-6+ per minute for video, six figures for specialized datasets). Consider value-based pricing based on training set size and commercial use. The MCP's logging enables flexible pricing models.</p>
            
            <h3>Closing Message</h3>
            <p>Thank the audience for their attention and interest. Emphasize that the AI revolution is happening with or without publishers - the choice is whether to profit from it or be victimized by it.</p>
        `
    }
};

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    
    if (n > totalSlides) currentSlide = 1;
    if (n < 1) currentSlide = totalSlides;
    
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlide - 1].classList.add('active');
    
    document.getElementById('slideNum').textContent = currentSlide;
    
    // Update navigation buttons
    document.getElementById('prevBtn').disabled = currentSlide === 1;
    document.getElementById('nextBtn').disabled = currentSlide === totalSlides;
    
    // Update speaker notes window if it exists - THIS IS THE KEY FIX
    updateNotesWindow();
}

function changeSlide(n) {
    currentSlide += n;
    showSlide(currentSlide);
}

function openNotesWindow() {
    // Close existing notes window if open
    if (notesWindow && !notesWindow.closed) {
        notesWindow.close();
    }
    
    // Open new notes window
    notesWindow = window.open('', 'speakerNotes', 'width=900,height=700,scrollbars=yes,resizable=yes');
    
    if (notesWindow) {
        const notes = speakerNotes[currentSlide];
        notesWindow.document.write(`
            <html>
            <head>
                <title>Speaker Notes - ${notes.title}</title>
                <style>
                    body { 
                        font-family: 'Segoe UI', Arial, sans-serif; 
                        padding: 30px; 
                        background: #2c3e50; 
                        color: white; 
                        line-height: 1.6;
                        margin: 0;
                    }
                    .header {
                        background: #34495e;
                        padding: 20px;
                        margin: -30px -30px 30px -30px;
                        border-bottom: 3px solid #3498db;
                    }
                    h1 { 
                        color: #3498db; 
                        margin: 0;
                        font-size: 1.8em;
                    }
                    .slide-info {
                        color: #bdc3c7;
                        margin-top: 5px;
                        font-size: 1.1em;
                    }
                    h2 { 
                        color: #3498db; 
                        margin-top: 30px;
                        margin-bottom: 15px;
                        font-size: 1.4em;
                    }
                    h3 { 
                        color: #e74c3c; 
                        margin-top: 25px; 
                        margin-bottom: 10px;
                        font-size: 1.2em;
                    }
                    p, li { 
                        font-size: 1em; 
                        line-height: 1.6; 
                        margin-bottom: 12px; 
                    }
                    ul { 
                        margin-left: 20px; 
                        margin-bottom: 15px; 
                    }
                    li {
                        margin-bottom: 8px;
                    }
                    strong {
                        color: #f39c12;
                    }
                    .content {
                        max-width: 800px;
                    }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1 id="notesTitle">${notes.title}</h1>
                    <div class="slide-info">Slide <span id="slideNumber">${currentSlide}</span> of 15</div>
                </div>
                <div class="content" id="notesContent">
                    ${notes.content}
                </div>
            </body>
            </html>
        `);
        
        notesWindow.document.close();
    }
}

function updateNotesWindow() {
    if (notesWindow && !notesWindow.closed) {
        const notes = speakerNotes[currentSlide];
        const titleElement = notesWindow.document.getElementById('notesTitle');
        const slideNumberElement = notesWindow.document.getElementById('slideNumber');
        const contentElement = notesWindow.document.getElementById('notesContent');
        
        if (titleElement && slideNumberElement && contentElement) {
            titleElement.textContent = notes.title;
            slideNumberElement.textContent = currentSlide;
            contentElement.innerHTML = notes.content;
            notesWindow.document.title = `Speaker Notes - ${notes.title}`;
        }
    }
}

function closeNotesWindow() {
    if (notesWindow && !notesWindow.closed) {
        notesWindow.close();
    }
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') changeSlide(-1);
    if (e.key === 'ArrowRight') changeSlide(1);
    if (e.key === 'Escape') closeNotesWindow();
    if (e.key === 'n' || e.key === 'N') openNotesWindow();
});

// Initialize
showSlide(currentSlide);