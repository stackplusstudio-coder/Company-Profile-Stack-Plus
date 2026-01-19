-- Seed Initial Data for StackPlus

-- Insert default site settings
INSERT INTO site_settings (key, value_en, value_id) VALUES
  ('company_name', 'StackPlus', 'StackPlus'),
  ('tagline', 'Building Digital Excellence', 'Membangun Keunggulan Digital'),
  ('email', 'stackplustudio@gmail.com', 'stackplustudio@gmail.com'),
  ('phone', '+62 813 9841 0264', '+62 813 9841 0264'),
  ('address', 'Jl. Kentang 6 No.129, Tangerang, Banten', 'Jl. Potato 6 No. 129, Tangerang, Banten'),
  ('facebook', 'https://facebook.com/stackplus', 'https://facebook.com/stackplus'),
  ('twitter', 'https://twitter.com/stackplus', 'https://twitter.com/stackplus'),
  ('instagram', 'https://www.instagram.com/stackplus.studio/', 'https://www.instagram.com/stackplus.studio/'),
  ('linkedin', 'https://linkedin.com/company/stackplus', 'https://linkedin.com/company/stackplus'),
  ('about_vision', 'To be the leading digital agency that transforms businesses through innovative technology solutions.', 'Menjadi agensi digital terkemuka yang mentransformasi bisnis melalui solusi teknologi inovatif.'),
  ('about_mission', 'We empower businesses with cutting-edge digital solutions, combining creativity with technical excellence to deliver exceptional results.', 'Kami memberdayakan bisnis dengan solusi digital mutakhir, menggabungkan kreativitas dengan keunggulan teknis untuk memberikan hasil yang luar biasa.')
ON CONFLICT (key) DO NOTHING;

-- Insert default services
INSERT INTO services (title_en, title_id, description_en, description_id, icon, slug, is_featured, sort_order) VALUES
  (
    'UI/UX Design',
    'Desain UI/UX',
    'We create stunning, user-centered designs that captivate audiences and drive engagement. Our design process focuses on intuitive interfaces and seamless user experiences.',
    'Kami menciptakan desain menakjubkan yang berpusat pada pengguna untuk memikat audiens dan meningkatkan keterlibatan. Proses desain kami berfokus pada antarmuka intuitif dan pengalaman pengguna yang mulus.',
    'palette',
    'ui-ux-design',
    true,
    1
  ),
  (
    'Logo & Branding',
    'Logo & Branding',
    'Build a powerful brand identity that stands out. We craft memorable logos, comprehensive brand guidelines, and visual systems that tell your unique story.',
    'Bangun identitas merek yang kuat dan menonjol. Kami membuat logo yang memorable, panduan merek komprehensif, dan sistem visual yang menceritakan kisah unik Anda.',
    'sparkles',
    'logo-branding',
    true,
    2
  ),
  (
    'Web Development',
    'Pengembangan Web',
    'Transform your digital presence with cutting-edge web solutions. We build fast, secure, and scalable websites using the latest technologies.',
    'Transformasi kehadiran digital Anda dengan solusi web mutakhir. Kami membangun website cepat, aman, dan skalabel menggunakan teknologi terbaru.',
    'code',
    'web-development',
    true,
    3
  )
ON CONFLICT (slug) DO NOTHING;

