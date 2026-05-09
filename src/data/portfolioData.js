import { FileText, GraduationCap, Calendar, Users, Mic, Globe, Dna, Bird, Globe2, FlaskConical, BookOpen, Mail, MapPin, Link, TestTube } from 'lucide-react';

export const stats = [
  { icon: FileText, value: 20, suffix: "+", label: "Publications" },
  { icon: GraduationCap, value: 1, suffix: "", label: "International PhD (China)" },
  { icon: Calendar, value: 7, suffix: "+", label: "Years in Academia" },
  { icon: Users, value: 3, suffix: "", label: "Administrative Roles" },
  { icon: Mic, value: 10, suffix: "+", label: "Conferences & Seminars" },
  { icon: Globe, value: 2, suffix: "", label: "Languages (English, Chinese)" }
];

export const aboutText = [
  "I am Dr. Hafiz Iftikhar Hussain, Assistant Professor at the Department of Pathology, College of Veterinary Sciences, University of Veterinary and Animal Sciences (UVAS) Lahore, with campus at Bahawalpur. I earned my PhD in Basic Veterinary Medicine (Pathobiology) from Huazhong Agricultural University, Wuhan, China, in 2017.",
  "Currently, I serve as Director of Central Diagnostic Laboratory, Deputy Controller of Examinations (Postgraduate), and Coordinator for DVM and BS MLT Programs at CUVAS, Bahawalpur.",
  "My research focuses on antimicrobial resistance, molecular diagnostics, and zoonotic pathogens—bridging animal health with public health through the One Health approach."
];

export const focusAreas = [
  { icon: Dna, title: "Molecular Pathogen Genomics", desc: "Whole genome sequencing & transcriptomics of MDR pathogens" },
  { icon: TestTube, title: "Antimicrobial Resistance", desc: "ESBL-producing bacteria & AMR surveillance in poultry" },
  { icon: Bird, title: "Poultry & Livestock Pathology", desc: "Disease diagnosis & pathological investigations" },
  { icon: Globe2, title: "One Health & Zoonotic Threats", desc: "Bridging veterinary & human health research" },
  { icon: FlaskConical, title: "Diagnostic Laboratory Leadership", desc: "Managing Central Diagnostic Laboratory operations" },
  { icon: BookOpen, title: "Academic Capacity Building", desc: "Training next generation of veterinary scientists" }
];

export const thesisWork = [
  {
    type: "PhD Research",
    title: "Functional Genomic & Transcriptomic Profiling of MDR E. coli",
    description: "Whole genome re-sequencing and transcriptomics of highly virulent, multidrug-resistant Escherichia coli of poultry origin.",
    tags: ["#Genomics", "#AMR", "#Poultry", "#Transcriptomics"]
  },
  {
    type: "M.Phil Research",
    title: "Clinico-Pathological Studies of Newcastle Disease in Arsenic-Intoxicated Broilers",
    description: "Investigating the immunosuppressive and pathological effects of arsenic exposure on Newcastle disease virus in broiler chicks.",
    tags: ["#Toxicology", "#Histopathology", "#Immunology"]
  }
];

