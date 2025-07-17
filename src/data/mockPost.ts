interface PostInputs {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export const mockPosts: PostInputs[] = [
  {
    id: '1',
    title: 'First Blog Post',
    content: 'This is a sample blog post.',
    createdAt: '2025-05-01',
  },
  {
    id: '2',
    title: 'Second Blog Post',
    content: 'Another example post.',
    createdAt: '2025-05-10',
  },
];