-- Insert default homepage content
INSERT INTO homepage_content (section, title_en, title_id, subtitle_en, subtitle_id, content_en, content_id, cta_text_en, cta_text_id, cta_link, sort_order) VALUES
  (
    'hero',
    'Building Digital Excellence',
    'Membangun Keunggulan Digital',
    'We craft stunning digital experiences that drive results',
    'Kami menciptakan pengalaman digital memukau yang menghasilkan',
    'StackPlus is a full-service digital agency specializing in UI/UX design, branding, and web development. We help businesses transform their digital presence.',
    'StackPlus adalah agensi digital lengkap yang berspesialisasi dalam desain UI/UX, branding, dan pengembangan web. Kami membantu bisnis mentransformasi kehadiran digital mereka.',
    'Get Started',
    'Mulai Sekarang',
    '/contact',
    1
  ),
  (
    'services',
    'Our Services',
    'Layanan Kami',
    'Comprehensive digital solutions for modern businesses',
    'Solusi digital komprehensif untuk bisnis modern',
    NULL,
    NULL,
    'View All Services',
    'Lihat Semua Layanan',
    '/services',
    2
  ),
  (
    'about',
    'Why Choose StackPlus?',
    'Mengapa Memilih StackPlus?',
    'We combine creativity with technical excellence',
    'Kami menggabungkan kreativitas dengan keunggulan teknis',
    'With years of experience and a passion for innovation, we deliver digital solutions that exceed expectations. Our team of experts works closely with you to bring your vision to life.',
    'Dengan pengalaman bertahun-tahun dan semangat untuk inovasi, kami memberikan solusi digital yang melampaui ekspektasi. Tim ahli kami bekerja sama dengan Anda untuk mewujudkan visi Anda.',
    'Learn More',
    'Pelajari Lebih Lanjut',
    '/about',
    3
  ),
  (
    'portfolio',
    'Featured Work',
    'Portofolio Unggulan',
    'Explore our latest projects and success stories',
    'Jelajahi proyek terbaru dan kisah sukses kami',
    NULL,
    NULL,
    'View All Projects',
    'Lihat Semua Proyek',
    '/portfolio',
    4
  ),
  (
    'testimonials',
    'What Our Clients Say',
    'Apa Kata Klien Kami',
    'Trusted by businesses worldwide',
    'Dipercaya oleh bisnis di seluruh dunia',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    5
  ),
  (
    'cta',
    'Ready to Transform Your Digital Presence?',
    'Siap Mentransformasi Kehadiran Digital Anda?',
    'Let''s build something amazing together',
    'Mari membangun sesuatu yang luar biasa bersama',
    NULL,
    NULL,
    'Contact Us',
    'Hubungi Kami',
    '/contact',
    6
  )
ON CONFLICT (section) DO NOTHING;

-- Insert sample testimonials
INSERT INTO testimonials (client_name, client_position, client_company, content_en, content_id, rating, is_featured, sort_order) VALUES
  (
    'John Smith',
    'CEO',
    'TechCorp Inc.',
    'StackPlus transformed our online presence completely. Their attention to detail and creative approach exceeded our expectations. Highly recommended!',
    'StackPlus mengubah kehadiran online kami sepenuhnya. Perhatian mereka terhadap detail dan pendekatan kreatif melampaui ekspektasi kami. Sangat direkomendasikan!',
    5,
    true,
    1
  ),
  (
    'Sarah Johnson',
    'Marketing Director',
    'Global Solutions',
    'Working with StackPlus was a game-changer for our brand. They delivered a stunning website that perfectly captures our company''s vision.',
    'Bekerja dengan StackPlus adalah terobosan untuk merek kami. Mereka menghadirkan website menakjubkan yang sempurna menangkap visi perusahaan kami.',
    5,
    true,
    2
  ),
  (
    'Michael Chen',
    'Founder',
    'StartupX',
    'The team at StackPlus is incredibly talented and professional. They brought our startup''s vision to life with a beautiful, functional design.',
    'Tim di StackPlus sangat berbakat dan profesional. Mereka mewujudkan visi startup kami dengan desain yang indah dan fungsional.',
    5,
    true,
    3
  )
ON CONFLICT DO NOTHING;

-- Insert sample team members
INSERT INTO team_members (name, position_en, position_id, bio_en, bio_id, sort_order) VALUES
  (
    'Alex Rivera',
    'CEO & Founder',
    'CEO & Pendiri',
    'Visionary leader with 15+ years in digital innovation. Alex founded StackPlus with a mission to revolutionize how businesses approach digital transformation.',
    'Pemimpin visioner dengan 15+ tahun di inovasi digital. Alex mendirikan StackPlus dengan misi merevolusi cara bisnis mendekati transformasi digital.',
    1
  ),
  (
    'Emily Watson',
    'Creative Director',
    'Direktur Kreatif',
    'Award-winning designer passionate about creating meaningful digital experiences. Emily leads our design team in crafting stunning visual solutions.',
    'Desainer peraih penghargaan yang passionate menciptakan pengalaman digital bermakna. Emily memimpin tim desain kami dalam menciptakan solusi visual memukau.',
    2
  ),
  (
    'David Kim',
    'Lead Developer',
    'Lead Developer',
    'Full-stack expert specializing in modern web technologies. David ensures every project we deliver is built with cutting-edge tech and best practices.',
    'Ahli full-stack yang berspesialisasi dalam teknologi web modern. David memastikan setiap proyek yang kami deliver dibangun dengan teknologi terkini dan praktik terbaik.',
    3
  )
ON CONFLICT DO NOTHING;

