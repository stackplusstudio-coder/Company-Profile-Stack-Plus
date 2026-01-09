// Database Types for StackPlus

export interface Service {
  id: string
  title_en: string
  title_id: string
  description_en: string | null
  description_id: string | null
  icon: string | null
  slug: string
  is_featured: boolean
  sort_order: number
  meta_title_en: string | null
  meta_title_id: string | null
  meta_description_en: string | null
  meta_description_id: string | null
  created_at: string
  updated_at: string
}

export interface Portfolio {
  id: string
  title_en: string
  title_id: string
  description_en: string | null
  description_id: string | null
  client_name: string | null
  project_url: string | null
  featured_image: string | null
  gallery: string[]
  technologies: string[]
  results_en: string | null
  results_id: string | null
  slug: string
  is_featured: boolean
  sort_order: number
  meta_title_en: string | null
  meta_title_id: string | null
  meta_description_en: string | null
  meta_description_id: string | null
  published_at: string | null
  created_at: string
  updated_at: string
}

export interface BlogCategory {
  id: string
  name_en: string
  name_id: string
  slug: string
  created_at: string
  updated_at: string
}

export interface BlogPost {
  id: string
  title_en: string
  title_id: string
  excerpt_en: string | null
  excerpt_id: string | null
  content_en: string | null
  content_id: string | null
  featured_image: string | null
  slug: string
  category_id: string | null
  tags: string[]
  author_id: string | null
  is_published: boolean
  meta_title_en: string | null
  meta_title_id: string | null
  meta_description_en: string | null
  meta_description_id: string | null
  published_at: string | null
  created_at: string
  updated_at: string
  category?: BlogCategory
}

export interface TeamMember {
  id: string
  name: string
  position_en: string | null
  position_id: string | null
  bio_en: string | null
  bio_id: string | null
  photo: string | null
  email: string | null
  linkedin: string | null
  twitter: string | null
  sort_order: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Testimonial {
  id: string
  client_name: string
  client_position: string | null
  client_company: string | null
  client_photo: string | null
  content_en: string
  content_id: string
  rating: number | null
  is_featured: boolean
  sort_order: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface ContactSubmission {
  id: string
  name: string
  email: string
  phone: string | null
  company: string | null
  subject: string | null
  message: string
  is_read: boolean
  created_at: string
}

export interface HomepageContent {
  id: string
  section: string
  title_en: string | null
  title_id: string | null
  subtitle_en: string | null
  subtitle_id: string | null
  content_en: string | null
  content_id: string | null
  cta_text_en: string | null
  cta_text_id: string | null
  cta_link: string | null
  image: string | null
  sort_order: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface SiteSetting {
  id: string
  key: string
  value_en: string | null
  value_id: string | null
  created_at: string
  updated_at: string
}

export interface MediaFile {
  id: string
  filename: string
  original_name: string
  file_path: string
  file_type: string
  file_size: number | null
  alt_text: string | null
  uploaded_by: string | null
  created_at: string
}

export type Locale = "en" | "id"

// Helper to get localized content
export function getLocalizedField<T extends Record<string, unknown>>(item: T, field: string, locale: Locale): string {
  const localizedField = `${field}_${locale}` as keyof T
  const fallbackField = `${field}_en` as keyof T
  return (item[localizedField] as string) || (item[fallbackField] as string) || ""
}
