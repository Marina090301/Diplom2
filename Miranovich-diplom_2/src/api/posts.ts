import { Post as IPost } from '../api/endpoints/blog';

const mockPosts: IPost[] = [
  {
    id: 1,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quibusdam illo accusamus accusantium vero neque quis saepe molestias corrupti ratione? Eius asperiores omnis natus minima? Distinctio ullam reprehenderit numquam quae.",
    image:
      "https://ss.sport-express.ru/userfiles/materials/186/1869958/volga.jpg",
    date: new Date().toLocaleDateString(),
    lessonNum: 1,
    title: "Название поста 1",
    author: 1,
    like: 3,
    dislike: 5,
    isFavorite: false,
  },
  {
    id: 2,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quibusdam illo accusamus accusantium vero neque quis saepe molestias corrupti ratione? Eius asperiores omnis natus minima? Distinctio ullam reprehenderit numquam quae.",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    date: new Date().toLocaleDateString(),
    lessonNum: 2,
    title: "Название поста 2",
    author: 2,
    like: 5,
    dislike: 1,
    isFavorite: false,
  },
  {
    id: 3,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quibusdam illo accusamus accusantium vero neque quis saepe molestias corrupti ratione? Eius asperiores omnis natus minima? Distinctio ullam reprehenderit numquam quae.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    date: new Date().toLocaleDateString(),
    lessonNum: 3,
    title: "Название поста 3",
    author: 3,
    like: 0,
    dislike: 0,
    isFavorite: false,
  },
  {
    id: 4,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quibusdam illo accusamus accusantium vero neque quis saepe molestias corrupti ratione? Eius asperiores omnis natus minima? Distinctio ullam reprehenderit numquam quae.",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
    date: new Date().toLocaleDateString(),
    lessonNum: 4,
    title: "Название поста 4",
    author: 4,
    like: 0,
    dislike: 0,
    isFavorite: false,
  },
  {
    id: 5,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quibusdam illo accusamus accusantium vero neque quis saepe molestias corrupti ratione? Eius asperiores omnis natus minima? Distinctio ullam reprehenderit numquam quae.",
    image: "https://images.unsplash.com/photo-1558979158-65a1eaa08691",
    date: new Date().toLocaleDateString(),
    lessonNum: 5,
    title: "Название поста 5",
    author: 5,
    like: 0,
    dislike: 0,
    isFavorite: false,
  },
  {
    id: 6,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quibusdam illo accusamus accusantium vero neque quis saepe molestias corrupti ratione? Eius asperiores omnis natus minima? Distinctio ullam reprehenderit numquam quae.",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    date: new Date().toLocaleDateString(),
    lessonNum: 6,
    title: "Название поста 6",
    author: 6,
    like: 10,
    dislike: 0,
    isFavorite: false,
  },
  {
    id: 7,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quibusdam illo accusamus accusantium vero neque quis saepe molestias corrupti ratione? Eius asperiores omnis natus minima? Distinctio ullam reprehenderit numquam quae.",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    date: new Date().toLocaleDateString(),
    lessonNum: 7,
    title: "Название поста 7",
    author: 7,
    like: 22,
    dislike: 0,
    isFavorite: true,
  },
  {
    id: 8,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quibusdam illo accusamus accusantium vero neque quis saepe molestias corrupti ratione? Eius asperiores omnis natus minima? Distinctio ullam reprehenderit numquam quae.",
    image: "https://images.unsplash.com/photo-1534081333815-ae5019106622",
    date: new Date().toLocaleDateString(),
    lessonNum: 8,
    title: "Название поста 8",
    author: 8,
    like: 5,
    dislike: 10,
    isFavorite: true,
  },
  {
    id: 9,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quibusdam illo accusamus accusantium vero neque quis saepe molestias corrupti ratione? Eius asperiores omnis natus minima? Distinctio ullam reprehenderit numquam quae.",
    image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df",
    date: new Date().toLocaleDateString(),
    lessonNum: 9,
    title: "Название поста 9",
    author: 9,
    like: 52,
    dislike: 0,
    isFavorite: true,
  },
  {
    id: 10,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quibusdam illo accusamus accusantium vero neque quis saepe molestias corrupti ratione? Eius asperiores omnis natus minima? Distinctio ullam reprehenderit numquam quae.",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
    date: new Date().toLocaleDateString(),
    lessonNum: 10,
    title: "Название поста 10",
    author: 10,
    like: 52,
    dislike: 0,
    isFavorite: false,
  },
  {
    id: 11,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quibusdam illo accusamus accusantium vero neque quis saepe molestias corrupti ratione? Eius asperiores omnis natus minima? Distinctio ullam reprehenderit numquam quae.",
    image: "https://images.unsplash.com/photo-1558979158-65a1eaa08691",
    date: new Date().toLocaleDateString(),
    lessonNum: 11,
    title: "Название поста 11",
    author: 11,
    like: 52,
    dislike: 0,
    isFavorite: true,
  },
];


// function shuffleArray<T>(array: T[]): T[] {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]]; // меняем элементы местами
//   }
//   return array;
// }

export const getAllPosts = async (): Promise<IPost[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockPosts);
    }, 100);
  });
};

export const getPostById = async (id: number): Promise<IPost | null> => {
  return new Promise((resolve) => {
    const post = mockPosts.find(post => post.id === id) ?? null;

    setTimeout(() => {
      resolve(post);
    }, 0);
  });
};