-- Insert sample portfolio items
INSERT INTO portfolio (title_en, title_id, description_en, description_id, client_name, technologies, results_en, results_id, slug, is_featured, sort_order) VALUES
  (
    'E-Commerce Platform Redesign',
    'Redesain Platform E-Commerce',
    'Complete overhaul of an e-commerce platform focusing on user experience and conversion optimization. The project included a new design system, checkout flow improvements, and mobile optimization.',
    'Perombakan total platform e-commerce dengan fokus pada pengalaman pengguna dan optimasi konversi. Proyek ini mencakup sistem desain baru, perbaikan alur checkout, dan optimasi mobile.',
    'ShopMax',
    '["Next.js", "React", "Tailwind CSS", "Stripe", "Supabase"]',
    'Achieved 45% increase in conversion rate and 60% improvement in page load times.',
    'Mencapai peningkatan 45% dalam tingkat konversi dan 60% perbaikan dalam waktu muat halaman.',
    'shopmax-redesign',
    true,
    1
  ),
  (
    'FinTech Mobile App',
    'Aplikasi Mobile FinTech',
    'Design and development of a mobile banking application with focus on security and ease of use. Features include biometric authentication, real-time transactions, and investment tracking.',
    'Desain dan pengembangan aplikasi perbankan mobile dengan fokus pada keamanan dan kemudahan penggunaan. Fitur mencakup autentikasi biometrik, transaksi real-time, dan pelacakan investasi.',
    'NeoBank',
    '["React Native", "Node.js", "PostgreSQL", "AWS"]',
    'Over 100,000 downloads in the first month with a 4.8 app store rating.',
    'Lebih dari 100.000 unduhan di bulan pertama dengan rating 4.8 di app store.',
    'neobank-app',
    true,
    2
  ),
  (
    'Corporate Brand Identity',
    'Identitas Merek Korporat',
    'Comprehensive brand identity development including logo design, brand guidelines, marketing materials, and digital assets for a multinational consulting firm.',
    'Pengembangan identitas merek komprehensif termasuk desain logo, panduan merek, materi pemasaran, dan aset digital untuk perusahaan konsultan multinasional.',
    'Vertex Consulting',
    '["Figma", "Adobe Illustrator", "Adobe Photoshop"]',
    'Successfully launched new brand across 12 countries with positive stakeholder reception.',
    'Berhasil meluncurkan merek baru di 12 negara dengan penerimaan positif dari stakeholder.',
    'vertex-branding',
    true,
    3
  )
ON CONFLICT (slug) DO NOTHING;

-- Insert sample blog categories
INSERT INTO blog_categories (name_en, name_id, slug) VALUES
  ('Design', 'Desain', 'design'),
  ('Development', 'Pengembangan', 'development'),
  ('Business', 'Bisnis', 'business'),
  ('Technology', 'Teknologi', 'technology')
ON CONFLICT (slug) DO NOTHING;

-- Insert sample blog posts
INSERT INTO blog_posts (title_en, title_id, excerpt_en, excerpt_id, content_en, content_id, slug, is_published, published_at) VALUES
  (
    'The Future of Web Design in 2025',
    'Masa Depan Desain Web di 2025',
    'Explore the latest trends shaping the future of web design, from AI-powered interfaces to immersive experiences.',
    'Jelajahi tren terbaru yang membentuk masa depan desain web, dari antarmuka bertenaga AI hingga pengalaman imersif.',
    'Web design continues to evolve at a rapid pace. In this article, we explore the key trends that will define the digital landscape in 2025 and beyond. From AI-generated layouts to voice-first interfaces, the future of web design is both exciting and challenging.',
    'Desain web terus berkembang dengan cepat. Dalam artikel ini, kami menjelajahi tren utama yang akan mendefinisikan lanskap digital di 2025 dan seterusnya. Dari tata letak yang dihasilkan AI hingga antarmuka voice-first, masa depan desain web sangat menarik dan menantang.',
    'future-of-web-design-2025',
    true,
    NOW()
  ),
  (
    'Building Scalable Applications with Next.js',
    'Membangun Aplikasi Skalabel dengan Next.js',
    'Learn how to leverage Next.js to build performant and scalable web applications.',
    'Pelajari cara memanfaatkan Next.js untuk membangun aplikasi web yang berkinerja dan skalabel.',
    'Next.js has become the go-to framework for building modern web applications. In this comprehensive guide, we walk through best practices for building scalable applications that can handle millions of users.',
    'Next.js telah menjadi framework andalan untuk membangun aplikasi web modern. Dalam panduan komprehensif ini, kami membahas praktik terbaik untuk membangun aplikasi skalabel yang dapat menangani jutaan pengguna.',
    'building-scalable-apps-nextjs',
    true,
    NOW()
  )
ON CONFLICT (slug) DO NOTHING;
