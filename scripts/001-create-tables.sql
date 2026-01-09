-- StackPlus Database Schema
-- This script creates all necessary tables for the CMS

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================
-- ADMIN USERS TABLE (for role-based access)
-- =====================
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'editor' CHECK (role IN ('admin', 'editor')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Allow admins to view all admin users
CREATE POLICY "Allow authenticated users to view admin_users" ON admin_users
  FOR SELECT USING (auth.uid() IS NOT NULL);

-- Allow admins to insert/update/delete
CREATE POLICY "Allow admins to manage admin_users" ON admin_users
  FOR ALL USING (
    EXISTS (SELECT 1 FROM admin_users WHERE id = auth.uid() AND role = 'admin')
  );

-- =====================
-- SITE SETTINGS TABLE
-- =====================
CREATE TABLE IF NOT EXISTS site_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  key TEXT UNIQUE NOT NULL,
  value_en TEXT,
  value_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to site_settings" ON site_settings
  FOR SELECT USING (true);

CREATE POLICY "Allow authenticated users to manage site_settings" ON site_settings
  FOR ALL USING (auth.uid() IS NOT NULL);

-- =====================
-- SERVICES TABLE
-- =====================
CREATE TABLE IF NOT EXISTS services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title_en TEXT NOT NULL,
  title_id TEXT NOT NULL,
  description_en TEXT,
  description_id TEXT,
  icon TEXT,
  slug TEXT UNIQUE NOT NULL,
  is_featured BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  meta_title_en TEXT,
  meta_title_id TEXT,
  meta_description_en TEXT,
  meta_description_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE services ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to services" ON services
  FOR SELECT USING (true);

CREATE POLICY "Allow authenticated users to manage services" ON services
  FOR ALL USING (auth.uid() IS NOT NULL);

-- =====================
-- PORTFOLIO TABLE
-- =====================
CREATE TABLE IF NOT EXISTS portfolio (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title_en TEXT NOT NULL,
  title_id TEXT NOT NULL,
  description_en TEXT,
  description_id TEXT,
  client_name TEXT,
  project_url TEXT,
  featured_image TEXT,
  gallery JSONB DEFAULT '[]',
  technologies JSONB DEFAULT '[]',
  results_en TEXT,
  results_id TEXT,
  slug TEXT UNIQUE NOT NULL,
  is_featured BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  meta_title_en TEXT,
  meta_title_id TEXT,
  meta_description_en TEXT,
  meta_description_id TEXT,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE portfolio ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to portfolio" ON portfolio
  FOR SELECT USING (true);

CREATE POLICY "Allow authenticated users to manage portfolio" ON portfolio
  FOR ALL USING (auth.uid() IS NOT NULL);

-- =====================
-- BLOG CATEGORIES TABLE
-- =====================
CREATE TABLE IF NOT EXISTS blog_categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name_en TEXT NOT NULL,
  name_id TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to blog_categories" ON blog_categories
  FOR SELECT USING (true);

CREATE POLICY "Allow authenticated users to manage blog_categories" ON blog_categories
  FOR ALL USING (auth.uid() IS NOT NULL);

-- =====================
-- BLOG POSTS TABLE
-- =====================
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title_en TEXT NOT NULL,
  title_id TEXT NOT NULL,
  excerpt_en TEXT,
  excerpt_id TEXT,
  content_en TEXT,
  content_id TEXT,
  featured_image TEXT,
  slug TEXT UNIQUE NOT NULL,
  category_id UUID REFERENCES blog_categories(id) ON DELETE SET NULL,
  tags JSONB DEFAULT '[]',
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  is_published BOOLEAN DEFAULT false,
  meta_title_en TEXT,
  meta_title_id TEXT,
  meta_description_en TEXT,
  meta_description_id TEXT,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to published blog_posts" ON blog_posts
  FOR SELECT USING (is_published = true OR auth.uid() IS NOT NULL);

CREATE POLICY "Allow authenticated users to manage blog_posts" ON blog_posts
  FOR ALL USING (auth.uid() IS NOT NULL);

-- =====================
-- TEAM MEMBERS TABLE
-- =====================
CREATE TABLE IF NOT EXISTS team_members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  position_en TEXT,
  position_id TEXT,
  bio_en TEXT,
  bio_id TEXT,
  photo TEXT,
  email TEXT,
  linkedin TEXT,
  twitter TEXT,
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to team_members" ON team_members
  FOR SELECT USING (true);

CREATE POLICY "Allow authenticated users to manage team_members" ON team_members
  FOR ALL USING (auth.uid() IS NOT NULL);

-- =====================
-- TESTIMONIALS TABLE
-- =====================
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_name TEXT NOT NULL,
  client_position TEXT,
  client_company TEXT,
  client_photo TEXT,
  content_en TEXT NOT NULL,
  content_id TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  is_featured BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to testimonials" ON testimonials
  FOR SELECT USING (true);

CREATE POLICY "Allow authenticated users to manage testimonials" ON testimonials
  FOR ALL USING (auth.uid() IS NOT NULL);

-- =====================
-- CONTACT SUBMISSIONS TABLE
-- =====================
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert contact submissions
CREATE POLICY "Allow public to insert contact_submissions" ON contact_submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow authenticated users to view contact_submissions" ON contact_submissions
  FOR SELECT USING (auth.uid() IS NOT NULL);

CREATE POLICY "Allow authenticated users to update contact_submissions" ON contact_submissions
  FOR UPDATE USING (auth.uid() IS NOT NULL);

CREATE POLICY "Allow authenticated users to delete contact_submissions" ON contact_submissions
  FOR DELETE USING (auth.uid() IS NOT NULL);

-- =====================
-- HOMEPAGE CONTENT TABLE
-- =====================
CREATE TABLE IF NOT EXISTS homepage_content (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  section TEXT UNIQUE NOT NULL,
  title_en TEXT,
  title_id TEXT,
  subtitle_en TEXT,
  subtitle_id TEXT,
  content_en TEXT,
  content_id TEXT,
  cta_text_en TEXT,
  cta_text_id TEXT,
  cta_link TEXT,
  image TEXT,
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE homepage_content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to homepage_content" ON homepage_content
  FOR SELECT USING (true);

CREATE POLICY "Allow authenticated users to manage homepage_content" ON homepage_content
  FOR ALL USING (auth.uid() IS NOT NULL);

-- =====================
-- MEDIA FILES TABLE
-- =====================
CREATE TABLE IF NOT EXISTS media_files (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  filename TEXT NOT NULL,
  original_name TEXT NOT NULL,
  file_path TEXT NOT NULL,
  file_type TEXT NOT NULL,
  file_size INTEGER,
  alt_text TEXT,
  uploaded_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE media_files ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to media_files" ON media_files
  FOR SELECT USING (true);

CREATE POLICY "Allow authenticated users to manage media_files" ON media_files
  FOR ALL USING (auth.uid() IS NOT NULL);
