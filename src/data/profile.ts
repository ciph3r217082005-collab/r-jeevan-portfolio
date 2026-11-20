export const profile = {
  brand: "RJ",
  firstName: "R",
  lastName: "Jeevan",
  handle: "jeevan17",
  role: ["Cybersecurity Student &", "Security Researcher"],
  tagline:
    "Cybersecurity student passionate about VAPT, network security and cryptography — exploring how systems break and building practical solutions that keep them secure.",
  location: "Chennai, Tamil Nadu · India",
  linkedin: "https://www.linkedin.com/in/jeevan17",
  github: "https://github.com/Jeevan1725",
  githubHandle: "Jeevan1725",
  email: "jeevan17082005@gmail.com",
  credly: [
    "https://www.credly.com/users/r-jeevan.b4515817",
    "https://www.credly.com/users/r-jeevan.416cf49a",
  ],
  stats: [
    { value: 3, suffix: "", label: ["Industry", "Certifications"], tone: "neon" },
    { value: 925, suffix: "", label: ["AWS CLF-C02", "Score / 1000"], tone: "fg" },
    { value: 5, suffix: "+", label: ["Podium", "Finishes"], tone: "cyber" },
  ],
};

export const about = [
  "I'm a Computer Science and Engineering student specialising in Cybersecurity at Amrita Vishwa Vidyapeetham, Chennai. I'm passionate about cybersecurity, software development, and building technology that solves real-world problems.",
  "My key interests include Cybersecurity, Vulnerability Assessment and Penetration Testing (VAPT), Network Security, and Cryptography. I enjoy exploring security vulnerabilities, understanding how systems work, and developing practical solutions through hands-on projects.",
  "I have worked on projects involving secure application development, participated in cybersecurity competitions and contributed to security research.",
  "I'm ISC2 Certified in Cybersecurity (CC) and an AWS Certified Cloud Practitioner, continuously expanding my knowledge through hands-on learning and technical exploration. I believe in continuous learning, practical experimentation, and turning curiosity into meaningful technical skills.",
];

export const terminal = [
  { cmd: "whoami", out: ["r_jeevan // jeevan17"] },
  {
    cmd: "cat ./profile.txt",
    out: [
      "role: cybersecurity student & researcher",
      "focus: vapt · network security · cryptography",
      "certs: ISC2 CC · AWS CCP · Splunk CDA",
      "school: amrita vishwa vidyapeetham",
    ],
  },
  { cmd: "./status --disclosure", out: ["> critical auth bug reported · accepted"] },
];

export const highlights = [
  { title: "ISC2 CC", sub: "Certified in Cybersecurity" },
  { title: "AWS CCP", sub: "Cloud Practitioner · 925" },
  { title: "SCOPUS", sub: "Published book chapter" },
];

export const expertise = [
  {
    icon: "search",
    title: "VAPT",
    body: "Vulnerability assessment and penetration testing — SQLi, XSS, IDOR, CSRF and broken access control, found, exploited and fixed.",
  },
  {
    icon: "activity",
    title: "Network Security",
    body: "TCP/IP, DNS, HTTP and TLS fundamentals — securing how systems talk to each other and defending the network perimeter.",
  },
  {
    icon: "key",
    title: "Cryptography",
    body: "AES, hashing and secure data handling — understanding how encryption works, and how it breaks. Co-author on cipher-classification research.",
  },
  {
    icon: "shield",
    title: "Security Research",
    body: "Finding and responsibly disclosing real flaws — from a critical banking authentication bug to hardcoded keys in an app.",
  },
  {
    icon: "flag",
    title: "Capture The Flag",
    body: "Web, crypto and reversing challenges under the clock — national-level wins and runner-up finishes.",
  },
  {
    icon: "cloud",
    title: "Cloud Security",
    body: "AWS — EC2, IAM, VPC, S3, RDS, Route 53 and CloudFront — and securing workloads and data in the cloud.",
  },
] as const;

export const reasons = [
  {
    title: "Analytical Mindset",
    body: "I decompose problems into patterns. Logs, packets and puzzles all yield to the same disciplined thinking.",
  },
  {
    title: "Certified Foundations",
    body: "ISC2 CC, AWS Cloud Practitioner and Splunk Cybersecurity Defense Architect — verified fundamentals, not just enthusiasm.",
  },
  {
    title: "Real Findings",
    body: "I've reported genuine vulnerabilities through responsible disclosure and written up what I found, clearly.",
  },
  {
    title: "Team Player",
    body: "I co-organised a national cybersecurity event and most of my wins came with a team. I communicate clearly and pull my weight.",
  },
];

export const counters = [
  { value: 3, suffix: "", label: "Certifications" },
  { value: 925, suffix: "", label: "AWS Exam Score" },
  { value: 75, suffix: "+", label: "Event Participants Run" },
  { value: 2027, suffix: "", label: "Graduating Class" },
];

