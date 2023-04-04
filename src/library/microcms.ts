import type { MicroCMSQueries } from 'microcms-js-sdk'
import { createClient } from 'microcms-js-sdk'

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN as string,
  apiKey: import.meta.env.MICROCMS_API_KEY as string,
})

export type Blog = {
  id: string
  publishedAt: string
  title: string
  content: string
  category: {
    id: string
    publishedAt: string
    name: string
  }[]
  eyecatch: {
    url: string
    height: number
    width: number
  }
}

export type BlogResponse = {
  totalCount: number
  offset: number
  limit: number
  contents: Blog[]
}

export type CategoryBlogsResponse = {
  id: string
  publishedAt: string
  tags: [
    {
      id: string
      createdAt: string
      updatedAt: string
      publishedAt: string
      revisedAt: string
      title: string
      content: string
      category: [
        {
          id: string
        }
      ]
    }
  ]
  name: string
}

export const getBlogs = async (queries?: MicroCMSQueries) => {
  return await client.get<BlogResponse>({ endpoint: 'blogs', queries })
}
export const getBlogDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  return await client.getListDetail<Blog>({
    endpoint: 'blogs',
    contentId,
    queries,
  })
}
export const getCategoryBlogs = async (categoryId: string, queries?: MicroCMSQueries) => {
  return await client.get<CategoryBlogsResponse>({ endpoint: `categories/${categoryId}`, queries })
}
export const getCategoryBlogDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  return await client.getListDetail<Blog>({
    endpoint: 'categories',
    contentId,
    queries,
  })
}