export const publications = [
  {
    year: 2016,
    title: "Comparative virulence studies and transcriptome analysis of Staphylococcus aureus strains isolated from animals",
    authors: "Zahid Iqbal, Mohamed N. Seleem, Hafiz I. Hussain, Lingli Huang, Haihong Hao, Zong-Hui Yuan",
    journal: "Scientific Reports",
    doi: "https://doi.org/10.1038/srep35442"
  },
  {
    year: 2016,
    title: "Pharmacokinetics and Metabolism of Cyadox and Its Main Metabolites in Beagle Dogs Following Oral, Intramuscular, and Intravenous Administration",
    authors: "Adeel Sattar, Shuyu Xie, Lingli Huang, Zahid Iqbal, Wei Qu, Muhammad A. Shabbir, Yuanhu Pan, Hafiz I. Hussain, Dongmei Chen, Yanfei Tao, Zhenli Liu, Mujahid Iqbal, Zonghui Yuan",
    journal: "Frontiers in Pharmacology",
    doi: "https://doi.org/10.3389/fphar.2016.00236"
  },
  {
    year: 2016,
    title: "Metabolism and toxicity of arsenicals in mammals",
    authors: "Adeel Sattar, Shuyu Xie, Mian Abdul Hafeez, Xu Wang, Hafiz Iftikhar Hussain, Zahid Iqbal, Yuanhu Pan, Mujahid Iqbal, Muhammad A. Shabbir, Zonghui Yuan",
    journal: "Environmental Toxicology and Pharmacology",
    doi: "https://doi.org/10.1016/j.etap.2016.10.020"
  },
  {
    year: 2016,
    title: "Immunosuppressive effects of arsenic in broiler chicks exposed to Newcastle disease virus",
    authors: "Adeel Sattar, Ahrar Khan, Hafiz Iftikhar Hussain, Cheng He, Riaz Hussain, Shen Zhiqiang, Muhammad Kashif Saleemi, Shafia Tehseen Gul",
    journal: "Journal of Immunotoxicology",
    doi: "https://doi.org/10.1080/1547691X.2016.1217105"
  },
  {
    year: 2016,
    title: "Survival and evolution of CRISPR-Cas system in prokaryotes and its applications",
    authors: "Muhammad Abu Bakr Shabbir, Haihong Hao, Muhammad Zubair Shabbir, Hafiz Iftikhar Hussain, Zahid Iqbal, Saeed Ahmed, Adeel Sattar, Mujahid Iqbal, Jun Li, Zonghui Yuan",
    journal: "Frontiers in Immunology",
    doi: "https://doi.org/10.3389/fimmu.2016.00375"
  },
  {
    year: 2016,
    title: "Aqueous two-phase system (ATPS): an overview and advances in its applications",
    authors: "Mujahid Iqbal, Yanfei Tao, Shuyu Xie, Yufei Zhu, Dongmei Chen, Xu Wang, Lingli Huang, Dapeng Peng, Adeel Sattar, Muhammad Abu Bakr Shabbir, Hafiz Iftikhar Hussain, Saeed Ahmed, Zonghui Yuan",
    journal: "Biological Procedures Online",
    doi: "https://doi.org/10.1186/s12575-016-0048-8"
  },
  {
    year: 2014,
    title: "Benefits and risks of antimicrobial use in food-producing animals",
    authors: "Haihong Hao, Guyue Cheng, Zahid Iqbal, Xiaohui Ai, Hafiz I. Hussain, Lingli Huang, Menghong Dai, Yulian Wang, Zhenli Liu, Zonghui Yuan",
    journal: "Frontiers in Microbiology",
    doi: "https://doi.org/10.3389/fmicb.2014.00288"
  }
];

export const timeline = [
  {
    year: "2025–Present",
    title: "Director, Central Diagnostic Laboratory",
    institution: "CUVAS, Bahawalpur",
    current: true
  },
  {
    year: "2025–Present",
    title: "Deputy Controller Examinations (Postgraduate)",
    institution: "CUVAS, Bahawalpur",
    current: false
  },
  {
    year: "2024–Present",
    title: "Coordinator, DVM & BS MLT Programs",
    institution: "CUVAS, Bahawalpur",
    current: false
  },
  {
    year: "2018–Present",
    title: "Assistant Professor",
    institution: "Department of Pathology, CUVAS",
    current: false
  },
  {
    year: "2018 (Jul–Dec)",
    title: "Assistant Professor",
    institution: "PMAS-Arid Agriculture University",
    current: false
  },
  {
    year: "2013–2017",
    title: "PhD in Basic Veterinary Medicine (Pathobiology)",
    institution: "Huazhong Agricultural University, Wuhan, China",
    current: false
  },
  {
    year: "2010–2012",
    title: "M.Phil in Pathology",
    institution: "University of Agriculture, Faisalabad",
    current: false
  },
  {
    year: "2012–2013",
    title: "Veterinary Practitioner",
    institution: "Al-shifa Veterinary Clinic, Sargodha",
    current: false
  },
  {
    year: "2005–2010",
    title: "Doctor of Veterinary Medicine (DVM)",
    institution: "University of Agriculture, Faisalabad",
    current: false
  }
];

export const conferences = [
  {
    title: "21st Annual Conference of MMIDSP",
    location: "Nishtar Medical University, Multan",
    date: "2025",
    type: "attended"
  },
  {
    title: "International Conference on Belt & Road Agricultural Development",
    location: "Wuhan, China",
    date: "2017",
    type: "attended"
  },
  {
    title: "International Conference on Veterinary Sciences",
    location: "Wuhan, China",
    date: "2016",
    type: "attended"
  },
  {
    title: "National Conference on Emerging Zoonotic Diseases",
    location: "University of Veterinary and Animal Sciences, Lahore",
    date: "2019",
    type: "attended"
  }
];

export const workshops = [
  {
    title: "Advanced Molecular Diagnostics Training",
    location: "Huazhong Agricultural University, China",
    date: "2019"
  },
  {
    title: "Scientific Writing & Publication Ethics",
    location: "UVAS, Lahore",
    date: "2021"
  },
  {
    title: "Laboratory Quality Management Systems",
    location: "CUVAS, Bahawalpur",
    date: "2025"
  }
];

export const contactInfo = [
  { type: "email", text: "hafiziftikharhussain@cuvas.edu.pk", href: "mailto:hafiziftikharhussain@cuvas.edu.pk" },
  { type: "location", text: "Department of Pathology, CUVAS, Bahawalpur, Pakistan" },
  { type: "linkedin", text: "Connect", href: "https://linkedin.com/in/hafiz-iftikhar-hussain", target: "_blank" }
];

export const navItems = ["About", "Research", "Journey", "Conferences", "Contact"];