export const work = [
  {
    tag: "RESEARCH",
    org: "AMRITA",
    year: "2026",
    title: "CyberRecon — a QR-code C2, studied defensively.",
    body: "Reproduced Mandiant's 2024 QR-code browser-isolation bypass in an isolated lab, then hardened it with AES-256-GCM payloads and authenticated channels, fixing 10 CWEs and documenting detection signatures.",
    metrics: [
      { v: "100+", l: "Commits" },
      { v: "10", l: "CWEs fixed" },
      { v: "0", l: "High SAST findings" },
    ],
    stack: ["Python", "Flask", "OpenCV"],
    badge: { label: "Focus", value: "C2" },
    image: "cyberrecon",
    href: "https://github.com/Jeevan1725/cyberrecon",
  },
  {
    tag: "DISCLOSURE",
    org: "BANKING & PROCTORING",
    year: "2026",
    title: "Real vulnerabilities, responsibly disclosed.",
    body: "Identified a critical authentication flaw in a digital banking platform, accepted through its Responsible Disclosure Program. Separately reported 5 weaknesses in an exam-proctoring app, including a hardcoded encryption key and plaintext OAuth tokens.",
    metrics: [
      { v: "Critical", l: "Banking bug" },
      { v: "5", l: "Proctor findings" },
      { v: "2", l: "Disclosures" },
    ],
    stack: ["Vuln Assessment", "Auth Testing", "Reporting"],
    badge: { label: "Status", value: "Accepted" },
    image: "disclosure",
  },
  {
    tag: "CAPSTONE",
    org: "WEB APP SECURITY",
    year: "",
    title: "AquaShop — one shop, vulnerable and secure.",
    body: "An aquarium e-commerce site built on LAMP with a one-click toggle that flips the whole app between VULNERABLE and SECURE modes. Each of 12 flaws — SQLi, stored, reflected and DOM XSS, IDOR, CSRF, clickjacking, path traversal, broken access control and file-upload RCE — ships with a working attack, the fix and documentation.",
    metrics: [
      { v: "12", l: "Vulns demoed" },
      { v: "2", l: "Modes" },
      { v: "12", l: "Write-ups" },
    ],
    stack: ["PHP 8", "MySQL", "Apache", "Vanilla JS"],
    badge: { label: "Mode", value: "Toggle" },
    image: "aquashop",
    href: "https://github.com/Jeevan1725/aquashop",
  },
  {
    tag: "BUILD",
    org: "PROJECT",
    year: "",
    title: "Secure notes with client-side AES-256.",
    body: "A desktop notes app with AES-256 client-side encryption, bcrypt authentication and MySQL-backed encrypted CRUD — built to practise secure data handling end to end.",
    metrics: [
      { v: "AES-256", l: "Encryption" },
      { v: "bcrypt", l: "Auth" },
      { v: "MySQL", l: "Storage" },
    ],
    stack: ["Python", "Tkinter", "MySQL"],
    badge: { label: "Focus", value: "Crypto" },
    image: "securenotes",
    href: "https://github.com/Jeevan1725/Secured-Notepad-Application",
  },
] as const;

export const credentials = [
  { id: "64a415e5-8532-41d5-8b72-b6ff2002ab2f", name: "Splunk Certified Cybersecurity Defense Architect", issuer: "Cisco", date: "Oct 2026", img: "https://images.credly.com/images/5d937859-0c5c-44f5-b250-0aff86d93a2a/blob" },
  { id: "ed5b910e-b313-4857-a022-4d42fd22dfa9", name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "Sep 2026", img: "https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png" },
  { id: "8edb7069-74bc-4f6e-8366-55eaa4e8b0f7", name: "Certified in Cybersecurity (CC)", issuer: "ISC2", date: "Aug 2026", img: "https://images.credly.com/images/2859c37a-015b-40a6-b570-4bdd7e849b05/image.png" },
];

export const arsenal = [
  { group: "Languages", items: ["Python", "C++", "C", "SQL", "PHP", "JavaScript"] },
  { group: "Networking & Protocols", items: ["TCP/IP", "HTTP", "DNS", "SSL/TLS", "Socket Programming", "Wireshark"] },
  { group: "Security", items: ["VAPT", "OWASP Top 10", "Cryptography (AES)", "Hashing", "bcrypt", "Secure Data Handling"] },
  { group: "Tools & Libraries", items: ["OpenCV", "Tkinter", "PyAutoGUI", "MySQL", "Flask", "Git"] },
  { group: "AWS", items: ["EC2", "IAM", "VPC", "S3", "ELB", "Auto Scaling", "RDS", "Route 53", "CloudFront"] },
  { group: "Certifications", items: ["ISC2 CC", "AWS CCP", "Splunk CDA"] },
];

export const process = [
  { tag: "RECON", title: "Map the target", body: "Understand how the system works first — its inputs, users, trust boundaries and attack surface." },
  { tag: "ASSESS", title: "Find the weakness", body: "Test inputs, sessions and access controls to surface the flaws that don't belong." },
  { tag: "EXPLOIT", title: "Prove the impact", body: "Build a safe, working proof of concept so the risk is clear, not theoretical." },
  { tag: "REPORT", title: "Explain it clearly", body: "Turn findings into concise notes anyone on the team can read and act on." },
  { tag: "HARDEN", title: "Close the door", body: "Recommend fixes and verify they hold — then document what I learned for next time." },
];

export const journey = [
  { date: "2023 — 2027", title: "B.Tech CSE (Cyber Security) · CGPA 8.29", place: "Amrita Vishwa Vidyapeetham, Chennai" },
  { date: "2025", title: "Co-Organizer — Amrita Cyber Nation 2025", place: "National online cybersecurity event · 75+ participants" },
  { date: "2025–26", title: "Winner · Runner-Up · Top 10 finishes", place: "DTU Fortune'25, IIM Kashipur, CyberShield 2026, SETS Gameathon" },
  { date: "Feb 2026", title: "1st Place — Logic Links, VCC 2026", place: "Vel Tech CyberCatalyst · Team no_thing" },
  { date: "2026", title: "Chapter in The Essentials of SOC (CRC Press)", place: "Adversarial Robustness of Cipher Classification Models · SCOPUS" },
  { date: "Aug – Oct 2026", title: "ISC2 CC · AWS CCP · Splunk CDA", place: "Three industry certifications in three months" },
];
